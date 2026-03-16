const metrics = [
  {
    label: "Incorporated",
    value: "May 2025",
    detail: "Wyoming DAO LLC",
  },
  {
    label: "Status",
    value: "Active",
    detail: "Good Standing",
  },
  {
    label: "Network",
    value: "Proof-of-Work",
    detail: "EVM Compatible",
  },
  {
    label: "Asset Class",
    value: "Digital Commodity",
    detail: null,
    footnote: true,
  },
];

export function MissionSection() {
  return (
    <section className="pt-40 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Ethereum Classic DAO
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-[var(--text-muted)]">
          Building critical infrastructure for the world&rsquo;s largest
          Proof-of-Work smart contract platform.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-subtle)]">
                {m.label}
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {m.value}
                {m.footnote && <span className="text-[var(--text-subtle)]">*</span>}
              </p>
              {m.detail && (
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                  {m.detail}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-[var(--text-subtle)]">
          * Classification pending under the CLARITY Act
        </p>
      </div>
    </section>
  );
}
