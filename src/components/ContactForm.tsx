"use client";

import { useActionState } from "react";
import { setOwnContact, type ContactState } from "@/app/tudastar/actions";

export function ContactForm({ nev, telefon }: { nev: string; telefon: string }) {
  const [state, action, pending] = useActionState<ContactState, FormData>(setOwnContact, {});

  return (
    <form action={action}>
      <div className="admin-form">
        <label>
          Név, ahogy az ügyfél látja
          <input className="field" type="text" name="name" id="sajat-nev" required defaultValue={nev} placeholder="pl. Minta Anna" />
        </label>
        <label>
          Telefonszám
          <input className="field" type="tel" name="phone" id="sajat-telefon" required defaultValue={telefon} placeholder="+36 30 123 4567" />
        </label>
        <button type="submit" className="btn small" disabled={pending}>
          {pending ? "Mentés…" : "Mentés"}
        </button>
      </div>
      {state.error && <p className="form-msg error">{state.error}</p>}
      {state.ok && <p className="form-msg ok">{state.ok}</p>}
    </form>
  );
}
