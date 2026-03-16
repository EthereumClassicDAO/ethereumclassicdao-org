import { Vote, GitBranch, Pickaxe, Scale } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const pillars = [
  {
    icon: Vote,
    title: "Governance Infrastructure",
    description:
      "On-chain proposal submission, NFT-weighted voting, and transparent execution through the Olympia Governor contract. Every governance action is publicly verifiable.",
  },
  {
    icon: GitBranch,
    title: "Protocol Development",
    description:
      "Coordinating three independent client implementations — fukuii (Scala), core-geth (Go), and besu (Java) — ensuring zero single points of failure across the network.",
  },
  {
    icon: Pickaxe,
    title: "Earn Block Rewards",
    description:
      "Secure Ethereum Classic and earn block rewards by running fukuii. GPU and ASIC compatible mining on the only Proof-of-Work network with native smart contracts.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance & Market Access",
    description:
      "Wyoming DAO LLC framework ensures US regulatory compliance. Aligned with the CLARITY Act (ETC as digital commodity) and GENIUS Act (stablecoins on ETC's EVM). Grayscale ETCG since 2017. 300+ exchange markets.",
  },
];

export function HowWeHelpSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-gradient geo-lines relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              How We Help
            </h2>
            <p className="mt-3 max-w-xl text-base text-[var(--text-muted)]">
              The legal entity behind the Olympia DAO &mdash; maintaining core
              software, critical infrastructure, and hashrate incentives while
              ensuring US regulatory compliance.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 100}>
                <div className="rounded-xl bg-[var(--bg-elevated)] border border-[rgba(255,255,255,0.06)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(0,255,174,0.08)]">
                    <p.icon
                      size={20}
                      className="text-[var(--brand-green)]"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    {p.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
