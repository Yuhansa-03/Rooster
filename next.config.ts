import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/services", destination: "/#services", permanent: false },
      { source: "/work", destination: "/#projects", permanent: false },
      { source: "/projects", destination: "/#projects", permanent: false },
      { source: "/packages", destination: "/#services", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
    ];
  },
};

export default nextConfig;
