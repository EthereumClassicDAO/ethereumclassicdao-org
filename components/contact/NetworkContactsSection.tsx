import Link from "next/link";
import { ShieldCheck, HandCoins, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SECURITY_EMAIL, SPONSOR_EMAIL } from "@/lib/network-links";

const contacts: {
  icon: LucideIcon;
  title: string;
  description: string;
  email: string;
  more: { label: string; href: string };
}[] = [
  {
    icon: ShieldCheck,
    title: "Security and operators",
    description:
      "For mining pools, exchanges and service providers, for private vulnerability reports, and to subscribe to release and security announcements. A person answers it: one of the core developers who maintain the client.",
    email: SECURITY_EMAIL,
    more: { label: "What is maintained", href: "/public-goods" },
  },
  {
    icon: HandCoins,
    title: "Sponsorship",
    description:
      "For stakeholders who depend on Ethereum Classic's client and infrastructure and want to help fund their maintenance. It reaches the Ethereum Classic core developers and maintainers.",
    email: SPONSOR_EMAIL,
    more: { label: "How sponsorship works", href: "/stewardship#sponsor" },
  },
];

export function NetworkContactsSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="network-contacts-heading" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="network-contacts-heading" className="text-xl font-bold">
              Core Developers and Maintainers
            </h2>
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              The core developers who maintain Core-Geth, the bootnodes and the
              peer discovery lists are reached on ethereumclassic.net, the
              domain for the public goods maintained in the ethereumclassic
              organization.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contacts.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeIn key={c.title} delay={i * 80} className="h-full">
                  <div className="flex h-full flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                      <Icon size={20} aria-hidden="true" className="text-[var(--brand-green)]" />
                    </div>
                    <p className="mt-4 text-base font-semibold">{c.title}</p>
                    <p className="mt-1 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                      {c.description}
                    </p>
                    <a
                      href={`mailto:${c.email}`}
                      className="mt-4 font-mono text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      {c.email}
                    </a>
                    <Link
                      href={c.more.href}
                      className="mt-2 text-xs font-medium text-[var(--text-subtle)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      {c.more.label} &rarr;
                    </Link>
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
