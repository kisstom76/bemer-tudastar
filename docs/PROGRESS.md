# PROGRESS – BEMER Tudástár

> Állapotnapló. A tartós szabályok a [`CLAUDE.md`](../CLAUDE.md)-ben vannak, ide a történet és a nyitott pontok kerülnek.

---

## Aktuális állapot – 2026-09-16 (második munkamenet, NYITOTT)

**Miről szólt:** Tamás tisztázta, hogy a tudástár a `bterapia.hu` alatt, **aldomainként** fog élni (pl. `tudastar.bterapia.hu`, a pontos név még nyitott) – ez felülírja az első munkamenet "bterapia.hu nem alkalmas" megállapítását (`CLAUDE.md`-ben frissítve). Utána az első fázis feladata: **a Vault átvizsgálása**, hogy mi van már meg, mi hiányzik, és hogy kirajzolódjon a tervezett architektúra: **a Vault legyen a tudástár tartalmi forrása**, egy scripttel, ami időnként ellenőrzi, változott-e valami a forrásanyagban (pl. telefonszám, "csoportvezető" → "teammanager" elnevezésváltás).

**Ebben a munkamenetben elkészült – Vault-gyűjtés eredménye:**

🔑 **Legfontosabb felismerés:** a Vault `02 Areas/BEMER/` alatt **már létezik egy kiterjedt, strukturált belső tudástár** (lásd [[02 Areas/BEMER/00_Tudastar_Hasznalata]] a Vault-ban) – `01_Szakmai_Tudastar/` (orvosi/tudományos) és `07_Uzleti_Tudastar/` (üzleti/marketing/jogi) fő ágakkal, forrásszint-jelöléssel (`00_Forrasszintek.md`: 🟢🟦🩵🔵🟠🟤🟡🟣🔴). A `00_BEMER_Attekinto.md` explicit módon kimondja: *"a tartalom nagy része már itt is megvan strukturáltan... ezekből kell építeni, nem újra összegyűjteni."* Ez azt jelenti: **a bemer-tudastar weboldal tartalmának nagy része már létezik a Vault-ban**, csak ki kell válogatni, mi publikus-alkalmas belőle.

**Hol van mi (a `TARTALOM_VAZLAT.md` szekciói szerint) – lásd ott a részleteket is:**
1. **Kompendium** → `Kompendium_HU.pdf` megvan a **Drive-on** (2 másolatban, a `Készülékek - leírás - ismertető` Drive-mappában), a Vault csak rá mutat (`03_Hivatalos_Kiadvanyok/00_Mi_kerul_ide.md`) – a PDF tartalma még nincs feldolgozva/kereshetővé téve a Vault-ban.
2. **Orvosi esetismertetők** → `01_Szakmai_Tudastar/01_Eloadasok/` (WOB, Évnyitó, KickOff előadás-leiratok) részben fedi, de nem "esetismertető" formátumban – inkább előadás-transzkriptum.
3. **Social media / hirdetési irányelvek** → 🎯 **MEGVAN a Drive-on, csak nincs a Vault-ban!** Egy Google Doc ("Irányelvek + Kihívások feltételei", 2025-11-28, `docId: 1UnAEYhdZT1ruwEw-T6qyTlh09jrLMECrTrtHTfPAFlQ`) tartalmazza: a teljes **BEMER IRÁNYELVEK** szöveget (17 fejezet, benne a 10. "Reklám, reklámanyagok..." fejezet), az **ÁSZF**-et, az **Adatvédelmi nyilatkozatot**, és a teljes **BEMER Social Media Policy Europe**-ot (mit szabad posztolni, milyen képet használni, testimonial-szabályok stb.) – pontosan az a BEMER-forrású jogi/irányelv-anyag, amit a `CLAUDE.md` megkövetel.
4. **Fontos elérhetőségek** → részben megvan: `ugyfelszolgalat@bemer.services` (ügyfélszolgálat/jogsértés-bejelentés) az Irányelvek-dokumentumból kiolvasható. A `TARTALOM_VAZLAT.md`-ben lévő többi placeholder (számlázás, Illiek OD) továbbra is Tamástól kell.
5. **Landing page-ek és marketinganyagok** → **MEGVAN, kész referencia-jegyzet:** `07_Uzleti_Tudastar/03_Partner_Landing_Oldalak/00_BEMER_Landing_Oldalak.md` – állandó és időszakos landing oldalak linkgyűjteménye.
6. **Aktuális dátumok és promóciók** → **MEGVAN, élő, karbantartott index:** `05_Promociok/00_Promociok_Attekinto.md` (🟢 Aktív / 🗄️ Archív táblák, frontmatter-konvencióval automatikusan karbantartva). Ez pontosan az a "mi fut, mikor, mivel" nézet, amit Tamás a tudástárban akar – **ez lehetne a szinkron első próbája.**
7. **Kiemelt észrevételek / gyakorlati tippek** → szétszórva van (meeting-jegyzetek `#temakor/terapias-javaslat` és `#temakor/partner-meeting-ajanlas` címkékkel, `06_Tiketek/` gyakorlati esetek) – nincs még egy dedikált gyűjtőhely rá a Vault-ban, ezt valószínűleg most, a tudástár-tervezéssel párhuzamosan kell kialakítani a Vault oldalán is.
8. **Újonc-eligazodás** → nincs ilyen jegyzet még a Vault-ban, ezt létre kell hozni.

**Architektúra-ötlet rögzítve (technikai fázisra vár, most csak dokumentálva):** Tamás elképzelése, hogy a **Vault legyen a tudástár forrása**, és egy **időszakosan futó szinkron-script** ellenőrizze a Vault releváns jegyzeteit (pl. `05_Promociok/`, kontakt-adatok, elnevezés-változások), és jelezze/vezesse át a változást a weboldalba. Ez jó irány, mert a `00_Promociok_Attekinto.md` már ma is pontosan úgy van karbantartva (frontmatter `status`/`aktív_ig` mezőkkel), ahogy egy gépi szinkronhoz kell. **Nincs még megtervezve, melyik Vault-jegyzet melyik weboldal-szekciót táplálja, és hogyan fut a script (helyi cron? Vault MCP-n át? Markdown-export?)** – ez a technikai fázis feladata, most csak koncepcióként rögzítve.

**Letöltendő / pótlandó anyagok listája (amit Tamásnak kell hoznia vagy dönteni kell róla):**
- 🟢 **Nincs teendő, csak be kell húzni a Vault-ba:** Kompendium_HU.pdf (Drive-on megvan), Irányelvek+Kihívások Google Doc (Drive-on megvan, tartalmazza az ÁSZF-et, Adatvédelmit, Social Media Policy-t is)
- 🔴 **Tamástól kell, sehol nincs leírva:** pontos ügyfélszolgálati/számlázási telefonszámok, Illiek (OD) elérhetősége és hogy mikor forduljunk hozzá, a csereakció-tipp konkrét lépéssora
- 🟡 **Bizonytalan, ellenőrizni kell, hogy van-e külön BBO Compliance Corner-anyag** a fenti Irányelvek-dokumentumon túl (a dokumentum utal rá, hogy a Compliance Corner-ben "archívum" cikkek is vannak – ezekhez talán külön be kell lépni a BBO-ba)
- Orvosi esetismertetők "klasszikus" (nem előadás-transzkript) formában – nincs egyértelmű forrás azonosítva, Tamással tisztázandó, hogy ilyen egyáltalán létezik-e valahol, vagy az előadás-leiratokból kell kigyűjteni

**Design/arculat-döntés (ugyanebben a munkamenetben):** Tamás kérésére rögzítve, hogy a weboldal a **BEMER Human Line** hivatalos corporate designját kövesse. Forrás ellenőrizve élőben: https://library.bemergroup.com/bemer-medien-bibliothek-en – színek (BEMER-Orange `#EB5A23`, antracit `#4B4A50`, bézs `#ECE3DC`), betűtípus (Barlow, Thin/Light/Regular/Semibold) és a BEMER-terminológiai szabályok (pl. "BEMER" mindig csupa nagybetű, kötőjel nélkül) is rögzítve a [`DESIGN_ARCULAT.md`](DESIGN_ARCULAT.md)-ben. Ez ugyanaz a paletta, amit a Vault `08 System/Utasitasok/BEMER.md`-je már használ a partneri prezentációkhoz.

**🔴 tételek pótolva (Tamástól, 2026-09-16):** ügyfélszolgálati/számlázási elérhetőségek és az OD-kontakt megvan – lásd [`TARTALOM_VAZLAT.md`](TARTALOM_VAZLAT.md) 4. szakasz.

**Új nyitott kérdés – dokumentum-hozzáférés (Tamás, 2026-09-16, saját szavaival "nem tudom?"):** az orvosi esetismertetők és a PDF-alapú anyagok Tamás saját Drive-ján vannak. Nincs eldöntve, hogyan érjék el ezeket a partnerek a tudástárból:
1. közvetlen link a Tamás Drive-ján lévő fájlra (jogosultsági kérdés nyitott),
2. külön megosztott mappa, csak hivatkozás-linkekkel,
3. minden anyagból másodpéldány egy teljesen külön, megosztott mappában.
⏳ Ez döntés a technikai fázisban dől el, de a tartalmi vázlatnál már jelezni kell, hogy mely szekciók PDF-hivatkozásra épülnek.

**Elkészült az 1. verzió vázlata (2026-09-16):** Claude Artifact-ként publikálva, valós gyűjtött tartalommal (aktuális promóciók, elérhetőségek, landing oldalak táblázatosan; Kompendium/Irányelvek/esetismertetők/tippek/újonc-eligazodás szekciók állapot-jelöléssel és nyitott kérdésekkel). BEMER Human Line design (`DESIGN_ARCULAT.md`) alkalmazva.
- 🔗 Artifact link: https://claude.ai/artifact/EwU6hQazbzrH3qNvDeMqUW

**Elkészült a 2. verzió (ugyanebben a munkamenetben, Tamás visszajelzése alapján):**
- **Bemutatkozás szekció** a lap elejére: kinek szól (Kiss Tamás & Karkis Katalin Team Manager csapata), miért kiegészítés (nem váltja ki a BBO-t), honnan jönnek az anyagok (Liechtensteini központ · Kelet-európai központ · Team Managerek saját anyagai, pl. bérlési szerződés · landing oldalak). Fotó-placeholder (pótlandó).
- **Kontakt:** bterapia.office@gmail.com · +36 36 81 52 33 – bekerült a bemutatkozásba, a dashboardra és az Elérhetőségek táblába is.
- **Fontos linkek bővítve:** BBO + `bemergroup.com` is bekerült a landing oldalak mellé.
- **Saját partneri oldal (`Neved.bemergroup.com`) mint tartalom rögzítve** – a Landing oldalak táblában és a Kezdőknek szekcióban is: érdemes korán eldönteni a nevet, mert nyomtatott anyagra kerülhet, utólag már nem érdemes módosítani.
- **❓ segítség-tooltip minta bevezetve** – első példa a tiket-rendszer magyarázatán (mi történik az e-mail elküldése után, tiketszám, Liechtensteini továbbküldés, lezárás). Újrafelhasználható minta, bővíthető más helyeken is.
- **Kategóriákra strukturálva** (Tamás kérése): „Terápiával kapcsolatos tudás" (Kompendium + esetismertetők összevonva, anyagonként rövid összefoglaló + letöltés-gomb/link-hiány jelzés), „Irányelvek" (a Vault-tartalom szépen formázva + „mindig BBO-ban ellenőrizd a legfrissebbet" callout), új **„BEMER technikai ismeretek"** kategória (kiderült, hogy ehhez is van már anyag a Vault-ban: készülék-generációk, fizikai paraméterek, applikátor-fizika, Dog App), **„Kezdőknek"** (Újonc-eligazodás átnevezve/kidolgozva: 1. Kompendium → 2. esetismertetők → 3. saját oldal nevének átgondolása).
- 🔗 Artifact link (frissítve, ugyanaz az URL): https://claude.ai/artifact/EwU6hQazbzrH3qNvDeMqUW

**Munkafolyamat-megjegyzés rögzítve:** amikor a weboldal-tartalomért (pl. social media szabályok, landing oldalak) a Vault-on túl más forrást (pl. BEMER Média-könyvtár) is megnézünk, és ott olyan infót találunk, ami a Vault-ból hiányzik, azt a Vault-ba is vissza kell vezetni – ne csak a weboldal tartalma gazdagodjon, hanem a Vault is maradjon a hiteles forrás.

**3. kör – Tamás visszajelzése alapján, ugyanebben a munkamenetben:**
- **European Management Meeting** mellé kiírva: csak GL szinttől felfelé.
- **"Mi fut most" kettéválasztva:** alapból a következő ~4 hónap promóciói/eseményei látszanak; "Minden esemény megjelenítése" gomb mutatja a távolabbi tételeket is (pl. European Management Meeting 2027, Founder's Challenge) – Tamás észrevétele nyomán, hogy a távoli jövőbeli esemény ne keveredjen a "most fut" listával.
- **Számlázás-tooltip:** `szamlazas@bemer.hu` mögé ❓ ikon – elmagyarázza, hogy ezt a Kelet-európai (Budapesti) központ irodavezetője kapja; jellemzően rendezvény-/START-Up képzés-regisztráció számlái, illetve nyomtatott BEMER-kiadvány megrendelése.
- **OD-kontakt pontosítva:** Beck János mobilja külön jelölve ("Beck János mobilja"), **vezetékes szám hozzáadva** (+36 1 415 0884 – ellenőrizve a hivatalos bemer3000.hu oldalról, 2026-09-16), és **Dr. Horváth Ilona** felvéve mint az OD orvos-szakmai kontaktja (elérhetősége még nyitott).
- 🔗 Artifact (v4, ugyanaz az URL): https://claude.ai/artifact/EwU6hQazbzrH3qNvDeMqUW

**Nyitva maradt / következő lépés:**
- ⏳ Dr. Horváth Ilona közvetlen elérhetősége Tamástól
- ⏳ Tamás további visszajelzése a tartalmi vázlatra

---

## Technikai fázis – előzetes feltérképezés (2026-09-17, még jóváhagyás előtt)

> Tamás elkezdte gondolkodni a technikai megvalósításon (még nem adott kifejezett "kezdj el kódolni" jóváhagyást – ez egyelőre kutatás/tervezés, a `CLAUDE.md` szabálya szerint).

**Felmerült igények:**
1. **Admin-felület** — Tamás tudja szerkeszteni, mely Gmail-címek/Google-fiókok jelentkezhetnek be egyáltalán.
2. **Részletes, névhez kötött aktivitás-naplózás** — ki, mikor, mennyi ideig volt bent, mit nézett meg, mi után érdeklődött.
3. Nyitott kérdés Tamástól: **van-e egyáltalán értelme** ennek a mélységű naplózásnak egy kis csapatnál.
4. Tech stack: statikus Cloudflare-oldal vs. Vercel+Supabase — melyik kell, és mennyi fér bele a free tier-be.

**Válasz/döntés-javaslat (rögzítve, jóváhagyásra vár):**
- Admin-allowlist: `bemer-crm` mintája (Next.js + Supabase Auth Google-loginnal + saját `allowed_emails` tábla) — egyszerűen megoldható, nincs extra infrastruktúra-igény.
- Aktivitás-naplózás: technikailag megoldható, de **valódi fejlesztési tétel**, nem "bekapcsolható" funkció — kész 3rd-party analitika (Plausible, Vercel Analytics) nem elég, mert azok anonimizáltak, itt névhez kötött adat kell → saját Supabase-táblás eseménynaplózás kellene. **Javasolt megközelítés: fokozatosan építeni** (előbb session-szintű: ki mikor mennyi ideig; csak utána, ha tényleg indokolt, oldal-/keresés-szintű mélyebb követés) — ne épüljön túl korán túl sok komplexitás.
- Stack: **statikus Cloudflare nem elég** (nincs backend a login-gate-eléshez és naplózáshoz) → **Next.js + Supabase + Vercel**, ugyanaz a minta, mint a `bemer-crm`.
- **Free tier – 2026-09-17-én ellenőrizve (websearch):** Vercel Hobby 200 projektig ingyenes, bőven elég, de ⚠️ hivatalosan nem kereskedelmi célra szól (a `bemer-crm` már ezen fut, van rá precedens). Supabase free: **csak 2 aktív projekt / szervezet** — ha a `bemer-crm` már foglal egy helyet Tamás Supabase-szervezetében, a tudástár lehet a 2., de ezt ellenőrizni kell Tamás fiókjában, mielőtt eldől, kell-e új szervezet vagy fizetős csomag.

**Supabase-fiók helyzet tisztázva (2026-09-17, vault-átvizsgálással):**
- A `kisstom76` Supabase-fiókban fut a BEMER CRM (lásd `08 System/API_Kulcsok.md`). A gépen emellett két másik `.env.local`-lal rendelkező projekt is van: `receptek-app` és `Aerial_arts_app` (Kiss Anna aerial arts projektje) — ez utóbbit a Supabase 2026-09-08 körül inaktivitás miatt szüneteltette (85+ napos szüneteltetés esetén véglegesen törlik – ez korábban, 2026-08-31-én egy másik projekttel már meg is történt, azt Tamás akkor "nem kell"-nek döntötte).
- ⚠️ **Nem találtam vault-bizonyítékot külön "recepttár" Supabase-fiókra** — az `API_Kulcsok.md` csak a `kisstom76` fiókot dokumentálja. Lehet, hogy a `receptek-app` is ugyanabban a fiókban fut, mint a CRM — ezt Tamásnak kell megerősítenie közvetlenül a Supabase dashboardon.
- **Javaslat:** ha az aerial-arts-app aktívan nem kell, egyszerűbb törölni vagy másik (pl. Kiss Anna saját) fiókba költöztetni, mint életben tartani — ezzel biztosan felszabadul hely a `kisstom76` fiók 2-projektes ingyenes keretében a tudástár számára.

**Nyitott kérdések összegyűjtve (Tamás kérésére, 2026-09-17):**
1. Dokumentum-hozzáférés módja (Kompendium, esetismertetők, egyéb PDF-ek) — lásd lent a javaslatot.
2. Van-e külön, eset-alapú orvosi esetismertető forrás, vagy az előadás-leiratokból kell kigyűjteni?
3. Van-e a BBO Compliance Corner "Archívum" rovatában az Irányelvek-doksin túlmutató anyag?
4. Az aldomain pontos neve (`tudastar.bterapia.hu` munkacím).
5. Fénykép a bemutatkozáshoz.
6. Dr. Horváth Ilona közvetlen elérhetősége.
7. Aktív Supabase-projektek pontos száma / a receptek-app fiók-helyzete (fent).
8. Induljon-e most ténylegesen a technikai fázis.

**Drive-architektúra javaslat a dokumentum-hozzáféréshez (2026-09-17; ✅ jóváhagyva 2026-10-02, a hatályos változat: [`RENDSZERTERV.md`](RENDSZERTERV.md) 2. C és 5. pont):**
- **Egy darab új, megosztható Drive-mappa** (pl. "BEMER Tudástár – Megosztott anyagok"), amibe a ténylegesen weboldalra kerülő dokumentumok kerülnek.
- **Ne másolat, hanem áthelyezés** — a fájl átkerül ebbe a mappába, nem duplikálódik. Ez teljesen kiiktatja a szinkron-problémát: ha egy szerződés változik, mindenki ugyanazt az egy, friss fájlt látja, nincs mit "ellenőrizni".
- Ahol a fájlnak a jelenlegi helyén is maradnia kell (más munkafolyamat miatt), ott **Drive-parancsikon** ("shortcut") a megoldás másolat helyett — natívan mindig az aktuális fájlra mutat, nincs hozzá script. (Figyelem: a parancsikon önmagában nem ad jogosultságot — az eredeti fájlnak/mappának is meg kell osztva lennie ugyanazzal a névsorral.)
- **A mappa megosztási listája kövesse a weboldal admin-allowlistjét**: amikor valakit felveszel a bejelentkezési engedélyezettek közé, ugyanazt az e-mail-címet add hozzá a Drive-mappa megosztásához is. Egyelőre kézzel tartva szinkronban a két listát; a technikai fázisban később automatizálható (Drive API hívás az allowlist-admin felületről).
- **Nincs szükség egyedi "ellenőrző scriptre"**, ha az áthelyezés-elvet követjük — a duplikáció az, ami miatt egyáltalán kellene egy ilyen script, és pont ezt kerüljük el.

**Nyitva maradt / következő lépés:**
- ⏳ Tamás megerősíti a Drive-architektúra javaslatot (vagy módosítja)
- ⏳ Tamás ellenőrzi közvetlenül a Supabase dashboardot (hány projekt, van-e külön fiók a receptek-app-nak)
- ⏳ A fenti nyitott kérdések (1–8) lezárása után: Tamás jelezte, hogy utána szeretné, ha "fent lenne" egy első, éles (de még nem megosztott) példány, amit privátban csiszol 1-2 napig, és a jövő heti partner meetingen oszt meg először a csapattal. Ehhez még kérünk egy kifejezett jóváhagyást, mielőtt ténylegesen elindul a kódolás/deploy (a `CLAUDE.md` szabálya szerint).
- ⏳ Vault-szinkron script továbbra sem tervezve részletesen — technikai fázis feladata

---

## Technikai fázis – ELINDÍTVA (2026-09-23)

**Jóváhagyás megérkezett:** Tamás Supabase-fiókjában újra van szabad projekthely, és kifejezetten kérte a technikai megvalósítás indítását ("a technikai oldal létrehozás indulhat... csinálj te amit csak lehet"). Ez a `CLAUDE.md`-ben megkövetelt kifejezett jóváhagyás.

**Új architektúra-elem, amit Tamás pontosított (2026-09-23) – ez fontos, mindent befolyásol:**
- A tudásbázis tényleges tartalma **kizárólag Google/Gmail-bejelentkezéssel, allowlist-tal** legyen elérhető – **keresőrobot véletlenül se linkelhesse be**.
- A **bejelentkezési oldal viszont publikus** legyen.
- Emellett kell egy **publikus landing/teaser oldal** is: üzleti érdeklődőknek szóló "mézesmadzag" – felvillantja, milyen anyagok vannak bent, felkelti az érdeklődést, de a tényleges tartalmat nem mutatja meg – a cél, hogy az érdeklődő Tamáshoz forduljon, ő pedig partnerré regisztrálja.
- → Ez gyakorlatilag **három réteget** jelent: (1) publikus teaser/landing, (2) publikus login oldal, (3) védett, nem indexelt tartalom. Technikailag: Next.js védett route-csoport + middleware-es session/allowlist-ellenőrzés a (3)-hoz, `robots.txt` + `noindex` meta csak a (3) rétegen, a (1)-(2) szabadon indexelhető/publikus.

**Eszköz-felmérés elvégezve (2026-09-23, helyi gépen ellenőrizve):**
- ✅ **Vercel CLI telepítve és bejelentkezve** (`kisstom76`) – projekt létrehozás, env-változók, deploy önállóan elvégezhető, Tamás közreműködése nélkül.
- ⚠️ **GitHub CLI (`gh`) nincs telepítve, nincs API-token** – egy új repo létrehozásához Tamásnak kell egyetlen kattintással létrehoznia egy üres repót (`kisstom76/bemer-tudastar`), utána minden push/kód innentől önállóan megy.
- ⚠️ **Supabase CLI/API-token nincs** – ugyanaz a minta, mint a `bemer-crm`-nél: az új projekt létrehozása a Supabase dashboardon Tamás egyetlen kattintása, utána a séma/adatkezelés innentől nagyrészt önállóan megy (SQL Editor-be másolható migrációk, REST API adatműveletekhez).
- ⚠️ **Cloudflare API-token nincs** (a `bterapia.hu` DNS-t a `weboldalak-project` kezeli) – az aldomain CNAME-rekordját Tamásnak kell felvennie a Cloudflare-ben, egyetlen bejegyzés.
- ⏳ **Google OAuth kliens** (Google-login a Supabase Auth-hoz) – ehhez is kell majd egy rövid, kattintásra pontos lépéssor Tamástól a Google Cloud Console-ban, amikor odaérünk.

**Aldomain eldöntve (Tamás, 2026-09-23): `tudastar.bterapia.hu`.**

**Build elkezdve (2026-09-23) – hol tart, ha megszakad:**
- ✅ Next.js 16.3.6 (App Router, TypeScript, Tailwind v4, `src/`) létrehozva a projekt gyökerében, git inicializálva (még nincs remote, nincs saját commit). `@supabase/ssr` + `@supabase/supabase-js` telepítve, package-név `bemer-tudastar`.
- ⚠️ A scaffold felülírta a `CLAUDE.md`-t egy csonkkal – **visszaállítva** az eredeti tartalomra. A generált `AGENTS.md` figyelmeztet: Next 16-ban a `middleware.ts` neve **`proxy.ts`** (Node runtime), ezt kell használni.
- Minta: a `bemer-crm` `src/proxy.ts`, `src/lib/supabase/{client,server,service}.ts`, `src/app/auth/{login,callback}` – ezt ültetjük át, de a beégetett e-mail-lista helyett `allowed_emails` táblával.
- Tervezett útvonalak: `/` publikus teaser/landing · `/belepes` publikus Google-login · `/auth/callback` · `/nincs-hozzaferes` · `/tudastar/*` védett tartalom · `/admin` allowlist-kezelés + aktivitásnapló. Védelem: proxy (session + allowlist) + `robots.ts` disallow + `noindex` meta + `X-Robots-Tag` fejléc.
- ⚠️ A vázlat HTML-forrása a scratchpadből eltűnt (tmp takarítás) – a tartalom az Artifactból visszaolvasható: https://claude.ai/artifact/EwU6hQazbzrH3qNvDeMqUW
- ⏸️ Megállítva Tamás kérésére (meeting), majd folytatva ugyanaznap.

**Elkészült (2026-09-23, folytatás):**
- ✅ Teljes első verzió kódja, commit `3b79c6d` (helyben, még nincs GitHub-remote):
  - `/` publikus teaser: "Mi vár bent?" zárolt kategóriakártyák (csak leírás, tartalom nem), "Érdekel, belenéznék" e-mail-CTA, telefonszám, lábléc: "független BEMER partnerek, nem a BEMER Int. AG hivatalos oldala".
  - `/belepes` Google-login · `/nincs-hozzaferes` (nem engedélyezett fiók: e-mail-cím kiírva, kapcsolat, fiókváltás) · `/auth/callback` (belépést naplóz) · `/auth/kijelentkezes`.
  - `/tudastar` – a jóváhagyott vázlat teljes tartalma (bemutatkozás, áttekintő, promóciók, gyors elérhetőségek ❓-súgókkal, 7 kategória), oldalsáv-navigáció, mobilon legördülő. **Új: a lejárt promóciók maguktól eltűnnek**, a ~4 hónapon túliak gombbal nyithatók.
  - `/admin` – fiók felvétele/eltávolítása (partner/admin), fiókonként utolsó aktivitás + 30 napos belépés/megtekintés-szám, utolsó 50 esemény; emlékeztető a Drive-megosztásra. Magát az admin nem tudja törölni.
  - `supabase/migrations/001_alapsema.sql` – `allowed_emails`, `activity_log`, RLS (anon semmit nem lát; partner csak a saját sorát; admin mindent), kezdő adminok: kisstom@gmail.com, bterapia.office@gmail.com.
- ✅ Helyben ellenőrizve: build zöld; `/tudastar` és `/admin` bejelentkezés nélkül 307 → `/belepes`, `X-Robots-Tag: noindex…` fejléccel; `robots.txt` tiltja a védett útvonalakat; teaser + login mobilon/világos módban rendben.
- ✅ Vercel-projekt `bemer-tudastar` létrehozva és linkelve (`.vercel/`, git-ignorált); domain `tudastar.bterapia.hu` hozzáadva. Vercel által kért DNS: **`A tudastar → 76.76.21.21`** (Cloudflare-ben, szürke felhő / DNS only). ⚠️ A Vercel a névszerver-cserét is felajánlja – azt **tilos**, mert leállna a `bterapia.hu` főoldal.
- ✅ `CLAUDE.md` frissítve: jóváhagyás rögzítve, domain véglegesítve, új "4. Technikai alapszabályok" szakasz.
- 🟡 Figyelendő: a publikus teaser szövege nem tesz gyógyhatás- és jövedelem-állítást, de élesítés/megosztás előtt érdemes az Irányelvek 10. fejezetével (reklám, védjegyhasználat) összevetni.

**Élesítve (2026-09-29): az oldal működik a `https://tudastar.bterapia.hu` címen, Google-belépéssel – Tamás élesben kipróbálta és működik.**
- ✅ GitHub: `kisstom76/bemer-tudastar` (privát), Vercel-lel összekötve – minden `main`-re pusholt commit magától élesedik. (`vercel.json` rögzíti a Next.js keretrendszert, enélkül a deploy elhasal.)
- ✅ Supabase: projekt `dbvybzkcmovgcbdoqepj` (Frankfurt), `001_alapsema.sql` lefutott, Google provider engedélyezve, URL Configuration beállítva. Env-változók (URL + publishable key) a Vercelben mindhárom környezetben és a `.env.local`-ban.
- ✅ Google Cloud (kisstom@gmail.com fiók): külön projekt `bemer-tudastar`, OAuth-kliens `tudastar`, app "In production" (csak email+profile scope, ezért nincs Google-ellenőrzés; belépéskor "nem ellenőrzött alkalmazás" figyelmeztetés jelenhet meg – normális).
- ✅ Cloudflare (bterapia.office@gmail.com fiók): `A tudastar → 76.76.21.21`, DNS only. A Vercel névszerver-csere-felajánlását elutasítottuk (a főoldal leállna). A Vercelben a "Nameservers ✘" jelzés ettől normális.
- ✅ `/adatvedelem` oldal (a Google OAuth közzétételéhez kellett) – ⚠️ a szöveget Claude írta, jogász nem nézte át; Tamás átolvassa.

**Nyitva maradt / következő lépés:**
- ✅ Tamás kipróbálta és rendben találta (2026-09-29): `/admin` (partner felvétele, aktivitásnapló), nem engedélyezett fiók → `/nincs-hozzaferes`, telefonos megjelenés
- ⏳ Tartalmi hiányok: Kompendium/esetismertető linkek (Drive-mappa architektúra jóváhagyása még nyitott), Dr. Horváth Ilona elérhetősége, fotó a bemutatkozáshoz, "Kiemelt tippek", "Technikai ismeretek" tényleges tartalma
- ⏳ Az Irányelvek 10. fejezetével összevetni a publikus teaser szövegét megosztás előtt
- ⏳ Jövő heti partner meeting előtt: privát csiszolás Tamással, utána partnerek felvétele az admin oldalon
- ⏳ Vault-szinkron script (promóciók, elérhetőségek → `src/content/*.ts`) – még nincs tervezve
  - **Tamás kérése (2026-10-02): az események/képzések is ide tartoznak.** Amikor a vaultban frissülnek a BEMER események (időpontok, képzések, rendezvények – jelenleg: vault `02 Areas/BEMER/05_Promociok/00_Promociok_Attekinto.md` és `2026-08-13_Oszi_BEMER_Programnaptar.md`), a tudástár „Mi fut most" része is mindig frissüljön. A vault a forrás, a weboldal csak tükrözi. A feladat ebben a projektben él, nem a vault feladatlistáján.
- ⏳ Git: ez a naplófrissítés még nincs commitolva/pusholva (az ellenőrző átmenetileg nem válaszolt) – következő alkalommal pótolni
- ▶️ Folytatás: Tamás a fenti hátralévő tételeket feladatként megtartja, a munkát innen (ebben a projektben) folytatjuk

**📌 Memorizált tervek (2026-09-30: heti `tudastarba`-címkés rutin; 2026-10-01: FŐ TERV – Vault-tudásanyag + AI-keresés)** → beolvadtak a rendszertervbe: [`RENDSZERTERV.md`](RENDSZERTERV.md) (2. B folyam, 3. AI-keresés, 4. sorrend). A részletek egy helyen, ott élnek.

**Rendszerterv + régi Drive-mappa átnézése (2026-10-02):**
- Tamás kérdésére: az iCloud kívülről nem érhető el weboldal számára → a gép tolja ki a tartalmat (helyi szinkron); az MD-tudásanyaghoz nem kell Drive-tükör. Kérte még: partnermeeting-témák folyamatos bevitele, dátumok/események automatikus frissítése a Vaultból, olcsóbb AI-motor. Mind a [`RENDSZERTERV.md`](RENDSZERTERV.md)-ben, Tamás jóváhagyta a sorrendet ("megyünk sorba, javaslatod szerint").
- Régi partner-megosztású Drive-mappa (`14OgRiYfpsqBai3lkLxnlZDob_iWw6VG0`) átnézve; ítéletek: `RENDSZERTERV.md` 5.1; használható szöveges tartalom (újonc-lépések, BBO-tippek, StartUp, TEÁOR/VTSZ, videók, Vinczéné-kérdés) → `TARTALOM_VAZLAT.md` 2., 4., 7., 8. pont.
- ▶️ **Következő: Fázis 1 – Drive-rendrakás, új sessionben** (`RENDSZERTERV.md` 5.2).
- ❓ Tamásnak: Light Pack EVO (régi Beauty Pack) leírás és LIVATY-vázlat megvan-e; webinárium/marketing prezi használatban van-e még; Vinczéné Borbély Zsuzsa bekerüljön-e; + a `RENDSZERTERV.md` 4. pont négy döntése.
**Állapot-összefoglaló (2026-10-01):** az oldal él (`tudastar.bterapia.hu`), Google-belépés + admin-allowlist + aktivitásnapló működik és ki van próbálva. Memorizált, még el nem indult tervek: (a) heti `tudastarba`-címkés Vault→tudástár rutin; (b) Vault-tudásanyag bekötése + AI-keresés (fent). Hátralévő tartalmi tételek: Kompendium/esetismertető linkek (Drive-mappa döntés), Dr. Horváth Ilona elérhetősége, fotó, Kiemelt tippek, Technikai ismeretek, adatvédelmi szöveg átolvasása, teaser-szöveg egyeztetése az Irányelvek 10. fejezetével.

---

## Aktuális állapot – 2026-09-16 (első munkamenet, LEZÁRVA)

**Miről szólt:** az ötlet felvetése (az Operatív-mappában induló beszélgetésben) egy zárt, Google-bejelentkezéssel védett partner-tudásbázisról, majd a projekt saját mappájának kialakítása.

**Ebben a munkamenetben elkészült:**
1. **Technikai előzetes irány** megbeszélve: Next.js + Supabase Auth (Google-login + saját e-mail-allowlist tábla) + Vercel, a `bemer-crm`-nél már bevált mintát követve. **Még nem eldöntött**, csak kiinduló javaslat.
2. **Kiderült, hogy a `bterapia.hu` domain nem alkalmas** ide – az egy publikus, Astro + Cloudflare Pages-en futó lead-gen oldal (Karkis Katalin arcával), más célközönségnek. A domain-kérdés nyitva marad a technikai fázisig.
3. **Saját mappa létrehozva:** `BEMER Projects/bemer-tudastar/` – nem a `weboldalak-project` alá került (más célközönség, más rendszer), hanem önálló, harmadik alprojektként. A szülő `BEMER Projects/CLAUDE.md` térképe frissült.
4. **Tartalom-kör bővült:** Tamás explicit kérése, hogy ne csak a névvel megnevezett dokumentumtípusok (Kompendium, orvosi esetismertetők, irányelvek, elérhetőségek) kerüljenek be, hanem **minden szétszórt, összefüggő infó**: aktuális dátumok, promóciók, landing page-ek elérhetősége – tehát hogy "mi fut, mikor, mivel" is átlátható legyen egy helyen. Plusz egy külön, kiemelt hely a Tamásban felgyűlt **gyakorlati/stratégiai észrevételeknek** (pl. egy akció – mondjuk a csereakció – legjobb kihasználási sorrendje), hogy ezek ne vesszenek el, hanem megfelelő kiemeléssel megjelenjenek.
5. **Dokumentumszerkezet szétválasztva:** Tamás kérte, hogy a `CLAUDE.md` maradjon vékony (csak tartós szabályok), a változó infó (állapot, döntések, konkrét tartalom) külön fájlba kerüljön, amire a `CLAUDE.md` csak hivatkozik – az Operatív-mappa `docs/PROGRESS.md`-mintáját követve. Ebből lett ez a fájl (munkamenet-napló) és a [`TARTALOM_VAZLAT.md`](TARTALOM_VAZLAT.md) (a gyűjtött tartalom vázlata).
6. **Elírás javítva:** a dokumentum, amiből a partnerek tanulnak, **Kompendium**, nem "Compendium" – mindenhol javítva.

**Nyitva maradt:**
- 🟡 **Tartalomgyűjtés még nem kezdődött el** – a vault, a Drive és a BBO átnézése a következő lépés: mi van már meg, mi hiányzik, mit tudok én (Claude) már most kínálni a saját tudásomból (azon kívül, ami BEMER-forrásból kell jöjjön, mint a jogi/irányelv-rész).
- 🟡 A `TARTALOM_VAZLAT.md` jelenleg csak üres/vázlat szekciókat tartalmaz – ki kell tölteni.
- ⏳ **Technikai fázis** (hosting, bejelentkezés, domain) szándékosan nincs elkezdve – Tamás akkor jelzi, amikor van rá ideje.

**Következő lépés:** Tamás bevárja ezt a munkamenetet, és külön folytatja innen – valószínűleg a tartalomgyűjtéssel (vault/Drive/BBO átnézése, meglévő anyagok inventáriuma).
