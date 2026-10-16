import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep article metadata in the initial head for reliable crawlers and previews.
  htmlLimitedBots: /.*/,
  outputFileTracingIncludes: {
    "/*": ["./content/**/*"]
  },
  async headers() {
    return [{ source: "/:path*", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
    ] }];
  },
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
