import Link from "next/link";
import { kategoriak } from "@/content/kategoriak";
import { SAJAT } from "@/content/elerhetosegek";

const erdeklodoLevel = `mailto:${SAJAT.email}?subject=${encodeURIComponent(
  "Érdekel a BEMER – belenéznék a tudástárba"
)}`;

export default function LandingPage() {
  return (
    <div className="public-wrap">
      <div className="public-top">
        <Link href="/" className="brand">
          <span className="brand-mark">BT</span>
          <span className="brand-text">
            BEMER Tudástár<span>Kiss Tamás & Karkis Katalin csapata</span>
          </span>
        </Link>
        <Link href="/tudastar" className="btn secondary small">
          🔒 Partner belépés
        </Link>
      </div>

      <section className="landing-hero">
        <p className="eyebrow">Zárt tudástár a csapatunk partnereinek</p>
        <h1>
          Minden, ami egy BEMER-partnernek kell — <b>egy helyen.</b>
        </h1>
        <p className="lead">
          Terápiás háttértudás, hivatalos irányelvek, technikai ismeretek, aktuális promóciók és a saját,
          évek alatt összegyűlt tapasztalataink. Ami máshol szétszórva, sok helyről kerül elő, azt itt
          rendezetten, érthetően találod meg.
        </p>
        <div className="landing-actions">
          <a href={erdeklodoLevel} className="btn">
            Érdekel, belenéznék
          </a>
          <Link href="/tudastar" className="btn secondary">
            Már partner vagyok — belépés
          </Link>
        </div>
      </section>

      <section>
        <div className="sec-head">
          <h2>Mi vár bent?</h2>
          <span className="badge-source">🔒 a tartalom csak belépés után látható</span>
        </div>
        <div className="locked-grid">
          {kategoriak.map((k) => (
            <div key={k.id} className="mini-card locked-card">
              <span className="lock" aria-hidden>
                🔒
              </span>
              <span className="icon" aria-hidden>
                {k.ikon}
              </span>
              <span className="title">{k.cim}</span>
              <span className="desc">{k.teaser}</span>
              <span className="blur-lines" aria-hidden>
                <span style={{ width: "92%" }} />
                <span style={{ width: "76%" }} />
                <span style={{ width: "84%" }} />
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <h2>Érdekel a BEMER, és belenéznél?</h2>
          <p>
            A tudástár a csapatunk partnereinek szól. Ha kíváncsi vagy, mit jelent BEMER-partnernek lenni,
            keress minket bátran — szívesen elmondjuk személyesen, hogyan tudsz csatlakozni, és onnantól
            neked is nyitva áll minden, ami itt van.
          </p>
        </div>
        <div className="cta-contact">
          <a href={erdeklodoLevel} className="btn">
            ✉ {SAJAT.email}
          </a>
          <a href={SAJAT.telefonLink} className="btn secondary">
            📞 {SAJAT.telefon}
          </a>
        </div>
      </section>

      <footer className="public-foot">
        <span>
          {SAJAT.nev} — független BEMER partnerek. Ez nem a BEMER Int. AG hivatalos oldala; a hivatalos
          információkért látogass el a{" "}
          <a href="https://bemergroup.com" target="_blank" rel="noopener">
            bemergroup.com
          </a>{" "}
          oldalra. · <Link href="/adatvedelem">Adatvédelmi tájékoztató</Link>
        </span>
      </footer>
    </div>
  );
}
