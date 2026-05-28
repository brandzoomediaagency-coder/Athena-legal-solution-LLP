import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig, trustMicrocopy } from '@/lib/site';
import { services } from '@/lib/services';
import ServiceCard from '@/components/ServiceCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import FAQAccordion from '@/components/FAQAccordion';
import LeadForm from '@/components/LeadForm';
import SectionHeader from '@/components/SectionHeader';
import { FAQLd } from '@/components/SchemaJsonLd';
import {
  CheckIcon,
  HandshakeIcon,
  LockIcon,
  ScaleIcon,
  ShieldIcon,
  WhatsAppIcon,
} from '@/components/Icons';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} | Loan Settlement & Legal Advisory Support`,
  description: siteConfig.description,
  path: '/',
});

const homeFaqs = [
  {
    q: 'What is loan settlement?',
    a: 'Loan settlement is a negotiated arrangement between a borrower and lender to close an outstanding loan at a reduced one-time payment, typically when the borrower is unable to continue regular EMIs. The terms and impact vary by lender.',
  },
  {
    q: 'Can credit card dues be settled?',
    a: 'In some cases, banks consider reduced one-time settlement of credit card dues based on the cardholder\'s hardship profile, account status, and documentation. The outcome depends on the bank\'s policy.',
  },
  {
    q: 'Does loan settlement affect CIBIL score?',
    a: 'A settled loan is generally reported as "Settled" rather than "Closed" with credit bureaus, which can impact future credit decisions. The exact effect depends on the lender and bureau reporting.',
  },
  {
    q: 'Can recovery agents call my family members?',
    a: 'Recovery agents are generally expected to contact the borrower (and any co-borrower or guarantor on record). Repeated calls to uninvolved family members may not be appropriate practice.',
  },
  {
    q: 'What should I do if I receive a legal notice?',
    a: 'Do not ignore it. Preserve the document, note the date received, and have it reviewed before sending any reply. A formal reply has legal consequences and should not be drafted casually.',
  },
  {
    q: 'How long does the settlement process take?',
    a: 'Timelines vary based on lender, case complexity, and document availability. Some matters close in weeks, others take several months.',
  },
  {
    q: 'Do you guarantee settlement?',
    a: 'No. Athena Legal Solution LLP does not guarantee any specific settlement outcome or percentage. Outcomes depend on lender policy, documents, outstanding amount, and case review.',
  },
];

const whyChoose = [
  {
    icon: ScaleIcon,
    title: 'Legal-first advisory approach',
    text: 'Documentation, statutes, and structured process — not informal promises.',
  },
  {
    icon: ShieldIcon,
    title: 'Confidential handling',
    text: 'Your situation, documents, and conversations are treated with strict confidentiality.',
  },
  {
    icon: HandshakeIcon,
    title: 'Practical guidance',
    text: 'Realistic expectations, clear trade-offs, and grounded next steps.',
  },
  {
    icon: LockIcon,
    title: 'Documentation-focused',
    text: 'Every step is built on records, written communication, and a clean paper trail.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-hero-pattern" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:48px_48px]" aria-hidden="true" />

        <div className="mx-auto grid max-w-container gap-12 px-4 pb-20 pt-14 md:grid-cols-12 md:px-6 md:pb-28 md:pt-20 lg:gap-16">
          <div className="md:col-span-7">
            <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Legal & Financial Advisory
            </span>
            <h1 className="mt-5 font-heading text-4xl leading-tight md:text-5xl lg:text-6xl">
              Loan Settlement & Legal Support{' '}
              <span className="bg-gold-gradient bg-clip-text text-transparent">You Can Trust</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Practical legal and financial advisory support for individuals and businesses
              dealing with loan defaults, credit card dues, lender pressure, and
              recovery-related concerns.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                data-cta="hero-primary"
                className="rounded-full bg-gold-gradient px-6 py-3.5 text-sm font-semibold text-navy shadow-gold transition hover:opacity-95"
              >
                Book Confidential Consultation
              </Link>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hero-whatsapp"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-emerald-accent hover:text-emerald-accent"
              >
                <WhatsAppIcon className="h-4 w-4" /> Talk on WhatsApp
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/70 sm:text-sm">
              {trustMicrocopy.map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-gold" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <div className="glass-card relative rounded-3xl p-6 shadow-premium md:p-8">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.svg"
                  alt="Athena Legal Solution LLP"
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
                <div>
                  <p className="font-heading text-lg text-white">Confidential Case Review</p>
                  <p className="text-xs text-white/65">No obligation • Pan-India</p>
                </div>
              </div>
              <h2 className="mt-5 text-sm font-semibold uppercase tracking-widest text-gold">
                What we review
              </h2>
              <ul className="mt-3 space-y-3 text-sm text-white/85">
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-emerald-accent" /> Loan / card position, EMIs and outstanding</li>
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-emerald-accent" /> Lender communication and notices on record</li>
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-emerald-accent" /> Hardship documentation and timeline</li>
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-emerald-accent" /> Realistic options and next steps</li>
              </ul>
              <Link
                href="/contact"
                className="mt-6 block rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-navy shadow-sm hover:opacity-95"
              >
                Request Case Review
              </Link>

              {/* Floating mini cards */}
              <div className="pointer-events-none absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/15 bg-navy/90 px-4 py-3 text-xs text-white shadow-premium md:block">
                <span className="block font-semibold text-gold">Loan Settlement</span>
                <span className="text-white/60">Personal · Business</span>
              </div>
              <div className="pointer-events-none absolute -right-4 top-10 hidden rounded-2xl border border-white/15 bg-navy/90 px-4 py-3 text-xs text-white shadow-premium md:block">
                <span className="block font-semibold text-gold">Legal Notice</span>
                <span className="text-white/60">Review & Reply</span>
              </div>
              <div className="pointer-events-none absolute -right-3 -bottom-6 hidden rounded-2xl border border-white/15 bg-navy/90 px-4 py-3 text-xs text-white shadow-premium md:block">
                <span className="block font-semibold text-gold">Recovery Support</span>
                <span className="text-white/60">Borrower Rights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-slate-soft/50 py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader
            eyebrow="Why people reach out"
            title="Facing Loan Pressure, Recovery Calls or Credit Card Dues?"
            subtitle="Many borrowers face stress due to overdue EMIs, repeated collection calls, legal notices, or uncertainty about settlement options. Athena Legal Solution LLP helps clients understand their position, review documents, and take informed steps through a structured legal and financial advisory process."
          />
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader
            eyebrow="Our Services"
            title="Where We Support Borrowers"
            subtitle="Specialised advisory engagements built on documentation, process, and clear borrower communication."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy py-16 text-white md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader
            light
            eyebrow="How It Works"
            title="A Transparent Six-Step Process"
            subtitle="No shortcuts and no promises beyond what process and documents can support."
          />
          <div className="mt-12">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader
            eyebrow="Why Athena"
            title="Why Borrowers Choose Athena Legal Solution LLP"
            subtitle="A legal-first advisory firm built around documentation, process discipline, and realistic guidance."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w) => (
              <div key={w.title} className="rounded-2xl border border-slate-soft bg-white p-6 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                  <w.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg text-navy">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / case-style strip */}
      <section className="bg-slate-soft/60 py-16 md:py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader
            eyebrow="Client Experience"
            title="The Kind of Outcomes Our Clients Talk About"
            subtitle="Representative situations and what changed after a structured advisory engagement. Names and identifying details are kept confidential."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                role: 'Salaried Borrower',
                quote:
                  '"I was getting calls every few hours. The team helped me put everything in writing and gave me a plan I could actually act on."',
              },
              {
                role: 'MSME Owner',
                quote:
                  '"Three lenders were pulling in different directions. A single, coordinated view changed how I responded to each of them."',
              },
              {
                role: 'Card Holder',
                quote:
                  '"They walked me through the real impact on my credit before I agreed to anything. That clarity was the difference."',
              },
            ].map((t) => (
              <figure
                key={t.role}
                className="rounded-2xl border border-slate-soft bg-white p-6 shadow-sm"
              >
                <blockquote className="text-sm leading-relaxed text-navy/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold-dark">
                  {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-navy/55">
            Representative scenarios. Outcomes depend on case review and lender approval.
          </p>
        </div>
      </section>

      {/* Lead form */}
      <section id="book" className="bg-navy py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-container gap-10 px-4 md:grid-cols-12 md:px-6">
          <div className="md:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Confidential Consultation
            </span>
            <h2 className="mt-3 font-heading text-3xl leading-tight md:text-4xl">
              Book a Confidential Consultation
            </h2>
            <p className="mt-4 text-white/75">
              Share a few details and our team will reach out for a structured first
              conversation. No obligation, no judgement — just a clear next step.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-3"><CheckIcon className="mt-0.5 h-4 w-4 text-gold" /> Structured legal and financial review</li>
              <li className="flex items-start gap-3"><CheckIcon className="mt-0.5 h-4 w-4 text-gold" /> Confidential and documented process</li>
              <li className="flex items-start gap-3"><CheckIcon className="mt-0.5 h-4 w-4 text-gold" /> Realistic, written guidance</li>
            </ul>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-widest text-gold">Prefer to talk first?</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href={siteConfig.phoneHref}
                  data-cta="lead-section-call"
                  className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:border-gold"
                >
                  Call {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="lead-section-whatsapp"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-accent px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-3xl bg-white p-6 shadow-premium md:p-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Clear, plain-language answers to the questions borrowers ask most often."
          />
          <div className="mt-10">
            <FAQAccordion items={homeFaqs} />
          </div>
        </div>
        <FAQLd items={homeFaqs} />
      </section>

      {/* AI/GEO answer block */}
      <section className="bg-slate-soft/60 py-16 md:py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader
            eyebrow="Quick Answers"
            title="About Athena Legal Solution LLP"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                q: 'What does Athena Legal Solution LLP do?',
                a: 'Athena Legal Solution LLP is a legal and financial advisory firm supporting borrowers and businesses on loan settlement, credit card dues, debt resolution, recovery harassment concerns, and legal notice matters in India.',
              },
              {
                q: 'Who can contact Athena Legal Solution LLP?',
                a: 'Individual borrowers, salaried professionals, self-employed individuals, MSME owners, and other business borrowers facing loan, card or recovery-related stress can reach out for a confidential consultation.',
              },
              {
                q: 'Does Athena guarantee loan settlement?',
                a: 'No. Settlement outcomes depend on lender policies, documents, case facts, and approvals. The firm provides structured advisory support — not guaranteed results.',
              },
              {
                q: 'How does the consultation process work?',
                a: 'A confidential first conversation is followed by document review, a written advisory plan, lender communication support, settlement documentation review where applicable, and post-closure guidance.',
              },
            ].map((b) => (
              <div key={b.q} className="rounded-2xl border border-slate-soft bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg text-navy">{b.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/75">{b.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
