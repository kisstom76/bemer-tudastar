// Forrás: Vault · 02 Areas/BEMER/05_Promociok/BEMER_Esemenynaptar.md, „Jövőbeli események” (2026-10-14-i állapot).
// Csak azok a sorok, ahol a „Tudástárba” oszlop üres; a `❌ saját` sorok nem kerülnek ide.
// A regisztrációs szöveg partnereknek szól: belső megjegyzés nem kerül át.
// Az esemény a záró napja (veg, ennek híján kezdet) után automatikusan eltűnik.

export type Esemeny = {
  kezdet: string; // YYYY-MM-DD
  veg?: string; // YYYY-MM-DD, többnapos eseménynél
  tipus: "infóest" | "képzés" | "tanfolyam" | "rendezvény" | "találkozó";
  cim: string;
  helyszin: string;
  jelentkezes: string;
  link?: string;
  jelentkezesiHatarido?: string; // YYYY-MM-DD
  szobeli?: boolean; // még nincs hivatalos kiírás
};

export const esemenyek: Esemeny[] = [
  {
    kezdet: "2026-10-15",
    tipus: "infóest",
    cim: "Információs est – Vérkeringésünk kulcsszerepe az egészség megőrzésében, 18:00–19:45",
    helyszin: "online (Zoom webinar)",
    jelentkezes: "Ingyenes, előzetes regisztrációval.",
    link: "https://us06web.zoom.us/webinar/register/WN_HKorCFiMRd63CxLb2T2iZQ",
  },
  {
    kezdet: "2026-10-16",
    veg: "2026-10-17",
    tipus: "képzés",
    cim: "Group Leader (csoportvezetői) képzés + bevezetés a csapatépítésbe (BP+ és GL) – Nagy Béla",
    helyszin: "1152 Budapest, Szentmihályi út 137.",
    jelentkezes: "60 000 Ft/fő; regisztráció: szamlazas@bemer.hu",
  },
  {
    kezdet: "2026-11-18",
    tipus: "infóest",
    cim: "Információs est, 18:00",
    helyszin: "online",
    jelentkezes: "A regisztrációs link később jön.",
  },
  {
    kezdet: "2026-11-20",
    veg: "2026-11-21",
    tipus: "képzés",
    cim: "START-Up képzés kezdő partnereknek (díjmentes) – az utolsó idei",
    helyszin: "online",
    jelentkezes:
      "E-mailben a BEMER Központnál: szamlazas@bemer.hu. Az új partner is írjon a saját e-mail-címéről.",
  },
  {
    kezdet: "2026-11-26",
    tipus: "tanfolyam",
    cim: "Terápiás tanfolyam (EVO) – mozgásterapeutáknak, fizioterápiás asszisztenseknek, 14 kreditpont, 9–18 óra",
    helyszin: "online (Zoom: stabil internet, webkamera, mikrofon)",
    jelentkezes:
      "30 000 Ft/fő. Regisztráció a BEMER oldalán (a link a 2026. 10. 12-i hírlevélben). Végig ugyanazt az e-mail-címet használd; a tanúsítvány nyelve utólag nem módosítható. Lemondás csak írásban (support@bemer.hu), 3000 Ft adminisztrációs díj.",
    jelentkezesiHatarido: "2026-11-22",
  },
  {
    kezdet: "2026-11-27",
    tipus: "képzés",
    cim: "ORT-képzés (orvostechnikai eszköz tanácsadó) – személyesen",
    helyszin: "BEMER iroda (a pontos cím később)",
    jelentkezes:
      "Feltételek: csoportvezetői szint, áfakörös vállalkozás, NOR-regisztráció, EVO terápiás tanfolyam ≥60%, felsőfokú műszaki/orvosi végzettség, záróvizsga ≥90%.",
    szobeli: true,
  },
  {
    kezdet: "2026-12-12",
    tipus: "rendezvény",
    cim: "BEMER Karácsony",
    helyszin: "részletek később",
    jelentkezes: "Az év egyik legkülönlegesebb közös BEMER-eseménye – érdemes szabaddá tenni a napot.",
  },
  {
    kezdet: "2027-01-16",
    tipus: "találkozó",
    cim: "Vezetői találkozó (szombat)",
    helyszin: "Budapest, Radisson Hotel",
    jelentkezes: "Jegy/regisztráció később.",
    szobeli: true,
  },
  {
    kezdet: "2027-02-05",
    veg: "2027-02-06",
    tipus: "képzés",
    cim: "START-Up képzés – személyes, csak új résztvevőknek",
    helyszin: "Budapest, Radisson Hotel",
    jelentkezes:
      "Aki már részt vett, az online képzésre menjen. A jelentkezés menete később (eddig: e-mail a BEMER Központnak).",
    szobeli: true,
  },
  {
    kezdet: "2027-02-19",
    veg: "2027-02-21",
    tipus: "találkozó",
    cim: "European Management Meeting 2027 (péntek–vasárnap) – Manager-szintű partnereknek",
    helyszin: "Budapest Marriott Hotel, Apáczai Csere János u. 4.",
    jelentkezes: "Jegy a back office-ban. Érkezés 02. 19. 17:00-ig, távozás 02. 21. 15:00-tól.",
  },
  {
    kezdet: "2027-04-24",
    tipus: "rendezvény",
    cim: "World of BEMER – kelet-európai nagyrendezvény",
    helyszin: "Novotel kongresszusi központ",
    jelentkezes: "Jegy/regisztráció később.",
    szobeli: true,
  },
];
