import { ArrowRight, Heart, Building2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function StewardshipSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="built-on-a-decade-of-commitment-heading" className="section-gradient py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
              Institutional Stewardship
            </p>
            <h2 id="built-on-a-decade-of-commitment-heading" className="mt-2 text-3xl font-bold tracking-tight">
              Built on a Decade of Commitment
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Olympia is the culmination of years of funded, principled stewardship
              by the organizations that kept Ethereum Classic&apos;s core development
              alive and moving forward.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              <a
                href="/core-development"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
              >
                View the full protocol development timeline
                <ArrowRight size={14} aria-hidden="true" />
              </a>
              <a
                href="/stewardship"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
              >
                Who maintains and funds this work today
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="mt-10 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(0,255,174,0.12)]">
                <Heart size={20} aria-hidden="true" className="text-[var(--brand-green)]" />
              </div>
              <p className="mt-4 text-lg font-semibold">The ETC Cooperative</p>
              <p className="mt-1 text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                US 501(c)(3) Non-Profit · Public Goods From 2017 · Core-Geth From January 2022
              </p>

              {/* Track record */}
              <p className="mt-5 text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                Track Record
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                The ETC Cooperative was formed by Ethereum Classic&apos;s earliest
                core contributors and backed by its largest stakeholders. It funded
                Ethereum Classic&apos;s public goods from 2017, and from January
                2022 it <strong className="text-[var(--text-primary)] font-medium">funded and maintained Core-Geth through the
                Mystique and Spiral upgrades</strong>, alongside the peer discovery
                lists, the bootnodes and the public JSON-RPC endpoints the network
                depended on.
              </p>

              {/* Transition */}
              <div className="mt-6 border-t border-[var(--divider)] pt-6">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  The Transition
                </p>
                <p className="mt-3 text-base font-semibold text-[var(--brand-green)]">
                  The operating model changes, not the commitment.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  Each organization that carried this work did so on its own
                  balance sheet, for as long as it could. Olympia was proposed to
                  give the work a funding source in the protocol itself, one that
                  would not close or leave: the early idea of a community fund,
                  written as an on-chain treasury that governance spends in public.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  The Cooperative entered maintenance mode at the end of 2024.
                  Ethereum Classic DAO LLC maintains and funds the
                  network&apos;s public goods, the Core-Geth client, the
                  bootnodes and the discovery lists, in the ethereumclassic GitHub
                  organization, with the day-to-day work done by Ethereum
                  Classic&apos;s core developers, and does so today as{" "}
                  <strong className="text-[var(--text-primary)] font-medium">funder of last resort</strong>.
                  Olympia was proposed so that the network would no longer need one.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  ECIP-1114 names Ethereum Classic DAO LLC as the legal wrapper it
                  contemplates for Olympia DAO, for the off-chain acts an on-chain
                  organization cannot perform, such as signing the engagement for an
                  audit the DAO has voted to fund. The LLC would be{" "}
                  <strong className="text-[var(--text-primary)] font-medium">downstream of Olympia DAO in authority</strong>:
                  it carries out what a passed proposal has fixed, holds no on-chain
                  role, and holds no role in Olympia until Olympia DAO is operating.
                </p>
              </div>

              {/* What opens up */}
              <div className="mt-6 border-t border-[var(--divider)] pt-6">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  What Opens Up
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  Under Olympia, funding for core development would not depend on
                  employment by any one organization. <strong className="text-[var(--text-primary)] font-medium">Work would be proposed,
                  voted on and paid in public, by the same process for every
                  contributor</strong>, from client maintenance and security response to
                  infrastructure.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  A public funding process is also what compliance-oriented
                  institutions look for before they take part:{" "}
                  <strong className="text-[var(--text-primary)] font-medium">auditable allocations, documented outcomes, no
                  backroom relationships</strong>.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href="/stewardship"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                >
                  How the Cooperative&apos;s work continues
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <div className="mt-6 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(0,255,174,0.12)]">
                <Building2 size={20} aria-hidden="true" className="text-[var(--brand-green)]" />
              </div>
              <p className="mt-4 text-lg font-semibold">Grayscale Investments</p>
              <p className="mt-1 text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                ETCG Trust · Launched 2018 · Major Institutional Donor to ETC Cooperative
              </p>

              {/* The precedent */}
              <p className="mt-5 text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                The Precedent
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                Grayscale pioneered regulated institutional access to blockchain
                networks, launching the Grayscale Ethereum Classic Trust (ETCG)
                in 2018, <strong className="text-[var(--text-primary)] font-medium">years before Bitcoin ETFs existed as a product
                category</strong>. What made this particularly forward-looking was what
                came alongside it: Grayscale became a major institutional donor
                to the ETC Cooperative, indirectly funding the core client
                development of the network underpinning their product. No other
                investment product issuer was doing this at the time. What
                Grayscale was practicing on Ethereum Classic in 2018 is now a
                recognized industry trend: <strong className="text-[var(--text-primary)] font-medium">ETF issuers funding protocol
                development, corporate treasuries reinvesting in network
                ecosystems</strong>.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                The deeper point is who ETCG represents. Grayscale is the
                product issuer — but the capital base of the trust is a{" "}
                <strong className="text-[var(--text-primary)] font-medium">globally distributed pool of retail and institutional
                holders</strong>. The funding that reached ETC&apos;s core development
                through the Cooperative did not originate from a single
                centralized entity. It originated from a decentralized body of
                investors whose capital flows through the product to the
                network. ETC&apos;s development has been backed by decentralized
                funding all along — Grayscale provided the regulated access
                vehicle that made it possible.
              </p>

              {/* With Olympia */}
              <div className="mt-6 border-t border-[var(--divider)] pt-6">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  With Olympia
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  <strong className="text-[var(--text-primary)] font-medium">Bitcoin, Litecoin and Dogecoin have no native smart
                  contract functionality</strong>, so their core development funding
                  depends on off-chain organizations, personal relationships and
                  institutional trust. Olympia proposes an on-chain path on
                  Ethereum Classic instead: once the Treasury&apos;s address is
                  published, any stakeholder could contribute to it directly,
                  without an intermediary or a preferred relationship.
                </p>
              </div>

              {/* What's next */}
              <div className="mt-6 border-t border-[var(--divider)] pt-6">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  The ETF Pipeline
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  Grayscale converted its Bitcoin and Ethereum trusts to ETFs, and
                  ETCG is a trust that could follow the same pipeline. Under
                  Olympia, <strong className="text-[var(--text-primary)] font-medium">a publicly auditable treasury would give an ETF
                  issuer an on-chain way to contribute back to the network
                  underpinning its product</strong>.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href="https://grayscale.com/funds/grayscale-ethereum-classic-trust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                >
                  View the Grayscale Ethereum Classic Trust
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
