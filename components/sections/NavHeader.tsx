"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const topLinks = [
  { label: "About", href: "/about" },
  { label: "Olympia", href: "/olympia" },
];

const dropdownGroups = [
  {
    label: "Protocol",
    items: [
      { label: "Governance", href: "/governance" },
      { label: "Core Development", href: "/core-development" },
      { label: "Clients", href: "/clients" },
      { label: "Ecosystem", href: "/ecosystem" },
    ],
  },
  {
    label: "Markets",
    items: [
      { label: "Regulation", href: "/regulation" },
      { label: "Energy Infrastructure", href: "/environmental-impact" },
      { label: "Investment Products", href: "/investment-products" },
    ],
  },
];

export function NavHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const isGroupActive = (group: (typeof dropdownGroups)[number]) =>
    group.items.some((item) => pathname === item.href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--divider)] bg-[var(--bg-overlay)] backdrop-blur-md">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" aria-label="Ethereum Classic DAO — home" className="flex items-center gap-3 shrink-0">
          <Image src="/logo.svg" alt="" width={28} height={28} aria-hidden="true" />
          <span className="text-sm font-semibold tracking-tight">
            Ethereum Classic DAO
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {/* Standalone top-tier links */}
            {topLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="relative text-sm transition-colors duration-200 hover:text-[var(--text-primary)]"
                  style={{
                    color:
                      pathname === link.href
                        ? "var(--text-primary)"
                        : "var(--text-muted)",
                  }}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[var(--brand-green)]" />
                  )}
                </Link>
              </li>
            ))}

            {/* Dropdown groups */}
            {dropdownGroups.map((group) => (
              <li
                key={group.label}
                className="relative"
                onMouseEnter={() => setDesktopOpen(group.label)}
                onMouseLeave={() => setDesktopOpen(null)}
              >
                <button
                  className="flex items-center gap-1 text-sm transition-colors duration-200 hover:text-[var(--text-primary)]"
                  style={{
                    color: isGroupActive(group)
                      ? "var(--text-primary)"
                      : "var(--text-muted)",
                  }}
                  aria-expanded={desktopOpen === group.label}
                  aria-haspopup="true"
                  aria-controls={`desktop-menu-${group.label}`}
                >
                  {group.label}
                  <ChevronDown
                    size={14}
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${desktopOpen === group.label ? "rotate-180" : ""}`}
                  />
                  {isGroupActive(group) && (
                    <span className="absolute -bottom-1.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[var(--brand-green)]" />
                  )}
                </button>

                {desktopOpen === group.label && (
                  <div className="absolute left-0 top-full min-w-[180px] pt-1.5">
                    <ul id={`desktop-menu-${group.label}`} className="rounded-xl border border-[var(--divider)] bg-[var(--bg-overlay)] py-1.5 shadow-lg backdrop-blur-md list-none m-0 p-0">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
                            style={{
                              color:
                                pathname === item.href
                                  ? "var(--text-primary)"
                                  : "var(--text-muted)",
                            }}
                          >
                            {item.label}
                            {pathname === item.href && (
                              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <span className="hidden text-xs font-mono text-[var(--brand-green)] lg:inline">
            Wyoming DAO LLC
          </span>
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[var(--divider)] bg-[var(--bg-overlay)] backdrop-blur-md md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-3">
            <ul className="list-none m-0 p-0">
              {/* Standalone links */}
              {topLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center py-3 text-sm font-medium transition-colors hover:text-[var(--text-primary)]"
                    style={{
                      color:
                        pathname === link.href
                          ? "var(--text-primary)"
                          : "var(--text-muted)",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
                    )}
                  </Link>
                </li>
              ))}

              {/* Expandable groups */}
              {dropdownGroups.map((group) => (
                <li key={group.label} className="border-t border-[var(--divider)]">
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === group.label ? null : group.label
                      )
                    }
                    className="flex w-full items-center justify-between py-3 text-sm font-medium transition-colors hover:text-[var(--text-primary)]"
                    style={{
                      color: isGroupActive(group)
                        ? "var(--text-primary)"
                        : "var(--text-muted)",
                    }}
                    aria-expanded={mobileExpanded === group.label}
                  >
                    {group.label}
                    <ChevronDown
                      size={14}
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${mobileExpanded === group.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileExpanded === group.label && (
                    <ul className="pb-2 pl-4 list-none m-0 p-0">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="flex items-center gap-2 py-2.5 text-sm transition-colors hover:text-[var(--text-primary)]"
                            style={{
                              color:
                                pathname === item.href
                                  ? "var(--text-primary)"
                                  : "var(--text-muted)",
                            }}
                            onClick={() => setMobileOpen(false)}
                          >
                            <span
                              className="h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)] opacity-50"
                              aria-hidden="true"
                            />
                            {item.label}
                            {pathname === item.href && (
                              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="border-t border-[var(--divider)] py-3">
              <span className="text-xs font-mono text-[var(--brand-green)]">
                Wyoming DAO LLC
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
