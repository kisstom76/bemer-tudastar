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
              <th>Meddig</th>
              <th>Promóció / kihívás</th>
              <th>Lényeg</th>
            </tr>
          </thead>
          <tbody>
            {kozeli.length === 0 && !mind && (
              <tr>
                <td colSpan={3} style={{ color: "var(--text-faint)" }}>
                  Most nincs a közeljövőben lejáró promóció.
                </td>
              </tr>
            )}
            {[...kozeli, ...(mind ? tavoli : [])].map((p) => (
              <tr key={p.hatarido + p.cim}>
                <td className="mono">{p.hatarido}</td>
                <td>
                  {p.cim}
                  <div className="cell-sub">{p.kinek}</div>
                </td>
                <td>{p.lenyeg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dash-foot">
        <p>Alapból a következő ~4 hónapban lejárókat mutatja; a lejártak maguktól eltűnnek.</p>
        {tavoli.length > 0 && (
          <button type="button" className="pill-link" onClick={() => setMind((v) => !v)}>
            {mind ? "Csak a közelgők" : `Minden promóció megjelenítése (+${tavoli.length})`}
          </button>
        )}
      </div>
    </>
  );
}
