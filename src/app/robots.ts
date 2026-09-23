import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/tudastar", "/admin", "/auth", "/nincs-hozzaferes"],
    },
  };
}
