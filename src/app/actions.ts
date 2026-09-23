"use server";

import { createClient } from "@/lib/supabase/server";

export async function logPageView(path: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email) return;
  await supabase
    .from("activity_log")
    .insert({ email: user.email.toLowerCase(), event: "oldal", path: path.slice(0, 200) });
}
