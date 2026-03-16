export function AuditTrailSection() {
  return (
    <section className="border-t border-[var(--border-default)] bg-[var(--bg-surface)] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-xl font-semibold">Hash-Bound Auditability</h2>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          Every off-chain action must correspond to a hash-bound proposal.
          Off-chain administrative actions precisely mirror on-chain
          counterparts, preventing drift, reinterpretation, or discretionary
          alteration.
        </p>

        <div className="mt-8 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] p-6">
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-subtle)]">
            Canonical Execution Tuple
          </p>
          <code className="mt-3 block font-mono text-sm text-[var(--brand-green)]">
            (ecfpId, recipient, amount, metadataCID, chainid)
          </code>
          <p className="mt-4 text-xs leading-relaxed text-[var(--text-muted)]">
            This tuple ensures integrity and replay protection, alignment
            between off-chain metadata and on-chain execution, auditability
            through matching hash-bound identifiers, and traceability to the
            original proposal metadata. The{" "}
            <code className="font-mono text-[var(--text-secondary)]">
              hashId
            </code>{" "}
            is computed as{" "}
            <code className="font-mono text-[var(--text-secondary)]">
              keccak256(ecfpId, recipient, amount, metadataCID, chainid)
            </code>{" "}
            per ECIP-1112.
          </p>
        </div>
      </div>
    </section>
  );
}
