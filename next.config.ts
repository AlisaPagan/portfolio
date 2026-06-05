import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    contentDispositionType: "inline",
  },
  allowedDevOrigins: ["192.168.68.52"],
};

export default nextConfig;
