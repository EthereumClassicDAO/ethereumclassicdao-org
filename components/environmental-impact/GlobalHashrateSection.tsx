import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import {
  fetchHashrate,
  fetchAllHashrateHistories,
  HASHRATE_FALLBACK_NOTE,
} from "@/lib/api/hashrate";
import { HashrateChart } from "@/components/about/HashrateChart";

export async function GlobalHashrateSection() {
  const [hashrate, hashrateHistories] = await Promise.all([
    fetchHashrate(),
    fetchAllHashrateHistories(),
  ]);
  const hashrateTHs = hashrate.ths;

  return (
    <>
      <SectionDivider />
      <section
        aria-labelledby="global-network-hashrate-heading"
        className="section-gradient relative py-28"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
              Energy Demand Signal
            </p>
            <h2
              id="global-network-hashrate-heading"
              className="mt-2 text-3xl font-bold tracking-tight"
            >
              Global Network Hashrate
            </h2>
            <div className="mt-4 space-y-3">
              <p className="text-base text-[var(--text-muted)]">
                Hashrate is the direct measure of the energy Ethereum
                Classic&rsquo;s mining network consumes globally. Every
                terahash per second represents real electricity, real hardware,
                and real capital deployed by independent actors across every
                time zone. When hashrate rises, the network is absorbing more
                energy from the global supply &mdash; by choice, at market
                price, wherever that energy is cheapest. When it falls, miners
                curtail and that capacity returns to the grid.
              </p>
              <p className="text-base text-[var(--text-muted)]">
                Ethereum&rsquo;s 2022 transition to Proof-of-Stake redirected
                its entire mining network &mdash; hundreds of millions of
                dollars in GPU and ASIC hardware &mdash; toward Ethereum
                Classic. The hashrate chart below reflects that absorption: a
                discrete, measurable event that permanently changed the scale
                of ETC&rsquo;s energy footprint and security budget. No other
                smart contract platform retained Proof-of-Work consensus to
                receive that infrastructure.
              </p>
            </div>
          </FadeIn>

          {/* Live stat */}
          <FadeIn delay={100}>
            <div className="mt-10 flex items-end gap-4">
              <div>
                <p className="font-mono text-4xl font-bold text-[var(--brand-green)]">
                  {hashrateTHs.toFixed(1)}{" "}
                  <span className="text-lg font-normal">TH/s</span>
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--text-primary)]">
                  Current Network Hashrate
                </p>
                <p className="mt-0.5 text-xs text-[var(--text-subtle)]">
                  {hashrate.isFallback
                    ? "Estimate — live data unavailable"
                    : "Updated hourly · Source: Blockscout"}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Hashrate chart */}
          <FadeIn delay={180}>
            <HashrateChart
              histories={hashrateHistories}
              currentTHs={hashrateTHs}
            />
          </FadeIn>

          {/* Source note */}
          <FadeIn delay={260}>
            <p className="mt-6 text-xs text-[var(--text-subtle)] italic">
              Current and historical hashrate are both calculated from on-chain
              block difficulty and the network&rsquo;s measured average block
              time, via Blockscout.
              {hashrate.isFallback ? ` * ${HASHRATE_FALLBACK_NOTE}` : ""}
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
