import type { Metadata } from "next";
import Link from "next/link";
import { SAJAT } from "@/content/elerhetosegek";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató",
  description: "Milyen adatokat kezel a BEMER Tudástár, és miért.",
};

export default function AdatvedelemPage() {
  return (
    <div className="public-wrap" style={{ maxWidth: 780 }}>
      <div className="public-top">
        <Link href="/" className="brand">
          <span className="brand-mark">BT</span>
          <span className="brand-text">
            BEMER Tudástár<span>Kiss Tamás & Karkis Katalin csapata</span>
          </span>
        </Link>
      </div>

      <h1 style={{ fontWeight: 300, fontSize: "2rem", margin: "1.5rem 0 0.5rem" }}>Adatvédelmi tájékoztató</h1>
      <p className="sec-lead">Utolsó frissítés: 2026. szeptember 29.</p>

      <div className="card prose" style={{ display: "flex", flexDirection: "column", gap: "1.2rem", maxWidth: "none" }}>
        <section>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 600 }}>Ki kezeli az adataidat?</h2>
          <p>
            A tudástárat {SAJAT.nev} működtetik, független BEMER partnerekként. Kérdés esetén ezen érhetsz el
            minket: <a href={`mailto:${SAJAT.email}`}>{SAJAT.email}</a>, {SAJAT.telefon}. Az oldal nem a BEMER
            Int. AG hivatalos oldala.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 600 }}>Mit kezelünk, és miért?</h2>
          <ul className="tight">
            <li>
              <b>Google-fiókod e-mail-címe és neve</b> — a belépéshez és annak ellenőrzéséhez, hogy jogosult
              vagy-e a tudástár használatára. A jelszavadhoz nem férünk hozzá, azt csak a Google kezeli.
            </li>
            <li>
              <b>Belépések időpontja és a megtekintett oldalak</b> — hogy lássuk, használják-e az anyagokat, és
              melyik rész érdekli a partnereket. Ezt csak a tudástár adminisztrátorai látják.
            </li>
          </ul>
          <p>
            Az adatkezelés jogalapja a jogos érdekünk (a zárt tartalom védelme és a tudástár fejlesztése),
            illetve a te kérésedre történő hozzáférés-biztosítás.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 600 }}>Ha csak a nyitóoldalt látogatod</h2>
          <p>
            A nyitóoldal és a belépési oldal megtekintéséhez nem kérünk adatot, és a látogatásodat nem
            naplózzuk. Ha e-mailt vagy telefonhívást kezdeményezel felénk, a megadott adataidat csak a
            megkeresésed megválaszolásához használjuk.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 600 }}>Hol tároljuk, és kinek adjuk át?</h2>
          <p>
            Az adatokat a Supabase szolgáltatás tárolja az Európai Unióban (frankfurti adatközpont). Az
            oldalt a Vercel szolgáltatja ki, a bejelentkezést a Google végzi. Az adataidat nem értékesítjük,
            és marketing célra nem adjuk tovább.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 600 }}>Meddig őrizzük?</h2>
          <p>
            Amíg van hozzáférésed a tudástárhoz. Ha a hozzáférésed megszűnik, vagy kéred, töröljük az
            e-mail-címedet és a hozzád kötött naplóbejegyzéseket.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 600 }}>Milyen jogaid vannak?</h2>
          <p>
            Bármikor kérheted, hogy tájékoztassunk arról, milyen adatot kezelünk rólad, javítsuk vagy töröljük
            azt, illetve tiltakozhatsz a kezelés ellen. Írj nekünk a fenti e-mail-címre. Panasszal a Nemzeti
            Adatvédelmi és Információszabadság Hatósághoz (naih.hu) is fordulhatsz.
          </p>
        </section>
      </div>

      <footer className="public-foot">
        <Link href="/">← Vissza a nyitóoldalra</Link>
      </footer>
    </div>
  );
}
