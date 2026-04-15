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
              by the organization that has kept Ethereum Classic&apos;s core development
              alive and moving forward.
            </p>
            <a
              href="/core-development"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
            >
              View the full protocol development timeline
              <ArrowRight size={14} />
            </a>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="mt-10 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(0,255,174,0.12)]">
                <Heart size={20} className="text-[var(--brand-green)]" />
              </div>
              <p className="mt-4 text-lg font-semibold">The ETC Cooperative</p>
              <p className="mt-1 text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                US 501(c)(3) Non-Profit · Core Dev Funder Since 2017 · Every Hard Fork Since Atlantis
              </p>

              {/* Track record */}
              <p className="mt-5 text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                Track Record
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                The ETC Cooperative comprises Ethereum Classic&apos;s earliest core
                contributors and is backed by its largest stakeholders. Since
                inception, the Cooperative has funded ETC&apos;s core client
                development, <strong className="text-[var(--text-primary)] font-medium">contributed millions toward every upgrade cycle
                since Atlantis</strong>, and carried the critical infrastructure service
                contracts that kept the network running when institutional
                support was scarce. Every hard fork, every client release, and
                every cross-client coordination effort was backed by their
                balance sheet.
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
                  Olympia delivers on what the ETC Cooperative was built toward:
                  the early vision of a Community Fund, the founding ETC
                  principles of open development and programmable funding
                  mechanisms, and the original mission of decentralizing the
                  project itself. The Cooperative acted as the <strong className="text-[var(--text-primary)] font-medium">organization of
                  last resort</strong> — carrying core development and infrastructure on
                  a private balance sheet until the on-chain framework existed.
                  Olympia is that framework.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  The Ethereum Classic DAO LLC, a Wyoming-registered DAO LLC,
                  handles what on-chain governance cannot directly execute:
                  off-chain contracts, vendor agreements, regulatory reporting,
                  and milestone disbursements that require a named legal
                  counterparty. <strong className="text-[var(--text-primary)] font-medium">On-chain decisions, off-chain execution</strong> —
                  bridging the Olympia governance layer to the operational
                  requirements of a mature network.
                </p>
              </div>

              {/* What opens up */}
              <div className="mt-6 border-t border-[var(--divider)] pt-6">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  What Opens Up
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  Core development is no longer gated behind a hiring manager
                  or employment contract. Olympia opens the door to the entire
                  EVM ecosystem: <strong className="text-[var(--text-primary)] font-medium">any developer worldwide can submit a proposal,
                  bid competitively for funded work, and contribute on equal
                  terms</strong>. Proposals, funding requests, emergency response,
                  security bounties — all on-chain, auditable, and open to
                  public participation.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  ETC Cooperative continues as a foundational steward — focused
                  on treasury fund health, institutional relationships, and
                  growing the resources available to the network. Olympia is
                  coming online as global regulatory frameworks are coalescing
                  around Proof-of-Work networks simultaneously. A public,
                  transparent, on-chain funding framework is precisely what
                  compliance-oriented institutions require to engage
                  confidently: <strong className="text-[var(--text-primary)] font-medium">auditable allocations, documented outcomes, no
                  backroom relationships</strong>.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href="https://etccooperative.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                >
                  Learn more about the ETC Cooperative
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <div className="mt-6 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(0,255,174,0.12)]">
                <Building2 size={20} className="text-[var(--brand-green)]" />
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
                recognized industry trend — <strong className="text-[var(--text-primary)] font-medium">ETF issuers funding protocol
                development, corporate treasuries reinvesting in network
                ecosystems</strong>. They were years ahead of an industry that has only
                recently caught up.
              </p>

              {/* With Olympia */}
              <div className="mt-6 border-t border-[var(--divider)] pt-6">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  With Olympia
                </p>
                <p className="mt-3 text-base font-semibold text-[var(--brand-green)]">
                  Grayscale leads again.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  From pioneering the institutional off-chain funding model to
                  supporting the first Proof-of-Work network to take it fully
                  on-chain. This is only possible on Ethereum Classic.{" "}
                  <strong className="text-[var(--text-primary)] font-medium">Bitcoin, Litecoin, and Dogecoin have no native smart
                  contract functionality</strong> — their core development funding
                  depends entirely on off-chain organizations, personal
                  relationships, and institutional trust. Olympia DAO eliminates
                  that dependency. Any stakeholder worldwide can contribute
                  directly, without intermediaries, without preferred
                  relationships, and without asking permission.
                </p>
              </div>

              {/* What's next */}
              <div className="mt-6 border-t border-[var(--divider)] pt-6">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  The ETF Pipeline
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  The timing of Olympia&apos;s activation aligns directly with the
                  trust-to-ETF conversion pipeline Grayscale has established.
                  As the ETCG trust moves toward ETF structure — following the
                  precedent set with Bitcoin and Ethereum — <strong className="text-[var(--text-primary)] font-medium">a publicly auditable
                  treasury provides the on-chain mechanism for ETF product
                  issuers to contribute back to the network underpinning their
                  product</strong>. For institutions and individuals seeking a
                  tax-advantaged vehicle, the ETC Cooperative remains the
                  conduit — a US 501(c)(3) non-profit that directs contributions
                  to the Olympia Treasury. On-chain or off-chain, the
                  destination is the same open treasury.
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
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
