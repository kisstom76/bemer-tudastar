import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getAccess, getLezaras } from "@/lib/access";
import { SAJAT } from "@/content/elerhetosegek";

export const metadata: Metadata = {
  title: "Átmenetileg zárva",
  robots: { index: false, follow: false },
};

export default async function LezarvaPage() {
  const { email, access } = await getAccess();
  if (!email) redirect("/belepes");
  if (!access) redirect("/nincs-hozzaferes");
  if (access.role === "admin" || !(await getLezaras()).locked) redirect("/tudastar");

  return (
    <div className="center-page">
      <div className="card auth-card">
        <Link href="/" className="brand">
          <span className="brand-mark">BT</span>
          <span className="brand-text" style={{ textAlign: "left" }}>
            BEMER Tudástár<span>partner tudásbázis</span>
          </span>
        </Link>
        <h1>A tudástár most átmenetileg zárva</h1>
        <p>
          Éppen frissítjük a tartalmat. Hamarosan újra elérhető — próbáld meg kicsit később. A hozzáférésed
          megmaradt, nem kell újra jelentkezned.
        </p>
        <a className="btn secondary" href={`mailto:${SAJAT.email}?subject=${encodeURIComponent("Tudástár")}`}>
          ✉ {SAJAT.email}
        </a>
        <form action="/auth/kijelentkezes" method="post">
          <button type="submit" className="btn secondary" style={{ width: "100%" }}>
            Kijelentkezés
          </button>
        </form>
      </div>
    </div>
  );
}
