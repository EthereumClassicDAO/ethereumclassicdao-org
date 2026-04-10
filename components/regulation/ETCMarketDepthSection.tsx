import { Activity, Globe, BarChart3 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const fiatPairs = [
  { pair: "ETC/USD", flag: "🇺🇸", currency: "US Dollar" },
  { pair: "ETC/EUR", flag: "🇪🇺", currency: "Euro" },
  { pair: "ETC/KRW", flag: "🇰🇷", currency: "Korean Won" },
  { pair: "ETC/TRY", flag: "🇹🇷", currency: "Turkish Lira" },
  { pair: "ETC/GBP", flag: "🇬🇧", currency: "British Pound" },
  { pair: "ETC/IDR", flag: "🇮🇩", currency: "Indonesian Rupiah" },
  { pair: "ETC/INR", flag: "🇮🇳", currency: "Indian Rupee" },
  { pair: "ETC/BRL", flag: "🇧🇷", currency: "Brazilian Real" },
  { pair: "ETC/NZD", flag: "🇳🇿", currency: "New Zealand Dollar" },
  { pair: "ETC/JPY", flag: "🇯🇵", currency: "Japanese Yen" },
  { pair: "ETC/PLN", flag: "🇵🇱", currency: "Polish Zloty" },
];

const cryptoPairs = [
  "ETC/USDT",
  "ETC/USDC",
  "ETC/FDUSD",
  "ETC/BTC",
  "ETC/ETH",
  "ETC/BNB",
  "ETC/LTC",
  "ETC/DOGE",
  "ETC/XRP",
];

const stats = [
  {
    icon: Globe,
    value: "300+",
    label: "Active Exchanges",
    detail: "Global coverage",
  },
  {
    icon: BarChart3,
    value: "11",
    label: "Fiat Pairs",
    detail: "Major currencies",
  },
  {
    icon: Activity,
    value: "9",
    label: "Crypto Cross-Pairs",
    detail: "BTC, ETH, stablecoins",
  },
];

export function ETCMarketDepthSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-alt relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              ETC as a Global Payment Network
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Deep liquidity, broad fiat coverage, and 300+ exchanges make ETC
              one of the most accessible digital assets in the world, which is a
              prerequisite for stablecoin viability as a global payment rail.
            </p>
          </FadeIn>

          {/* Stat cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 80}>
                <div className="rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <s.icon size={20} className="text-[var(--brand-green)]" />
                  </div>
                  <p className="mt-4 text-3xl font-bold tracking-tight">
                    {s.value}
                  </p>
                  <p className="text-sm font-medium">{s.label}</p>
                  <p className="mt-1 text-xs text-[var(--text-subtle)]">
                    {s.detail}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Fiat pairs */}
          <FadeIn>
            <div className="mt-12">
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                Fiat Currency Pairs
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {fiatPairs.map((p) => (
                  <div
                    key={p.pair}
                    className="flex items-center gap-1.5 rounded-lg border border-[var(--divider)] bg-[var(--bg-elevated)] px-3 py-2"
                    title={p.currency}
                  >
                    <span className="text-base" aria-hidden="true">
                      {p.flag}
                    </span>
                    <span className="font-mono text-xs font-medium">
                      {p.pair}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Crypto pairs */}
          <FadeIn>
            <div className="mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                Major Crypto Cross-Pairs
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cryptoPairs.map((p) => (
                  <span
                    key={p}
                    className="rounded-lg border border-[var(--divider)] bg-[var(--bg-elevated)] px-3 py-2 font-mono text-xs font-medium"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="mt-10 border-l-2 border-[var(--brand-green)] pl-4 text-sm text-[var(--text-muted)]">
              ETC/USD spot markets have operated continuously since 2016, making
              this one of the longest-running fiat price discovery mechanisms in
              all of crypto. This depth is what makes ETC viable as a stablecoin
              settlement layer for global payments.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="text-xs text-[var(--text-subtle)]">Market data:</span>
              <a
                href="https://www.coingecko.com/en/coins/ethereum-classic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[var(--text-muted)] transition-colors hover:text-white"
              >
                CoinGecko
              </a>
              <a
                href="https://coinmarketcap.com/currencies/ethereum-classic/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[var(--text-muted)] transition-colors hover:text-white"
              >
                CoinMarketCap
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
