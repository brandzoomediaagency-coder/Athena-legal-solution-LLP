import SectionHeader from './SectionHeader';

type Testimonial = {
  quote: string;
  role: string;
  category: string;
};

const testimonials: Testimonial[] = [
  {
    quote: 'Professional and clear guidance throughout the consultation.',
    role: 'Individual Client',
    category: 'Civil Matter',
  },
  {
    quote: 'The team explained the documentation process in a structured way.',
    role: 'Business Owner, Delhi NCR',
    category: 'Corporate Advisory',
  },
  {
    quote: 'Helpful support for understanding the legal notice and next steps.',
    role: 'Client from Delhi',
    category: 'Legal Notice',
  },
  {
    quote: 'Confidential and practical consultation. No pressure, just clarity.',
    role: 'Property Matter Client',
    category: 'Property Dispute',
  },
  {
    quote: 'Clear communication and a professional approach to my matter.',
    role: 'Family Matter Client',
    category: 'Family Matter',
  },
  {
    quote: 'Guided us with proper document review and legal options.',
    role: 'Loan & Debt Support Client',
    category: 'Loan & Debt',
  },
  {
    quote: 'Measured tone, disciplined process. Exactly what we needed.',
    role: 'Corporate Advisory Client',
    category: 'Business Legal',
  },
  {
    quote: 'A structured first conversation made the whole situation feel manageable.',
    role: 'Individual Client',
    category: 'Recovery Support',
  },
];

const badges = [
  'Civil Cases',
  'Criminal Cases',
  'Family Matters',
  'Property Disputes',
  'Cheque Bounce',
  'Consumer Complaints',
  'Corporate Legal',
  'Legal Notice',
  'Loan Settlement',
  'Credit Card Settlement',
  'Recovery Support',
  'Documentation',
];

export default function TestimonialsMarquee() {
  // Duplicate the lists so the marquee can seamlessly loop using translateX(-50%)
  const ttDoubled = [...testimonials, ...testimonials];
  const bgDoubled = [...badges, ...badges];

  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 text-white md:py-20">
      <div className="absolute inset-0 bg-hero-pattern opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-container px-4 md:px-6">
        <SectionHeader
          light
          eyebrow="Client Trust & Feedback"
          title="What Clients Say About Working With Us"
          subtitle="Anonymised feedback shared by clients across multiple practice areas. Sample content, replaceable as verified feedback is received."
        />
      </div>

      {/* Quote marquee */}
      <div
        className="marquee-container relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-label="Client testimonial carousel"
      >
        <div className="marquee-track gap-5 pr-5">
          {ttDoubled.map((t, i) => (
            <figure
              key={i}
              className="w-[320px] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:w-[360px]"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                {t.category}
              </p>
              <blockquote className="mt-3 text-sm leading-relaxed text-white/85 md:text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-xs text-white/60">— {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Badge marquee — reverse */}
      <div
        className="marquee-container relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-label="Practice area badges"
        aria-hidden="true"
      >
        <div className="marquee-track marquee-track--slow marquee-track--reverse gap-3 pr-3">
          {bgDoubled.map((label, i) => (
            <span
              key={i}
              className="inline-flex shrink-0 items-center rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-xs font-medium text-gold md:text-sm"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <p className="relative mx-auto mt-8 max-w-2xl px-4 text-center text-xs text-white/50 md:px-6">
        Representative client feedback. Outcomes in any specific matter depend on facts,
        documents, applicable law, and the discretion of the competent court, authority,
        or lender.
      </p>
    </section>
  );
}
