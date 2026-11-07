import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ActivationCountdown } from "@/components/ui/ActivationCountdown";
import { OLYMPIA_STATUS, ecipUrl } from "@/lib/network-links";

// Each step cites the section that states it, so the citation can be checked against the ECIP.
const sequence = [
  {
    ecip: 1113,
    cite: 'ECIP-1113 §"Deployment and Activation"',
    step: "The governance contracts deploy on Ethereum Classic as it runs today, in dependency order, with no address predicted or reserved: the Treasury's Timelock behind its proxy, then CoreNFT, then the Governor, which alone is granted the Timelock's roles to propose, execute and cancel.",
  },
  {
    ecip: 1113,
    cite: 'ECIP-1113 §"Audit and Testnet Rollout"',
    step: "Their security review and multi-client validation on the Mordor testnet complete before the activation block is scheduled, rehearsed while the Treasury holds nothing.",
  },
  {
    ecip: 1112,
    cite: 'ECIP-1112 §"Deployment and Publication"',
    step: "The Treasury's address is published with the network it is on, together with the verified source of every contract at and beneath it, where upgrade authority rests and its full role table, each reproducible from chain state.",
  },
  {
    ecip: 1111,
    cite: "ECIP-1111 §Implementation",
    step: "The activation blocks for Mordor and for mainnet are set through open coordination, and ECIP-1111 is the only document that records them. Both read TBD.",
  },
  {
    ecip: 1121,
    cite: "ECIP-1121 §Activation",
    step: "At the activation block, EIP-1559 begins with the base fee credited to the Treasury's address, and the core EIPs ECIP-1121 adopts take effect.",
  },
];

export function OlympiaActivationSection() {
  return (
    <>
      <SectionDivider />
      <section id="activation" aria-labelledby="activation-heading" className="scroll-mt-24 py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <span className="badge-pending">{OLYMPIA_STATUS}</span>
            <h2 id="activation-heading" className="mt-3 text-2xl font-bold tracking-tight">
              Activation
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
              Olympia is a proposal, targeted for mainnet activation in 2027. Its
              activation blocks are TBD: ECIP-1121 says they are decided at the
              Olympia Core Devs Call, and ECIP-1111 is the only document that
              records them.
            </p>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="mt-8">
              <ActivationCountdown />
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <h3 className="mt-12 text-lg font-semibold tracking-tight">
              The order the ECIPs set
            </h3>
            <ol className="mt-5 space-y-4">
              {sequence.map((s, i) => (
                <li key={s.cite} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-brand)] font-mono text-xs font-bold text-[var(--brand-green)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm leading-relaxed text-[var(--text-muted)]">{s.step}</p>
                    <a
                      href={ecipUrl(s.ecip)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block font-mono text-[11px] text-[var(--text-subtle)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      {s.cite}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
              ECIP-1116, which would pay block producers from base-fee revenue at
              the consensus layer, is a separate hard fork after Olympia and is
              scheduled on its own.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
