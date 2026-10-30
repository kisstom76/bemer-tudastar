import type { Promocio } from "@/content/promociok";

// Mindig minden futó promóció látszik – kevés van belőlük (Tamás döntése, 2026-10-30).
export function PromocioTabla({ promociok }: { promociok: Promocio[] }) {
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
            {promociok.length === 0 && (
              <tr>
                <td colSpan={3} style={{ color: "var(--text-faint)" }}>
                  Most nincs futó promóció.
                </td>
              </tr>
            )}
            {promociok.map((p) => (
              <tr key={p.hatarido + p.cim}>
                <td className="mono">{p.hatarido}</td>
                <td>
                  {p.cim}
                  <div className="cell-sub">{p.kinek}</div>
                </td>
                <td>
                  {p.lenyeg}
                  {p.anyag && (
                    <div className="cell-sub">
                      <a href={p.anyag.href}>{p.anyag.szoveg}</a>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dash-foot">
        <p>Minden futó promóció látszik; a lejártak maguktól eltűnnek.</p>
      </div>
    </>
  );
}
