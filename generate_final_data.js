const fs = require('fs');

// --- Word Lists for Generation ---
const themes = [
    { noun: "Kaffee", verbs: ["getrunken", "verschüttet", "gekocht", "inhaliert"], adjs: ["schwarz", "heiß", "kalt", "lebensrettend"] },
    { noun: "WLAN", verbs: ["verbunden", "gesucht", "repariert", "verflucht"], adjs: ["schnell", "langsam", "weg", "instabil"] },
    { noun: "Bett", verbs: ["verlassen", "gemacht", "ignoriert", "gefunden"], adjs: ["warm", "weich", "zu gemütlich", "leer"] },
    { noun: "Bahn", verbs: ["verpasst", "erwischt", "gewartet", "überlebt"], adjs: ["pünktlich", "verspätet", "voll", "leer"] },
    { noun: "Essen", verbs: ["gekocht", "bestellt", "verbrannt", "gegessen"], adjs: ["lecker", "gesund", "ungesund", "teuer"] },
    { noun: "Gedanke", verbs: ["gehabt", "verloren", "aufgeschrieben", "vergessen"], adjs: ["klug", "dumm", "tief", "flach"] },
    { noun: "Handy", verbs: ["geladen", "fallen gelassen", "gesucht", "weggelegt"], adjs: ["leer", "voll", "neu", "kaputt"] },
    { noun: "Fenster", verbs: ["geöffnet", "geschlossen", "geputzt", "angestarrt"], adjs: ["dreckig", "sauber", "groß", "klein"] },
    { noun: "Müll", verbs: ["rausgebracht", "getrennt", "produziert", "ignoriert"], adjs: ["viel", "wenig", "stinkend", "bunt"] },
    { noun: "Wasser", verbs: ["getrunken", "verschüttet", "gespart", "gekauft"], adjs: ["kalt", "klar", "teuer", "billig"] },
    { noun: "Musik", verbs: ["gehört", "gefühlt", "entdeckt", "gehasst"], adjs: ["laut", "leise", "neu", "alt"] },
    { noun: "Arbeit", verbs: ["erledigt", "verschoben", "begonnen", "simuliert"], adjs: ["hart", "leicht", "langweilig", "spannend"] },
    { noun: "Pause", verbs: ["gemacht", "gebraucht", "überzogen", "vergessen"], adjs: ["kurz", "lang", "verdient", "nötig"] },
    { noun: "Code", verbs: ["geschrieben", "gelöscht", "verstanden", "kaputt gemacht"], adjs: ["sauber", "dreckig", "schnell", "langsam"] },
    { noun: "Nachricht", verbs: ["gelesen", "geschrieben", "ignoriert", "gelöscht"], adjs: ["wichtig", "unwichtig", "lustig", "traurig"] },
    { noun: "Sport", verbs: ["gemacht", "geplant", "verschoben", "zugeguckt"], adjs: ["anstrengend", "leicht", "gesund", "tödlich"] },
    { noun: "Geld", verbs: ["ausgegeben", "gespart", "verloren", "gefunden"], adjs: ["viel", "wenig", "bar", "digital"] },
    { noun: "Zeit", verbs: ["genutzt", "verschwendet", "gestoppt", "vergessen"], adjs: ["viel", "wenig", "sinnvoll", "sinnlos"] },
    { noun: "Mensch", verbs: ["getroffen", "gemieden", "gegrüßt", "ignoriert"], adjs: ["nett", "böse", "fremd", "bekannt"] },
    { noun: "Ding", verbs: ["erledigt", "vergessen", "gefunden", "verloren"], adjs: ["wichtig", "unwichtig", "groß", "klein"] }
];

const contexts = [
    "Das war knapp.", "Einfach so.", "Musste sein.", "Warum nicht.", "Respekt.",
    "Stabil.", "Ein Klassiker.", "Gut gemacht.", "Weiter so.", "Nicht schlecht.",
    "Level Up?", "Fast profimäßig.", "Ganz entspannt.", "Ohne Stress.", "Mit Stil.",
    "Ganz ruhig.", "Ganz normal.", "Wie immer.", "Trotzdem.", "Endlich."
];

const ultraTitles = ["Erleuchtung", "Weltfrieden (fast)", "Lotto-Feeling", "Der Auserwählte", "Matrix Hack", "Zeitlord", "Unsterblichkeit", "Alles-Wisser", "Zen-Meister", "Gott-Modus"];
const ultraTexts = ["Du hast das Ende des Internets erreicht.", "Für eine Sekunde hat alles Sinn ergeben.", "Du hast heute wirklich gewonnen.", "Realität erfolgreich manipuliert.", "Du bist der Protagonist.", "Zeit ist nur eine Illusion.", "Du hast den Endgegner besiegt.", "42 ist die Antwort.", "Nichts kann dich stoppen.", "Du spielst in einer eigenen Liga."];

// Helpers
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
const cap = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Generate 1000 items
let items = [];
const signatureSet = new Set();

// 1. Create 5-10 Ultras
for (let i = 0; i < 5; i++) {
    items.push({
        title: ultraTitles[i] || "Ultra Moment",
        text: ultraTexts[i] || "Etwas Unglaubliches ist passiert.",
        rarity: "ultra"
    });
}

// 2. Create ~95 Rares
while (items.length < 100) {
    const t = rand(themes);
    const title = `${t.noun} Master`;
    const text = `Du hast ${t.noun} ${rand(t.verbs)}. Sehr ${rand(t.adjs)}.`;

    if (!signatureSet.has(title + text)) {
        items.push({ title, text, rarity: "rare" });
        signatureSet.add(title + text);
    }
}

// 3. Create ~900 Commons
let attempts = 0;
while (items.length < 1000 && attempts < 10000) {
    const t = rand(themes);
    const verb = rand(t.verbs);
    const adj = rand(t.adjs);
    const ctx = rand(contexts);

    // Variations
    let title = "";
    let text = "";
    const mode = Math.random();

    if (mode < 0.3) {
        title = `${t.noun} ${verb}`;
        text = `${cap(adj)}. ${ctx}`;
    } else if (mode < 0.6) {
        title = `${cap(adj)}en ${t.noun} ${verb}`;
        text = `${ctx} Das zählt.`;
    } else {
        title = `${t.noun}-Check`;
        text = `${cap(verb)}? Ja. ${ctx}`;
    }

    // Clean up title
    if (title.length > 25) title = title.substring(0, 22) + "...";

    const sig = title + text;
    if (!signatureSet.has(sig)) {
        items.push({ title, text, rarity: "common" });
        signatureSet.add(sig);
    }
    attempts++;
}

// Fill up if short
while (items.length < 1000) {
    items.push({
        title: `Lückenfüller ${items.length}`,
        text: "Ein seltener Moment der Leere.",
        rarity: "common"
    });
}

// Assign Daily & IDs
const dailyIndices = new Set();
while (dailyIndices.size < 21) {
    const idx = Math.floor(Math.random() * items.length);
    if (items[idx].rarity !== 'ultra') dailyIndices.add(idx);
}

// Format Output
const finalData = items.map((item, index) => {
    const id = "a" + (index + 1).toString().padStart(4, '0'); // a0001
    let obj = {
        id: id,
        title: item.title,
        text: item.text,
        rarity: item.rarity
    };
    if (dailyIndices.has(index)) obj.daily = true;
    return obj;
});

// Write File
const fileContent = `// data.js
// Generated List of 1000 Achievements
const ALL_ITEMS = ${JSON.stringify(finalData, null, 2)};
`;

fs.writeFileSync('c:/Users/happy/Documents/DraftnexApps/Archilife/data.js', fileContent);
console.log("Done.");
