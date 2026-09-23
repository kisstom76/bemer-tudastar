import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getAccess } from "@/lib/access";
import { SAJAT } from "@/content/elerhetosegek";

export const metadata: Metadata = {
  title: "Nincs hozzáférés",
  robots: { index: false, follow: false },
};

export default async function NincsHozzaferesPage() {
  const { email, access } = await getAccess();
  if (access) redirect("/tudastar");

  return (
    <div className="center-page">
      <div className="card auth-card">
        <Link href="/" className="brand">
          <span className="brand-mark">BT</span>
          <span className="brand-text" style={{ textAlign: "left" }}>
            BEMER Tudástár<span>partner tudásbázis</span>
          </span>
        </Link>
        <h1>Ehhez a fiókhoz még nincs hozzáférés</h1>
        {email && (
          <p>
            Ezzel a fiókkal léptél be: <b>{email}</b>
          </p>
        )}
        <p>
          A tudástár a csapatunk partnereinek szól. Ha partner vagy, vagy érdekel a BEMER, írj nekünk, és
          megadjuk a hozzáférést.
        </p>
        <a className="btn" href={`mailto:${SAJAT.email}?subject=${encodeURIComponent("Hozzáférés a tudástárhoz")}`}>
          ✉ {SAJAT.email}
        </a>
        <form action="/auth/kijelentkezes" method="post">
          <button type="submit" className="btn secondary" style={{ width: "100%" }}>
            Belépés másik Google-fiókkal
          </button>
        </form>
      </div>
    </div>
  );
}
