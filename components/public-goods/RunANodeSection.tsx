import Link from "next/link";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Cite } from "@/components/ui/Cite";
import {
  CORE_GETH_DISCOVERY_FLAG_URL,
  CORE_GETH_DOWNLOADS_URL,
  CORE_GETH_LATEST_RELEASE_URL,
  CORE_GETH_UPGRADE_URL,
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
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  Core-Geth is the recommended client for Ethereum Classic: run
                  the v1.13 line. Take the current release from
                  ethereumclassic/core-geth; the latest-release link always
                  resolves to it. Releases from the v1.13 line onward are
                  published only from that repository, so a node that follows
                  the previous repository, etclabscore/core-geth, does not see
                  them. Downloads on coregeth.com has the install steps for each
                  platform, and how to verify that a download was built by the
                  repository&rsquo;s own release workflow.
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                  Every v1.12 release ships known-vulnerable code, and one of
                  those flaws was exploited against the Core-Geth v1.12 bootnodes
                  in March 2026, so every node still on a v1.12 release should
                  move to the v1.13 line:{" "}
                  <Cite href={CORE_GETH_UPGRADE_URL}>Downloads on coregeth.com</Cite>{" "}
                  has the steps for each platform, with the commands, the
                  checksums and the P2P node key rotation, which is required
                  because CVE-2026-26315 leaks bits of that key. A v1.12 node
                  that cannot move yet can{" "}
                  <Cite href={CORE_GETH_DISCOVERY_FLAG_URL}>
                    add the{" "}
                    <code className="whitespace-nowrap font-mono">--discovery.dns</code>{" "}
                    flag
                  </Cite>{" "}
                  to read the ethereumclassic organization&rsquo;s peer discovery
                  lists, a small step that closes none of the flaws the audits
                  found in the v1.12 line.
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
                    href={CORE_GETH_DOWNLOADS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    Downloads <ExternalLink size={13} aria-hidden="true" />
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
