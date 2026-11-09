import { FadeIn } from "@/components/ui/FadeIn";
import { OLYMPIA_STATUS, ecipUrl } from "@/lib/network-links";

const ecips = [1111, 1112, 1113];

export function TreasuryHeroSection() {
  return (
    <section className="hero-gradient noise-overlay relative pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Treasury
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-[var(--brand-green)]">Olympia</span> Treasury
          </h1>
          <p className="mt-4">
            <span className="badge-pending">{OLYMPIA_STATUS}</span>
          </p>
          <p className="mt-6 text-lg text-[var(--text-muted)]">
            As Olympia proposes it, the Treasury would fund Ethereum Classic&rsquo;s
            core development from the network&rsquo;s own use rather than from any
            single organization&rsquo;s continued support. ECIP-1111 would credit
            it with the EIP-1559 base fee of every transaction, a fee Ethereum
            destroys, while block rewards and priority-fee tips would still go to
            miners, as they do today.
          </p>
          <p className="mt-4 text-base text-[var(--text-muted)]">
            Its address would be the Sovereignty Vault (ECIP-1112), written into
            every client&rsquo;s chain configuration by the activation fork and
            changeable only by a further hard fork, so no on-chain party could
            redirect the revenue. A stock OpenZeppelin transparent proxy would sit
            at that address, so a security fix could reach the logic behind it
            without a chain split while the address stays where it is. The balance would
            leave only through Olympia DAO&rsquo;s governance (ECIP-1113), with no
            admin key and no multisig.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {ecips.map((n) => (
              <a
                key={n}
                href={ecipUrl(n)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--brand-green-subtle)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
              >
                ECIP-{n}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
