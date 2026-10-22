import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Cite } from "@/components/ui/Cite";
import { CORE_GETH_LATEST_RELEASE_URL, ETC_ORG_URL } from "@/lib/network-links";

export function PublicGoodsHeroSection() {
  return (
    <section className="hero-gradient noise-overlay relative pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Network Infrastructure
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-[var(--brand-green)]">Public Goods</span> of
            Ethereum Classic
          </h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            The software and services Ethereum Classic nodes depend on:
            the client that follows the chain, the bootnodes a new node contacts
            first, and the peer discovery lists it starts from. They are
            maintained in the{" "}
            <Cite href={ETC_ORG_URL}>ethereumclassic organization</Cite> on
            GitHub, the community&rsquo;s own since July 2016, where anyone can
            read how each one is built and run.
          </p>
          <p className="mt-4 text-base text-[var(--text-muted)]">
            Ethereum Classic&rsquo;s core developers and community contributors
            do the day-to-day work, and Ethereum Classic DAO LLC is the standing
            legal entity that maintains and funds them as the funder of last
            resort. Who maintains and funds this work, and how to sponsor it, is
            set out under stewardship.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href={CORE_GETH_LATEST_RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
            >
              Get the current Core-Geth release
              <ExternalLink size={14} aria-hidden="true" />
            </a>
            <Link
              href="/stewardship"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
            >
              Who maintains and funds this work
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
