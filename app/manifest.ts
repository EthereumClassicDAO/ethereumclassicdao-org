import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ethereum Classic DAO",
    short_name: "ETC DAO",
    description:
      "The organizational entity behind Ethereum Classic's Olympia DAO — building governance infrastructure for the largest Proof-of-Work smart contract platform.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f10",
    theme_color: "#00ffae",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
