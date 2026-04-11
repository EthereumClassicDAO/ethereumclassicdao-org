import { Building2, Shield, FileText } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import {
  fetchEtcgStats,
  ETCG_ETC_PER_SHARE,
  ETCG_SHARES_OUTSTANDING,
} from "@/lib/api/etcg-stats";
import { fetchEtcStats } from "@/lib/api/etc-stats";
import { formatUSD } from "@/lib/format";

const mechanics = [
  {
    icon: FileText,
    title: "Structure",
    description:
      "Grantor trust, not a registered investment company. ETC flows directly as trust assets. Tax treatment passes through to shareholders. SEC filer: 10-K annually, 10-Q quarterly.",
  },
  {
    icon: Shield,
    title: "Custody",
    description:
      "Coinbase Custody Trust Company, LLC. Institutional-grade cold storage, insured. One of the largest digital asset custodians by AUM globally.",
  },
  {
    icon: Building2,
    title: "Sponsor",
    description:
      "Grayscale Investments Sponsors, LLC, a subsidiary of Digital Currency Group (DCG). SEC-reporting since 2020. Manages the largest suite of regulated digital asset investment products.",
  },
];

const fundData = [
  { label: "Max Premium", value: "458%" },
  { label: "Avg Premium", value: "98%" },
  { label: "Max Discount", value: "77%" },
  { label: "ETC per Share", value: "0.785" },
  { label: "Shares Outstanding", value: "13,993,800" },
  { label: "Inception Date", value: "May 10, 2018" },
];

export async function ETCGSection() {
  const [etcgStats, etcStats] = await Promise.all([
    fetchEtcgStats(),
    fetchEtcStats(),
  ]);

  const etcPrice = etcStats.price;
  const nav = ETCG_ETC_PER_SHARE * etcPrice;
  const premium =
    nav > 0 ? ((etcgStats.sharePrice - nav) / nav) * 100 : null;
  const aum = ETCG_SHARES_OUTSTANDING * ETCG_ETC_PER_SHARE * etcPrice;

  const premiumLabel =
    premium !== null
      ? `${premium >= 0 ? "+" : ""}${premium.toFixed(1)}%`
      : "—";
  const premiumColor =
    premium !== null && premium >= 0
      ? "text-[var(--brand-green)]"
      : "text-red-400";

  return (
    <>
      <SectionDivider variant="strong" />
      <section aria-labelledby="grayscale-ethereum-classic-trust-heading" className="section-deep relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
              Regulated Securities Exposure
            </p>
            <h2 id="grayscale-ethereum-classic-trust-heading" className="mt-2 text-3xl font-bold tracking-tight">
              Grayscale Ethereum Classic Trust
            </h2>
            <p className="mt-1 text-base text-[var(--text-muted)]">
              <span className="font-mono font-semibold">ETCG</span> · OTCQX
              Best Market · Est. May 10, 2018
            </p>
          </FadeIn>

          {/* Live data — full-width horizontal strip */}
          <FadeIn delay={80}>
            <div className="mt-8 rounded-xl border border-[var(--border-brand)] bg-[var(--bg-elevated)] p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  Live Data
                </p>
                <a
                  href="https://grayscale.com/funds/grayscale-ethereum-classic-trust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[var(--brand-green)] hover:underline underline-offset-4"
                >
                  grayscale.com →
                </a>
              </div>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">Share Price</p>
                  <p className="mt-1 text-2xl font-bold tracking-tight">{formatUSD(etcgStats.sharePrice)}</p>
                  {etcgStats.priceChangePercent !== 0 && (
                    <span className={`text-xs ${etcgStats.priceChangePercent >= 0 ? "text-[var(--brand-green)]" : "text-red-400"}`}>
                      {etcgStats.priceChangePercent >= 0 ? "+" : ""}
                      {etcgStats.priceChangePercent.toFixed(2)}%
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">NAV per Share</p>
                  <p className="mt-1 text-2xl font-bold tracking-tight">{formatUSD(nav)}</p>
                  <p className="text-[10px] text-[var(--text-subtle)]">{ETCG_ETC_PER_SHARE} ETC × {formatUSD(etcPrice)}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">Premium / Discount</p>
                  <p className={`mt-1 text-2xl font-bold tracking-tight ${premiumColor}`}>{premiumLabel}</p>
                  <p className="text-[10px] text-[var(--text-subtle)]">vs NAV</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">AUM (Est.)</p>
                  <p className="mt-1 text-2xl font-bold tracking-tight">{formatUSD(aum)}</p>
                  <p className="text-[10px] text-[var(--text-subtle)]">shares × ETC/share × price</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Fund data + no-redemption note */}
          <FadeIn delay={120}>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)] mb-4">
                  Fund Data
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {fundData.map((d) => (
                    <div key={d.label}>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">{d.label}</p>
                      <p className="mt-0.5 text-sm font-semibold">{d.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6 flex flex-col justify-between">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)] mb-4">
                  How It Trades
                </p>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  ETCG trades on OTCQX Best Market. Available at Charles Schwab,
                  Fidelity, Interactive Brokers, E*Trade, and most major US
                  brokerages. Eligible for IRA and taxable accounts.
                </p>
                <p className="mt-4 text-xs leading-relaxed text-[var(--text-subtle)]">
                  No active redemption program. Share price deviates from NAV
                  without an arbitrage mechanism. Premium or discount reflects
                  market supply and demand.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Discount / premium context */}
          {premium !== null && (
            <FadeIn delay={140}>
              <div className="mt-4 rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                  {premium < 0 ? "Discount Context" : "Premium Context"}
                </p>
                {premium < 0 ? (
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    ETCG historically traded at premiums as high as 458% during
                    the trust&apos;s early years when supply was constrained and
                    institutional demand was high. The current{" "}
                    <span className="font-semibold text-red-400">
                      {premiumLabel}
                    </span>{" "}
                    discount reflects the absence of an active redemption
                    mechanism — not a change in the underlying asset. ETF
                    conversion restores NAV parity by introducing the
                    create/redeem arbitrage that closes the gap. GBTC converted
                    at a similar discount in January 2024. ETHE followed in July
                    2024. Active protocol development and a credible ETF
                    conversion pipeline are the primary catalysts for discount
                    compression in closed-end digital asset trusts. Olympia is
                    the most significant ETC protocol upgrade in the network&apos;s
                    history.
                  </p>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    ETCG is trading at a{" "}
                    <span className="font-semibold text-[var(--brand-green)]">
                      {premiumLabel}
                    </span>{" "}
                    premium to NAV. Trust-phase premiums reflect constrained
                    supply relative to institutional demand — the same dynamic
                    GBTC and ETHE experienced before ETF conversion. No
                    redemption mechanism exists; premium or discount is
                    determined entirely by secondary market supply and demand.
                  </p>
                )}
              </div>
            </FadeIn>
          )}

          {/* Mechanics — 3-col */}
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {mechanics.map((m, i) => (
              <FadeIn key={m.title} delay={i * 60}>
                <div className="rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                      <m.icon size={16} className="text-[var(--brand-green)]" />
                    </div>
                    <p className="text-sm font-semibold">{m.title}</p>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">
                    {m.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Investment thesis */}
          <FadeIn>
            <div className="mt-4 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-6">
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Investment Thesis
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Unique regulatory surface: ETC inherits the commodity profile that Bitcoin established for Proof-of-Work networks and the programmable finance frameworks that Ethereum established for smart contract platforms. It is the only network that occupies both positions simultaneously.",
                  "Classic USD ($USC) by Brale is live on ETC mainnet: a 1:1 USD-backed stablecoin issued under US money transmission licensing. First regulated stablecoin on a Proof-of-Work EVM.",
                  "Olympia upgrade: EIP-1559 fee market with basefee-funded protocol treasury and full Fusaka EVM parity. Every current Ethereum tool, library, and framework works on ETC without modification.",
                  "Original EVM, in continuous operation since July 2015. Longer operational track record than any competing smart contract platform.",
                  "Post-Merge infrastructure: the largest Proof-of-Work network with native smart contracts, having absorbed significant Ethereum mining capacity. Retail GPU access and institutional ASIC hardware available.",
                  "300+ exchanges, 17 fiat currency pairs, continuous ETC/USD price discovery since 2016. The liquidity depth required for a credible global stablecoin settlement layer.",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]"
                      aria-hidden="true"
                    />
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
