import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { FlagImg } from "@/components/ui/FlagImg";

const mechanics = [
  {
    label: "When energy is cheap",
    detail:
      "Mining profitability rises, driving up hash rate and energy consumption. Stranded power finds a buyer.",
  },
  {
    label: "When energy is expensive",
    detail:
      "Miners curtail operations, freeing capacity for other uses. The network self-regulates without central coordination.",
  },
  {
    label: "24/7 price discovery",
    detail:
      "With 300+ exchanges across every time zone, ETC markets never close — unlike energy futures, which halt on weekends.",
  },
  {
    label: "Local currency signals",
    detail:
      "Fiat pairs across 11 currencies let energy producers in any market price their output in local terms.",
  },
];

const signals = [
  { pair: "ETC/USD", flag: "🇺🇸", note: "Primary global energy proxy" },
  { pair: "ETC/BRL", flag: "🇧🇷", note: "Brazilian hydropower market" },
  { pair: "ETC/KRW", flag: "🇰🇷", note: "Major energy-consuming economy" },
  { pair: "ETC/JPY", flag: "🇯🇵", note: "Major energy-consuming economy" },
  { pair: "ETC/TRY", flag: "🇹🇷", note: "Emerging market energy signal" },
  { pair: "ETC/IDR", flag: "🇮🇩", note: "Southeast Asia energy market" },
];

export function ETCAsEnergyMarketSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-gradient relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
              Price Discovery
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              ETC/USD: A Global 24/7 Energy Proxy
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Mining profitability is a direct function of ETC price, block
              reward, and energy cost. ETC financial markets are therefore a
              continuous, real-time signal about energy value worldwide — the
              first always-open, globally accessible energy commodity market.
            </p>
          </FadeIn>

          {/* Mechanics grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {mechanics.map((m, i) => (
              <FadeIn key={m.label} delay={i * 70}>
                <div className="rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-5">
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                    {m.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {m.detail}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Currency signals */}
          <FadeIn delay={100}>
            <div className="mt-6 rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6">
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                Local Energy Price Signals
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {signals.map((s) => (
                  <div
                    key={s.pair}
                    className="flex items-center gap-3 rounded-lg border border-[var(--divider)] px-3 py-2.5"
                  >
                    <FlagImg emoji={s.flag} size={20} />
                    <div>
                      <p className="font-mono text-xs font-semibold">{s.pair}</p>
                      <p className="text-[10px] text-[var(--text-subtle)]">
                        {s.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Closing callout */}
          <FadeIn>
            <div className="mt-6 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-6">
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                As global energy markets mature toward 24/7 marginal-cost
                pricing, Proof-of-Work networks represent the first fully
                liquid, globally accessible, always-open energy commodity
                market. ETC/USD spot markets have operated continuously since
                2016, making them one of the longest-running fiat price
                discovery mechanisms in the asset class.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
