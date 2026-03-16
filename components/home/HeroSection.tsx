import { ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0, 255, 174, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] px-4 py-1.5 text-xs font-medium text-[var(--brand-green)]">
          <Building2 size={14} />
          Wyoming DAO LLC · Active
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
          Ethereum Classic
          <br />
          <span className="text-[var(--brand-green)]">DAO LLC</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--text-muted)]">
          Off-chain administrative executor for the OlympiaDAO governance
          system. A Wyoming-registered DAO LLC strictly subordinate to on-chain
          governance per ECIP-1114.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-7 py-3 text-sm font-semibold text-[var(--background)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
          >
            About the LLC
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://olympiadao.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] px-7 py-3 text-sm font-semibold text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--border-brand)] hover:text-[var(--brand-green)]"
          >
            Visit OlympiaDAO
          </a>
        </div>
      </div>
    </section>
  );
}
