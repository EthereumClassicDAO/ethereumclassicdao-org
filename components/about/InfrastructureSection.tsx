import {
  ArrowLeftRight,
  Lock,
  TrendingUp,
  Pickaxe,
  FileCheck,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const infrastructure = [
  {
    icon: ArrowLeftRight,
    category: "Global Exchange Coverage",
    details: "300+ active markets across 20+ major global exchanges. Available on every leading trading platform.",
  },
  {
    icon: Lock,
    category: "Institutional Custody",
    details: "Institutional-grade digital asset custody from leading custodians. Multi-signature security, insurance coverage, and regulatory compliance.",
  },
  {
    icon: TrendingUp,
    category: "Regulated Products",
    details: "Grayscale Ethereum Classic Trust (ETCG), est. 2018. Available on Charles Schwab, Fidelity, and Interactive Brokers.",
  },
  {
    icon: Pickaxe,
    category: "Mining Infrastructure",
    details: "170+ TH/s hashrate. Global GPU and ASIC mining operations secure the only Proof-of-Work network with native smart contracts.",
  },
  {
    icon: FileCheck,
    category: "Regulatory Status",
    details: "Wyoming DAO LLC · Filing ID 2025-001671865 · CLARITY Act commodity · GENIUS Act EVM platform",
  },
];

export function InfrastructureSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-gradient relative geo-circle py-28">
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <FadeIn>
            <p className="text-4xl font-bold font-mono text-[var(--brand-green)]">
              170+ <span className="text-lg">TH/s</span>
            </p>
            <p className="mt-1 text-xs font-mono text-[var(--text-subtle)]">
              Algorithm: ETChash
            </p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              GPU and ASIC compatible, securing the only Proof-of-Work network with native smart contracts
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="mt-12 text-xl font-bold">
              Institutional Infrastructure
            </h2>
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              The institutional ecosystem around Ethereum Classic.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {infrastructure.map((item, i) => (
              <FadeIn key={item.category} delay={i * 80}>
                <div className={`flex gap-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-5${i === infrastructure.length - 1 ? " sm:col-span-2" : ""}`}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <item.icon
                      size={20}
                      className="text-[var(--brand-green)]"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.category}</p>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      {item.details}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
