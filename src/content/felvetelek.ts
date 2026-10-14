// Forrás: Vault · 02 Areas/BEMER/05_Promociok/2026-10-01_30_Day_Run_Oktober_Folytatas.md, „Felvételek” (Tamás adta meg, 2026-10-14).
// Új felvétel = új sor; a sorozat végén is itt maradnak visszanézésre.

export type Felvetel = { datum: string; eloado: string; cim: string; url: string };
export type FelvetelSorozat = { id: string; cim: string; leiras: string; aktualisEddig?: string; felvetelek: Felvetel[] };

export const felvetelSorozatok: FelvetelSorozat[] = [
  {
    id: "30-day-run-2026-10",
    cim: "30 Day Run – októberi előadássorozat (2026)",
    leiras: "Reggeli, 30 perces Zoom-előadások külső trénerektől: munkaszervezés, kapcsolatépítés, értékesítési beszélgetés.",
    aktualisEddig: "2026-11-15", // a sorozat vége (10-30) + két hét a visszanézésre
    felvetelek: [
      {
        datum: "2026-10-06",
        eloado: "Nagy Béla",
        cim: "Szervezett munka, időbeosztás és hatékonyság",
        url: "https://us06web.zoom.us/rec/share/ecIes6srmMWzPA2OWCLmQRxdQoj0_ScPdroUgEXPL2ndLpmJDl5CEF5zrQxTMqA.uDuJkYnaNIPagHo2",
      },
      {
        datum: "2026-10-07",
        eloado: "Nagy Béla",
        cim: "Mennyiségi munka és a nagy számok törvénye",
        url: "https://us06web.zoom.us/rec/share/lAq5C0IeMjI4FGlABjXbz2vmm63mZhcvIVPjUchreoZ3K6qIfWTPXX0xII_KI5IF.WUzhOjRgBwt9ZZdz",
      },
      {
        datum: "2026-10-08",
        eloado: "Nagy Béla",
        cim: "Az elindítás lépései – új partner az első lépésekben",
        url: "https://us06web.zoom.us/rec/share/TkX1EYagp4aK7EuFb8yKuSAlafrG2wLNRfYis-MVAlK8WK1zNlLVkUj6AjmJHdtJ.0BSqngaXQi7fXrtW",
      },
      {
        datum: "2026-10-12",
        eloado: "Nyíri Zoltán",
        cim: "A jó kérdés ereje",
        url: "https://us06web.zoom.us/rec/share/A-qk222G5EaadoSrwJwO6FVEqoSBOriVTdVQ5yTb-GxAn4UChXh8aNDxQMdEqQfd.kXMO1DKq0u1Q_d2w",
      },
      {
        datum: "2026-10-14",
        eloado: "Nyíri Zoltán",
        cim: "Kérdezésből megértés",
        url: "https://us06web.zoom.us/rec/share/hM0xq8OsFy5vj67oXAWTpD_FbBWVpD7NZxcM28kYEm_DiqTcroHNl-qC4uolNiY.uzVyKzG-5qKRz4Qy",
      },
    ],
  },
];
