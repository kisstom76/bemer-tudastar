import type { NextConfig } from "next";

const NOINDEX = "noindex, nofollow, noarchive, nosnippet";

const nextConfig: NextConfig = {
  // Ügyfeleknek szóló, bejelentkezés nélkül nyitható bemutatók (statikus HTML a public/bemutato alatt).
  // Rövid cím: /dog → public/bemutato/dog/index.html. Keresőbe nem kerülnek.
  async rewrites() {
    return [{ source: "/dog", destination: "/bemutato/dog/index.html" }];
  },
  async headers() {
    return [
      { source: "/dog", headers: [{ key: "X-Robots-Tag", value: NOINDEX }] },
      { source: "/bemutato/:path*", headers: [{ key: "X-Robots-Tag", value: NOINDEX }] },
    ];
  },
};

export default nextConfig;
