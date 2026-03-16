import { ExternalLink } from "lucide-react";

export function RegisteredAgentSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Registered agent information and official communication channels.
        </p>

        <h2 className="mt-12 text-xl font-bold">Registered Agent</h2>

        <div className="mt-6">
          <p className="text-sm text-[var(--text-secondary)]">
            Ethereum Classic DAO LLC
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            30 N Gould St Ste R
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            Sheridan, WY 82801
          </p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            United States
          </p>

          <a
            href="https://wyobiz.wyo.gov/business/FilingDetails.aspx?eFNum=101157225123250204055197221085227098244002050082"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
          >
            Wyoming Secretary of State Filing
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
