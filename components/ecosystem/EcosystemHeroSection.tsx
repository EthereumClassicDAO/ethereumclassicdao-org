import { Code, Pickaxe, Landmark, Globe } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const audiences = [
  {
    icon: Code,
    heading: "Developers",
    description:
      "EVM compatibility through Shanghai: the frameworks, libraries and IDEs that target Ethereum work on ETC. Set Chain ID 61, compile for the Shanghai EVM, point your RPC at a public endpoint or your own node, and send legacy transactions, since ETC has no EIP-1559 fee market today. Contracts run on ETC itself, with no bridge in between.",
  },
  {
    icon: Pickaxe,
    heading: "Miners",
    description:
      "The only mature Proof-of-Work blockchain with native smart contracts. Etchash runs on both ASIC and GPU hardware, and ETC absorbed a significant share of Ethereum's mining infrastructure after the Merge. Help secure the network and earn block rewards.",
  },
  {
    icon: Landmark,
    heading: "Institutions",
    description:
      "A Grayscale trust since 2017, institutional custody at Fireblocks, Coinbase Custody and BitGo, and 300+ active markets across 20+ exchanges. ETC is a digital commodity candidate under the CLARITY Act, whose Senate cloture vote failed on September 15, 2026.",
  },
  {
    icon: Globe,
    heading: "Infrastructure",
    description:
      "Hardware, browser and mobile wallets, 300+ exchange markets, and standard EVM bridges and oracles. ETC's exchange coverage and regulatory profile make it a straightforward Proof-of-Work chain to integrate.",
  },
];

export function EcosystemHeroSection() {
  return (
    <section className="hero-gradient noise-overlay relative pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Ecosystem
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-[var(--brand-green)]">Build</span> on Ethereum Classic
          </h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            The only mature Proof-of-Work blockchain with native smart
            contracts: a production-grade infrastructure layer for developers,
            miners and institutional participants, where cryptographic security
            meets programmable finance.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <FadeIn key={a.heading} delay={i * 80}>
              <div className="flex h-full flex-col rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                  <a.icon size={20} className="text-[var(--brand-green)]" />
                </div>
                <p className="mt-4 text-sm font-semibold">{a.heading}</p>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                  {a.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
