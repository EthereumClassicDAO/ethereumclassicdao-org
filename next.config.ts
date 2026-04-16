import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy .html URLs from previous site — 301 permanent to transfer search authority
      { source: "/upgrade.html",    destination: "/olympia",              permanent: true },
      { source: "/fukuii.html",     destination: "/clients",              permanent: true },
      { source: "/roadmap.html",    destination: "/olympia",              permanent: true },
      { source: "/impact.html",     destination: "/environmental-impact", permanent: true },
      { source: "/treasury.html",   destination: "/governance",           permanent: true },
      { source: "/governance.html", destination: "/governance",           permanent: true },
      { source: "/fees.html",       destination: "/governance",           permanent: true },
      { source: "/vision.html",     destination: "/about",                permanent: true },
      { source: "/timeline",         destination: "/core-development",     permanent: true },
      { source: "/timeline.html",   destination: "/core-development",     permanent: true },
    ];
  },
};

export default nextConfig;
