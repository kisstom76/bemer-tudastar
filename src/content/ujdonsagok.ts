// A „🆕 Friss anyagok” lista forrása. A lista magától válogat: az anyagok.ts és felvetelek.ts
// tételeinek `hozzaadva` mezőjéből, plusz az itt felsorolt, máshová nem illő újdonságokból
// (új kártya, új funkció). Új anyag felvételekor elég a `hozzaadva: "ÉÉÉÉ-HH-NN"` mezőt kitölteni.

export type Ujdonsag = { datum: string; ikon: string; cim: string; href: string; kulso?: boolean };

export const FRISS_DARAB = 8;

export const kulonUjdonsagok: Ujdonsag[] = [
  {
    datum: "2026-11-02",
    ikon: "🐶",
    cim: "BEMER Dog Line bemutató a saját elérhetőségeddel + előadói jegyzet",
    href: "#sajat-bemutato",
  },
  {
    datum: "2026-11-02",
    ikon: "🔗",
    cim: "Ügyfélnek küldhető linkek (Kompendium, esetismertetések, brossúrák, Evo útmutató)",
    href: "#letoltesek",
  },
];
