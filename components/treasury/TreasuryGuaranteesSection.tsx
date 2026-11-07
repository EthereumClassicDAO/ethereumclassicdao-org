import { FadeIn } from "@/components/ui/FadeIn";
import { Ban, Route, KeyRound, Lock, Eye, Wrench, ExternalLink } from "lucide-react";
import { OLYMPIA_TREASURY_SITE_URL } from "@/lib/network-links";

// Each property is a requirement of ECIP-1111, ECIP-1112 or ECIP-1113. Read the ECIP before
// changing a line: these are what the consensus rule and the contracts would enforce, not what
// anyone is trusted to do.
const invariants = [
  {
    icon: Ban,
    title: "A destination only a hard fork changes",
    body: "ECIP-1111 credits the base fee to one permanent address, the Sovereignty Vault, held in every client's chain configuration. Changing it takes a coordinated hard fork, and no on-chain party can change it at all.",
  },
  {
    icon: Route,
    title: "One route out",
    body: "Funds leave only by a proposal that is voted, queued in the Timelock, delayed, then executed. ECIP-1113 makes the Governor the Timelock's sole executor, and no account can move funds around it.",
  },
  {
    icon: KeyRound,
    title: "No admin key, no multisig",
    body: "ECIP-1113 prohibits owner-only functions, privileged multisigs and committees. The contracts that can hold or move funds are unmodified OpenZeppelin at a published release, so OpenZeppelin's own audit covers them.",
  },
  {
    icon: Lock,
    title: "A vote that cannot be bought",
    body: "Voting power comes only from CoreNFT, a soulbound membership token carrying one non-delegable vote per member. With no tradeable governance token, nothing exists on which a market in votes could form.",
  },
  {
    icon: Eye,
    title: "No hidden balance",
    body: "ECIP-1112 requires every implementation at the address to spend the account's real balance and to keep no ledger or deposit counter of its own, so what the Treasury holds, and its whole configuration, can be confirmed from chain state.",
  },
  {
    icon: Wrench,
    title: "Repairable logic at a permanent address",
    body: "A proposal can upgrade the implementation behind the address, so a disclosed vulnerability is fixed without a chain split. Upgrade authority is fixed when the proxy is built, cannot be repointed, and reaches nothing but the implementation it replaces.",
  },
];

const contracts = [
  {
    name: "Treasury",
    what: "Stock OpenZeppelin transparent proxy over a TimelockController",
    role: "Holds the base-fee revenue at the Sovereignty Vault address and enforces the execution delay. The only address the consensus layer commits to.",
  },
  {
    name: "Governor",
    what: "Stock OpenZeppelin Governor modules",
    role: "Runs the proposal lifecycle and tallies votes. It is the Timelock's sole executor.",
  },
  {
    name: "CoreNFT",
    what: "Minimal soulbound ERC-721, declared against ERC-5192",
    role: "Membership and voting power: one non-delegable vote per member. Holds no funds.",
  },
];

export function TreasuryGuaranteesSection() {
  return (
    <section className="section-deep py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="text-2xl font-bold tracking-tight">
            What the Design Rules Out
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
            An institution assessing the Olympia Treasury usually asks a narrower
            question than how it would be governed: what could go wrong with the
            funds, and who would have to be trusted for it to happen. ECIP-1111,
            ECIP-1112 and ECIP-1113 answer it in their design. The properties below
            are what those drafts require of the consensus rule and the contracts,
            rather than commitments anyone makes about them.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {invariants.map((inv, i) => {
            const Icon = inv.icon;
            return (
              <FadeIn key={inv.title} delay={i * 70} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5 transition-colors hover:border-[var(--border-strong)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <Icon size={20} aria-hidden="true" className="text-[var(--brand-green)]" />
                  </div>
                  <h3 className="text-sm font-semibold">{inv.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                    {inv.body}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={400}>
          <h3 className="mt-12 text-lg font-semibold tracking-tight">
            Three contracts, inspectable before the network commits
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
            The contracts would deploy before the activation fork, each against
            addresses that already exist, so the whole set can be read on-chain and
            reviewed before the network commits to it. Every contract that can hold
            or move funds is unmodified OpenZeppelin at a published release, which
            makes what the network audits a configuration rather than new code.
            CoreNFT is the one contract with written behavior, and it holds no
            funds.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--border-default)]">
                  <th scope="col" className="py-2 pr-4 font-semibold">Contract</th>
                  <th scope="col" className="py-2 pr-4 font-semibold">What it is</th>
                  <th scope="col" className="py-2 font-semibold">Role</th>
                </tr>
              </thead>
              <tbody>
                {contracts.map((c) => (
                  <tr key={c.name} className="border-b border-[var(--divider)] align-top">
                    <td className="py-3 pr-4 font-mono text-xs">{c.name}</td>
                    <td className="py-3 pr-4 text-xs leading-relaxed text-[var(--text-muted)]">{c.what}</td>
                    <td className="py-3 text-xs leading-relaxed text-[var(--text-muted)]">{c.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <FadeIn delay={480}>
          <div className="mt-10 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-6">
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Before activation, ECIP-1112 requires the Treasury&rsquo;s address,
              the verified source of every contract at and beneath it, where
              upgrade authority rests, and its full role table to be published and
              reproducible from chain state. That is what would let a third party
              confirm the properties above rather than trust them.
            </p>
            <a
              href={OLYMPIA_TREASURY_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-green)] transition hover:opacity-80"
            >
              The treasury site, olympiatreasury.org <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
