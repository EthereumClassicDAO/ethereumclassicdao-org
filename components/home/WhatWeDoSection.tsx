"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Accordion } from "@/components/ui/Accordion";

const focusAreas = [
  {
    question: "Core Client Development",
    answer:
      "Maintaining and coordinating the core client software that powers the Ethereum Classic network. Multiple independent implementations ensure no single point of failure. The Olympia hard fork introduces EIP-1559 fee markets, protocol-level treasury funding, and on-chain governance — the most significant upgrade in Ethereum Classic's history.",
  },
  {
    question: "Critical Infrastructure",
    answer:
      "On-chain governance infrastructure with a structured proposal lifecycle from submission through execution. Proposals pass through NFT-weighted voting, security timelock, and multi-layer safeguard checks. Protocol-funded treasury via EIP-1559 basefee — 100% of transaction basefees flow to the Olympia Treasury, creating sustainable funding without token inflation or block reward changes.",
  },
  {
    question: "Hashrate Incentive Alignment",
    answer:
      "Ensuring network security through mining economics. 170+ TH/s of mining infrastructure absorbed significant Ethereum hardware post-Merge. The Olympia upgrade preserves block rewards entirely for miners while adding treasury and governance capabilities funded by EIP-1559 basefees. GPU and ASIC compatible — the only Proof-of-Work network with native smart contracts.",
  },
  {
    question: "US Regulatory Compliance",
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
              Four pillars of the Olympia DAO &mdash; core software, critical
              infrastructure, hashrate incentives, and US regulatory compliance.
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
