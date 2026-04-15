import { Pickaxe, Cpu, Monitor, Waves } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { fetchHashrateTHs, fetchAllHashrateHistories } from "@/lib/api/hashrate";
import { fetchPoolHashrates, type PoolHashrates } from "@/lib/api/pool-hashrate";
import { PoolsTable, type PoolRow } from "@/components/ecosystem/PoolsTable";
import { HashrateChart } from "@/components/about/HashrateChart";

interface Equipment {
  name: string;
  detail: string;
  href: string;
}

const asicMiners: Equipment[] = [
  { name: "Bitmain",   detail: "Antminer E11 (9 GH/s)",   href: "https://www.bitmain.com" },
  { name: "iPollo",    detail: "V2 (10 GH/s)",            href: "https://www.ipollo.com" },
  { name: "Jasminer",  detail: "X16-P (5.8 GH/s)",        href: "https://www.jasminer.com" },
  { name: "Bombax",    detail: "EZ100 Pro (15.5 GH/s)",   href: "https://bombaxminer.com" },
  { name: "Anexminer", detail: "ET7 (6 GH/s)",            href: "https://anexminer.org" },
];

const gpuManufacturers: Equipment[] = [
  { name: "NVIDIA", detail: "GeForce RTX series, high-performance ETChash mining with CUDA cores",    href: "https://www.nvidia.com" },
  { name: "AMD",    detail: "Radeon RX series, competitive ETChash performance and efficiency",        href: "https://www.amd.com" },
  { name: "Intel",  detail: "Arc series GPUs, with emerging ETChash support",                         href: "https://www.intel.com" },
];

interface Pool {
  name: string;
  fee: string;
  type: string;
  href: string;
  /** miningpoolstats pool_id — falls back to deriveStatsId(name) if omitted */
  statsId?: string;
}

/** Strip common TLDs to derive a pool_id from the domain name */
function deriveStatsId(name: string): string {
  return name.replace(/\.(com|net|org|io|top|ru|work|stream)$/, "");
}

function getPoolTHs(pool: Pool, hashrates: PoolHashrates): number {
  return hashrates[pool.statsId ?? deriveStatsId(pool.name)] ?? 0;
}

function formatHashrate(ths: number): string {
  if (!ths) return "—";
  if (ths >= 1) return `${ths.toFixed(2)} TH/s`;
  return `${Math.round(ths * 1000)} GH/s`;
}

const pools: Pool[] = [
  { name: "f2pool.com",        statsId: "f2pool",        fee: "1%",     type: "PPS",   href: "https://f2pool.com" },
  { name: "antpool.com",       statsId: "antpool",       fee: "1.5%",   type: "PPS",   href: "https://antpool.com" },
  { name: "viabtc.com",        statsId: "viabtc",        fee: "2%",     type: "PPLNS", href: "https://viabtc.com" },
  { name: "2miners.com",       statsId: "2miners",       fee: "1%",     type: "PPLNS", href: "https://2miners.com" },
  { name: "hiveon.net",        statsId: "hiveon",        fee: "0%",     type: "PPS+",  href: "https://hiveon.net" },
  { name: "pool.kryptex.com",  statsId: "kryptex",       fee: "1%",     type: "PPS+",  href: "https://pool.kryptex.com" },
  { name: "l6pool.com",        statsId: "l6pool",        fee: "0.3%",   type: "—",     href: "https://l6pool.com" },
  { name: "poolin.com",        statsId: "poolin",        fee: "0%",     type: "PPS+",  href: "https://poolin.com" },
  { name: "emcd.io",           statsId: "emcd",          fee: "1.5%",   type: "FPPS",  href: "https://emcd.io" },
  { name: "binance.com",       statsId: "binance",       fee: "3%",     type: "FPPS",  href: "https://www.binance.com" },
  { name: "k1pool.com",        statsId: "k1pool",        fee: "1%",     type: "RBPPS", href: "https://k1pool.com" },
  { name: "herominers.com",    statsId: "herominers",    fee: "0.9%",   type: "PROP",  href: "https://herominers.com" },
  { name: "ntminerpool.com",   statsId: "ntminerpool",   fee: "1%",     type: "PPS+",  href: "https://ntminerpool.com" },
  { name: "woolypooly.com",    statsId: "woolypooly",    fee: "0.9%",   type: "PPLNS", href: "https://woolypooly.com" },
  { name: "longpool.org",      statsId: "longpool",      fee: "1%",     type: "PPLNS", href: "https://longpool.org" },
  { name: "gtpool.io",         statsId: "gtpool",        fee: "1%",     type: "PPLNS", href: "https://gtpool.io" },
  { name: "dogpool.work",      statsId: "dogpool",       fee: "1.25%",  type: "PPS+",  href: "https://dogpool.work" },
  { name: "solopool.org",      statsId: "solopool",      fee: "1.5%",   type: "SOLO",  href: "https://solopool.org" },
  { name: "coolpool.top",      statsId: "coolpool",      fee: "1%",     type: "PPLNS", href: "https://coolpool.top" },
  { name: "molepool.com",      statsId: "molepool",      fee: "1.5%",   type: "SOLO",  href: "https://molepool.com" },
  { name: "tpool.io",          statsId: "tpool",         fee: "0.9%",   type: "FPPS",  href: "https://tpool.io" },
  { name: "baikalmine.com",    statsId: "baikalmine",    fee: "0.75%",  type: "PPS+",  href: "https://baikalmine.com" },
  { name: "cloverpool.com",    statsId: "cloverpool",    fee: "—",      type: "PPLNS", href: "https://cloverpool.com" },
  { name: "okminer.com",       statsId: "okminer",       fee: "2%",     type: "FPPS",  href: "https://okminer.com" },
  { name: "666pool.com",       statsId: "666pool",       fee: "1%",     type: "PPLNS", href: "https://666pool.com" },
  { name: "cruxpool.com",      statsId: "cruxpool",      fee: "1%",     type: "PPS+",  href: "https://cruxpool.com" },
  { name: "crazypool.org",     statsId: "crazypool",     fee: "1%",     type: "PPLNS", href: "https://crazypool.org" },
  { name: "ethcore.ru",        statsId: "ethcore",       fee: "0.5%",   type: "SOLO",  href: "https://ethcore.ru" },
  { name: "skypool.org",       statsId: "skypool",       fee: "1.5%",   type: "PPS+",  href: "https://skypool.org" },
  { name: "pool2mine.net",     statsId: "pool2mine",     fee: "0.5%",   type: "PROP",  href: "https://pool2mine.net" },
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

export async function MiningSection() {
  const [hashrateTHs, hashrateHistories, poolHashrates] = await Promise.all([
    fetchHashrateTHs(),
    fetchAllHashrateHistories(),
    fetchPoolHashrates(),
  ]);
  const stats = [
    { value: `${hashrateTHs.toFixed(1)}`, unit: "TH/s", label: "Network Hashrate" },
    { value: "ETChash", label: "Mining Algorithm" },
    { value: "GPU + ASIC", label: "Compatible Hardware" },
  ];

  return (
    <>
      <SectionDivider variant="strong" />
      <section aria-labelledby="mining-heading" className="section-alt py-28">
        <div className="mx-auto max-w-5xl px-6">

          {/* Header */}
          <FadeIn>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-green-subtle)]">
                <Pickaxe size={24} className="text-[var(--brand-green)]" />
              </div>
              <div>
                <h2 id="mining-heading" className="text-3xl font-bold tracking-tight">
                  Mining
                </h2>
              </div>
            </div>
          </FadeIn>

          {/* Stats */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 80}>
                <div className="rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-5">
                  <p className="text-2xl font-bold font-mono text-[var(--brand-green)]">
                    {stat.value}
                    {stat.unit && (
                      <span className="ml-1 text-sm font-normal">{stat.unit}</span>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Body copy + fukuii link */}
          <FadeIn delay={300}>
            <div className="mt-8">
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                Ethereum Classic is the only EVM-compatible chain secured by
                Proof-of-Work. When Ethereum transitioned to Proof-of-Stake,
                ETC absorbed the majority of the ETHash mining ecosystem —
                including established ASIC manufacturers like Bitmain and
                Jasminer. ETChash supports both ASIC efficiency for
                commercial-grade operations and GPU accessibility for global
                participation, decentralizing hashrate across geographies and
                reducing supply chain risk. Run{" "}
                <a
                  href="https://github.com/ethereumclassic/fukuii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-semibold text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                >
                  fukuii
                </a>{" "}
                to participate in block production and earn ETC rewards.
              </p>
              <p className="mt-4 text-sm font-medium text-[var(--text-muted)]">
                Secure the network, earn block rewards.
              </p>
            </div>
          </FadeIn>

          {/* Hashrate chart */}
          <FadeIn delay={380}>
            <HashrateChart histories={hashrateHistories} currentTHs={hashrateTHs} />
          </FadeIn>

          {/* Mining Equipment */}
          <div className="mt-20">
            <FadeIn>
              <h3 className="text-xl font-bold tracking-tight">Mining Equipment</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                ETChash supports dedicated ASIC hardware and consumer GPU rigs,
                distributing hashrate across a broad base of independent
                operators. ASIC efficiency enables commercial-scale operations;
                GPU accessibility brings in global retail miners — together
                diversifying the security budget and reducing single-vendor
                supply chain risk.
              </p>
            </FadeIn>

            <div className="mt-8 space-y-8">
              <FadeIn delay={80}>
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  ASIC Miners
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {asicMiners.map((item) => (
                    <EquipmentCard key={item.name} item={item} icon={Cpu} />
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={160}>
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  GPU Mining
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {gpuManufacturers.map((item) => (
                    <EquipmentCard key={item.name} item={item} icon={Monitor} />
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Mining Pools */}
          <div className="mt-20">
            <FadeIn>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                  <Waves size={18} className="text-[var(--brand-green)]" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Mining Pools</h3>
              </div>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Active ETChash mining pools contributing to Ethereum Classic&apos;s
                security budget. Pool selection affects expected earnings
                variance, payout frequency, and infrastructure dependence.
                Hashrate is estimated from recent block attribution — larger
                pools appear at the top.
              </p>
            </FadeIn>

            <FadeIn delay={80}>
              {(() => {
                const rows: PoolRow[] = pools
                  .map((pool) => {
                    const ths = getPoolTHs(pool, poolHashrates);
                    return {
                      name: pool.name,
                      fee: pool.fee,
                      type: pool.type,
                      href: pool.href,
                      hashrateTHs: ths,
                      hashrate: formatHashrate(ths),
                    };
                  })
                  .sort((a, b) => b.hashrateTHs - a.hashrateTHs);

                return (
                  <div className="mt-6">
                    <PoolsTable pools={rows} networkTHs={hashrateTHs} />
                  </div>
                );
              })()}
            </FadeIn>
          </div>

        </div>
      </section>
    </>
  );
}
