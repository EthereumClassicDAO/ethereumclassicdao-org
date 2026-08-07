import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function OlympiaUpgradeSection() {
  return (
    <>
      <SectionDivider />
      <section
        aria-labelledby="olympia-overview-heading"
        className="section-gradient geo-circle relative py-28"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2
              id="olympia-overview-heading"
              className="text-3xl font-bold tracking-tight"
            >
              Olympia Overview
            </h2>
            <div className="mt-4 rounded-xl p-8 border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] space-y-4 text-base leading-relaxed text-[var(--text-secondary)]">
              <p>
                Olympia is Ethereum Classic&rsquo;s most significant protocol
                upgrade. Three changes arrive in a single activation:
                Glamsterdam EVM alignment, EIP-1559 fee market, and a
                protocol-managed treasury.
              </p>
              <p>
                The EVM alignment is the most technically expansive change.
                Ethereum Classic implemented partial London EIPs in Mystique
                (2022) and partial Shanghai EIPs in Spiral (2024), each time
                deferring the changes tied to Proof-of-Stake or requiring
                independent design work. Olympia completes that arc in a
                single upgrade boundary: ECIP-1111 delivers the London fee
                market deferred by Mystique, and ECIP-1121 fills the
                remaining Shanghai gaps from Spiral and advances through
                Dencun, Pectra, Fusaka, and Glamsterdam. Every Solidity
                compiler version,
                every deployment tool (Foundry, Hardhat), and every major
                library (wagmi, viem, ethers.js) works on ETC without
                modification or ETC-specific overrides.
              </p>
              <p>
                <strong>One codebase deploys to every EVM chain.</strong>
              </p>
              <p>
                Ethereum Classic gains immediate access to the full depth of
                the EVM developer ecosystem &mdash; the tooling, the
                infrastructure, the libraries, and the developer base already
                built around it &mdash; <strong>without friction or custom onboarding.</strong>
              </p>
              <p>
                The EIP-1559 fee market delivers on a decision first reached
                in 2022: during the Mystique upgrade, ETC developers deferred
                the basefee mechanism to resolve where the basefee should
                flow. The answer &mdash; a protocol treasury rather than
                burning &mdash; was identified then and is formalized now.
                The basefee, value that would otherwise be destroyed,
                is redirected to a protocol-managed vault. Block rewards
                and tips remain completely untouched and go entirely to
                miners. Governance over that treasury is on-chain, open to
                any ETC account, and verifiable at every step.
              </p>
              <p>
                <strong>The first protocol-native funding model in Ethereum Classic&rsquo;s history &mdash; no foundation or donor dependency.</strong>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
