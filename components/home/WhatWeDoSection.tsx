"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Accordion } from "@/components/ui/Accordion";

const focusAreas = [
  {
    question: "Core Client Development",
    answer:
      "Maintaining and coordinating the client software that runs the Ethereum Classic network. Independent implementations ensure no single point of failure. Coordinating network upgrades to maintain EVM protocol parity — ensuring Ethereum Classic delivers a best-in-class EVM experience with every protocol upgrade.",
  },
  {
    question: "Ecosystem Infrastructure",
    answer:
      "Building and integrating the infrastructure that makes Ethereum Classic accessible to everyone — from public RPC endpoints and block explorers to oracle networks, institutional custody integrations, and on-chain governance. Protocol-funded treasury creates sustainable funding without token inflation or block reward changes.",
  },
  {
    question: "Hashrate Incentive Alignment",
    answer:
      "170+ TH/s of mining infrastructure secures the largest Proof-of-Work network with native smart contracts. The Olympia treasury is primarily funded through EIP-1559 basefee — a value that was previously set to be destroyed — alongside voluntary contributions. Block rewards and tips remain completely untouched. Miners receive everything they do today; the protocol simply redirects what was already being discarded into a governed treasury. GPU and ASIC compatible — dual-compatibility diversifies miner composition and reduces supply chain risk.",
  },
  {
    question: "US Regulatory Compliance",
    answer:
      "Wyoming DAO LLC structure provides the legal framework for on-chain governance and US regulatory compliance. ETC is positioned for digital commodity classification under the CLARITY Act, while the GENIUS Act creates a pathway for regulated stablecoins — enabling a compliant ecosystem of digital assets on Ethereum Classic.",
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
              Building everything Ethereum Classic needs for global adoption
              &mdash; from the core protocol to the infrastructure and
              regulatory framework.
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
