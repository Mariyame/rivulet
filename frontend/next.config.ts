import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
    serverActions: {
      allowedOrigins: ['taskjoy.com', 'localhost:3000'],
    },
  },
};

export default nextConfig;
