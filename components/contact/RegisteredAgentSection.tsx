import { MapPin, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function RegisteredAgentSection() {
  return (
    <section className="hero-gradient-light pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Get in Touch
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Contact
          </h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            Registered agent information and official communication channels.
          </p>
        </FadeIn>

        <FadeIn>
          <h2 className="mt-12 text-xl font-bold">Registered Agent</h2>

          <div className="mt-6 rounded-xl bg-[var(--bg-elevated)] border border-[rgba(255,255,255,0.06)] p-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,255,174,0.08)]">
                <MapPin size={20} className="text-[var(--brand-green)]" />
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Ethereum Classic DAO LLC
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  30 N Gould St Ste R
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Sheridan, WY 82801
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  United States
                </p>
              </div>
            </div>

            <div className="mt-4 border-t border-[rgba(255,255,255,0.06)] pt-4">
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
        </FadeIn>
      </div>
    </section>
  );
}
