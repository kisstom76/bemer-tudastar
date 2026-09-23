# CLAUDE.md – BEMER Tudástár (partner tudásbázis)

**Tulajdonos:** Kiss Tamás (kisstom@gmail.com)

**Mi ez a mappa:** egy tervezett, **nem publikus**, Google-bejelentkezéssel védett belső tudásbázis a BEMER-partnereknek. Cél, hogy amit most sok helyről (Svájci Központ, Magyar Központ, BBO, saját partneri anyagok, fejben tartott tapasztalat) kell összeszedni, az **egy helyen** legyen: Kompendium, orvosi esetismertetők, social media/hirdetési irányelvek, fontos elérhetőségek, landing page-ek és marketinganyagok, **aktuális dátumok és promóciók** (mi fut, mikor, mivel – ma ez szét van szórva és nincs átlátás), és a Tamásban felgyűlt **kiemelt, gyakorlati észrevételek** (pl. egy akció kihasználásának legjobb sorrendje), megfelelő kiemeléssel, jó helyen.

**Kapcsolódó projektek:** lásd a szülő [`../CLAUDE.md`](../CLAUDE.md) – ez a **harmadik önálló** BEMER-alprojekt a `bemer-crm` (ügyfélkezelés) és a `weboldalak-project` (publikus lead-gen oldalak, köztük `bterapia.hu`) mellett.

⚠️ **Nem ugyanaz, mint a `weboldalak-project`.** Az publikus marketingoldalakat futtat (Astro + Cloudflare Pages, Karkis Katalin arcával, bérlőket/érdeklődőket céloz). Ez itt egy **zárt, beléptetős** belső oldal lesz, teljesen más célközönségnek (meglévő partnerek).

> Minden munkamenet elején olvasd el ezt a fájlt, majd a [`docs/PROGRESS.md`](docs/PROGRESS.md)-t.

---

## 1. Miért van két külön dokumentum ide

Ez a fájl csak a **tartós, ritkán változó** szabályokat tartja (mi ez a projekt, mi a sorrend, mit nem szabad, hol keresendő micsoda). Minden, ami **bármikor változhat** – állapot, döntések, konkrét dátumok/promóciók/linkek, a gyűjtött tartalom maga – **külön fájlba** kerül, hogy ez itt ne dagadjon fel és ne kelljen egyszerre karbantartani két helyen ugyanazt (lásd az Operatív-mappa hasonló elvét).

| Mit keresel | Hol van |
|---|---|
| Munkamenet-történet, döntések, nyitott pontok | [`docs/PROGRESS.md`](docs/PROGRESS.md) |
| A gyűjtött tartalom vázlata (Kompendium, irányelvek, dátumok/promóciók, kiemelt tippek stb.) | [`docs/TARTALOM_VAZLAT.md`](docs/TARTALOM_VAZLAT.md) |
| Design/arculat (színek, betűtípus, terminológia) | [`docs/DESIGN_ARCULAT.md`](docs/DESIGN_ARCULAT.md) |

## 2. Sorrend, amit Tamás kért

1. **Tartalom** – nagyjából összerakni, ami kell hozzá, átnézni a meglévő anyagokat (vault, Drive, BBO), megmondani mi hiányzik
2. **Technikai megvalósítás** – csak ezután, amikor Tamásnak van ideje a kattintgatós résszel foglalkozni

✅ **A technikai fázisra Tamás 2026-09-23-án kifejezett jóváhagyást adott** ("csinálj te amit csak lehet: Vercel, Supabase, GitHub"). Tamás laikus – a technikai döntéseket én hozom, ő jóváhagy; kézi lépéseket kattintásra pontosan kell leírni.

## 3. Állandó szabályok

- ⚠️ **A jogi / hirdetési irányelv-tartalom BEMER-forrásból kell jöjjön** (BBO Compliance Corner, meglévő ASZF-dokumentumok) – ezt nem szabad kitalálni vagy általános tudásból pótolni, mert kuruzslás-törvényi kockázata van.
- Lásd a `bemer-kontextus` skillt minden BEMER-fogalomért, szintért, jutalékszabályért, rövidítésért.
- **Domain (2026-09-23-án véglegesítve):** **`tudastar.bterapia.hu`**. Ez nem ugyanaz, mint a publikus `bterapia.hu` marketingoldal – külön app, külön beléptetés, csak a domain közös. Koordinációt igényel a `weboldalak-project`-tel (Cloudflare Pages DNS-beállítás) a technikai fázisban.
- **Design/arculat (2026-09-16-i döntés):** a weboldal a **BEMER Human Line** hivatalos corporate designját követi (szín: BEMER-Orange `#EB5A23`, antracit szöveg, bézs alap; betűtípus: Barlow). Részletek: [`docs/DESIGN_ARCULAT.md`](docs/DESIGN_ARCULAT.md). Horse/Dog Line színei nem keverendők bele.

## 4. Technikai alapszabályok

- **Stack:** Next.js 16 (App Router, `src/`) + Supabase (Auth: csak Google) + Vercel. ⚠️ Next 16-ban a middleware neve **`src/proxy.ts`** – kódírás előtt nézd meg a `node_modules/next/dist/docs/`-t (lásd `AGENTS.md`).
- **Három réteg – ezt soha ne gyengítsd:**
  1. `/` publikus teaser/landing (indexelhető) – **csak kategórialeírás, valódi tartalom soha**.
  2. `/belepes` publikus Google-login.
  3. `/tudastar/*`, `/admin/*` védett: `proxy.ts` (session + `allowed_emails`) **és** az oldal saját `requireAccess()`/`requireAdmin()` hívása, plusz `noindex` meta, `X-Robots-Tag` fejléc, `robots.txt` tiltás. Új védett útvonalnál mindegyik kell.
- **Jogosultság az adatbázisban (RLS)**, nem a kódban: `allowed_emails` (partner/admin), `activity_log`. Nincs service role kulcs a projektben – ne is vezesd be, ha nem muszáj.
- **Sémaváltozás:** új sorszámú fájl a `supabase/migrations/`-be; Supabase CLI nincs, Tamás futtatja az SQL Editorban – a teljes SQL-t másolható kódblokkban add oda neki.
- **Tartalom:** a változó adatok (promóciók, elérhetőségek, linkek, kategóriák) a `src/content/*.ts` fájlokban vannak – ezek a Vault-szinkron célpontjai.
- **Titkok:** kulcs, jelszó, token soha nem kerül a chatbe vagy commitba – `.env.local` (git-ignorált) és Vercel env.

---

Ha új sessionben nyitod meg ezt a mappát: **ez a fájl az elsődleges belépési pont**, utána a `docs/PROGRESS.md`. Ne az Operatív-mappa vagy a szülő `BEMER Projects/CLAUDE.md` szabályait kövesd innentől, csak ha át kell látni a másik két alprojektet is.
