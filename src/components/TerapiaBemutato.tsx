import type { ReactNode } from "react";
import { getAccess } from "@/lib/access";
import { createClient } from "@/lib/supabase/server";
import { TERAPIA_BEMUTATO_URL, TERAPIA_NYITAS, nyitva, szemelyesLink } from "@/content/bemutatok";
import { CopyLink } from "./CopyLink";
import { terapiaEloadoiJegyzet, type JegyzetBlokk } from "@/content/terapiaJegyzet";

// **félkövér** és *dőlt* jelölés a vault-jegyzetből → JSX (más markdown nincs benne).
function sor(szoveg: string): ReactNode[] {
  return szoveg.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((d, i) =>
    d.startsWith("**") ? <b key={i}>{d.slice(2, -2)}</b> : d.startsWith("*") && d.length > 2 ? <i key={i}>{d.slice(1, -1)}</i> : d
  );
}

function Blokk({ b }: { b: JegyzetBlokk }) {
  switch (b.tipus) {
    case "lista":
      return (
        <ul className="tight">
          {b.pontok.map((p, i) => (
            <li key={i}>{sor(p)}</li>
          ))}
        </ul>
      );
    case "tabla":
      return (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>{b.fejlec.map((f, i) => <th key={i}>{sor(f)}</th>)}</tr>
            </thead>
            <tbody>
              {b.sorok.map((s, i) => (
                <tr key={i}>{s.map((c, j) => <td key={j}>{sor(c)}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "kiemelt":
      return <p className="ej-kiemelt">{sor(b.szoveg)}</p>;
    default:
      return <p className="ej-bekezdes">{sor(b.szoveg)}</p>;
  }
}

// A terápiás ügyfélbemutató kártyája. 2026-11-11 19:00 (Budapest) előtt a partnereknek csak a lakatos
// fejléc látszik – link és jegyzet ilyenkor a HTML-be sem kerül (szerveroldali döntés, az oldal dinamikus).
// Az admin a nyitás előtt is a teljes kártyát látja, egy jelzéssel.
export async function TerapiaBemutato() {
  const { email, access } = await getAccess();
  if (!email || !access) return null;

  const admin = access.role === "admin";
  const nyitott = nyitva(TERAPIA_NYITAS);

  const fejlec = (
    <div>
      <div className="m-title">💬 Terápiás ügyfélbemutató – a te elérhetőségeddel</div>
      <div className="m-meta">
        Telefonon és számítógépen is lapozható, 11 diás bemutató ügyfeleknek és ügyféljelölteknek, a végén egy
        kutatásokat összegyűjtő lappal – fiók és bejelentkezés nélkül nyílik. Az utolsó dián a te neved és
        számod áll. Előadói jegyzettel: milyen kérdéseket tegyél fel, és hogyan vezesd végig a beszélgetést a zárásig.
      </div>
    </div>
  );

  if (!nyitott && !admin) {
    return (
      <div className="material-card lakatos" id="terapia-bemutato">
        {fejlec}
        <p className="lakat-szoveg">🔒 Szerdától (11.11.) elérhető – a partnermeetingen mutatjuk be</p>
      </div>
    );
  }

  const supabase = await createClient();
  const { data } = await supabase
    .from("allowed_emails")
    .select("phone")
    .eq("email", email)
    .maybeSingle<{ phone: string | null }>();
  const nev = access.name?.trim() ?? "";
  const telefon = data?.phone?.trim() ?? "";
  const kesz = Boolean(nev && telefon);
  const link = kesz ? szemelyesLink(TERAPIA_BEMUTATO_URL, nev, telefon) : TERAPIA_BEMUTATO_URL;

  return (
    <div className="material-card" id="terapia-bemutato">
      {fejlec}
      {!nyitott && (
        <p className="admin-elonezet">
          🔒 Admin-előnézet: a partnerek 2026. 11. 11-én 19:00-ig csak a lakatos kártyát látják („Szerdától
          (11.11.) elérhető – a partnermeetingen mutatjuk be”), utána magától kinyílik.
        </p>
      )}
      {kesz ? (
        <p className="cell-sub" style={{ margin: 0 }}>
          Az utolsó dián: <b>{nev}</b> · {telefon}
        </p>
      ) : (
        <p className="cell-sub" style={{ margin: 0 }}>
          A neved és a számod a fenti, kutyás bemutató kártyáján tudod megadni – ugyanaz kerül ennek a bemutatónak
          az utolsó diájára is. <a href="#sajat-bemutato">Ugrás oda</a>
        </p>
      )}
      <div className="m-actions">
        <a className="btn-download" href={link} target="_blank" rel="noopener noreferrer">
          Bemutató megnyitása
        </a>
        <CopyLink url={link} />
      </div>
      <details className="eloadoi-jegyzet">
        <summary>🎤 Előadói jegyzet – kérdezés, a beszélgetés fonala, diánként mit mondj (csak neked, az ügyfél nem látja)</summary>
        <p className="ej-kiemelt">
          Jelölések a szövegben: 🟠 képzésen hallott adat, 🟣 saját következtetés – ezeket ne mondd bizonyított ténynek.
        </p>
        {terapiaEloadoiJegyzet.map((sz) => (
          <div key={sz.cim} className="ej-szakasz">
            <div className="ej-cim">{sz.cim}</div>
            {sz.blokkok.map((b, i) => (
              <Blokk key={i} b={b} />
            ))}
          </div>
        ))}
      </details>
    </div>
  );
}
