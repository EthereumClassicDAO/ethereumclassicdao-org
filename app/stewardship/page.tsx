import type { Metadata } from "next";
import { StewardshipHeroSection } from "@/components/stewardship/StewardshipHeroSection";
import { LineageSection } from "@/components/stewardship/LineageSection";
import { FundingGapSection } from "@/components/stewardship/FundingGapSection";
import { SponsorSection } from "@/components/stewardship/SponsorSection";
import { OlympiaResolutionSection } from "@/components/stewardship/OlympiaResolutionSection";
import {
  StewardshipFaqSection,
  stewardshipFaq,
} from "@/components/stewardship/StewardshipFaqSection";

const SITE_URL = "https://ethereumclassicdao.org";

export const metadata: Metadata = {
  title: "Who Maintains and Funds Core-Geth",
  description:
    "Ethereum Classic's core developers do the work on Core-Geth; Ethereum Classic DAO LLC maintains and funds it as the funder of last resort. How to sponsor it.",
  keywords: [
    "who maintains Core-Geth",
    "Core-Geth maintainer",
    "Ethereum Classic DAO",
    "Ethereum Classic core developers",
    "Ethereum Classic core development funding",
    "sponsor Ethereum Classic",
    "ETC Cooperative",
    "ETC Cooperative dissolution",
    "ETCDEV",
    "ETC Labs",
    "funder of last resort",
    "Ethereum Classic public goods",
    "Olympia treasury",
    "Wyoming DAO LLC",
  ],
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ethereum Classic DAO", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Stewardship", item: `${SITE_URL}/stewardship` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: stewardshipFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];

export default function StewardshipPage() {
  return (
    <main>
      <StewardshipHeroSection />
      <LineageSection />
      <FundingGapSection />
      <SponsorSection />
      <OlympiaResolutionSection />
      <StewardshipFaqSection />
      {structuredData.map((data) => (
        <script
          key={data["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </main>
  );
}
