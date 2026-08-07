import type { Metadata } from "next";
import { Suspense } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { OlympiaUpgradeSection } from "@/components/about/OlympiaUpgradeSection";
import { RoadmapSection } from "@/components/about/RoadmapSection";
import { PropertiesSection } from "@/components/ecosystem/PropertiesSection";
import { ActivationCountdown } from "@/components/ui/ActivationCountdown";
import { ExternalLink, CheckCircle2, Flame, Landmark, Cpu, Layers, Code2, ShieldCheck, Network } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Olympia Upgrade: Glamsterdam EVM Alignment, EIP-1559 Fee Market, and Protocol Treasury for Ethereum Classic",
  description:
    "Olympia is Ethereum Classic's most significant protocol upgrade. Glamsterdam-era EVM alignment closes years of tooling divergence — Foundry, Hardhat, wagmi, viem, and ethers.js work on ETC without modification. EIP-1559 fee market redirects the basefee to a protocol-managed treasury, funding open-source core development without foundation dependency. Node upgrade guides for Fukuii and Core-Geth.",
  keywords: [
    "Olympia upgrade",
    "Ethereum Classic upgrade",
    "Glamsterdam EVM",
    "EVM alignment",
    "ECIP-1121",
    "ECIP-1122",
    "EIP-1559",
    "ECIP-1111",
    "ECIP-1112",
    "protocol treasury",
    "Ethereum Classic node upgrade",
    "Fukuii",
    "Core-Geth",
    "hard fork",
    "ETC upgrade",
    "Dencun",
    "Pectra",
    "Prague",
    "Cancun",
    "EVM upgrade",
    "Solidity compatibility",
    "Foundry ETC",
    "Hardhat ETC",
    "wagmi ETC",
    "viem ETC",
    "EIP-7702",
    "EIP-2537",
    "BLS12-381",
    "transient storage",
    "EIP-1153",
    "MCOPY",
    "EIP-5656",
    "London hard fork ETC",
  ],
};

const ecips = [
  {
    ecip: "ECIP-1111",
    title: "EIP-1559 Fee Market",
    icon: Flame,
    description:
      "Unlike Ethereum where the basefee is burned, ETC redirects it to the protocol treasury — the mechanism that funds open-source core development without any foundation or donor dependency. Dynamic gas pricing delivers predictable fees for users and applications. Fully additive: legacy transactions remain valid indefinitely. Miner block rewards and tips remain completely untouched.",
    tags: ["London"],
  },
  {
    ecip: "ECIP-1112",
    title: "Protocol Treasury",
    icon: Landmark,
    description:
      "A protocol-controlled vault funded by basefee revenue and voluntary contributions — delivering on the treasury model first identified during the 2022 Mystique upgrade, when EIP-1559 was deferred pending a decision on where the basefee should flow. For the first time, institutions, developers, and network stakeholders can directly fund Ethereum Classic's core development and critical infrastructure without fielding their own team. Miners receive everything they do today: block rewards and tips remain completely untouched.",
    tags: ["Mystique", "ETC Native"],
  },
  {
    ecip: "ECIP-1121",
    title: "Glamsterdam EVM Alignment",
    icon: Cpu,
    description:
      "Building on Mystique and Spiral, ECIP-1121 fills the remaining Shanghai gaps from Spiral's partial implementation and delivers the execution-layer improvements from Dencun, Pectra, and Fusaka that are independent of Proof-of-Stake and blob data availability, then carries that work into Glamsterdam. Developers gain access to every current Ethereum tool, library, and framework. One codebase, every EVM chain.",
    tags: ["Shanghai", "Dencun", "Pectra", "Fusaka", "Glamsterdam"],
  },
  {
    ecip: "ECIP-1122",
    title: "Network Security Client Configuration",
    icon: ShieldCheck,
    description:
      "Three parameters every Olympia client enforces identically: a 1 gwei minimum effective miner tip, so miners keep an economic incentive to process transactions once the basefee is redirected; a network-authoritative gas target that overrides operator flags, closing the gas-limit manipulation vector demonstrated in 2024; and MESS re-activation, restoring the chain-reorganization resistance that was switched off at Spiral. These are chain configuration rather than consensus rules — a client that omits them provides weaker guarantees without forking.",
    tags: ["ETC Native", "MESS"],
  },
];

const clients = [
  {
    name: "Fukuii",
    language: "Scala",
    languageColor: "#DC322F",
    badges: ["Primary", "Enterprise", "ETC-native"],
    version: "TBD",
    runtime: "JDK 25+",
    disk: "500 GB+ (SNAP sync)",
    ram: "8 GB minimum",
    steps: [
      "Stop your running Fukuii node",
      "Download the Olympia-compatible release from GitHub",
      "Replace the existing binary",
      "Restart your node. Fukuii automatically follows the Olympia fork.",
    ],
    dockerImage: "ghcr.io/fukuii-project/fukuii-cli:latest",
    githubUrl: "https://github.com/fukuii-project/fukuii-cli/releases",
    docsUrl: "https://docs.fukuii.org",
  },
  {
    name: "Core-Geth",
    language: "Go",
    languageColor: "#00ADD8",
    badges: ["Maintained", "go-ethereum derivative"],
    version: "TBD",
    runtime: "Go 1.26+",
    disk: "500 GB+ (full sync)",
    ram: "8 GB minimum",
    steps: [
      "Stop your running Core-Geth node",
      "Download the Olympia-compatible release from GitHub",
      "Replace the existing binary or update via package manager",
      "Restart your node. It will automatically follow the Olympia fork.",
    ],
    dockerImage: "ghcr.io/ethereumclassic/core-geth",
    githubUrl: "https://github.com/ethereumclassic/core-geth/releases",
    docsUrl: "https://github.com/ethereumclassic/core-geth#readme",
  },
];

const faqItems = [
  {
    question: "Who is coordinating the Olympia upgrade?",
    answer:
      "Olympia is coordinated by the same developers, organizations, and community stewards who have delivered every Ethereum Classic network upgrade since 2016: Gotham, Die Hard, Defuse Difficulty Bomb, Thanos, and the full EVM compatibility series spanning Gas Reprice, Atlantis, Agharta, Phoenix, Magneto, Mystique, and Spiral. The ETC Cooperative, a US 501(c)(3) non-profit, funds Ethereum Classic's client development teams and has managed the hard fork coordination process throughout that history. Stakeholder outreach, client release sequencing, and cross-client testing are all established practice. Olympia is a significant upgrade carried forward by a team with a clean delivery record across a decade of ETC network upgrades.",
  },
  {
    question: "What role has the ETC Cooperative played, and what changes with Olympia?",
    answer:
      "The ETC Cooperative is a US 501(c)(3) non-profit that has funded Ethereum Classic's core client development for years, contributing millions of dollars to the network's client teams and infrastructure through every upgrade cycle. Every hard fork, every client release, and every cross-client coordination effort has been backed by their balance sheet. Olympia is what they were building toward: a protocol-native funding model that does not depend on any single organization's continued generosity. The Olympia Treasury, governed on-chain by the Olympia DAO and executed by the Wyoming DAO LLC, extends beyond institutional dependency with a durable financial foundation that scales with network usage. The model changes, not the commitment. The ETC Cooperative continues as an active steward, and any developer, mining operation, hardware manufacturer, or individual worldwide can now contribute directly on-chain without fielding a team or managing a non-profit to do it.",
  },
  {
    question: "What is Grayscale's role in Ethereum Classic's development?",
    answer:
      "Grayscale launched the Grayscale Ethereum Classic Trust (ETCG) in 2018, years before Bitcoin ETFs existed as a product category, and became a major institutional donor to the ETC Cooperative, indirectly funding the network's core client development at a time when no other investment product issuer was doing anything comparable. What Grayscale was practicing on Ethereum Classic in 2018 is now a recognized trend: ETF issuers funding protocol development, corporate treasury strategies reinvesting in network ecosystems. Taking that model on-chain is only possible on Ethereum Classic because ETC is the only Proof-of-Work blockchain with native smart contracts. Olympia DAO makes it permissionless, opening a direct on-chain contribution path to every holder, whether through ETCG, a direct wallet, or any future investment product.",
  },
  {
    question: "What does EVM alignment to Glamsterdam actually mean for builders?",
    answer:
      "ECIP-1121 closes years of EVM divergence in a single upgrade, filling the remaining Shanghai gaps from Spiral's partial implementation and delivering the execution-layer improvements from Dencun, Pectra, and Fusaka that are independent of Proof-of-Stake and blob data availability, and carrying that work into Glamsterdam. Before Olympia, ETC lagged behind on these EIPs, creating real friction for developers deploying across EVM chains. After Olympia, Solidity 0.8.x, Foundry, Hardhat, wagmi, viem, and ethers.js all work on ETC without modification, patching, or ETC-specific overrides. One codebase deploys to every EVM chain. ETC could not credibly claim full tooling compatibility before Olympia. After Olympia, it can. The consequences extend beyond tooling. Wallets, exchanges, oracles, and bridges make integration decisions based on EVM compatibility — ETC re-enters the default support scope of every product in that ecosystem without requiring custom work from those teams. Security auditing tools, compiler improvements, and best practices that the EVM community produces continuously now apply to ETC automatically. And the millions of Solidity developers, auditors, and protocol engineers already working on the EVM can deploy to ETC immediately, with no custom onboarding, no ETC-specific documentation, and no learning curve.",
  },
  {
    question: "How does the protocol treasury work?",
    answer:
      "The Olympia Treasury is funded by EIP-1559 basefee revenue and voluntary on-chain donations. Block rewards and tips remain completely untouched and go entirely to miners. Futarchy prediction market activity generates additional transaction volume that flows back into the treasury as basefee revenue. Any stakeholder, whether exchanges, custodians, miners, investment product issuers, or institutions holding ETC on behalf of fund shareholders, can contribute directly on-chain with no overhead. Stakeholders who prefer a traditional giving model can contribute through the ETC Cooperative, a US 501(c)(3) non-profit that accepts tax-deductible donations.",
  },
  {
    question: "How was Olympia tested before mainnet?",
    answer:
      "Olympia activates on the Mordor testnet first. Mordor is Ethereum Classic's Proof-of-Work testnet and mirrors mainnet conditions closely. Multiple independent client implementations run the Mordor fork before any mainnet activation is scheduled. Cross-client validation using the Hive integration testing framework confirms consensus compatibility across implementations. The mainnet activation block is announced with sufficient lead time for exchanges, custodians, and mining pools to schedule their upgrades. The process follows the same sequence used for every previous ETC hard fork.",
  },
  {
    question: "When is the mainnet activation block?",
    answer:
      "Olympia is targeted for mainnet activation in 2027. Olympia activates on Mordor testnet first. The mainnet activation block is announced after a successful Mordor run and a coordinated stakeholder readiness check with exchanges, mining pools, node operators, and infrastructure providers. All client implementations publish Olympia-compatible releases well before activation. The process follows the same sequence used for every previous ETC hard fork.",
  },
  {
    question: "Will my miner rewards change?",
    answer:
      "No. Block rewards and tips remain completely untouched. Olympia redirects the EIP-1559 basefee to the protocol treasury. The basefee is a value that would otherwise be destroyed and has never been part of miner compensation. Miner revenue is unchanged.",
  },
  {
    question: "What happens if I don't upgrade my node?",
    answer:
      "Nodes that are not upgraded before the activation block will stop following the canonical chain. You will need to upgrade your client and resync from the fork point. Exchanges, wallets, RPC providers, and services running outdated clients will be unable to process transactions on the post-Olympia chain. Client release announcements are published well in advance to give operators time to upgrade.",
  },
  {
    question: "Is Ethereum Classic a security or commodity after Olympia?",
    answer:
      "Olympia strengthens ETC's regulatory profile. In the EU, ETC qualifies as a decentralized asset under MiCA, in force since December 2024, exempt from per-asset issuer requirements. In Japan, ETC is recognized on the FSA Green List. In the US, ETC is positioned as a digital commodity candidate under the CLARITY Act, pending Senate passage. As a Proof-of-Work blockchain with no pre-mine, no ICO, and no foundation controlling the protocol, ETC meets the decentralization criteria each framework applies. Olympia's governance architecture reinforces this across three distinct layers: the Olympia DAO, which uses non-transferable membership NFTs for binding protocol decisions; open futarchy prediction markets, where any participant worldwide can stake on outcomes without membership; and the PoW client layer, where miners and node operators exercise governance through the client software they run. Protocol changes achieve distributed consensus when the broader network adopts them. This three-layer structure ensures no single party controls the protocol — the core decentralization criterion regulators apply across every major framework.",
  },
  {
    question: "Can I roll back if something goes wrong?",
    answer:
      "In the unlikely event of a critical issue after activation, the same client teams that have managed every ETC emergency response since 2016 would coordinate a patch release promptly. The established stakeholder communication channels, including the ETC Cooperative, client maintainers, and major exchange contacts, are the same ones used for every previous upgrade. Olympia has broader test coverage across more independent client implementations than any previous ETC hard fork, and the Mordor testnet run provides a real network validation environment before mainnet activation.",
  },
];

const forkTimeline = [
  { name: "Dencun", fullName: "Cancun-Deneb", year: "2024", eips: ["EIP-1153", "EIP-2935", "EIP-5656"] },
  { name: "Pectra", fullName: "Prague-Electra", year: "2025", eips: ["EIP-2537", "EIP-6780", "EIP-7702"] },
  { name: "Fusaka", fullName: "Fulu-Osaka", year: "2025", eips: ["EIP-7623", "EIP-7642", "EIP-7823", "EIP-7825", "EIP-7939", "EIP-7951"] },
  { name: "Glamsterdam", fullName: "Gloas-Amsterdam", year: "2026", eips: ["EIP-7975", "EIP-7997"] },
];

const evmCategories = [
  {
    title: "Gas & State Access",
    icon: Layers,
    eips: ["EIP-7623", "EIP-7702", "EIP-7823", "EIP-7825", "EIP-7883", "EIP-7935"],
    description:
      "Account delegation for EOAs, recalibrated calldata and MODEXP pricing, MODEXP input bounds, a per-transaction gas cap, and a 60M default gas limit. Aligns gas accounting with real resource cost and enables smart account patterns without protocol changes.",
  },
  {
    title: "EVM Safety",
    icon: ShieldCheck,
    eips: ["EIP-6780", "EIP-7910", "EIP-7934", "EIP-7997"],
    description:
      "SELFDESTRUCT restricted to deployment context, block size limits, RPC config method, and a deterministic CREATE2 factory at the same address as every other EVM chain. Makes contract behavior more predictable and reduces attack surface.",
  },
  {
    title: "Cryptographic Precompiles",
    icon: Cpu,
    eips: ["EIP-2537", "EIP-7951"],
    description:
      "BLS12-381 pairing operations for ZK-friendly proof verification, P256VERIFY for WebAuthn and passkey authentication. Native cryptographic primitives for privacy and identity.",
  },
  {
    title: "Execution Context",
    icon: Code2,
    eips: ["EIP-1153", "EIP-2935", "EIP-5656", "EIP-7939"],
    description:
      "MCOPY for efficient memory operations, CLZ opcode for leading-zero counting, historical block hashes in state, and transient storage TSTORE/TLOAD. Unlocks reentrancy guards, flash loans, and cross-contract patterns without persistent storage.",
  },
  {
    title: "Networking",
    icon: Network,
    eips: ["EIP-7642", "EIP-7975"],
    description:
      "eth/69 retains total difficulty for Proof-of-Work chain selection and drops receipt bloom filters; eth/70 paginates receipts for blocks above the p2p size limit. Both activate through devp2p capability negotiation rather than a hard fork.",
  },
];

const devTools = [
  {
    name: "Solidity 0.8.x+",
    description:
      "All recent compiler versions produce compatible bytecode for ETC without modification.",
  },
  {
    name: "Foundry / Hardhat",
    description:
      "Standard EVM testing and deployment toolchains work on ETC without ETC-specific forks or patches.",
  },
  {
    name: "wagmi / viem / ethers.js",
    description:
      "Standard wallet libraries and RPC types work on ETC without patching or overrides. One codebase, every EVM chain.",
  },
];

export default function UpgradePage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient relative pt-32 pb-16">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
              Olympia
            </p>
            <h1 className="mt-4 mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              The{" "}
              <span className="text-[var(--brand-green)]">Olympia</span>{" "}
              Upgrade
            </h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-[var(--text-muted)]">
              Olympia delivers three protocol changes in a single activation on
              the longest-running EVM and the only Proof-of-Work smart contract
              platform in the world.
            </p>
            <ul className="mt-6 space-y-3 text-left text-sm text-[var(--text-muted)]">
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-[var(--brand-green)]">—</span>
                <span><span className="font-semibold text-[var(--text-primary)]">Glamsterdam EVM alignment:</span> the headline change &mdash; closes years of execution-layer divergence from Ethereum in a single fork. Every Solidity compiler version, every deployment tool (Foundry, Hardhat), and every major library (wagmi, viem, ethers.js) works on ETC without modification, patching, or ETC-specific overrides. One codebase, every EVM chain. ETC could not credibly claim this before Olympia. After Olympia, it can.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-[var(--brand-green)]">—</span>
                <span><span className="font-semibold text-[var(--text-primary)]">EIP-1559 fee market:</span> predictable base fees, type 2 transaction support, and the fee market parity the entire EVM ecosystem assumes. Unlike Ethereum where the basefee is burned, ETC redirects it to the protocol treasury &mdash; funding open-source core development without any foundation or donor dependency</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-[var(--brand-green)]">—</span>
                <span><span className="font-semibold text-[var(--text-primary)]">Protocol treasury:</span> seeded by basefee revenue and voluntary contributions, governed on-chain by the Olympia DAO, funding core development, infrastructure, and long-term network security. Block rewards and tips remain completely untouched and go entirely to miners</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-[var(--brand-green)]">—</span>
                <span><span className="font-semibold text-[var(--text-primary)]">Institutional infrastructure:</span> the Proof-of-Work foundation for regulated stablecoin issuance (<a href="https://classicusd.com" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-green)] hover:opacity-80 transition-opacity">Classic USD</a>, MiCA and GENIUS Act-compliant), digital commodity classification under the CLARITY Act, and the broadest cross-jurisdictional institutional access profile of any Proof-of-Work smart contract network</span>
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Activation Status */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <Suspense fallback={
              <div className="rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-6 text-center">
                <div className="mb-4 flex justify-center gap-4">
                  {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
                    <div key={label} className="flex flex-col items-center">
                      <div className="flex h-14 w-16 items-center justify-center rounded-lg border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] font-mono text-2xl font-bold text-[var(--brand-green)]">
                        --
                      </div>
                      <span className="mt-1.5 text-xs text-[var(--text-muted)]">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--brand-green)]" />
                  <span className="text-sm font-medium text-[var(--brand-green)]">Activation Block Pending</span>
                </div>
                <p className="text-sm text-[var(--text-muted)]">Olympia is in final testing on the Mordor Testnet. Activation Block: TBD</p>
              </div>
            }>
              <ActivationCountdown />
            </Suspense>
          </FadeIn>
        </div>
      </section>

      {/* What Olympia Changes — ECIP Explainer */}
      <section className="section-alt py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-2 text-2xl font-bold tracking-tight">
              What Olympia Brings to Ethereum Classic
            </h2>
            <p className="mb-8 text-sm text-[var(--text-muted)]">
              Four protocol changes in a single activation: a fee market that funds a protocol-controlled treasury, Glamsterdam-era EVM alignment that closes years of tooling divergence so every Ethereum library and framework works on ETC without modification, client security parameters that restore chain-reorganization resistance, and the institutional access profile that follows. All of it on the only Proof-of-Work smart contract platform in the world.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2">
            {ecips.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.ecip} delay={i * 80} className="h-full">
                  <div className="flex h-full flex-col rounded-xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-elevated)] p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(0,255,174,0.08)]">
                      <Icon size={20} className="text-[var(--brand-green)]" />
                    </div>
                    <p className="font-mono text-xs text-[var(--brand-green)]">
                      {item.ecip}
                    </p>
                    <h3 className="mt-1 text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={
                            tag === "ETC Native" || tag === "Mystique"
                              ? "rounded-full border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] px-2.5 py-0.5 font-mono text-[10px] text-[var(--brand-green)]"
                              : "rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 font-mono text-[10px] text-violet-400"
                          }
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ECIP-1121 EVM Deep Dive */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="font-mono text-xs text-[var(--brand-green)] mb-1">ECIP-1121</p>
            <h2 className="mb-2 text-2xl font-bold tracking-tight">
              EVM Compatibility in Detail
            </h2>
            <p className="mb-8 text-sm text-[var(--text-muted)]">
              Three Ethereum upgrade cycles delivered to ETC in a single fork — every execution-layer improvement independent of Proof-of-Stake and blob data availability — with the first Glamsterdam EIPs alongside them.
            </p>
          </FadeIn>

          {/* Fork Timeline */}
          <FadeIn delay={80}>
            <div className="mb-8 relative">
              <div className="hidden md:block absolute top-[22px] left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-[var(--border-brand)]" />
              <div className="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between">
                {forkTimeline.map((fork, i) => (
                  <div key={fork.name} className="relative flex md:flex-col md:items-center md:w-1/3 gap-4 md:gap-0">
                    {i < forkTimeline.length - 1 && (
                      <div className="md:hidden absolute left-[17px] top-[38px] bottom-[-22px] w-px bg-[var(--border-brand)]" />
                    )}
                    <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] font-mono text-xs font-bold text-[var(--brand-green)] relative z-10">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="md:mt-4 md:text-center">
                      <p className="font-semibold text-sm">{fork.name}</p>
                      <p className="text-xs text-[var(--text-muted)]">{fork.fullName} · {fork.year}</p>
                      <div className="mt-2 flex flex-wrap gap-1 md:justify-center">
                        {fork.eips.map((eip) => (
                          <a
                            key={eip}
                            href={`https://eips.ethereum.org/EIPS/${eip.toLowerCase()}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded bg-[var(--color-violet-bg)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-violet)] transition-colors hover:bg-[var(--color-violet)]/15 hover:text-[var(--color-violet)]/80"
                          >
                            {eip}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Divergence callout */}
          <FadeIn delay={120}>
            <div className="mb-8 rounded-xl border border-[rgba(0,255,174,0.3)] bg-[rgba(0,255,174,0.05)] p-5 text-sm text-[var(--text-muted)]">
              Ethereum Classic implemented partial London EIPs in Mystique (2022) and partial Shanghai EIPs in Spiral (2024), deliberately deferring the EIP-1559 fee market for independent governance design.
              ECIP-1111 delivers the deferred London fee market EIPs. ECIP-1121 fills the remaining Shanghai gaps from Spiral&rsquo;s partial implementation and advances the execution layer through Dencun, Pectra, and Fusaka, taking every EVM improvement that is independent of Proof-of-Stake and blob data availability, and carries that work into Glamsterdam.
              Together, Olympia brings ETC current through Fusaka and opens Glamsterdam.
            </div>
          </FadeIn>

          {/* EIP Categories */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            {evmCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <FadeIn key={cat.title} delay={i * 60} className="h-full">
                  <div className="h-full rounded-xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-elevated)] p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(0,255,174,0.08)]">
                        <Icon size={16} className="text-[var(--brand-green)]" />
                      </div>
                      <h3 className="text-sm font-semibold">{cat.title}</h3>
                    </div>
                    <div className="mb-2 flex flex-wrap gap-1">
                      {cat.eips.map((eip) => (
                        <a
                          key={eip}
                          href={`https://eips.ethereum.org/EIPS/${eip.toLowerCase()}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded bg-[var(--color-violet-bg)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-violet)] transition-colors hover:bg-[var(--color-violet)]/15 hover:text-[var(--color-violet)]/80"
                        >
                          {eip}
                        </a>
                      ))}
                    </div>
                    <p className="text-xs leading-relaxed text-[var(--text-muted)]">{cat.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Blobs excluded note */}
          <FadeIn delay={160}>
            <p className="mb-8 text-xs text-[var(--text-muted)] italic">
              Blob data scaling deferred: (
              {["EIP-4844", "EIP-7516", "EIP-7691"].map((eip, i, arr) => (
                <span key={eip}>
                  <a
                    href={`https://eips.ethereum.org/EIPS/${eip.toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="not-italic rounded bg-[rgba(139,92,246,0.08)] px-1 py-0.5 font-mono text-violet-400 transition-colors hover:text-violet-300 hover:bg-[rgba(139,92,246,0.14)]"
                  >
                    {eip}
                  </a>
                  {i < arr.length - 1 && ", "}
                </span>
              ))}
              ) are deferred. Blob-based data availability is an L2 scaling approach — Ethereum Classic is a pure execution layer and does not require it at this time. Proof-of-Stake consensus changes are not applicable: Ethereum Classic is committed to Proof-of-Work long term.
            </p>
          </FadeIn>

          {/* Developer tooling */}
          <FadeIn delay={200}>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <h3 className="text-base font-semibold">Developer Tooling: Works Without Modification</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] px-3 py-0.5 text-xs font-medium text-[var(--brand-green)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
                Modern LTS Stack
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {devTools.map((tool) => (
                <div key={tool.name} className="h-full rounded-xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-elevated)] p-4">
                  <p className="mb-1 text-sm font-semibold">{tool.name}</p>
                  <p className="text-xs leading-relaxed text-[var(--text-muted)]">{tool.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 mb-4 text-sm leading-relaxed text-[var(--text-muted)]">
              The tooling compatibility above is the surface-level outcome. The deeper consequence
              is that ETC re-enters the default support scope of every product, platform, and
              community in the EVM ecosystem — without asking for special treatment.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Wallets and Exchanges",
                  body: "MetaMask, Ledger, Coinbase Wallet, and exchange settlement systems are built and tested against the current EVM spec. When ETC runs the same execution layer, adding ETC support is a configuration, not a custom integration. Every security patch and compatibility update that ships for the EVM covers ETC automatically — without anyone at those organisations doing extra work.",
                },
                {
                  title: "Oracles, Bridges, and DeFi Infrastructure",
                  body: "Chainlink, Pyth, LayerZero, and the EVM peripheral ecosystem make integration decisions based on one criterion: does the target chain run a compatible EVM? Before Olympia, the honest answer for ETC was \u201cmostly.\u201d After Olympia, it is \u201cyes.\u201d That single change unlocks integrations that were previously unavailable — not because ETC lacked demand, but because it lacked parity.",
                },
                {
                  title: "The EVM Developer Community",
                  body: "Millions of Solidity developers, auditors, and protocol engineers have spent years building on the EVM. Their knowledge, tooling, and mental models transfer to ETC without modification after Olympia. ETC does not need to recruit a parallel developer ecosystem or produce custom onboarding material. It inherits the one that already exists — immediately, on activation.",
                },
                {
                  title: "Security Tooling and Best Practices",
                  body: "Slither, Echidna, Mythril, and Foundry\u2019s fuzzing infrastructure are maintained against the current EVM spec. Running a divergent execution layer placed ETC increasingly outside the coverage these tools provided. Olympia closes that gap. Security research, compiler improvements, and audit tooling all flow to ETC automatically as they ship to the EVM — no backporting required.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-elevated)] p-5">
                  <p className="mb-2 text-sm font-semibold">{item.title}</p>
                  <p className="text-xs leading-relaxed text-[var(--text-muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Olympia Upgrade */}
      <OlympiaUpgradeSection />

      <PropertiesSection />

      {/* Roadmap */}
      <RoadmapSection />

      <SectionDivider />

      {/* Client Upgrade Guides */}
      <section className="section-alt py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-8 text-2xl font-bold tracking-tight">
              Steps to Upgrade Your Client
            </h2>
          </FadeIn>

          <div className="space-y-6">
            {clients.map((client, i) => (
              <FadeIn key={client.name} delay={i * 80}>
                <div className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-elevated)] p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold"
                      style={{
                        backgroundColor: `${client.languageColor}20`,
                        color: client.languageColor,
                      }}
                    >
                      {client.language.slice(0, 2)}
                    </span>
                    <div>
                      <h3 className="font-semibold">{client.name}</h3>
                      <span className="text-xs text-[var(--text-muted)]">
                        {client.language}
                      </span>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {client.badges.map((badge) => (
                          <span
                            key={badge}
                            className="rounded-full bg-[var(--brand-green-subtle)] px-2 py-0.5 text-[10px] font-medium text-[var(--brand-green)]"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="ml-auto rounded-full border border-[rgba(255,255,255,0.1)] px-3 py-1 font-mono text-xs text-[var(--text-muted)]">
                      Version: {client.version}
                    </span>
                  </div>

                  {/* Prerequisites */}
                  <div className="mb-4 grid grid-cols-3 gap-2">
                    <div className="rounded-lg bg-[var(--background)] px-3 py-2 text-center">
                      <p className="text-[10px] text-[var(--text-muted)]">Runtime</p>
                      <p className="text-sm font-semibold">{client.runtime}</p>
                    </div>
                    <div className="rounded-lg bg-[var(--background)] px-3 py-2 text-center">
                      <p className="text-[10px] text-[var(--text-muted)]">Disk</p>
                      <p className="text-sm font-semibold">{client.disk}</p>
                    </div>
                    <div className="rounded-lg bg-[var(--background)] px-3 py-2 text-center">
                      <p className="text-[10px] text-[var(--text-muted)]">RAM</p>
                      <p className="text-sm font-semibold">{client.ram}</p>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="space-y-2">
                    {client.steps.map((step, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-[var(--brand-green)]"
                        />
                        <p className="text-sm text-[var(--text-muted)]">{step}</p>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-4 flex gap-3">
                    <a
                      href={client.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[var(--brand-green)] transition hover:opacity-80"
                    >
                      Releases <ExternalLink size={12} />
                    </a>
                    <a
                      href={client.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[var(--brand-green)] transition hover:opacity-80"
                    >
                      Docs <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gradient py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-2 text-2xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mb-8 text-sm text-[var(--text-muted)]">
              Common questions about the Olympia upgrade, treasury funding, governance, and node operations.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <Accordion items={faqItems} defaultAllOpen />
          </FadeIn>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
