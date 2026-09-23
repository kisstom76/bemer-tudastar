// Forrás: Vault · 02 Areas/BEMER/05_Promociok/00_Promociok_Attekinto.md (2026-09-16-i állapot).
// A lejárt tételek (hatarido < ma) automatikusan eltűnnek az oldalról.

export type Promocio = {
  hatarido: string; // YYYY-MM-DD
  cim: string;
  lenyeg: string;
  megjegyzes?: string;
};

export const promociok: Promocio[] = [
  { hatarido: "2026-09-23", cim: "Őszi programnaptár", lenyeg: "6 program: START-Up képzés, Infoest, tréningek, Eger" },
  { hatarido: "2026-09-28", cim: "90 Day BP+ Challenge", lenyeg: "max. 1.500 € / kvalifikált BP+ partner + ajándék" },
  { hatarido: "2026-09-30", cim: "B.Box Upgrade Evo", lenyeg: "Classic/Pro → Classic Set Evo, kedvezményes váltás" },
  { hatarido: "2026-10-05", cim: "30 Day Run", lenyeg: "Lendület-kihívás + 50% Sign-Up kedvezmény új BP-nél" },
  { hatarido: "2026-10-09", cim: "Csapattalálkozó – Eger", lenyeg: "3 napos csapatépítő, Hunguest Hotel Flóra" },
  {
    hatarido: "2027-02-19",
    cim: "European Management Meeting",
    lenyeg: "Budapest Marriott, Manager-szintű partnereknek",
    megjegyzes: "csak GL szinttől felfelé",
  },
  { hatarido: "2027-02-28", cim: "Founder's Challenge", lenyeg: "30.000 PSVP + 8 új BP → 5 napos exkluzív utazás" },
];

export const KOZELI_NAPOK = 120;
