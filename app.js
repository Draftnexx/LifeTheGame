// app.js

// --- Global Data ---
let achievements = [];

// --- Config & State ---
const STORAGE_KEY = 'la_unlocked'; // Speichert Array von IDs [ "a0001", "a0042", ... ]
const DAILY_KEY = 'la_daily'; // Format: {date: "2024-01-01", id: "a0012"}

let state = {
  unlockedIds: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
  current: null,
  streak: 0,
  dailyDone: null
};

// Check Daily LocalStorage
try {
  const savedDaily = JSON.parse(localStorage.getItem(DAILY_KEY));
  const today = new Date().toISOString().slice(0, 10);
  if (savedDaily && savedDaily.date === today) {
    state.dailyDone = savedDaily;
  }
} catch (e) { console.error("Storage Error", e); }

// DOM Elements
const dom = {
  card: document.getElementById('achievement-card'),
  title: document.getElementById('card-title'),
  desc: document.getElementById('card-desc'),
  pill: document.getElementById('rarity-pill'),
  btnDone: document.getElementById('btn-done'),
  btnShare: document.getElementById('btn-share'),
  stats: document.getElementById('real-stats'),
  overlay: document.getElementById('unlock-overlay'),
  overlayText: document.getElementById('overlay-text'),
  toast: document.getElementById('streak-toast'),
  btnCopyLink: document.getElementById('btn-copy-link'),
  toggleNew: document.getElementById('toggle-new-only'),
  btnReset: document.getElementById('btn-reset'),
};

// --- Initial Data Load ---
async function initApp() {
  try {
    dom.title.textContent = "Lade Daten...";
    dom.desc.textContent = "Bitte warten...";

    // Versuche achievements.json zu laden
    const response = await fetch('achievements.json');
    if (!response.ok) throw new Error('Network error');

    achievements = await response.json();

    console.log(`Loaded ${achievements.length} achievements.`);
    updateStats();
    loadNext(); // Start game

  } catch (err) {
    console.error("Failed to load achievements:", err);
    dom.title.textContent = "Fehler";
    dom.desc.textContent = "Konnte Achievements nicht laden. (Läuft lokal ohne Server?)";
    // Fallback Daten, falls fetch fehlschlägt (z.B. lokale Datei ohne Server)
    achievements = [
      { id: "err01", title: "Offline Modus", desc: "Starte einen lokalen Server (zb Live Server)", rarity: "common" }
    ];
    loadNext();
  }
}

// --- Logik: Weighted Random Selection ---
function getWeightedRandomAchievement() {
  if (achievements.length === 0) return null;

  const onlyNew = dom.toggleNew.checked;
  const today = new Date().toISOString().slice(0, 10);

  // 1. Basis-Pool filtern
  let pool = achievements.filter(a => {
    // Daily Filter: Wenn Daily heute schon gemacht, keine Dailies mehr anzeigen
    if (state.dailyDone && state.dailyDone.date === today && a.daily) return false;

    // New Filter: Wenn Toggle an, nur nicht freigeschaltete
    if (onlyNew && state.unlockedIds.includes(a.id)) return false;

    return true;
  });

  // Fallback: Wenn Pool leer (z.B. alles fertig), toggle-Filter ignorieren, aber Daily Regel bleibt
  if (pool.length === 0 && onlyNew) {
    pool = achievements.filter(a => {
      if (state.dailyDone && state.dailyDone.date === today && a.daily) return false;
      return true;
    });
  }

  if (pool.length === 0) return null; // Sollte kaum passieren außer alles gesperrt

  // 2. Gruppieren nach Rarity in diesem gefilterten Pool
  const commons = pool.filter(a => a.rarity === 'common');
  const rares = pool.filter(a => a.rarity === 'rare');
  const ultras = pool.filter(a => a.rarity === 'ultra');

  // 3. Würfeln (0 - 100) für Rarity-Tier
  const roll = Math.random() * 100;

  // Versuch Reihenfolge: Ultra (1%) -> Rare (9%) -> Common (Rest)
  // Wir wählen eine Gruppe, wenn sie nicht leer ist. Sonst Fallback.

  let targetGroup = commons; // Default 90%

  if (roll > 99) { // 1% Chance
    targetGroup = ultras.length > 0 ? ultras : (rares.length > 0 ? rares : commons);
  } else if (roll > 90) { // 9% Chance
    targetGroup = rares.length > 0 ? rares : (commons.length > 0 ? commons : ultras);
  } else { // 90% Chance
    targetGroup = commons.length > 0 ? commons : (rares.length > 0 ? rares : ultras);
  }

  // Zufälliges Item aus der gewählten Gruppe
  if (targetGroup.length === 0) return pool[0]; // Absolute Fallback
  return targetGroup[Math.floor(Math.random() * targetGroup.length)];
}

function renderCard(ach) {
  if (!ach) {
    dom.title.textContent = "Alles erledigt!";
    dom.desc.textContent = "Komm morgen wieder für Daily Quests.";
    dom.pill.style.display = 'none';
    dom.btnDone.disabled = true;
    return;
  }

  state.current = ach;
  dom.title.textContent = ach.title;
  dom.desc.textContent = ach.text; // Key 'text' statt 'desc' im JSON
  dom.pill.textContent = ach.rarity;
  dom.pill.style.display = 'block';
  dom.card.setAttribute('data-rarity', ach.rarity);

  // Button State wenn unlocked
  const isUnlocked = state.unlockedIds.includes(ach.id);
  dom.btnDone.textContent = isUnlocked ? "Nochmal ✅" : "Erledigt ✅";
  dom.btnDone.style.opacity = isUnlocked ? "0.7" : "1";
  dom.btnDone.disabled = false;
}

function loadNext() {
  const ach = getWeightedRandomAchievement();
  renderCard(ach);
}

// --- Actions ---

function unlock() {
  if (!state.current) return;
  const item = state.current;

  // Logic: Unlocked speichern
  if (!state.unlockedIds.includes(item.id)) {
    state.unlockedIds.push(item.id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.unlockedIds));
    updateStats();
  }

  // Logic: Daily speichern
  if (item.daily) {
    const today = new Date().toISOString().slice(0, 10);
    const dailyObj = { date: today, id: item.id };
    state.dailyDone = dailyObj;
    localStorage.setItem(DAILY_KEY, JSON.stringify(dailyObj));
  }

  // UI: Show Overlay
  let text = "Stabil.";
  if (item.rarity === 'rare') text = "Respekt. Selten.";
  if (item.rarity === 'ultra') text = "Okay... krass.";
  dom.overlayText.textContent = text;

  dom.overlay.classList.remove('hidden');
  dom.overlay.classList.add('show');

  // UI: Card Animation
  dom.card.classList.add('animate-unlock');
  dom.btnDone.disabled = true;

  // Easter Egg Check
  state.streak++;
  if (state.streak % 3 === 0) {
    showStreakToast();
  }

  // Cleanup Timer
  setTimeout(() => {
    dom.overlay.classList.remove('show');
    dom.overlay.classList.add('hidden');
    dom.card.classList.remove('animate-unlock');
    dom.btnDone.disabled = false;
    loadNext();
  }, 2000); // 2s Animationszeit
}

function updateStats() {
  dom.stats.textContent = `Freigeschaltet: ${state.unlockedIds.length} / ${achievements.length}`;
}

// --- Share & Copy ---

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback für ältere Browser
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    return true;
  }
}

function handleShare() {
  if (!state.current) return;
  const text = `Ich habe gerade '${state.current.title}' freigeschaltet – ${state.current.text} #LifeTheGame`;

  copyToClipboard(text).then(() => {
    const oldText = dom.btnShare.textContent;
    dom.btnShare.textContent = "Kopiert! 👌";
    setTimeout(() => dom.btnShare.textContent = oldText, 2000);
  });
}

function showStreakToast() {
  dom.toast.classList.remove('hidden');
  dom.toast.classList.add('show');

  setTimeout(() => {
    dom.toast.classList.remove('show');
    dom.toast.classList.add('hidden');
  }, 8000);
}

// --- Event Listeners ---

dom.btnDone.addEventListener('click', unlock);
dom.btnShare.addEventListener('click', handleShare);
dom.toggleNew.addEventListener('change', loadNext);

dom.btnCopyLink.addEventListener('click', () => {
  copyToClipboard(window.location.href);
  dom.btnCopyLink.textContent = "Link kopiert!";
});

dom.btnReset.addEventListener('click', () => {
  if (confirm("Wirklich alles zurücksetzen?")) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(DAILY_KEY);
    state.unlockedIds = [];
    state.dailyDone = null;
    state.streak = 0;
    updateStats();
    loadNext();
  }
});

// Init
initApp();
