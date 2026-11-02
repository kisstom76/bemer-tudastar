// A BEMER Dog partnerprezentáció előadói jegyzete – csak partnereknek (a tudástár védett részén).
// Forrás: vault `01 Projects/BEMER_Tudastar/Dog_Partnerprezentacio_Eloadoi_jegyzet.md` – változáskor onnan frissítendő.

export type JegyzetPont = { cimke: string; szoveg: string };
export type JegyzetSzakasz = { cim: string; pontok: JegyzetPont[] };

export const dogEloadoiJegyzet: JegyzetSzakasz[] = [
  {
    "cim": "Mielőtt elkezded",
    "pontok": [
      {
        "cimke": "Hossza:",
        "szoveg": "5–7 perc. A telefont az ügyfél kezébe add, vagy üljetek egymás mellé – ő lapozzon, te beszélj."
      },
      {
        "cimke": "Többet kérdezz, mint beszélsz.",
        "szoveg": "A kutya nevét jegyezd meg, és azon szólítsd meg. A gazda a kutyájáról szívesen mesél, és aki mesél, az bízik benned."
      },
      {
        "cimke": "Mesélj nyugodtan saját sztorit",
        "szoveg": "a saját kutyádról, ügyfeleidről, amit te láttál. A sztori a prezentáció lelke, ez négyszemközti beszélgetés, nem hivatalos előadás. (A diákon csak forrásolt eset szerepel – szóban viszont a te tapasztalatod a legerősebb.)"
      },
      {
        "cimke": "Egy dologra figyelj: gyógyítást ne ígérj",
        "szoveg": "a „gyógyít” szót ne használd. Jól működő szavak: jóllét, mozgás, pihenés, támogatja, segíti."
      },
      {
        "cimke": "Az árat szóban mondd",
        "szoveg": ", a friss, hivatalos árlista szerint – a diákon szándékosan nincs ár."
      }
    ]
  },
  {
    "cim": "1. Nyitó – „Napi 8 perc a kutyád jóllétéért”",
    "pontok": [
      {
        "cimke": "Cél:",
        "szoveg": "személyes kapcsolat, a kutyáról beszéljen, ne rólad."
      },
      {
        "cimke": "Kérdezd:",
        "szoveg": "„Mesélj a kutyádról! Hány éves, milyen fajta, mit szeret csinálni?”"
      },
      {
        "cimke": "Mondd utána:",
        "szoveg": "„A BEMER most kifejezetten kutyáknak hozott ki egy készüléket. Megmutatom röviden, hogyan működik.”"
      },
      {
        "cimke": "Ne:",
        "szoveg": "technológiával vagy árral kezdeni."
      }
    ]
  },
  {
    "cim": "2. Ismerős? – négy jel + 40%",
    "pontok": [
      {
        "cimke": "Cél:",
        "szoveg": "ő mondja ki, mi a gond. Amit ő mond ki, azt el is hiszi."
      },
      {
        "cimke": "Kérdezd:",
        "szoveg": "„Ezek közül valamelyik ismerős nálatok?” Hagyd, hogy válasszon, és meséljen."
      },
      {
        "cimke": "A 40%-hoz:",
        "szoveg": "„Egy állatorvos mondta egy szakmai konferencián, hogy a felnőtt kutyák nagyjából 40%-ánál látszik röntgenen ízületi kopás – a gazda sokszor észre sem veszi.”"
      },
      {
        "cimke": "Ne:",
        "szoveg": "diagnózist mondani („a kutyádnak biztos ízületi kopása van”). Ha komoly panasz van: „ezt érdemes az állatorvossal is megnézetni.”"
      }
    ]
  },
  {
    "cim": "3. Mikrokeringés – 74%",
    "pontok": [
      {
        "cimke": "Cél:",
        "szoveg": "egyszerű, képszerű magyarázat, egy percben."
      },
      {
        "cimke": "Mondd:",
        "szoveg": "„A vér háromnegyede a legapróbb erekben, a hajszálerekben áramlik. Ezek viszik a sejtekhez az oxigént és a tápanyagot. Saját ritmusukban pulzálnak – ezt a ritmust támogatja a BEMER-jel.”"
      },
      {
        "cimke": "Hasonlat, ha kell:",
        "szoveg": "„Olyan, mint egy kert locsolórendszere: hiába jó a fővezeték, ha a kis csövekbe nem jut víz.”"
      },
      {
        "cimke": "Figyelj:",
        "szoveg": "ne mondd, hogy gyógyít."
      }
    ]
  },
  {
    "cim": "4. Videó – mikroszkóp alatt",
    "pontok": [
      {
        "cimke": "Cél:",
        "szoveg": "lássa a saját szemével."
      },
      {
        "cimke": "Ha van idő,",
        "szoveg": "indítsd el (2:37), de elég az első fél perc is. A videó új lapon / a YouTube-appban nyílik – utána lapozz vissza."
      },
      {
        "cimke": "Mondd:",
        "szoveg": "„Ezt embernél vették fel mikroszkóppal. A kutya hajszálerei ugyanígy működnek.”"
      },
      {
        "cimke": "Ne:",
        "szoveg": "azt állítani, hogy a felvétel kutyáról készült."
      }
    ]
  },
  {
    "cim": "5. Vizsgálat – 21 kutya",
    "pontok": [
      {
        "cimke": "Cél:",
        "szoveg": "hitelesség – nem csak mi mondjuk."
      },
      {
        "cimke": "Mondd:",
        "szoveg": "„Egy német klinikai vizsgálatban 21 kutyát néztek, a kutyák egy része placebót kapott. Hat hét után a BEMER-es csoportban egyenletesebb lett a járásuk – vagyis egyenletesebben terhelték a lábukat.”"
      },
      {
        "cimke": "Ha visszakérdez:",
        "szoveg": "a vizsgálatot PD Dr. Oliver Harms és csapata végezte (Germersheim); a 30 kutyás rész gazdai megfigyelés, nem klinikai vizsgálat."
      },
      {
        "cimke": "Figyelj:",
        "szoveg": "ne mondd, hogy gyógyítja az artrózist."
      }
    ]
  },
  {
    "cim": "6. Eset – Zora",
    "pontok": [
      {
        "cimke": "Cél:",
        "szoveg": "történet és érzelem – ezt jegyzik meg."
      },
      {
        "cimke": "Meséld el a saját szavaiddal:",
        "szoveg": "egy francia bulldog, porckorongsérvvel, műtét nem volt indokolt. Napi 2–3 × 8 percet feküdt a matracon, és kb. két hét után sokkal könnyebben ment fel a lépcsőn. A gazda szerint a kutya magától ráfeküdt a matracra."
      },
      {
        "cimke": "Mondd hozzá:",
        "szoveg": "„Ezt egy állatorvos mesélte egy szakmai konferencián.”"
      },
      {
        "cimke": "Ha van saját történeted,",
        "szoveg": "itt meséld el – az ügyfél ezt jegyzi meg leginkább."
      }
    ]
  },
  {
    "cim": "7. Így használod",
    "pontok": [
      {
        "cimke": "Cél:",
        "szoveg": "megszüntetni a „nincs rá időm” kifogást, mielőtt elhangzik."
      },
      {
        "cimke": "Kérdezd:",
        "szoveg": "„Hol szokott aludni nálatok?”"
      },
      {
        "cimke": "Mondd:",
        "szoveg": "„Nem kell csinálnod semmit: ráteríted a fekhelyére, és amikor lefekszik, magától elindul a 8 perces program. Naponta legfeljebb kétszer, egy töltéssel akár egy hétig bírja.”"
      },
      {
        "cimke": "Ha érdekli a beüzemelés,",
        "szoveg": "mutasd meg a magyar használati videót."
      }
    ]
  },
  {
    "cim": "8. Termékcsalád – Basic és Comfort",
    "pontok": [
      {
        "cimke": "Cél:",
        "szoveg": "választás, nem ár. Segíts dönteni."
      },
      {
        "cimke": "Kérdezd:",
        "szoveg": "„Van már kedvenc fekhelye, vagy jól jönne egy új?” Ha van → Basic (a saját fekhelyével használja). Ha újat venne → Comfort (fekhely + távirányító). A méretet a kutya mérete dönti el."
      },
      {
        "cimke": "Ár:",
        "szoveg": "szóban, a friss hivatalos árlista szerint. Mondd el a kipróbálás / bérlés lehetőségét is, a saját feltételeid szerint."
      },
      {
        "cimke": "Ne:",
        "szoveg": "árlistát képként továbbküldeni (a BEMER szabálya szerint nyilvánosan nem osztható)."
      }
    ]
  },
  {
    "cim": "9. Jó tudni",
    "pontok": [
      {
        "cimke": "Cél:",
        "szoveg": "bizalom. Ha te mondod ki elsőként a korlátokat, hihetőbb minden más."
      },
      {
        "cimke": "Mondd:",
        "szoveg": "„Fontos: ez nem helyettesíti az állatorvost, hanem a mindennapi jóllétet támogatja mellette.”"
      },
      {
        "cimke": "Ellenjavallat:",
        "szoveg": "ha a kutya daganatos vagy tisztázatlan betegségben szenved, vagy szívritmus-szabályozó közelében használnák – „ilyenkor előbb kérdezd meg az állatorvost”."
      }
    ]
  },
  {
    "cim": "10. Próbáld ki",
    "pontok": [
      {
        "cimke": "Cél:",
        "szoveg": "konkrét következő lépés, időponttal."
      },
      {
        "cimke": "Kérdezd:",
        "szoveg": "„Kipróbálnátok otthon? Mikor lenne jó, hogy elvigyem – inkább a hét elején vagy a végén?” (két lehetőség, nem igen/nem kérdés)"
      },
      {
        "cimke": "Utána:",
        "szoveg": "küldd el neki a saját linkedet (a tudástárban, a bemutató-kártyán), hogy otthon megmutathassa a családnak – a végén a te számod szerepel."
      },
      {
        "cimke": "Ne:",
        "szoveg": "nyomást gyakorolni, „csak most” típusú határidőt mondani."
      }
    ]
  },
  {
    "cim": "Gyakori kérdések, rövid válaszok",
    "pontok": [
      {
        "cimke": "„Érzi a kutya?”",
        "szoveg": "Nyugodtan fekszik rajta, a saját fekhelyén; a gazdák szerint sok kutya magától ráfekszik."
      },
      {
        "cimke": "„Macskának is jó?”",
        "szoveg": "A Dog Line kutyákra készült; másra ne ígérj semmit."
      },
      {
        "cimke": "„Mennyi idő alatt látszik?”",
        "szoveg": "Kutyánként más. A vizsgálatban 6 hetet néztek; érdemes kipróbálni, és figyelni a kutyát."
      }
    ]
  }
];
