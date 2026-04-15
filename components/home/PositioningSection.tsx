import Link from "next/link";
import { Shield, Building2, Scale } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const positions = [
  {
    icon: Shield,
    title: "Proof-of-Work Security",
    description:
      "The only EVM-compatible blockchain secured by Proof-of-Work consensus. Following Ethereum\u2019s transition to Proof-of-Stake, Ethereum Classic absorbed significant mining infrastructure and stands alone at the intersection of Bitcoin\u2019s security model and Ethereum\u2019s programmability.",
    cta: null,
  },
  {
    icon: Building2,
    title: "Institutional Infrastructure",
    description:
      "Listed on all major global exchanges with 300+ active markets. Institutional-grade custody from leading digital asset custodians. Regulated securities exposure via the Grayscale Ethereum Classic Trust (ETCG), available at Charles Schwab, Fidelity, and Interactive Brokers.",
    cta: { label: "View Investment Products", href: "/investment-products" },
  },
  {
    icon: Scale,
    title: "Regulatory Clarity",
    description:
      "Wyoming DAO LLC under the Decentralized Autonomous Organization Supplement. ETC inherits the commodity classification path that Proof-of-Work networks established and the programmable finance frameworks being built around smart contract platforms.",
    cta: { label: "View Regulatory Landscape", href: "/regulation" },
  },
];

export function PositioningSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="why-ethereum-classic-heading" className="section-gradient geo-lines relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="why-ethereum-classic-heading" className="text-3xl font-bold tracking-tight">
              Why Ethereum Classic
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              What makes Ethereum Classic uniquely positioned for institutional
              adoption.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {positions.map((p, i) => (
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
                  {p.cta && (
                    <Link
                      href={p.cta.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--brand-green)] transition-colors hover:underline underline-offset-4"
                    >
                      {p.cta.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
