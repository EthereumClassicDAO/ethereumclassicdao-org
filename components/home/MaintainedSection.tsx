import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Cite } from "@/components/ui/Cite";
import { PUBLIC_GOODS } from "@/lib/public-goods";
import {
  ETC_ORG_URL,
  NETWORK_DASHBOARD_STATUS,
  PUBLIC_RPC_STATUS,
  SECURITY_EMAIL,
  SPONSOR_EMAIL,
} from "@/lib/network-links";

export function MaintainedSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section aria-labelledby="what-we-maintain-heading" className="section-alt py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="what-we-maintain-heading" className="text-3xl font-bold tracking-tight">
              What We Maintain
            </h2>
            <p className="mt-3 max-w-3xl text-base text-[var(--text-muted)]">
              The public goods Ethereum Classic nodes depend on, kept in public
              repositories in the{" "}
              <Cite href={ETC_ORG_URL}>ethereumclassic GitHub organization</Cite>.
              Ethereum Classic&rsquo;s core developers and community contributors
              do the day-to-day work, and Ethereum Classic DAO LLC maintains and
              funds that work as the funder of last resort.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PUBLIC_GOODS.map((good, i) => {
              const Icon = good.icon;
              const link = good.repo
                ? { label: good.repo.replace("https://github.com/", ""), href: good.repo }
                : good.links[0];
              return (
                <FadeIn key={good.name} delay={i * 60} className="h-full">
                  <div className="flex h-full flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                        <Icon size={20} aria-hidden="true" className="text-[var(--brand-green)]" />
                      </div>
                      <span className={good.live ? "badge-available" : "badge-pending"}>{good.status}</span>
                    </div>
                    <h3 className="mt-4 text-sm font-semibold">{good.name}</h3>
                    <p className="mt-1 text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                      {good.kind}
                    </p>
                    {link && (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
                      >
                        {link.label} <ExternalLink size={11} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={200}>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
              <span className="font-semibold text-[var(--text-primary)]">ethereumclassic.net</span>{" "}
              is the domain for these public goods. The peer discovery trees are
              published under it, as under ethclassic.net and
              ethereumclassic.network, and it carries the{" "}
              <a href={`mailto:${SECURITY_EMAIL}`} className="underline underline-offset-2 transition-colors hover:text-[var(--text-primary)]">
                {SECURITY_EMAIL}
              </a>{" "}
              and{" "}
              <a href={`mailto:${SPONSOR_EMAIL}`} className="underline underline-offset-2 transition-colors hover:text-[var(--text-primary)]">
                {SPONSOR_EMAIL}
              </a>{" "}
              addresses. The public endpoints are{" "}
              <span className="whitespace-nowrap">{`rpc.ethereumclassic.net (${PUBLIC_RPC_STATUS.toLowerCase()})`}</span>{" "}
              and the network dashboard is{" "}
              <span className="whitespace-nowrap">{`nodes.ethereumclassic.net (${NETWORK_DASHBOARD_STATUS.toLowerCase()})`}</span>.
            </p>
            <Link
              href="/public-goods"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
            >
              Each public good in full <span aria-hidden="true">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
