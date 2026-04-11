import { Vote, GitBranch, Pickaxe, Scale } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { fetchHashrateTHs } from "@/lib/api/hashrate";

export async function HowWeHelpSection() {
  const hashrateTHs = await fetchHashrateTHs();
  const hashrateStr = `${Math.round(hashrateTHs)} TH/s`;

  const pillars = [
    {
      icon: GitBranch,
      title: "Core Client Development",
      description: `Maintaining and coordinating the client software that runs the Ethereum Classic network. Independent implementations ensure resilience and decentralization across ${hashrateStr} of mining infrastructure.`,
    },
    {
      icon: Vote,
      title: "Ecosystem Infrastructure",
      description:
        "Building and integrating the infrastructure layer, including block explorers, public RPC endpoints, oracle networks, institutional custody, and developer tooling. Full EVM compatibility means every Ethereum tool works with Ethereum Classic.",
    },
    {
      icon: Pickaxe,
      title: "Hashrate Incentives",
      description: `${hashrateStr} securing the only Proof-of-Work network with native smart contracts. GPU and ASIC compatible mining. Block rewards and tips remain untouched by the Olympia upgrade, so miners are unaffected while the network gains governance and treasury infrastructure.`,
    },
    {
      icon: Scale,
      title: "US Regulatory Compliance",
      description:
        "Wyoming DAO LLC framework ensures proper reporting and compliance with US federal and state regulatory frameworks. Positioned under the CLARITY Act (ETC as digital commodity) and the GENIUS Act (regulated stablecoins on ETC's EVM). 300+ exchange markets worldwide.",
    },
  ];
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="how-we-help-heading" className="section-gradient geo-lines relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="how-we-help-heading" className="text-3xl font-bold tracking-tight">
              How We Help
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Building the software and infrastructure that Ethereum Classic
              needs to scale from individuals to institutions, while
              ensuring US regulatory compliance.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 100}>
                <div className="rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <p.icon
                      size={20}
                      aria-hidden="true"
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
