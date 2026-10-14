import type { Metadata } from "next";
import Link from "next/link";
import { requireAccess, getLezaras } from "@/lib/access";
import { kategoriak } from "@/content/kategoriak";
import { SidebarToc, MobileToc, type TocItem } from "@/components/TocNav";
import { PageViewLogger } from "@/components/PageViewLogger";
import { setLezaras } from "@/app/admin/actions";

export const metadata: Metadata = {
  title: "Tudástár",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

const toc: TocItem[] = [
  { id: "intro", cim: "Bemutatkozás", dot: "accent" },
  { id: "attekinto", cim: "Áttekintő", dot: "accent" },
  ...kategoriak.filter((k) => k.id !== "promociok").map((k) => ({ id: k.id, cim: k.cim, dot: k.allapot })),
];

export default async function TudastarLayout({ children }: LayoutProps<"/tudastar">) {
  const access = await requireAccess();
  const admin = access.role === "admin";
  const lezarva = admin && (await getLezaras()).locked;

  const lakatGomb = admin && (
    <form action={setLezaras}>
      <input type="hidden" name="locked" value={lezarva ? "0" : "1"} />
      <button type="submit" className={lezarva ? "btn small" : "btn secondary small"}>
        {lezarva ? "🔒 Lezárva – megnyitás" : "🔓 Tudástár lezárása"}
      </button>
    </form>
  );

  return (
    <div className="shell">
      <aside className="sidebar">
        <Link href="/tudastar" className="brand">
          <span className="brand-mark">BT</span>
          <span className="brand-text">
            BEMER Tudástár<span>partner tudásbázis</span>
          </span>
        </Link>
        <SidebarToc items={toc} />
        <div className="sidebar-foot">
          <span>Belépve: {access.email}</span>
          {access.role === "admin" && <Link href="/admin">⚙ Admin: hozzáférések</Link>}
          {lakatGomb}
          <form action="/auth/kijelentkezes" method="post">
            <button type="submit" className="btn secondary small">
              Kijelentkezés
            </button>
          </form>
        </div>
      </aside>

      <main className="content">
        <div className="mobile-bar mobile-only">
          <Link href="/tudastar" className="brand">
            <span className="brand-mark">BT</span>
            <span className="brand-text">BEMER Tudástár</span>
          </Link>
          <MobileToc items={toc} />
        </div>
        <div className="dev-banner" role="note">
          <span className="dev-dot" aria-hidden="true" />
          <span>
            <b>A tudástár épül.</b> A mostani forma még nem végleges — folyamatosan bővül és alakul. Ha valamit
            hiányolsz vagy hibát látsz, írj nekünk.
          </span>
        </div>
        {lezarva && (
          <div className="lock-banner">
            🔒 <b>Lezárva</b> — ezt most csak adminok látják, a partnerek nem. A megnyitás gomb az oldalsávban
            (telefonon az oldal alján) és az admin oldalon van.
          </div>
        )}
        {children}
        <div className="mobile-only" style={{ marginTop: "2rem", display: "flex", gap: "0.6rem", flexWrap: "wrap", alignItems: "center", fontSize: "0.8rem", color: "var(--text-faint)" }}>
          <span>Belépve: {access.email}</span>
          {access.role === "admin" && <Link href="/admin" className="pill-link">⚙ Admin</Link>}
          {lakatGomb}
          <form action="/auth/kijelentkezes" method="post">
            <button type="submit" className="pill-link">
              Kijelentkezés
            </button>
          </form>
        </div>
      </main>
      <PageViewLogger />
    </div>
  );
}
