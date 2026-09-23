// Forrás: docs/TARTALOM_VAZLAT.md 4. szakasz (Tamástól, 2026-09-16).

export const SAJAT = {
  nev: "Kiss Tamás & Karkis Katalin",
  email: "bterapia.office@gmail.com",
  telefon: "+36 30 681 5233",
  telefonLink: "tel:+36306815233",
};

export type Elerhetoseg = {
  kihez: string;
  mikor: string;
  hogyan: string;
};

export const elerhetosegek: Elerhetoseg[] = [
  {
    kihez: "Magyar BEMER központ — ügyfélszolgálat",
    mikor: "minden magyar vonatkozású ügy, ticket-rendszer",
    hogyan: "ugyfelszolgalat@bemer.services",
  },
  {
    kihez: "Magyar BEMER központ — irodavezető",
    mikor: "számlázás; rendezvény- és START-Up képzés-regisztrációk számlái; nyomtatott BEMER-kiadvány megrendelése",
    hogyan: "szamlazas@bemer.hu",
  },
  {
    kihez: "OD — BEMER Medicintechnika Kft. (Beck János, OD+)",
    mikor: "OD-szintű / üzleti ügyek",
    hogyan:
      "+36 30 941 4254 (Beck János mobilja) · +36 1 415 0884 (vezetékes) · Janos.Beck@bemermail.com · 1152 Budapest, Szentmihályi út 137.",
  },
  {
    kihez: "OD — Dr. Horváth Ilona",
    mikor: "orvos-szakmai kérdések",
    hogyan: "elérhetőség pontosítás alatt",
  },
  {
    kihez: "Külföldi ügyfélszolgálatok",
    mikor: "pl. külföldi ügyfélnek eladott készülék",
    hogyan: "bemergroup.com → ügyfélszolgálat menü, országonként",
  },
  { kihez: SAJAT.nev, mikor: "bármikor", hogyan: `${SAJAT.email} · ${SAJAT.telefon}` },
];
