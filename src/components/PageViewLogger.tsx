"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { logPageView } from "@/app/actions";

export function PageViewLogger() {
  const pathname = usePathname();
  useEffect(() => {
    logPageView(pathname).catch(() => {});
  }, [pathname]);
  return null;
}
