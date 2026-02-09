// app.js
// Logik für ein echtes, ruhiges Achievement-System

// --- Config ---
const CONFIG = {
  // Difficulty als Multiplikator für XP? Nein, wir halten es simpel.
  // difficulty: 1 (Common) bis 4 (Legendary)
  xpMap: { common: 10, rare: 50, ultra: 150, legendary: 500 },
  storageKey: 'archilife_save_v1',
  // Skip-Messages für den Meta-Moment (wertschätzend)
  metaMessages: [
    "Auch das zählt.",
    "Kein Druck.",
    "Alles zu seiner Zeit.",
    "Du musst nichts beweisen.",
    "Heute nicht ist auch okay.",
    "Atmen reicht.",
    "Ruhe bewahren.",
    "Passt schon."
  ]
};

// --- State ---
let state = {
  unlocked: [], // IDs
  level: 1,
  xp: 0,
  skipStreak: 0,
  currentItem: null
};

// --- DOM Cache ---
const ui = {
  card: document.getElementById('card'),
  title: document.getElementById('card-title'),
  desc: document.getElementById('card-desc'),
  badge: document.getElementById('badge-rarity'),
  status: document.getElementById('status-msg'),
  lvl: document.getElementById('lvl-display'),
  stats: document.getElementById('stats-display'),
  overlay: document.getElementById('overlay'),
  overlayNum: document.getElementById('lvl-overlay-num')
};

// --- Logic ---

function load() {
  try {
    const d = JSON.parse(localStorage.getItem(CONFIG.storageKey));
    if (d) {
      state.unlocked = d.unlocked || [];
      state.level = d.level || 1;
      state.xp = d.xp || 0;
    }
  } catch (e) { }
}

function save() {
  localStorage.setItem(CONFIG.storageKey, JSON.stringify({
    unlocked: state.unlocked,
    level: state.level,
    xp: state.xp
  }));
  updateUI();
}

function updateUI() {
  ui.lvl.innerText = state.level;
  ui.stats.innerText = `${state.unlocked.length} / ${ALL_ITEMS.length}`;
}

function getNextItem() {
  // Filter Items: Nicht unlocked
  const pool = ALL_ITEMS.filter(i => !state.unlocked.includes(i.id));
  if (pool.length === 0) return null; // Game Over (oder Prestige)

  // Weighted Random?
  // Hier simpel: Random aus Pool.
  // Optional: Seltene seltener machen?
  // Der User hat schon eine Liste sortiert, wir nehmen einfach random einen verfügbaren.
  return pool[Math.floor(Math.random() * pool.length)];
}

function renderCard(item) {
  if (!item) {
    ui.title.innerText = "Alles erledigt";
    ui.desc.innerText = "Du hast das Ende erreicht.";
    document.getElementById('btn-unlock').disabled = true;
    document.getElementById('btn-skip').disabled = true;
    return;
  }

  state.currentItem = item;

  ui.title.innerText = item.title;
  // Difficulty als subtilen Text/Desc nutzen?
  // User hat keine Descriptions geliefert, außer Titel.
  // Wir nutzen den Rarity-Text als subtile Info.
  let flavor = "Alltag";
  if (item.rarity === 'rare') flavor = "Besonderer Moment";
  if (item.rarity === 'ultra') flavor = "Selten & Kostbar";
  if (item.rarity === 'legendary') flavor = "Existentiell";

  ui.desc.innerText = flavor;

  // Rarity Badge (Deutsch)
  const map = { common: "Gewöhnlich", rare: "Selten", ultra: "Ultra", legendary: "Legendär" };
  ui.badge.innerText = map[item.rarity];

  // CSS Attribute
  ui.card.setAttribute('data-rarity', item.rarity);

  // Animation reset
  ui.card.classList.remove('pop-in');
  void ui.card.offsetWidth;
  ui.card.classList.add('pop-in');
}

function triggerMetaMessage() {
  // Zufälliger, netter Satz bei Skip
  const msg = CONFIG.metaMessages[Math.floor(Math.random() * CONFIG.metaMessages.length)];
  ui.status.innerText = msg;
  ui.status.classList.add('visible');
  setTimeout(() => ui.status.classList.remove('visible'), 2500);
}

function checkLevelUp() {
  // Simpel: Level = Wurzel aus XP / 10? Oder feste Stufen.
  // Level Up alle 250 XP
  const needed = state.level * 250;
  if (state.xp >= needed) {
    state.level++;
    ui.overlayNum.innerText = state.level;
    ui.overlay.classList.add('visible');
    setTimeout(() => ui.overlay.classList.remove('visible'), 2000);
    save();
  }
}

// Actions
function unlock() {
  if (!state.currentItem) return;

  state.skipStreak = 0; // Reset Streak
  state.unlocked.push(state.currentItem.id);

  // XP
  const gain = CONFIG.xpMap[state.currentItem.rarity] || 10;
  state.xp += gain;

  save();
  checkLevelUp();

  setTimeout(() => {
    renderCard(getNextItem());
  }, 200);
}

function skip() {
  // "Vielleicht später"
  state.skipStreak++;

  // Meta Moment bei jedem 3. Skip oder zufällig
  if (state.skipStreak > 2 || Math.random() > 0.7) {
    triggerMetaMessage();
  }

  // Neue Karte nach kurzem Delay
  ui.card.classList.add('shake'); // Leichtes Feedback "Nein"
  setTimeout(() => {
    ui.card.classList.remove('shake');
    renderCard(getNextItem());
  }, 300);
}

// Init
document.getElementById('btn-unlock').addEventListener('click', unlock);
document.getElementById('btn-skip').addEventListener('click', skip);

document.getElementById('btn-share').addEventListener('click', () => {
  if (state.currentItem) navigator.clipboard.writeText(state.currentItem.title);
  ui.status.innerText = "Kopiert";
  ui.status.classList.add('visible');
  setTimeout(() => ui.status.classList.remove('visible'), 1500);
});

load();
updateUI();
renderCard(getNextItem());
