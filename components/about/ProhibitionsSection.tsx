import { XCircle } from "lucide-react";

const prohibitions = [
  "Hold or control Treasury private keys",
  "Initiate, authorize, or route Treasury disbursements",
  "Veto, reinterpret, or modify approved ECFPs",
  "Circumvent the Governor → Timelock → Executor pipeline",
  "Combine protocol-level Treasury funds with donor or operational funds",
  "Introduce off-chain custody, signers, or multisig authority over on-chain funds",
  "Exercise governance influence or serve as a gatekeeper",
];

export function ProhibitionsSection() {
  return (
    <section className="border-t border-[var(--border-default)] bg-[var(--bg-surface)] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-xl font-semibold">
          The LLC{" "}
          <span className="text-[var(--color-error)]">MUST NOT</span>
        </h2>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          The LLC&apos;s role is purely administrative, never authoritative. Its
          scope and mandate remain narrow, revocable, and strictly limited to
          administrative facilitation.
        </p>

        <ul className="mt-8 space-y-4">
          {prohibitions.map((item) => (
            <li key={item} className="flex gap-3">
              <XCircle
                size={18}
                className="mt-0.5 shrink-0 text-[var(--color-error)]"
              />
              <span className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
