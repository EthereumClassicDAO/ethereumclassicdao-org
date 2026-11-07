import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { eipsIn, type OlympiaEip } from "@/lib/olympia-eips";
import { eipUrl, ecipUrl } from "@/lib/network-links";

const UPGRADES = ["Dencun", "Pectra", "Fusaka", "Glamsterdam"];

function EipList({ rows }: { rows: readonly OlympiaEip[] }) {
  return (
    <ul className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
      {rows.map((row) => (
        <li key={row.eip} className="text-xs leading-relaxed text-[var(--text-muted)]">
          <a
            href={eipUrl(row.eip)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-[var(--color-violet-bg)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-violet)] transition-colors hover:text-[var(--text-primary)]"
          >
            EIP-{row.eip}
          </a>{" "}
          {row.label}
        </li>
      ))}
    </ul>
  );
}

function Group({ title, note, rows }: { title: string; note: string; rows: readonly OlympiaEip[] }) {
  return (
    <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-sm font-semibold">{title}</h3>
        <span className="font-mono text-xs text-[var(--text-subtle)]">{rows.length} EIPs</span>
      </div>
      <p className="mt-1 text-xs leading-relaxed text-[var(--text-subtle)]">{note}</p>
      <EipList rows={rows} />
    </div>
  );
}

function Collapsed({ title, note, rows }: { title: string; note: string; rows: readonly OlympiaEip[] }) {
  return (
    <details className="group rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5">
      <summary className="flex cursor-pointer list-none flex-wrap items-baseline justify-between gap-2">
        <span className="text-sm font-semibold">{title}</span>
        <span className="font-mono text-xs text-[var(--text-subtle)]">
          {rows.length} EIPs <span aria-hidden="true" className="ml-1 inline-block transition-transform group-open:rotate-90">›</span>
        </span>
      </summary>
      <p className="mt-2 text-xs leading-relaxed text-[var(--text-subtle)]">{note}</p>
      <EipList rows={rows} />
    </details>
  );
}

export function OlympiaEvmSection() {
  const core = eipsIn("core");
  const modified = eipsIn("modified");
  const noBlock = [...eipsIn("networking"), ...eipsIn("interface")];
  const blocked = eipsIn("blocked");
  const deferred = eipsIn("deferred");
  const excluded = eipsIn("excluded");
  const inForce = eipsIn("in-force");

  return (
    <>
      <SectionDivider />
      <section aria-labelledby="olympia-evm-heading" className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="mb-1 font-mono text-xs text-[var(--brand-green)]">ECIP-1121</p>
            <h2 id="olympia-evm-heading" className="text-2xl font-bold tracking-tight">
              EVM Alignment Through Glamsterdam
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
              ECIP-1121 advances Ethereum Classic&rsquo;s execution layer through
              Dencun, Pectra and Fusaka, and carries that work into Glamsterdam.
              It gives every execution-layer EIP of those four upgrades one
              disposition. Glamsterdam is included without being adopted whole:
              ECIP-1121 adopts part of its set, holds {blocked.length} of its EIPs
              on a dependency, and defers or excludes those tied to blob data
              availability or Proof-of-Stake.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
              Ethereum Classic is at Shanghai until the activation block, so the
              instructions these EIPs add, such as TLOAD, TSTORE and MCOPY, are
              not valid on it before then (ECIP-1121 §&ldquo;Instruction Set Before and After Activation&rdquo;).
              Modern EVM tooling assumes EIP-1559, and ECIP-1111 would remove the
              Ethereum Classic-specific path that integrators maintain for it
              today.
            </p>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="mt-8 rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold">Adopted at the Olympia block</h3>
                <span className="font-mono text-xs text-[var(--text-subtle)]">{core.length} EIPs</span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-[var(--text-subtle)]">
                Core EIPs: each changes what blocks are valid, and takes effect only
                at the activation block.
              </p>
              {UPGRADES.map((upgrade) => (
                <div key={upgrade} className="mt-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-subtle)]">{upgrade}</p>
                  <EipList rows={core.filter((row) => row.group === upgrade)} />
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <FadeIn delay={120} className="h-full">
              <Group
                title="Adopted with a modification"
                note="Each is adopted at the same block, with a change Ethereum Classic's Proof-of-Work consensus requires. ECIP-1111 states it for EIP-1559 and EIP-3198, and another ECIP in the suite for the block access list EIPs."
                rows={modified}
              />
            </FadeIn>
            <FadeIn delay={160} className="h-full">
              <Group
                title="Adopted without a block"
                note="Networking and interface EIPs. A client may adopt them before or after the activation block, through capability negotiation or as an API."
                rows={noBlock}
              />
            </FadeIn>
          </div>

          <FadeIn delay={200}>
            <div className="mt-4">
              <Group
                title="Blocked by a dependency"
                note="Tracked, not rejected: each depends on an EIP that is out of scope, and adopting it waits on resolving that dependency rather than on a judgment about the EIP."
                rows={blocked}
              />
            </div>
          </FadeIn>

          <div className="mt-4 grid gap-4">
            <Collapsed
              title="Deferred"
              note="Blob data availability. Ethereum Classic does not implement blobs, and deferral does not imply rejection."
              rows={deferred}
            />
            <Collapsed
              title="Excluded"
              note="Proof-of-Stake EIPs, which do not apply to a Proof-of-Work chain, and EIPs with no client behavior to adopt."
              rows={excluded}
            />
            <Collapsed
              title="In force before Olympia"
              note="EIPs the adopted ones depend on that Ethereum Classic already runs, from earlier upgrades and the devp2p lineage."
              rows={inForce}
            />
          </div>

          <FadeIn delay={240}>
            <a
              href={ecipUrl(1121)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
            >
              Read ECIP-1121 &rarr;
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
