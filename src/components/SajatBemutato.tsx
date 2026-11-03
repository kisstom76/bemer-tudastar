import { getAccess } from "@/lib/access";
import { createClient } from "@/lib/supabase/server";
import { DOG_BEMUTATO_URL, szemelyesLink } from "@/content/bemutatok";
import { ContactForm } from "./ContactForm";
import { CopyLink } from "./CopyLink";
import { dogEloadoiJegyzet } from "@/content/dogJegyzet";

// A belépett partner saját bemutató-linkje: az utolsó dián az ő neve és telefonszáma jelenik meg.
export async function SajatBemutato() {
  const { email, access } = await getAccess();
  if (!email || !access) return null;

  // Ha a 003-as migráció még nem futott (nincs phone oszlop), a telefonszám üresnek számít.
  const supabase = await createClient();
  const { data } = await supabase
    .from("allowed_emails")
    .select("phone")
    .eq("email", email)
    .maybeSingle<{ phone: string | null }>();
  const nev = access.name?.trim() ?? "";
  const telefon = data?.phone?.trim() ?? "";
  const kesz = Boolean(nev && telefon);
  const link = kesz ? szemelyesLink(DOG_BEMUTATO_URL, nev, telefon) : DOG_BEMUTATO_URL;

  return (
    <div className="material-card" id="sajat-bemutato">
      <div>
        <div className="m-title">🐶 BEMER Dog Line bemutató – a te elérhetőségeddel</div>
        <div className="m-meta">
          Telefonon lapozható, 10 diás bemutató ügyfeleknek. Az utolsó dián annak a partnernek a neve és
          száma látszik, akinek a linkjét megnyitják – ez a link a tiéd, ezt küldd tovább.
        </div>
      </div>
      {kesz ? (
        <>
          <p className="cell-sub" style={{ margin: 0 }}>
            Az utolsó dián: <b>{nev}</b> · {telefon}
          </p>
          <div className="m-actions">
            <a className="btn-download" href={link} target="_blank" rel="noopener noreferrer">
              Bemutató megnyitása
            </a>
            <CopyLink url={link} />
          </div>
          <details>
            <summary className="cell-sub">Név vagy szám módosítása</summary>
            <ContactForm nev={nev} telefon={telefon} />
          </details>
        </>
      ) : (
        <>
          <p className="cell-sub" style={{ margin: 0 }}>
            Add meg a nevedet és a telefonszámodat, és a bemutató a te elérhetőségeddel zárul. Addig az
            utolsó dián csak annyi áll: „kérj bemutatót attól a partnertől, akitől a linket kaptad”.
          </p>
          <ContactForm nev={nev} telefon={telefon} />
        </>
      )}
      <details className="eloadoi-jegyzet">
        <summary>🎤 Előadói jegyzet – mit mondj az egyes diáknál (csak neked, az ügyfél nem látja)</summary>
        {dogEloadoiJegyzet.map((sz) => (
          <div key={sz.cim} className="ej-szakasz">
            <div className="ej-cim">{sz.cim}</div>
            <ul className="tight">
              {sz.pontok.map((p, i) => (
                <li key={i}>
                  {p.cimke && <b>{p.cimke} </b>}
                  {p.szoveg}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </details>
    </div>
  );
}
