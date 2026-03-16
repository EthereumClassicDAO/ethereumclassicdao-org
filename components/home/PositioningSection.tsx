import { Shield, Building2, Scale } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const positions = [
  {
    icon: Shield,
    title: "Proof-of-Work Security",
    description:
      "The only EVM-compatible blockchain secured by Proof-of-Work consensus. Following Ethereum\u2019s transition to Proof-of-Stake, Ethereum Classic absorbed significant mining infrastructure and stands alone at the intersection of Bitcoin\u2019s security model and Ethereum\u2019s programmability.",
  },
  {
    icon: Building2,
    title: "Institutional Infrastructure",
    description:
      "Listed on Coinbase, Kraken, Binance, and Robinhood. Institutional custody through Coinbase Custody and BitGo. Regulated securities exposure via Grayscale Ethereum Classic Trust (ETCG), established 2017.",
  },
  {
    icon: Scale,
    title: "Regulatory Clarity",
    description:
      "Organized as a Wyoming DAO LLC under the Decentralized Autonomous Organization Supplement. Positioned for classification as a digital commodity under the CLARITY Act\u2019s mature blockchain criteria.",
  },
];

export function PositioningSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-gradient geo-lines relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              Why Ethereum Classic
            </h2>
            <p className="mt-3 max-w-xl text-base text-[var(--text-muted)]">
              What makes Ethereum Classic uniquely positioned for institutional
              adoption.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {positions.map((p, i) => (
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
