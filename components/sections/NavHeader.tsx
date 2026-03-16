"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Transparency", href: "/transparency" },
  { label: "Contact", href: "/contact" },
  { label: "OlympiaDAO", href: "https://olympiadao.org", external: true },
  { label: "Treasury", href: "https://olympiatreasury.org", external: true },
];

export function NavHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border-default)] bg-[var(--bg-overlay)] backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Olympia" width={32} height={32} />
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight leading-tight">
              Ethereum Classic
            </span>
            <span className="text-xs font-medium text-[var(--text-muted)] leading-tight">
              DAO LLC
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--brand-green)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--brand-green)]"
              >
                {link.label}
              </Link>
            )
          )}
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
        <div className="border-t border-[var(--border-default)] bg-[var(--background)] px-6 py-4 md:hidden">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--brand-green)]"
                onClick={() => setMobileOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="block py-3 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--brand-green)]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
