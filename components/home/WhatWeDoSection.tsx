"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Accordion } from "@/components/ui/Accordion";

export function WhatWeDoSection({ hashrateStr }: { hashrateStr: string }) {
  const focusAreas = [
    {
      question: "Core Client Development",
      answer:
        "We maintain and coordinate the client software that runs the Ethereum Classic network. Multiple independent implementations ensure no single point of failure in the protocol stack. We have coordinated every network upgrade on Ethereum Classic for over a decade, maintaining EVM protocol parity with Ethereum so that every Solidity contract, development tool, and institutional integration built for the EVM works on Ethereum Classic without modification. We serve as the active response to any emergency development issues that threaten network stability or security.",
    },
    {
      question: "Critical Infrastructure",
      answer:
        "Ethereum Classic DAO is the legal entity that executes the decisions of Olympia DAO. When on-chain governance directs resources, we are the organization that signs the contracts, holds the service agreements, and fulfills the reporting obligations that follow. We are the off-chain legal wrapper that translates on-chain decisions into the physical reality of the off-chain world. As the entity of record on critical infrastructure contracts, we carry the legal accountability that a decentralized protocol cannot. Public RPC endpoints, block explorers, oracle networks, and institutional custody integrations operate under agreements held by Ethereum Classic DAO. We are responsible for uptime commitments, vendor relationships, and regulatory reporting across the infrastructure the network depends on.",
    },
    {
      question: "Hashrate Incentive Alignment",
      answer: `${hashrateStr} of globally distributed mining infrastructure secures the only Proof-of-Work smart contract platform in existence. We ensure that the economics of mining ETC directly fund the protocol work that keeps the network worth mining. When Ethereum Classic faced a wave of 51% attacks in 2020, we responded with the Thanos network upgrade. When a centralized group attempted to change the mining algorithm in a way that would have disenfranchised the existing miner base, we held the line and protected ETCHash miners. We monitor network security continuously and serve as the active response layer when threats emerge. GPU and ASIC compatibility distributes the mining base across geographies and hardware supply chains, reducing concentration risk. We are also working to develop a robust fee market that supplements block rewards as ECIP-1017 monetary policy continues to reduce issuance, keeping the network viable as long-term Proof-of-Work infrastructure for miners and everything built on top of it. Miners provide the physical hardware security; we provide the protocol and policy environment that makes it worth their commitment.`,
    },
    {
      question: "Global Regulatory Navigation",
      answer:
        "Ethereum Classic DAO is a Wyoming-registered DAO LLC. We track and maintain compliance across six major regulatory frameworks spanning four continents: CLARITY Act (US, digital commodity candidate), GENIUS Act (US, stablecoin platform, signed July 2025), MiCA (EU, decentralized asset, in force Dec 2024), FSA Green List (Japan), FSMA (UK, implementation Oct 2027), and VARA (UAE). Classic USD ($USC) is a live stablecoin on ETC mainnet, aligned with both GENIUS Act and MiCA requirements. The Mined in America Act covers domestic US mining infrastructure as a federal energy asset program. We maintain this alignment actively, tracking regulatory developments across every jurisdiction and building the infrastructure that lets institutional participants operate with confidence globally.",
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
