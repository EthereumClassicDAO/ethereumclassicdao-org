import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const entityCards = [
  {
    label: "Who does the work",
    value: "Ethereum Classic core developers",
    detail: "In the community's ethereumclassic organization on GitHub",
  },
  {
    label: "Legal entity",
    value: "Ethereum Classic DAO LLC",
    detail: "Wyoming DAO LLC, launched May 2025",
  },
  {
    label: "Funding today",
    value: "Funder of last resort",
    detail: "Sponsors sought",
  },
];

export function StewardshipHeroSection() {
  return (
    <section className="hero-gradient noise-overlay relative pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Stewardship
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-[var(--brand-green)]">Stewarding</span>{" "}
            Ethereum Classic&rsquo;s Core Development
          </h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            Ethereum Classic&rsquo;s core developers and community contributors
            do the day-to-day work on its public goods: the Core-Geth client,
            the network&rsquo;s bootnodes and its peer discovery lists. The work
            is done in the community&rsquo;s own repositories, and it stays there
            no matter who maintains or funds it. Ethereum Classic DAO LLC is the
            standing legal entity that maintains and funds that work: the
            counterpart a sponsor contracts with, which receives and reports the
            funding.
          </p>
          <p className="mt-4 text-base text-[var(--text-muted)]">
            Today the DAO maintains and funds that work as its funder of last resort, and
            its commitment is that the network is never again left without
            security maintenance. It does not control or lead Ethereum Classic,
            and it is not the only organization that can fund this work. What
            the work needs is steady funding from the stakeholders who depend on
            it, so that the network&rsquo;s critical software no longer rests on
            a single backer.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {entityCards.map((card, i) => (
            <FadeIn key={card.label} delay={i * 80} className="h-full">
              <div className="flex h-full min-h-[80px] flex-col justify-between rounded-lg border-l-2 border-[var(--brand-green)] bg-[var(--bg-elevated)] p-4">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  {card.label}
                </p>
                <div>
                  <p className="mt-1.5 text-sm font-bold leading-snug tracking-tight">
                    {card.value}
                  </p>
                  <p className="mt-1 text-[10px] text-[var(--text-muted)]">{card.detail}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href="#sponsor"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
            >
              Sponsor this work
              <ArrowRight size={14} aria-hidden="true" />
            </a>
            <Link
              href="/public-goods"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
            >
              What is maintained
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
