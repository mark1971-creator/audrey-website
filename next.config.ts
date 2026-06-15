import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // A stray package-lock.json in a parent directory makes Next.js infer the
  // wrong workspace root, which breaks Tailwind v4's automatic source scanning
  // (no utility classes get generated). Pin the root to this project.
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Components/Moments.tsx loads remote images via next/image; allowlist the host
  // so they aren't rejected at runtime.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
