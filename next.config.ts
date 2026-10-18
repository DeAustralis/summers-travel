import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/articles/a-considered-week-in-tuscany-staging", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }] }];
  },
  images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] },
  turbopack: { root: process.cwd() },
};

export default nextConfig;
