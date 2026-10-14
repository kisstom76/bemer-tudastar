# AI-feladatcsomagok (előkészítve, indításra várnak)

Nagy token-igényű munkák, előre összerakva. **Indítás:** amikor Tamás nincs a gép előtt (pl. udvari munka) és van keret (heti reset után). Mindegyik új sessionben indul a lenti szöveggel; a session a végén jelentést ír, **mozgatni/törölni/megosztani nem kezd jóváhagyás nélkül**.

Közös bevezető minden csomaghoz (másold elé):
> BEMER Tudástár, Fázis 1. Olvasd el a `CLAUDE.md`-t, a `docs/PROGRESS.md`-t és a `docs/DRIVE_DONTESEK_ELSO_KOR.md`-t. Drive-on csak olvass és elemezz; az eredményt írd fájlba, Drive-mozgatás, törlés, megosztás nincs. A végén rövid, laikus összefoglaló.

| # | Csomag (állapot: 2026-10-14) | Modell | Becsült igény | Előfeltétel |
|---|---|---|---|---|
| 1 | Drive-rendrakás 1. szelet végrehajtása (`#Dokumentumok a munkához`) | Sonnet | közepes | Tamás jóváhagyja a mozgatási listát (ő legyen elérhető) |
| 2 | ✅ KÉSZ (10-14, mozgatás is) – Beck Zoli-mappák + BEMER Evo + #Prospektusok összevetése | Sonnet | közepes | – |
| 3 | ✅ KÉSZ (10-14, vaultba írva; 3 kérdés nyitva a jelentés E) részében) – EE team vezetők + Evo médiaanyagok tartalmi átnézése → vault | Opus + ügynök | nagy | 2. kész |
| 4 | 🟡 JELENTÉS KÉSZ, D1–D9 eldöntve (10-14); a végrehajtási lista (jelentés 8. pont) még nem futott – Brossúrák/médiaanyagok rendszerezési terve (Drive, 08, vault-tartalomjegyzék) | Opus | nagy | 2. kész |
| 5 | ✅ KÉSZ (10-14) – Német tanulmányok (Fraktur, ZAEN) szakfordítás + összefoglaló | Opus | közepes | – |
| 6 | ✅ KÉSZ (10-13): már korábban feldolgozva, a régi példány duplikátum – Malomsoki-tanulmány feldolgozása (fotózott PDF) | Sonnet | közepes | – |
| 7 | 🟡 JELENTÉS KÉSZ (10-13), 5 ❓ nyitva – UK kutatások újrafuttatása, 2026-10 frissítés | Opus + deep-research | nagy | – |
| 8 | 🟡 TERVEZET KÉSZ (10-13), jogi ellenőrzésre vár – GDPR-szöveg + részvételi lap az infó-előadáshoz | Sonnet | kicsi | – |
| 9 | ✅ KÉSZ (10-13, rendezve); nyitott: CRM-sablon (verziójelzés, lakcím) – Ügyfél-tájékoztatók verziógyűjtése (Drive-keresés, összevetés) | Sonnet | közepes | – |
| 10 | 🟡 JAVASLAT KÉSZ (10-13), Tamás igen/nem-jére vár – Kéthavi ÁSZF/irányelv-emlékeztető javaslat a napi rutinba | Sonnet | kicsi | – |
| 11 | Meglévő ügyfelek gondozása – projektindítás a vaultban | Opus | közepes | Tamás jelen van (projektdöntések) |

## Csomag-szövegek

**2.** A régi `Bemer` mappa `Beck Zolitól` (parancsikonok: "Média_anyagok_partner", "EE team vezetők"), `BEMER Evo` (`EVO Brossurák`, `Partner_anyagok` 5 almappa) és `#Prospektusok` mappáit hasonlítsd össze név+méret alapján a teljes Drive-val (a "Saját MacBook Air" gépmentést külön jelöld). Táblázat: fájl | már megvan hol | hiányzik | javasolt hely | dátum (brossúráknál kötelező). Ha a parancsikon mögötti megosztott mappában olyan van, ami nálunk nincs, jelöld szerveroldali másolásra (`copy_file`), de ne másold.

**3.** A "EE team vezetők" és "Média_anyagok_partner" megosztott mappák PDF-jeiből és dokumentumaiból gyűjtsd ki, ami hasznos és a vaultban még nincs meg (keress rá a vaultban). Eredmény: vault-jegyzet-tervezetek a `02 Areas/BEMER/` megfelelő helyére, forrás-linkkel; jelöld, mi lehet azóta elavult.

**4.** A brossúrák és médiaanyagok (Humán/Lovas, hajtogatós/nagy prospektus, képek, videók, gépkönyvek) rendszerezési javaslata: Drive saját terület + `08_Partnereknek_Megosztott` szerkezet + vault-tartalomjegyzék, mindegyik tételen kiadási dátum. A tudástárba szánt "letölthető anyagok" oldal vázlata.

**5.** `Német nyelvű dokumentumok`: `Fraktur-und-Wundheilung.pdf`, `ZAEN - QZ - Bemer.pdf`. Szakmailag korrekt magyar fordítás (fájlba), majd 5–10 soros összefoglaló: miről szól, ki adta ki, mikor, melyik készülékkel. Megosztásról Tamás dönt.

**6.** `Sport/1346413298_Malomsoki_Magneses_kezel__s_mail__3.4_MB.pdf`: szöveg kinyerése (OCR), hivatkozás (lap, év, szerzők), milyen készülékkel készült, rövid összefoglaló, vault-jegyzet-tervezet a `02_Kutatasok_Tanulmanyok` alá.

**7.** `#Dokumentumok a munkához/UK` két dokumentuma (Gemini mélykutatás: BEMER UK partneri jogi útmutató, UK ÁFA/vásárlástámogatás). Ellenőrizd újra friss forrásokkal, egészítsd ki, jelöld: "AI mélykutatás, 2026-10 frissítés", forráslistával. Cél: vault "Külföldi működés" + tudástár.

**8.** `Infó előadás részvételi lap.xlsx` mezői alapján: GDPR-tájékoztató a résztvevői laphoz (cél: kapcsolatfelvétel és infóanyag küldése a rendezvény után; kérésre teljes törlés; jogalap, megőrzési idő), plusz nyomtatható részvételi lap. A meglévő `Kipróbálási nyilatkozat` (2026 április, BEMER központ) adatkezelési része mintának használható. Nem jogi tanácsadás – jelöld, mit kell ellenőriztetni.

**9.** Keresd meg a Drive-on az összes BEMER ügyfél-tájékoztatót (Pro/Classic, Evo). Táblázat verzió/dátum szerint, azonos verziók jelölése, tartalmi különbségek röviden. Személyes adatot tartalmazókat jelöld tisztításra.

**10.** Javaslat: hogyan kerüljön a napi rutinba (vault `08 System`) egy kéthavonta megjelenő feladat: "BEMER ÁSZF és hirdetési irányelvek – változott-e? Összevetés a vaultban tárolt változattal." Csak javaslat, a vault-utasítás módosítása Tamás jóváhagyásával.
