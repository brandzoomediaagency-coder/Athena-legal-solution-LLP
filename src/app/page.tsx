import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig, trustMicrocopy } from '@/lib/site';
import { practiceAreasMain, loanDebtServices } from '@/lib/practiceAreas';
import PracticeCard from '@/components/PracticeCard';
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
  PhoneIcon,
} from '@/components/Icons';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} | Legal Consultation & Dispute Resolution Support in Delhi`,
  description: siteConfig.description,
  path: '/',
});

const homeFaqs = [
  {
    q: 'What does Athena Legal Solution LLP do?',
    a: 'Athena Legal Solution LLP is a legal solution firm providing consultation, documentation support, dispute resolution guidance, and financial legal advisory across civil, criminal, family, property, cheque bounce, consumer, corporate, employment, cyber, arbitration, and loan / debt matters.',
  },
  {
    q: 'Does Athena handle only loan settlement cases?',
    a: 'No. Loan settlement is one of several focused services. We also handle civil, criminal, family, property, cheque bounce, consumer, corporate, employment, cyber, legal notice, documentation, and arbitration / mediation matters.',
  },
  {
    q: 'Who can contact Athena Legal Solution LLP?',
    a: 'Individuals, families, salaried professionals, self-employed individuals, MSME owners, and other businesses across Delhi NCR and pan-India can reach out for a confidential legal consultation.',
  },
  {
    q: 'Where is Athena Legal Solution LLP located?',
    a: 'Our base is around Tis Hazari Court, New Delhi. Consultations are available in-person and remotely.',
  },
  {
    q: 'Does Athena Legal Solution LLP guarantee outcomes?',
    a: 'No. Outcomes depend on facts, documents, applicable law, and the discretion of the competent court, authority, or lender. We do not promise specific results.',
  },
  {
    q: 'How does the consultation process work?',
    a: 'A confidential first conversation is followed by document review, a written strategy summary, drafting / representation support where applicable, and follow-up advisory.',
  },
  {
    q: 'What should I do if I receive a legal notice?',
    a: 'Do not ignore it. Preserve the document, note the date received and any deadline, and have it reviewed before sending any reply.',
  },
];

const whyChoose = [
  {
    icon: ScaleIcon,
    title: 'Structured legal consultation',
    text: 'Documentation, statutes, and a defined process — not informal promises.',
  },
  {
    icon: ShieldIcon,
    title: 'Confidential handling',
    text: 'Your situation, documents, and conversations stay strictly confidential.',
  },
  {
    icon: HandshakeIcon,
    title: 'Practical case guidance',
    text: 'Realistic expectations, clear trade-offs, and grounded next steps.',
  },
  {
    icon: LockIcon,
    title: 'Documentation-focused',
    text: 'Every engagement is built on records, written communication, and a clean paper trail.',
  },
];

const floatingCards = [
  { label: 'Civil Cases', sub: 'Recovery · Injunction', color: 'text-gold' },
  { label: 'Criminal Cases', sub: 'FIR · Bail · Complaint', color: 'text-gold' },
  { label: 'Family Matters', sub: 'Divorce · Custody', color: 'text-gold' },
  { label: 'Property Disputes', sub: 'Title · Possession', color: 'text-gold' },
  { label: 'Loan Settlement', sub: 'Personal · Business', color: 'text-emerald-accent' },
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
              Legal Solution Firm · Delhi NCR
            </span>
            <h1 className="mt-5 font-heading text-4xl leading-tight md:text-5xl lg:text-6xl">
              Comprehensive Legal Solutions for{' '}
              <span className="bg-gold-gradient bg-clip-text text-transparent">Individuals, Families &amp; Businesses</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Athena Legal Solution LLP provides practical legal consultation, documentation
              support, dispute resolution guidance, debt resolution support, and legal
              advisory services across multiple areas of law.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact-us"
                data-cta="hero-primary"
                className="rounded-full bg-gold-gradient px-6 py-3.5 text-sm font-semibold text-navy shadow-gold transition hover:opacity-95"
              >
                Book Legal Consultation
              </Link>
              <a
                href={siteConfig.whatsappPrefilled('General Legal Matter')}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hero-whatsapp"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-emerald-accent hover:text-emerald-accent"
              >
                <WhatsAppIcon className="h-4 w-4" /> Talk to Our Team
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/70 sm:text-sm">
              {trustMicrocopy.map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-gold" /> {t}
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/65">
              From civil, criminal, family, property, corporate, cheque bounce, consumer,
              recovery harassment, and financial dispute matters — our team helps you take
              the right next step with clarity.
            </p>
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
                  <p className="text-xs text-white/65">No obligation · Pan-India</p>
                </div>
              </div>
              <h2 className="mt-5 text-sm font-semibold uppercase tracking-widest text-gold">
                We help across
              </h2>
              <ul className="mt-3 grid gap-2 text-sm text-white/85">
                {floatingCards.map((c) => (
                  <li key={c.label} className="flex items-start gap-2">
                    <CheckIcon className={`mt-0.5 h-4 w-4 ${c.color}`} />
                    <span>
                      <span className="font-semibold text-white">{c.label}</span>{' '}
                      <span className="text-white/60">— {c.sub}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact-us"
                className="mt-6 block rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-navy shadow-sm hover:opacity-95"
              >
                Request Case Review
              </Link>

              <div className="pointer-events-none absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/15 bg-navy/90 px-4 py-3 text-xs text-white shadow-premium md:block">
                <span className="block font-semibold text-gold">Civil &amp; Criminal</span>
                <span className="text-white/60">Consultation · Drafting</span>
              </div>
              <div className="pointer-events-none absolute -right-4 top-10 hidden rounded-2xl border border-white/15 bg-navy/90 px-4 py-3 text-xs text-white shadow-premium md:block">
                <span className="block font-semibold text-gold">Family &amp; Property</span>
                <span className="text-white/60">Dispute Support</span>
              </div>
              <div className="pointer-events-none absolute -right-3 -bottom-6 hidden rounded-2xl border border-white/15 bg-navy/90 px-4 py-3 text-xs text-white shadow-premium md:block">
                <span className="block font-semibold text-emerald-accent">Loan Settlement</span>
                <span className="text-white/60">Recovery Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader
            eyebrow="Practice Areas"
            title="Where Athena Legal Solution LLP Provides Consultation"
            subtitle="Twelve focused legal practice areas, plus a dedicated loan & debt support track — handled with documentation discipline."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreasMain.map((p) => (
              <PracticeCard key={p.slug} practice={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/practice-areas"
              className="inline-block rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy hover:border-gold hover:text-gold-dark"
            >
              View all practice areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-slate-soft/60 py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader
            eyebrow="Why Athena"
            title="Why Clients Choose Athena Legal Solution LLP"
            subtitle="A legal-first advisory approach built around documentation, process discipline, and realistic guidance."
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

      {/* Loan & Debt Support — kept prominent */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader
            eyebrow="Legal & Financial Support"
            title="Loan, Card, Recovery & Debt Resolution Advisory"
            subtitle="A dedicated track for borrowers and businesses dealing with overdue EMIs, credit card dues, recovery harassment, and multi-lender debt resolution."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {loanDebtServices.map((p) => (
              <PracticeCard key={p.slug} practice={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-slate-soft/50 py-16 md:py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader
            eyebrow="Client Experience"
            title="The Kind of Outcomes Clients Talk About"
            subtitle="Representative situations and what changed after a structured legal engagement. Names and identifying details are kept confidential."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                role: 'Salaried Professional',
                quote:
                  '"I was getting calls every few hours from a lender. The team helped me put everything in writing and gave me a structured plan."',
              },
              {
                role: 'MSME Owner',
                quote:
                  '"A vendor dispute had been stuck for months. A measured legal notice and a clean documentation trail moved the conversation."',
              },
              {
                role: 'Property Buyer',
                quote:
                  '"I almost signed an agreement that had two clauses I didn\'t understand. The review caught both."',
              },
            ].map((t) => (
              <figure key={t.role} className="rounded-2xl border border-slate-soft bg-white p-6 shadow-sm">
                <blockquote className="text-sm leading-relaxed text-navy/80">{t.quote}</blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold-dark">
                  {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-navy/55">
            Representative scenarios. Outcomes depend on facts, documents, applicable law,
            and authority / court / lender approval.
          </p>
        </div>
      </section>

      {/* Lead form */}
      <section id="book" className="bg-navy py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-container gap-10 px-4 md:grid-cols-12 md:px-6">
          <div className="md:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Need legal guidance?
            </span>
            <h2 className="mt-3 font-heading text-3xl leading-tight md:text-4xl">
              Speak with Athena Legal Solution LLP
            </h2>
            <p className="mt-4 text-white/75">
              Share a few details and our team will reach out for a structured first
              conversation. No obligation, no judgement — just a clear next step.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-3"><CheckIcon className="mt-0.5 h-4 w-4 text-gold" /> Confidential legal consultation</li>
              <li className="flex items-start gap-3"><CheckIcon className="mt-0.5 h-4 w-4 text-gold" /> Documentation and case review</li>
              <li className="flex items-start gap-3"><CheckIcon className="mt-0.5 h-4 w-4 text-gold" /> Practical, written guidance</li>
            </ul>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-widest text-gold">Prefer to talk first?</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href={siteConfig.phoneHref}
                  data-cta="lead-section-call"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:border-gold"
                >
                  <PhoneIcon className="h-4 w-4" /> Call {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.whatsappPrefilled('General Legal Matter')}
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
            subtitle="Clear, plain-language answers to the questions clients ask most often."
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
          <SectionHeader eyebrow="Quick Answers" title="About Athena Legal Solution LLP" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                q: 'What is Athena Legal Solution LLP?',
                a: 'Athena Legal Solution LLP is a legal solution firm based around Tis Hazari Court, New Delhi, providing legal consultation, documentation support, dispute resolution guidance, and financial legal advisory services for individuals, families, and businesses.',
              },
              {
                q: 'What legal services does Athena Legal Solution LLP provide?',
                a: 'Civil, criminal, family / matrimonial, property, cheque bounce, consumer, corporate / business, employment, cyber complaint, legal notice, documentation, and arbitration / mediation consultation — plus loan settlement, credit card settlement, recovery harassment support, and debt resolution advisory.',
              },
              {
                q: 'Who can contact Athena Legal Solution LLP?',
                a: 'Individuals, families, salaried and self-employed professionals, MSME owners, and businesses facing legal or financial-legal stress can reach out for a confidential consultation.',
              },
              {
                q: 'Does Athena Legal Solution LLP guarantee outcomes?',
                a: 'No. Outcomes depend on facts, documents, applicable law, and the discretion of the competent court, authority, or lender. We do not promise specific results, settlement percentages, bail orders, or judgments.',
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
