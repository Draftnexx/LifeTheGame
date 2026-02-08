// data.js
const ALL_ITEMS = [
    { id: "a001", title: "Existenzbeweis", text: "Du bist da. Das ist der erste Schritt.", rarity: "common" },
    { id: "a002", title: "Hydration", text: "Ein Schluck Wasser. Lebenselixier getankt.", rarity: "common", daily: true },
    { id: "a003", title: "Fensterblick", text: "Die Außenwelt ist noch da. Gut zu wissen.", rarity: "common" },
    { id: "a004", title: "Touch Grass", text: "Echte Natur berührt. Grafik ist okay.", rarity: "rare" },
    { id: "a005", title: "Deep Work", text: "10 Minuten konzentriert. Respekt.", rarity: "rare" },
    { id: "a006", title: "The Matrix", text: "Du hast den Code verstanden. Vielleicht.", rarity: "ultra" },
    // Füllmaterial für Demo:
    ...Array.from({ length: 50 }, (_, i) => ({
        id: `gen_${i}`,
        title: `Mission #${i + 7}`,
        text: "Ein weiterer Schritt zur Weltherrschaft.",
        rarity: Math.random() > 0.8 ? (Math.random() > 0.8 ? "ultra" : "rare") : "common"
    }))
];
