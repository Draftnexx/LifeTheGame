const fs = require('fs');
const path = require('path');

// Output file path
const OUT_FILE = 'c:/Users/happy/Documents/DraftnexApps/Archilife/achievements.json';

// --- Wortlisten & Templates ---
const verbs = [
    "geatmet", "geblinzelt", "genickt", "gestanden", "gesessen", "gewartet", "gedacht", "geschwiegen",
    "zugehört", "weggesehen", "aufgestanden", "hingelegt", "getrunken", "gegessen", "gelächelt",
    "geseufzt", "gedehnt", "gekratzt", "geblieben", "gegangen", "gerannt", "geschlafen", "gewacht",
    "getippt", "gescrollt", "geklickt", "gedrückt", "gezogen", "geschoben", "gehalten", "gelassen",
    "ignoriert", "akzeptiert", "toleriert", "probiert", "versucht", "geschafft", "beendet", "begonnen",
    "pausiert", "reflektiert", "existiert", "überlebt", "gewonnen", "verloren", "vergessen", "erinnert",
    "bemerkt", "beobachtet", "analysiert", "entschieden", "verworfen", "geplant", "verschoben"
];

const nouns = [
    "Fenster", "Tür", "Handy", "Wasser", "Luft", "Boden", "Decke", "Gedanke", "Wille", "Plan",
    "Chaos", "Ruhe", "Lärm", "Stille", "Nichts", "Alles", "Zeit", "Raum", "Licht", "Schatten",
    "Maus", "Tastatur", "Bildschirm", "Kaffee", "Tee", "Brot", "Welt", "Leben", "Tag", "Nacht",
    "Moment", "Sekunde", "Minute", "Stunde", "Energie", "Kraft", "Mut", "Angst", "Freude", "Wut",
    "Frage", "Antwort", "Sinn", "Unsinn", "Logik", "Fehler", "Bug", "Feature", "Daten", "Code",
    "Bett", "Sofa", "Stuhl", "Tisch", "Glas", "Flasche", "Buch", "Stift", "Zettel", "Idee"
];

const adjectives = [
    "kurz", "lang", "tief", "wild", "ruhig", "schnell", "leise", "laut", "hell", "dunkel",
    "kalt", "warm", "hart", "weich", "schwer", "leicht", "gut", "schlecht", "egal", "wichtig",
    "falsch", "richtig", "echt", "fake", "neu", "alt", "frei", "fest", "offen", "zu",
    "stark", "schwach", "ganz", "halb", "voll", "leer", "klar", "trüb", "bunt", "grau",
    "nett", "böse", "klug", "dumm", "früh", "spät", "müde", "wach", "satt", "hungrig",
    "stabil", "episch", "solide", "minimal", "maximal", "optimal", "digital", "analog"
];

const contexts = [
    "Trotzdem.", "Einfach so.", "Musste sein.", "Warum nicht.", "Ging nicht anders.",
    "War okay.", "Besser so.", "Fast.", "Sogar zwei Mal.", "Ohne Grund.",
    "Für die Wissenschaft.", "Aus Prinzip.", "Ganz ruhig.", "Ganz entspannt.",
    "Mit System.", "Ohne Plan.", "Zufall?", "Schicksal.", "Karma.", "Meta.",
    "Wie ein NPC.", "Main Character Energy.", "Speedrun Strat.", "Glitchless.", "Any%."
];

// --- Datenstrukturen ---

// 5 Ultras (Handverlesen)
const ultras = [
    { title: "Sinn des Lebens", text: "42. Oder Schokolade. Man weiß es nicht." },
    { title: "Durchgespielt", text: "Du hast das Ende des Internets erreicht." },
    { title: "Erleuchtung", text: "Für eine Sekunde hat alles Sinn ergeben." },
    { title: "Der Auserwählte", text: "Du bist der Protagonist. Glaube ich." },
    { title: "Realität gecheckt", text: "Glitch in der Matrix gefunden." }
];

// Templates für Rare
const rareTemplates = [
    "Echt jetzt: ${Noun} ${Verb}", "Meisterleistung: ${Noun}", "Kein ${Noun} heute",
    "${Adjective} ${Noun} gefunden", "Level Up: ${Noun}", "${Noun} gemeistert",
    "Endgegner ${Noun}", "${Noun} bezwungen", "Perfektes ${Noun}", "Ultimative ${Noun}",
    "Mega ${Noun}", "Ultra ${Verb}", "Hardcore ${Noun}"
];

// --- Helpers ---
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
const cap = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function generateCommon() {
    const mode = Math.random();
    let title = "";
    let text = "";

    if (mode < 0.25) {
        title = `${cap(rand(nouns))} ${rand(verbs)}`;
        text = `Das war ${rand(adjectives)}. ${rand(contexts)}`;
    } else if (mode < 0.5) {
        title = `${cap(rand(adjectives))} ${rand(verbs)}`;
        text = `Hauptsache ${rand(nouns)}. ${rand(contexts)}`;
    } else if (mode < 0.75) {
        title = `Nicht ${rand(verbs)}`;
        text = `Auch eine Leistung. ${rand(contexts)}`;
    } else {
        title = `${cap(rand(nouns))}?`;
        text = `${cap(rand(adjectives))}. Definitiv ${rand(adjectives)}.`;
    }

    // Safety Truncate
    if (title.split(' ').length > 4) title = title.split(' ').slice(0, 4).join(' ');

    return { title, text };
}

function generateRare() {
    const tpl = rand(rareTemplates);
    const title = tpl.replace('${Noun}', cap(rand(nouns)))
        .replace('${Verb}', rand(verbs))
        .replace('${Adjective}', cap(rand(adjectives)));

    const text = `Respekt. Das macht nicht jeder mit ${rand(nouns)}.`;
    return { title, text };
}

// --- Generation Flow ---
const all = [];
const signatureSet = new Set(); // To avoid dupes (title+text)

// 1. Add Ultras (5)
ultras.forEach(u => {
    all.push({ ...u, rarity: 'ultra' });
    signatureSet.add(u.title + u.text);
});

// 2. Add Rares (95)
let safety = 0;
while (all.length < 100 && safety < 5000) {
    const { title, text } = generateRare();
    const sig = title + text;
    if (!signatureSet.has(sig)) {
        all.push({ title, text, rarity: 'rare' });
        signatureSet.add(sig);
    }
    safety++;
}

// 3. Add Commons (900 -> Total 1000)
safety = 0;
while (all.length < 1000 && safety < 20000) {
    const { title, text } = generateCommon();
    const sig = title + text;
    if (!signatureSet.has(sig)) {
        all.push({ title, text, rarity: 'common' });
        signatureSet.add(sig);
    }
    safety++;
}

// Fallback if loop ends early
while (all.length < 1000) {
    all.push({
        title: `Backup ${all.length}`,
        text: "Ein Platzhalter für die Ewigkeit.",
        rarity: 'common'
    });
}

// 4. Assign daily:true to EXACTLY 21 non-ultra items
const eligibleIndices = all.map((_, i) => i).filter(i => all[i].rarity !== 'ultra');
const dailyIndices = new Set();

while (dailyIndices.size < 21) {
    const rndIndex = Math.floor(Math.random() * eligibleIndices.length);
    dailyIndices.add(eligibleIndices[rndIndex]);
}

// 5. Final Mapping with IDs
const finalData = all.map((item, index) => {
    const id = "a" + (index + 1).toString().padStart(4, '0');
    const obj = {
        id: id,
        title: item.title,
        text: item.text,
        rarity: item.rarity
    };
    if (dailyIndices.has(index)) { // Check original index (arrays are aligned)
        // Wait, eligibleIndices maps to original index, but we picked from eligibleIndices which are indices.
        // wait. dailyIndices stores the VALUES from eligibleIndices.
        // Yes logic is: eligibleIndices = [0, 1, 2, ...]. rndIndex = X. dailyIndices.add(eligibleIndices[X]). Correct.
        obj.daily = true;
    }
    return obj;
});

// Write File
fs.writeFileSync(OUT_FILE, JSON.stringify(finalData, null, 2));
console.log(`Generated ${finalData.length} achievements.`);
