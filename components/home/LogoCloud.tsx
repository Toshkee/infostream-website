const partners = [
  "Ministry of Finance",
  "Parliament ERP",
  "Central Bank",
  "Ministry of Interior",
  "Tax Authority",
  "Ministry of Defense",
];

export function LogoCloud({ label }: { label: string }) {
  return (
    <section className="border-y border-border bg-[var(--c-bg)] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          {label}
        </p>
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <li
              key={p}
              className="text-center text-sm font-medium text-body/70 transition-colors hover:text-heading"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
