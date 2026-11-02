"use client";

import { useState } from "react";

export function CopyLink({ url }: { url: string }) {
  const [kesz, setKesz] = useState(false);

  async function masol() {
    try {
      await navigator.clipboard.writeText(url);
      setKesz(true);
      setTimeout(() => setKesz(false), 2500);
    } catch {
      window.prompt("Másold ki a linket:", url);
    }
  }

  return (
    <button type="button" className="btn secondary small" onClick={masol}>
      {kesz ? "Link kimásolva" : "Link másolása"}
    </button>
  );
}
