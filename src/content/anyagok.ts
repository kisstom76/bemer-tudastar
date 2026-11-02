// Forrás: Drive `02_Areas/BEMER/08_Partnereknek_Megosztott` (2026-10-14-i állapot).
// A linkek csak annak nyílnak meg, akivel a mappa meg van osztva (admin oldal: Drive-megosztás emlékeztető).

const mappa = (id: string) => `https://drive.google.com/drive/folders/${id}`;
const fajl = (id: string) => `https://drive.google.com/file/d/${id}/view`;

export const MEGOSZTOTT_MAPPA = mappa("14OgRiYfpsqBai3lkLxnlZDob_iWw6VG0");

export const KOMPENDIUM_URL = fajl("15fdBe1R02LPfqELzP5uJR5DuP0sc7OGk");
export const ESETISMERTETES_2020_URL = fajl("1JksZNunHPYSUhHg0DKf_FFimKT5gWYW4");

// Ügyfélnek küldhető példány: Drive `02_Areas/BEMER/09_Ugyfeleknek_Megosztott` – külön másolat,
// fájlonként „bárki a linkkel – megtekintő” (a mappa maga nem nyilvános). Új ügyfél-anyag: másolat ide + ugyfelUrl.
export const UGYFEL_MAPPA = mappa("1kmFVJmo3Bz3jUdYfYqc9lSdwTjIvTsFD");

export type AnyagTetel = { nev: string; url?: string; ugyfelUrl?: string; megjegyzes?: string };
export type AnyagCsoport = { id: string; cim: string; ikon: string; mappaUrl: string; leiras: string; tetelek: AnyagTetel[] };

export const anyagCsoportok: AnyagCsoport[] = [
  {
    id: "szakmai",
    cim: "Szakmai anyagok",
    ikon: "📘",
    mappaUrl: mappa("17qsBcdyBHedmGr-ozpnH2nebzUnamRyE"),
    leiras: "A terápia élettani háttere és orvosi esetismertetések.",
    tetelek: [
      { nev: "BEMER Kompendium (HU)", url: KOMPENDIUM_URL, ugyfelUrl: fajl("16w6feA4v50ZFirJzEdiUtuqbR0gWGDVA") },
      { nev: "Orvosi esetismertetések 2020", url: ESETISMERTETES_2020_URL, ugyfelUrl: fajl("1i0r7haGpgNXcGDZqNx7o5tit6aPh9z2W") },
    ],
  },
  {
    id: "keszulek",
    cim: "Készülék és technikai információk",
    ikon: "⚙️",
    mappaUrl: mappa("1B5ggqMJ8Dgr__jL1FVnDuSxXk0chP5lo"),
    leiras: "Evo készülékek: mi van a dobozban, hol mi található – ügyfélnek is kiküldhető.",
    tetelek: [
      { nev: "Termékoktatás – BEMER Premium-Set Evo (2023-06)", url: fajl("1pJhd4MAYICQeVpQGmQ0UYuSnALNEcE_q") },
      { nev: "Evo használati útmutató, kelet-európai (HU) – 2022-11, v06", url: fajl("1mKiZinGRVlhgPDK_nJ1_DPQUklGuT4Vh"), ugyfelUrl: fajl("1pRMkYb0xv-fqKjhGc13i3nStfEM6l56R") },
      { nev: "Horse-Set kézikönyv – 2020-10, Rev 20.1", url: fajl("11DM6yTVwxouCmAOhKLCaPOlUz4HQrkJ3") },
      { nev: "Dog felhasználói kézikönyv – 2026-09, Rev 26.6", url: fajl("1vcqlGmu2hh7YGTMtIw-FJT2Ayg9silr3") },
      { nev: "LIVATY Lume használati útmutató – 2025-11", url: fajl("1H3gE07cAbLqLmwVCbhax4pFlLScC6gL7") },
    ],
  },
  {
    id: "brosurak",
    cim: "Brossúrák és szórólapok",
    ikon: "📄",
    mappaUrl: mappa("1Ta5smgyeSoO64Tyuo7QbkgPEQn5WO5BM"),
    leiras: "Nyomtatható, magyar nyelvű anyagok kiadási dátummal – a legfrissebbet a BEMER Médiatárban és a BBO-ban is nézd meg.",
    tetelek: [
      { nev: "Humán Evo hajtogatós szórólap, nyomdai – 2025-01, Rev 24.1 (legújabb)", url: fajl("1135DiCrBkuvKPuK2wWWbJmGCxhBbNvBl"), ugyfelUrl: fajl("1XfiARMSKTGrXDGJHY0ANa8MdFzvZ6GrO") },
      { nev: "Humán Evo nagy prospektus – 2023-01, Rev 23.1", url: fajl("148vl5KE9UtcCitK5HjVzAs5iaUSwJJDu"), ugyfelUrl: fajl("122YtgHP7He42GvwpZpPbOsfWHu3GaoKS") },
      { nev: "Hajtogatós: teljesítőképes – 2023-01", url: fajl("1494-wTHLqDyGebYXOeKAxi1oWpz5z2h6"), ugyfelUrl: fajl("1mpULRbFpU6FUft2LCVROD4OkdxIdTd_w") },
      { nev: "Hajtogatós: fájdalommentes – 2023-01", url: fajl("146CWr-DfAI5pe3llDFm-yPdvgQtVDd85"), ugyfelUrl: fajl("1axIBA8YKBVTsrg87oyuwBKOuZ0X0EbPm") },
      { nev: "Hajtogatós: sportos – 2023-01", url: fajl("1495AND3qZTaweKLRJ6ZHPt4KRngiJzYZ"), ugyfelUrl: fajl("1C_8olD7jNeTW5ITo7u3_zf582sAsLMLJ") },
      { nev: "Hajtogatós: tudatos – 2023-01", url: fajl("14AbaHWTvo9uYk_4b3QmKRICvi_Ec1nGT"), ugyfelUrl: fajl("1MQSUC6Z-RmcpiclI5QjS3lTPeO8LpNuV") },
      { nev: "Beauty Pack prospektus – 2023-01", url: fajl("146GKXV0PtJiBfJN8YaeZsUxFZSf14Y9b"), ugyfelUrl: fajl("1lc8GXxOhneWw341QxFzDZM5C7IGk6hNb"), megjegyzes: "azóta Light Pack EVO néven" },
      { nev: "Üzleti Evo prospektus – 2023-01, Rev 23.1", url: fajl("149kGpvKJp39ksW8utuohVBNj-XfUXGod") },
      { nev: "A1 kiállítási plakátok (Humán 19 db, Lovas 4 db) – 2023-04", url: mappa("1jadS01DavJ5euzFavZkkWfzbe8khMCdP"), megjegyzes: "magyarországi rendezvény előtt be kell jelenteni a BEMER-nek" },
    ],
  },
  {
    id: "kepek_videok",
    cim: "Képek és videók",
    ikon: "🎬",
    mappaUrl: mappa("1VkEufe4wyjw1RdJ3KJUlBQcUx0lrEJ6u"),
    leiras: "Közösségi médiához és előadáshoz – a használat szabályai az Irányelvekben (Social Media Policy) vannak.",
    tetelek: [
      { nev: "Közösségi média képek 9×16 (2023-02)", url: mappa("1upMKM3FPbc2pKrOjZtq8RHNEG5tqES5Q") },
      { nev: "Közösségi média képek 4×5 (2022-12, 79 kép)", url: mappa("1IseM_UKdtQdCdarKum4EY1U8GOpISemS") },
      { nev: "Evo termékképek (2023-01)", url: mappa("115W_JuIORrh5AZRb4gQOZZ7Zy0MVtc-a") },
      { nev: "Életmód- és termékfotók Evo (2022)", url: mappa("1mheGzIHm_7DZhz6inCo90IVDRe2KVVEJ") },
      { nev: "Evo videók (2023-01)", url: mappa("1dO13TAKqiCwVSIpZSfxfHOJmQ3YKtE7C"), megjegyzes: "német felirattal vagy hang nélkül" },
      { nev: "Horse-Set videók (2019, angol)", url: mappa("1E8kwXzvNzqXBxSmsSv_kkVq29RXQLu5w") },
      { nev: "Tudományos animációk (2012–2021)", url: mappa("13Fqp-nimxj_14X-NgkuLBkEe4nM64BXP"), megjegyzes: "hatás-állítások miatt csak az Irányelvek szerint használható" },
    ],
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
    tetelek: [
      { nev: "Pro / Classic használati útmutató, többnyelvű – 2021-01, Rev 21.1", url: fajl("1bh3PTPUf3liasoKnh9GCeQxCnI2UUut7"), ugyfelUrl: fajl("1aBAHvQnyPrD2YC6XEd_eTIbBECJnDVVx") },
      { nev: "Technikai paraméterek – Pro (2012-10)", url: fajl("0B_lLZKOpL1Z6b2RveDdIbG9HelU") },
      { nev: "Technikai paraméterek – Classic (2013-03)", url: fajl("0B_lLZKOpL1Z6MHZJNlhMN1ptNVk") },
      { nev: "BEMER 3000 és Signal plus – készülékleírás", url: fajl("1bBC4tM-1DGirFcmZIfIXdoIRHe5Zso1U"), megjegyzes: "szkennelt" },
      { nev: "BEMER 3000 és Signal plus – felhasználói utasítás", url: fajl("15XPGM7Hwu3HdZrYnMpEQ-n7xRb-c-E0T"), megjegyzes: "szkennelt" },
      { nev: "Pro szoftverfrissítés – telepítési leírás (2013–2014)", url: mappa("1IPDNTrBrvmDVzjQpZSnMHR3oNIY5TWgh") },
      { nev: "Certificate 2014 · Konformitätserklärung (DE)" },
    ],
  },
];
