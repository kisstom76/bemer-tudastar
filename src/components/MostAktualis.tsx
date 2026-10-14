import type { Promocio } from "@/content/promociok";
import type { Esemeny } from "@/content/esemenyek";
import type { FelvetelSorozat } from "@/content/felvetelek";

// A „Most aktuális” doboz magától válogat a tartalomfájlokból – külön karbantartás nem kell.
const ESEMENY_NAPOK = 14;
const HATARIDO_NAPOK = 21;

function napokKozott(tol: string, ig: string): number {
  return Math.round((Date.parse(`${ig}T12:00:00Z`) - Date.parse(`${tol}T12:00:00Z`)) / 86_400_000);
}

function hatravan(ma: string, datum: string): string {
  const n = napokKozott(ma, datum);
  if (n <= 0) return "ma";
  if (n === 1) return "holnap";
  return `még ${n} nap`;
}

function honapNap(datum: string): string {
  return `${datum.slice(5, 7)}. ${datum.slice(8, 10)}.`;
}

export function MostAktualis({
  ma,
  promociok,
  esemenyek,
  sorozatok,
}: {
  ma: string;
  promociok: Promocio[];
  esemenyek: Esemeny[];
  sorozatok: FelvetelSorozat[];
}) {
  const futo = promociok
    .filter((p) => p.hatarido >= ma)
    .sort((a, b) => a.hatarido.localeCompare(b.hatarido));

  const kozeliEsemenyek = esemenyek
    .filter((e) => (e.veg ?? e.kezdet) >= ma && napokKozott(ma, e.kezdet) <= ESEMENY_NAPOK)
    .sort((a, b) => a.kezdet.localeCompare(b.kezdet));

  const hataridok = esemenyek
    .filter(
      (e) =>
        e.jelentkezesiHatarido &&
        e.jelentkezesiHatarido >= ma &&
        napokKozott(ma, e.jelentkezesiHatarido) <= HATARIDO_NAPOK &&
        !kozeliEsemenyek.includes(e)
    )
    .sort((a, b) => a.jelentkezesiHatarido!.localeCompare(b.jelentkezesiHatarido!));

  const frissFelvetelek = sorozatok
    .filter((s) => s.aktualisEddig && s.aktualisEddig >= ma)
    .flatMap((s) => s.felvetelek.map((f) => ({ ...f, sorozat: s.cim })))
    .sort((a, b) => b.datum.localeCompare(a.datum))
    .slice(0, 3);

  return (
    <section className="most-aktualis" id="most-aktualis" aria-labelledby="most-aktualis-cim">
      <div className="ma-head">
        <h2 id="most-aktualis-cim">⚡ Most aktuális</h2>
        <span className="ma-date">{honapNap(ma)} állapot</span>
      </div>

      <div className="ma-grid">
        <div className="ma-col">
          <h3>Futó promóciók, kihívások</h3>
          {futo.length === 0 ? (
            <p className="ma-empty">Most nincs futó promóció.</p>
          ) : (
            <ul>
              {futo.map((p) => (
                <li key={p.cim}>
                  <b>{p.cim}</b>
                  <span className="ma-when">{hatravan(ma, p.hatarido)} (eddig: {honapNap(p.hatarido)})</span>
                  {p.anyag && (
                    <a className="ma-link" href={p.anyag.href}>
                      {p.anyag.szoveg}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
          <a className="ma-more" href="#promociok">
            Részletek →
          </a>
        </div>

        <div className="ma-col">
          <h3>A következő két hét</h3>
          {kozeliEsemenyek.length === 0 && hataridok.length === 0 ? (
            <p className="ma-empty">Nincs esemény a következő két hétben.</p>
          ) : (
            <ul>
              {kozeliEsemenyek.map((e) => (
                <li key={e.kezdet + e.cim}>
                  <b>{e.cim}</b>
                  <span className="ma-when">
                    {honapNap(e.kezdet)}
                    {e.veg ? `–${honapNap(e.veg)}` : ""} · {hatravan(ma, e.kezdet)} · {e.helyszin}
                  </span>
                  {e.link && (
                    <a className="ma-link" href={e.link} target="_blank" rel="noopener noreferrer">
                      Regisztráció →
                    </a>
                  )}
                </li>
              ))}
              {hataridok.map((e) => (
                <li key={"h" + e.kezdet + e.cim}>
                  <b>Jelentkezési határidő: {e.cim}</b>
                  <span className="ma-when">
                    {honapNap(e.jelentkezesiHatarido!)} · {hatravan(ma, e.jelentkezesiHatarido!)}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <a className="ma-more" href="#esemenyek">
            Minden esemény →
          </a>
        </div>

        <div className="ma-col">
          <h3>Friss felvételek</h3>
          {frissFelvetelek.length === 0 ? (
            <p className="ma-empty">Most nincs új felvétel.</p>
          ) : (
            <ul>
              {frissFelvetelek.map((f) => (
                <li key={f.url}>
                  <b>{f.cim}</b>
                  <span className="ma-when">
                    {f.eloado} · {honapNap(f.datum)}
                  </span>
                  <a className="ma-link" href={f.url} target="_blank" rel="noopener noreferrer">
                    ▶ Megnézem
                  </a>
                </li>
              ))}
            </ul>
          )}
          <a className="ma-more" href="#felvetelek">
            Összes felvétel →
          </a>
        </div>
      </div>
    </section>
  );
}
