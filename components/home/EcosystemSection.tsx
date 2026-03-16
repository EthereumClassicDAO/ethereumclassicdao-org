import { ArrowUpRight } from "lucide-react";

const properties = [
  {
    name: "Olympia DAO",
    description: "Governance landing page",
    href: "https://olympiadao.org",
  },
  {
    name: "Olympia Treasury",
    description: "Treasury monitoring dashboard",
    href: "https://olympiatreasury.org",
  },
  {
    name: "Governance App",
    description: "Proposal submission, voting, and execution",
    href: "https://app.olympiadao.org",
  },
  {
    name: "GitHub",
    description: "Open-source repositories",
    href: "https://github.com/EthereumClassicDAO",
  },
];

export function EcosystemSection() {
  return (
    <section className="border-t border-[var(--border-default)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">Ecosystem</h2>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          The Olympia governance ecosystem spans multiple open-source web
          properties.
        </p>

        <div className="mt-10 divide-y divide-[var(--divider)]">
          {properties.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-4 transition-colors hover:text-white group"
            >
              <div>
                <span className="text-sm font-semibold">{p.name}</span>
                <span className="ml-3 text-sm text-[var(--text-muted)]">
                  {p.description}
                </span>
              </div>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-[var(--text-subtle)] transition-colors group-hover:text-white"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
