const infrastructure = [
  {
    category: "Major Exchanges",
    details: "Coinbase, Kraken, Binance, Robinhood, OKX, Bitstamp",
  },
  {
    category: "Institutional Custody",
    details: "Coinbase Custody, BitGo",
  },
  {
    category: "Regulated Products",
    details: "Grayscale Ethereum Classic Trust (ETCG), est. 2017",
  },
  {
    category: "Mining Infrastructure",
    details: "170+ TH/s hashrate, GPU and ASIC compatible",
  },
  {
    category: "Regulatory Status",
    details: "Wyoming DAO LLC (2025), CLARITY Act commodity candidate",
  },
];

export function InfrastructureSection() {
  return (
    <section className="border-t border-[var(--border-default)] py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-xl font-bold">
          Institutional Infrastructure
        </h2>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          The institutional ecosystem around Ethereum Classic.
        </p>

        <div className="mt-10 divide-y divide-[var(--divider)]">
          {infrastructure.map((item) => (
            <div key={item.category} className="py-4">
              <p className="text-sm font-semibold text-white">
                {item.category}
              </p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
