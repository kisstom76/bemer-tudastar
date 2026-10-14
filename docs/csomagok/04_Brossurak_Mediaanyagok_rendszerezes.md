# 4. csomag – Brossúrák és médiaanyagok rendszerezési terve

**Készült:** 2026-10-13 · **Bemenet:** a 2. csomag eredménye ([`02_BeckZoli_Evo_Prospektusok_osszevetes.md`](02_BeckZoli_Evo_Prospektusok_osszevetes.md)), a [`DRIVE_DONTESEK_ELSO_KOR.md`](../DRIVE_DONTESEK_ELSO_KOR.md), a [`RENDSZERTERV.md`](../RENDSZERTERV.md) C) Drive-elve, és a teljes Drive leltára (38 417 fájl, név, méret, dátum; a PDF-eknél a belső „készült” dátum is).
**Semmit nem mozgattam, nem másoltam, nem töröltem, nem osztottam meg. A vaultba nem írtam.** Ez csak javaslat. A végrehajtás Tamás jóváhagyása után, külön lépésben jön.

> ⚠️ **2026-10-14 – már a helyén:** B1–B11, K3, K5 és V1 a 2. csomag utómunkájaként átkerült a 2. pontbeli mappákba (`05_Media_Konyvtar/Brossurak/…`, `Evo/Termekkepek_2023-01`, `Videok_2023-01`, `Termekinformacio_2023-01`, `Grafikai_forrasfajlok`). **A fájlnevek még a régiek** (az E2 szerinti átnevezés a 4. csomagé), a `.psd.zip` törölve, az `mdzjy`/`qarsz` zip megmarad (3-3 egyedi kép), a B11 a `Lovas/2020`-ban (D3 még nyitott). Részletek: a 02-es jelentés vége.

Jelek: 🟢 aktuális · 🟡 régebbi, de még használható · 🔴 elavult → archív · 👥 partnereknek (a `08`-ba) · 🔒 csak saját · ❓ Tamás döntése kell

---

## Röviden (laikusan)

1. **Most négy helyen vannak szétszórva a brossúrák és a médiaanyagok** (régi `Bemer` főmappa: `#Prospektusok`, `BEMER Evo`, `BEMER Images - Logos`, `#Videok`, `Bemeres fotók`; az új rendben: `05_Media_Konyvtar`, `03_Hivatalos_Kiadvanyok`). A javaslat szerint két helyen lesznek: **minden marketinganyag a `07_Uzleti_Tudastar/05_Media_Konyvtar` alatt**, **minden gépkönyv és használati útmutató a `01_Szakmai_Tudastar/03_Hivatalos_Kiadvanyok` alatt**. Mindkettő típus, azon belül termékvonal (Humán / Lovas / Kutya), azon belül kiadási év szerint rendezve.
2. **Minden tételnél ott a kiadás dátuma**, a fájlnévben is (`2023-01_Rev23.1_…`). Ránézésre látszik, mi a friss és mi a régi.
3. **A partnereknek szánt példány fizikailag a `08`-ban van, a saját helyén parancsikon mutat rá** (ez a RENDSZERTERV meglévő szabálya). A `08`-ban csak a ma is használható, magyar vagy szöveg nélküli anyag van. A régi kiadások a saját területen maradnak, „korábbi kiadás” jelöléssel.
4. **A legfrissebb hivatalos anyag forrása mindig a BEMER Médiatár és a BBO.** Mi nem tudjuk naprakészen tartani a központ teljes kínálatát. A tudástár oldal ezért oda is linkel, mi pedig csak azt tartjuk meg, amit ténylegesen használunk (magyar, nyomtatható, dátumozott).
5. **Ami hiányzik:** 2024-es vagy újabb nagy Evo prospektus, Evo-s lovas brossúra, a 2026-10-ben frissült Dog szórólap, magyar nyelvű Evo-videó. Ezek valószínűleg a Médiatárból vagy a BBO-ból letölthetők (lásd 6. pont).
6. **Mit kérek tőled:** a 7. pontban 9 döntés van, sorszámozva. Utána a 8. pont mozgatási listája végrehajtható.

---

## 1. Alapelvek (javaslat)

| # | Elv | Miért |
|---|---|---|
| E1 | **Típus → termékvonal → év.** Pl. `Brossurak/Human/Hajtogatos/2025/` | Így kérdezed: „kell egy humán szórólap, a legújabb” |
| E2 | **Dátum a fájlnévben:** `ÉÉÉÉ-HH_Rev<szám>_<rövid leírás>_HU.pdf`. A BEMER-kódot (`2125-2209-…`) a fájlnév végén meghagyjuk, mert a központ azzal azonosít | A Drive módosítási dátuma félrevezet: a letöltés napját mutatja, nem a kiadásét. A PDF belső dátuma és a Rev-szám a megbízható |
| E3 | **A partnereknek szánt fájl fizikailag a `08`-ban van, a saját helyén parancsikon** | RENDSZERTERV 2. C) – egy fájl, egy hely, a link nem törik |
| E4 | **A `08`-ba csak 🟢/🟡, magyar vagy szöveg nélküli anyag kerül.** Idegen nyelvű és 🔴 nem | A partner ne küldjön ki ügyfélnek 2021-es árakat vagy német szöveget |
| E5 | **Hivatalos és saját anyag külön** (DRIVE_DONTESEK, 2026-10-13, 2. szabály) | A saját fotó, a rendezvényfotó és az ügyfélsztori nem keveredhet a központi anyaggal |
| E6 | **A régi Pro-korszak anyagai külön, „régi készülékekhez” jelöléssel** (DRIVE_DONTESEK, 2026-10-12) | A Pro/Classic-tulajdonos ügyfeleknek még kellhet; az aktuális Evo-anyagtól el kell válnia |
| E7 | **Duplikátumból egy marad**, a többi archív (törlés csak a kétlépéses jóváhagyással) | Archiválási szabály: `04_Archive/02_Areas/BEMER/` + egy sor a vault Archívum-indexébe |

---

## 2. Javasolt Drive-szerkezet – saját terület

```
02_Areas/BEMER/
├── 01_Szakmai_Tudastar/
│   └── 03_Hivatalos_Kiadvanyok/
│       └── Készülékek - leírás - ismertető/      ← NEVE MARAD (a vault rá linkel)
│           ├── Evo/                                ← új almappa
│           ├── Horse-Set/                          ← új almappa
│           ├── Dog/                                ← új almappa
│           ├── LIVATY/                             ← új almappa
│           └── Regi_keszulekek_Pro_Classic_3000/   ← új almappa
│
└── 07_Uzleti_Tudastar/
    └── 05_Media_Konyvtar/                          ← megvan (Dog_Line, Evo)
        ├── Brossurak/                              ← ÚJ
        │   ├── Human/
        │   │   ├── Nagy_prospektus/   (2021, 2023)
        │   │   ├── Hajtogatos/        (2023, 2025)
        │   │   └── Beauty/            (2023)
        │   ├── Lovas/                 (2016, 2020)
        │   ├── Kutya/                 (üres – pótlandó)
        │   └── Uzlet/                 (2021, 2023)
        ├── Plakatok/                               ← ÚJ (A1 kiállítási plakátok, 2023)
        ├── Evo/                                    ← megvan
        │   ├── Kozossegi_media_9x16 (…2023-02)/    ← megvan, 201 kép
        │   ├── Kozossegi_media_4x5 (BBO, 2022-12)/ ← ÚJ – 79 kép, 8 csomag
        │   ├── Termekkepek_2023-01/                ← ÚJ – 40 termékkép
        │   ├── Eletmod_es_termekfotok_2022/        ← ÚJ – 14 kép (Horseset_Evoset images)
        │   ├── Videok_2023-01/                     ← ÚJ – 5 videó
        │   ├── Termekinformacio_2023-01/           ← ÚJ – 2 PDF
        │   └── Grafikai_forrasfajlok/              ← ÚJ – 1 PSD
        ├── Horse-Set/                              ← ÚJ – videók 2019 (DE/EN)
        ├── Dog_Line/                               ← megvan (logók, matricák, CD-útmutató, árlista)
        ├── Tudomanyos_animaciok/                   ← ÚJ – vazomóció, kapilláris, Klopp (2007–2021)
        ├── Logok_es_arculat/                       ← ÚJ – BEMER Group logó 2019, partnerlogó 2022
        └── Sajat_fotok_es_rendezvenyek/            ← ÚJ, 🔒 – saját és rendezvényfotók
```

**Miért itt:** a brossúra, a kép és a videó marketinganyag, a `07_Uzleti_Tudastar` alá tartozik, nem a szakmai ágba (vault `00_Tudastar_Hasznalata.md`: „a mappa azt mondja meg, honnan jött”). A gépkönyv viszont hivatalos termékleírás: annak a vault szabálya szerint a `01_Szakmai_Tudastar/03_Hivatalos_Kiadvanyok` a helye, és ott is van már.

**A `Készülékek - leírás - ismertető` almappái** opcionálisak (❓ D4). 16 fájlnál még átlátható almappák nélkül is. Csak akkor érdemes almappázni, ha bővül.

---

## 3. Tételenkénti javaslat (minden tétel, dátummal)

### 3.1 Brossúrák és szórólapok → `05_Media_Konyvtar/Brossurak/`

| # | Jelenlegi fájl (régi `Bemer` mappa) | Kiadás | Nyelv | Állapot | Javasolt hely és új név | 👥 |
|---|---|---|---|---|---|---|
| B1 | `#Prospektusok/Nyomatatásra…/241205-PAMPH-Human-EVO-EUOPE-Rev-24.1-HU-04-print (1).pdf` (2 o.) | **2025-01** Rev 24.1 | HU | 🟢 legújabb | `Human/Hajtogatos/2025/2025-01_Rev24.1_Human_Evo_hajtogatos_NYOMDAI_HU (241205-PAMPH).pdf` | 👥 |
| B2 | `BEMER Evo/EVO Brossurák/2125-2209-PROSP-Human-EVO-Rev23-1-HU-Web.pdf` (13 o.) | 2023-01 Rev 23.1 | HU | 🟡 az egyetlen nagy Evo prospektus | `Human/Nagy_prospektus/2023/2023-01_Rev23.1_Human_Evo_nagy_prospektus_HU (2125-2209).pdf` | 👥 |
| B3 | `…/2126-…-leistungsfaehig-HU-Web.pdf` | 2023-01 Rev 23.1 | HU | 🟡 – a B1 (2025) nem ennek az újabb kiadása: az általános szórólap több felhasználói beszámolóval (Joey Kelly és mások) | `Human/Hajtogatos/2023/2023-01_Rev23.1_Hajtogatos_Teljesitokepes_HU.pdf` | 👥 ❓ D2 |
| B4 | `…/2127-…-schmerzfrei-HU-Web.pdf` | 2023-01 | HU | 🟡 | `…/2023/2023-01_Rev23.1_Hajtogatos_Fajdalommentes_HU.pdf` | 👥 |
| B5 | `…/2128-…-sportlich-HU-Web.pdf` | 2023-01 | HU | 🟡 | `…/2023/2023-01_Rev23.1_Hajtogatos_Sportos_HU.pdf` | 👥 |
| B6 | `…/2129-…-bewusst-HU-Web.pdf` | 2023-01 | HU | 🟡 | `…/2023/2023-01_Rev23.1_Hajtogatos_Tudatos_HU.pdf` | 👥 |
| B7 | `…/2135-2211-PROSP-Beauty-EVO-Rev23-1-HU-Web.pdf` | 2023-01 | HU | 🟡 – 2026-tól a Beauty Pack neve **Light Pack EVO** (PROGRESS, 2026-10-02) | `Human/Beauty/2023/2023-01_Rev23.1_Beauty_Pack_HU.pdf` | 👥 + megjegyzés: „azóta Light Pack EVO néven” |
| B8 | `…/2130-2209-PROSP-Business-EVO-Rev23-1-HU-Web.pdf` (2 o.) | 2023-01 | HU | 🟡 | `Uzlet/2023/2023-01_Rev23.1_Uzleti_Evo_HU.pdf` | 👥 |
| B9 | `#Prospektusok/Human/A BEMER működik_HU.pdf` (17 o.) | 2021-05 Rev 21.1 | HU | 🔴 Pro-korszak; **tanulási tartalma van** (tanulmányi hivatkozások) | `Human/Nagy_prospektus/2021/2021-05_Rev21.1_A_BEMER_mukodik_HU (Pro-korszak).pdf` | 🔒 korábbi kiadás |
| B10 | `#Prospektusok/Üzlet/1983-2005-PROSP-Business-Rev-21.1-6-pages-HU…pdf` (6 o.) | 2021-02 Rev 21.1 | HU | 🔴 | `Uzlet/2021/2021-02_Rev21.1_Uzleti_6oldalas_HU (Pro-korszak).pdf` | 🔒 |
| B11 | `#Prospektusok/Horse Set/BEMER Horse Set_EcoHoofPrint_DE_2020.pdf` (1 o.) | 2020-02 | DE | 🔴 | `Lovas/2020/2020-02_Horse-Set_EcoHoofPrint_DE.pdf` vagy archív | 🔒 ❓ D3 |
| B12 | `#Archiv/1597-1609-PROSP-VET-2016-A5-quer-US-en-06-web.pdf` (7 o.) | 2016-09 | EN (USA) | 🔴 a VET-vonal 2016-os bemutatása | archív (már korábban is archívban volt) | – |
| B13 | `#Dokumentumok a munkához/Német nyelvű dokumentumok/Prospekt BEMER.pdf` (22 o.) | 2013-05 | DE | 🔴 | archív – **Tamás már döntött** (2026-10-12) | – |

**Brossúra-idővonal:** 2013 (DE) → 2016 (VET, EN) → 2020 (Horse, DE) → 2021 Rev 21.1 (Human nagy, Üzleti) → 2023 Rev 23.1 (Evo: nagy, 4 hajtogatós, Beauty, Üzleti) → **2025 Rev 24.1 (Evo hajtogatós, nyomdai)**.

### 3.2 Plakátok → `05_Media_Konyvtar/Plakatok/`

| # | Fájl | Kiadás | Tartalom (megnéztem) | Javaslat | 👥 |
|---|---|---|---|---|---|
| P1 | `BEMER Images - Logos/Poszter nyomatok/2157-2304-A1 Messe-Poster-02-print.pdf` (99 MB, 19 o.) | 2023-04 | 19 db A1-es, **szöveg nélküli** kiállítási plakát: Evo életmódképek (B.Bed, B.Spot, B.Light, B.Box Evo), csak BEMER-logóval | `2023-04_A1_kiallitasi_plakatok_Human_Evo_19db (2157-2304).pdf` | 👥 kiállításhoz; a `Kiallitas_Segedanyagok` mappából parancsikon |
| P2 | `…/2157-2304-A1 Messe-Poster-02-Horse-print.pdf` (10 MB, 4 o.) | 2023-04 | 4 db A1-es lovas plakát, szöveg nélkül | `2023-04_A1_kiallitasi_plakatok_Horse_4db (2157-2304).pdf` | 👥 |

### 3.3 Képek

| # | Jelenlegi hely | Mennyi | Dátum | Javasolt hely | 👥 |
|---|---|---|---|---|---|
| K1 | `05_Media_Konyvtar/Evo/Kozossegi_media_9x16 (…2023-02)/` (új rend) | 201 kép | 2023-02 | **marad** | 👥 – a `08`-ba áthelyezve, ide parancsikon |
| K2 | régi `BEMER Images - Logos/BBO-ból/` – **15 zip, ebből csak 8 különböző** (a „(1)”, „(2)” végűek bájtra azonosak), és 5 már kibontott mappa ugyanezekből | 79 kép, 4:5 (Instagram/Facebook) | 2022-12-es fotózás, BBO-letöltés 2025-02 | `Evo/Kozossegi_media_4x5 (BBO, 2022-12)/` – a 8 egyedi csomag **kibontva**, alkalmazásonként almappa (B.Alltag, B.Bed, B.Body, B.Light, B.Pad, B.Spot, 2 vegyes); a 7 duplikát zip és a kibontott mappák → archív | 👥 |
| K3 | régi `BEMER Evo/Partner_anyagok/Képek/` | 40 termékkép (4:5 és 9:16) | 2023-01 | `Evo/Termekkepek_2023-01/` | 👥 |
| K4 | régi `BEMER Images - Logos/Horseset_Evoset images/` | 14 kép (Evo életmód + 4 lovas termékfotó) | 2022–2019-es fotók, letöltve 2023-06 | `Evo/Eletmod_es_termekfotok_2022/` + a 4 lovas → `Horse-Set/Kepek/` | 👥 |
| K5 | régi `BEMER Evo/Partner_anyagok/Tömörített/` – PSD + ugyanaz zipben + 2 képcsomag-zip | 4 fájl, 305 MB | 2023-01 | `Evo/Grafikai_forrasfajlok/Offene_Photoshop_Datei_all_products.psd`; a `.psd.zip` és az `mdzjy_Archive.zip` duplikátum → archív; a `qarsz_Archive.zip` tartalmát a végrehajtáskor kell megnézni | 🔒 (szerkesztéshez; a partnernek a kész kép kell) |
| K6 | régi `BEMER Images - Logos/LOGO-BEMER_Group/` + `.zip` + `BEMER_Partner_Logo.png` + `2064-2103-Background-Webinar-03.jpg` | 7 + 3 fájl | 2019, 2021, 2022 | `Logok_es_arculat/` – a zip duplikátum → archív | 🔒 ❓ D5 – a 2019-es logó elavult lehet; a partner a Médiatárból töltse le az aktuálisat |
| K7 | `05_Media_Konyvtar/Dog_Line/` (új rend) | 4 fájl | 2026-09 | **marad**; a `BEMER_Corporate_Design_Guidelines.pdf` (2026-04) nem csak a Dog Line-ra vonatkozik → `Logok_es_arculat/`-ba, a Dog_Line-ban parancsikon | 🔒 |
| K8 | régi `Bemeres fotók/2023 EVO gála BERLIN/` | 67 kép, 439 MB | 2023-01 | `Sajat_fotok_es_rendezvenyek/2023-01_Evo_gala_Berlin/` | 🔒 – rendezvényfotó, emberekkel |
| K9 | régi `Bemeres fotók/Győri infó est 20230228/` | 17 kép | 2023-02 | `Sajat_fotok_es_rendezvenyek/2023-02_Gyori_info_est/` | 🔒 – résztvevők arca, hozzájárulás nélkül nem osztható |
| K10 | régi `Bemeres fotók/BEMER Pro/` | 17 kép | 2020-05 | `Sajat_fotok_es_rendezvenyek/2020-05_BEMER_Pro_keszulekfotok/` | 🔒 ❓ D6 – saját Pro-fotó, a „régi készülékekhez” részhez jól jöhet |
| K11 | régi `Bemeres fotók/Tomiról/` | 9 kép | 2020-08 | `Sajat_fotok_es_rendezvenyek/2020-08_Tamasrol/` – a tudástár bemutatkozásához (fotó-placeholder!) jelölt lehet | 🔒 ❓ D6 |
| K12 | régi `#Ügyfél sztorik/Lovak/Rokko - Örkénypuszta - Mikos István/` | 6 kép | 2021-02 | **nem ide** – ügyfélsztori; a vault ügyfélgondozási projektjéhez tartozik, nem médiaanyag | 🔒 |
| K13 | régi `BEMER DOG/Első prezi/` | 7 PNG | 2026-02 | a Dog-előadás képei → `06_Prezentaciok/Hivatalos_Kozponti/Dog_Line/` mellé | 🔒 |

### 3.4 Videók

| # | Jelenlegi hely (régi `Bemer`) | Dátum | Nyelv | Javasolt hely | 👥 |
|---|---|---|---|---|---|
| V1 | `BEMER Evo/Partner_anyagok/Video/` – Unboxing, Überblick, Erklärvideo kurz, Beauty Pack, Premium Set (5 db, 1,12 GB) | 2023-01 | német felirat, vagy beszéd nélküli | `Evo/Videok_2023-01/` (a véletlenszerű `nwzq4_` előtag nélkül) | 👥 – „német nyelvű / hang nélküli” jelöléssel |
| V2 | `#Videok/Horse Set/Filmek/DE` és `/EN` – Reportage, „how to”, VET Film (2×3 db, 881 MB) | 2019-12 | DE, EN | `Horse-Set/Videok_2019/` – a magyar partnernek az **EN** elég, a DE → archív | 👥 EN ❓ D3 |
| V3 | `#Videok/Vasomotion.mp4`, `Vazomóció és következménye.mp4`, `A BEMER által -megnyitott- kapilláris.mp4`, `Valós idejű felvétel.mp4`, `A BEMER terápia hatása az immunrendszerre.mp4`, `A BEMER terápia bemutatása - több mint mágnesterápia.mp4` | 2012 – 2021 | HU/hang nélküli | `Tudomanyos_animaciok/` – előadáshoz | 👥 ❓ D7 – a hatás-állítások miatt csak az Irányelvek szerint használható |
| V4 | `#Videok/Before BEMER.mp4`, `After BEMER.mp4`, `Real Time Before and After BEMER!.mp4` | 2021–2022 | – | `Tudomanyos_animaciok/` | ❓ D7 – **a forrásuk ismeretlen**; előtte/utána felvétel, gyógyhatás-állítás kockázata |
| V5 | `#Videok/Sclerosis Multiplex_Duray_esetek.wmv` (161 MB) | 2020-05 | HU | `01_Szakmai_Tudastar/01_Eloadasok/` (Duray-előadás, esetbemutatás) | 🔒 – betegek, egészségügyi adat |
| V6 | `Prezentációk/Prezentációkba videók/Dr House és az asztma.mp4` | 2025-02 | HU | marad a prezentációk mellett | 🔒 – **sorozatrészlet, szerzői jogi okból nem osztható** |
| V7 | `#Archiv/2012_február_BEMER partner_CD/` (wmv + ppsx, 182 MB) | 2007–2012 | HU/DE | archív (már korábban is archívban volt; lásd D9) | – |

### 3.5 Gépkönyvek és használati útmutatók → `03_Hivatalos_Kiadvanyok/Készülékek - leírás - ismertető/`

A gépkönyvek **már a helyükön vannak** (a 2. csomag óta). Itt csak a dátumozás és a partneri megosztás a kérdés.

| # | Fájl | Kiadás (PDF belső dátuma) | Készülék | Állapot | 👥 |
|---|---|---|---|---|---|
| G1 | `2117-2208-764012-IFU Evo_EastEU-GC-3013_Inhalt_v06_web_doublesides.pdf` (281 o.) | 2022-11 / 2023-01, v06 | Evo, kelet-európai (HU is) | 🟢 | 👥 – „Készülék és technikai információk” |
| G2 | `2090-2109-764011-IFU Evo_WestEU-V05-01-web.pdf` (242 o.) | 2024-11, V05 | Evo, nyugat-európai | 🟡 újabb kiadás, de más régióé; ❓ benne van-e a magyar | 🔒 |
| G3 | `BEMER_Horse-Set_Manual_Rev20.1 (BEMER EE, 2023-02).pdf` (107 o.) | 2020-10 Rev 20.1 | Horse-Set | 🟢 a legújabb, ami nálunk van | 👥 |
| G4 | `BEMER_Horse Set_Manual_2022.pdf` (95 o.) | 2019-08 Rev 17.3 | Horse-Set | 🔴 a G3 kiváltja; a „2022” a fájlnévben félrevezető | archív |
| G5 | `BEMER Dog_felhasználói kézikönyv_2026.pdf` (44 o.) | 2026-09 Rev 26.6 | Dog | 🟢 | 👥 |
| G6 | `livatyhasznalati-utmutato-huv251-6.pdf` (11 o.) | 2025-11 | LIVATY Lume | 🟢 | 👥 |
| G7 | `BEMER Pro_Classic_manual_2022.pdf` (522 o., több nyelv) | 2021-01 Rev 21.1 | Pro/Classic | 🟡 régi készülék | 👥 „Régi készülékekhez” |
| G8 | `BEMER Pro_Classic_használati útmatás_2015.pdf` (78 o.) | 2014-12 / 2015-01 | Pro/Classic | 🔴 a G7 kiváltja | 🔒 korábbi kiadás |
| G9 | `Technikai_parameterek_BEMER_Pro_new2.pdf`, `Technikai_parameterek_Classic.pdf` | 2012-10, 2013-03 | Pro, Classic | 🟡 | 👥 „Régi készülékekhez” |
| G10 | `BEMER 3000 és Signal plus felhasználói utasítás.pdf`, `…készülékleírás.pdf` (szkennelt) | 2020-08 szkennelés (a készülék 2000-es évekbeli) | BEMER 3000 | 🟡 történeti | 👥 „Régi készülékekhez” ❓ D6 |
| G11 | régi `BEMER Pro software Update/` – telepítési leírás HU + 2.1.2-es szoftvercsomag | 2013-02, 2014-06 | Pro (B.BOX Professional) | 🟡 Pro-tulajdonos ügyfélnek kellhet | `Regi_keszulekek…/` 🔒; ❓ D6 |
| G12 | `#Dokumentumok a munkához/…/Termék oktatás BEMER Premium-Set Evo 2023_06.pdf` (47 o.) | 2023-06 | Evo Premium-Set | 🟢 **Tamás már döntött:** partnereknek, ügyfélnek kiküldhető | 👥 |
| G13 | `Készülék generációk hatás időtartama.png` | 2023-02 | – | marad (a Kompendium ábrája) | 🔒 |

### 3.6 Termékinformáció és árlista → `05_Media_Konyvtar/Evo/Termekinformacio_2023-01/`

| # | Fájl | Kiadás | Javaslat | 👥 |
|---|---|---|---|---|
| T1 | `Partner_anyagok/Pdf/0teq2_BEMER Evo General Information.pdf` (2 o.) | 2023-01 | `2023-01_Evo_General_Information_EN.pdf` | 🔒 angol; tanulási tartalom → vault |
| T2 | `…/ukna7_The BEMER Evo Family Produktübersicht….pdf` (13 o.) | 2023-01 | `2023-01_Evo_Family_termekattekintes.pdf` | 🔒; tanulási tartalom → vault |
| T3 | `…/185ks_BEMER Evo Preisliste EN.pdf` | 2022-12 | 🔴 elavult árlista → archív | – |

---

## 4. Javasolt `08_Partnereknek_Megosztott` szerkezet

A meglévő mappák **neve marad** (a partnerek már ismerik, és a megosztási link a mappához tartozik, nem a névhez). Két új mappa jön, és két üres mappa új szerepet kap.

```
08_Partnereknek_Megosztott/
├── Tartalom - Ezt olvasd el!            ← marad → „átköltöztünk” mutató (RENDSZERTERV 5.2/5)
├── Brossúrák és szórólapok/             ← ÚJ
│   ├── Humán/        B1 (2025, nyomdai) · B2 (2023 nagy) · B3–B6 (2023 hajtogatós) · B7 (2023 Beauty)
│   ├── Üzleti/       B8 (2023)
│   └── Kiállítási plakátok/   P1, P2 (2023, A1)
├── Képek és videók/                     ← ÚJ
│   ├── Közösségi média 9×16 (2023-02)/   K1
│   ├── Közösségi média 4×5 (2022-12)/    K2
│   ├── Termékképek Evo (2023-01)/        K3, K4
│   ├── Videók Evo (2023-01)/             V1
│   ├── Videók Horse-Set (2019, EN)/      V2 – ❓ D3
│   └── Tudományos animációk/             V3 – ❓ D7
├── Készülék és technikai információk/   ← megvan, ÜRES → ide: G1, G3, G5, G6, G12
├── Régi készülékekhez leírások/         ← megvan, ÜRES → ide: G7, G9, G10 + a Certificate 2014 és a Konformitätserklärung (Tamás 2026-10-12-i döntése)
├── Szakmai anyagok/                     ← megvan, ÜRES → Kompendium, esetismertető 2020 (már eldöntve, nem ennek a csomagnak a része)
├── Információs és segédanyagok/         ← megvan
├── Nyomtatványok/                       ← megvan
└── Prezentációk/                        ← megvan
```

⚠️ **Eltérés egy korábbi feljegyzéstől:** a `RENDSZERTERV.md` 5.1 szerint a három üres almappa („Régi készülékekhez leírások”, „Szakmai anyagok”, „Készülék és technikai információk”) „🗑️ törölhető”. A 2026-10-12-i döntésed óta viszont kell „régi készülékekhez tartozó anyagok” rész. Ezért azt javaslom, hogy **ne töröljük, hanem töltsük meg őket**. Ez a D1 döntés.

**Méret:** a `08`-ba kerülő médiaanyag kb. 1,8 GB (ebből a videók 1,1 GB). A partnerek csak olvasók, ez nem gond. A tudástár oldal fájlonként linkel, így senkinek nem kell az egészet letöltenie.

---

## 5. Vault-tartalomjegyzék – tervezet

**Javasolt hely:** `02 Areas/BEMER/07_Uzleti_Tudastar/05_Media_Konyvtar/00_Mediakonyvtar_Tartalomjegyzek.md`. Ugyanaz a név, mint a Drive-on, mert a vault szabálya: „a Drive ugyanezekkel a nevekkel van felépítve”. A vaultban ilyen mappa még nincs. A gépkönyvek a meglévő `01_Szakmai_Tudastar/03_Hivatalos_Kiadvanyok/00_Mi_kerul_ide.md` jegyzetbe kerülnek egy új „Gépkönyvek” táblába, nem ide (egy szabály, egy hely). A két jegyzet kölcsönösen linkeli egymást.

A beíráshoz `mcpvault` kell, plusz audit-log sor és a jóváhagyásod, ezért most csak a tervezet készült el:

```markdown
---
title: Médiakönyvtár – tartalomjegyzék (brossúrák, képek, videók, plakátok)
created: 2026-10-XX
status: aktív
forras_tipus: kiadvany
megbizhatosag: magas
tags: [bemer, marketing, mediakonyvtar]
---
# Médiakönyvtár – tartalomjegyzék

> Mi van meg nálunk, melyik kiadás, és mehet-e partnernek. A legfrissebbet mindig
> a BEMER Médiatárban és a BBO-ban is nézd meg: https://library.bemergroup.com/bemer-medien-bibliothek-en
> Felhasználási szabályok: [[…Irányelvek + Kihívások feltételei]] 10. fejezet és a Social Media Policy.

Jel: 🟢 aktuális · 🟡 régebbi, használható · 🔴 elavult (csak kiindulási alap) · 👥 a partneri mappában is

## Brossúrák – Humán
| Anyag | Kiadás | Nyelv | Állapot | 👥 | Drive |
|---|---|---|---|---|---|
| Hajtogatós szórólap, nyomdai | 2025-01 · Rev 24.1 | HU | 🟢 | 👥 | [link] |
| Nagy prospektus | 2023-01 · Rev 23.1 | HU | 🟡 | 👥 | [link] |
| Hajtogatós: teljesítőképes / fájdalommentes / sportos / tudatos | 2023-01 · Rev 23.1 | HU | 🟡 | 👥 | [link] |
| Beauty Pack (azóta: Light Pack EVO) | 2023-01 · Rev 23.1 | HU | 🟡 | 👥 | [link] |
| „A BEMER működik” (Pro-korszak) | 2021-05 · Rev 21.1 | HU | 🔴 | – | [link] |

## Brossúrák – Lovas · Kutya · Üzleti
(ugyanígy; Kutya: ❗ nincs meg – a 2026-10-es frissített szórólap a Médiatárban)

## Plakátok · Képek · Videók · Tudományos animációk · Logók
(egy sor = egy mappa: darabszám, dátum, formátum, 👥, link)

## Hiányzik / pótolni
- 2024+ nagy Evo prospektus · Evo-s lovas brossúra · Dog szórólap 2026-10 · magyar Evo-videó

## Tanulási tartalom, ami még nincs a vaultban
- „A BEMER működik” 2021 (tanulmányi hivatkozások) · Evo Family termékáttekintő 2023 ·
  Evo General Information 2023 · Termék oktatás Premium-Set Evo 2023-06
```

---

## 6. Hiányzó anyagok (a pótlás forrása)

| # | Mi hiányzik | Valószínű forrás | Miért kell |
|---|---|---|---|
| H1 | 2024-es vagy újabb **nagy Evo prospektus** (HU) | Médiatár / BBO Partnerkönyvtár | a 2023-as Rev 23.1 a legújabb nálunk |
| H2 | **Evo-s lovas brossúra** | Médiatár | nálunk csak 2016-os (EN) és 2020-as (DE) van |
| H3 | **Dog szórólap, 2026-10-es frissítés** (BEMER Dog app-utalással, + matrica a régihez) | Médiatár (hírlevél, 2026-10-10, vault BEMER-napló) | a Dog-ból brossúra egyáltalán nincs |
| H4 | **Magyar nyelvű Evo-videó** | BBO / YouTube (a „BEMER 8 percben” már linkként megvan) | a V1 videók németek vagy hang nélküliek |
| H5 | **Aktuális logócsomag** | Médiatár | nálunk 2019-es van |
| H6 | Horse-Set gépkönyv Rev 20.1-nél újabb | Médiatár / BBO | a G3 2020-as |

Ezek letöltése nem ennek a csomagnak a feladata (a csomag csak olvas). A Médiatárat a beépített böngészővel meg lehet nézni, ha kéred.

---

## 7. Döntések (sorszámozva – tételenként válaszolj, kérlek)

| # | Kérdés | Javaslatom |
|---|---|---|
| **D1** | A `08` három üres almappáját ne töröljük, hanem töltsük meg (4. pont)? | **Igen**, mert kell a „régi készülékekhez” rész, és a mappák már a partnerek előtt vannak |
| **D2** | A 2023-as hajtogatósokból (B3–B6) mind a négy menjen a `08`-ba, vagy csak a 2025-ös (B1)? | **Mind a négy + B1.** Négy különböző téma (sport, fájdalom, tudatos, teljesítőképes); a B1 egy általános szórólap, egyiket sem váltja ki |
| **D3** | A lovas anyagok: a német 2020-as szórólap (B11) és a német videók (V2 DE) archívba, az angol videók a `08`-ba? | **Igen.** Magyar lovas anyag nincs, az angol videó a legjobb, ami van |
| **D4** | Kapjon almappákat a `Készülékek - leírás - ismertető` (Evo / Horse-Set / Dog / LIVATY / Régi)? | **Most még ne**, 16 fájlnál átlátható. A dátum kerüljön be a fájlnevekbe |
| **D5** | A 2019-es BEMER Group logó elavult-e? A partnerek a logót a Médiatárból töltsék le? | **Igen, a Médiatárból.** Nálunk maradjon 🔒, ne a `08`-ban |
| **D6** | A saját Pro-fotók (K10), a Pro szoftverfrissítés (G11) és a BEMER 3000 leírás (G10) mehet a „Régi készülékekhez” részbe a partnereknek? | **G10 igen, G11 igen** (Pro-tulajdonos ügyfélnél kellhet), **K10 előbb nézd át** (saját fotó) |
| **D7** | A tudományos animációk (V3) és az előtte/utána videók (V4) mehetnek-e partnernek? | **V3 igen** (hivatalos, régi animációk), **V4 nem**, amíg nem tudjuk a forrását |
| **D8** | A fájlok átnevezése dátumos névre (E2) – mehet? | **Igen.** A Drive-azonosító és a link átnevezéskor megmarad |
| **D9** | A korábban is archívban lévő tételek (B12, V7) a `04_Archive/02_Areas/BEMER/` alá menjenek, vagy várjunk az „előzőleg is archív” almappáról szóló döntésre (DRIVE_DONTESEK, „Archív – Tamás ötlete”)? | **Várjunk**, amíg arról döntesz; addig a helyükön maradnak |

---

### Tamás válasza (2026-10-14)

- **D1–D8: igen**, mind a javaslatom szerint. Pontosítások: D6-nál a G10 (BEMER 3000) és a G11 (Pro szoftverfrissítés) mehet a partnereknek, a saját Pro-fotókat (K10) Tamás előbb átnézi. D7-nél a V3 animációk mehetnek, a V4 előtte/utána videók nem.
- **D9:** Tamás jóváhagyta az „előzőleg is archív” almappát (DRIVE_DONTESEK, „Archív – Tamás ötlete”). ⚠️ Ez eltér a vault `Archivalas_es_Lezaras.md` „felső szintet tükrözzük, alatta nem megyünk mélyebbre” szabályától. Tamás megerősítette (2026-10-14: minden területre érvényes, a mappa neve `_Korabbi_archiv_2026_elott`). A vault szabálya át van írva (`Archivalas_es_Lezaras.md`, Drive-rész, „Kivétel”). Így a B12, a V7 és az egész régi `#Archiv` mappa ide megy: `04_Archive/02_Areas/BEMER/_Korabbi_archiv_2026_elott/`.

## 8. Végrehajtási lista (a döntések után, külön sessionben)

Minden lépés Drive-on belüli **áthelyezés vagy átnevezés**: az azonosító és a link megmarad, nincs feltöltés. Archiválás: `04_Archive/02_Areas/BEMER/` + egy sor a vault Archívum-indexébe. Törlés nincs benne.

| Lépés | Mit | Hány fájl | Ki csinálja |
|---|---|---|---|
| 1 | Új mappák a `05_Media_Konyvtar` alatt (2. pont fa) és a `08` alatt (4. pont) | – | Claude (Drive-konnektor) |
| 2 | B1–B10 áthelyezés + átnevezés; a 👥 tételek a `08/Brossúrák és szórólapok`-ba | 10 | Claude |
| 3 | P1–P2 → `08/Brossúrák…/Kiállítási plakátok` | 2 | Claude |
| 4 | K2: a 8 egyedi zip kibontása **helyben** (nem a Drive-on), feltöltés a `Kozossegi_media_4x5` mappába; a 7 duplikát zip és az 5 kibontott mappa → archív | 79 kép | Claude – ⚠️ ez az egyetlen feltöltéses lépés (kb. 70 MB) |
| 5 | K3, K4, K5, V1, V2, V3, T1–T2 áthelyezés | kb. 70 | Claude |
| 6 | K8–K11, K13, V5 → saját helyre (🔒) | kb. 110 | Claude |
| 7 | G-tételek: a 👥 tételek áthelyezése a `08` megfelelő almappájába | 9 | Claude |
| 8 | **Parancsikonok** a saját helyen a `08`-ba áthelyezett fájlokra | kb. 25 mappa/fájl | ⚠️ **Tamás kézzel**: a Claude Drive-kapcsolata parancsikont nem tud létrehozni (PROGRESS, 2026-10-12) |
| 9 | Duplikátumok és 🔴 tételek archiválása (B13, G4, G8, T3, K2 duplikátumok, K5 zip-ek, K6 zip, V2 DE) | kb. 20 | Claude, a kétlépéses jóváhagyás után |
| 10 | Vault: a médiakönyvtár-tartalomjegyzék megírása (5. pont) + a „Gépkönyvek” tábla a `00_Mi_kerul_ide.md`-be + audit log | 2 jegyzet | Claude (mcpvault) |
| 11 | Tudástár: a „Letölthető anyagok” oldal (9. pont) | – | Claude, a technikai fázisban |

**Becsült igény:** a 2–7. lépés közepes (Sonnet elég). A 4. lépés a legkockázatosabb (kibontás és feltöltés), ott az eredményt bájtra vissza kell ellenőrizni.

---

## 9. A tudástár „Letölthető anyagok” oldalának vázlata

**Új kategória** a `src/content/kategoriak.ts`-be:

```ts
{
  id: "letoltesek",
  cim: "Letölthető anyagok",
  ikon: "⬇️",
  teaser: "Brossúrák, képek, videók, plakátok és használati útmutatók – kiadási dátummal, hogy mindig tudd, mi a friss.",
  allapot: "missing",
},
```

**Adatfájl:** `src/content/letoltesek.ts`. Ugyanaz a minta, mint a `promociok.ts`: a vault-tartalomjegyzékből szinkronizálható (RENDSZERTERV 2. A folyam).

```ts
export type Letoltes = {
  cim: string;              // "Humán hajtogatós szórólap"
  csoport: "brosura" | "plakat" | "kep" | "video" | "gepkonyv" | "regi_keszulek";
  vonal: "human" | "lovas" | "kutya" | "uzleti" | "altalanos";
  kiadas: string;           // "2025-01"
  rev?: string;             // "24.1"
  nyelv: "HU" | "EN" | "DE" | "nyelvfuggetlen";
  allapot: "aktualis" | "regebbi";        // 🔴 elavult tétel ide nem kerül
  hasznalat?: "nyomtatasra" | "webre" | "kozossegi_media";
  meret?: string;           // "2,8 MB"
  driveUrl: string;         // a 08-as példány linkje
  megjegyzes?: string;      // "Azóta Light Pack EVO néven"
};
```

**Az oldal felépítése** (felülről lefelé):

1. **Figyelmeztető doboz** (narancs keret, a `DESIGN_ARCULAT` szerint): „A legfrissebb hivatalos anyagot mindig a BEMER Médiatárban és a BBO-ban is nézd meg. A képek és videók közösségi médiás használatának szabályai: Irányelvek → Social Media.” Két gomb: Médiatár · Irányelvek (belső link).
2. **Szűrők** (gombsor): Humán · Lovas · Kutya · Üzleti · és egy „Csak nyomtatható” kapcsoló.
3. **Szekciók**, mindegyik kártyarácsban (telefonon egy oszlop):
   - 📄 **Brossúrák és szórólapok**: kártyánként cím, **dátum-jelvény** („2025-01 · Rev 24.1”, a legfrissebbnél „legújabb”), nyelv, oldalszám, „Nyomtatásra” címke, letöltés gomb.
   - 🖼️ **Plakátok kiállításra**, a kiállítás-bejelentési kötelezettség ❓ tooltipjével (DRIVE_DONTESEK, `kiállítási_2023_Evo.pdf`: magyarországi rendezvény előtt be kell jelenteni a központnak).
   - 📱 **Képek közösségi médiához**: mappánként egy kártya (darabszám, formátum 9×16 / 4×5), „Mappa megnyitása” gomb.
   - 🎬 **Videók**: nyelvjelvénnyel („német felirat”, „hang nélkül”).
   - 📘 **Használati útmutatók**: Evo, Horse-Set, Dog, LIVATY.
   - 🗂️ **Régi készülékekhez** (alapból összecsukva): „Pro / Classic / BEMER 3000 tulajdonos ügyfeleknek”.
4. **Lábléc:** „Hiányzik valami, amit keresel? Írj: bterapia.office@gmail.com”.

**Biztonság:** az oldal a `/tudastar/` alatt van, így a meglévő három réteg (proxy + `requireAccess()` + noindex) automatikusan védi. A Drive-linkek csak a `08` megosztási listáján szereplő partnereknek nyílnak meg (RENDSZERTERV 2. C).

---

## 10. Megjegyzések

- **A csomag-szövegben szereplő „Lovas” anyag kevés:** nálunk lovas brossúra csak 2016-os (EN, VET) és 2020-as (DE), plakát 4 db (2023), videó 6 db (2019). Ha a lovas partnereknek fontos, a H2 pótlása az első lépés.
- **A Drive módosítási dátuma nem a kiadás dátuma:** a 2. csomag óta másolt fájlok mind „2026-10-13”-at mutatnak. Ezért a dátum a fájlnévbe kerül (E2).
- **Nem néztem meg:** a `qarsz_Archive.zip` tartalmát (11,7 MB, nincs kibontva), a régi `Prezentációk` mappát (a csomag nem kérte; a 2. csomag és a 08-as döntések részben lefedik) és az `#Archiv` alatti régi weboldal-képeket (`Bterapia.hu`, `Term-eg`, `loterapia`, `Equiheart.hu` – saját régi weboldalak anyagai, nem BEMER-médiaanyag).
- Párhuzamosan egy másik session dolgozik ebben a projektben (a `docs/research_notes/UK…` mappa ma 22:13-kor jött létre, valószínűleg a 7. csomag). Ahhoz nem nyúltam.
