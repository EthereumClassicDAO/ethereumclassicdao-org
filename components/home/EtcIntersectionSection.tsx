import Link from "next/link";
import { Cpu, Code2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const columns = [
  {
    icon: Cpu,
    heading: "From Proof-of-Work",
    subheading: "Bitcoin\u2019s regulatory trajectory",
    points: [
      "No pre-mine, no foundation controlling the protocol, no issuer.",
      "Mining hardware is globally distributed and permissionless to acquire.",
      "Block rewards and tips go to miners — the treasury is funded by basefee, not inflation.",
      "CLARITY Act digital commodity classification path: same PoW profile as Bitcoin.",
      "Energy demand that co-locates with any power source, anywhere in the world.",
    ],
  },
  {
    icon: Code2,
    heading: "From the EVM",
    subheading: "Ethereum\u2019s regulatory trajectory",
    points: [
      "Full Solidity and EVM compatibility — every Ethereum tool, library, and framework works without modification.",
      "Classic USD ($USC) by Brale: a live, 1:1 USD-backed stablecoin on a PoW chain — a first.",
      "GENIUS Act-compliant stablecoin infrastructure, the first on any Proof-of-Work network.",
      "ETCswap V2 and V3 provide on-chain liquidity for composable DeFi with a regulated stable base.",
      "MiCA decentralized asset classification: exempt from ART/EMT issuer obligations.",
    ],
  },
];

export function EtcIntersectionSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="the-only-pow-evm-heading" className="section-gradient relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
              Network Architecture
            </p>
            <h2 id="the-only-pow-evm-heading" className="mt-2 text-3xl font-bold tracking-tight">
              The Only Proof-of-Work EVM
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Ethereum Classic is not simply a Proof-of-Work network or simply a
              smart contract platform. It sits at the intersection of both,
              inheriting the commodity classification path that Bitcoin
              established and the programmable finance frameworks that Ethereum
              established. Bitcoin has PoW without programmability. Ethereum has
              the EVM without PoW. ETC has both &mdash; and its regulatory
              surface is additive, not exclusive.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {columns.map((col, i) => (
              <FadeIn key={col.heading} delay={i * 80}>
                <div className="rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6 h-full">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                      <col.icon size={16} aria-hidden="true" className="text-[var(--brand-green)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{col.heading}</p>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                        {col.subheading}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {col.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]"
                          aria-hidden="true"
                        />
                        <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <Link
                href="/environmental-impact"
                className="text-xs font-medium text-[var(--brand-green)] hover:underline underline-offset-4"
              >
                PoW as energy infrastructure &rarr;
              </Link>
              <Link
                href="/regulation"
                className="text-xs font-medium text-[var(--brand-green)] hover:underline underline-offset-4"
              >
                Regulatory landscape &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
