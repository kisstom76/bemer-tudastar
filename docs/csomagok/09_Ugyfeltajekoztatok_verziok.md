# 9. csomag – BEMER ügyfél-tájékoztatók verziógyűjtése

**Készült:** 2026-10-13 · **Módszer:** a teljes Saját meghajtón (helyi index) és a Drive-konnektorral (Google Docs, gépmentés, a bterapia.office által megosztott fájlok) kerestem. A szöveges PDF-ekből kiolvastam a verziószámot, a szkennelt és fotózott példányokon OCR-rel kerestem. A verziókat szövegszinten hasonlítottam össze.
**Semmit nem mozgattam, nem töröltem, nem tisztítottam.** Ügyfélnevet szándékosan nem írok ebbe a fájlba.

## Röviden (laikusan)

1. Az „ügyfél-tájékoztató” valójában a **BEMER hivatalos „Bemutató az ügyfélnek” űrlapja**. Ezen az ügyfél aláírásával igazolja, hogy megkapta a készülék betanítását. Az orvostechnikai szabályok miatt kötelező, és 2 héten belül be kell küldeni a BEMER-nek (DMS@bemergroup.com).
2. **Öt hivatalos verziót találtam:** Pro/Classic 20.1 (2020) → 21.1 (2021) → 22.1 (2022), Evo 23.1 → 23.2 (2023). Az idővonalon jól látszik a szigorodás (lent, B).
3. 🔴 **Javítandó:** a `ügyféltájékoztató_bemer pro.pdf` „sablonba” 2025-12-16-án belekerült egy ügyfél neve és a készüléke sorozatszáma (valószínűleg kitöltés után a sablonra lett mentve). A fájl két helyen van meg. **A tiszta változat megvan a MacBook-gépmentésben** (2024-11), abból visszaállítható.
4. Az ügyfélpéldányok száma kb. 154 (a régi `Ügyfelek - gondozás/Ügyfelek szerződései` mappában, 2024-01 – 2026-01), plusz 2026 júniusa óta a CRM által gyártott, sorszámozott PDF-ek (R-0xxx, S-00xx). Ezek **ügyféliratok**, nem sablonok: a helyükön kell maradniuk, a tudástárba nem valók.
5. **A CRM jelenlegi sablonja** a 23.2-es szöveget követi, de **hiányzik róla a verziójelzés** és a BEMER-űrlapkód, és **plusz mezőként a lakcímet** is kéri. Erről Tamásnak kell döntenie (lent, D).

---

## A) Sablonok és üres példányok: verzió szerint

| # | Verzió | Érvényes | Készülék | Űrlapkód | Fájl, hely | Személyes adat? | Megjegyzés |
|---|---|---|---|---|---|---|---|
| 1 | **20.1** | 2020-01-01 | Pro / Classic | 1890-1908HU | „EE team vezetők” megosztott mappa: `Ügyfél betanítás űrlap/Pro és Classic/1890-1908-FORM-Kundeneinweisung-HU-06-reader.pdf` (PDF 2019-10) | nincs (üres, hivatalos) | a legrégebbi magyar; nálunk nincs saját példány (a 2. csomag másolásra jelölte) |
| 2 | **21.1** | 2021-01-01 | Pro / Classic | 1890-1908HU | `_REGI fomappa/Bemer/#Dokumentumok a munkához/Dokumentumok ügyfeleknek/Bemer ügyfél tájékozatató_sign.pdf` (2021-09) | csak Tamás partnerazonosítója és vektoros aláírása (maradhat) | ügyféladat nincs benne, a „_sign” Tamás aláírását jelenti |
| 3 | **22.1** | 2022-02-02 | Pro / Classic | 1890-1908HU | `_REGI fomappa/ügyféltájékoztató_bemer pro.pdf` **=** `_REGI fomappa/Bemer/Ügyfelek - gondozás/Szerződések, sablonok/ügyféltájékoztató_bemer pro.pdf` (bájtra azonos, 2025-12-16) | 🔴 **IGEN: egy ügyfél neve + sorozatszám** | tisztítandó, ill. a tiszta változat visszaállítandó |
| 3a | 22.1 | 2022-02-02 | Pro / Classic | 1890-1908HU | MacBook-gépmentés: `Saját MacBook Air/…/ügyféltájékoztató_bemer pro.pdf` (Drive ID `1TKKeaw61mvpucycsGskCRpH-GmeiMyO9`, 2024-11-04) | csak Tamás partnerazonosítója | **ez a tiszta Pro-sablon** |
| 4 | **23.1** | 2023-01-01 | Evo Premium-Set | 2142-2212HU | `_REGI fomappa/ügyféltájékoztató_nyilatkozat_EVO.pdf` **=** `…/Szerződések, sablonok/ügyféltájékoztató_nyilatkozat_EVO.pdf` (bájtra azonos, 2025-01-08) | csak Tamás partnerazonosítója és aláírása | a gépmentésben egy 2024-01-es, szintén tiszta 23.1-es mentés is van |
| 4a | 23.1 | 2023-01-01 | Evo | 2142-2212HU | „EE team vezetők”: `Ügyfél betanítás űrlap/Evo/…Kundeneinweisung-HU-Rev23_1-02-reader.pdf` (PDF 2022-12) | nincs (üres, hivatalos) | a BEMER eredetije |
| 5 | **23.2** | 2023-01-01 | Evo | 2142-2212HU | `02_Areas/BEMER/08_Partnereknek_Megosztott/Nyomtatványok/2142-2212-GC-3162 EVO-FORM-ügyféltájékoztató.pdf` (PDF 2023-04) | nincs (üres, hivatalos) | **a legújabb hivatalos változat, már a partnermappában van** ✅. Két további azonos példány: egy 2024-10-es Drive-mappában és a gépmentésben |
| 5a | 23.2 | 2023-01-01 | Evo | 2142-2212HU | `_REGI fomappa/ügyféltájékoztató_nyilatkozat_EVO_aláírás nélkül.pdf` **=** `…/Szerződések, sablonok/…_aláírás nélkül.pdf` (bájtra azonos, 2025-11-10) | csak Tamás partnerazonosítója (a név ellenére Tamás aláírása is rajta van) | a 23.2 Tamás adataival előre kitöltve |
| 6 | (23.2 szövege) | – | Evo | – | `_REGI fomappa/ugyfel_tajekoztato_evo_sablon.docx` és a CRM élő Google Doc-ja: `ugyfel_tajekoztato_evo_sablon` (bterapia.office, ID `1uV60an6zRC610psDC8PEW72hjQ2xKrBeCPjKFTajqgk`, utolsó módosítás 2026-06-17) | helyőrzők (`{{FullName}}`, `{{PermanentAddress}}`, `{{SerialNumber}}`, `{{Date}}`) | **a CRM ebből gyárt** (lásd D) |
| 7 | (22.1 szövege) | – | Pro / Classic | – | `_REGI fomappa/ugyfel_tajekoztato_pro_sablon.docx` (a Drive-on egy 2026-05-ös mappában is) | helyőrzők | a CRM Pro-sablonja |

**Azonos verzióból elég egy (Tamás döntése).** Javasolt megtartandók: 20.1 (EE-ből másolva), 21.1 (#2), 22.1 (#3a, tiszta), 23.1 (#4a, hivatalos), 23.2 (#5, már a 08-ban). A többi duplikátum.

## B) Mi változott verzióról verzióra (a szigorodás)

| Váltás | Lényeges tartalmi különbség |
|---|---|
| 20.1 → 21.1 | Az „Abszolút ellenjavallat” bővült: a szervátültetés (immunszuppresszió) mellé bekerültek a **gyógyszeradagoló implantátumok** (gyógyszerpumpák). **Új pont: „Relatív ellenjavallat”**: szívritmus-szabályozó, defibrillátor, agyi és izomstimulátor esetén egyeztetni kell a kezelőorvossal. |
| 21.1 → 22.1 | Csak a kapcsolati cím változott: `medical@bemergroup.com` → `ugyfelszolgalat@bemer.services`. |
| 22.1 → 23.1 (Evo) | A készülékmegnevezés Evo-ra váltott (B.Box Evo, B.Body Evo, Beauty Pack Evo). Az ellenjavallat-szöveg a 21.1/22.1-gyel azonos. |
| 23.1 → 23.2 (Evo) | **A legnagyobb szigorítás:** (1) az aktív implantátumok (pacemaker, defibrillátor, stimulátorok) a „relatívból” **ellenjavallattá** váltak, külön abszolút/relatív bontás már nincs; (2) **új pont: „Lehetséges mellékhatások”** („ritka esetekben a pulzus vagy a vérnyomás rövid távú változása”); (3) **új pont: „Gyógyászati tudnivalók”**, a biztonsági utasítások helyett a hatályos használati útmutatóra (IFU) hivatkozik; (4) a záró mondatba bekerült: „vagy nem kívánt hatás jelentkezne”; (5) a cím `kundenservice@bemer.services` lett. |

⚠️ A 22.1-es Pro-űrlapon az aktív implantátum még csak *relatív* ellenjavallat. Ha ma Pro/Classic készüléket adunk át, érdemes a 23.2-es ellenjavallat-szöveg szerint tájékoztatni (ez szakmai javaslat, nem jogi vélemény). Újabb Pro-verziót nem találtam.

## C) Ügyfélpéldányok (aláírt, kitöltött), csak számokkal

**Hely:** `_REGI fomappa/Bemer/Ügyfelek - gondozás/Ügyfelek szerződései/<ügyfél>/` – 154 fájl, ügyfelenként 1–3 (sokszor „kitöltött PDF” + „aláírt fotó/szken” párban). Évek a fájlnév szerint: 2024: 73 · 2025: 44 · 2026: 4 · nincs dátum: 33.

| Verzió | Darab (biztos) | Hogyan derült ki |
|---|---|---|
| 22.1 Pro/Classic | kb. 61 | 17 szöveges PDF + kb. 44 OCR-rel |
| 23.1 Evo | 18 | 9 szöveges + 9 OCR |
| 23.2 Evo | 3 | 1 szöveges + 2 OCR |
| nem olvasható | kb. 70 | fotó/szken, az OCR nem találta a fejlécet (+ 1 `.heic` és 1 egyéb formátum) |

Egy fájl („Tájékoztatás.pdf”, 2025-06, egy ügyfél mappájában) nem ez az űrlap, hanem egy rövid, 60 szavas levél.

**CRM által gyártott példányok (2026-06 óta):** `Ügyféltájékoztató R-0317 … R-0386.pdf` és `S-0064 … S-0071.pdf`, a bterapia.office fiókban, ügyfelenkénti mappákban, kb. 107 KB-osak. Ezek a 6. sor sablonjából készülnek. Ezen kívül a kisstom fiókban néhány 2026-os szken (`Ügyféltájékoztató 2026.pdf`, `…_S0066_20260618_emailen valaszban elfogadva.pdf` stb.).

**Személyes adat:** mindegyik ügyfélpéldány név, lakcím (a CRM-es), sorozatszám és aláírás. **Ezek ügyféliratok: a helyükön maradnak**, a tudástárba és a `08`-ba nem kerülhetnek. Tisztítás itt nem cél. Ha valamelyik mintának kellene, abból a sablon (A) a jó forrás, nem az ügyfélpéldány.

## D) Tisztításra és döntésre jelölt tételek

| # | Mi | Teendő (jóváhagyás után) |
|---|---|---|
| 1 | 🔴 `ügyféltájékoztató_bemer pro.pdf` (2 bájtazonos példány: `_REGI fomappa/` gyökér és `Szerződések, sablonok/`): ügyfélnév + sorozatszám | a tiszta 2024-es változat (gépmentés, #3a) visszahozása szerveroldali másolással; a szennyezett példányok archívumba (vagy az adott ügyfél mappájába, ha ott hiányzik) |
| 2 | A CRM-sablon (#6) **nem jelzi a verziót** („Verzió: 23.2 / Érvényesség…”, űrlapkód `2142-2212HU`) | javaslat: a fejlécbe kerüljön be a verziószám, hogy évek múlva is látsszon, melyik szövegre írt alá az ügyfél. A szöveg maga egyezik a hivatalos 23.2-vel |
| 3 | A CRM-sablon **lakcímet is kér**, a hivatalos űrlap csak nevet és sorozatszámot | Tamás döntse el, kell-e a lakcím (pl. a bérleti szerződéshez). Ha nem, adattakarékossági okból érdemes kivenni. Nem jogi tanácsadás, ha kérdéses, ellenőriztetni kell |
| 4 | A CRM Pro-sablonja (#7) a 22.1-es szöveg (az aktív implantátum még relatív ellenjavallat) | Tamás döntse el, frissítsük-e az ellenjavallat-szöveget a 23.2 mintájára |
| 5 | Duplikátumok: a 21.1, 23.1 és 23.2 sablon 2–3 bájtazonos példánya (`_REGI` gyökér, `Szerződések, sablonok`, gépmentés, egy 2024-10-es mappa) | megtartani az A) végén javasolt egy-egy példányt, a többit archiválni |

---

## Végrehajtva (2026-10-13, Tamás döntése szerint)

**A szabály (Tamás):** minden hivatalos verzióból egy üres példány marad meg, történeti célra; a partnerekkel csak a legfrissebb Evo-változat megy. Ügyféladattal kitöltött példány archívumba kerül, ha a verziónak van üres változata; ha nincs, ki kell üríteni. Az aláírt ügyfélpéldányok és a CRM-es példányok ügyféliratok, nem tartoznak ide.

- Verziótörténet-mappa: `02_Areas/BEMER/07_Uzleti_Tudastar/04_Hivatalos_Kiadvanyok/Ugyfeltajekoztato_verziok/`, benne a 20.1, 21.1, 22.1 (a tiszta 2024-es mentésből visszaállítva) és 23.1, a névben verzió és érvényességi dátum. A 23.2 a `08`-ban van (partnereknek).
- Archívumba (`04_Archive/02_Areas/BEMER/`): az ügyféladatos 22.1-es Pro-példány, valamint a Tamás adataival előtöltött 23.1 és 23.2 Evo PDF.
- Vault: [[02 Areas/BEMER/03_Jogi_Szabalyozas/Ugyfeltajekoztato_Verziotortenet]], minden verzió linkjével.
- Kiüríteni nem kellett semmit, minden verziónak van üres példánya.
