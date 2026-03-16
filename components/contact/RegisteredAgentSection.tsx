import { MapPin, ExternalLink } from "lucide-react";

export function RegisteredAgentSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Registered agent information and official communication channels.
        </p>

        <div className="mt-12 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] p-8 shadow-[var(--card-shadow)]">
          <div className="flex gap-3">
            <MapPin
              size={20}
              className="mt-0.5 shrink-0 text-[var(--brand-green)]"
            />
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-subtle)]">
                Registered Agent Address
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
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
            </div>
          </div>

          <div className="mt-6 border-t border-[var(--border-default)] pt-4">
            <a
              href="https://wyobiz.wyo.gov/business/FilingDetails.aspx?eFNum=101157225123250204055197221085227098244002050082"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
            >
              Wyoming Secretary of State Filing
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
