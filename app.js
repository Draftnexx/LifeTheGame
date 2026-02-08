// app.js

// --- Config ---
const XP_TABLE = { common: 10, rare: 50, ultra: 200 };
const LEVEL_BASE = 100; // XP needed for lvl 2

// --- State ---
let state = {
  unlocked: JSON.parse(localStorage.getItem('life_unlocks') || '[]'),
  xp: parseInt(localStorage.getItem('life_xp') || '0'),
  level: parseInt(localStorage.getItem('life_lvl') || '1'),
  filterNew: true,
  current: null
};

// --- DOM Cache ---
const el = {
  card: document.getElementById('card'),
  title: document.getElementById('title'),
  desc: document.getElementById('desc'),
  badgeRarity: document.getElementById('badge-rarity'),
  badgeDaily: document.getElementById('badge-daily'),
  xpReward: document.getElementById('xp-reward-val'),
  btn: document.getElementById('btn-main'),
  btnTxt: document.querySelector('.btn-txt'),
  lvlNum: document.getElementById('lvl-num'),
  xpCurrent: document.getElementById('xp-current'),
  xpNext: document.getElementById('xp-next'),
  xpBar: document.getElementById('xp-bar'),
  totalStats: document.getElementById('total-stats'),
  overlay: document.getElementById('overlay-lvl'),
  overlayLvl: document.getElementById('overlay-lvl-num')
};

// --- Core ---

function save() {
  localStorage.setItem('life_unlocks', JSON.stringify(state.unlocked));
  localStorage.setItem('life_xp', state.xp.toString());
  localStorage.setItem('life_lvl', state.level.toString());
  updateStatsUI();
}

function getXpForNextLevel(lvl) {
  return Math.floor(LEVEL_BASE * Math.pow(1.5, lvl - 1));
}

function updateStatsUI() {
  // XP & Level UI
  const nextLvlXp = getXpForNextLevel(state.level);
  el.lvlNum.textContent = state.level;
  el.xpCurrent.textContent = state.xp;
  el.xpNext.textContent = nextLvlXp;

  // Bar Logic
  let xpRequiredForCurrent = 0;
  for (let i = 1; i < state.level; i++) xpRequiredForCurrent += getXpForNextLevel(i);

  const xpInThisLevel = Math.max(0, state.xp - xpRequiredForCurrent);
  const xpNeededForNext = getXpForNextLevel(state.level);

  const percent = Math.min(100, (xpInThisLevel / xpNeededForNext) * 100);
  el.xpBar.style.width = `${percent}%`;

  // Total Stats
  el.totalStats.textContent = `${state.unlocked.length} / ${ALL_ITEMS.length}`;
}

function nextCard() {
  // Filter Pool
  let pool = ALL_ITEMS;
  if (state.filterNew) {
    pool = ALL_ITEMS.filter(a => !state.unlocked.includes(a.id));
  }

  // Fallback if empty
  if (pool.length === 0) {
    if (state.filterNew) {
      pool = ALL_ITEMS;
    } else {
      el.title.textContent = "GAME OVER";
      el.desc.textContent = "Du hast das Leben durchgespielt. Respekt.";
      el.btn.disabled = true;
      return;
    }
  }

  // Pick Random
  const item = pool[Math.floor(Math.random() * pool.length)];
  state.current = item;

  // Render
  el.card.setAttribute('data-rarity', item.rarity);
  el.title.textContent = item.title;
  el.desc.textContent = item.text;
  el.badgeRarity.textContent = item.rarity;

  el.badgeDaily.classList.toggle('hidden', !item.daily);

  const xpVal = XP_TABLE[item.rarity] || 10;
  el.xpReward.textContent = xpVal;

  // Check State
  const isUnlocked = state.unlocked.includes(item.id);
  if (isUnlocked) {
    el.btnTxt.textContent = "BEREITS ERLEDIGT";
    el.btn.classList.add('done');
  } else {
    el.btnTxt.textContent = "ERLEDIGT";
    el.btn.classList.remove('done');
  }
}

function spawnParticles(x, y) {
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    document.body.appendChild(p);

    const angle = Math.random() * Math.PI * 2;
    const velocity = 50 + Math.random() * 150;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;

    p.style.left = x + 'px';
    p.style.top = y + 'px';
    p.style.setProperty('--x', `${tx}px`);
    p.style.setProperty('--y', `${ty}px`);

    setTimeout(() => p.remove(), 1000);
  }
}

function checkLevelUp() {
  let threshold = 0;
  for (let i = 1; i <= state.level; i++) threshold += getXpForNextLevel(i);

  if (state.xp >= threshold) {
    state.level++;
    el.overlayLvl.textContent = state.level;
    el.overlay.classList.add('show');
    setTimeout(() => el.overlay.classList.remove('show'), 2000);
    save();
  }
}

function handleAction(e) {
  if (!state.current) return;
  const item = state.current;

  // Visual Pulse
  el.card.classList.remove('unlocked-pulse');
  void el.card.offsetWidth; // trigger reflow
  el.card.classList.add('unlocked-pulse');

  // Particle Origin
  const rect = el.btn.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  spawnParticles(cx, cy);

  // Logic
  if (!state.unlocked.includes(item.id)) {
    // Unlock New
    state.unlocked.push(item.id);
    const gain = XP_TABLE[item.rarity] || 10;
    state.xp += gain;

    save();
    checkLevelUp();
  }

  // Next Card after delay
  setTimeout(() => {
    nextCard();
  }, 400);
}

// --- Events ---
el.btn.addEventListener('click', handleAction);

document.getElementById('btn-filter').addEventListener('click', () => {
  state.filterNew = !state.filterNew;
  document.getElementById('btn-filter').classList.toggle('active', state.filterNew);
  nextCard();
});

document.getElementById('btn-share').addEventListener('click', () => {
  if (state.current) {
    const txt = `Lvl ${state.level} LifeUser | "${state.current.title}" freigeschaltet. #LifeOS`;
    navigator.clipboard.writeText(txt).then(() => alert("Copied!"));
  }
});

// Init
updateStatsUI();
nextCard();
