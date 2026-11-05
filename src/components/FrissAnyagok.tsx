import type { AnyagCsoport } from "@/content/anyagok";
import type { FelvetelSorozat } from "@/content/felvetelek";
import { FRISS_DARAB, type Ujdonsag } from "@/content/ujdonsagok";
import { nyitva } from "@/content/bemutatok";

// A „Friss anyagok” lista magától válogat a tételek `hozzaadva` mezőjéből – külön karbantartás nem kell.
// Az egy napon, egy helyre felkerült tételek egy sorba kerülnek („Brossúrák és szórólapok: 9 új anyag”).

function honapNap(datum: string): string {
  return `${datum.slice(5, 7)}. ${datum.slice(8, 10)}.`;
}

function csoportosit<T>(tetelek: T[], kulcs: (t: T) => string | undefined): Map<string, T[]> {
  const m = new Map<string, T[]>();
  for (const t of tetelek) {
    const k = kulcs(t);
    if (!k) continue;
    m.set(k, [...(m.get(k) ?? []), t]);
  }
  return m;
}

export function FrissAnyagok({
  anyagCsoportok,
  sorozatok,
  kulon,
}: {
  anyagCsoportok: AnyagCsoport[];
  sorozatok: FelvetelSorozat[];
  kulon: Ujdonsag[];
}) {
  const anyagok: Ujdonsag[] = anyagCsoportok.flatMap((cs) =>
    [...csoportosit(cs.tetelek, (t) => t.hozzaadva)].map(([datum, tt]) =>
      tt.length === 1 && tt[0].url
        ? { datum, ikon: cs.ikon, cim: tt[0].nev, href: tt[0].url, kulso: true }
        : {
            datum,
            ikon: cs.ikon,
            cim: tt.length === 1 ? tt[0].nev : `${cs.cim}: ${tt.length} új anyag`,
            href: `#anyag-${cs.id}`,
          }
    )
  );

  const felvetelek: Ujdonsag[] = sorozatok.flatMap((s) =>
    [...csoportosit(s.felvetelek, (f) => f.hozzaadva)].map(([datum, ff]) =>
      ff.length === 1
        ? { datum, ikon: "▶", cim: `Felvétel: ${ff[0].eloado} – ${ff[0].cim}`, href: ff[0].url, kulso: true }
        : { datum, ikon: "▶", cim: `${s.cim}: ${ff.length} új felvétel`, href: "#felvetelek" }
    )
  );

  // Rendezés dátum szerint csökkenően; azonos napon a sorrend marad (különálló újdonságok elöl).
  const lista = [...kulon.filter((u) => !u.megjelenik || nyitva(u.megjelenik)), ...anyagok, ...felvetelek]
    .map((u, i) => ({ u, i }))
    .sort((a, b) => b.u.datum.localeCompare(a.u.datum) || a.i - b.i)
    .slice(0, FRISS_DARAB)
    .map(({ u }) => u);

  if (lista.length === 0) return null;

  return (
    <section className="friss-anyagok" id="friss-anyagok" aria-labelledby="friss-anyagok-cim">
      <h2 id="friss-anyagok-cim">🆕 Friss anyagok</h2>
      <ul>
        {lista.map((u) => (
          <li key={u.datum + u.href + u.cim}>
            <span className="fa-date">{honapNap(u.datum)}</span>
            <span className="fa-ikon" aria-hidden="true">
              {u.ikon}
            </span>
            {u.kulso ? (
              <a href={u.href} target="_blank" rel="noopener noreferrer">
                {u.cim}
              </a>
            ) : (
              <a href={u.href}>{u.cim}</a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
