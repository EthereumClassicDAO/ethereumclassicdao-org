import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const documents = [
  {
    name: "Wyoming Secretary of State Filing",
    status: "available" as const,
    href: "https://wyobiz.wyo.gov/business/FilingDetails.aspx?eFNum=101157225123250204055197221085227098244002050082",
  },
  {
    name: "Governance Records",
    status: "pending" as const,
    note: "Following Mordor testnet activation",
  },
  {
    name: "Quarterly Reports",
    status: "pending" as const,
    note: "Following first fiscal quarter",
  },
  {
    name: "Proposal Execution Records",
    status: "pending" as const,
    note: "Following first governance proposal",
  },
  {
    name: "Annual Financial Summary",
    status: "pending" as const,
    note: "Following first fiscal year",
  },
];

export function DocumentsSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="documents-heading" className="section-gradient py-20">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="documents-heading" className="text-xl font-bold">Documents</h2>
          </FadeIn>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {documents.map((doc, i) => (
              <FadeIn key={doc.name} delay={i * 80} className="h-full">
                {doc.status === "available" && doc.href ? (
                  <div className="h-full rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-brand)] shadow-[0_0_20px_var(--border-glow)] p-5">
                    <div className="flex items-start justify-between">
                      <p className="text-sm font-semibold">{doc.name}</p>
                      <span className="badge-available">Available</span>
                    </div>
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                    >
                      View document
                      <ExternalLink size={12} />
                    </a>
                  </div>
                ) : (
                  <div className="h-full rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-5">
                    <div className="flex items-start justify-between">
                      <p className="text-sm font-semibold">{doc.name}</p>
                      <span className="badge-pending">Pending</span>
                    </div>
                    {doc.status === "pending" && "note" in doc && doc.note && (
                      <p className="mt-2 text-xs text-[var(--text-subtle)]">
                        {doc.note}
                      </p>
                    )}
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
