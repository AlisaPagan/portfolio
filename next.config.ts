import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    contentDispositionType: "inline",
    deviceSizes: [
      384, 640, 750, 828, 1080, 1200, 1440, 1536, 1600, 1920, 2048, 2880, 3840,
    ],
  },
  allowedDevOrigins: ["192.168.68.52", "192.168.68.53", "192.168.68.55"],

  async headers() {
    return [
      {
        source: "/:all*(webp|png|jpg|jpeg|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
