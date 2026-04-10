import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

const entityCards = [
  { label: "Incorporated", value: "May 2025", detail: "Wyoming DAO LLC" },
  { label: "Status", value: "Active", detail: "Good Standing" },
  { label: "Network", value: "Proof-of-Work", detail: "EVM Compatible" },
];

const regulatoryCards = [
  { label: "CLARITY Act", value: "Digital Commodity", detail: "CFTC · United States" },
  { label: "GENIUS Act", value: "Stablecoin Platform", detail: "United States" },
  { label: "MiCA", value: "Decentralized Asset", detail: "European Union" },
  { label: "FSA Green List", value: "Recognized Asset", detail: "Japan" },
];

export function MissionSection() {
  return (
    <section className="hero-gradient noise-overlay geo-lines grid-overlay relative min-h-dvh pt-40 pb-32">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Wyoming DAO LLC
          </p>
          <h1 className="mt-4 text-6xl font-bold leading-[0.9] tracking-[-0.04em] md:text-8xl">
            Ethereum Classic DAO
          </h1>
          <p className="mt-6 text-xl text-[var(--text-secondary)] md:text-2xl">
            Building the software and infrastructure for global adoption of
            Ethereum Classic, the largest Proof-of-Work smart contract platform
            with native EVM compatibility.
          </p>
          <p className="mt-4 text-base text-[var(--text-muted)]">
            Ethereum Classic is the only Proof-of-Work blockchain with full EVM
            compatibility, classified as a digital commodity under the CLARITY
            Act, a decentralized asset under MiCA, and a recognized crypto-asset
            on Japan&apos;s FSA Green List. As a GENIUS Act-compliant EVM
            platform, Ethereum Classic is positioned as the Proof-of-Work
            infrastructure layer for regulated stablecoin deployment. Ethereum
            Classic DAO LLC maintains core client software, critical
            infrastructure, and ecosystem alignment for institutional and
            sovereign adoption.
          </p>
        </FadeIn>

        {/* Entity cards */}
        <div className="mt-16 grid grid-cols-3 gap-3">
          {entityCards.map((m, i) => (
            <FadeIn key={m.label} delay={i * 80}>
              <div className="flex flex-col justify-between rounded-lg bg-[var(--bg-elevated)] border-l-2 border-[var(--brand-green)] p-4 min-h-[80px]">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  {m.label}
                </p>
                <div>
                  <p className="mt-1.5 text-sm font-bold tracking-tight leading-snug">
                    {m.value}
                  </p>
                  {m.detail && (
                    <p className="mt-1 text-[10px] text-[var(--text-muted)]">
                      {m.detail}
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Regulatory positioning cards */}
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {regulatoryCards.map((m, i) => (
            <FadeIn key={m.label} delay={300 + i * 80}>
              <div className="flex flex-col justify-between rounded-lg bg-[var(--bg-elevated)] border-l-2 border-[var(--brand-green)] p-4 min-h-[80px]">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  {m.label}
                </p>
                <div>
                  <p className="mt-1.5 text-sm font-bold tracking-tight leading-snug">
                    {m.value}
                  </p>
                  {m.detail && (
                    <p className="mt-1 text-[10px] text-[var(--text-muted)]">
                      {m.detail}
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={620}>
          <Link
            href="/regulation"
            className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-[var(--brand-green)] transition-colors hover:underline underline-offset-4"
          >
            View the regulatory landscape
            <span aria-hidden="true">→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
