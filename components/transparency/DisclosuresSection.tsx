import { Clock } from "lucide-react";

export function DisclosuresSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-xl font-semibold">Public Disclosures</h2>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          DAO participants may, through standard governance, reassign LLC
          administrative roles or rotate signers via term-limited elections. The
          LLC&apos;s scope remains narrow, revocable, and strictly limited.
        </p>

        <div className="mt-8 flex flex-col items-center rounded-xl border border-dashed border-[var(--border-default)] bg-[var(--bg-card)] p-12 text-center">
          <Clock size={32} className="text-[var(--text-subtle)]" />
          <p className="mt-4 text-sm font-medium text-[var(--text-secondary)]">
            Reports will be published here as governance operations begin
          </p>
          <p className="mt-2 text-xs text-[var(--text-subtle)]">
            The Olympia hard fork activates on Mordor testnet at block
            15,800,850 (~March 28, 2026). Treasury accumulation and governance
            operations follow activation.
          </p>
        </div>
      </div>
    </section>
  );
}
