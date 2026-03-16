import Image from "next/image";
import { SectionDivider } from "@/components/ui/SectionDivider";

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
      { label: "Client Software", href: "/ecosystem" },
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
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <span className="flex items-center gap-2 text-sm font-semibold tracking-tight">
                <Image src="/logo.svg" alt="" width={20} height={20} />
                ETC DAO
              </span>
              <p className="mt-3 text-xs text-[var(--text-subtle)]">
                Est. 2025 · Sheridan, Wyoming
              </p>
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
                        className="text-sm text-[var(--text-muted)] transition-colors hover:text-white hover:underline underline-offset-4"
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
            &copy; 2025 Ethereum Classic DAO LLC
          </p>
        </div>
      </footer>
    </>
  );
}
