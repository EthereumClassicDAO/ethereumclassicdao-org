import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { PUBLIC_GOODS } from "@/lib/public-goods";

export function MaintainedGoodsSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section aria-labelledby="what-is-maintained-heading" className="section-alt py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="what-is-maintained-heading" className="text-3xl font-bold tracking-tight">
              What Is Maintained
            </h2>
            <p className="mt-3 max-w-3xl text-base text-[var(--text-muted)]">
              The shared software and services the Ethereum Classic community
              builds and maintains in the open.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {PUBLIC_GOODS.map((good, i) => {
              const Icon = good.icon;
              return (
                <FadeIn key={good.name} delay={i * 80} className="h-full">
                  <div className="flex h-full flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                        <Icon size={20} aria-hidden="true" className="text-[var(--brand-green)]" />
                      </div>
                      <span className={good.live ? "badge-available" : "badge-pending"}>
                        {good.status}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold">{good.name}</h3>
                    <p className="mt-1 text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                      {good.kind}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                      {good.description}
                    </p>
                    {good.links.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                        {good.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
                          >
                            {link.label} <ExternalLink size={11} aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
