import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import {
  CORE_GETH_DOWNLOADS_URL,
  CORE_GETH_LATEST_RELEASE_URL,
  FUKUII_DOCS_URL,
  FUKUII_LATEST_RELEASE_URL,
  FUKUII_MAINTAINER,
  FUKUII_STATUS,
} from "@/lib/network-links";

const clients = [
  {
    name: "Core-Geth",
    badges: ["Recommended"],
    body: "The recommended client: run its v1.13 line. Its releases, and its readiness for Olympia, are published from ethereumclassic/core-geth.",
    links: [
      { label: "Downloads", href: CORE_GETH_DOWNLOADS_URL },
      { label: "Current release", href: CORE_GETH_LATEST_RELEASE_URL },
    ],
  },
  {
    name: "Fukuii",
    badges: ["Alternative", FUKUII_STATUS],
    body: `An alternative to try beside Core-Geth, which its maintainers mark alpha. ${FUKUII_MAINTAINER} publishes its releases and its readiness for Olympia from chippr-robotics/fukuii.`,
    links: [
      { label: "Latest release", href: FUKUII_LATEST_RELEASE_URL },
      { label: "Documentation", href: FUKUII_DOCS_URL },
    ],
  },
];

export function OlympiaClientsSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="olympia-clients-heading" className="section-alt py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 id="olympia-clients-heading" className="text-2xl font-bold tracking-tight">
              Client Readiness
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
              No released client implements Olympia, and its activation block is
              TBD. A client&rsquo;s readiness for Olympia is what its maintainers
              publish. To choose and run a client today, see{" "}
              <Link
                href="/clients"
                className="font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
              >
                the clients page
              </Link>
              .
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {clients.map((client, i) => (
              <FadeIn key={client.name} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{client.name}</h3>
                    {client.badges.map((badge) => (
                      <span key={badge} className="badge-pending">{badge}</span>
                    ))}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{client.body}</p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    {client.links.map((link) => (
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
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
