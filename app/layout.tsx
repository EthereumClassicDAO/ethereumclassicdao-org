import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { NavHeader } from "@/components/sections/NavHeader";
import { FooterSection } from "@/components/sections/FooterSection";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Ethereum Classic DAO — Building Infrastructure for the Largest Proof-of-Work Smart Contract Platform",
    template: "%s | Ethereum Classic DAO",
  },
  description:
    "Ethereum Classic DAO LLC is the organizational entity behind Ethereum Classic's Olympia DAO, building governance infrastructure for the largest Proof-of-Work smart contract platform.",
  keywords: [
    "Ethereum Classic",
    "ETC",
    "DAO LLC",
    "Wyoming",
    "Olympia DAO",
    "Proof-of-Work",
    "smart contracts",
    "blockchain infrastructure",
    "digital commodity",
    "CLARITY Act",
  ],
  authors: [
    { name: "Cody Burns", url: "https://github.com/realcodywburns" },
    { name: "Chris Mercer", url: "https://github.com/chris-mercer" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ethereumclassicdao.org",
    siteName: "Ethereum Classic DAO",
    title:
      "Ethereum Classic DAO — Building Infrastructure for the Largest Proof-of-Work Smart Contract Platform",
    description:
      "The organizational entity behind Ethereum Classic's Olympia DAO. Wyoming DAO LLC building critical blockchain infrastructure.",
    images: [
      {
        url: "https://ethereumclassicdao.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ethereum Classic DAO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethereum Classic DAO",
    description:
      "Building governance infrastructure for the largest Proof-of-Work smart contract platform. Wyoming DAO LLC.",
    images: ["https://ethereumclassicdao.org/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://ethereumclassicdao.org"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <NavHeader />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
