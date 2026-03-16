"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Disclosures", href: "/transparency" },
  { label: "Contact", href: "/contact" },
];

export function NavHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border-default)] bg-[var(--background)]">
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
              className="text-sm text-[var(--text-muted)] transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <span className="hidden text-xs font-mono text-[var(--text-subtle)] lg:inline">
            Est. 2025 · Wyoming
          </span>
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
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-3 text-sm text-[var(--text-muted)] transition-colors hover:text-white"
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
