import { ExternalLink } from "lucide-react";

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
    <section className="border-t border-[var(--border-default)] py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-xl font-bold">Documents</h2>

        <div className="mt-8 divide-y divide-[var(--divider)]">
          {documents.map((doc) => (
            <div
              key={doc.name}
              className="flex items-center justify-between py-4"
            >
              <div>
                <p className="text-sm font-semibold text-white">{doc.name}</p>
                {doc.status === "pending" && doc.note && (
                  <p className="mt-0.5 text-xs text-[var(--text-subtle)]">
                    {doc.note}
                  </p>
                )}
              </div>
              {doc.status === "available" && doc.href ? (
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                >
                  View
                  <ExternalLink size={12} />
                </a>
              ) : (
                <span className="text-xs text-[var(--text-subtle)]">
                  Pending
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
