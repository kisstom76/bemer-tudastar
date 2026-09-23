import type { Metadata } from "next";
import Link from "next/link";
import { GoogleLoginButton } from "@/components/GoogleLoginButton";
import { safeNextPath } from "@/lib/access";
import { SAJAT } from "@/content/elerhetosegek";

export const metadata: Metadata = {
  title: "Partner belépés",
};

export default async function BelepesPage(props: PageProps<"/belepes">) {
  const sp = await props.searchParams;
  const next = safeNextPath(typeof sp.next === "string" ? sp.next : null);
  const hiba = typeof sp.error === "string";

  return (
    <div className="center-page">
      <div className="card auth-card">
        <Link href="/" className="brand">
          <span className="brand-mark">BT</span>
          <span className="brand-text" style={{ textAlign: "left" }}>
            BEMER Tudástár<span>partner tudásbázis</span>
          </span>
        </Link>
        <h1>Partner belépés</h1>
        <p>Jelentkezz be azzal a Google-fiókkal, amelyet megadtál nekünk.</p>
        {hiba && <div className="auth-error">A bejelentkezés nem sikerült. Próbáld újra, kérlek.</div>}
        <GoogleLoginButton next={next} />
        <p style={{ fontSize: "0.8rem" }}>
          Még nincs hozzáférésed? Írj nekünk:{" "}
          <a href={`mailto:${SAJAT.email}`}>{SAJAT.email}</a>
        </p>
      </div>
    </div>
  );
}
