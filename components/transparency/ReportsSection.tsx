const reportTypes = [
  {
    label: "Donation Receipts",
    description: "Records of all donations received by the organization",
  },
  {
    label: "Contractor Onboarding Logs",
    description: "Compliance records to the extent legally permissible",
  },
  {
    label: "Administrative Cost Summaries",
    description: "Operational expenses and overhead tracking",
  },
  {
    label: "Fiat Conversion Records",
    description: "Conversion dates, amounts, and rates",
  },
  {
    label: "Proposal Execution Records",
    description: "Corresponding identifiers for every off-chain disbursement",
  },
];

export function ReportsSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Disclosures
        </h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Ethereum Classic DAO is committed to publishing periodic public
          reports. All governance operations and financial activities will be
          disclosed transparently.
        </p>

        <h2 className="mt-12 text-xl font-bold">Reporting Framework</h2>

        <div className="mt-6 divide-y divide-[var(--divider)]">
          {reportTypes.map((report) => (
            <div key={report.label} className="py-4">
              <p className="text-sm font-semibold text-white">
                {report.label}
              </p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {report.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
