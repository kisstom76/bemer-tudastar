# 10. csomag – Kéthavi ÁSZF/irányelv-emlékeztető: javaslat a napi rutinba

*Elkészült: 2026-10-13. **Csak javaslat – a vault-utasítást és a programot Tamás jóváhagyása nélkül nem módosítottam.***

## Röviden (laikusan)
A rendszernek van egy kész mechanizmusa az ismétlődő, dátumhoz kötött ellenőrzésekre (heti átnézés, jutalék-ellenőrzés, MOHU stb.): **az „Időszakos emlékeztetők"**. A reggeli futás programmal kiszámolja, mi esedékes, felveszi a naplóba „nyitott"-ként, és **addig jelenik meg minden reggel, amíg Tamás ki nem mondja, hogy kész**. Az ÁSZF-ellenőrzés ide illik: nem kell új szerkezet, csak **egy új típus** – ugyanúgy, mint a negyedéves MOHU-emlékeztetőnél (2026-10-05).

## Mi hajtja végre (a szabály szerint kötelező kimondani)
A reggeli futás 3. fázisában lefutó `scripts/reggeli_feladatok.py --idoszakos` (Naplok.md 2/1). Ami időben változik, ott ez az ismétlődő lépés; magától az emlékeztető nem „emlékszik".

## Javasolt módosítások (3 hely – mind kell, különben nem fut)
1. **Vault – `08 System/Naplok/Idozitett_Feladatok_Log.md`, „Aktív típusok" táblázat: új sor** (ez az egyetlen hely, ahol a típus él):

| Típus | Azonosító formátum | Aktiválás szabálya | Mi jelenik meg nyitott állapotban |
|---|---|---|---|
| BEMER ÁSZF és irányelvek ellenőrzése | ÉÉÉÉ-HH (az aktiválás hónapja) | kéthavonta, a páratlan hónapok (jan., márc., máj., júl., szept., nov.) 1. napján | 🔴 feladat: „BEMER ÁSZF és hirdetési irányelvek – változott-e?" – összevetés a vaultban tárolt változattal (lásd lent) |

2. **Program – `scripts/reggeli_feladatok.py`, `idoszakos_azonositok()`** (a 569. sor mellé egy sor). Ha ez nincs, a program „⚠️ ismeretlen típus"-t jelez, és nem veszi fel a naplóba. A kód:
```python
ho = today.month if today.month % 2 else today.month - 1   # a legutóbbi páratlan hónap
"BEMER ÁSZF és irányelvek ellenőrzése": f"{today.year}-{ho:02d}",
```
(január–február ugyanabban az évben marad: január = 01, február → 01. Nincs évforduló-probléma.)

3. **Vault – `08 System/Utasitasok/Naplok.md`, 2. szekció:** a „Ma: heti átnézés (hétfő), …" felsorolás kiegészítése az új típus nevével, plusz egy **2/C alfejezet** az ellenőrzés lépéseivel (lásd lent), ahogy a jutalék-ellenőrzésnél (2/B).

## Mi legyen az ellenőrzés tartalma (a 2/C alfejezet javasolt szövege)
Automatikusan **kéthavonta**, a páratlan hónap 1-jén. Az ellenőrzés **tényleges összevetés, nem csak emlékeztetés**:
1. **A vaultban tárolt változat** megnyitása (a hely: lásd a nyitott pontot lent) – a kelte/verziószáma.
2. **A hivatalos forrás** megnézése: a BBO **Compliance Corner** (BEMER Irányelvek, ÁSZF, Social Media Policy Europe, Adatvédelmi nyilatkozat) – ez Tamás belépésével érhető el, felügyelet nélküli futás nem tudja; a futás ezért a B részben **jelzi**, hogy az összevetés Tamásra vagy egy vele közös sessionre vár.
3. **Eredmény** egy sorban a BEMER Naplóba (`#irányelv`): „ÉÉÉÉ-HH: nem változott" / „változott: [mi], a vault frissítve".
4. Ha változott: a vault-példány frissítése, és a `tudastarba` címkés, az Irányelvekre épülő tudástár-oldal (teaser-szöveg, hirdetési szabályok) érintettségének jelzése.
5. Lezárás: csak Tamás kifejezett igenje („kész", „nem változott") – a tudomásulvétel nem zár (Naplok.md 2/3).

## Nyitott pontok – ezek nélkül a javaslat félkész
- ⚠️ **A vaultban nincs meg az Irányelvek szövege.** A `DRIVE_DONTESEK_ELSO_KOR.md` szerint a Drive-példány („Irányelvek + Kihívások feltételei") „elég a vaultban" és archívumba megy – de a vaultban a `07_Uzleti_Tudastar/04_Hivatalos_Kiadvanyok/` csak a Mentor/Partner Guide-ot és a Storytelling Blueprintet tartalmazza, az Irányelvek/ÁSZF/Social Media Policy szövegét **nem találtam** (kerestem név és tartalom szerint). Amíg ez nincs a vaultban, **nincs mivel összevetni**, és az archiválás után a Drive-példány sem marad. **Javaslat: archiválás előtt a szöveget be kell tölteni a vaultba** (külön jegyzet, kelte és forrás-link a fejlécben). Ez külön, nagyobb feladat – a jóváhagyásodat kéri.
- **Gyakoriság:** kéthavonta (páratlan hónap 1.) – a ti megfogalmazásotok „kéthavonta". Ha inkább minden második hónap *egy másik napján* kellene (pl. a hónap első hétfőjén, mint a havi átnézés), szólj; az azonosító és a program sora ehhez igazítható.
- **Első esedékesség:** a javaslat szerint 2026-11-01. A programban viszont a szeptemberi azonosító (2026-09) már most „hiányzik a naplóból", ezért az első reggeli futás kéne egy ➕ jelzést adjon. Két megoldás: (a) bevezetéskor beírunk egy visszamenőlegesen lezárt „2026-09" sort (ahogy 2026-08-19-én a rendszer bevezetésekor), vagy (b) engedjük, hogy most azonnal nyíljon, és az első ellenőrzés a vault-feltöltéssel együtt megtörténik. **Ajánlom (b)-t**: a vaultban úgysincs még változat, az első kör ténylegesen kellene.
- **Tudástár-oldal:** a `bemer-tudastar` `/admin` felületén is lehet emlékeztető-szalag (a `DRIVE_DONTESEK` említi). Ezt nem javaslom most – a napi rutin elég, egy helyen legyen (egy szabály egy helyen).

## Teendő, ha jóváhagyod
1. Te: igen/nem a fenti 3 módosításra + a gyakoriságra + (a)/(b) első esedékességre.
2. Én (új sessionben): vault-módosítás `mcpvault`-tal, a régi állapot a `Utasitasok_Changelog.md`-be, audit-log sor; `reggeli_feladatok.py` egy sor + próbafuttatás (`--idoszakos` kell mutassa, hogy az új típus nem „ismeretlen").
3. Külön: az Irányelvek-szöveg vaultba töltése (lásd nyitott pont).
