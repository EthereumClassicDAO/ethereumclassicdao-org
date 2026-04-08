import { Cpu, Monitor } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

interface Equipment {
  name: string;
  detail: string;
  href: string;
}

const asicMiners: Equipment[] = [
  {
    name: "Bitmain",
    detail: "Antminer E11 (9 GH/s)",
    href: "https://www.bitmain.com",
  },
  {
    name: "iPollo",
    detail: "V2 (10 GH/s)",
    href: "https://www.ipollo.com",
  },
  {
    name: "Jasminer",
    detail: "X16-P (5.8 GH/s)",
    href: "https://www.jasminer.com",
  },
  {
    name: "Bombax",
    detail: "EZ100 Pro (15.5 GH/s)",
    href: "https://bombaxminer.com",
  },
  {
    name: "Anexminer",
    detail: "ET7 (6 GH/s)",
    href: "https://anexminer.org",
  },
];

const gpuManufacturers: Equipment[] = [
  {
    name: "NVIDIA",
    detail: "GeForce RTX series — high-performance ETChash mining with CUDA cores",
    href: "https://www.nvidia.com",
  },
  {
    name: "AMD",
    detail: "Radeon RX series — competitive ETChash performance and efficiency",
    href: "https://www.amd.com",
  },
  {
    name: "Intel",
    detail: "Arc series GPUs — emerging ETChash support",
    href: "https://www.intel.com",
  },
];

function EquipmentCard({ item, icon: Icon }: { item: Equipment; icon: typeof Cpu }) {
  return (
    <div className="rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
            <Icon size={16} className="text-[var(--brand-green)]" />
          </div>
          <p className="text-sm font-semibold">{item.name}</p>
        </div>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-[10px] font-mono text-[var(--text-subtle)] transition-colors hover:text-[var(--brand-green)]"
        >
          Website &rarr;
        </a>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">
        {item.detail}
      </p>
    </div>
  );
}

export function EquipmentSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-gradient geo-lines relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              Mining Equipment
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[var(--text-muted)]">
              ETChash is uniquely positioned among mining algorithms. ASIC miners
              provide specialized, efficient, commercial-grade operations locked
              into the ETChash algorithm &mdash; delivering maximum hashrate per
              watt. GPU mining ensures broad global accessibility, with compatible
              hardware available at consumer electronics retailers worldwide. This
              dual-compatibility decentralizes the hashrate across geographies,
              diversifies miner composition, and reduces supply chain risk on the
              equipment that secures the network.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-10">
            <FadeIn>
              <h3 className="text-sm font-mono uppercase tracking-wider text-[var(--brand-green)]">
                ASIC Miners
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {asicMiners.map((item) => (
                  <EquipmentCard key={item.name} item={item} icon={Cpu} />
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h3 className="text-sm font-mono uppercase tracking-wider text-[var(--brand-green)]">
                GPU Mining
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {gpuManufacturers.map((item) => (
                  <EquipmentCard key={item.name} item={item} icon={Monitor} />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
