import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.bancobu.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cloudfront-us-east-1.images.arcpublishing.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mighty.tools",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.s-bol.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.bhphotovideo.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
