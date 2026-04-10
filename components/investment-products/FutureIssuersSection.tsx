import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const btcIssuers = [
  { name: "BlackRock", ticker: "IBIT", note: "$60B+" },
  { name: "Fidelity", ticker: "FBTC", note: "" },
  { name: "VanEck", ticker: "HODL", note: "" },
  { name: "Invesco / Galaxy", ticker: "BTCO", note: "" },
  { name: "Franklin Templeton", ticker: "EZBC", note: "" },
  { name: "Ark Invest / 21Shares", ticker: "ARKB", note: "" },
  { name: "Bitwise", ticker: "BITB", note: "" },
  { name: "Grayscale", ticker: "GBTC / BTC Mini", note: "" },
  { name: "Valkyrie", ticker: "BRRR", note: "" },
  { name: "WisdomTree", ticker: "BTCW", note: "" },
];

const ethIssuers = [
  { name: "BlackRock", ticker: "ETHA", note: "$16B+" },
  { name: "Fidelity", ticker: "FETH", note: "" },
  { name: "VanEck", ticker: "ETHV", note: "" },
  { name: "Franklin Templeton", ticker: "EZET", note: "" },
  { name: "Grayscale", ticker: "ETHE / ETH Mini", note: "" },
  { name: "21Shares", ticker: "—", note: "" },
];

export function FutureIssuersSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-gradient relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              The Investment Product Landscape
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Every issuer that launched a Bitcoin or Ethereum investment product
              already has the legal infrastructure, custodial relationships, and
              regulatory precedent to launch an Ethereum Classic product.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {/* Bitcoin ETF issuers */}
            <FadeIn delay={80}>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                  Bitcoin ETF Issuers (10)
                </p>
                <div className="mt-4 space-y-2">
                  {btcIssuers.map((issuer) => (
                    <div
                      key={issuer.name}
                      className="flex items-center justify-between rounded-lg border border-[var(--divider)] bg-[var(--bg-elevated)] px-4 py-3"
                    >
                      <span className="text-sm font-medium">{issuer.name}</span>
                      <div className="flex items-center gap-3">
                        {issuer.note && (
                          <span className="text-xs text-[var(--brand-green)]">
                            {issuer.note}
                          </span>
                        )}
                        <span className="font-mono text-xs text-[var(--text-subtle)]">
                          {issuer.ticker}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Ethereum ETF issuers */}
            <FadeIn delay={160}>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                  Ethereum ETF Issuers (6)
                </p>
                <div className="mt-4 space-y-2">
                  {ethIssuers.map((issuer) => (
                    <div
                      key={issuer.name + issuer.ticker}
                      className="flex items-center justify-between rounded-lg border border-[var(--divider)] bg-[var(--bg-elevated)] px-4 py-3"
                    >
                      <span className="text-sm font-medium">{issuer.name}</span>
                      <div className="flex items-center gap-3">
                        {issuer.note && (
                          <span className="text-xs text-[var(--brand-green)]">
                            {issuer.note}
                          </span>
                        )}
                        <span className="font-mono text-xs text-[var(--text-subtle)]">
                          {issuer.ticker}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-5">
                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                    Bitcoin and Ethereum investment products accumulated $31
                    billion in net inflows in 2025. As institutional appetite
                    for digital assets deepens, the original EVM presents a
                    natural expansion opportunity for these same issuers, given
                    its PoW security, regulated stablecoin infrastructure, and
                    CLARITY Act commodity candidate status.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
