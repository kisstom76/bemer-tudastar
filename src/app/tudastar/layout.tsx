import type { Metadata } from "next";
import Link from "next/link";
import { requireAccess } from "@/lib/access";
import { kategoriak } from "@/content/kategoriak";
import { SidebarToc, MobileToc, type TocItem } from "@/components/TocNav";
import { PageViewLogger } from "@/components/PageViewLogger";

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
        {children}
        <div className="mobile-only" style={{ marginTop: "2rem", display: "flex", gap: "0.6rem", flexWrap: "wrap", alignItems: "center", fontSize: "0.8rem", color: "var(--text-faint)" }}>
          <span>Belépve: {access.email}</span>
          {access.role === "admin" && <Link href="/admin" className="pill-link">⚙ Admin</Link>}
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
