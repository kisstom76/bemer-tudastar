import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type Role = "partner" | "admin";
export type Access = { email: string; name: string | null; role: Role };

export async function getAccess(): Promise<{ email: string | null; access: Access | null }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email) return { email: null, access: null };

  const email = user.email.toLowerCase();
  const { data } = await supabase
    .from("allowed_emails")
    .select("email, name, role")
    .eq("email", email)
    .maybeSingle<Access>();

  return { email, access: data ?? null };
}

export type Lezaras = { locked: boolean; locked_at: string | null; locked_by: string | null };

// Ha a 002-es migráció még nem futott (nincs tábla), nyitottnak számít.
export async function getLezaras(): Promise<Lezaras> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("site_settings")
    .select("locked, locked_at, locked_by")
    .eq("id", 1)
    .maybeSingle<Lezaras>();
  return { locked: data?.locked === true, locked_at: data?.locked_at ?? null, locked_by: data?.locked_by ?? null };
}

// A proxy mellett minden védett oldal maga is ellenőriz – ha a proxy valaha kimaradna, a tartalom akkor sem szivárog ki.
export async function requireAccess(): Promise<Access> {
  const { email, access } = await getAccess();
  if (!email) redirect("/belepes");
  if (!access) redirect("/nincs-hozzaferes");
  if (access.role !== "admin" && (await getLezaras()).locked) redirect("/lezarva");
  return access;
}

export async function requireAdmin(): Promise<Access> {
  const access = await requireAccess();
  if (access.role !== "admin") redirect("/tudastar");
  return access;
}

export function safeNextPath(next: string | null | undefined): string {
  if (!next || !next.startsWith("/") || next.startsWith("//") || next.startsWith("/\\")) return "/tudastar";
  return next;
}
