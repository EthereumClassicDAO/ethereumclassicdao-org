import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Cite } from "@/components/ui/Cite";
import { MAINTENANCE_RECORD } from "@/lib/maintenance-record";
import { CORE_GETH_ABOUT_URL, CORE_GETH_SECURITY_URL } from "@/lib/network-links";

export function MaintenanceRecordSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="maintenance-record-heading" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="maintenance-record-heading" className="text-3xl font-bold tracking-tight">
              The Maintenance Record
            </h2>
            <p className="mt-3 max-w-3xl text-base text-[var(--text-muted)]">
              How Core-Geth&rsquo;s maintenance reached the ethereumclassic
              organization, and the work the DAO has funded since it was formed,
              each step with the record it rests on.
            </p>
          </FadeIn>

          <FadeIn delay={80}>
            <ol className="mt-10 space-y-5 border-l border-[var(--divider)] pl-6">
              {MAINTENANCE_RECORD.map((m) => (
                <li key={`${m.iso}-${m.when}`} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.6875rem] top-1.5 h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]"
                  />
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--brand-green)]">
                    <time dateTime={m.iso}>{m.when}</time>
                  </p>
                  <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
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

          <FadeIn delay={160}>
            <p className="mt-8 max-w-3xl text-sm text-[var(--text-muted)]">
              The full account is on coregeth.com:{" "}
              <Cite href={CORE_GETH_ABOUT_URL}>where Core-Geth came from, and who carries it</Cite>,
              and <Cite href={CORE_GETH_SECURITY_URL}>every release and audit</Cite>.
            </p>
            <Link
              href="/stewardship"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
            >
              Who maintains and funds the work <span aria-hidden="true">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
