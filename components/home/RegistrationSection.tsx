import { ExternalLink, FileCheck, MapPin, Calendar, Hash, Shield } from "lucide-react";

const registrationFields = [
  { icon: FileCheck, label: "Entity Name", value: "Ethereum Classic DAO LLC" },
  { icon: Hash, label: "Filing ID", value: "2025-001671865" },
  {
    icon: Shield,
    label: "Type",
    value: "LLC — Domestic / Decentralized Autonomous Organization",
  },
  { icon: FileCheck, label: "Status", value: "Active, Good Standing" },
  { icon: Calendar, label: "Filed", value: "May 6, 2025 · Perpetual Term" },
  {
    icon: MapPin,
    label: "Address",
    value: "30 N Gould St Ste R, Sheridan, WY 82801",
  },
];

export function RegistrationSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          Wyoming Secretary of State Registration
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--text-muted)]">
          Registered under the Wyoming DAO LLC Act as a decentralized autonomous
          organization.
        </p>

        <div className="mt-12 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] p-8 shadow-[var(--card-shadow)]">
          <div className="grid gap-6 sm:grid-cols-2">
            {registrationFields.map((field) => (
              <div key={field.label} className="flex gap-3">
                <field.icon
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--brand-green)]"
                />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-subtle)]">
                    {field.label}
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {field.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-[var(--border-default)] pt-6 text-center">
            <a
              href="https://wyobiz.wyo.gov/business/FilingDetails.aspx?eFNum=101157225123250204055197221085227098244002050082"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
            >
              View on Wyoming Secretary of State Registry
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
