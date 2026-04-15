import { ExternalLink, MessageSquare, Github, Vote, FileText } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const channels = [
  {
    icon: MessageSquare,
    title: "X (Twitter)",
    description: "Follow for announcements, governance updates, and ecosystem news.",
    href: "https://x.com/ethclassicdao",
    cta: "Follow @ethclassicdao",
  },
  {
    icon: Github,
    title: "GitHub",
    description:
      "Open-source repositories for all Olympia governance infrastructure, client software, and tooling.",
    href: "https://github.com/EthereumClassicDAO",
    cta: "View repositories",
  },
  {
    icon: Vote,
    title: "Olympia DAO",
    description:
      "Submit proposals and participate in on-chain governance.",
    href: "https://olympiadao.org",
    cta: "Visit olympiadao.org",
  },
];

export function RegisteredAgentSection() {
  return (
    <section className="hero-gradient noise-overlay relative pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Connect
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Get Involved
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[var(--text-muted)]">
            Ethereum Classic DAO is built in public. Follow development,
            contribute to open-source infrastructure, or participate in
            governance.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6">
          {channels.map((ch, i) => (
            <FadeIn key={ch.title} delay={i * 80}>
              <a
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                  <ch.icon
                    size={20}
                    className="text-[var(--brand-green)]"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold">{ch.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                    {ch.description}
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-[var(--brand-green)] transition-colors group-hover:text-[var(--brand-green-hover)]">
                    {ch.cta}{" "}
                    <span className="ml-1 transition-transform group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="mt-16 rounded-xl bg-[var(--bg-card)] border border-[var(--divider)] p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--border-subtle)]">
                <FileText
                  size={20}
                  className="text-[var(--text-subtle)]"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text-secondary)]">
                  Legal Entity
                </p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Ethereum Classic DAO LLC &middot; Wyoming DAO LLC &middot;
                  Filing ID 2025-001671865
                </p>
                <a
                  href="https://wyobiz.wyo.gov/business/FilingDetails.aspx?eFNum=101157225123250204055197221085227098244002050082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-subtle)] transition-colors hover:text-[var(--text-primary)]"
                >
                  Wyoming Secretary of State Filing
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
