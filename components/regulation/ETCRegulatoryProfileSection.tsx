import { FileText, Globe, Scale } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const profiles = [
  {
    icon: FileText,
    act: "CLARITY Act",
    jurisdiction: "United States",
    badge: "badge-pending" as const,
    badgeLabel: "Stalled in the Senate",
    tagline: "Digital Commodity Profile",
    points: [
      "Continues the original Ethereum chain, running since July 2015",
      "No foundation controlling the protocol's direction",
      "Proof-of-Work consensus matches Bitcoin's commodity profile",
      "No central issuer or controlling entity, distributed globally",
      "CFTC jurisdiction for derivatives; spot markets governed by existing law",
      "Passed the House on July 17, 2025, and the Senate Banking Committee 15-9 on May 14, 2026; a Senate cloture vote failed 49-50 on September 15, 2026",
    ],
  },
  {
    icon: Globe,
    act: "MiCA",
    jurisdiction: "European Union",
    badge: "badge-available" as const,
    badgeLabel: "In Force Dec 2024",
    tagline: "No Issuer",
    points: [
      "No issuer, so the rules for asset-referenced and e-money tokens do not apply",
      "MiCA-licensed CASPs may offer ETC without per-asset regulatory approval",
      "Decentralized Proof-of-Work leaves no single point of regulatory or operational failure",
      "New ETC is issued only through mining, on the fixed schedule ECIP-1017 sets",
      "Tradable on CASP-authorized platforms in all 27 EU member states",
      "The transitional period ended on July 1, 2026, and authorized CASPs can offer ETC",
    ],
  },
  {
    icon: Scale,
    act: "GENIUS Act",
    jurisdiction: "United States",
    badge: "badge-available" as const,
    badgeLabel: "Signed July 18, 2025",
    tagline: "Live Stablecoin Platform",
    points: [
      "Classic USD ($USC), a stablecoin aligned with the GENIUS Act, is live on ETC mainnet",
      "Issued by Brale Inc. (NMLS #2376957) under US money transmission licensing",
      "Reserves held 1:1 in segregated, regulated US bank accounts",
      "Third-party reserve attestations and SOC 2 compliance",
      "OCC national trust bank charters approved for EVM asset custody (2025–2026)",
      "ETC's EVM is a proven platform for regulated, fiat-backed token issuance",
    ],
  },
];

export function ETCRegulatoryProfileSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="etc-regulatory-profile-heading" className="section-gradient relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="etc-regulatory-profile-heading" className="text-3xl font-bold tracking-tight">
              ETC&rsquo;s Regulatory Profile
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Ethereum Classic holds a distinct position under each major
              regulatory framework, by design rather than by accident.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {profiles.map((p, i) => (
              <FadeIn key={p.act} delay={i * 100} className="h-full">
                <div className="flex flex-col h-full rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                      <p.icon size={20} className="text-[var(--brand-green)]" />
                    </div>
                    <span className={p.badge}>{p.badgeLabel}</span>
                  </div>
                  <p className="mt-4 font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                    {p.jurisdiction}
                  </p>
                  <h3 className="mt-1 text-base font-semibold">{p.act}</h3>
                  <p className="text-sm text-[var(--brand-green)]">{p.tagline}</p>
                  <ul className="mt-4 flex-1 space-y-2">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[var(--text-muted)]"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]"
                          aria-hidden="true"
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
