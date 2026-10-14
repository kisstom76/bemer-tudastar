"use client";

import { useState } from "react";
import type { Esemeny } from "@/content/esemenyek";

function mikor(e: Esemeny): string {
  if (!e.veg) return e.kezdet;
  // azonos év és hónap: 2026-10-16 – 17.
  if (e.veg.slice(0, 7) === e.kezdet.slice(0, 7)) return `${e.kezdet} – ${e.veg.slice(8)}.`;
  return `${e.kezdet} – ${e.veg}`;
}

export function EsemenyTabla({ kozeli, tavoli }: { kozeli: Esemeny[]; tavoli: Esemeny[] }) {
  const [mind, setMind] = useState(false);

  return (
    <>
      <div className="card table-wrap">
        <table>
          <thead>
            <tr>
              <th>Mikor</th>
              <th>Esemény</th>
              <th>Hol</th>
              <th>Jelentkezés / tudnivaló</th>
            </tr>
          </thead>
          <tbody>
            {kozeli.length === 0 && !mind && (
              <tr>
                <td colSpan={4} style={{ color: "var(--text-faint)" }}>
                  Most nincs közelgő esemény.
                </td>
              </tr>
            )}
            {[...kozeli, ...(mind ? tavoli : [])].map((e) => (
              <tr key={e.kezdet + e.cim}>
                <td className="mono">{mikor(e)}</td>
                <td>
                  <span className="badge-source">{e.tipus}</span> {e.cim}
                </td>
                <td>{e.helyszin}</td>
                <td>
                  {e.jelentkezes}
                  {e.link && (
                    <>
                      {" "}
                      <a href={e.link} target="_blank" rel="noopener noreferrer">
                        Regisztráció →
                      </a>
                    </>
                  )}
                  {e.jelentkezesiHatarido && (
                    <div className="cell-sub">Jelentkezési határidő: {e.jelentkezesiHatarido}</div>
                  )}
                  {e.szobeli && <div className="cell-sub">Szóban elhangzott – hivatalos kiírás még nincs.</div>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dash-foot">
        <p>Alapból a következő ~4 hónap eseményeit mutatja; a lezajlottak maguktól eltűnnek.</p>
        {tavoli.length > 0 && (
          <button type="button" className="pill-link" onClick={() => setMind((v) => !v)}>
            {mind ? "Csak a közelgők" : `Minden esemény megjelenítése (+${tavoli.length})`}
          </button>
        )}
      </div>
    </>
  );
}
