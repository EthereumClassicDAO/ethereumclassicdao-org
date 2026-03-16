"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Accordion } from "@/components/ui/Accordion";

const focusAreas = [
  {
    question: "Treasury Management",
    answer:
      "Protocol-funded treasury via EIP-1559 basefee. 100% of transaction basefees flow to the Olympia Treasury, creating a sustainable funding mechanism without token inflation. Treasury disbursements require on-chain governance approval with timelock safeguards.",
  },
  {
    question: "Governance Framework",
    answer:
      "Structured proposal lifecycle from submission through execution. Proposals pass through NFT-weighted voting, security timelock, and multi-layer safeguard checks before treasury disbursement. All outcomes are publicly disclosed and verifiable on-chain.",
  },
  {
    question: "Client Diversity",
    answer:
      "Three independent EVM client implementations ensure no single point of failure across 170+ TH/s of mining infrastructure. Fukuii (Scala) leads Olympia protocol development with 2,300+ tests and full SNAP sync. Core-geth (Go) and besu (Java) provide battle-tested stability and cross-client verification.",
  },
  {
    question: "Regulatory Compliance",
    answer:
      "Wyoming DAO LLC structure (Filing ID 2025-001671865) provides the legal framework for on-chain governance and US regulatory compliance. ETC is positioned for digital commodity classification under the CLARITY Act, while the GENIUS Act creates a pathway for regulated stablecoins on ETC's EVM — enabling a compliant ecosystem of ETF-aligned digital assets from the flagship ETC asset to protocol-based ERC-20 tokens.",
  },
];

export function WhatWeDoSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-deep py-28">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Four focus areas driving long-term development and adoption of
              Ethereum Classic.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-10">
              <Accordion items={focusAreas} />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
