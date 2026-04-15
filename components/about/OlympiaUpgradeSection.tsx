import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function OlympiaUpgradeSection() {
  return (
    <>
      <SectionDivider />
      <section
        aria-labelledby="the-olympia-upgrade-heading"
        className="section-gradient geo-circle relative py-28"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2
              id="the-olympia-upgrade-heading"
              className="text-3xl font-bold tracking-tight"
            >
              The Olympia Upgrade
            </h2>
            <div className="mt-4 rounded-xl p-8 border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] space-y-4 text-base leading-relaxed text-[var(--text-secondary)]">
              <p>
                Olympia is Ethereum Classic&rsquo;s most significant protocol
                upgrade. Three changes arrive in a single activation: Fusaka
                EVM alignment, EIP-1559 fee market, and a protocol-managed
                treasury.
              </p>
              <p>
                The headline change is full Fusaka EVM parity &mdash; closing
                years of execution-layer divergence from Ethereum in a single
                fork. Every Solidity compiler version, every deployment tool
                (Foundry, Hardhat), and every major library (wagmi, viem,
                ethers.js) works on ETC without modification, patching, or
                ETC-specific overrides. One codebase deploys to every EVM
                chain. ETC could not credibly claim this before Olympia.
                After Olympia, it can.
              </p>
              <p>
                The EIP-1559 fee market redirects the basefee &mdash; value
                that would otherwise be destroyed &mdash; to a
                protocol-managed treasury. Block rewards and tips remain
                completely untouched and go entirely to miners. Anyone can
                submit proposals on-chain. Members vote on resource allocation
                and execute decisions. Every step is transparent and
                verifiable on-chain.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
