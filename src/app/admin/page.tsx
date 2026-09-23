import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/access";
import { createClient } from "@/lib/supabase/server";
import { AddEmailForm } from "./AddEmailForm";
import { removeEmail } from "./actions";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false, nocache: true },
};

type AllowedRow = { email: string; name: string | null; role: string; created_at: string };
type LogRow = { email: string; event: string; path: string; created_at: string };

const fmt = new Intl.DateTimeFormat("hu-HU", {
  timeZone: "Europe/Budapest",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

function ido(iso: string | undefined) {
  return iso ? fmt.format(new Date(iso)) : "—";
}

export default async function AdminPage() {
  const admin = await requireAdmin();
  const supabase = await createClient();

  const [{ data: allowed }, { data: log }] = await Promise.all([
    supabase.from("allowed_emails").select("email, name, role, created_at").order("created_at", { ascending: true }),
    supabase.from("activity_log").select("email, event, path, created_at").order("created_at", { ascending: false }).limit(1000),
  ]);

  const rows = (allowed ?? []) as AllowedRow[];
  const events = (log ?? []) as LogRow[];
  const hatar30 = Date.now() - 30 * 24 * 3600 * 1000;

  const osszesito = new Map<string, { utolso?: string; belepes30: number; oldal30: number }>();
  for (const e of events) {
    const s = osszesito.get(e.email) ?? { belepes30: 0, oldal30: 0 };
    if (!s.utolso) s.utolso = e.created_at;
    if (new Date(e.created_at).getTime() >= hatar30) {
      if (e.event === "belepes") s.belepes30++;
      else s.oldal30++;
    }
    osszesito.set(e.email, s);
  }

  return (
    <div className="public-wrap" style={{ maxWidth: 1100 }}>
      <div className="public-top">
        <Link href="/tudastar" className="brand">
          <span className="brand-mark">BT</span>
          <span className="brand-text">
            BEMER Tudástár<span>admin</span>
          </span>
        </Link>
        <Link href="/tudastar" className="btn secondary small">
          ← Vissza a tudástárba
        </Link>
      </div>

      <section className="block">
        <div className="sec-head">
          <h2>Ki léphet be?</h2>
          <span className="badge-source">{rows.length} engedélyezett fiók</span>
        </div>
        <div className="card">
          <AddEmailForm />
          <div className="note-callout">
            <b>Emlékeztető:</b> ha a PDF-anyagok a megosztott Drive-mappában vannak, az új partner címét ott is
            add hozzá a megosztáshoz — különben a tudástárba belép, de a dokumentumokat nem tudja megnyitni.
          </div>
        </div>

        <div className="card table-wrap" style={{ marginTop: "1rem" }}>
          <table>
            <thead>
              <tr>
                <th>Fiók</th>
                <th>Szerep</th>
                <th>Utoljára aktív</th>
                <th>Belépés (30 nap)</th>
                <th>Oldalmegtekintés (30 nap)</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const s = osszesito.get(r.email);
                return (
                  <tr key={r.email}>
                    <td>
                      {r.name && <div style={{ fontWeight: 600 }}>{r.name}</div>}
                      <div style={{ color: "var(--text-muted)" }}>{r.email}</div>
                    </td>
                    <td>{r.role === "admin" ? "Admin" : "Partner"}</td>
                    <td className="mono">{ido(s?.utolso)}</td>
                    <td className="mono">{s?.belepes30 ?? 0}</td>
                    <td className="mono">{s?.oldal30 ?? 0}</td>
                    <td>
                      {r.email !== admin.email && (
                        <form action={removeEmail}>
                          <input type="hidden" name="email" value={r.email} />
                          <button type="submit" className="pill-link">
                            Eltávolítás
                          </button>
                        </form>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="block">
        <div className="sec-head">
          <h2>Legutóbbi aktivitás</h2>
          <span className="badge-source">utolsó 50 esemény</span>
        </div>
        <div className="card table-wrap">
          {events.length === 0 ? (
            <p style={{ color: "var(--text-faint)" }}>Még nincs rögzített aktivitás.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Időpont</th>
                  <th>Fiók</th>
                  <th>Esemény</th>
                  <th>Oldal</th>
                </tr>
              </thead>
              <tbody>
                {events.slice(0, 50).map((e, i) => (
                  <tr key={i}>
                    <td className="mono">{ido(e.created_at)}</td>
                    <td>{e.email}</td>
                    <td>{e.event === "belepes" ? "Belépés" : "Megtekintés"}</td>
                    <td className="mono">{e.path}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  );
}
