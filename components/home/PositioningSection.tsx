const positions = [
  {
    title: "Proof-of-Work Security",
    description:
      "The only EVM-compatible blockchain secured by Proof-of-Work consensus. Following Ethereum\u2019s transition to Proof-of-Stake, Ethereum Classic absorbed significant mining infrastructure and stands alone at the intersection of Bitcoin\u2019s security model and Ethereum\u2019s programmability.",
  },
  {
    title: "Institutional Infrastructure",
    description:
      "Listed on Coinbase, Kraken, Binance, and Robinhood. Institutional custody through Coinbase Custody and BitGo. Regulated securities exposure via Grayscale Ethereum Classic Trust (ETCG), established 2017.",
  },
  {
    title: "Regulatory Clarity",
    description:
      "Organized as a Wyoming DAO LLC under the Decentralized Autonomous Organization Supplement. Positioned for classification as a digital commodity under the CLARITY Act\u2019s mature blockchain criteria.",
  },
];

export function PositioningSection() {
  return (
    <section className="border-t border-[var(--border-default)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">
          Why Ethereum Classic
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {positions.map((p) => (
            <div
              key={p.title}
              className="rounded-lg border border-[var(--border-default)] p-6"
            >
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
