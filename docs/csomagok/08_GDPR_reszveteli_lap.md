# 8. csomag – GDPR-tájékoztató és részvételi lap az infó-előadáshoz

*Elkészült: 2026-10-13. Állapot: **tervezet, jogi ellenőrzésre vár** – nem jogi tanácsadás.*

## Mi alapján készült
- **A régi lap** (`Infó előadás részvételi lap.xlsx`, 2023-02-28-án készült, a példány fejléce: „BEMER információs előadás 2025.02.14"): négy oszlop – **Név · Meghívó neve · Email · Mobil**. Adatkezelési szöveg nincs rajta.
- **Minta az adatkezelési részhez:** a `Kipróbálási és adatkezelési nyilatkozat` (BEMER központ, 2026 április) 3. pontja: adatkezelő-adatok üresen, cél, jogalap (GDPR 6. cikk (1) a) – hozzájárulás), kezelt adatok, 5 év, jogok, NAIH. Itt ugyanezt a szerkezetet követtem, de az **előadás céljához igazítva** (nem kipróbálás, nincs aláírás-nyilatkozat, nincs egészségügyi tartalom).
- **Cél (Tamás, 2026-10-13):** kapcsolatfelvétel és infóanyag küldése az előadás után; kérésre teljes törlés.
- Vaultban nincs megfelelő meglévő részvételi-lap sablon (kerestem: „részvételi lap", „GDPR"), ezért új lap készült. A régi Doc („Regisztrációs lap Bemer előadáshoz", kelte ismeretlen) Tamás döntése szerint mintaként marad – ezt most nem néztem meg.

## A. GDPR-tájékoztató szövege (a lap hátára / alá)

> **Adatkezelési tájékoztató és hozzájárulás – BEMER információs előadás**
>
> **Adatkezelő:** [név / vállalkozás neve] · [székhely] · [e-mail] · [telefonszám]
>
> **Miért kérjük az adataidat?** Hogy az előadás után felvegyük veled a kapcsolatot, és elküldjük az előadáson szereplő BEMER-tájékoztató anyagokat. Ennél többre nem használjuk.
>
> **Milyen adatokat kezelünk?** Név, e-mail-cím, telefonszám. Rögzítjük azt is, hogy **ki hívott meg** az előadásra (ez a meghívó partner neve).
>
> **Jogalap:** a te önkéntes hozzájárulásod (GDPR 6. cikk (1) bekezdés a) pont) – a lap aláírásával/kitöltésével adod meg. Hozzájárulás nélkül is részt vehetsz az előadáson; ilyenkor az adataidat nem kell megadnod.
>
> **Meddig őrizzük?** A kapcsolatfelvételi célra az előadástól számított **[12] hónapig**, vagy amíg vissza nem vonod a hozzájárulást – amelyik előbb bekövetkezik. Ha ezalatt BEMER-ügyfél leszel, az adataid kezelésére az ügyfélkapcsolatra vonatkozó külön tájékoztató vonatkozik.
>
> **Ki fér hozzá?** Az adatkezelő és a meghívó partnered, kizárólag a fenti célra. Az adatokat e-mail- és ügyfélkezelő szolgáltatásban tároljuk (pl. Google, [CRM-szolgáltató]); további címzettnek nem adjuk át.
>
> **A jogaid:** kérhetsz tájékoztatást, helyesbítést, **törlést**, korlátozást, és a hozzájárulásodat **bármikor, indoklás nélkül visszavonhatod** (a visszavonás előtti adatkezelés jogszerűségét nem érinti). Kérésre **minden adatodat töröljük** – elég egy e-mail erre a címre: [e-mail]. Panasszal fordulhatsz a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH, www.naih.hu).
>
> ☐ **Hozzájárulok**, hogy a fenti adataimat az adatkezelő a fenti célból kezelje, és velem az előadás után kapcsolatot vegyen fel (e-mailben vagy telefonon), illetve elküldje a tájékoztató anyagokat.

## B. Nyomtatható részvételi lap
A nyomtatható A4-es változat: [`08_reszveteli_lap_nyomtathato.html`](08_reszveteli_lap_nyomtathato.html) – böngészőben megnyitod, Cmd+P.

**Fontos szerkezeti döntés:** a régi lap egy közös táblázat volt, ahol a következő beíró látja az előzők nevét, e-mailjét, telefonszámát – ez adatvédelmi hiba. Az új változat **vágható cédula**: egy résztvevő = egy kis lap (egy A4-en 4 db), kitöltés után a résztvevő maga dobja egy dobozba. Így senki más adatát nem látja.

Mezők (a régi lapból megtartva): Név · E-mail · Mobil · Ki hívott meg. Új: hozzájárulás négyzet, dátum, aláírás.

## C. Mit kell ellenőriztetni (nem tudom helyettesíteni)
1. **Ki az adatkezelő?** Tamás e.v., az Egészség Fókusz Kft., vagy más – ez határozza meg a fejlécet. (Mezők üresen hagyva.)
2. **Megőrzési idő:** a [12 hónap] **az én javaslatom**, nem forrásból való – a minta 5 évet ír (az más cél: kipróbálás dokumentálása). Kapcsolatfelvételre az 5 év nehezen indokolható; döntendő.
3. **A meghívó neve** egy harmadik személy (partner) adata – elég-e, hogy ő maga adta a nevét, vagy külön kell róla szólni.
4. **Címzettek / adatfeldolgozók:** valójában hová kerül az adat (Gmail, CRM, Excel a gépen)? A szöveg zárójeles részeit ennek megfelelően kell kitölteni. Google-szolgáltatásnál harmadik országba (USA) továbbítás említése is kérdés.
5. **Hozzájárulás bizonyítása:** az aláírt cédulát meddig őrizzük, és hol (ez is személyes adat) – a törlési kérésnél a cédulát is meg kell semmisíteni.
6. **BEMER-oldali szabály:** előírja-e a BEMER központ vagy az Irányelvek az előadásokon használható adatgyűjtő lap formáját / közös adatkezelést. (Az Irányelvek Drive-dokumentumát ehhez nem néztem át.)
7. **Marketing:** ez a lap szándékosan **nem** kér hírlevél/marketing hozzájárulást, csak az előadás utáni kapcsolatfelvételt és az infóanyag-küldést. Ha később ajánlatokat, rendezvény-meghívókat is küldenél, külön, nem előre bejelölt hozzájárulás kell (mint a kipróbálási nyilatkozat 5. pontja).
8. **Egészségi adat:** a lapra szándékosan nem kerül panasz/betegség mező. Ha valaki ilyet szóban mond, azt nem rögzítjük a lapon (különleges adat, szigorúbb szabály).
