"use client";

import { useActionState } from "react";
import { addEmail, type FormState } from "./actions";

export function AddEmailForm() {
  const [state, action, pending] = useActionState<FormState, FormData>(addEmail, {});

  return (
    <form action={action}>
      <div className="admin-form">
        <label>
          Google / Gmail-cím
          <input className="field" type="email" name="email" required placeholder="valaki@gmail.com" />
        </label>
        <label>
          Név (nem kötelező)
          <input className="field" type="text" name="name" placeholder="pl. Minta Anna" />
        </label>
        <label>
          Szerep
          <select className="field" name="role" defaultValue="partner">
            <option value="partner">Partner</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <button type="submit" className="btn small" disabled={pending}>
          {pending ? "Mentés…" : "Hozzáadás"}
        </button>
      </div>
      {state.error && <p className="form-msg error">{state.error}</p>}
      {state.ok && <p className="form-msg ok">{state.ok}</p>}
    </form>
  );
}
