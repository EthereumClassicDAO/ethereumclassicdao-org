import { Scale, Globe, FileText } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const frameworks = [
  {
    icon: FileText,
    act: "CLARITY Act",
    jurisdiction: "United States",
    label: "Digital Commodity Profile",
    status: "badge-pending" as const,
    statusLabel: "Stalled in the Senate",
    description:
      "Passed the US House on July 17, 2025, and the Senate Banking Committee 15-9 on May 14, 2026. A Senate cloture vote failed 49-50 on September 15, 2026, so the bill has not passed the Senate. ETC's Proof-of-Work consensus and decentralized issuance position it as a digital commodity candidate under CFTC jurisdiction.",
  },
  {
    icon: Globe,
    act: "MiCA",
    jurisdiction: "European Union",
    label: "No Issuer",
    status: "badge-available" as const,
    statusLabel: "In Force",
    description:
      "Fully applied since December 30, 2024. ETC has no issuer, so the rules for asset-referenced and e-money tokens do not apply to it, and authorized crypto-asset service providers can offer it without a separate approval for the asset.",
  },
  {
    icon: Scale,
    act: "GENIUS Act",
    jurisdiction: "United States",
    label: "Stablecoin Platform",
    status: "badge-available" as const,
    statusLabel: "Signed July 2025",
    description:
      "Signed into law July 18, 2025. Classic USD ($USC) by Brale is live on ETC mainnet: a 1:1 USD-backed stablecoin issued under US money transmission licensing, which makes ETC a working GENIUS Act-aligned stablecoin platform.",
  },
];

export function RegulationHeroSection() {
  return (
    <section className="hero-gradient noise-overlay relative pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Regulatory Framework
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Ethereum Classic in the <span className="text-[var(--brand-green)]">Regulated Era</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--text-muted)]">
            ETC sits at the intersection of three major regulatory frameworks:
            it is a digital commodity candidate under the CLARITY Act, an asset
            with no issuer under MiCA, and a live stablecoin platform under the
            GENIUS Act.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
            Most digital assets fit one of these frameworks; ETC fits all three
            at once. Its Proof-of-Work consensus matches the decentralization
            profile regulators look for when they classify an asset as a
            commodity, and its EVM compatibility makes it a live platform for
            regulated stablecoin issuance. These are not separate positioning
            choices: they are the same technical properties, seen from
            different regulatory vantage points.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
            The frameworks that define ETC&apos;s position took shape in 2024 and
            2025, while ETC&apos;s technical profile dates from 2015 and 2016,
            so it was not retrofitted to match regulators. The network arrived
            at this moment as it was designed: open, immutable and without a
            central issuer.
          </p>
        </FadeIn>
      </div>

      <div className="relative z-10 mx-auto mt-16 max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {frameworks.map((f, i) => (
            <FadeIn key={f.act} delay={i * 100}>
              <div className="flex flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <f.icon size={20} className="text-[var(--brand-green)]" />
                  </div>
                  <span className={f.status}>{f.statusLabel}</span>
                </div>
                <p className="mt-4 font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                  {f.jurisdiction}
                </p>
                <h3 className="mt-1 text-base font-bold">{f.act}</h3>
                <p className="text-sm font-medium text-[var(--brand-green)]">
                  {f.label}
                </p>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                  {f.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
