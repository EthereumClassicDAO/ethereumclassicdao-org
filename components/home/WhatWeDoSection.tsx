"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Accordion } from "@/components/ui/Accordion";

export function WhatWeDoSection() {
  const focusAreas = [
    {
      question: "Core Client Development",
      answer:
        "The technical and principled stewards of Ethereum Classic since inception, we maintain and coordinate the client software that runs the network. Every client decision, network upgrade, and emergency response has been coordinated through us — a decade of accumulated domain knowledge that drives every protocol decision. We maintain EVM protocol parity with Ethereum so that every Solidity contract, development tool, and institutional integration built for the EVM works on Ethereum Classic without modification. Multiple independent implementations ensure no single point of failure in the protocol stack. We are driven to deliver a first-in-class Proof-of-Work smart contract experience for every stakeholder the network serves.",
    },
    {
      question: "Critical Infrastructure",
      answer:
        "Public RPC endpoints, block explorers, oracle networks, and institutional custody integrations all operate under service agreements that require a named legal counterparty — that entity is us. When on-chain governance directs resources, we are the organization that signs the contracts, holds the service agreements, and fulfills the reporting obligations that follow. Vendor contracts, regulatory reporting, and institutional relationships cannot be executed by ad-hoc coordination; a mature network requires a formal structure. We are responsible for uptime commitments, vendor relationships, and regulatory reporting across the infrastructure the network depends on. As the off-chain legal wrapper for on-chain governance, we provide the organizational continuity that Ethereum Classic's second decade requires.",
    },
    {
      question: "Hashrate Incentive Alignment",
      answer: "Billions of dollars in globally distributed mining infrastructure secures Ethereum Classic, the largest Proof-of-Work smart contract platform. We ensure that the economics of mining ETC directly fund the protocol work that keeps the network worth mining. When ETC faced a wave of 51% attacks in 2020, we responded with the Thanos upgrade. When corporate interests attempted to change the mining algorithm ahead of The Merge in a way that would have disenfranchised the existing miner base, we held the line and protected ETCHash miners. We monitor network security continuously and serve as the active response layer when threats emerge. We are building the decentralized funding mechanisms that keep miner software current and PoW economically viable long-term. Domestic US mining operations are positioned under the Mined in America Act, aligned with our Wyoming DAO LLC registration and a decade of ETC core development.",
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
