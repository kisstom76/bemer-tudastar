"use server";

import { revalidatePath } from "next/cache";
import { requireAccess } from "@/lib/access";
import { createClient } from "@/lib/supabase/server";

export type ContactState = { ok?: string; error?: string };

const PHONE_RE = /^[+0-9 ()/-]{6,30}$/;

export async function setOwnContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  await requireAccess();
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();

  if (!name) return { error: "Add meg a nevedet, ahogy az ügyfél látja." };
  if (!PHONE_RE.test(phone)) return { error: "Ez nem tűnik telefonszámnak (pl. +36 30 123 4567)." };

  const supabase = await createClient();
  const { error } = await supabase.rpc("set_own_contact", { p_name: name.slice(0, 60), p_phone: phone });
  if (error) return { error: `Nem sikerült menteni: ${error.message}` };

  revalidatePath("/tudastar");
  return { ok: "Elmentve – a bemutató utolsó dián most már a te elérhetőséged látszik." };
}
