import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { NavHeader } from "@/components/sections/NavHeader";
import { FooterSection } from "@/components/sections/FooterSection";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://ethereumclassicdao.org";
const TITLE =
  "Ethereum Classic DAO — Building Software & Infrastructure for Global Adoption of Ethereum Classic";
const DESCRIPTION =
  "Ethereum Classic DAO LLC builds the software and infrastructure for global adoption of Ethereum Classic — the only Proof-of-Work blockchain with native EVM smart contracts. The Olympia upgrade advances the execution layer through Glamsterdam: Foundry, Hardhat, wagmi, and every Ethereum tool works on ETC without modification. Classified as a digital commodity under the CLARITY Act, a decentralized asset under MiCA, and a recognized crypto-asset on Japan's FSA Green List.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Ethereum Classic DAO",
  },
  description: DESCRIPTION,
  keywords: [
    "Ethereum Classic",
    "ETC",
    "DAO LLC",
    "Wyoming",
    "Olympia DAO",
    "Proof-of-Work",
    "smart contracts",
    "blockchain governance",
    "digital commodity",
    "CLARITY Act",
    "GENIUS Act",
    "MiCA",
    "FSA Green List",
    "decentralized asset",
    "regulated stablecoin",
    "stablecoin platform",
    "Japan crypto-asset",
    "ETF",
    "blockchain infrastructure",
    "ECIP-1121",
    "ECIP-1122",
    "Glamsterdam",
    "Fusaka",
    "EVM upgrade",
    "EVM compatibility",
    "Dencun",
    "Pectra",
    "Solidity compatibility",
    "EIP-3198",
    "BASEFEE opcode",
  ],
  authors: [
    { name: "Cody Burns", url: "https://github.com/realcodywburns" },
    { name: "Chris Mercer", url: "https://github.com/chris-mercer" },
  ],
  creator: "Ethereum Classic DAO LLC",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "./",
    siteName: "Ethereum Classic DAO",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ethereum Classic DAO — Building Software & Infrastructure for Global Adoption",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    // Relative, so each route canonicalises to ITSELF. An absolute URL here
    // is inherited by every child route and asks Google to drop them.
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: "ETC DAO",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    email: false,
  },
  other: {
    "color-scheme": "dark light",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ethereum Classic DAO LLC",
  alternateName: "ETC DAO",
  url: "https://ethereumclassicdao.org",
  logo: "https://ethereumclassicdao.org/logo.svg",
  description:
    "Wyoming-registered DAO LLC building the software and infrastructure for global adoption of Ethereum Classic — the largest Proof-of-Work smart contract platform. Recognized across leading global regulatory frameworks in the US, EU, UK, Japan, and UAE.",
  foundingDate: "2025",
  legalName: "Ethereum Classic DAO LLC",
  address: {
    "@type": "PostalAddress",
    addressRegion: "WY",
    addressCountry: "US",
  },
  sameAs: [
    "https://x.com/ethclassicdao",
    "https://github.com/EthereumClassicDAO",
    "https://olympiadao.org",
    "https://app.olympiadao.org",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ethereum Classic DAO",
  url: "https://ethereumclassicdao.org",
  description:
    "Institutional website for Ethereum Classic DAO LLC — the Wyoming-registered DAO LLC building software, governance infrastructure, and institutional frameworks for Ethereum Classic, the largest Proof-of-Work blockchain with native EVM smart contracts.",
  publisher: {
    "@type": "Organization",
    name: "Ethereum Classic DAO LLC",
    url: "https://ethereumclassicdao.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--brand-green)] focus:px-4 focus:py-2 focus:text-[var(--background)] focus:outline-none"
          >
            Skip to main content
          </a>
          <NavHeader />
          <div id="main-content">
            {children}
          </div>
          <FooterSection />
        </ThemeProvider>
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "40b57ae4e0624a72a3b781b2961cd29a"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
