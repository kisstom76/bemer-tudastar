"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/access";
import { createClient } from "@/lib/supabase/server";

export type FormState = { ok?: string; error?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function addEmail(_prev: FormState, formData: FormData): Promise<FormState> {
  const admin = await requireAdmin();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const name = String(formData.get("name") ?? "").trim();
  const role = formData.get("role") === "admin" ? "admin" : "partner";

  if (!EMAIL_RE.test(email)) return { error: "Ez nem tűnik érvényes e-mail-címnek." };

  const supabase = await createClient();
  const { error } = await supabase
    .from("allowed_emails")
    .insert({ email, name: name || null, role, created_by: admin.email });

  if (error) {
    if (error.code === "23505") return { error: "Ez a cím már szerepel a listán." };
    return { error: `Nem sikerült menteni: ${error.message}` };
  }

  revalidatePath("/admin");
  return { ok: `${email} felvéve. Ne felejtsd el a megosztott Drive-mappához is hozzáadni!` };
}

export async function removeEmail(formData: FormData) {
  const admin = await requireAdmin();
  const email = String(formData.get("email") ?? "").toLowerCase();
  if (!email || email === admin.email) return;

  const supabase = await createClient();
  await supabase.from("allowed_emails").delete().eq("email", email);
  revalidatePath("/admin");
}
