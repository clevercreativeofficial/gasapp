import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use SWC compiler (default in Next.js 12+)
  //swcMinify: true,

  // Enable React strict mode
  reactStrictMode: true,

  // Enable compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Improve build performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
     
  },

  

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
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "buffer.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
