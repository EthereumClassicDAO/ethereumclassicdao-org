import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

const entityCards = [
  { label: "Formed", value: "May 2025", detail: "Wyoming DAO LLC" },
  { label: "Status", value: "Active", detail: "Good Standing" },
  { label: "Network", value: "Proof-of-Work", detail: "EVM Compatible" },
];

export function MissionSection() {
  return (
    <section className="hero-gradient noise-overlay geo-lines grid-overlay relative min-h-dvh pt-40 pb-32">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Funder of last resort
          </p>
          <h1 className="mt-4 text-6xl font-bold leading-[0.9] tracking-[-0.04em] md:text-8xl">
            Ethereum Classic DAO
          </h1>
          <p className="mt-6 text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
            Stewarding immutable infrastructure for{" "}
            <span className="text-[var(--brand-green)]">programmable global finance</span>
          </p>
          <p className="mt-6 text-xl text-[var(--text-secondary)] md:text-2xl">
            Formed in Wyoming in May 2025, Ethereum Classic DAO LLC is the legal
            entity behind Ethereum Classic&rsquo;s public goods: the Core-Geth
            client, the network&rsquo;s bootnodes and its peer discovery lists.
            Today it maintains and funds these public goods as the funder of last
            resort, while Ethereum Classic&rsquo;s core developers and community
            contributors do the day-to-day work. Ethereum Classic DAO paid for
            the 2026 modernization of Core-Geth, which the core developers
            carried out.
          </p>
          <p className="mt-4 text-base text-[var(--text-muted)]">
            Ethereum Classic continues the original Ethereum chain, running
            since July 2015. Ethereum Classic DAO does not control or lead the network, and it is
            not the only organization that can fund work on it.
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

        <FadeIn delay={300}>
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
