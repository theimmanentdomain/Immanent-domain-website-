import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // Live calendar updates require server rendering on Vercel.
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
