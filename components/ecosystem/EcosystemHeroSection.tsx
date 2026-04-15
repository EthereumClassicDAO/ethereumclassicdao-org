import { Code, Pickaxe, Landmark, Globe } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const audiences = [
  {
    icon: Code,
    heading: "Developers",
    description:
      "Full EVM compatibility — every framework, library, and IDE that targets Ethereum works on ETC without modification. Set Chain ID 61, point your RPC at etc.rivet.link, and deploy. No forks, no modifications, no bridge risk.",
  },
  {
    icon: Pickaxe,
    heading: "Miners",
    description:
      "The only Proof-of-Work blockchain with native smart contracts. ETChash supports both ASIC and GPU hardware, absorbing significant Ethereum mining infrastructure post-Merge. Contribute to the network's security budget and earn block rewards.",
  },
  {
    icon: Landmark,
    heading: "Institutions",
    description:
      "A regulated digital asset ecosystem with Grayscale trust products since 2017, institutional custody at Fireblocks, Coinbase Custody, and BitGo, and 300+ active markets across 20+ exchanges. Positioned as a digital commodity under pending CLARITY Act classification.",
  },
  {
    icon: Globe,
    heading: "Infrastructure",
    description:
      "50+ wallet integrations, 300+ exchange markets, and EVM-native bridge and oracle architecture. ETC's global exchange coverage and PoW compliance posture make it the infrastructure integration target for the multi-chain ecosystem.",
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
            Build on Ethereum Classic
          </h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            The only Proof-of-Work blockchain with native EVM smart contracts
            — and the largest PoW smart contract platform by network hashrate.
            A production-grade infrastructure layer for developers, miners,
            and institutional participants operating at the intersection of
            cryptographic security and programmable finance.
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
