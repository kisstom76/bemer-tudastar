// Forrás: Vault · 02 Areas/BEMER/05_Promociok/00_Promociok_Attekinto.md, 🟢 tábla (2026-10-14-i állapot).
// Csak időszakra szóló promóció, kihívás, akció. Konkrét időpontú esemény → esemenyek.ts.
// A lejárt tételek (hatarido < ma) automatikusan eltűnnek az oldalról.

export type Promocio = {
  hatarido: string; // YYYY-MM-DD
  cim: string;
  kinek: string;
  lenyeg: string;
  anyag?: { szoveg: string; href: string }; // kapcsolódó anyag a tudástárban vagy a Drive-on
};

export const promociok: Promocio[] = [
  {
    hatarido: "2026-10-30",
    cim: "30 Day Run – októberi folytatás",
    kinek: "minden partner",
    lenyeg: "11 reggeli, 8:00-s, 30 perces Zoom-előadás (10. 06. – 10. 30.), 4 előadó. Nincs jelentkezés, felvétel készül.",
    anyag: { szoveg: "▶ A felvételek visszanézése", href: "#felvetelek" },
  },
  {
    hatarido: "2026-11-02",
    cim: "B.Box Upgrade – Classic Set Evo",
    kinek: "minden partner és ügyfél",
    lenyeg: "Működőképes Classic/Pro-Line B.Box → kedvezményes váltás Classic Set Evo-ra. Utólag nem lehet csatlakozni.",
  },
  {
    hatarido: "2027-02-28",
    cim: "Founder's Challenge",
    kinek: "minden partner (automatikus részvétel)",
    lenyeg: "30.000 PSVP + 8 új BP → 5 napos exkluzív utazás.",
  },
];

export const KOZELI_NAPOK = 120; // az eseménytábla alapnézete (a promóciók mind látszanak)
