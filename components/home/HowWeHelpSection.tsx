import { Vote, GitBranch, Pickaxe, Scale } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const pillars = [
  {
    icon: GitBranch,
    title: "Core Client Development",
    description:
      "Maintaining the core client software that powers the Ethereum Classic network. Multiple independent implementations ensure zero single points of failure. The Olympia hard fork introduces EIP-1559 fee markets, protocol-level treasury funding, and on-chain governance.",
  },
  {
    icon: Vote,
    title: "Critical Infrastructure",
    description:
      "On-chain governance with proposal submission, NFT-weighted voting, and transparent execution through the Olympia Governor contract. Protocol-funded treasury via EIP-1559 basefee — sustainable funding without touching block rewards.",
  },
  {
    icon: Pickaxe,
    title: "Hashrate Incentives",
    description:
      "170+ TH/s securing the only Proof-of-Work network with native smart contracts. GPU and ASIC compatible mining. Block rewards remain untouched by the Olympia upgrade — miners are unaffected while the network gains governance and treasury infrastructure.",
  },
  {
    icon: Scale,
    title: "US Regulatory Compliance",
    description:
      "Wyoming DAO LLC framework ensures proper reporting and compliance with US federal and state regulatory frameworks. Aligned with the CLARITY Act (ETC as digital commodity) and GENIUS Act (stablecoins on ETC's EVM). Grayscale ETCG since 2017. 300+ exchange markets.",
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
