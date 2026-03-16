export function AboutSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          About Ethereum Classic DAO
        </h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-[var(--text-secondary)]">
          <p>
            Ethereum Classic DAO LLC is the organizational entity behind
            Ethereum Classic&rsquo;s Olympia DAO — a governance system designed
            to fund and coordinate development of the Ethereum Classic protocol.
          </p>
          <p>
            As the largest Proof-of-Work blockchain with native smart contracts,
            Ethereum Classic occupies a unique position in the digital asset
            landscape. It combines the security guarantees of Proof-of-Work
            consensus with the programmability of the Ethereum Virtual Machine —
            a combination that no other blockchain offers at scale.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-bold">The Olympia Upgrade</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-[var(--text-secondary)]">
            <p>
              The Olympia hard fork introduces protocol-level treasury funding,
              decentralized governance, and smart contract-based proposal
              execution to Ethereum Classic. It represents the most significant
              protocol upgrade in Ethereum Classic&rsquo;s history.
            </p>
            <p>
              Through Olympia, a portion of block rewards funds a
              protocol-managed treasury. Community members submit proposals,
              vote on resource allocation, and execute decisions — all on-chain,
              all transparent, all permissionless.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-bold">What We Build</h2>
          <ul className="mt-4 space-y-3 text-base leading-relaxed text-[var(--text-secondary)]">
            <li>Protocol governance infrastructure — proposal, voting, and execution systems</li>
            <li>Treasury management and transparency tooling</li>
            <li>Developer ecosystem and documentation</li>
            <li>Institutional compliance and regulatory interface</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
