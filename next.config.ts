import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    contentDispositionType: "inline",
  },
};

// next.config.js
module.exports = {
  allowedDevOrigins: ["192.168.68.52"],
};

export default nextConfig;
