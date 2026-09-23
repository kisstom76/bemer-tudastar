// A publikus teaser-oldal és a védett oldal navigációja is ebből épül.
// A teaser csak a kategória leírását mutatja, tartalmat nem.

export type Allapot = "ok" | "warn" | "missing";

export type Kategoria = {
  id: string;
  cim: string;
  ikon: string;
  teaser: string;
  allapot: Allapot;
};

export const kategoriak: Kategoria[] = [
  {
    id: "terapia",
    cim: "Terápiával kapcsolatos tudás",
    ikon: "📘",
    teaser: "A Kompendium és orvosi esetismertetők — érthető összefoglalóval, hogy tudd, mit hol keress.",
    allapot: "warn",
  },
  {
    id: "iranyelvek",
    cim: "Irányelvek",
    ikon: "⚖️",
    teaser: "A hivatalos szabályok röviden és érthetően: mit szabad és mit nem, például a közösségi médiában.",
    allapot: "warn",
  },
  {
    id: "technikai",
    cim: "BEMER technikai ismeretek",
    ikon: "⚙️",
    teaser: "Készülék-generációk, fizikai paraméterek, applikátorok — hogy magabiztosan válaszolj.",
    allapot: "warn",
  },
  {
    id: "promociok",
    cim: "Aktuális promóciók & események",
    ikon: "📅",
    teaser: "Mi fut most, meddig, és mi jön — egy helyen, időrendben.",
    allapot: "ok",
  },
  {
    id: "landing",
    cim: "Landing oldalak & linkek",
    ikon: "🔗",
    teaser: "Az a sok hasznos BEMER-oldal, amit új partnerként nehéz megtalálni.",
    allapot: "ok",
  },
  {
    id: "kezdoknek",
    cim: "Kezdőknek",
    ikon: "🧭",
    teaser: "Vezetett első lépések: mivel kezdj, mit milyen sorrendben érdemes megismerni.",
    allapot: "warn",
  },
  {
    id: "tippek",
    cim: "Kiemelt gyakorlati tippek",
    ikon: "💡",
    teaser: "Tapasztalatból született meglátások, amik sehol máshol nincsenek leírva.",
    allapot: "missing",
  },
  {
    id: "elerhetosegek",
    cim: "Fontos elérhetőségek",
    ikon: "☎️",
    teaser: "Kit, mikor, hogyan érdemes keresni — ügyfélszolgálattól a számlázásig.",
    allapot: "ok",
  },
];

export const allapotSzoveg: Record<Allapot, string> = {
  ok: "kész",
  warn: "részben kész",
  missing: "hamarosan",
};
