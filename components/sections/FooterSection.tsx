import { SectionDivider } from "@/components/ui/SectionDivider";
import { Logo } from "@/components/ui/Logo";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const columns: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Governance",
    links: [
      { label: "How It Works", href: "/governance" },
      { label: "Treasury Funding", href: "/governance#treasury" },
      { label: "Safeguards", href: "/governance#safeguards" },
      { label: "FAQ", href: "/governance#faq" },
    ],
  },
  {
    heading: "Ecosystem",
    links: [
      { label: "Olympia DAO", href: "https://olympiadao.org", external: true },
      {
        label: "Olympia Treasury",
        href: "https://olympiatreasury.org",
        external: true,
      },
      {
        label: "Governance App",
        href: "https://app.olympiadao.org",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/EthereumClassicDAO",
        external: true,
      },
    ],
  },
  {
    heading: "Build",
    links: [
      { label: "Olympia Upgrade", href: "/olympia" },
      { label: "Core Development", href: "/core-development" },
      { label: "Clients", href: "/clients" },
      { label: "Developer Tooling", href: "/ecosystem#tooling" },
      {
        label: "Block Explorer",
        href: "https://etc.blockscout.com",
        external: true,
      },
      {
        label: "Ethereum Classic",
        href: "https://ethereumclassic.org",
        external: true,
      },
    ],
  },
  {
    heading: "Organization",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Contact", href: "/contact" },
      {
        label: "Wyoming Filing",
        href: "https://wyobiz.wyo.gov/business/FilingDetails.aspx?eFNum=101157225123250204055197221085227098244002050082",
        external: true,
      },
    ],
  },
  {
    heading: "Markets",
    links: [
      { label: "Regulation", href: "/regulation" },
      { label: "Environmental Impact", href: "/environmental-impact" },
      { label: "Investment Products", href: "/investment-products" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Disclosures", href: "/transparency" },
    ],
  },
];

export function FooterSection() {
  return (
    <>
      <SectionDivider />
      <footer className="section-alt noise-overlay relative py-16">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-7">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <span className="flex items-center gap-2 text-sm font-semibold tracking-tight">
                <Logo size={20} className="text-[var(--brand-green)]" />
                ETC DAO
              </span>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://x.com/ethclassicdao"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on X"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--border-subtle)] text-[var(--text-subtle)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/EthereumClassicDAO"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--border-subtle)] text-[var(--text-subtle)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Link columns */}
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-subtle)]">
                  {col.heading}
                </p>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                        className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)] hover:underline underline-offset-4"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="section-divider mx-auto mt-12 mb-6 max-w-5xl" />

          <p className="text-xs text-[var(--text-subtle)]">
            &copy; {new Date().getFullYear()} Ethereum Classic DAO LLC
          </p>
        </div>
      </footer>
    </>
  );
}
