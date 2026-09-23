import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const NOINDEX = "noindex, nofollow, noarchive, nosnippet";

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const redirectTo = (path: string) => {
    const res = NextResponse.redirect(new URL(path, request.url));
    response.cookies.getAll().forEach((c) => res.cookies.set(c));
    res.headers.set("X-Robots-Tag", NOINDEX);
    return res;
  };

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname, search } = request.nextUrl;

  if (!user?.email) {
    return redirectTo(`/belepes?next=${encodeURIComponent(pathname + search)}`);
  }

  const { data: row } = await supabase
    .from("allowed_emails")
    .select("role")
    .eq("email", user.email.toLowerCase())
    .maybeSingle<{ role: string }>();

  if (!row) return redirectTo("/nincs-hozzaferes");
  if (pathname.startsWith("/admin") && row.role !== "admin") return redirectTo("/tudastar");

  response.headers.set("X-Robots-Tag", NOINDEX);
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

export const config = {
  matcher: ["/tudastar/:path*", "/admin/:path*"],
};
