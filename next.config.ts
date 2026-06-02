import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    contentDispositionType: "inline",
  },
};

export default nextConfig;
