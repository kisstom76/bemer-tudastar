import type { ReactNode } from "react";

// Újrafelhasználható "?" súgó-buborék – hoverre és billentyűzet-fókuszra is megjelenik.
export function Help({ id, children }: { id: string; children: ReactNode }) {
  return (
    <span className="help-wrap">
      <button className="help-icon" type="button" aria-describedby={id} aria-label="Magyarázat">
        ?
      </button>
      <span className="tooltip-bubble" id={id} role="tooltip">
        {children}
      </span>
    </span>
  );
}
