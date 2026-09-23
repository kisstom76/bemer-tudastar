import { kategoriak, allapotSzoveg, type Allapot } from "@/content/kategoriak";
import { promociok, KOZELI_NAPOK } from "@/content/promociok";
import { elerhetosegek, SAJAT } from "@/content/elerhetosegek";
import { linkek } from "@/content/linkek";
import { PromocioTabla } from "@/components/PromocioTabla";
import { Help } from "@/components/Help";

function maBudapesten(): string {
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Budapest" }).format(new Date());
}

function napokkalKesobb(isoDatum: string, napok: number): string {
  const d = new Date(`${isoDatum}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + napok);
  return d.toISOString().slice(0, 10);
}

function Allapotjel({ allapot }: { allapot: Allapot }) {
  return (
    <span className={`status-chip ${allapot}`}>
      <span className="dot" />
      {allapotSzoveg[allapot]}
    </span>
  );
}

function allapotOf(id: string): Allapot {
  return kategoriak.find((k) => k.id === id)?.allapot ?? "warn";
}

export default function TudastarPage() {
  const ma = maBudapesten();
  const hatar = napokkalKesobb(ma, KOZELI_NAPOK);
  const aktualis = promociok.filter((p) => p.hatarido >= ma).sort((a, b) => a.hatarido.localeCompare(b.hatarido));
  const kozeli = aktualis.filter((p) => p.hatarido <= hatar);
  const tavoli = aktualis.filter((p) => p.hatarido > hatar);

  return (
    <>
      {/* Bemutatkozás */}
      <div className="intro" id="intro">
        <div className="intro-photo">
          <span className="initials">KT · KK</span>
        </div>
        <div className="intro-body">
          <p className="eyebrow">Kiss Tamás & Karkis Katalin Team Manager csapata</p>
          <h1>Üdv a csapat tudástárában!</h1>
          <p>
            Ez az oldal a mi Team Manager csapatunk anyagainak gyűjtőhelye. Nem váltja ki a hivatalos
            BEMER-felületeket — <b>kiegészíti</b> őket: célja, hogy a ma sokszor szétszórtan fellelhető, de
            fontos anyagok és lehetőségek egy helyen, könnyen megtalálhatók legyenek.
          </p>
          <p>Honnan jönnek az anyagok, amiket itt találsz:</p>
          <ul className="tight">
            <li>
              <b>Liechtensteini BEMER központ</b> — hivatalos dokumentumok, amik jellemzően a BEMER Back
              Office-ban (BBO) is megtalálhatók.
            </li>
            <li>
              <b>Kelet-európai központ</b> — a régiós anyagok innen érkeznek.
            </li>
            <li>
              <b>Mi, mint Team Managerek</b> — amiket mi biztosítunk a csapatnak, pl. a BEMER-készülék
              bérlési szerződése és egyéb dokumentumok.
            </li>
            <li>
              <b>Külön landing oldalak</b> — ezek léteznek, de új partnerként nehéz rájuk találni; itt
              gyűjtjük össze a fontosabbakat.
            </li>
          </ul>
          <p>
            Emellett továbbra is érdemes közvetlenül a <b>BEMER Back Office</b>-t is használni.
          </p>
          <div className="intro-contact">
            <a className="pill-link accent-pill" href={`mailto:${SAJAT.email}`}>
              ✉ {SAJAT.email}
            </a>
            <a className="pill-link" href={SAJAT.telefonLink}>
              📞 {SAJAT.telefon}
            </a>
            <a className="pill-link" href="https://bemergroup.com" target="_blank" rel="noopener">
              bemergroup.com
            </a>
            <a className="pill-link" href="#landing">
              Landing oldalak ↓
            </a>
          </div>
        </div>
      </div>

      {/* Áttekintő */}
      <header className="hero" id="attekinto">
        <p className="eyebrow">Áttekintő</p>
        <h1>Mi fut most, és mit hol találsz.</h1>
        <p className="lead">
          Az áttekintő mindig a legfontosabb, időhöz kötött dolgokkal indul — utána jönnek a tudástár
          kategóriái.
        </p>
      </header>

      <div className="dash-grid">
        <section id="promociok" className="block" aria-labelledby="mi-fut-cim">
          <div className="sec-head">
            <h2 id="mi-fut-cim" className="small">
              Most futó promóciók & közelgő események
            </h2>
          </div>
          <PromocioTabla kozeli={kozeli} tavoli={tavoli} />
        </section>

        <section className="block" aria-labelledby="gyors-cim">
          <div className="sec-head">
            <h2 id="gyors-cim" className="small">
              Gyors elérhetőségek
            </h2>
          </div>
          <div className="card">
            <div className="contact-list">
              <div className="contact-item">
                <span className="who">
                  Ügyfélszolgálat (HU)
                  <Help id="tip-ticket">
                    Az e-mail elküldése után pár percen belül automatikus válasz érkezik egy{" "}
                    <b>tiketszámmal</b> — erre lehet később hivatkozni. Ha kell, a BEMER továbbküldi a
                    Liechtensteini központnak; ott megválaszolják, majd a megoldás után a tiketet lezárják.
                  </Help>
                </span>
                <span className="how">
                  <a href="mailto:ugyfelszolgalat@bemer.services">ugyfelszolgalat@bemer.services</a> —
                  ticket-rendszer
                </span>
              </div>
              <div className="contact-item">
                <span className="who">
                  Számlázás / irodavezető
                  <Help id="tip-szamlazas">
                    Ezt az e-mailt a BEMER Kelet-európai (budapesti) központ <b>irodavezetője</b> kapja.
                    Jellemzően: rendezvények és START-Up képzések regisztrációjával kapcsolatos számlák,
                    illetve ha a BEMER Központ egy nyomtatott kiadványát szeretnéd megrendelni.
                  </Help>
                </span>
                <span className="how">
                  <a href="mailto:szamlazas@bemer.hu">szamlazas@bemer.hu</a>
                </span>
              </div>
              <div className="contact-item">
                <span className="who">OD — BEMER Medicintechnika Kft.</span>
                <span className="how">
                  Beck János mobilja: <a href="tel:+36309414254">+36 30 941 4254</a> · vezetékes:{" "}
                  <a href="tel:+3614150884">+36 1 415 0884</a> · Dr. Horváth Ilona (orvos-szakmai)
                </span>
              </div>
              <div className="contact-item">
                <span className="who">{SAJAT.nev}</span>
                <span className="how">
                  <a href={`mailto:${SAJAT.email}`}>{SAJAT.email}</a> ·{" "}
                  <a href={SAJAT.telefonLink}>{SAJAT.telefon}</a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="block" aria-labelledby="kategoriak-cim">
        <div className="sec-head">
          <h2 id="kategoriak-cim" className="small">
            A tudástár kategóriái
          </h2>
        </div>
        <div className="section-cards">
          {kategoriak.map((k) => (
            <a key={k.id} className="mini-card" href={`#${k.id}`}>
              <Allapotjel allapot={k.allapot} />
              <span className="title">
                {k.ikon} {k.cim}
              </span>
              <span className="desc">{k.teaser}</span>
            </a>
          ))}
        </div>
      </section>

      {/* 01 Terápia */}
      <section id="terapia" className="block">
        <div className="sec-head">
          <h2>
            <span className="num">01</span>Terápiával kapcsolatos tudás
          </h2>
          <Allapotjel allapot={allapotOf("terapia")} />
        </div>
        <p className="sec-lead">
          Minden anyagnál rövid összefoglaló mondja meg, mi van benne, és egy link visz tovább a teljes
          dokumentumhoz.
        </p>

        <div className="material-card">
          <div>
            <div className="m-title">📘 BEMER Kompendium</div>
            <div className="m-meta">
              PDF · 20 oldal · 2015. március <span className="badge-source">🩵 gyártói oktatóanyag</span>
            </div>
          </div>
          <p>
            Bevezetés a BEMER-terápia élettani hátterébe, elsősorban egészségügyi szakembereknek. Innen
            érthető meg, hogyan szabályozza a szervezet a mikrokeringést (vasomotio) helyi és felsőbb
            szinten, és ez tartalmazza a készülék-generációk hatástartam-grafikonját is.
          </p>
          <div className="m-actions">
            <span className="btn-download disabled">Megnyitás</span>
            <span className="link-missing">A link hamarosan elérhető.</span>
          </div>
        </div>

        <div className="material-card">
          <div>
            <div className="m-title">🩺 Orvosi esetismertetők</div>
            <div className="m-meta">Előadás-leiratok · WOB / Évnyitó / KickOff</div>
          </div>
          <p>
            Kórképekhez köthető szakmai anyagok. Kiváló tanulásra, de <b>referenciaként</b> munka közben is
            használjuk — egy tárgyaláson megmutatható a releváns oldal, ha egy adott betegséggel kapcsolatban
            kell alátámasztás a döntéshez.
          </p>
          <div className="m-actions">
            <span className="btn-download disabled">Megnyitás</span>
            <span className="link-missing">A linkek összegyűjtése folyamatban.</span>
          </div>
        </div>
      </section>

      {/* 02 Irányelvek */}
      <section id="iranyelvek" className="block">
        <div className="sec-head">
          <h2>
            <span className="num">02</span>Irányelvek
          </h2>
          <Allapotjel allapot={allapotOf("iranyelvek")} />
        </div>
        <div className="card prose">
          <p>
            <span className="badge-source">
              Forrás: hivatalos BEMER-dokumentum (2025-11-28-i állapot)
              <Help id="tip-forras">
                A jogi és hirdetési tartalom kizárólag hivatalos BEMER-dokumentumból (BBO, ÁSZF) származik —
                itt csak könnyebben olvasható formába rendeztük.
              </Help>
            </span>
          </p>
          <p>A legfontosabb közösségimédia-szabályok, röviden:</p>
        </div>

        <div className="guideline-block">
          <h3>Ki lehetsz BEMER Partnerként a közösségi médiában</h3>
          <ul>
            <li>Regisztrált, teljes neveddel jelenj meg (pl. „BEMER Partner Kiss Tamás”)</li>
            <li>Ne használj régiónevet vagy egyéb kiegészítést a neved mellett (pl. „…Budapest” vagy „…Horse”)</li>
            <li>Ne tüntesd fel magad a BEMER Int. AG alkalmazottjaként</li>
          </ul>
        </div>
        <div className="guideline-block">
          <h3>Amit kerülni kell</h3>
          <ul>
            <li>Közvetlen eladási ajánlat vagy értékesítés lebonyolítása közösségi médián</li>
            <li>A BEMER-partnerségből származó jövedelem nyilvános közzététele</li>
            <li>Gyógyhatás-állítás („…meggyógyított…”) — saját és mások nyilatkozatainál is</li>
            <li>Saját BEMER-témájú videócsatorna létrehozása (YouTube, TikTok stb.)</li>
          </ul>
        </div>
        <div className="guideline-block">
          <h3>Testimonial-szabály (ügyfél-vélemény használata)</h3>
          <ul>
            <li>Csak előzetes, díjazás nélküli beleegyezéssel</li>
            <li>Max. 60–80 szó, egyértelműen „Nyilatkozat” jelöléssel</li>
            <li>Nem lehet általánosító jellegű állítás</li>
          </ul>
        </div>

        <div className="note-callout">
          <b>⚠️ Az irányelvek időről időre változnak.</b> Ha fontos döntés múlik rajta, mindig a BEMER Back
          Office aktuális verzióját nézd meg — az garantáltan naprakész.
        </div>
      </section>

      {/* 03 Technikai */}
      <section id="technikai" className="block">
        <div className="sec-head">
          <h2>
            <span className="num">03</span>BEMER technikai ismeretek
          </h2>
          <Allapotjel allapot={allapotOf("technikai")} />
        </div>
        <div className="card prose">
          <p>Hamarosan részletesen is itt lesz:</p>
          <ul className="tight">
            <li>
              <b>Készülék-generációk időrendje</b> — mikor melyik gép jött ki, ki fejlesztette a jelet
            </li>
            <li>
              <b>Fizikai paraméterek</b> — Hz, µT, tekercsszám készülékenként
            </li>
            <li>
              <b>Applikátor-választás</b> — melyik applikátorral, miért
            </li>
            <li>
              <b>BEMER Dog App</b> — a Dog Line alkalmazás használata
            </li>
          </ul>
        </div>
      </section>

      {/* 04 Landing */}
      <section id="landing" className="block">
        <div className="sec-head">
          <h2>
            <span className="num">04</span>Landing oldalak & fontos linkek
          </h2>
          <Allapotjel allapot={allapotOf("landing")} />
        </div>
        <div className="card table-wrap">
          <table>
            <thead>
              <tr>
                <th>Oldal</th>
                <th>Miről szól</th>
              </tr>
            </thead>
            <tbody>
              {linkek.map((l) => (
                <tr key={l.nev}>
                  <td style={{ whiteSpace: "nowrap" }}>
                    {l.url ? (
                      <a href={l.url} target="_blank" rel="noopener">
                        {l.nev}
                      </a>
                    ) : (
                      l.nev
                    )}
                  </td>
                  <td>{l.leiras}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 05 Kezdőknek */}
      <section id="kezdoknek" className="block">
        <div className="sec-head">
          <h2>
            <span className="num">05</span>Kezdőknek
          </h2>
          <Allapotjel allapot={allapotOf("kezdoknek")} />
        </div>
        <p className="sec-lead">Vezetett első lépések, ha most csatlakoztál a csapathoz. Ez a lista idővel bővül.</p>
        <div className="step-list">
          <div className="step-card">
            <div className="step-num">1</div>
            <div>
              <h3>Kezdd a Kompendiummal</h3>
              <p>
                Ha bővítenéd a terápiás tudásod, olvasd el a Kompendiumot — megtudod, hogyan működik a
                terápia, és megismersz szakmai kifejezéseket, amiket később magabiztosan tudsz használni.
                Bármikor visszanyúlhatsz hozzá.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-num">2</div>
            <div>
              <h3>Nézd meg az orvosi esetismertetőket</h3>
              <p>
                Kiváló tanulásra, de referenciaként is használjuk munka közben — egy tárgyaláson
                megmutatható a releváns oldal, ha egy adott betegséggel kapcsolatban kell segítség a
                döntéshez.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-num">3</div>
            <div>
              <h3>Gondold át a saját oldalad nevét</h3>
              <p>
                Regisztrációkor kapsz egy saját BEMER-oldalt (pl. <code>NevedIde.bemergroup.com</code>).
                Utólag megváltoztatható, de érdemes már most jól eldönteni — ha egyszer nyomtatott anyagra
                kerül, később nem érdemes módosítani.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 Tippek */}
      <section id="tippek" className="block">
        <div className="sec-head">
          <h2>
            <span className="num">06</span>💡 Kiemelt gyakorlati tippek
          </h2>
          <Allapotjel allapot={allapotOf("tippek")} />
        </div>
        <div className="empty-state">
          Hamarosan: tapasztalatból született, a hivatalos anyagokban nem szereplő meglátások — például egy
          akció legjobb kihasználási sorrendje.
        </div>
      </section>

      {/* 07 Elérhetőségek */}
      <section id="elerhetosegek" className="block">
        <div className="sec-head">
          <h2>
            <span className="num">07</span>Fontos elérhetőségek
          </h2>
          <Allapotjel allapot={allapotOf("elerhetosegek")} />
        </div>
        <div className="card table-wrap">
          <table>
            <thead>
              <tr>
                <th>Kihez</th>
                <th>Mikor</th>
                <th>Elérhetőség</th>
              </tr>
            </thead>
            <tbody>
              {elerhetosegek.map((e) => (
                <tr key={e.kihez}>
                  <td>{e.kihez}</td>
                  <td>{e.mikor}</td>
                  <td>{e.hogyan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="closing">
        A tudástár folyamatosan bővül. Ha hibát találsz, vagy hiányzik valami, írj nekünk:{" "}
        <a href={`mailto:${SAJAT.email}`}>{SAJAT.email}</a>
      </footer>
    </>
  );
}
