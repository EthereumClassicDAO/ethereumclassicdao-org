import { FileText, Send, BadgeCheck, ShieldOff, ExternalLink, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import {
  CORE_GETH_SPONSOR_URL,
  DISCOVERY_SUPPORT_URL,
  SPONSOR_EMAIL,
  SUPPORT_URL,
} from "@/lib/network-links";

// Each public good publishes its own support page; the routes are the same.
const sponsorLinks = [
  { label: "Sponsor Core-Geth", href: CORE_GETH_SPONSOR_URL },
  { label: "Sponsorship routes and credits", href: SUPPORT_URL },
  { label: "Sponsor the peer discovery lists", href: DISCOVERY_SUPPORT_URL },
];

const points: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: FileText,
    title: "An invoiced agreement",
    body: "For organizations. A maintenance sponsorship invoiced against a purchase order, like any other vendor relationship, which is usually what a finance department needs.",
  },
  {
    icon: Send,
    title: "A direct transfer",
    body: "For anyone who prefers to send funds directly. An address is provided on request, only ever in a reply from the sponsorship address, and no donation address is published anywhere. If a large transfer is planned, send a small one first and confirm receipt at the same address.",
  },
  {
    icon: BadgeCheck,
    title: "Sponsors are credited",
    body: "A sponsoring organization is credited on the project's support page with its name, a link and the years it has contributed, and only when it wants to be. It can be credited for the specific work it funds.",
  },
  {
    icon: ShieldOff,
    title: "What it does not buy",
    body: "No influence over consensus rules, release content, or what an audit reports. Chain configuration follows the ECIP process, and a sponsor gets the same client as everyone else, on the same schedule. Being credited records a contribution; it is not an endorsement of the sponsor's products or services.",
  },
];

export function SponsorSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section
        id="sponsor"
        aria-labelledby="sponsor-heading"
        className="section-deep scroll-mt-24 py-24"
      >
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="sponsor-heading" className="text-3xl font-bold tracking-tight">
              Sponsor This Work
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-muted)]">
              If you are a stakeholder of Ethereum Classic, you rely on this
              infrastructure. Mining pools, exchanges and custodians, issuers of
              Ethereum Classic financial products, mining hardware
              manufacturers, block explorers and RPC providers all depend on a
              client that follows the network and on peer discovery that works
              every night. The developers who do the work are in place, and
              so is the standing entity that maintains and funds them. What the work needs is steady
              funding from those who depend on it.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {points.map((point, i) => {
              const Icon = point.icon;
              return (
                <FadeIn key={point.title} delay={i * 70} className="h-full">
                  <div className="flex h-full flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-5 transition-colors hover:border-[var(--border-strong)]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                      <Icon size={20} aria-hidden="true" className="text-[var(--brand-green)]" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold">{point.title}</h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                      {point.body}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={320}>
            <div className="mt-8 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-6">
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                Get in touch
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                Sponsors reach the Ethereum Classic core developers and
                maintainers at one address. Write with what you run and the
                period you want to cover.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
                <a
                  href={`mailto:${SPONSOR_EMAIL}`}
                  className="font-mono text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {SPONSOR_EMAIL}
                </a>
                {sponsorLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    {link.label}
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
