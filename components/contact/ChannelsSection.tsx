import { ArrowUpRight } from "lucide-react";

const properties = [
  {
    label: "Olympia DAO",
    description: "Governance landing page",
    href: "https://olympiadao.org",
  },
  {
    label: "Olympia Treasury",
    description: "Treasury monitoring dashboard",
    href: "https://olympiatreasury.org",
  },
  {
    label: "Governance App",
    description: "Proposal submission, voting, and execution",
    href: "https://app.olympiadao.org",
  },
  {
    label: "GitHub",
    description: "Open-source repositories",
    href: "https://github.com/EthereumClassicDAO",
  },
];

export function ChannelsSection() {
  return (
    <section className="border-t border-[var(--border-default)] py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-xl font-bold">Ecosystem Properties</h2>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          The Olympia governance ecosystem spans multiple open-source web
          properties.
        </p>

        <div className="mt-6 divide-y divide-[var(--divider)]">
          {properties.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-4 transition-colors hover:text-white"
            >
              <div>
                <p className="text-sm font-semibold">{p.label}</p>
                <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                  {p.description}
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-[var(--text-subtle)]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
