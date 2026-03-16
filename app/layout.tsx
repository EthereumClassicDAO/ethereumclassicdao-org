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
      "Ethereum Classic DAO LLC — Off-Chain Administrative Executor",
    template: "%s | Ethereum Classic DAO LLC",
  },
  description:
    "Ethereum Classic DAO LLC is a Wyoming-registered DAO LLC serving as the off-chain administrative executor for OlympiaDAO governance. Subordinate to on-chain governance per ECIP-1114.",
  keywords: [
    "Ethereum Classic",
    "ETC",
    "DAO LLC",
    "Wyoming",
    "OlympiaDAO",
    "ECIP-1114",
    "governance",
    "administrative executor",
    "treasury",
    "compliance",
  ],
  authors: [
    { name: "Cody Burns", url: "https://github.com/realcodywburns" },
    { name: "Chris Mercer", url: "https://github.com/chris-mercer" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ethereumclassicdao.org",
    siteName: "Ethereum Classic DAO LLC",
    title:
      "Ethereum Classic DAO LLC — Off-Chain Administrative Executor",
    description:
      "Wyoming-registered DAO LLC. Off-chain administrative executor subordinate to on-chain governance per ECIP-1114.",
    images: [
      {
        url: "https://ethereumclassicdao.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ethereum Classic DAO LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethereum Classic DAO LLC",
    description:
      "Wyoming DAO LLC. Off-chain administrative executor for OlympiaDAO governance.",
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
