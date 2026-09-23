// Forrás: Vault · 07_Uzleti_Tudastar/03_Partner_Landing_Oldalak/00_BEMER_Landing_Oldalak.md

export type Link = { nev: string; url?: string; leiras: string };

export const linkek: Link[] = [
  { nev: "BEMER Back Office (BBO)", leiras: "A hivatalos partneri felület — mindig itt van a legfrissebb anyag" },
  { nev: "bemergroup.com", url: "https://bemergroup.com", leiras: "A BEMER hivatalos honlapja" },
  {
    nev: "Saját partneri oldal",
    leiras:
      "Mindenkinek van egy saját BEMER-oldala a regisztrációkor megadott néven (pl. KissTamas.bemergroup.com). Utólag módosítható, de érdemes az elején jól átgondolni — ha egyszer nyomtatott anyagra kerül, később már nem érdemes megváltoztatni.",
  },
  { nev: "BEMER Dog App", leiras: "Dog Line mobilalkalmazás, Bluetooth-párosítás" },
  { nev: "LIVATY Partner Portal", leiras: "Képzési anyagok, marketing sablonok, termékadatok" },
  { nev: "BEMER Dog Line Partner", leiras: "Partneri marketing- és képzési anyagok" },
  {
    nev: "BEMER Média-könyvtár",
    url: "https://library.bemergroup.com/bemer-medien-bibliothek-en",
    leiras: "Arculati kézikönyv, brosúrák, logók, sablonok",
  },
  { nev: "Rank Advancement", leiras: "Automatikus elismerési program szintlépéskor" },
];
