const fs = require('fs');

// --- Echte, handverlesene Basis-Namen (Keine Generatoren!) ---
// Manuell kuratiert für maximalen Realismus.
const realAchievements = [
    // --- KÖRPER & GESUNDHEIT ---
    "Wasser getrunken", "Tief geatmet", "Aufgestanden", "Hingesetzt", "Gestreckt",
    "Geblinzelt", "Nase geputzt", "Klo gegangen", "Hände gewaschen", "Zähne geputzt",
    "Gesicht gewaschen", "Haare sortiert", "Rücken gerade gemacht", "Schultern entspannt",
    "Kurz Augen zu", "Gepustet", "Geschluckt", "Gekratzt", "Gähnen unterdrückt",
    "Gegähnt", "Geniest", "Hustenreiz unterdrückt", "Puls gefühlt", "Warm angezogen",
    "Socken gewechselt", "Schuhe ausgezogen", "Barfuß gelaufen", "Treppe genommen",
    "Nicht gestolpert", "Balance gehalten", "Etwas Festes gegessen", "Etwas Weiches gegessen",
    "Satt gefühlt", "Hunger ignoriert", "Durst gelöscht", "Flasche aufgefüllt",

    // --- DIGITAL & ARBEIT ---
    "Maus bewegt", "Geklickt", "Tab geschlossen", "Tab geöffnet", "Scrollen gestoppt",
    "Bildschirm geputzt", "Handy weggelegt", "Handy aufgenommen", "Akku gecheckt",
    "Ladekabel gesucht", "WLAN verbunden", "Passwort eingetippt", "Enter gedrückt",
    "Datei gespeichert", "Ordner geöffnet", "Papierkorb geleert", "Update installiert",
    "Nachricht gelesen", "Nachricht ignoriert", "Spam gelöscht", "Nicht geantwortet",
    "Kurz gewartet", "Ladebalken zugesehen", "Fehlermeldung weggeklickt", "Ton ausgemacht",
    "Helligkeit geregelt", "Wecker gestellt", "Wecker ausgemacht", "Nicht gesnoozet",
    "App geschlossen", "App geöffnet", "Verlauf gelöscht", "Cookies akzeptiert",
    "AGB nicht gelesen", "Link kopiert", "Screenshot gemacht", "Tastatur abgestaubt",

    // --- HAUSHALT & UMGEBUNG ---
    "Fenster aufgemacht", "Fenster zugemacht", "Tür abgeschlossen", "Licht angemacht",
    "Licht ausgemacht", "Heizung gedreht", "Müll rausgebracht", "Briefkasten geleert",
    "Schlüssel gesucht", "Schlüssel gefunden", "Tasche gepackt", "Jacke aufgehängt",
    "Schuhe sortiert", "Staub gewischt", "Glas weggestellt", "Teller abgewaschen",
    "Spülmaschine eingeräumt", "Spülmaschine ausgeräumt", "Kühlschrank aufgemacht",
    "Kühlschrank zugemacht", "Einkaufszettel geschrieben", "Pfand weggebracht",
    "Blume gegossen", "Blume angesehen", "Kissen aufgeschüttelt", "Decke gefaltet",
    "Bett gemacht", "Vorhang zugezogen", "Stuhl rangerückt", "Tisch abgewischt",
    "Krümel weggemacht", "Mülleimer getroffen", "Dose geöffnet", "Flasche zugeschraubt",

    // --- MENTAL & SOZIAL ---
    "Danke gesagt", "Bitte gesagt", "Hallo gesagt", "Tschüss gesagt", "Genickt",
    "Gelächelt", "Weggeschaut", "Zugehört", "Nicht unterbrochen", "Gedanke zu Ende gedacht",
    "Nichts gesagt", "Meinung behalten", "Kurz nachgedacht", "Entscheidung getroffen",
    "Plan gemacht", "Ziel gesetzt", "Erinnerung abgerufen", "Namen gemerkt",
    "Datum gewusst", "Uhrzeit gecheckt", "Wochentag gewusst", "Termin eingehalten",
    "Pünktlich gewesen", "Zu spät gekommen", "Entschuldigt", "Jemandem Platz gemacht",
    "Tür aufgehalten", "Vorgelassen", "Nicht gedrängelt", "Abstand gehalten",

    // --- UNTERWEGS & DRAUSSEN ---
    "Rausgegangen", "Himmel angesehen", "Wetter gecheckt", "Regen gespürt", "Sonne gespürt",
    "Wind gespürt", "Schatten gesucht", "Ampel gedrückt", "Bei Grün gegangen",
    "Bei Rot gewartet", "Bus erreicht", "Bahn verpasst", "Ticket gekauft",
    "Sitzplatz gefunden", "Festhalten", "Aussteigen", "Einsteigen", "Straße überquert",
    "Pfütze ausgewichen", "Vogel gesehen", "Hund gesehen", "Auto gehört",
    "Schrittzähler gecheckt", "Weg gefunden", "Nicht verlaufen", "Karte gelesen",

    // --- META & IRONIE (Max 5%) ---
    "Nichts getan", "Einfach existiert", "Zeit verschwendet", "Sinn gesucht",
    "Luft verbraucht", "Schwerkraft genutzt", "Physik akzeptiert", "Realität ertragen",
    "Chaos zugelassen", "Ordnung vorgetäuscht", "Erwachsen gewirkt", "Professionell genickt",
    "Kompetenz simuliert", "Interesse geheuchelt", "Wach geblieben", "Überlebt",
    "Nicht geschrien", "Nicht geweint", "Nicht gelacht", "Ernst geblieben"
];

// Erweiterte Variationen für Masse (1000+), aber strikt nach Muster
const verbs = [
    "gefunden", "gesucht", "verloren", "vergessen", "erinnert", "beachtet",
    "ignoriert", "benutzt", "verwendet", "geprüft", "sortiert", "bewegt",
    "gehalten", "gelassen", "genommen", "gegeben", "gesehen", "gehört"
];

const objects = [
    "Stift", "Zettel", "Buch", "Heft", "Glas", "Tasse", "Löffel", "Gabel",
    "Messer", "Teller", "Serviette", "Tisch", "Stuhl", "Lampe", "Kabel",
    "Stecker", "Dose", "Flasche", "Deckel", "Papier", "Karte", "Ticket",
    "Geld", "Münze", "Schein", "Karte", "Beleg", "Rechnung", "Brief",
    "Schlüssel", "Knopf", "Schalter", "Griff", "Hebel", "Rad", "Reifen",
    "Schuh", "Socke", "Hose", "Hemd", "Jacke", "Mütze", "Schal", "Brille"
];

// Funktion um realistische Kombis zu erzeugen (kein Sinnlos-Quatsch)
function generateRealisticEvents() {
    let events = [...realAchievements]; // Start mit den handverlesenen

    // Generiere plausible Kombinationen (Objekt + Verb)
    // "Stift gefunden", "Stift gesucht", "Stift benutzt" -> realistisch.
    for (let obj of objects) {
        for (let verb of verbs) {
            // Filter unrealistische (z.B. "Tisch gegessen") - hier durch Listenwahl minimiert
            // Aber "Tisch verloren" ist auch komisch.
            // Wir filtern grob
            if (verb === "verloren" && (obj === "Tisch" || obj === "Lampe")) continue;
            if (verb === "vergessen" && (obj === "Tisch")) continue;

            // Zufallselement damit nicht alles gleich klingt
            if (Math.random() > 0.4) {
                events.push(`${obj} ${verb}`);
            }
        }
    }

    // Auffüllen bis 1000 mit Variationen
    let i = 0;
    while (events.length < 1000) {
        const base = realAchievements[i % realAchievements.length];
        const variants = [" wieder", " noch mal", " heute", " kurz", " schnell", " langsam", " endlich", " sofort"];
        const variant = variants[Math.floor(Math.random() * variants.length)];

        // Vermeide doppelte
        const newEvent = base + variant;
        if (!events.includes(newEvent)) events.push(newEvent);

        i++;
    }

    return events.slice(0, 1000); // Exakt 1000
}

// Generate IDs and Structure
const rawEvents = generateRealisticEvents();
const finalData = rawEvents.map((title, index) => {
    // Rarity Verteilung: 90% Common, 9% Rare, 1% Ultra
    let rar = "common";
    let txt = "Alltag.";
    const rnd = Math.random();

    if (rnd > 0.99) {
        rar = "ultra";
        txt = "Ein seltener Moment.";
    } else if (rnd > 0.90) {
        rar = "rare";
        txt = "Nicht schlecht.";
    }

    // Text Variationen für Realismus
    const flavorTexts = [
        "Muss auch gemacht werden.", "Einfach erledigt.", "Ohne großes Drama.",
        "Haken dran.", "Weiter geht's.", "Standard.", "Routine.", "Gut so.",
        "Erledigt.", "Abgehakt.", "Check.", "Passt.", "In Ordnung.", "Okay.",
        "Läuft.", "Stabil.", "Solide.", "Machbar.", "Ganz normal."
    ];

    // Überschreibe Text für Ultras
    if (rar === "ultra") {
        txt = "Das passiert nicht oft.";
    } else {
        txt = flavorTexts[Math.floor(Math.random() * flavorTexts.length)];
    }

    return {
        id: "a" + (index + 1).toString().padStart(4, '0'),
        title: title,
        text: txt,
        rarity: rar,
        daily: Math.random() > 0.98 // ca 20 dailies
    };
});

// Write File
const content = `// data.js
// 1000 Realistische Achievements (v3.0)
const ALL_ITEMS = ${JSON.stringify(finalData, null, 2)};
`;

fs.writeFileSync('c:/Users/happy/Documents/DraftnexApps/Archilife/data.js', content);
console.log("Done.");
