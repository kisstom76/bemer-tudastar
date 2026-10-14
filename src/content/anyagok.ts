// Forrás: Drive `02_Areas/BEMER/08_Partnereknek_Megosztott` (2026-10-14-i állapot).
// A linkek csak annak nyílnak meg, akivel a mappa meg van osztva (admin oldal: Drive-megosztás emlékeztető).

const mappa = (id: string) => `https://drive.google.com/drive/folders/${id}`;
const fajl = (id: string) => `https://drive.google.com/file/d/${id}/view`;

export const MEGOSZTOTT_MAPPA = mappa("14OgRiYfpsqBai3lkLxnlZDob_iWw6VG0");

export const KOMPENDIUM_URL = fajl("15fdBe1R02LPfqELzP5uJR5DuP0sc7OGk");
export const ESETISMERTETES_2020_URL = fajl("1JksZNunHPYSUhHg0DKf_FFimKT5gWYW4");

export type AnyagTetel = { nev: string; url?: string; megjegyzes?: string };
export type AnyagCsoport = { id: string; cim: string; ikon: string; mappaUrl: string; leiras: string; tetelek: AnyagTetel[] };

export const anyagCsoportok: AnyagCsoport[] = [
  {
    id: "szakmai",
    cim: "Szakmai anyagok",
    ikon: "📘",
    mappaUrl: mappa("17qsBcdyBHedmGr-ozpnH2nebzUnamRyE"),
    leiras: "A terápia élettani háttere és orvosi esetismertetések.",
    tetelek: [
      { nev: "BEMER Kompendium (HU)", url: KOMPENDIUM_URL },
      { nev: "Orvosi esetismertetések 2020", url: ESETISMERTETES_2020_URL },
    ],
  },
  {
    id: "keszulek",
    cim: "Készülék és technikai információk",
    ikon: "⚙️",
    mappaUrl: mappa("1B5ggqMJ8Dgr__jL1FVnDuSxXk0chP5lo"),
    leiras: "Evo készülékek: mi van a dobozban, hol mi található – ügyfélnek is kiküldhető.",
    tetelek: [{ nev: "Termékoktatás – BEMER Premium-Set Evo (2023-06)", url: fajl("1pJhd4MAYICQeVpQGmQ0UYuSnALNEcE_q") }],
  },
  {
    id: "nyomtatvanyok",
    cim: "Nyomtatványok",
    ikon: "📄",
    mappaUrl: mappa("14RFv28XwS0dmRxOPiP5fNk9J4fEl6Mg5"),
    leiras: "A BEMER központtól kapott minták – kitöltés előtt mindig a legfrissebbet használd.",
    tetelek: [
      { nev: "Bérleti szerződésminták (Classic Set Evo, Horse-Set 2026; Evo, Pro; üres, kezessel)" },
      { nev: "Ügyfél-tájékoztató – „Bemutató az ügyfélnek” (Evo)", megjegyzes: "aláírva 2 héten belül a BEMER-nek" },
      { nev: "Fogyasztói tájékoztató (2026)" },
      { nev: "Kipróbálási és adatkezelési nyilatkozat (2026)" },
      { nev: "Kiállítási bejelentő lap (Evo, 2023)", megjegyzes: "rendezvény előtt be kell jelenteni a BEMER-nek" },
    ],
  },
  {
    id: "info",
    cim: "Információs és segédanyagok",
    ikon: "🧾",
    mappaUrl: mappa("1ZdT1ioSx5lIhbhYCRbiy5Fnwq6e67aPo"),
    leiras: "Adminisztráció és meggyőzést segítő anyagok.",
    tetelek: [
      { nev: "Jutalék-számlázás és termékvásárlás (v2.0)" },
      { nev: "TEÁOR-számok · VTSZ vámtarifaszámok" },
      { nev: "Promóciók, kihívások" },
      { nev: "Meggyőzéshez: BEMER EE forgalom 2016–2024 · 30 000 üzemórás Pro" },
    ],
  },
  {
    id: "regi",
    cim: "Régi készülékekhez leírások",
    ikon: "🗄️",
    mappaUrl: mappa("1OsAymxKTE8H4qTF0KDEY7OqjMvLhw1eR"),
    leiras: "Pro- és Classic-tulajdonos ügyfeleknek: a régi készülékek engedélyei.",
    tetelek: [{ nev: "Certificate 2014 · Konformitätserklärung (DE)" }],
  },
];
