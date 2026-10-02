# Rendszerterv – BEMER Tudástár

> Hogyan működik együtt a Vault, a tudástár, a Drive és az AI-keresés, és milyen sorrendben építjük meg. Tamás jóváhagyta 2026-10-02-án ("megyünk sorba, javaslatod szerint"). Állapot és munkanapló: [`PROGRESS.md`](PROGRESS.md).

---

## 1. Alapelv

```
Vault (Obsidian, Tamás gépén, iCloud)  ── a FORRÁS, Tamás itt dolgozik
        │
        ▼  Tudástár-szinkron: helyi program Tamás gépén, időzítve (pl. naponta), AI nélkül
        ▼
Tudástár (GitHub → Vercel, Supabase)   ── a partnerek itt olvasnak és keresnek
```

- **A weboldal soha nem olvas az iCloudból** – a gép tolja ki a tartalmat a felhőbe. Ezért az MD-tudásanyaghoz **nem kell Drive-tükör**: a tudástár maga jeleníti meg, egy jogosultsági rendszerrel (az admin-allowlist).
- A szinkron program fut helyben, mert a Vault helyi; felhős rutin nem éri el.

## 2. A három adatfolyam

| Folyam | Mi | Jóváhagyás | Hova kerül |
|---|---|---|---|
| **A) Automatikus adatok** | promóciók, dátumok, események/képzések, elérhetőségek | nincs (Tamás karbantartott Vault-adata) | `src/content/*.ts` (vagy később DB) |
| **B) Tudásanyag-cikkek** | videó-leiratokból, orvosi sztorikból, javallatokból, készülékleírásokból, partnermeeting-témákból készült cikkek | **igen, a Vaultban** | cikk-oldalak a tudástárban + AI-keresési index |
| **C) Eredeti dokumentumok** | Kompendium, esetismertető-füzetek, szerződésminták, PDF-ek, prezentációk | – | **Drive**, egy megosztott mappa; a tudástár csak linkel |

**A) források:** `02 Areas/BEMER/05_Promociok/00_Promociok_Attekinto.md` (frontmatter `status`, `aktív_ig`), `2026-08-13_Oszi_BEMER_Programnaptar.md`; a naptári események pontos Vault-helye még tisztázandó.

**B) folyamat – egy rendszer a `tudastarba` címkére és a partnermeetingekre:**
1. Forrás: `tudastarba` címkés jegyzet **vagy** a partnermeeting-témák gyűlő listája a Vaultban.
2. Heti AI-rutin (helyi) megírja a cikket → Vault "jóváhagyásra vár" mappa, kategóriával és forrásszinttel (🟢…🔴).
3. Tamás átolvassa, jóváhagyja (frontmatter-jelölő).
4. A szinkron publikálja; **a címke csak ezután kerül le**.
- Semmi nem kerül partner elé jóváhagyás nélkül; a `main`-re push azonnal élesít.
- Jogi/hirdetési irányelv-tartalom csak BEMER-forrásból (`CLAUDE.md` 3. pont); bizonytalan esetben a rutin nem emel be, hanem jelez.
- Modell: tervezés + első felügyelt futás Opus, heti futás utána Sonnet (ha 2–3 felügyelt futás tiszta volt).

**C) Drive-elv:** egy megosztott mappa; a fájl **áthelyezés**, nem másolat; ha a régi helyén is kell, ott **Drive-parancsikon** (az nem ad jogot – a célmappa megosztása kell). A mappa megosztási listája = az admin-allowlist (egyelőre kézzel, később automatizálható az admin oldalról).

## 3. AI-keresés

- A szinkron a jóváhagyott cikkekből szeleteket + embeddinget készít → Supabase pgvector.
- Kérdezőmező a tudástárban ("hol van szó pacemakerről?"): a legrelevánsabb szeletekből olcsó LLM fogalmaz választ, **forráshivatkozással**, csak a mi forrásainkból, **gyógyhatás-ígéret nélkül** (rendszerüzenet-szabály, forrásszint jelölése).
- Csak belépve; felhasználónkénti kérdéskorlát; naplózás.
- Motor: olcsó, gyors modell (jelöltek: Google Gemini Flash-család – a Google Cloud-projekt már megvan –, Claude Haiku, kis GPT-modellek). **Az árakat és a magyar minőséget a választás előtt élőben ellenőrizni**, nem emlékezetből. API-kulcs csak Vercel env-ben.

## 4. Sorrend (fázisok)

| # | Fázis | Állapot |
|---|---|---|
| 1 | **Drive-rendrakás** (lásd 5. pont) + linkek a tudástárban | ▶️ következő |
| 2 | Cikk-oldalak a tudástárban (kategóriánként, belépés mögött, forrásszinttel) | ⏳ |
| 3 | Szinkron v1: A) automatikus adatok + jóváhagyott cikkek, naponta | ⏳ |
| 4 | Jóváhagyási folyamat (B): heti rutin, `tudastarba` címke + partnermeeting-lista; első tanulópálya a meglévő címkés jegyzet | ⏳ |
| 5 | AI-keresés (árellenőrzés után) | ⏳ |
| 6 | (később) Admin oldal kezeli a Drive-megosztást is | ⏳ |

**Tamás döntésére vár:** (1) mely Vault-mappák számítanak tudásanyagnak; (2) a videó-leiratok partnerek elé tehetők-e; (3) hol vannak a Vaultban a naptári események; (4) havi AI-költségkeret.

---

## 5. Fázis 1 – Drive-rendrakás

### 5.1 A régi megosztott mappa átnézése (2026-10-02)

Mappa: **"régi partner-megosztás"** `14OgRiYfpsqBai3lkLxnlZDob_iWw6VG0` (tulajdonos kisstom@gmail.com, partnerekkel megosztva). ⚠️ A Claude Drive-kapcsolata **nem** a kisstom@gmail.com fiókkal fut (a fájloknál `me: false`) – emiatt pár fájl "nem található" lehet jogosultság miatt is, nem csak törlés miatt. Tamás döntése (2026-10-02): erről később beszélünk – addig a Drive-műveleteket Tamás végzi kézzel, lépésről lépésre leírva, vagy ahol a kapcsolat eléri a fájlt.

| Elem | Ítélet | Megjegyzés |
|---|---|---|
| **"Tartalom - Ezt olvasd el!"** (Google Doc, 2025-09) | ♻️ **tartalmát átvesszük, a doksit kiváltjuk** | Ez a tudástár elődje. Használható részei átkerültek a `TARTALOM_VAZLAT.md` 7–8. pontjába. A doksi ne törlődjön (régi linkek!), hanem tartalma cserélődjön egy "Átköltöztünk: tudastar.bterapia.hu" mutatóra. |
| Kompendium_HU.pdf `15fdBe1R02LPfqELzP5uJR5DuP0sc7OGk` (2025-05) | ✅ **használjuk** | Duplikátum: `1pxSnHev87qJ1YvkuEsRldRoUMPvi-YC6` (2021, azonos méret, másik mappában) → a rendrakáskor egy maradjon. |
| Orvosi esetismertető – a doksiban lévő link (`12ukPRpg…`) | ❌ **halott link** | A jelenlegi fájl: `2020_orvosi_esetismertetések_zárolt.pdf` `1JksZNunHPYSUhHg0DKf_FFimKT5gWYW4` a "Orvosi esetismertetők - tanulmányok / 01_Gyujtemenyes_kiadvanyok" mappában. Felhasználás: csak Magyarországon, belső anyagként (magyar központ kikötése) – ezt a tudástárban is jelezni. |
| 01_Gyujtemenyes_kiadvanyok: 2013 kongresszusi füzet, 2017 esetismertetések, 2015 absztrakt | 🗄️ archív | Történeti; a 2020-as a fő. Linkelhető "korábbi kiadások" alatt. |
| 03_Esetismertetesek_es_beszamolok (2012–2020 egyedi tanulmányok: bőrgyógyászat, fogászat, Rihova-levél, Brno, sport) | 🗄️ archív, később | A fő tervhez (cikkek) lehet forrás; most nem linkeljük. |
| Beauty Pack leírás (Google Doc `14DcnVIO…`) | ⏳ később | Most nincs meg; 2026-tól **Light Pack EVO** néven kerül be, ha előkerül (Tamás, 2026-10-02). |
| LIVATY termékbemutató vázlat (`10NmkOMd…`) + YouTube-felvétel | ⏳ később | Most nincs meg (Tamás, 2026-10-02). A LIVATY Partner Portal már szerepel a tudástár linkjei között. |
| Webinárium `HU_webinar_2024_08_Evo.pptx` (1,7 GB) | ✅ **marad** | Info-előadáson használt prezentáció; letölthetőnek kell maradnia, akinek kell (Tamás, 2026-10-02). |
| Marketing prezi `BEMER Marketing 2024 ver 14 HU.pptx` (88 MB, 2025-02) | ✅ **marad** | Info-előadáson használt prezentáció; letölthetőnek kell maradnia (Tamás, 2026-10-02). |
| Bérleti szerződés minta EVO / Pro (BEMER központ, 2025-09) | ✅ **használjuk** | "Minta, saját felelősségre" figyelmeztetéssel. |
| Bérleti szerződés – Üres – kezessel.doc (2023, saját) | ⚠️ Tamás dönt | A központi minták mellett valószínűleg felesleges. |
| EVO-FORM ügyféltájékoztató PDF (2024) | ✅ **használjuk** | Hivatalos nyomtatvány. |
| BEMER_Jutalék számlázás és termék vásárlás v2.0 PDF (2024) | ✅ használjuk | BBO-ban ellenőrizni, van-e újabb verzió. |
| TEÁOR számok (Google Doc, 2026-04) | ✅ használjuk, **óvatosan** | Saját tapasztalat, "könyvelővel egyeztetve, saját felelősségre". ⚠️ A doksi jogi állításokat is tartalmaz (ki adhat bérbe, ki kezelhet, NOR-regisztráció, MDR) – ezek a tudástárba csak BEMER-forrással kerülhetnek (`CLAUDE.md` 3. pont). |
| VTSZ – vámtarifa számok (Google Doc) | ✅ használjuk | Rövid, stabil. |
| Promóciók - kihívások (Google Doc, 2025-02) | ❌ **elavult** | A FSM-időszak 2025-07-31-én lejárt, a szabályok 2025-11-28-tól változtak. A promóciók forrása a Vault-index (A folyam). |
| YouTube: rendelés, BBO alapok, jutalék kivétel, Wise-számla (saját videók) | ✅ használjuk | A BBO-videónál jelezni: a felület azóta változhatott. |
| YouTube: "BEMER 8 percben" (HU/EN) | ✅ használjuk | Ügyfél-tájékoztatáshoz; élő-e a link, ellenőrizni. |
| Üres almappák: "Régi készülékekhez leírások", "Szakmai anyagok", "Készülék és technikai információk" | 🗑️ törölhető | 2026-08-27-én kiürültek. Csak Tamás jóváhagyásával. |

### 5.2 Lépések (új sessionben)

1. (A Claude Drive-kapcsolat fiókja: később tisztázzuk – lásd 5.1.)
2. A régi mappa **megosztási listájának** átnézése az admin-allowlisttel szemben (régi, kilépett partnerek kiszedése – Tamás jóváhagyásával).
3. Célstruktúra jóváhagyása. Javaslat: **a régi megosztott mappát használjuk tovább alapként** (a partnerek már hozzáférnek), átnevezve, almappákkal: Terápia és szakmai · Ügyfél-tájékoztatás és prezentációk · Nyomtatványok és szerződések · Pénzügy és adminisztráció · Archív.
4. Fájlok **áthelyezése** (nem másolás); ahol a régi helyén is kell, parancsikon; duplikátumok és üres mappák törlése csak jóváhagyással.
5. "Tartalom - Ezt olvasd el!" → átköltözési mutató.
6. Linkek a tudástárba (`src/content/` – Kompendium, esetismertető, szerződésminták, nyomtatványok, videók), forrásszint és felhasználási korlát jelölésével.
7. Minden megosztás-módosítás és törlés előtt Tamás kifejezett jóváhagyása.
