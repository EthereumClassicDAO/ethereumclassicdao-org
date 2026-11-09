import { Pickaxe, Cpu, Monitor, Waves } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { fetchHashrateTHs, fetchAllHashrateHistories } from "@/lib/api/hashrate";
import { fetchPoolHashrates, type PoolHashrates } from "@/lib/api/pool-hashrate";
import { PoolsTable, type PoolRow } from "@/components/ecosystem/PoolsTable";
import { HashrateChart } from "@/components/about/HashrateChart";
import { CORE_GETH_LATEST_RELEASE_URL } from "@/lib/network-links";

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
  { name: "NVIDIA", detail: "GeForce RTX series, high-performance Etchash mining with CUDA cores",    href: "https://www.nvidia.com" },
  { name: "AMD",    detail: "Radeon RX series, competitive Etchash performance and efficiency",        href: "https://www.amd.com" },
  { name: "Intel",  detail: "Arc series GPUs, with emerging Etchash support",                         href: "https://www.intel.com" },
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

/**
 * Fees and payout schemes are each pool's ETC terms as MiningPoolStats
 * (miningpoolstats.stream/ethereumclassic) listed them on 2026-11-09, or as
 * minerstat (minerstat.com/coin/etc) lists a pool MiningPoolStats does not. A
 * pool with several schemes lists one fee per scheme, in the same order.
 */
const pools: Pool[] = [
  { name: "f2pool.com",        statsId: "f2pool",        fee: "1%",          type: "PPS",          href: "https://www.f2pool.com/coin/ethereum-classic" },
  { name: "2miners.com",       statsId: "2miners",       fee: "1% / 1.5%",   type: "PPLNS / SOLO", href: "https://etc.2miners.com" },
  { name: "k1pool.com",        statsId: "k1pool",        fee: "1%",          type: "RBPPS / SOLO", href: "https://k1pool.com/pool/etc" },
  { name: "gtpool.io",         statsId: "gtpool",        fee: "1%",          type: "PPLNS",        href: "https://gtpool.io" },
  { name: "pool.kryptex.com",  statsId: "kryptex",       fee: "1%",          type: "PPS+",         href: "https://pool.kryptex.com/etc" },
  { name: "l6pool.com",        statsId: "l6pool",        fee: "0.3%",        type: "PPS+",         href: "https://global.l6pool.com" },
  { name: "antpool.com",       statsId: "antpool",       fee: "1.5%",        type: "PPS",          href: "https://antpool.com" },
  { name: "pool.binance.com",  statsId: "binance",       fee: "3%",          type: "FPPS",         href: "https://pool.binance.com" },
  { name: "herominers.com",    statsId: "herominers",    fee: "0.9%",        type: "PROP / SOLO",  href: "https://etc.herominers.com" },
  { name: "molepool.com",      statsId: "molepool",      fee: "2%",          type: "SOLO",         href: "https://etc.molepool.com" },
  { name: "coolpool.top",      statsId: "coolpool",      fee: "1%",          type: "PPLNS / SOLO", href: "https://coolpool.top/pool/etc" },
  { name: "baikalmine.com",    statsId: "baikalmine",    fee: "0.75% / 1%",  type: "PPS+ / SOLO",  href: "https://baikalmine.com" },
  { name: "cloverpool.com",    statsId: "cloverpool",    fee: "—",           type: "PPLNS",        href: "https://cloverpool.com" },
  { name: "longpool.org",      statsId: "longpool",      fee: "1%",          type: "PPLNS",        href: "https://longpool.org" },
  { name: "cruxpool.com",      statsId: "cruxpool",      fee: "1%",          type: "PPS+",         href: "https://cruxpool.com/etc" },
  { name: "666pool.com",       statsId: "666pool",       fee: "1%",          type: "PPLNS / PPS",  href: "https://www.666pool.com" },
  { name: "okminer.com",       statsId: "okminer",       fee: "2%",          type: "FPPS",         href: "https://okminer.com" },
  { name: "crazypool.org",     statsId: "crazypool",     fee: "1%",          type: "PPLNS",        href: "https://etc.crazypool.org" },
  { name: "woolypooly.com",    statsId: "woolypooly",    fee: "0.9%",        type: "PPLNS / SOLO", href: "https://woolypooly.com" },
  { name: "ethcore.ru",        statsId: "ethcore",       fee: "0.5%",        type: "PPLNS / SOLO", href: "https://ethcore.ru" },
  { name: "tpool.io",          statsId: "tpool",         fee: "0.9%",        type: "FPPS",         href: "https://tpool.io" },
  { name: "pool2mine.net",     statsId: "pool2mine",     fee: "0.5%",        type: "PROP",         href: "https://etc.pool2mine.net" },
  { name: "solopool.org",      statsId: "solopool",      fee: "1.5%",        type: "SOLO",         href: "https://solopool.org" },
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
  const stats: { value: string; unit?: string; label: string; live?: boolean }[] = [
    { value: `${hashrateTHs.toFixed(1)}`, unit: "TH/s", label: "Network Hashrate", live: true },
    { value: "Etchash", label: "Mining Algorithm" },
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
                  <p data-live={stat.live ? "" : undefined} className="text-2xl font-bold font-mono text-[var(--brand-green)]">
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

          {/* Body copy + client link */}
          <FadeIn delay={300}>
            <div className="mt-8">
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                Ethereum Classic is the only mature Proof-of-Work blockchain with
                native smart contracts. When Ethereum moved to Proof-of-Stake, ETC
                absorbed a significant share of its mining infrastructure, and
                established ASIC manufacturers such as Bitmain and Jasminer now
                build Etchash hardware. Etchash runs on both ASICs, for
                commercial operations, and GPUs, which anyone can buy, so
                hashrate is spread across geographies and supply chain risk is
                reduced. Run{" "}
                <a
                  href={CORE_GETH_LATEST_RELEASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-semibold text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                >
                  Core-Geth
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
                The hardware below mines Etchash today, from dedicated ASICs for
                commercial-scale operations to the consumer GPUs retail miners
                run, so no single vendor supplies the network&rsquo;s security.
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
                Active Etchash mining pools contributing to Ethereum Classic&apos;s
                security budget. Pool selection affects expected earnings
                variance, payout frequency, and infrastructure dependence.
                Hashrate is estimated from the blocks each pool mined recently,
                and the largest pools are listed first.
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
