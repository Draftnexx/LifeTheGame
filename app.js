// app.js
/* ACHIEVEMENT: THE GAME | Quiet Luxury Edition v4.0 */

// --- DATA: Hand-written, real items ---
const RAW_DATA = [
  // COMMON (1)
  { t: "Aufgestanden", r: "common" }, { t: "Wasser getrunken", r: "common" },
  { t: "Etwas gegessen", r: "common" }, { t: "Fenster geöffnet", r: "common" },
  { t: "Tief durchgeatmet", r: "common" }, { t: "Kurz gesessen", r: "common" },
  { t: "Nachgedacht", r: "common" }, { t: "Müll rausgebracht", r: "common" },
  { t: "Nicht sofort reagiert", r: "common" }, { t: "App geschlossen", r: "common" },
  { t: "Tab geschlossen", r: "common" }, { t: "Licht ausgemacht", r: "common" },
  { t: "Nachricht gelesen", r: "common" }, { t: "Zähne geputzt", r: "common" },
  { t: "Schuhe angezogen", r: "common" }, { t: "Himmel angesehen", r: "common" },
  { t: "Gelächelt", r: "common" }, { t: "Kurz gewartet", r: "common" },
  { t: "Nichts gesagt", r: "common" }, { t: "Zugehört", r: "common" },
  { t: "Ladekabel gefunden", r: "common" }, { t: "Kurz bewegt", r: "common" },
  { t: "Etwas gefunden", r: "common" }, { t: "Etwas weggelegt", r: "common" },

  // RARE (2)
  { t: "Gedanken sortiert", r: "rare" }, { t: "Ruhe bewahrt", r: "rare" },
  { t: "Chaos akzeptiert", r: "rare" }, { t: "Plan gemacht", r: "rare" },
  { t: "Nein gesagt", r: "rare" }, { t: "Grenze gesetzt", r: "rare" },
  { t: "Sich konzentriert", r: "rare" }, { t: "Ehrlich gewesen", r: "rare" },
  { t: "Hilfe angeboten", r: "rare" }, { t: "Etwas beendet", r: "rare" },
  { t: "Nicht abgelenkt", r: "rare" }, { t: "Durchgeatmet", r: "rare" },

  // ULTRA (3)
  { t: "Mut gehabt", r: "ultra" }, { t: "Sich selbst verziehen", r: "ultra" },
  { t: "Angst ausgehalten", r: "ultra" }, { t: "Klarheit gefunden", r: "ultra" },
  { t: "Herz geöffnet", r: "ultra" }, { t: "Einfach vertraut", r: "ultra" },

  // LEGENDARY (4)
  { t: "Frieden gemacht", r: "legendary" }, { t: "Sich akzeptiert", r: "legendary" },
  { t: "Angekommen", r: "legendary" }, { t: "Ganz da", r: "legendary" }
];

const ALL_ITEMS = RAW_DATA.map((item, i) => ({
  id: `a${(i + 1).toString().padStart(3, '0')}`,
  title: item.t,
  rarity: item.r,
  difficulty: item.r === 'common' ? 1 : (item.r === 'rare' ? 2 : (item.r === 'ultra' ? 3 : 4))
}));

// --- CONFIG ---
const CONFIG = {
  storageKey: 'life_unlocked_v4_lux',
  soundEnabled: true,
  volume: 0.15
};

// --- AUDIO (Web Audio API) ---
const audio = {
  ctx: null,
  init: function () {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === 'suspended') this.ctx.resume();
  },
  play: function (type) {
    if (!CONFIG.soundEnabled || !this.ctx) return;
    this.init();
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    const vol = CONFIG.volume;

    if (type === 'common') { // Soft Ping
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, t);
      osc.frequency.exponentialRampToValueAtTime(400, t + 0.15);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(vol, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      osc.start(t); osc.stop(t + 0.3);
    } else if (type === 'rare') { // Richer
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, t);
      osc.frequency.exponentialRampToValueAtTime(1200, t + 0.4);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(vol * 0.8, t + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
      osc.start(t); osc.stop(t + 0.5);
    } else if (type === 'ultra') { // Deep Shimmer
      osc.type = 'sine';
      osc.frequency.setValueAtTime(200, t);
      osc.frequency.linearRampToValueAtTime(300, t + 0.6);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(vol * 1.2, t + 0.1);
      gain.gain.linearRampToValueAtTime(0.001, t + 0.8);
      osc.start(t); osc.stop(t + 0.8);
    } else if (type === 'legendary') { // Ethereal
      osc.type = 'sine';
      osc.frequency.setValueAtTime(110, t);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(vol * 1.5, t + 0.5);
      gain.gain.linearRampToValueAtTime(0.001, t + 2.0);
      osc.start(t); osc.stop(t + 2.0);
    }
  }
};

// --- STATE ---
let state = { unlocked: new Set(), currentItem: null };

// --- DOM ---
const el = {
  card: document.getElementById('card'),
  title: document.getElementById('card-title'),
  diff: document.getElementById('card-difficulty'),
  rarity: document.getElementById('badge-rarity'),
  stats: document.getElementById('real-stats'),
  overlay: document.getElementById('unlock-overlay'),
  toast: document.getElementById('toast'),
  btnUnlock: document.getElementById('btn-unlock'),
  btnSkip: document.getElementById('btn-skip'),
  soundOn: document.querySelector('.sound-on'),
  soundOff: document.querySelector('.sound-off')
};

// --- CORE ---
function load() {
  const raw = localStorage.getItem(CONFIG.storageKey);
  if (raw) JSON.parse(raw).forEach(id => state.unlocked.add(id));
}
function save() {
  localStorage.setItem(CONFIG.storageKey, JSON.stringify([...state.unlocked]));
  updateStats();
}
function updateStats() {
  el.stats.textContent = `${state.unlocked.size} / ${ALL_ITEMS.length}`;
}
function getNext() {
  const pool = ALL_ITEMS.filter(i => !state.unlocked.has(i.id));
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)]; // Pure Random
}

function render(item) {
  if (!item) {
    el.title.innerText = "Alles erledigt";
    el.diff.innerText = "Ende";
    el.btnUnlock.disabled = true;
    el.btnSkip.disabled = true;
    return;
  }
  state.currentItem = item;
  el.title.innerText = item.title;
  el.rarity.innerText = item.rarity;

  // Roman Difficulty
  const roman = ["I", "II", "III", "IV"];
  el.diff.innerText = roman[item.difficulty - 1];

  // Attributes & Animation
  el.card.setAttribute('data-rarity', item.rarity);
  el.card.classList.remove('spawn');
  void el.card.offsetWidth; // Reflow
  el.card.classList.add('spawn');
}

function unlock() {
  const item = state.currentItem;
  if (!item) return;

  // Save
  state.unlocked.add(item.id);
  save();

  // Sound & FX
  audio.play(item.rarity);
  el.card.classList.add('pulse');
  el.overlay.classList.add('visible');

  // Next
  el.btnUnlock.disabled = true;
  setTimeout(() => {
    el.overlay.classList.remove('visible');
    el.card.classList.remove('pulse');
    el.btnUnlock.disabled = false;
    render(getNext());
  }, 900);
}

function skip() {
  el.card.classList.remove('spawn');
  void el.card.offsetWidth;
  render(getNext());
}

function toggleSound() {
  CONFIG.soundEnabled = !CONFIG.soundEnabled;
  el.soundOn.classList.toggle('hidden', !CONFIG.soundEnabled);
  el.soundOff.classList.toggle('hidden', CONFIG.soundEnabled);
}

// --- INIT ---
el.btnUnlock.addEventListener('click', unlock);
el.btnSkip.addEventListener('click', skip);
document.getElementById('btn-sound').addEventListener('click', toggleSound);
document.getElementById('btn-share').addEventListener('click', () => {
  if (state.currentItem) {
    navigator.clipboard.writeText(`Ich habe gerade '${state.currentItem.title}' freigeschaltet.`);
    el.toast.classList.add('visible');
    setTimeout(() => el.toast.classList.remove('visible'), 1500);
  }
});

load();
updateStats();
render(getNext());
