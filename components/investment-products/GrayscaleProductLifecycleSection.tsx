import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const stages = [
  {
    stage: "Stage 1",
    title: "Closed-End Trust (OTCQX)",
    description:
      "Private placement creates shares → 6-month lock-up → shares trade on OTCQX. No redemption program. Price deviates from NAV.",
    status: "ETCG complete · May 2018",
    badgeClass: "badge-complete",
  },
  {
    stage: "Stage 2",
    title: "SEC Reporting & Institutional Adoption",
    description:
      "Annual 10-K and quarterly 10-Q filings. Eligible for IRA and brokerage accounts. Broad TradFi distribution. Institutional accumulation phase.",
    status: "ETCG complete · since ~2021",
    badgeClass: "badge-complete",
  },
  {
    stage: "Stage 3",
    title: "Exchange-Listed Product Conversion",
    description:
      "Application to SEC for exchange-listed product. Redemption mechanism restores NAV parity. Fee compression. Broadest retail and institutional access.",
    status: "GBTC Jan 2024 · ETHE Jul 2024",
    badgeClass: "badge-pending",
  },
];

const precedents = [
  {
    product: "GBTC",
    inception: "Sep 2013",
    conversion: "Jan 2024",
    aum: "~$60B",
  },
  {
    product: "ETHE",
    inception: "Dec 2017",
    conversion: "Jul 2024",
    aum: "~$16B (BlackRock ETHA)",
  },
  {
    product: "ETCG",
    inception: "May 2018",
    conversion: "Pending",
    aum: "—",
  },
];

export function GrayscaleProductLifecycleSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="the-grayscale-product-lifecycle-heading" className="section-alt relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="the-grayscale-product-lifecycle-heading" className="text-3xl font-bold tracking-tight">
              The Grayscale Product Lifecycle
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Grayscale has established a repeatable three-stage path from
              private placement to broadly accessible exchange-listed product.
              The same lifecycle that took GBTC from closed-end trust (2013) to
              spot Bitcoin ETF (January 2024), and ETHE from closed-end trust
              (2017) to spot Ethereum ETF (July 2024), applies structurally to
              ETCG. The conversion path is not novel &mdash; it is the same
              application process, the same regulatory framework, and the same
              legal template Grayscale has executed twice. ETCG has completed
              the first two stages. Conversion to an exchange-listed product is
              a function of Grayscale&rsquo;s prioritization and SEC application
              timing, not product eligibility, which ETCG already satisfies.
            </p>
          </FadeIn>

          {/* Stage cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stages.map((s, i) => (
              <FadeIn key={s.stage} delay={i * 100} className="h-full">
                <div className="flex flex-col h-full rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5">
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                    {s.stage}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                    {s.description}
                  </p>
                  <div className="mt-4">
                    <span className={s.badgeClass}>{s.status}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Precedent table */}
          <FadeIn>
            <div className="mt-12 overflow-x-auto rounded-xl border border-[var(--divider)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--divider)] bg-[var(--bg-elevated)]">
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--text-subtle)]">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--text-subtle)]">
                      Trust Inception
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--text-subtle)]">
                      Conversion
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--text-subtle)]">
                      AUM Post-Conversion
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--divider)] bg-[var(--bg-elevated)]">
                  {precedents.map((p) => (
                    <tr key={p.product}>
                      <td className="px-6 py-4 font-mono text-sm font-semibold">
                        {p.product}
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--text-muted)]">
                        {p.inception}
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--text-muted)]">
                        {p.conversion}
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--text-muted)]">
                        {p.aum}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="mt-8 text-sm text-[var(--text-subtle)] border-l-2 border-[var(--brand-green)] pl-4">
              Grayscale has established the regulatory and legal template for
              trust-to-ETF conversion. ETCG already satisfies Stage 2
              requirements. Conversion is a function of Grayscale&rsquo;s
              prioritization and SEC application timing.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
