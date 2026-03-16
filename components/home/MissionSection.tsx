import { FadeIn } from "@/components/ui/FadeIn";

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
    <section className="hero-gradient grid-overlay relative min-h-[70vh] pt-40 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Wyoming DAO LLC
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tighter md:text-7xl">
            Ethereum Classic DAO
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-[var(--text-secondary)] md:text-2xl">
            Building critical infrastructure for the world&rsquo;s largest
            Proof-of-Work smart contract platform.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {metrics.map((m, i) => (
            <FadeIn key={m.label} delay={i * 100}>
              <div className="rounded-lg bg-[var(--bg-elevated)] border-l-2 border-[var(--brand-green)] p-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  {m.label}
                </p>
                <p className="mt-2 text-2xl font-bold tracking-tight">
                  {m.value}
                  {m.footnote && (
                    <span className="text-[var(--text-subtle)]">*</span>
                  )}
                </p>
                {m.detail && (
                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    {m.detail}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-xs text-[var(--text-subtle)]">
          * Classification pending under the CLARITY Act
        </p>
      </div>
    </section>
  );
}
