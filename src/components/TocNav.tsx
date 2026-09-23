"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; cim: string; dot: string };

export function SidebarToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="toc" aria-label="Tartalomjegyzék">
      {items.map((i) => (
        <a key={i.id} href={`#${i.id}`} className={active === i.id ? "active" : undefined}>
          <span className={`dot ${i.dot}`} />
          {i.cim}
        </a>
      ))}
    </nav>
  );
}

export function MobileToc({ items }: { items: TocItem[] }) {
  return (
    <select
      aria-label="Ugrás egy szekcióhoz"
      defaultValue=""
      onChange={(e) => {
        document.getElementById(e.target.value)?.scrollIntoView({ block: "start" });
      }}
    >
      <option value="" disabled>
        Ugrás…
      </option>
      {items.map((i) => (
        <option key={i.id} value={i.id}>
          {i.cim}
        </option>
      ))}
    </select>
  );
}
