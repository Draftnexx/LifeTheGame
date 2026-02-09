// data.js
// 1000 Realistische Achievements (v3.0)
const ALL_ITEMS = [
  {
    "id": "a0001",
    "title": "Wasser getrunken",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0002",
    "title": "Tief geatmet",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0003",
    "title": "Aufgestanden",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0004",
    "title": "Hingesetzt",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0005",
    "title": "Gestreckt",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0006",
    "title": "Geblinzelt",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0007",
    "title": "Nase geputzt",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0008",
    "title": "Klo gegangen",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0009",
    "title": "Hände gewaschen",
    "text": "Stabil.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0010",
    "title": "Zähne geputzt",
    "text": "Machbar.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0011",
    "title": "Gesicht gewaschen",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0012",
    "title": "Haare sortiert",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0013",
    "title": "Rücken gerade gemacht",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0014",
    "title": "Schultern entspannt",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0015",
    "title": "Kurz Augen zu",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0016",
    "title": "Gepustet",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0017",
    "title": "Geschluckt",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0018",
    "title": "Gekratzt",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0019",
    "title": "Gähnen unterdrückt",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0020",
    "title": "Gegähnt",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0021",
    "title": "Geniest",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0022",
    "title": "Hustenreiz unterdrückt",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0023",
    "title": "Puls gefühlt",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0024",
    "title": "Warm angezogen",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0025",
    "title": "Socken gewechselt",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0026",
    "title": "Schuhe ausgezogen",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0027",
    "title": "Barfuß gelaufen",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0028",
    "title": "Treppe genommen",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0029",
    "title": "Nicht gestolpert",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0030",
    "title": "Balance gehalten",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0031",
    "title": "Etwas Festes gegessen",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0032",
    "title": "Etwas Weiches gegessen",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0033",
    "title": "Satt gefühlt",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0034",
    "title": "Hunger ignoriert",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0035",
    "title": "Durst gelöscht",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0036",
    "title": "Flasche aufgefüllt",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0037",
    "title": "Maus bewegt",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0038",
    "title": "Geklickt",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0039",
    "title": "Tab geschlossen",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0040",
    "title": "Tab geöffnet",
    "text": "Läuft.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0041",
    "title": "Scrollen gestoppt",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0042",
    "title": "Bildschirm geputzt",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0043",
    "title": "Handy weggelegt",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0044",
    "title": "Handy aufgenommen",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0045",
    "title": "Akku gecheckt",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0046",
    "title": "Ladekabel gesucht",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0047",
    "title": "WLAN verbunden",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0048",
    "title": "Passwort eingetippt",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0049",
    "title": "Enter gedrückt",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0050",
    "title": "Datei gespeichert",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0051",
    "title": "Ordner geöffnet",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0052",
    "title": "Papierkorb geleert",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0053",
    "title": "Update installiert",
    "text": "Ohne großes Drama.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0054",
    "title": "Nachricht gelesen",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0055",
    "title": "Nachricht ignoriert",
    "text": "Erledigt.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0056",
    "title": "Spam gelöscht",
    "text": "Das passiert nicht oft.",
    "rarity": "ultra",
    "daily": false
  },
  {
    "id": "a0057",
    "title": "Nicht geantwortet",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0058",
    "title": "Kurz gewartet",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0059",
    "title": "Ladebalken zugesehen",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0060",
    "title": "Fehlermeldung weggeklickt",
    "text": "Muss auch gemacht werden.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0061",
    "title": "Ton ausgemacht",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0062",
    "title": "Helligkeit geregelt",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0063",
    "title": "Wecker gestellt",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0064",
    "title": "Wecker ausgemacht",
    "text": "Das passiert nicht oft.",
    "rarity": "ultra",
    "daily": false
  },
  {
    "id": "a0065",
    "title": "Nicht gesnoozet",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0066",
    "title": "App geschlossen",
    "text": "Muss auch gemacht werden.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0067",
    "title": "App geöffnet",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0068",
    "title": "Verlauf gelöscht",
    "text": "Abgehakt.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0069",
    "title": "Cookies akzeptiert",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0070",
    "title": "AGB nicht gelesen",
    "text": "In Ordnung.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0071",
    "title": "Link kopiert",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0072",
    "title": "Screenshot gemacht",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0073",
    "title": "Tastatur abgestaubt",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0074",
    "title": "Fenster aufgemacht",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0075",
    "title": "Fenster zugemacht",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0076",
    "title": "Tür abgeschlossen",
    "text": "Muss auch gemacht werden.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0077",
    "title": "Licht angemacht",
    "text": "Läuft.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0078",
    "title": "Licht ausgemacht",
    "text": "Ohne großes Drama.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0079",
    "title": "Heizung gedreht",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0080",
    "title": "Müll rausgebracht",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0081",
    "title": "Briefkasten geleert",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0082",
    "title": "Schlüssel gesucht",
    "text": "Einfach erledigt.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0083",
    "title": "Schlüssel gefunden",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": true
  },
  {
    "id": "a0084",
    "title": "Tasche gepackt",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0085",
    "title": "Jacke aufgehängt",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0086",
    "title": "Schuhe sortiert",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0087",
    "title": "Staub gewischt",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0088",
    "title": "Glas weggestellt",
    "text": "Ohne großes Drama.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0089",
    "title": "Teller abgewaschen",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0090",
    "title": "Spülmaschine eingeräumt",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0091",
    "title": "Spülmaschine ausgeräumt",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0092",
    "title": "Kühlschrank aufgemacht",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0093",
    "title": "Kühlschrank zugemacht",
    "text": "Solide.",
    "rarity": "common",
    "daily": true
  },
  {
    "id": "a0094",
    "title": "Einkaufszettel geschrieben",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0095",
    "title": "Pfand weggebracht",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0096",
    "title": "Blume gegossen",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0097",
    "title": "Blume angesehen",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0098",
    "title": "Kissen aufgeschüttelt",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0099",
    "title": "Decke gefaltet",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0100",
    "title": "Bett gemacht",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0101",
    "title": "Vorhang zugezogen",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0102",
    "title": "Stuhl rangerückt",
    "text": "Haken dran.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0103",
    "title": "Tisch abgewischt",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0104",
    "title": "Krümel weggemacht",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0105",
    "title": "Mülleimer getroffen",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0106",
    "title": "Dose geöffnet",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0107",
    "title": "Flasche zugeschraubt",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0108",
    "title": "Danke gesagt",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0109",
    "title": "Bitte gesagt",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0110",
    "title": "Hallo gesagt",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0111",
    "title": "Tschüss gesagt",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0112",
    "title": "Genickt",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0113",
    "title": "Gelächelt",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0114",
    "title": "Weggeschaut",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0115",
    "title": "Zugehört",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0116",
    "title": "Nicht unterbrochen",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0117",
    "title": "Gedanke zu Ende gedacht",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0118",
    "title": "Nichts gesagt",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0119",
    "title": "Meinung behalten",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0120",
    "title": "Kurz nachgedacht",
    "text": "Ganz normal.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0121",
    "title": "Entscheidung getroffen",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0122",
    "title": "Plan gemacht",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0123",
    "title": "Ziel gesetzt",
    "text": "Routine.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0124",
    "title": "Erinnerung abgerufen",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0125",
    "title": "Namen gemerkt",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0126",
    "title": "Datum gewusst",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0127",
    "title": "Uhrzeit gecheckt",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0128",
    "title": "Wochentag gewusst",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0129",
    "title": "Termin eingehalten",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0130",
    "title": "Pünktlich gewesen",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0131",
    "title": "Zu spät gekommen",
    "text": "Läuft.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0132",
    "title": "Entschuldigt",
    "text": "Solide.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0133",
    "title": "Jemandem Platz gemacht",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0134",
    "title": "Tür aufgehalten",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0135",
    "title": "Vorgelassen",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0136",
    "title": "Nicht gedrängelt",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0137",
    "title": "Abstand gehalten",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0138",
    "title": "Rausgegangen",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0139",
    "title": "Himmel angesehen",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0140",
    "title": "Wetter gecheckt",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0141",
    "title": "Regen gespürt",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0142",
    "title": "Sonne gespürt",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0143",
    "title": "Wind gespürt",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0144",
    "title": "Schatten gesucht",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0145",
    "title": "Ampel gedrückt",
    "text": "Das passiert nicht oft.",
    "rarity": "ultra",
    "daily": false
  },
  {
    "id": "a0146",
    "title": "Bei Grün gegangen",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0147",
    "title": "Bei Rot gewartet",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0148",
    "title": "Bus erreicht",
    "text": "Erledigt.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0149",
    "title": "Bahn verpasst",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0150",
    "title": "Ticket gekauft",
    "text": "Weiter geht's.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0151",
    "title": "Sitzplatz gefunden",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0152",
    "title": "Festhalten",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0153",
    "title": "Aussteigen",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0154",
    "title": "Einsteigen",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0155",
    "title": "Straße überquert",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0156",
    "title": "Pfütze ausgewichen",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0157",
    "title": "Vogel gesehen",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0158",
    "title": "Hund gesehen",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0159",
    "title": "Auto gehört",
    "text": "Muss auch gemacht werden.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0160",
    "title": "Schrittzähler gecheckt",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0161",
    "title": "Weg gefunden",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0162",
    "title": "Nicht verlaufen",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0163",
    "title": "Karte gelesen",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0164",
    "title": "Nichts getan",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0165",
    "title": "Einfach existiert",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0166",
    "title": "Zeit verschwendet",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0167",
    "title": "Sinn gesucht",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0168",
    "title": "Luft verbraucht",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0169",
    "title": "Schwerkraft genutzt",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0170",
    "title": "Physik akzeptiert",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0171",
    "title": "Realität ertragen",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0172",
    "title": "Chaos zugelassen",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0173",
    "title": "Ordnung vorgetäuscht",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0174",
    "title": "Erwachsen gewirkt",
    "text": "Standard.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0175",
    "title": "Professionell genickt",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0176",
    "title": "Kompetenz simuliert",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0177",
    "title": "Interesse geheuchelt",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0178",
    "title": "Wach geblieben",
    "text": "Standard.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0179",
    "title": "Überlebt",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0180",
    "title": "Nicht geschrien",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0181",
    "title": "Nicht geweint",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0182",
    "title": "Nicht gelacht",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0183",
    "title": "Ernst geblieben",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0184",
    "title": "Stift gesucht",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0185",
    "title": "Stift verloren",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0186",
    "title": "Stift vergessen",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0187",
    "title": "Stift erinnert",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0188",
    "title": "Stift ignoriert",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0189",
    "title": "Stift benutzt",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0190",
    "title": "Stift verwendet",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0191",
    "title": "Stift sortiert",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0192",
    "title": "Stift bewegt",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0193",
    "title": "Stift gehalten",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0194",
    "title": "Stift gelassen",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0195",
    "title": "Stift genommen",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0196",
    "title": "Stift gegeben",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0197",
    "title": "Stift gesehen",
    "text": "Routine.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0198",
    "title": "Zettel gefunden",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0199",
    "title": "Zettel gesucht",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0200",
    "title": "Zettel vergessen",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0201",
    "title": "Zettel beachtet",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0202",
    "title": "Zettel sortiert",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0203",
    "title": "Zettel bewegt",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0204",
    "title": "Zettel gehalten",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0205",
    "title": "Zettel genommen",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0206",
    "title": "Zettel gesehen",
    "text": "Ohne großes Drama.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0207",
    "title": "Zettel gehört",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0208",
    "title": "Buch gefunden",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0209",
    "title": "Buch verloren",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0210",
    "title": "Buch erinnert",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0211",
    "title": "Buch ignoriert",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0212",
    "title": "Buch benutzt",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0213",
    "title": "Buch geprüft",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0214",
    "title": "Buch sortiert",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0215",
    "title": "Buch bewegt",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0216",
    "title": "Buch gehalten",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0217",
    "title": "Buch gegeben",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0218",
    "title": "Buch gesehen",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0219",
    "title": "Heft verloren",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0220",
    "title": "Heft vergessen",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0221",
    "title": "Heft erinnert",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0222",
    "title": "Heft beachtet",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0223",
    "title": "Heft ignoriert",
    "text": "Check.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0224",
    "title": "Heft benutzt",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0225",
    "title": "Heft verwendet",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0226",
    "title": "Heft sortiert",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0227",
    "title": "Heft bewegt",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0228",
    "title": "Heft gehalten",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0229",
    "title": "Heft gelassen",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0230",
    "title": "Heft genommen",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0231",
    "title": "Heft gegeben",
    "text": "In Ordnung.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0232",
    "title": "Heft gesehen",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0233",
    "title": "Heft gehört",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0234",
    "title": "Glas gesucht",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0235",
    "title": "Glas verloren",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0236",
    "title": "Glas vergessen",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0237",
    "title": "Glas erinnert",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0238",
    "title": "Glas beachtet",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0239",
    "title": "Glas ignoriert",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0240",
    "title": "Glas benutzt",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0241",
    "title": "Glas verwendet",
    "text": "In Ordnung.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0242",
    "title": "Glas geprüft",
    "text": "Gut so.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0243",
    "title": "Glas genommen",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0244",
    "title": "Glas gesehen",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0245",
    "title": "Tasse verloren",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0246",
    "title": "Tasse vergessen",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0247",
    "title": "Tasse erinnert",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0248",
    "title": "Tasse beachtet",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0249",
    "title": "Tasse ignoriert",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0250",
    "title": "Tasse verwendet",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0251",
    "title": "Tasse geprüft",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0252",
    "title": "Tasse bewegt",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0253",
    "title": "Tasse gehalten",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0254",
    "title": "Tasse gegeben",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": true
  },
  {
    "id": "a0255",
    "title": "Tasse gesehen",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0256",
    "title": "Tasse gehört",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0257",
    "title": "Löffel gefunden",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0258",
    "title": "Löffel verloren",
    "text": "Routine.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0259",
    "title": "Löffel vergessen",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0260",
    "title": "Löffel erinnert",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0261",
    "title": "Löffel beachtet",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0262",
    "title": "Löffel ignoriert",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0263",
    "title": "Löffel benutzt",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0264",
    "title": "Löffel verwendet",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0265",
    "title": "Löffel geprüft",
    "text": "Das passiert nicht oft.",
    "rarity": "ultra",
    "daily": false
  },
  {
    "id": "a0266",
    "title": "Löffel sortiert",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0267",
    "title": "Löffel bewegt",
    "text": "Standard.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0268",
    "title": "Löffel gehalten",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0269",
    "title": "Löffel genommen",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0270",
    "title": "Löffel gesehen",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0271",
    "title": "Löffel gehört",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0272",
    "title": "Gabel gefunden",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0273",
    "title": "Gabel vergessen",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0274",
    "title": "Gabel erinnert",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0275",
    "title": "Gabel benutzt",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0276",
    "title": "Gabel geprüft",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0277",
    "title": "Gabel bewegt",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0278",
    "title": "Gabel gehört",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0279",
    "title": "Messer gesucht",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0280",
    "title": "Messer vergessen",
    "text": "Solide.",
    "rarity": "common",
    "daily": true
  },
  {
    "id": "a0281",
    "title": "Messer benutzt",
    "text": "Haken dran.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0282",
    "title": "Messer sortiert",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0283",
    "title": "Messer bewegt",
    "text": "Läuft.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0284",
    "title": "Messer gelassen",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0285",
    "title": "Messer genommen",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0286",
    "title": "Messer gegeben",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0287",
    "title": "Messer gehört",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0288",
    "title": "Teller vergessen",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0289",
    "title": "Teller beachtet",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0290",
    "title": "Teller benutzt",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0291",
    "title": "Teller verwendet",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0292",
    "title": "Teller geprüft",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0293",
    "title": "Teller sortiert",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0294",
    "title": "Teller gelassen",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0295",
    "title": "Teller genommen",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0296",
    "title": "Teller gegeben",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0297",
    "title": "Serviette gefunden",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0298",
    "title": "Serviette gesucht",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0299",
    "title": "Serviette verloren",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0300",
    "title": "Serviette vergessen",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0301",
    "title": "Serviette erinnert",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0302",
    "title": "Serviette benutzt",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0303",
    "title": "Serviette verwendet",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0304",
    "title": "Serviette sortiert",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0305",
    "title": "Serviette bewegt",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0306",
    "title": "Serviette genommen",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0307",
    "title": "Serviette gegeben",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0308",
    "title": "Serviette gehört",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0309",
    "title": "Tisch beachtet",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0310",
    "title": "Tisch ignoriert",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0311",
    "title": "Tisch benutzt",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0312",
    "title": "Tisch verwendet",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0313",
    "title": "Tisch geprüft",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0314",
    "title": "Tisch sortiert",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0315",
    "title": "Tisch gelassen",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0316",
    "title": "Tisch genommen",
    "text": "Das passiert nicht oft.",
    "rarity": "ultra",
    "daily": false
  },
  {
    "id": "a0317",
    "title": "Tisch gegeben",
    "text": "Solide.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0318",
    "title": "Tisch gesehen",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0319",
    "title": "Tisch gehört",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0320",
    "title": "Stuhl gefunden",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0321",
    "title": "Stuhl vergessen",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0322",
    "title": "Stuhl erinnert",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0323",
    "title": "Stuhl beachtet",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0324",
    "title": "Stuhl ignoriert",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0325",
    "title": "Stuhl verwendet",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0326",
    "title": "Stuhl geprüft",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0327",
    "title": "Stuhl gehalten",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0328",
    "title": "Stuhl gelassen",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0329",
    "title": "Stuhl genommen",
    "text": "Ganz normal.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0330",
    "title": "Stuhl gehört",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0331",
    "title": "Lampe gefunden",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0332",
    "title": "Lampe gesucht",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0333",
    "title": "Lampe vergessen",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0334",
    "title": "Lampe benutzt",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0335",
    "title": "Lampe verwendet",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0336",
    "title": "Lampe geprüft",
    "text": "Haken dran.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0337",
    "title": "Lampe bewegt",
    "text": "Machbar.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0338",
    "title": "Lampe gelassen",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0339",
    "title": "Lampe gegeben",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0340",
    "title": "Lampe gehört",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0341",
    "title": "Kabel gesucht",
    "text": "In Ordnung.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0342",
    "title": "Kabel vergessen",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0343",
    "title": "Kabel ignoriert",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0344",
    "title": "Kabel benutzt",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0345",
    "title": "Kabel verwendet",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0346",
    "title": "Kabel geprüft",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0347",
    "title": "Kabel sortiert",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0348",
    "title": "Kabel bewegt",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0349",
    "title": "Kabel gehalten",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0350",
    "title": "Kabel gelassen",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0351",
    "title": "Kabel genommen",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0352",
    "title": "Kabel gegeben",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0353",
    "title": "Kabel gesehen",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0354",
    "title": "Stecker gefunden",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0355",
    "title": "Stecker gesucht",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0356",
    "title": "Stecker verloren",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0357",
    "title": "Stecker erinnert",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0358",
    "title": "Stecker ignoriert",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0359",
    "title": "Stecker benutzt",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0360",
    "title": "Stecker verwendet",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0361",
    "title": "Stecker gegeben",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0362",
    "title": "Stecker gehört",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0363",
    "title": "Dose gefunden",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0364",
    "title": "Dose gesucht",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0365",
    "title": "Dose verloren",
    "text": "Erledigt.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0366",
    "title": "Dose erinnert",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0367",
    "title": "Dose beachtet",
    "text": "In Ordnung.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0368",
    "title": "Dose ignoriert",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0369",
    "title": "Dose benutzt",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0370",
    "title": "Dose gehalten",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0371",
    "title": "Dose gelassen",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0372",
    "title": "Dose gegeben",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0373",
    "title": "Dose gesehen",
    "text": "Das passiert nicht oft.",
    "rarity": "ultra",
    "daily": false
  },
  {
    "id": "a0374",
    "title": "Flasche gefunden",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0375",
    "title": "Flasche gesucht",
    "text": "In Ordnung.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0376",
    "title": "Flasche verloren",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0377",
    "title": "Flasche vergessen",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0378",
    "title": "Flasche erinnert",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0379",
    "title": "Flasche ignoriert",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0380",
    "title": "Flasche benutzt",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0381",
    "title": "Flasche geprüft",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0382",
    "title": "Flasche gehalten",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0383",
    "title": "Flasche gegeben",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0384",
    "title": "Flasche gesehen",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0385",
    "title": "Flasche gehört",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0386",
    "title": "Deckel vergessen",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0387",
    "title": "Deckel erinnert",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0388",
    "title": "Deckel ignoriert",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0389",
    "title": "Deckel benutzt",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0390",
    "title": "Deckel verwendet",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0391",
    "title": "Deckel geprüft",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0392",
    "title": "Deckel bewegt",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0393",
    "title": "Deckel gehalten",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0394",
    "title": "Deckel genommen",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0395",
    "title": "Deckel gehört",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0396",
    "title": "Papier vergessen",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0397",
    "title": "Papier erinnert",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0398",
    "title": "Papier beachtet",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0399",
    "title": "Papier ignoriert",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0400",
    "title": "Papier benutzt",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0401",
    "title": "Papier verwendet",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0402",
    "title": "Papier geprüft",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0403",
    "title": "Papier bewegt",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0404",
    "title": "Papier gehalten",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0405",
    "title": "Papier gelassen",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0406",
    "title": "Papier gehört",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0407",
    "title": "Karte gefunden",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0408",
    "title": "Karte verloren",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0409",
    "title": "Karte vergessen",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0410",
    "title": "Karte ignoriert",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0411",
    "title": "Karte geprüft",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0412",
    "title": "Karte sortiert",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0413",
    "title": "Karte bewegt",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0414",
    "title": "Karte gehalten",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0415",
    "title": "Karte genommen",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0416",
    "title": "Karte gehört",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0417",
    "title": "Ticket gefunden",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0418",
    "title": "Ticket gesucht",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0419",
    "title": "Ticket verloren",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0420",
    "title": "Ticket vergessen",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0421",
    "title": "Ticket beachtet",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0422",
    "title": "Ticket ignoriert",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0423",
    "title": "Ticket benutzt",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0424",
    "title": "Ticket geprüft",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0425",
    "title": "Ticket sortiert",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0426",
    "title": "Ticket gehalten",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0427",
    "title": "Ticket gegeben",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0428",
    "title": "Ticket gesehen",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0429",
    "title": "Ticket gehört",
    "text": "In Ordnung.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0430",
    "title": "Geld gefunden",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0431",
    "title": "Geld gesucht",
    "text": "Einfach erledigt.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0432",
    "title": "Geld verloren",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0433",
    "title": "Geld vergessen",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0434",
    "title": "Geld erinnert",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0435",
    "title": "Geld beachtet",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0436",
    "title": "Geld ignoriert",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0437",
    "title": "Geld benutzt",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0438",
    "title": "Geld geprüft",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0439",
    "title": "Geld sortiert",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0440",
    "title": "Geld bewegt",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0441",
    "title": "Geld gehalten",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0442",
    "title": "Geld genommen",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0443",
    "title": "Geld gegeben",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0444",
    "title": "Geld gehört",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0445",
    "title": "Münze verloren",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0446",
    "title": "Münze vergessen",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0447",
    "title": "Münze erinnert",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0448",
    "title": "Münze beachtet",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0449",
    "title": "Münze ignoriert",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0450",
    "title": "Münze benutzt",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0451",
    "title": "Münze verwendet",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0452",
    "title": "Münze geprüft",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0453",
    "title": "Münze sortiert",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0454",
    "title": "Münze bewegt",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0455",
    "title": "Münze gehalten",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0456",
    "title": "Münze genommen",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0457",
    "title": "Münze gesehen",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0458",
    "title": "Schein gefunden",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0459",
    "title": "Schein verloren",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0460",
    "title": "Schein vergessen",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0461",
    "title": "Schein erinnert",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0462",
    "title": "Schein beachtet",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0463",
    "title": "Schein ignoriert",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0464",
    "title": "Schein benutzt",
    "text": "In Ordnung.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0465",
    "title": "Schein geprüft",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0466",
    "title": "Schein sortiert",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0467",
    "title": "Schein gelassen",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0468",
    "title": "Schein genommen",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0469",
    "title": "Schein gehört",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0470",
    "title": "Karte gefunden",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0471",
    "title": "Karte gesucht",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0472",
    "title": "Karte vergessen",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0473",
    "title": "Karte erinnert",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0474",
    "title": "Karte beachtet",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0475",
    "title": "Karte benutzt",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0476",
    "title": "Karte bewegt",
    "text": "Routine.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0477",
    "title": "Karte gegeben",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0478",
    "title": "Karte gehört",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0479",
    "title": "Beleg beachtet",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0480",
    "title": "Beleg ignoriert",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0481",
    "title": "Beleg benutzt",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0482",
    "title": "Beleg verwendet",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0483",
    "title": "Beleg sortiert",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0484",
    "title": "Beleg genommen",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0485",
    "title": "Beleg gegeben",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0486",
    "title": "Beleg gesehen",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0487",
    "title": "Beleg gehört",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0488",
    "title": "Rechnung gefunden",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0489",
    "title": "Rechnung verloren",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0490",
    "title": "Rechnung vergessen",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0491",
    "title": "Rechnung beachtet",
    "text": "Gut so.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0492",
    "title": "Rechnung ignoriert",
    "text": "Routine.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0493",
    "title": "Rechnung benutzt",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0494",
    "title": "Rechnung verwendet",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0495",
    "title": "Rechnung geprüft",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0496",
    "title": "Rechnung sortiert",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0497",
    "title": "Rechnung bewegt",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0498",
    "title": "Rechnung gehalten",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0499",
    "title": "Rechnung gelassen",
    "text": "Läuft.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0500",
    "title": "Rechnung gegeben",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0501",
    "title": "Rechnung gesehen",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0502",
    "title": "Rechnung gehört",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0503",
    "title": "Brief gefunden",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0504",
    "title": "Brief gesucht",
    "text": "Das passiert nicht oft.",
    "rarity": "ultra",
    "daily": false
  },
  {
    "id": "a0505",
    "title": "Brief verloren",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0506",
    "title": "Brief vergessen",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0507",
    "title": "Brief erinnert",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0508",
    "title": "Brief ignoriert",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0509",
    "title": "Brief geprüft",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0510",
    "title": "Brief sortiert",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0511",
    "title": "Brief gehalten",
    "text": "In Ordnung.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0512",
    "title": "Brief genommen",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0513",
    "title": "Brief gehört",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0514",
    "title": "Schlüssel gesucht",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0515",
    "title": "Schlüssel vergessen",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0516",
    "title": "Schlüssel erinnert",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0517",
    "title": "Schlüssel ignoriert",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0518",
    "title": "Schlüssel benutzt",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0519",
    "title": "Schlüssel verwendet",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0520",
    "title": "Schlüssel bewegt",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0521",
    "title": "Schlüssel gelassen",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0522",
    "title": "Schlüssel genommen",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0523",
    "title": "Schlüssel gegeben",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0524",
    "title": "Schlüssel gesehen",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0525",
    "title": "Knopf gefunden",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0526",
    "title": "Knopf verloren",
    "text": "Einfach erledigt.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0527",
    "title": "Knopf erinnert",
    "text": "In Ordnung.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0528",
    "title": "Knopf geprüft",
    "text": "Ganz normal.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0529",
    "title": "Knopf sortiert",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0530",
    "title": "Knopf bewegt",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0531",
    "title": "Knopf gehalten",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0532",
    "title": "Knopf gelassen",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0533",
    "title": "Knopf genommen",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0534",
    "title": "Knopf gegeben",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0535",
    "title": "Knopf gehört",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0536",
    "title": "Schalter gefunden",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0537",
    "title": "Schalter gesucht",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0538",
    "title": "Schalter verloren",
    "text": "Check.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0539",
    "title": "Schalter vergessen",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0540",
    "title": "Schalter beachtet",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0541",
    "title": "Schalter ignoriert",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0542",
    "title": "Schalter benutzt",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0543",
    "title": "Schalter geprüft",
    "text": "Routine.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0544",
    "title": "Schalter sortiert",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0545",
    "title": "Schalter gehalten",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0546",
    "title": "Schalter genommen",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0547",
    "title": "Schalter gesehen",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0548",
    "title": "Schalter gehört",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0549",
    "title": "Griff gesucht",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0550",
    "title": "Griff beachtet",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0551",
    "title": "Griff sortiert",
    "text": "Stabil.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0552",
    "title": "Griff gehalten",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0553",
    "title": "Griff gelassen",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0554",
    "title": "Griff gegeben",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0555",
    "title": "Hebel gefunden",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0556",
    "title": "Hebel verloren",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0557",
    "title": "Hebel vergessen",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0558",
    "title": "Hebel erinnert",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0559",
    "title": "Hebel ignoriert",
    "text": "Okay.",
    "rarity": "common",
    "daily": true
  },
  {
    "id": "a0560",
    "title": "Hebel benutzt",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0561",
    "title": "Hebel verwendet",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0562",
    "title": "Hebel geprüft",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0563",
    "title": "Hebel bewegt",
    "text": "Einfach erledigt.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0564",
    "title": "Hebel gehalten",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0565",
    "title": "Hebel genommen",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0566",
    "title": "Hebel gesehen",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0567",
    "title": "Hebel gehört",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0568",
    "title": "Rad gefunden",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0569",
    "title": "Rad vergessen",
    "text": "Gut so.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0570",
    "title": "Rad ignoriert",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0571",
    "title": "Rad benutzt",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0572",
    "title": "Rad verwendet",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0573",
    "title": "Rad geprüft",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0574",
    "title": "Rad sortiert",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0575",
    "title": "Rad gehalten",
    "text": "Muss auch gemacht werden.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0576",
    "title": "Rad gesehen",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0577",
    "title": "Reifen gefunden",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0578",
    "title": "Reifen gesucht",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0579",
    "title": "Reifen verloren",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0580",
    "title": "Reifen erinnert",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0581",
    "title": "Reifen beachtet",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0582",
    "title": "Reifen ignoriert",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0583",
    "title": "Reifen benutzt",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0584",
    "title": "Reifen geprüft",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0585",
    "title": "Reifen bewegt",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0586",
    "title": "Schuh gefunden",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0587",
    "title": "Schuh verloren",
    "text": "Gut so.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0588",
    "title": "Schuh vergessen",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0589",
    "title": "Schuh erinnert",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0590",
    "title": "Schuh beachtet",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0591",
    "title": "Schuh geprüft",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0592",
    "title": "Schuh sortiert",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0593",
    "title": "Schuh bewegt",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0594",
    "title": "Schuh genommen",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0595",
    "title": "Schuh gegeben",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0596",
    "title": "Socke gefunden",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0597",
    "title": "Socke gesucht",
    "text": "Erledigt.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0598",
    "title": "Socke verloren",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0599",
    "title": "Socke vergessen",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0600",
    "title": "Socke erinnert",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0601",
    "title": "Socke ignoriert",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0602",
    "title": "Socke benutzt",
    "text": "In Ordnung.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0603",
    "title": "Socke geprüft",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0604",
    "title": "Socke sortiert",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0605",
    "title": "Socke bewegt",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0606",
    "title": "Socke gehalten",
    "text": "Das passiert nicht oft.",
    "rarity": "ultra",
    "daily": false
  },
  {
    "id": "a0607",
    "title": "Socke gelassen",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0608",
    "title": "Socke gesehen",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0609",
    "title": "Hose gefunden",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0610",
    "title": "Hose erinnert",
    "text": "Stabil.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0611",
    "title": "Hose benutzt",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0612",
    "title": "Hose verwendet",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0613",
    "title": "Hose geprüft",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0614",
    "title": "Hose sortiert",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0615",
    "title": "Hose bewegt",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0616",
    "title": "Hose gelassen",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0617",
    "title": "Hose gegeben",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0618",
    "title": "Hose gesehen",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0619",
    "title": "Hemd erinnert",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0620",
    "title": "Hemd verwendet",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0621",
    "title": "Hemd bewegt",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0622",
    "title": "Hemd gelassen",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": true
  },
  {
    "id": "a0623",
    "title": "Hemd genommen",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0624",
    "title": "Hemd gegeben",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0625",
    "title": "Hemd gesehen",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0626",
    "title": "Hemd gehört",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0627",
    "title": "Jacke gefunden",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0628",
    "title": "Jacke gesucht",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0629",
    "title": "Jacke verloren",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0630",
    "title": "Jacke vergessen",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0631",
    "title": "Jacke erinnert",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0632",
    "title": "Jacke ignoriert",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0633",
    "title": "Jacke verwendet",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0634",
    "title": "Jacke sortiert",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0635",
    "title": "Jacke genommen",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0636",
    "title": "Jacke gesehen",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0637",
    "title": "Jacke gehört",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0638",
    "title": "Mütze gefunden",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0639",
    "title": "Mütze gesucht",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0640",
    "title": "Mütze beachtet",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0641",
    "title": "Mütze ignoriert",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0642",
    "title": "Mütze bewegt",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0643",
    "title": "Mütze gelassen",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0644",
    "title": "Mütze genommen",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0645",
    "title": "Mütze gesehen",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0646",
    "title": "Mütze gehört",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0647",
    "title": "Schal gefunden",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0648",
    "title": "Schal verloren",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0649",
    "title": "Schal erinnert",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0650",
    "title": "Schal beachtet",
    "text": "Abgehakt.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0651",
    "title": "Schal ignoriert",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0652",
    "title": "Schal verwendet",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0653",
    "title": "Schal geprüft",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0654",
    "title": "Schal bewegt",
    "text": "Okay.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0655",
    "title": "Schal gegeben",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0656",
    "title": "Schal gehört",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0657",
    "title": "Brille verloren",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0658",
    "title": "Brille ignoriert",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0659",
    "title": "Brille benutzt",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0660",
    "title": "Brille geprüft",
    "text": "Okay.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0661",
    "title": "Brille sortiert",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0662",
    "title": "Brille bewegt",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0663",
    "title": "Brille gehalten",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0664",
    "title": "Brille genommen",
    "text": "Gut so.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0665",
    "title": "Brille gesehen",
    "text": "Läuft.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0666",
    "title": "Wasser getrunken sofort",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0667",
    "title": "Tief geatmet wieder",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0668",
    "title": "Aufgestanden sofort",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0669",
    "title": "Hingesetzt wieder",
    "text": "Gut so.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0670",
    "title": "Gestreckt kurz",
    "text": "Passt.",
    "rarity": "common",
    "daily": true
  },
  {
    "id": "a0671",
    "title": "Geblinzelt endlich",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0672",
    "title": "Nase geputzt sofort",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0673",
    "title": "Klo gegangen wieder",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0674",
    "title": "Hände gewaschen sofort",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0675",
    "title": "Zähne geputzt schnell",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0676",
    "title": "Gesicht gewaschen schnell",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0677",
    "title": "Haare sortiert sofort",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0678",
    "title": "Rücken gerade gemacht heute",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0679",
    "title": "Schultern entspannt schnell",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0680",
    "title": "Kurz Augen zu kurz",
    "text": "Weiter geht's.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0681",
    "title": "Gepustet sofort",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0682",
    "title": "Geschluckt kurz",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0683",
    "title": "Gekratzt langsam",
    "text": "Haken dran.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0684",
    "title": "Gähnen unterdrückt noch mal",
    "text": "Das passiert nicht oft.",
    "rarity": "ultra",
    "daily": false
  },
  {
    "id": "a0685",
    "title": "Gegähnt langsam",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0686",
    "title": "Geniest kurz",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0687",
    "title": "Hustenreiz unterdrückt heute",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0688",
    "title": "Puls gefühlt schnell",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0689",
    "title": "Warm angezogen noch mal",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0690",
    "title": "Socken gewechselt sofort",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0691",
    "title": "Schuhe ausgezogen wieder",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0692",
    "title": "Barfuß gelaufen wieder",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0693",
    "title": "Treppe genommen heute",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0694",
    "title": "Nicht gestolpert noch mal",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0695",
    "title": "Balance gehalten noch mal",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0696",
    "title": "Etwas Festes gegessen endlich",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0697",
    "title": "Etwas Weiches gegessen noch mal",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0698",
    "title": "Satt gefühlt kurz",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0699",
    "title": "Hunger ignoriert endlich",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0700",
    "title": "Durst gelöscht sofort",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0701",
    "title": "Flasche aufgefüllt schnell",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0702",
    "title": "Maus bewegt kurz",
    "text": "Check.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0703",
    "title": "Geklickt kurz",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0704",
    "title": "Tab geschlossen noch mal",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0705",
    "title": "Tab geöffnet wieder",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0706",
    "title": "Scrollen gestoppt endlich",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0707",
    "title": "Bildschirm geputzt sofort",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0708",
    "title": "Handy weggelegt kurz",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0709",
    "title": "Handy aufgenommen sofort",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0710",
    "title": "Akku gecheckt kurz",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0711",
    "title": "Ladekabel gesucht kurz",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0712",
    "title": "WLAN verbunden noch mal",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0713",
    "title": "Passwort eingetippt wieder",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0714",
    "title": "Enter gedrückt wieder",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0715",
    "title": "Datei gespeichert noch mal",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0716",
    "title": "Ordner geöffnet heute",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0717",
    "title": "Papierkorb geleert langsam",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0718",
    "title": "Update installiert sofort",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0719",
    "title": "Nachricht gelesen noch mal",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0720",
    "title": "Nachricht ignoriert kurz",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0721",
    "title": "Spam gelöscht kurz",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0722",
    "title": "Nicht geantwortet schnell",
    "text": "Stabil.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0723",
    "title": "Kurz gewartet noch mal",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0724",
    "title": "Ladebalken zugesehen kurz",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0725",
    "title": "Fehlermeldung weggeklickt sofort",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0726",
    "title": "Ton ausgemacht noch mal",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0727",
    "title": "Helligkeit geregelt schnell",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0728",
    "title": "Wecker gestellt noch mal",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0729",
    "title": "Wecker ausgemacht heute",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0730",
    "title": "Nicht gesnoozet noch mal",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0731",
    "title": "App geschlossen wieder",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0732",
    "title": "App geöffnet langsam",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0733",
    "title": "Verlauf gelöscht heute",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0734",
    "title": "Cookies akzeptiert wieder",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0735",
    "title": "AGB nicht gelesen noch mal",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0736",
    "title": "Link kopiert heute",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0737",
    "title": "Screenshot gemacht sofort",
    "text": "Machbar.",
    "rarity": "common",
    "daily": true
  },
  {
    "id": "a0738",
    "title": "Tastatur abgestaubt noch mal",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0739",
    "title": "Fenster aufgemacht wieder",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0740",
    "title": "Fenster zugemacht schnell",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0741",
    "title": "Tür abgeschlossen noch mal",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0742",
    "title": "Licht angemacht langsam",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0743",
    "title": "Licht ausgemacht heute",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0744",
    "title": "Heizung gedreht schnell",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0745",
    "title": "Müll rausgebracht endlich",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0746",
    "title": "Briefkasten geleert schnell",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0747",
    "title": "Schlüssel gesucht kurz",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0748",
    "title": "Schlüssel gefunden sofort",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0749",
    "title": "Tasche gepackt wieder",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0750",
    "title": "Jacke aufgehängt schnell",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0751",
    "title": "Schuhe sortiert noch mal",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0752",
    "title": "Staub gewischt kurz",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0753",
    "title": "Glas weggestellt wieder",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0754",
    "title": "Teller abgewaschen endlich",
    "text": "Machbar.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0755",
    "title": "Spülmaschine eingeräumt kurz",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0756",
    "title": "Spülmaschine ausgeräumt kurz",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0757",
    "title": "Kühlschrank aufgemacht noch mal",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0758",
    "title": "Kühlschrank zugemacht wieder",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0759",
    "title": "Einkaufszettel geschrieben wieder",
    "text": "Läuft.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0760",
    "title": "Pfand weggebracht heute",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0761",
    "title": "Blume gegossen wieder",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0762",
    "title": "Blume angesehen endlich",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0763",
    "title": "Kissen aufgeschüttelt sofort",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0764",
    "title": "Decke gefaltet wieder",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0765",
    "title": "Bett gemacht endlich",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0766",
    "title": "Vorhang zugezogen endlich",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0767",
    "title": "Stuhl rangerückt langsam",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0768",
    "title": "Tisch abgewischt heute",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0769",
    "title": "Krümel weggemacht sofort",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0770",
    "title": "Mülleimer getroffen langsam",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0771",
    "title": "Dose geöffnet schnell",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0772",
    "title": "Flasche zugeschraubt schnell",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0773",
    "title": "Danke gesagt wieder",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0774",
    "title": "Bitte gesagt langsam",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0775",
    "title": "Hallo gesagt kurz",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0776",
    "title": "Tschüss gesagt kurz",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0777",
    "title": "Genickt langsam",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0778",
    "title": "Gelächelt kurz",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0779",
    "title": "Weggeschaut kurz",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0780",
    "title": "Zugehört schnell",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0781",
    "title": "Nicht unterbrochen endlich",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0782",
    "title": "Gedanke zu Ende gedacht noch mal",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0783",
    "title": "Nichts gesagt langsam",
    "text": "Gut so.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0784",
    "title": "Meinung behalten schnell",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0785",
    "title": "Kurz nachgedacht endlich",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": true
  },
  {
    "id": "a0786",
    "title": "Entscheidung getroffen kurz",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0787",
    "title": "Plan gemacht kurz",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0788",
    "title": "Ziel gesetzt heute",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0789",
    "title": "Erinnerung abgerufen schnell",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0790",
    "title": "Namen gemerkt sofort",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0791",
    "title": "Datum gewusst sofort",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0792",
    "title": "Uhrzeit gecheckt kurz",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0793",
    "title": "Wochentag gewusst heute",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0794",
    "title": "Termin eingehalten endlich",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0795",
    "title": "Pünktlich gewesen endlich",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0796",
    "title": "Zu spät gekommen schnell",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0797",
    "title": "Entschuldigt noch mal",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0798",
    "title": "Jemandem Platz gemacht sofort",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0799",
    "title": "Tür aufgehalten schnell",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0800",
    "title": "Vorgelassen kurz",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0801",
    "title": "Nicht gedrängelt schnell",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0802",
    "title": "Abstand gehalten wieder",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0803",
    "title": "Rausgegangen heute",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0804",
    "title": "Himmel angesehen heute",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0805",
    "title": "Wetter gecheckt endlich",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0806",
    "title": "Regen gespürt langsam",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0807",
    "title": "Sonne gespürt sofort",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0808",
    "title": "Wind gespürt heute",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0809",
    "title": "Schatten gesucht heute",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0810",
    "title": "Ampel gedrückt schnell",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0811",
    "title": "Bei Grün gegangen kurz",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0812",
    "title": "Bei Rot gewartet kurz",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0813",
    "title": "Bus erreicht endlich",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0814",
    "title": "Bahn verpasst langsam",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0815",
    "title": "Ticket gekauft noch mal",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0816",
    "title": "Sitzplatz gefunden noch mal",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0817",
    "title": "Festhalten noch mal",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0818",
    "title": "Aussteigen heute",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0819",
    "title": "Einsteigen sofort",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0820",
    "title": "Straße überquert kurz",
    "text": "Abgehakt.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0821",
    "title": "Pfütze ausgewichen heute",
    "text": "Läuft.",
    "rarity": "common",
    "daily": true
  },
  {
    "id": "a0822",
    "title": "Vogel gesehen sofort",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0823",
    "title": "Hund gesehen heute",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0824",
    "title": "Auto gehört heute",
    "text": "Okay.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0825",
    "title": "Schrittzähler gecheckt endlich",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0826",
    "title": "Weg gefunden schnell",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0827",
    "title": "Nicht verlaufen noch mal",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0828",
    "title": "Karte gelesen schnell",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0829",
    "title": "Nichts getan langsam",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0830",
    "title": "Einfach existiert schnell",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0831",
    "title": "Zeit verschwendet kurz",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0832",
    "title": "Sinn gesucht kurz",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0833",
    "title": "Luft verbraucht noch mal",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0834",
    "title": "Schwerkraft genutzt kurz",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0835",
    "title": "Physik akzeptiert kurz",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0836",
    "title": "Realität ertragen endlich",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0837",
    "title": "Chaos zugelassen sofort",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0838",
    "title": "Ordnung vorgetäuscht kurz",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0839",
    "title": "Erwachsen gewirkt heute",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0840",
    "title": "Professionell genickt noch mal",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0841",
    "title": "Kompetenz simuliert wieder",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0842",
    "title": "Interesse geheuchelt kurz",
    "text": "Okay.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0843",
    "title": "Wach geblieben heute",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0844",
    "title": "Überlebt schnell",
    "text": "Das passiert nicht oft.",
    "rarity": "ultra",
    "daily": false
  },
  {
    "id": "a0845",
    "title": "Nicht geschrien langsam",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0846",
    "title": "Nicht geweint kurz",
    "text": "Das passiert nicht oft.",
    "rarity": "ultra",
    "daily": false
  },
  {
    "id": "a0847",
    "title": "Nicht gelacht endlich",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0848",
    "title": "Ernst geblieben wieder",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0849",
    "title": "Wasser getrunken endlich",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0850",
    "title": "Tief geatmet schnell",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0851",
    "title": "Aufgestanden heute",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0852",
    "title": "Hingesetzt noch mal",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0853",
    "title": "Geblinzelt langsam",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0854",
    "title": "Nase geputzt kurz",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0855",
    "title": "Klo gegangen kurz",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0856",
    "title": "Hände gewaschen noch mal",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0857",
    "title": "Zähne geputzt sofort",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0858",
    "title": "Gesicht gewaschen endlich",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0859",
    "title": "Haare sortiert langsam",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0860",
    "title": "Rücken gerade gemacht wieder",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0861",
    "title": "Schultern entspannt kurz",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0862",
    "title": "Kurz Augen zu noch mal",
    "text": "Gut so.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0863",
    "title": "Gepustet langsam",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0864",
    "title": "Geschluckt schnell",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0865",
    "title": "Gekratzt sofort",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0866",
    "title": "Gähnen unterdrückt schnell",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0867",
    "title": "Gegähnt heute",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0868",
    "title": "Geniest wieder",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0869",
    "title": "Hustenreiz unterdrückt sofort",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0870",
    "title": "Puls gefühlt noch mal",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0871",
    "title": "Warm angezogen heute",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0872",
    "title": "Socken gewechselt noch mal",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0873",
    "title": "Schuhe ausgezogen kurz",
    "text": "Passt.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0874",
    "title": "Barfuß gelaufen kurz",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0875",
    "title": "Treppe genommen sofort",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0876",
    "title": "Nicht gestolpert schnell",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0877",
    "title": "Balance gehalten heute",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0878",
    "title": "Etwas Weiches gegessen sofort",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0879",
    "title": "Satt gefühlt wieder",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0880",
    "title": "Hunger ignoriert noch mal",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0881",
    "title": "Durst gelöscht kurz",
    "text": "Läuft.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0882",
    "title": "Flasche aufgefüllt sofort",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0883",
    "title": "Maus bewegt wieder",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0884",
    "title": "Geklickt heute",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0885",
    "title": "Tab geschlossen kurz",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0886",
    "title": "Tab geöffnet kurz",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0887",
    "title": "Scrollen gestoppt sofort",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0888",
    "title": "Bildschirm geputzt langsam",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0889",
    "title": "Handy weggelegt schnell",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0890",
    "title": "Handy aufgenommen langsam",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0891",
    "title": "Ladekabel gesucht noch mal",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0892",
    "title": "WLAN verbunden kurz",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0893",
    "title": "Passwort eingetippt sofort",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0894",
    "title": "Datei gespeichert schnell",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0895",
    "title": "Ordner geöffnet wieder",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0896",
    "title": "Papierkorb geleert sofort",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0897",
    "title": "Update installiert kurz",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0898",
    "title": "Nachricht gelesen langsam",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0899",
    "title": "Spam gelöscht endlich",
    "text": "Check.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0900",
    "title": "Kurz gewartet wieder",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0901",
    "title": "Ladebalken zugesehen heute",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0902",
    "title": "Fehlermeldung weggeklickt schnell",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0903",
    "title": "Ton ausgemacht sofort",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0904",
    "title": "Helligkeit geregelt langsam",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0905",
    "title": "Wecker gestellt schnell",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0906",
    "title": "Wecker ausgemacht sofort",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0907",
    "title": "Nicht gesnoozet schnell",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0908",
    "title": "App geschlossen heute",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0909",
    "title": "Verlauf gelöscht wieder",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0910",
    "title": "Cookies akzeptiert langsam",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0911",
    "title": "Link kopiert wieder",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0912",
    "title": "Screenshot gemacht langsam",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0913",
    "title": "Tastatur abgestaubt langsam",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0914",
    "title": "Fenster aufgemacht noch mal",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0915",
    "title": "Fenster zugemacht wieder",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0916",
    "title": "Tür abgeschlossen schnell",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0917",
    "title": "Licht angemacht kurz",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0918",
    "title": "Licht ausgemacht endlich",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0919",
    "title": "Heizung gedreht endlich",
    "text": "Gut so.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0920",
    "title": "Müll rausgebracht noch mal",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0921",
    "title": "Briefkasten geleert langsam",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0922",
    "title": "Schlüssel gesucht langsam",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0923",
    "title": "Schlüssel gefunden langsam",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0924",
    "title": "Tasche gepackt kurz",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0925",
    "title": "Jacke aufgehängt endlich",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0926",
    "title": "Staub gewischt wieder",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0927",
    "title": "Glas weggestellt noch mal",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0928",
    "title": "Teller abgewaschen schnell",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0929",
    "title": "Spülmaschine eingeräumt heute",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0930",
    "title": "Spülmaschine ausgeräumt wieder",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0931",
    "title": "Kühlschrank aufgemacht kurz",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0932",
    "title": "Kühlschrank zugemacht langsam",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0933",
    "title": "Einkaufszettel geschrieben kurz",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0934",
    "title": "Pfand weggebracht wieder",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0935",
    "title": "Blume gegossen endlich",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0936",
    "title": "Blume angesehen schnell",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0937",
    "title": "Kissen aufgeschüttelt schnell",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0938",
    "title": "Decke gefaltet heute",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0939",
    "title": "Stuhl rangerückt sofort",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0940",
    "title": "Tisch abgewischt noch mal",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0941",
    "title": "Krümel weggemacht langsam",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0942",
    "title": "Mülleimer getroffen wieder",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0943",
    "title": "Dose geöffnet wieder",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0944",
    "title": "Flasche zugeschraubt endlich",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0945",
    "title": "Danke gesagt endlich",
    "text": "Ohne großes Drama.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0946",
    "title": "Bitte gesagt wieder",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0947",
    "title": "Hallo gesagt langsam",
    "text": "Abgehakt.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0948",
    "title": "Tschüss gesagt wieder",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0949",
    "title": "Gelächelt wieder",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0950",
    "title": "Weggeschaut noch mal",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0951",
    "title": "Zugehört sofort",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0952",
    "title": "Nicht unterbrochen langsam",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0953",
    "title": "Gedanke zu Ende gedacht kurz",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0954",
    "title": "Nichts gesagt heute",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0955",
    "title": "Meinung behalten heute",
    "text": "Läuft.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0956",
    "title": "Entscheidung getroffen endlich",
    "text": "Routine.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0957",
    "title": "Plan gemacht schnell",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0958",
    "title": "Ziel gesetzt schnell",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0959",
    "title": "Erinnerung abgerufen wieder",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0960",
    "title": "Datum gewusst schnell",
    "text": "Check.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0961",
    "title": "Uhrzeit gecheckt schnell",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0962",
    "title": "Termin eingehalten heute",
    "text": "Muss auch gemacht werden.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0963",
    "title": "Pünktlich gewesen sofort",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0964",
    "title": "Zu spät gekommen langsam",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0965",
    "title": "Entschuldigt kurz",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0966",
    "title": "Jemandem Platz gemacht noch mal",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0967",
    "title": "Tür aufgehalten endlich",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0968",
    "title": "Vorgelassen heute",
    "text": "Erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0969",
    "title": "Nicht gedrängelt kurz",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0970",
    "title": "Abstand gehalten noch mal",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0971",
    "title": "Rausgegangen kurz",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0972",
    "title": "Himmel angesehen langsam",
    "text": "Okay.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0973",
    "title": "Wetter gecheckt schnell",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0974",
    "title": "Regen gespürt schnell",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0975",
    "title": "Sonne gespürt noch mal",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0976",
    "title": "Wind gespürt kurz",
    "text": "Solide.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0977",
    "title": "Ampel gedrückt sofort",
    "text": "Okay.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0978",
    "title": "Bei Grün gegangen schnell",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0979",
    "title": "Bei Rot gewartet endlich",
    "text": "Muss auch gemacht werden.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0980",
    "title": "Bus erreicht schnell",
    "text": "Ganz normal.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0981",
    "title": "Ticket gekauft heute",
    "text": "Stabil.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0982",
    "title": "Sitzplatz gefunden langsam",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0983",
    "title": "Festhalten sofort",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": true
  },
  {
    "id": "a0984",
    "title": "Aussteigen sofort",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0985",
    "title": "Einsteigen wieder",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0986",
    "title": "Straße überquert langsam",
    "text": "Haken dran.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0987",
    "title": "Pfütze ausgewichen sofort",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0988",
    "title": "Vogel gesehen heute",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0989",
    "title": "Hund gesehen endlich",
    "text": "Solide.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0990",
    "title": "Auto gehört kurz",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0991",
    "title": "Weg gefunden endlich",
    "text": "In Ordnung.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0992",
    "title": "Nicht verlaufen kurz",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0993",
    "title": "Karte gelesen heute",
    "text": "Abgehakt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0994",
    "title": "Nichts getan noch mal",
    "text": "Weiter geht's.",
    "rarity": "common",
    "daily": true
  },
  {
    "id": "a0995",
    "title": "Einfach existiert heute",
    "text": "Passt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0996",
    "title": "Zeit verschwendet sofort",
    "text": "Routine.",
    "rarity": "rare",
    "daily": false
  },
  {
    "id": "a0997",
    "title": "Sinn gesucht noch mal",
    "text": "Machbar.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0998",
    "title": "Luft verbraucht endlich",
    "text": "Einfach erledigt.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a0999",
    "title": "Physik akzeptiert schnell",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  },
  {
    "id": "a1000",
    "title": "Realität ertragen sofort",
    "text": "Standard.",
    "rarity": "common",
    "daily": false
  }
];
