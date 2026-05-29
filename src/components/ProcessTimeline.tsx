const steps = [
  {
    title: 'Confidential Consultation',
    description:
      'A discreet first conversation to understand your situation, priorities, and constraints.',
  },
  {
    title: 'Case & Document Review',
    description:
      'A structured review of agreements, statements, notices, and communications on record.',
  },
  {
    title: 'Strategy Planning',
    description:
      'A clear, written plan covering options, sequencing, and what each step realistically delivers.',
  },
  {
    title: 'Communication & Negotiation Support',
    description:
      'We help shape lender communication and represent your position with the right tone and record.',
  },
  {
    title: 'Settlement / Resolution Documentation',
    description:
      'Careful review of settlement letters, no-dues confirmation, and closure documents.',
  },
  {
    title: 'Closure Guidance',
    description:
      'Post-closure checks — bureau reflection, future credit considerations, and record-keeping.',
  },
];

export default function ProcessTimeline() {
  return (
    <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <li
          key={i}
          className="relative rounded-2xl border border-slate-soft bg-white p-6 shadow-sm transition hover:border-gold"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient font-heading text-lg font-semibold text-navy shadow-gold">
              {i + 1}
            </span>
            <h3 className="font-heading text-lg text-navy">{s.title}</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-navy/70">{s.description}</p>
        </li>
      ))}
    </ol>
  );
}
