import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Kita izinkan domain ini
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com", // Kita izinkan domain ini
      },
       {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com", // Kita izinkan domain ini
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com", // Kita izinkan domain ini
      },
    ],
  },
};

export default nextConfig;