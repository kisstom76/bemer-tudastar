// A BEMER terápiás ügyfélbemutató előadói jegyzete – csak partnereknek (a tudástár védett részén).
// Forrás: vault `01 Projects/BEMER_Tudastar/Terapias_Bemutato_Eloadoi_jegyzet.md` – változáskor onnan frissítendő
// (a szövegben a **félkövér** és *dőlt* jelölés megmarad, a kártya jeleníti meg).

export type JegyzetBlokk =
  | { tipus: "lista"; pontok: string[] }
  | { tipus: "tabla"; fejlec: string[]; sorok: string[][] }
  | { tipus: "bekezdes"; szoveg: string }
  | { tipus: "kiemelt"; szoveg: string };
export type JegyzetSzakaszB = { cim: string; blokkok: JegyzetBlokk[] };

export const terapiaEloadoiJegyzet: JegyzetSzakaszB[] = [
  {
    "cim": "Mielőtt elkezded",
    "blokkok": [
      {
        "tipus": "lista",
        "pontok": [
          "**Ez beszélgetés, nem előadás.** Ha végigmondod kérdések nélkül, kb. 10–15 perc. Beszélgetéssel akár fél óra is lehet – és ezt javasoljuk: kérdések nélkül nehéz jól bemutatni, és még nehezebb jól lezárni a beszélgetést. Négyszemközt a legjobb. Add a telefont az ügyfél kezébe, vagy üljetek egymás mellé – ő lapozzon, te kérdezz. Többet kérdezz, mint beszélsz.",
          "**Az ügyfél vágya a vezérfonal.** Az 1. dián kiderül, mit szeretne újra csinálni – írd fel, és a végén erre utalj vissza.",
          "**A tempót ő adja.** Korán kérdezd meg: „Részletesen elmondjam, hogyan működik, vagy inkább kipróbálnád, és közben mesélek?” Ha a gyakorlat érdekli, a 3–7. diát röviden lapozd át.",
          "**A saját sztorid a legerősebb** – a 2. dián meséld el (30 másodperc): honnan indultál → mire jöttél rá → mi lett az új szokásod → hogy látod ma. A diákon csak forrással igazolt adat van, szóban viszont a te tapasztalatod számít.",
          "**Szkeptikusnak bizonyíték kell.** Ne vitatkozz, hanem kérdezd meg: „Szeretnél megnézni kutatásokat?” – és nyisd meg a 6. vagy 7. diáról a **Kutatások** lapot.",
          "**Ha kérdez, ne rögtön válaszolj:** „Ezt azért kérdezed, mert…?” – sokszor kiderül, mi van mögötte.",
          "**Egy dologra figyelj: gyógyítást ne ígérj.** A „gyógyít, kezel, megszüntet” szavakat ne használd, betegségre ne ígérj hatást. Jól működő szavak: *támogatja, segíti, jóllét, regeneráció, energia, alvás.* Diagnózist ne mondj.",
          "**Az árat szóban mondd**, a friss hivatalos árlista szerint – a diákon szándékosan nincs ár, árlistát ne küldj tovább képként.",
          "**Más ügyfeleid történetét** csak az ő írásos hozzájárulásukkal meséld el, név nélkül."
        ]
      }
    ]
  },
  {
    "cim": "Kérdezés – kezdőknek: öt kérdés, ami elég",
    "blokkok": [
      {
        "tipus": "kiemelt",
        "szoveg": "Ha még nem gyakoroltad a kérdezést, csak ezt az ötöt tanuld meg. Nem kell szó szerint mondani – a saját hangodon. Mindegyiknél ott van, mikor, miért, és mit kezdj a válasszal."
      },
      {
        "tipus": "tabla",
        "fejlec": [
          "#",
          "Kérdés",
          "Mikor",
          "Miért tesszük fel",
          "Mit kezdj a válasszal"
        ],
        "sorok": [
          [
            "1",
            "„Mi a legfontosabb neked most az egészségedben?”",
            "1. dia",
            "Az ügyfélről szóljon, ne a BEMER-ről – kiderül, mi számít neki.",
            "Írd fel a szavait, szó szerint."
          ],
          [
            "2",
            "„És ha ez rendben lenne, mit csinálnál újra szívesen?”",
            "1. dia, ha panaszt mond",
            "A panasz nem döntési ok, a vágy az (pl. „újra kirándulni az unokákkal”). Erre épül a zárás.",
            "Ez a legfontosabb mondat – ezt hozod vissza a 11. dián."
          ],
          [
            "3",
            "„Részletesen mondjam el, hogyan működik, vagy inkább kipróbálnád, és közben mesélek?”",
            "1–2. dia",
            "Ő választja a tempót, nem érzi, hogy rábeszélik; kiderül, a részletek vagy az élmény érdekli.",
            "Ha az élmény: a 3–7. diát röviden lapozd át."
          ],
          [
            "4",
            "„Ezt azért kérdezed, mert…?”",
            "bármikor, ha ő kérdez",
            "Kiderül, mi van a kérdés mögött (félelem, rossz tapasztalat, egy rokona) – arra válaszolsz, ami tényleg érdekli.",
            "Válaszolj röviden, aztán: „Ez segít?”"
          ],
          [
            "5",
            "„Melyik lenne neked kényelmesebb: néhány kezelés nálunk, vagy néhány hét otthon?”",
            "10–11. dia",
            "Két jó lehetőség közül választ – nem igen/nem kérdés, nem kell nemet mondania.",
            "Bármelyiket választja, rögtön időpont: „A hét elején vagy a végén?”"
          ]
        ]
      },
      {
        "tipus": "bekezdes",
        "szoveg": "**Egy szabály mellé:** ha nem kaptál választ, nem ő a hibás – kérdezd újra más szavakkal, vagy mondd meg, miért kérdezed („Azért kérdezem, mert nem mindenkinek ugyanazt javaslom.”)."
      }
    ]
  },
  {
    "cim": "Kérdezés – haladóknak",
    "blokkok": [
      {
        "tipus": "kiemelt",
        "szoveg": "Ha az alapok mennek. A sorrend számít: előbb kapcsolat és helyzetfeltárás, utána minden más. Ha elakadsz (kifogás, nem figyel), ne nyomj erősebben – lépj vissza néhány lépést, akár az elejéig. Forrás: Nyíri Zoltán kérdezéstechnika-sorozata (BEMER 30 Day Run, 2026. október) és Cialdini: Hatás."
      },
      {
        "tipus": "lista",
        "pontok": [
          "**Helyzetfeltáró (1–2. dia):** „Neked milyen jellegű munkád van?” · „Mennyire gyorsan töltődsz fel egy hosszú nap után?” · „Hallottál már a mikrokeringésről?” – kiderül az élethelyzete, a szóhasználata, a tudása.",
          "**Pontosító, „igen-gyűjtő” (2–5. dia):** „Jól értem, hogy inkább a megelőzésben hiszel?” · „Tehát az a legfontosabb neked, hogy…?” – megmutatja, hogy figyeltél; minden kis igen a zárásnál felidézhető.",
          "**A szükséglet kimondatása (3–5. dia, csak ha ő hozta a panaszt):** „Probléma lenne, ha ez még sokáig így maradna?” · „Szeretnéd elkerülni, hogy hosszú távon nagyobb gond legyen belőle?” – az ügyfél mondja ki, hogy kell neki; ha te mondod, vita lesz. Óvatosan: félelmet ne kelts, betegségre ne ígérj.",
          "**Félelmek kiszedése (6–8. dia):** „Hallottál valamit a BEMER-ről, amit tisztáznál, mielőtt kipróbálod?” · „A családban ki használná még?” – a rejtett kifogás most jön elő, nem a végén.",
          "**Bevonás (4–9. dia):** „Melyik tetszett eddig a legjobban abból, amit láttál?” · „Mikor lenne rá 8 perced, reggel vagy este?” – a saját szavával mondja ki az előnyt; ezt is visszahozhatod.",
          "**Kifogásnál (bárhol):** megértés → elismerés („jó, hogy kérdezed”) → semlegesítés → vissza a vágyhoz → kérdés. „Átgondolom” → „Mi az a konkrét kérdés, ami miatt még várnál?” · „Megkérdezem a páromat” → „Szervezzünk neki is egy rövid bemutatót?” · „Drága” → „Egészében sok, vagy az, hogy egyszerre?” Ne vitatkozz.",
          "**„Miért éppen te?” (10. dia):** „Mit gondolsz, mennyit számít, hogy legyen valaki, aki segít a használatban?” – nem készüléket adsz, hanem beüzemelést, gondozást, hozzáférést hozzád.",
          "**Ellenőrzés – veled van-e még:** „Eddig érthető?” · „El tudnád mondani a saját szavaiddal, miért fontosak a legapróbb erek?”",
          "**Ha a zárás nem sikerült:** ne a zárást erősítsd. Kérdezd meg magadtól: megtudtam a vágyát? Kimondta, mi fontos neki? Ha nem, az elején maradt ki valami."
        ]
      }
    ]
  },
  {
    "cim": "A fonal: amit útközben felírsz, a zárásnál visszahozod",
    "blokkok": [
      {
        "tipus": "kiemelt",
        "szoveg": "A jó zárás nem az utolsó dián dől el, hanem az elsőn. Legyen nálad egy kis papír (vagy jegyzet a telefonodon), és írd fel szó szerint az ügyfél néhány mondatát. A 11. dián ezekre hivatkozol – **az ő szavaival**, nem a tieiddel."
      },
      {
        "tipus": "tabla",
        "fejlec": [
          "Mikor",
          "Mit írj fel",
          "Hogyan hozod vissza a 11. dián"
        ],
        "sorok": [
          [
            "1. dia",
            "A vágyát („újra kirándulni az unokákkal”)",
            "„Az elején azt mondtad, szeretnél újra … – ehhez az első lépés a kipróbálás.”"
          ],
          [
            "2–5. dia",
            "Ami fontos neki („a megelőzésben hiszek”, „gyógyszer nélkül”) – a kis igenek",
            "„Azt mondtad, neked az a fontos, hogy … – ezért javaslom.”"
          ],
          [
            "6–9. dia",
            "A kérdését, aggályát („mikor érzek valamit?”, „nincs rá időm”)",
            "„Kérdezted, mikor érzel valamit – ezért jó, ha több hetet adsz neki.”"
          ],
          [
            "9–10. dia",
            "Amit választott (reggel/este · kezelés nálunk/bérlés/tesztelés)",
            "„Akkor a reggeli 8 perc lenne neked a jó – a hét elején vagy a végén kezdjük?”"
          ]
        ]
      },
      {
        "tipus": "bekezdes",
        "szoveg": "**Ha nem jegyeztél fel semmit,** a zárás előtt kérdezd meg: „Mi volt neked a legfontosabb abból, amit láttál?” – és arra építs."
      }
    ]
  },
  {
    "cim": "1. Nyitó – „Mi a legfontosabb neked az egészségedben?”",
    "blokkok": [
      {
        "tipus": "lista",
        "pontok": [
          "**Cél:** az ügyfélről szóljon, ne a BEMER-ről. Derüljön ki a vágya.",
          "**Kérdezd:** „Mi a legfontosabb neked most az egészségedben?” · „Mit szeretnél újra könnyebben csinálni?” (sétálni, aludni, sportolni, unokákkal játszani…) · „Hallottál már a BEMER-ről? A mikrokeringésről?”",
          "**Figyelj:** a probléma nem ugyanaz, mint a vágy. Ha panaszt mond, kérdezz tovább: „És ha ez rendben lenne, mit csinálnál?” – ezt a mondatot jegyezd meg.",
          "**Ne:** technológiával, árral kezdeni; diagnózist mondani."
        ]
      }
    ]
  },
  {
    "cim": "2. A BEMER röviden",
    "blokkok": [
      {
        "tipus": "lista",
        "pontok": [
          "**Cél:** keret – mi ez, és ki vagy te. Itt jön a saját sztorid.",
          "**Mondd:** „Ez egy orvostechnikai eszköz, amit otthon használsz, gyógyszer nélkül, a többi kezelés mellett. Én azért kezdtem, mert…” (30 mp, a saját szavaiddal)",
          "**Kérdezd:** „Ismerős neked ilyesmi?”",
          "**Ne:** „mindenre jó”, „csodaszer”. A BEMER a tudatos életmód csapatjátékosa, nem csodaszer."
        ]
      }
    ]
  },
  {
    "cim": "3. Mikrokeringés",
    "blokkok": [
      {
        "tipus": "lista",
        "pontok": [
          "**Cél:** egy perc, képszerűen – miért fontosak a legapróbb erek.",
          "**Mondd:** „A BEMER képzésén azt tanultuk, hogy a keringés kb. háromnegyede a legapróbb erekben zajlik – egy csővé fűzve kb. 100 000 km.” (🟠 képzési adat – „bizonyított”-nak ne mondd.) „Olyan, mint a kert locsolórendszere: hiába jó a fővezeték, ha a kis csövekbe nem jut víz – a növény ott szárad ki.”",
          "**Kérdezd:** „Érthető így? Mondjam részletesebben?”",
          "**Ne:** a hasonlatot betegségre fordítani („ezért fáj a lábad”)."
        ]
      }
    ]
  },
  {
    "cim": "4. Vazomóció – videó",
    "blokkok": [
      {
        "tipus": "lista",
        "pontok": [
          "**Cél:** lássa a saját szemével, hogy az erek mozognak.",
          "**Ha van idő,** indítsd el a videót (2:37) – elég az első fél perc is. Új lapon / a YouTube-appban nyílik, utána lapozz vissza.",
          "**Mondd:** „A legkisebb artériák percenként néhányszor összehúzódnak és elernyednek (a gyártói Kompendium szerint percenként 3–5-ször) – ez a vazomóció. Ha ez a ritmus lelassul, sokáig nem érzünk semmit.”",
          "**Ne:** a videót „előtte–utána” bizonyítékként bemutatni; félelmet kelteni."
        ]
      }
    ]
  },
  {
    "cim": "5. Miért más – ahová a gyógyszer nem ér el",
    "blokkok": [
      {
        "tipus": "lista",
        "pontok": [
          "**Cél:** ez a beszélgetés kulcsa – miért nem „még egy keringésjavító”.",
          "**Mondd:** „A nagy ereket a szív hajtja, a kisebb artériákat az idegrendszer és a hormonok szabályozzák – ott a gyógyszer is tud hatni. A legkisebb artériák saját ritmusban dolgoznak, ide gyógyszer alig ér el, fizikai inger viszont igen. A BEMER-jel a természetes vazomóció mintájára készült.”",
          "**A saját véleményed** itt elmondhatod, saját szavaidként: „Szerintem a vazomóció nélkül nem lehet igazán hatékonyan keringést javítani.” – a dián nincs ilyen állítás, csak Klopp idézete („lemásoltuk a természetet”). Ha mégis az „egyedi” felé mennél, csak így, a saját tudásodként: „Nem ismerek másik otthon használható, gyógyszermentes eszközt, amit kifejezetten a vazomóció serkentésére fejlesztettek, és amiről ilyen mérések készültek.” (🟣 – a vault szerint ez nem értékesítési érv, csak válasz, ha rákérdeznek.)",
          "**Ne:** „egyedül a BEMER”, „semmi más nem működik”, gyógyszert leértékelni. „Nem vagyunk gyógyszerellenesek” – a BEMER a kezelés mellett van, nem helyette."
        ]
      }
    ]
  },
  {
    "cim": "6. Mit mértek",
    "blokkok": [
      {
        "tipus": "lista",
        "pontok": [
          "**Cél:** hitelesség – számok, forrással.",
          "**Mondd:** „Egy 2013-as, placebo-kontrollált, kettős vak vizsgálatban a mikrokeringés négy mutatója mérhetően javult, és a hatás a kezelés után egy nappal is kimutatható volt.” · „A gyártó saját mérése szerint egy 8 perces kezelés hatása 12 óra múlva is mérhető – ezért javasolt reggel és este.”",
          "**Kérdezd:** „Szeretnél megnézni több kutatást is?” → ha igen, **Összes kutatás megnyitása**.",
          "**Ha visszakérdez:** mondd ki magad: 12 fős vizsgálat, és a vezető szerző a BEMER-jel fejlesztője. A 12 óra gyártói adat. Ez nem gyengít – az őszinteség hiteles.",
          "**Ne:** kerekíteni, felfelé mondani a számokat; olyan adatot mondani, ami nincs a dián vagy a Kutatások lapon (pl. a 30 napos Charité-számok, a 60 fős cukorbeteg-vizsgálat – ezeknek nincs azonosított publikációja)."
        ]
      }
    ]
  },
  {
    "cim": "7. Kik vizsgálták",
    "blokkok": [
      {
        "tipus": "lista",
        "pontok": [
          "**Cél:** nem csak mi mondjuk – egyetemi klinika, kórház, élsport.",
          "**Mondd:** röviden, név szerint, ami a dián van. Ha sportoló: a norvég olimpiai központ és az OSEI-vizsgálat; ha idősebb vagy szívbeteg: Halle és a PTE.",
          "**Ne:** „az orvosok is ajánlják”, „a kórházak ezt használják gyógyításra”, „80–90 kórház” (nincs rá lista). Orvost, kórházat ne nevezz partnernek."
        ]
      }
    ]
  },
  {
    "cim": "8. Amit fontos tudni",
    "blokkok": [
      {
        "tipus": "lista",
        "pontok": [
          "**Cél:** bizalom. Ha te mondod ki elsőként a korlátokat, hihetőbb minden más.",
          "**Mondd:** „Fontos: ez nem gyógyszer, és nem helyettesíti az orvost. A szervezet saját működését támogatja.” · „Mindenkinél más, mikor érez változást – érdemes több hetet adni neki, ezért javaslom a kipróbálást.”",
          "**Ellenjavallat (Evo gépkönyv):** aktív implantátum (pacemaker, gyógyszerpumpa) – soha; szerv-, csontvelő- vagy őssejt-átültetés immunszuppresszív kezeléssel. 14 év alatt felügyelettel. Implantátumnál: kezelőorvos + használati útmutató – saját véleményt ne mondj.",
          "**Ne:** „neked biztos jó lesz”, időre ígért hatás."
        ]
      }
    ]
  },
  {
    "cim": "9. A mindennapokban – 2 × 8 perc",
    "blokkok": [
      {
        "tipus": "lista",
        "pontok": [
          "**Cél:** megszüntetni a „nincs rá időm” kifogást, mielőtt elhangzik.",
          "**Kérdezd:** „Mikor lenne rá 8 perced – reggel vagy este?” · „Hogy alszol?”",
          "**Mondd:** „Reggel és este 8 perc, fekve. Közben pihensz. Ha kéred, éjszakára alvóprogram is van. Az egész család használhatja.”",
          "**Ne:** a programokat rövidítéssel mondani; „ettől jobban fogsz aludni” (kérdezz, ne állíts)."
        ]
      }
    ]
  },
  {
    "cim": "10. Kipróbálás",
    "blokkok": [
      {
        "tipus": "lista",
        "pontok": [
          "**Cél:** a három út közül válasszon – nem igen/nem kérdés.",
          "**Kérdezd:** „Melyik lenne neked kényelmesebb: hogy eljössz néhány kezelésre, vagy hazaviszed néhány hétre?” · Ár előtt: „Mennyit ér neked, ha [a vágya] újra menne?”",
          "**Az ár:** szóban, a friss árlista szerint, az érték után. Ha drágállja: „Egészében sok, vagy az, hogy egyszerre?”",
          "**Ne:** „csak most”, kitalált határidő; részletfizetést ígérni magánszemélynek."
        ]
      }
    ]
  },
  {
    "cim": "11. Zárás – a következő lépés",
    "blokkok": [
      {
        "tipus": "lista",
        "pontok": [
          "**Cél:** konkrét következő lépés, időponttal.",
          "**Előbb a fonal:** idézd fel, amit útközben felírtál (lásd „A fonal”): „Az elején azt mondtad, szeretnél újra … Kérdezted, … Azt választottad, …” – és csak utána a következő lépés.",
          "**Kérdezd:** „Inkább a hét elején vagy a végén lenne jó?” (két lehetőség)",
          "**Ha gondolkodik:** „Mit szeretnél még átgondolni?” · „Megkérdezem a páromat” → „Szervezzünk neki is egy rövid bemutatót?”",
          "**Utána:** küldd el neki a saját linkedet (a tudástárban), hogy otthon megmutathassa a családnak – a végén a te neved és számod áll.",
          "**A „nem” is rendben van.** Ha nemet mond, köszönd meg; ajánlást ilyenkor kérhetsz: „Tudsz valakit, akit érdekelhet?”"
        ]
      }
    ]
  },
  {
    "cim": "Kutatások lap – ha a szkeptikus kérdez",
    "blokkok": [
      {
        "tipus": "lista",
        "pontok": [
          "**„Kevés alany, a BEMER fizette.”** – „Igazad van, ezért írtuk oda a korlátokat is. A mikrokeringés mérése drága, ezért kicsik a vizsgálatok.”",
          "**„Fájdalomra nem jobb a placebónál.”** – „Így van, ezt mi is odaírtuk. A BEMER nem fájdalomcsillapító, a mikrokeringést támogatja – a kettő nem ugyanaz.”",
          "**„Hány kórház használja?”** – csak a dián név szerint szereplőket mondd; „80–90 kórház” – nincs rá lista, ne mondd. A „Honvédkórház COVID-protokoll” nem létezik – tilos.",
          "**Ne mondd:** a 30 napos Charité-számokat, a 60 fős cukorbeteg-vizsgálatot, a „80 készülékes vizsgálatot” – nincs azonosított publikációjuk. A drezdai sejtkísérletet (daganat) ügyfélnek ne hozd fel."
        ]
      }
    ]
  },
  {
    "cim": "Gyakori kérdések, rövid válaszok",
    "blokkok": [
      {
        "tipus": "lista",
        "pontok": [
          "**„Ez is csak egy mágnesterápia?”** – „Nem minden mágnesterápiás készülék ugyanaz – a jel formája számít. A BEMER-jelet kifejezetten a vazomóció mintájára fejlesztették.” (Más márkát név szerint ne hasonlíts.)",
          "**„Milyen engedélye van?”** – orvostechnikai eszköz; a „IIa osztály, MDR, FDA” képzésen hallott adat (🟠), gépkönyvi forrás a vaultban nincs – ha kérdezik, „utánanézek és küldöm”.",
          "**„Miért ilyen drága?”** – előbb az érték: gyári gyártás, orvostechnikai eszköz, hosszú élettartam, az egész család használja; az ár szóban.",
          "**„A Marketplace-en olcsóbb.”** – „Nálam beüzemelés, utánkövetés, gondozás jár – nem egyedül maradsz vele.”"
        ]
      }
    ]
  }
];
