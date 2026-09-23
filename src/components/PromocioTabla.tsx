"use client";

import { useState } from "react";
import type { Promocio } from "@/content/promociok";

export function PromocioTabla({ kozeli, tavoli }: { kozeli: Promocio[]; tavoli: Promocio[] }) {
  const [mind, setMind] = useState(false);

  return (
    <>
      <div className="card table-wrap">
        <table>
          <thead>
            <tr>
              <th>Határidő</th>
              <th>Promóció / esemény</th>
              <th>Lényeg</th>
            </tr>
          </thead>
          <tbody>
            {kozeli.length === 0 && (
              <tr>
                <td colSpan={3} style={{ color: "var(--text-faint)" }}>
                  Most nincs a közeljövőben lejáró promóció.
                </td>
              </tr>
            )}
            {[...kozeli, ...(mind ? tavoli : [])].map((p) => (
              <tr key={p.hatarido + p.cim}>
                <td className="mono">{p.hatarido}</td>
                <td>{p.cim}</td>
                <td>
                  {p.lenyeg}
                  {p.megjegyzes && (
                    <>
                      {" "}
                      <span className="badge-source">{p.megjegyzes}</span>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dash-foot">
        <p>Alapból a következő ~4 hónapot mutatja; a lejárt tételek maguktól eltűnnek.</p>
        {tavoli.length > 0 && (
          <button type="button" className="pill-link" onClick={() => setMind((v) => !v)}>
            {mind ? "Csak a közelgők" : `Minden esemény megjelenítése (+${tavoli.length})`}
          </button>
        )}
      </div>
    </>
  );
}
