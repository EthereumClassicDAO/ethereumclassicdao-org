import { Scale, Globe, FileText } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const frameworks = [
  {
    icon: FileText,
    act: "CLARITY Act",
    jurisdiction: "United States",
    label: "Digital Commodity Profile",
    status: "badge-pending" as const,
    statusLabel: "Pending Senate",
    description:
      "Passed the US House in July 2025. ETC's PoW consensus and decentralized issuance profile positions it as a digital commodity candidate, subject to CFTC jurisdiction for derivatives, with spot markets open under existing law.",
  },
  {
    icon: Globe,
    act: "MiCA",
    jurisdiction: "European Union",
    label: "Decentralized Asset",
    status: "badge-available" as const,
    statusLabel: "In Force",
    description:
      "Fully applied December 30, 2024. ETC qualifies as a decentralized asset exempt from ART/EMT issuer obligations. MiCA-licensed CASPs may offer ETC without per-asset approval, the most favorable classification under the regulation.",
  },
  {
    icon: Scale,
    act: "GENIUS Act",
    jurisdiction: "United States",
    label: "Stablecoin Platform",
    status: "badge-available" as const,
    statusLabel: "Signed July 2025",
    description:
      "Signed into law July 18, 2025. Classic USD ($USC) by Brale is live on ETC mainnet: a 1:1 USD-backed stablecoin issued under US money transmission licensing. ETC is a demonstrated GENIUS Act-compliant stablecoin platform.",
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
            Ethereum Classic in the Regulated Era
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--text-muted)]">
            ETC sits at the intersection of three major global frameworks,
            each defined by landmark 2025 legislation: digital commodity
            candidate, decentralized asset, and live stablecoin platform.
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
