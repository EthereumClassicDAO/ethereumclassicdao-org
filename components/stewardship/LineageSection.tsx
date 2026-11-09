import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Cite } from "@/components/ui/Cite";
import {
  COOPERATIVE_STATUS,
  CORE_GETH_ABOUT_URL,
  CORE_GETH_AUDIT_URL,
  CORE_GETH_SECURITY_URL,
} from "@/lib/network-links";
import { MAINTENANCE_RECORD } from "@/lib/maintenance-record";

const organizations = [
  {
    name: "ETCDEV",
    years: "2016 to 2018",
    role: "Supported Ethereum Classic's first clients, Classic Geth among them.",
    status: "Closed in 2018",
    current: false,
  },
  {
    name: "ETC Labs",
    years: "2019 to 2021",
    role: "With ETC Core, led development through the fork and rebrand of Multi-Geth to Core-Geth.",
    status: "Left the ecosystem in 2021",
    current: false,
  },
  {
    name: "ETC Cooperative",
    years: "2017 to 2026",
    role: "Funded and maintained Core-Geth from January 2022, and maintained other Ethereum Classic services.",
    status: COOPERATIVE_STATUS,
    current: false,
  },
  {
    name: "Ethereum Classic DAO",
    years: "2025 to present",
    role: "The standing legal entity that maintains and funds the client, the bootnodes and the discovery lists as the funder of last resort. Ethereum Classic DAO took up Core-Geth's maintenance in February 2026, with the day-to-day work done by Ethereum Classic's core developers.",
    status: "Current",
    current: true,
  },
];

export function LineageSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section aria-labelledby="lineage-heading" className="section-alt py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="lineage-heading" className="text-3xl font-bold tracking-tight">
              How the Work Reached Here
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-muted)]">
              Ethereum Classic&rsquo;s client and infrastructure have always
              depended on an organization willing to carry them. One organization
              after another took them on, and each eventually closed or left, so
              the work had to move each time.
            </p>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-default)]">
                    <th scope="col" className="py-2 pr-4 font-semibold">Organization</th>
                    <th scope="col" className="py-2 pr-4 font-semibold">Funded this work</th>
                    <th scope="col" className="py-2 pr-4 font-semibold">What it carried</th>
                    <th scope="col" className="py-2 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {organizations.map((org) => (
                    <tr key={org.name} className="border-b border-[var(--divider)] align-top">
                      <td className="py-3 pr-4 font-semibold">{org.name}</td>
                      <td className="py-3 pr-4 font-mono text-xs text-[var(--text-muted)]">
                        {org.years}
                      </td>
                      <td className="py-3 pr-4 text-xs leading-relaxed text-[var(--text-muted)]">
                        {org.role}
                      </td>
                      <td className="py-3">
                        <span className={org.current ? "badge-available" : "badge-pending"}>
                          {org.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 max-w-3xl text-xs leading-relaxed text-[var(--text-subtle)]">
              Each span is the years that organization funded Ethereum Classic
              public goods, which is longer than the years it funded Core-Geth.
            </p>
          </FadeIn>

          <FadeIn delay={160}>
            <p className="mt-10 max-w-3xl text-base leading-relaxed text-[var(--text-muted)]">
              The cost of that pattern is on the record. From June 2024 to
              February 2026, Core-Geth went{" "}
              <Cite href={CORE_GETH_AUDIT_URL}>
                21 months without security maintenance
              </Cite>
              , and one of the flaws that gap left open was used against the
              Core-Geth v1.12 bootnodes in March 2026. The Cooperative had entered
              maintenance mode at the end of 2024 and stopped developing the
              client in 2025, and nothing in the protocol paid for anyone to take
              the work over.
            </p>
          </FadeIn>

          <FadeIn delay={220}>
            <ol className="mt-8 space-y-4 border-l border-[var(--divider)] pl-6">
              {MAINTENANCE_RECORD.map((m) => (
                <li key={`${m.iso}-${m.when}`} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.6875rem] top-1.5 h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]"
                  />
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--brand-green)]">
                    <time dateTime={m.iso}>{m.when}</time>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                    {m.what}{" "}
                    <a
                      href={m.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-medium text-[var(--text-subtle)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      Record <ExternalLink size={10} aria-hidden="true" />
                    </a>
                  </p>
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn delay={280}>
            <p className="mt-8 text-sm text-[var(--text-muted)]">
              The full account is on coregeth.com: the{" "}
              <Cite href={CORE_GETH_ABOUT_URL}>About page</Cite> sets out the same
              lineage, and the{" "}
              <Cite href={CORE_GETH_SECURITY_URL}>security page</Cite> dates every
              release from v1.12.20 on.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
