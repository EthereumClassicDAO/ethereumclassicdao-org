import { ArrowRight, Heart, Building2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function StewardshipSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-gradient py-28">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
              Institutional Stewardship
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Built on a Decade of Commitment
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Olympia is the culmination of years of funded, principled stewardship
              by the organization that has kept Ethereum Classic's core development
              alive and moving forward.
            </p>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="mt-10 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(0,255,174,0.12)]">
                <Heart size={20} className="text-[var(--brand-green)]" />
              </div>
              <p className="mt-4 text-lg font-semibold">
                The ETC Cooperative
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                The ETC Cooperative is a US 501(c)(3) non-profit that has funded
                Ethereum Classic's core client development for years, contributing
                millions of dollars to Ethereum Classic's client teams and the
                infrastructure that has kept the network running through every
                upgrade cycle since Atlantis. Every hard fork, every client
                release, and every cross-client coordination effort has been
                backed by their balance sheet and sustained by a small team
                that believed in ETC when institutional support was scarce.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                Olympia is what the ETC Cooperative has been building toward: a
                protocol-native funding model that does not depend on any single
                organization's continued generosity. The Olympia Treasury,
                governed on-chain by the Olympia DAO and executed by the Wyoming
                DAO LLC, replaces institutional dependency with a durable
                financial foundation that scales with network usage and addresses
                the network's needs openly and transparently. Mining operations,
                hardware manufacturers, exchanges, and individual supporters can
                now contribute directly on-chain. What once required the
                infrastructure of a dedicated non-profit now takes a single
                transaction.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                The ETC Cooperative continues as an active steward and supporter
                of Ethereum Classic, organized as a US 501(c)(3) non-profit and
                a founding participant in the open development model Olympia
                establishes. The model changes, not the commitment. Any
                developer, organization, or stakeholder across the entire EVM
                ecosystem can now contribute to and bid for Ethereum Classic's
                core development on equal terms, without fielding a team or
                managing a non-profit to do it. No backroom relationships,
                no preferred vendors, no single point of failure. This is
                Ethereum Classic's founding principles applied to its own
                development process, and the ETC Cooperative helped make it
                possible.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                The regulatory clarity now taking shape globally accelerates
                this transition. ETC's classification as a digital commodity
                under the CLARITY Act, a decentralized asset under MiCA, and a
                qualifying stablecoin platform under the GENIUS Act means the
                full spectrum of participants can engage with confidence: retail
                individuals in any jurisdiction, regulated institutions managing
                funds on behalf of clients, mining operations seeking a
                transparent development partner, and enterprises building on
                EVM infrastructure. The same network. The same open treasury.
                The same process for everyone.
              </p>
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
              <p className="mt-4 text-lg font-semibold">
                Grayscale Investments
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                Grayscale pioneered regulated institutional access to blockchain
                networks, launching the Grayscale Ethereum Classic Trust (ETCG)
                in 2018, years before Bitcoin ETFs existed as a product
                category. What made this particularly forward-looking was what
                came alongside it: Grayscale became a major institutional donor
                to the ETC Cooperative, indirectly funding the core client
                development of the network underpinning their product. No other
                investment product issuer was doing this at the time. What
                Grayscale was practicing on Ethereum Classic in 2018 is now a
                recognized trend across the industry: ETF issuers funding
                protocol development, corporate treasury strategies reinvesting
                in network ecosystems. They were years ahead of an industry
                that has only recently caught up.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                Taking that model on-chain and open-sourcing it through smart
                contracts is only possible on Ethereum Classic. Bitcoin,
                Litecoin, and Dogecoin have no native smart contract
                functionality, so their core development funding depends
                entirely on off-chain organizations, personal relationships,
                and institutional trust. Olympia DAO eliminates that
                dependency. By applying the best practices of the EVM ecosystem
                to the Proof-of-Work model, ETC becomes the first PoW network
                to fund its own core development through a fully transparent,
                permissionless, on-chain process. Any stakeholder worldwide can
                contribute directly, without intermediaries, without preferred
                relationships, and without asking permission. This is ETC's
                founding principles delivered in full: a decentralized network
                governed and funded by the same open standards it was built on.
                Grayscale saw it coming. Olympia makes it real.
              </p>
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
