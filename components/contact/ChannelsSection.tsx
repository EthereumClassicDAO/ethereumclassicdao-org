import { Globe, Wallet, Vote, Github } from "lucide-react";

const channels = [
  {
    icon: Globe,
    label: "OlympiaDAO",
    description: "DAO governance landing page",
    href: "https://olympiadao.org",
  },
  {
    icon: Wallet,
    label: "Olympia Treasury",
    description: "Treasury monitoring dashboard",
    href: "https://olympiatreasury.org",
  },
  {
    icon: Vote,
    label: "Governance App",
    description: "Proposal submission, voting, and execution",
    href: "https://app.olympiadao.org",
  },
  {
    icon: Github,
    label: "GitHub",
    description: "Open source repositories",
    href: "https://github.com/EthereumClassicDAO",
  },
];

export function ChannelsSection() {
  return (
    <section className="border-t border-[var(--border-default)] bg-[var(--bg-surface)] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-xl font-semibold">Official Channels</h2>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          The Olympia governance ecosystem spans multiple web properties. All
          are open source and publicly accessible.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {channels.map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-brand)]"
            >
              <ch.icon
                size={20}
                className="mt-0.5 shrink-0 text-[var(--brand-green)]"
              />
              <div>
                <p className="text-sm font-semibold">{ch.label}</p>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                  {ch.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
