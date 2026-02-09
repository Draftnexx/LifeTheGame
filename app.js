// app.js
/* Achievement: The Game - Core Logic v2.0 */

// --- Config ---
const CONFIG = {
  xpTable: { common: 10, rare: 50, ultra: 200 },
  baseXp: 100, // XP for Level 2
  growthFactor: 1.5,
  storageKey: 'achievement_game_save'
};

// --- State Management ---
let state = {
  unlockedItems: [], // Array of Strings (IDs)
  xp: 0,
  level: 1,
  filterNew: true, // "Nur neue" checkbox
  currentItem: null,
  // Load from storage
  load: function () {
    try {
      const raw = localStorage.getItem(CONFIG.storageKey);
      if (raw) {
        const tv = JSON.parse(raw);
        this.unlockedItems = tv.unlockedItems || [];
        this.xp = tv.xp || 0;
        this.level = tv.level || 1;
      }
    } catch (e) { console.error("Savegame corrup, starting fresh"); }
  },
  save: function () {
    localStorage.setItem(CONFIG.storageKey, JSON.stringify({
      unlockedItems: this.unlockedItems,
      xp: this.xp,
      level: this.level
    }));
    ui.updateStats();
  }
};

// --- UI Controller ---
const ui = {
  // Elements
  card: document.getElementById('card'),
  cardTitle: document.getElementById('card-title'),
  cardDesc: document.getElementById('card-desc'),
  stripe: document.getElementById('rarity-stripe'),
  badgeRarity: document.getElementById('badge-rarity'),
  badgeXp: document.getElementById('badge-xp'),
  badgeDaily: document.getElementById('badge-daily'),
  btn: document.getElementById('btn-unlock'),
  statsTotal: document.getElementById('stats-total'),
  xpBar: document.getElementById('xp-bar'),
  xpCurrent: document.getElementById('xp-current'),
  xpNext: document.getElementById('xp-next'),
  lvlDisplay: document.getElementById('lvl-display'),
  msg: document.getElementById('status-msg'),

  updateStats: function () {
    // Level Calc
    const nextLvlXp = logic.getXpForNextLevel(state.level);

    // XP in Current Level (Visual Bar)
    // Complex logic simplified: We sum up XP of all previous levels to get the "floor" of current level
    let xpFloor = 0;
    for (let i = 1; i < state.level; i++) {
      xpFloor += logic.getXpForNextLevel(i);
    }

    let xpInLevel = Math.max(0, state.xp - xpFloor);
    let xpNeeded = Number(nextLvlXp).toFixed(0); // Actually correct is nextLvlXp for scaling

    // Wait, scaling logic:
    // Level 1 needs 100 XP. User has 50. Bar = 50%.
    // Level 2 needs 150 XP. User has 100+25. Bar 25 / 150? Yes.

    const percent = Math.min(100, (xpInThisLevelOnly(state.level, state.xp) / xpForThisLevel(state.level)) * 100);

    this.xpBar.style.width = `${percent}%`;

    this.lvlDisplay.textContent = state.level;
    this.xpCurrent.textContent = state.xp;
    this.xpNext.textContent = logic.getTotalXpThreshold(state.level); // Show total needed for next level

    this.statsTotal.textContent = `${state.unlockedItems.length} / ${ALL_ITEMS.length}`;
  },

  renderCard: function (item) {
    if (!item) {
      // Empty State
      this.cardTitle.textContent = "Keine Missionen";
      this.cardDesc.textContent = "Du hast alle verfügbaren Achievements in diesem Filter erledigt.";
      this.badgeRarity.textContent = "EMPTY";
      this.btn.classList.add('disabled');
      this.btn.textContent = "NICHTS ZU TUN";
      this.card.removeAttribute('data-rarity');
      return;
    }

    this.btn.classList.remove('disabled');

    // Content
    this.cardTitle.textContent = item.title;
    this.cardDesc.textContent = item.text;

    // Badges
    this.badgeRarity.textContent = item.rarity;
    const reward = CONFIG.xpTable[item.rarity] || 10;
    this.badgeXp.textContent = `+${reward} XP`;

    if (item.daily) this.badgeDaily.classList.remove('hidden');
    else this.badgeDaily.classList.add('hidden');

    // Styles
    this.card.setAttribute('data-rarity', item.rarity);

    // Button State
    if (state.unlockedItems.includes(item.id)) {
      this.btn.textContent = "BEREITS ERLEDIGT ✅";
    } else {
      this.btn.textContent = "ACHIEVEMENT FREISCHALTEN";
    }

    // Status Msg
    if (state.filterNew && item) {
      this.msg.textContent = "";
    }

    // Animation Reset
    this.card.classList.remove('pop-in');
    void this.card.offsetWidth; // Force Reflow
    this.card.classList.add('pop-in');
  },

  triggerUnlockAnim: function () {
    this.card.classList.add('unlocking');
    setTimeout(() => this.card.classList.remove('unlocking'), 500);
  },

  showToast: function (txt) {
    const t = document.getElementById('toast');
    t.innerText = txt;
    t.classList.add('visible');
    setTimeout(() => t.classList.remove('visible'), 2000);
  },

  showLevelUp: function (newLevel) {
    const el = document.getElementById('levelup-overlay');
    document.getElementById('levelup-num').textContent = newLevel;
    el.classList.add('visible');
    setTimeout(() => el.classList.remove('visible'), 2500);
  }
};

// --- Game Logic ---
const logic = {
  // XP math
  getXpForNextLevel: function (lvl) {
    // Returns how much XP a single level *spans*
    // Lvl 1: 100
    // Lvl 2: 150
    return Math.floor(CONFIG.baseXp * Math.pow(CONFIG.growthFactor, lvl - 1));
  },

  getTotalXpThreshold: function (targetLvl) {
    // Returns total XP needed to REACH targetLvl+1
    let total = 0;
    for (let i = 1; i <= targetLvl; i++) {
      total += this.getXpForNextLevel(i);
    }
    return total;
  },

  checkLevelUp: function () {
    // Check if current XP exceeds threshold for next level
    const threshold = this.getTotalXpThreshold(state.level);
    if (state.xp >= threshold) {
      state.level++;
      ui.showLevelUp(state.level);
      // Save immediately happens in main flow
    }
  },

  getNextItem: function () {
    let pool = ALL_ITEMS;

    // Filter
    if (state.filterNew) {
      pool = ALL_ITEMS.filter(item => !state.unlockedItems.includes(item.id));
    }

    // Auto-Fallback logic
    if (pool.length === 0) {
      if (state.filterNew) {
        // If filter is on but empty, show toast and switch filter off? 
        // No, just return nothing or switch pool temporarily?
        // Let's notify user visually in UI instead (Done in renderCard)
        return null;
      }
    }

    // Weighted Random? Or just random.
    // Let's keep it simple random for now as pool is big.
    const rnd = Math.floor(Math.random() * pool.length);
    return pool[rnd];
  },

  unlockCurrent: function () {
    if (!state.currentItem) return;
    const item = state.currentItem;

    if (state.unlockedItems.includes(item.id)) {
      // Already unlocked -> Just skip
      this.cycle();
      return;
    }

    // Logic
    state.unlockedItems.push(item.id);
    const gain = CONFIG.xpTable[item.rarity] || 10;
    state.xp += gain;

    this.checkLevelUp();
    state.save();

    // Visuals
    ui.triggerUnlockAnim();

    // Next
    setTimeout(() => {
      this.cycle();
    }, 500);
  },

  cycle: function () {
    const item = this.getNextItem();

    // Fallback: If Filter New is on, but returns null, it means we are "Done" with new items.
    // We should explicitly handle this state.
    if (!item && state.filterNew) {
      // Switch filter off automatically to keep game running?
      // Or show "All new done"
      // User prefers flow. Let's auto-disable filter if empty and notify.
      const remainingTotal = ALL_ITEMS.filter(i => !state.unlockedItems.includes(i.id)).length;
      if (remainingTotal === 0) {
        alert("Wow! Du hast ALLE 1000 Achievements freigeschaltet. Reset?");
        // Reset logic here or just let them bask in glory
      }
    }

    state.currentItem = item;
    ui.renderCard(item);
  }
};

// Helper for bar calc
function xpForThisLevel(lvl) {
  return logic.getXpForNextLevel(lvl);
}
function xpInThisLevelOnly(lvl, totalXp) {
  let floor = 0;
  for (let i = 1; i < lvl; i++) floor += logic.getXpForNextLevel(i);
  return Math.max(0, totalXp - floor);
}

// --- Init & Events ---

// Button Unlock
ui.btn.addEventListener('click', () => logic.unlockCurrent());

// Button Share
document.getElementById('btn-share').addEventListener('click', () => {
  if (state.currentItem) {
    const text = `🏆 Achievement: The Game\nLvl ${state.level} • "${state.currentItem.title}"\n#AchievementTheGame`;
    navigator.clipboard.writeText(text).then(() => ui.showToast("Text kopiert!"));
  }
});

// Toggle Filter
document.getElementById('toggle-filter').addEventListener('change', (e) => {
  state.filterNew = e.target.checked;
  logic.cycle();
});

// Secret Reset (Triple click Level Badge)
let clickCount = 0;
document.getElementById('level-container').addEventListener('click', () => {
  clickCount++;
  if (clickCount > 5) {
    if (confirm("RESET ALL PROGRESS?")) {
      localStorage.clear();
      location.reload();
    }
    clickCount = 0;
  }
});

// Start
state.load();
logic.cycle();
ui.updateStats();
