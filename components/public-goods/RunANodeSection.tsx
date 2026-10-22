import Link from "next/link";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import {
  CORE_GETH_INSTALL_URL,
  CORE_GETH_LATEST_RELEASE_URL,
  SECURITY_EMAIL,
} from "@/lib/network-links";

export function RunANodeSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="run-a-node-heading" className="section-deep py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6">
                <h2 id="run-a-node-heading" className="text-xl font-bold tracking-tight">
                  Running a Node
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                  Core-Geth is the recommended client for Ethereum Classic. Take
                  the current release from ethereumclassic/core-geth; the
                  latest-release link always resolves to it. Releases from the
                  v1.13 series onward are published only from that repository,
                  so a node that follows the previous one does not see them. The
                  installation guide covers each platform, and how to verify
                  that a download was built by the repository&rsquo;s own
                  release workflow.
                </p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  <a
                    href={CORE_GETH_LATEST_RELEASE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    Current release <ExternalLink size={13} aria-hidden="true" />
                  </a>
                  <a
                    href={CORE_GETH_INSTALL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    Installation guide <ExternalLink size={13} aria-hidden="true" />
                  </a>
                  <Link
                    href="/clients"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    All clients <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={100} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                  <Mail size={20} aria-hidden="true" className="text-[var(--brand-green)]" />
                </div>
                <h2 className="mt-4 text-xl font-bold tracking-tight">
                  Security and Operator Contact
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                  Mining pools, exchanges and service providers reach the people
                  who maintain this work at one address. A person answers it: one
                  of the core developers who maintain the client. It also takes
                  private vulnerability reports, and subscriptions to release
                  and security announcements.
                </p>
                <a
                  href={`mailto:${SECURITY_EMAIL}`}
                  className="mt-5 inline-flex items-center font-mono text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {SECURITY_EMAIL}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
