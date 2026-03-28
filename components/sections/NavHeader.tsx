"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Governance", href: "/governance" },
  { label: "Clients", href: "/clients" },
  { label: "Upgrade", href: "/upgrade" },
  { label: "Timeline", href: "/timeline" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Disclosures", href: "/transparency" },
  { label: "Contact", href: "/contact" },
];

export function NavHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--divider)] bg-[var(--bg-overlay)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="" width={28} height={28} />
          <span className="text-sm font-semibold tracking-tight">
            Ethereum Classic DAO
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-sm transition-colors duration-200 hover:text-[var(--text-primary)]"
              style={{
                color: pathname === link.href ? "var(--text-primary)" : "var(--text-muted)",
              }}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[var(--brand-green)]" />
              )}
            </Link>
          ))}
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
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[var(--divider)] bg-[var(--bg-overlay)] backdrop-blur-md px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-3 text-sm transition-colors hover:text-[var(--text-primary)]"
              style={{
                color: pathname === link.href ? "var(--text-primary)" : "var(--text-muted)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
