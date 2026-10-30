# Design / arculat – BEMER Human Line

> Rögzítve: 2026-09-16, Tamás kérésére. Forrás: [BEMER Media Library](https://library.bemergroup.com/bemer-medien-bibliothek-en) (hivatalos BEMER Corporate Design Guidelines, élő oldal – technikai fázis előtt érdemes újra ellenőrizni, hátha frissült).

**Döntés:** a tudástár weboldal designja a **BEMER Human Line** arculatot követi (nem Horse/Dog Line – azok más szegmenshez tartoznak, ne keveredjenek bele).

## Színek

**Elsődleges (Human Line):**
| Szín | HEX | RGB |
|---|---|---|
| BEMER-Orange | `#EB5A23` | 235/90/35 |
| Light Orange | `#EF7D30` | 240/126/48 |

**Semleges, minden line-hoz közös (BEMER-hivatalos):**
| Szín | HEX | RGB |
|---|---|---|
| BEMER-Anthracite (szöveg) | `#4B4A50` | 75/74/80 |
| BEMER-Beige (alap/háttér) | `#ECE3DC` | 236/227/220 |

⚠️ **Eltérés az élesített `tudastar.bterapia.hu` kódtól (`src/app/globals.css`), Tamás jóváhagyásával (2026-10-30, lásd Döntések archívuma 30/28):** az élesben futó verzió a törzsszöveghez egy sötétebb, saját antracitot használ (`#322F35`, nem a hivatalos `#4B4A50`-et), és az alap-háttér fehér/`#FBF7F3`, a hivatalos bézs (`#ECE3DC`) csak másodlagos felületeken (kártya-háttér, hover) jelenik meg, nem mindenhol. **Ez a kódban lévő, kipróbált változat a hiteles** – ha új felület készül, ezt kövesd, nem a fenti táblázat nyers hex-értékeit.

**Másodlagos (kiegészítő, mértékkel használva):**
| HEX | RGB |
|---|---|
| `#6F6D73` | 112/109/115 |
| `#948F93` | 148/143/147 |
| `#B9B0B0` | 186/177/176 |
| `#D8CFCB` | 216/207/203 |

⚠️ **Ne használd** a Horse Line (`#00587B` petrol, `#00859D` türkiz) vagy Dog Line (`#A1A332` zöld, `#C1C339` világoszöld) színeit – azok más termékvonalhoz tartoznak.

## Betűtípus

**Barlow** (letölthető: https://library.bemergroup.com/bemer-medien-bibliothek-en → "Download Barlow")

- **Regular** – törzsszöveg
- **Semibold** – kiemelés
- **Thin** – címsorok, nagyobb méretben
- **Light** – címsorok, kisebb méretben (jobb olvashatóság)

## Logó

- Elsődleges logó: antracit változat világos háttéren, fehér változat sötét háttéren
- Human Line másodlagos logó (színes) is használható, ha explicit Human Line-kapcsolatot akarunk mutatni
- Letöltés: https://library.bemergroup.com/bemer-medien-bibliothek-en → "Download all logos here"

## Terminológia / helyesírás (kötelező a weboldal szövegeire is)

- **BEMER** mindig csupa nagybetűvel, kötőjel **soha** nem kerül utána (pl. "BEMER technológia", nem "BEMER-technológia")
- Termékvonalak fix, **nem fordítandó** elnevezések: Human Line, Horse Line, Dog Line, Wellness Line
- Evo/Dog termékek elnevezése rögzített szerkezetű: „B." + terméknév + „Evo"/„Dog" (pl. B.Box Evo, B.Control Dog) – pontokkal, nagybetűvel, nem rövidíthető/fordítható
- Vezérlő-/applikátor-/kiegészítő-nevek angolul maradnak minden nyelven (pl. B.Bed, B.Body)
- Szetteknél kötőjel a besorolás és a "Set" között: pl. "Basic Set Evo"

## Kapcsolódó

- A teljes hivatalos Styleguide letölthető ugyanerről az oldalról ("Download BEMER Styleguide") – érdemes lesz letölteni a technikai fázis elején.
- A [[08 System/Utasitasok/BEMER]] Vault-jegyzet ugyanezt a paletta/font-szabályt már alkalmazza a partneri prezentációkhoz (2026-09-16 óta) – a tudástár weboldal ugyanezt a nyelvet viszi tovább, konzisztensen.
