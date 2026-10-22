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
  title: "Stewardship — Who Maintains and Funds Ethereum Classic's Public Goods",
  description:
    "Ethereum Classic's core developers and community contributors do the day-to-day work on its public goods (the Core-Geth client, the bootnodes and the peer discovery lists) in the community's own repositories. Ethereum Classic DAO LLC is the standing legal entity that maintains and funds them as the funder of last resort. How the work passed from ETCDEV to ETC Labs to the ETC Cooperative, why it needs sponsors, how to reach the core developers and maintainers, and why Olympia was proposed.",
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
