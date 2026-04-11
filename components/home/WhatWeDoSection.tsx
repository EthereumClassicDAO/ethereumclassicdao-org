"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Accordion } from "@/components/ui/Accordion";

export function WhatWeDoSection({ hashrateStr }: { hashrateStr: string }) {
  const focusAreas = [
    {
      question: "Core Client Development",
      answer:
        "We maintain and coordinate the client software that runs the Ethereum Classic network. Multiple independent implementations ensure no single point of failure in the protocol stack. We coordinate network upgrades to maintain EVM protocol parity with Ethereum, so every Solidity contract, development tool, and institutional integration built for the EVM works on Ethereum Classic without modification. The Olympia upgrade brings EIP-1559 basefee, the BASEFEE opcode, and protocol-funded governance to ETC, completing the EVM compatibility surface.",
    },
    {
      question: "Critical Infrastructure",
      answer:
        "We build and maintain the infrastructure layer that makes Ethereum Classic accessible to developers, institutions, and end users globally. That includes public RPC endpoints, block explorers, oracle networks, institutional custody integrations, and the on-chain governance application. The Olympia treasury funds this work sustainably through EIP-1559 basefee revenue — without token inflation, block reward changes, or dependence on grants. Every transaction on the network generates protocol revenue that governance allocates to the infrastructure the network depends on.",
    },
    {
      question: "Hashrate Incentive Alignment",
      answer: `${hashrateStr} of globally distributed mining infrastructure secures the only Proof-of-Work blockchain with full EVM compatibility. We ensure that the economics of mining ETC directly fund the software that keeps it worth mining. The Olympia treasury is funded through EIP-1559 basefee — a value previously set to be destroyed. Block rewards and tips remain completely untouched. Miners receive exactly what they do today; the protocol redirects what was already being discarded into a governed treasury instead. GPU and ASIC compatibility distributes the mining base across geographies and hardware supply chains, reducing concentration risk and strengthening network security.`,
    },
    {
      question: "Global Regulatory Navigation",
      answer:
        "Ethereum Classic DAO is a Wyoming-registered DAO LLC, fully aligned with US federal and state regulatory frameworks. Our work ensures that core client software, critical infrastructure, and the broader ETC ecosystem meet the conditions for institutional and sovereign adoption in every jurisdiction. ETC's properties place it at the intersection of four major regulatory classifications: digital commodity under the CLARITY Act, decentralized asset under MiCA in the EU, recognized crypto-asset on Japan's FSA Green List, and a live GENIUS Act-compliant stablecoin platform through Classic USD ($USC). The Mined in America Act extends that positioning to domestic mining infrastructure, recognizing Proof-of-Work operations as federal energy assets. We maintain this alignment actively, not passively — tracking regulatory developments, engaging with the compliance requirements each classification creates, and building the infrastructure that lets institutional participants operate with confidence.",
    },
  ];
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="what-we-do-heading" className="section-deep py-28">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 id="what-we-do-heading" className="text-3xl font-bold tracking-tight">What We Do</h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Building everything Ethereum Classic needs for global adoption:
              from the core protocol to the infrastructure and regulatory
              framework.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-10">
              <Accordion items={focusAreas} defaultAllOpen />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
