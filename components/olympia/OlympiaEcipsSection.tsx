import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { OLYMPIA_ECIPS } from "@/lib/olympia-ecips";
import { ecipUrl } from "@/lib/network-links";

export function OlympiaEcipsSection() {
  return (
    <section aria-labelledby="olympia-ecips-heading" className="section-alt py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 id="olympia-ecips-heading" className="text-2xl font-bold tracking-tight">
            What Olympia Proposes
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
            Olympia is a set of draft ECIPs. Some change consensus at the
            activation block, some specify the Treasury and the governance
            deployed before it, and the rest are processes that run on those
            contracts. Each is listed by its own title.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {OLYMPIA_ECIPS.map((item, i) => (
            <FadeIn key={item.number} delay={i * 50} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-[var(--brand-green)]">ECIP-{item.number}</span>
                  <span className="badge-pending">{item.stage}</span>
                </div>
                <h3 className="mt-2 text-sm font-semibold leading-snug">{item.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">{item.summary}</p>
                <a
                  href={ecipUrl(item.number)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
                >
                  Read ECIP-{item.number} <ExternalLink size={11} aria-hidden="true" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
