import Image from "next/image";

const siteLinks = [
  { label: "About", href: "/about" },
  { label: "Disclosures", href: "/transparency" },
  { label: "Contact", href: "/contact" },
];

const ecosystemLinks = [
  { label: "Olympia DAO", href: "https://olympiadao.org" },
  { label: "Olympia Treasury", href: "https://olympiatreasury.org" },
  { label: "Governance App", href: "https://app.olympiadao.org" },
  { label: "GitHub", href: "https://github.com/EthereumClassicDAO" },
];

const resourceLinks = [
  {
    label: "Wyoming SOS Filing",
    href: "https://wyobiz.wyo.gov/business/FilingDetails.aspx?eFNum=101157225123250204055197221085227098244002050082",
  },
  { label: "Ethereum Classic", href: "https://ethereumclassic.org" },
];

export function FooterSection() {
  return (
    <footer className="border-t border-[var(--border-default)] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="flex items-center gap-2 text-sm font-semibold tracking-tight">
              <Image src="/logo.svg" alt="" width={20} height={20} />
              Ethereum Classic DAO
            </span>
            <p className="mt-3 text-xs text-[var(--text-subtle)]">
              Est. 2025 · Sheridan, Wyoming
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-subtle)]">
              Site
            </p>
            <ul className="mt-3 space-y-2">
              {siteLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-subtle)]">
              Ecosystem
            </p>
            <ul className="mt-3 space-y-2">
              {ecosystemLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-muted)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-subtle)]">
              Resources
            </p>
            <ul className="mt-3 space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-muted)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-xs text-[var(--text-subtle)]">
          &copy; 2025 Ethereum Classic DAO LLC
        </p>
      </div>
    </footer>
  );
}
