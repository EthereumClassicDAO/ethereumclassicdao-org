import type { Metadata } from "next";
import { PublicGoodsHeroSection } from "@/components/public-goods/PublicGoodsHeroSection";
import { MaintainedGoodsSection } from "@/components/public-goods/MaintainedGoodsSection";
import { StandingHomeSection } from "@/components/public-goods/StandingHomeSection";
import { RunANodeSection } from "@/components/public-goods/RunANodeSection";
import {
  PublicGoodsFaqSection,
  publicGoodsFaq,
} from "@/components/public-goods/PublicGoodsFaqSection";
import {
  CORE_GETH_DOCS_URL,
  CORE_GETH_HOMEPAGE_URL,
  CORE_GETH_REPO_URL,
  ETC_ORG_URL,
} from "@/lib/network-links";

const SITE_URL = "https://ethereumclassicdao.org";

export const metadata: Metadata = {
  title: "Ethereum Classic Public Goods: Core-Geth",
  description:
    "Core-Geth, the bootnodes and the peer discovery lists Ethereum Classic nodes depend on: where to get the current release and how to move a v1.12 node.",
  keywords: [
    "Ethereum Classic public goods",
    "Core-Geth",
    "Core-Geth release",
    "Ethereum Classic client",
    "Ethereum Classic bootnodes",
    "Ethereum Classic peer discovery",
    "discv4 DNS lists",
    "Ethereum Classic RPC endpoint",
    "ethereumclassic GitHub organization",
    "Ethereum Classic node",
    "Mordor testnet",
    "ETC infrastructure",
  ],
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ethereum Classic DAO", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Public Goods", item: `${SITE_URL}/public-goods` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: "Core-Geth",
    description:
      "The recommended execution client for Ethereum Classic: a go-ethereum downstream kept as a public good in the ethereumclassic GitHub organization, open to contributions from anyone and reviewed and maintained by Ethereum Classic's core developers.",
    url: CORE_GETH_HOMEPAGE_URL,
    sameAs: [CORE_GETH_REPO_URL, CORE_GETH_DOCS_URL],
    codeRepository: CORE_GETH_REPO_URL,
    programmingLanguage: "Go",
    maintainer: {
      "@type": "Organization",
      name: "Ethereum Classic core developers",
      url: ETC_ORG_URL,
    },
    contributor: {
      "@type": "Organization",
      name: "Ethereum Classic community contributors",
      url: CORE_GETH_REPO_URL,
    },
    funder: {
      "@type": "Organization",
      name: "Ethereum Classic DAO LLC",
      url: SITE_URL,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: publicGoodsFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];

export default function PublicGoodsPage() {
  return (
    <main>
      <PublicGoodsHeroSection />
      <MaintainedGoodsSection />
      <StandingHomeSection />
      <RunANodeSection />
      <PublicGoodsFaqSection />
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
