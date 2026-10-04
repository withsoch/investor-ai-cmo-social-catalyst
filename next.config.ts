import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The agency-era pages contradict the product's public pricing, so they
  // forward to their product equivalents. Temporary (307) while the
  // positioning is still being tested.
  async redirects() {
    return [
      { source: "/services", destination: "/how-it-works", permanent: false },
      { source: "/packages", destination: "/pricing", permanent: false },
      { source: "/audit", destination: "/get-started", permanent: false },
    ];
  },
  images: {
    // Most photos are local files under public/. A few (e.g. the founder
    // photo on the About page) are served from the Webflow CDN, so that
    // host is allow-listed here.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
};

export default nextConfig;
