import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const brokerages = [
  "Charles Schwab",
  "Fidelity Investments",
  "E*Trade (Morgan Stanley)",
  "Interactive Brokers",
  "Webull",
  "OTC Markets Group",
];

const dataSources = [
  { label: "Yahoo Finance", ticker: "ETCG" },
  { label: "Bloomberg", ticker: "ETCG:US" },
  { label: "Seeking Alpha", ticker: "ETCG" },
  { label: "CNBC Quotes", ticker: "ETCG" },
];

export function TradFiAccessSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-alt relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              Where to Access ETCG Today
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              As an OTCQX-listed security, ETCG is available through most major
              US brokerages, the same platforms used for equities and bonds.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Brokerages */}
            <FadeIn>
              <div className="lg:col-span-2">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                  Available At
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {brokerages.map((b, i) => (
                    <FadeIn key={b} delay={i * 60}>
                      <div className="rounded-lg border border-[var(--divider)] bg-[var(--bg-elevated)] px-4 py-3 text-sm font-medium">
                        {b}
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Data sources */}
            <FadeIn delay={120}>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                  Market Data
                </p>
                <div className="mt-4 space-y-3">
                  {dataSources.map((d) => (
                    <div
                      key={d.label}
                      className="flex items-center justify-between rounded-lg border border-[var(--divider)] bg-[var(--bg-elevated)] px-4 py-3"
                    >
                      <span className="text-sm font-medium">{d.label}</span>
                      <span className="font-mono text-xs text-[var(--brand-green)]">
                        {d.ticker}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <p className="mt-10 text-xs text-[var(--text-subtle)]">
              ETCG is an OTC security. Availability varies by brokerage.
              Confirm with your broker before investing. This is not investment
              advice.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
