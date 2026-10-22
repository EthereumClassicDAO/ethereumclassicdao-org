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
  { label: "Also Compliant", value: "UK · Japan · UAE", detail: "FSMA · FSA Green List · VARA" },
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
            The original Ethereum codebase, running continuously since July
            2015 without rollbacks or rewrites. Ethereum Classic DAO LLC is the
            standing legal entity that maintains and funds the public goods its
            nodes depend on (the Core-Geth client, the network&rsquo;s bootnodes
            and its peer discovery lists) as the funder of last resort. Ethereum
            Classic&rsquo;s core developers and community contributors do the
            day-to-day work.
          </p>
          <p className="mt-4 text-base text-[var(--text-muted)]">
            Ethereum Classic inherits two distinct regulatory trajectories: the
            commodity classification path that Proof-of-Work networks
            established, and the programmable finance frameworks being built
            around smart contract platforms. Its regulatory surface is additive
            &mdash; digital commodity candidate under the CLARITY Act,
            decentralized asset under MiCA, and the only Proof-of-Work EVM with
            a live GENIUS Act-aligned stablecoin.
          </p>
          <p className="mt-3 text-base text-[var(--text-muted)]">
            Exchanges listing ETC require asset classification clarity.
            Custodians settling ETC transactions require settlement finality
            guarantees. Investment product issuers require commodity status.
            Regulated stablecoin issuers require an immutable, neutral
            settlement rail. Ethereum Classic DAO LLC provides the protocol
            engineering, infrastructure operations, and compliance alignment
            that each of these institutional categories requires.
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
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
            <Link
              href="/stewardship"
              className="inline-flex items-center gap-2 text-xs font-medium text-[var(--brand-green)] transition-colors hover:underline underline-offset-4"
            >
              How this work is maintained and funded
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/public-goods"
              className="inline-flex items-center gap-2 text-xs font-medium text-[var(--brand-green)] transition-colors hover:underline underline-offset-4"
            >
              What is maintained
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/regulation"
              className="inline-flex items-center gap-2 text-xs font-medium text-[var(--brand-green)] transition-colors hover:underline underline-offset-4"
            >
              View the regulatory landscape
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
