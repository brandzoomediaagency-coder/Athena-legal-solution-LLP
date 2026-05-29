import Link from 'next/link';
import type { Practice } from '@/lib/practiceAreas';
import { practiceAreas } from '@/lib/practiceAreas';
import { siteConfig } from '@/lib/site';
import PageHero from './PageHero';
import FAQAccordion from './FAQAccordion';
import LeadForm from './LeadForm';
import SectionHeader from './SectionHeader';
import PracticeCard from './PracticeCard';
import { FAQLd, ServiceLd } from './SchemaJsonLd';
import { CheckIcon, WhatsAppIcon, PhoneIcon } from './Icons';

export default function PracticePageTemplate({ practice }: { practice: Practice }) {
  const url = `${siteConfig.url}${practice.path}`;
  const related = practiceAreas
    .filter((p) => p.slug !== practice.slug && p.category === practice.category)
    .slice(0, 3);

  const breadcrumbParent =
    practice.category === 'practice'
      ? { label: 'Practice Areas', href: '/practice-areas' }
      : { label: 'Loan & Debt Support', href: '/loan-settlement' };

  return (
    <>
      <PageHero
        eyebrow={practice.hero.eyebrow}
        title={practice.hero.heading}
        subtitle={practice.hero.intro}
        crumbs={[
          { label: 'Home', href: '/' },
          breadcrumbParent,
          { label: practice.shortTitle },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/contact-us"
            data-cta={`practice-${practice.slug}-book`}
            className="rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-navy shadow-gold hover:opacity-95"
          >
            Book Legal Consultation
          </Link>
          <a
            href={siteConfig.whatsappPrefilled(practice.whatsappCaseLabel)}
            target="_blank"
            rel="noopener noreferrer"
            data-cta={`practice-${practice.slug}-whatsapp`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-emerald-accent hover:text-emerald-accent"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href={siteConfig.phoneHref}
            data-cta={`practice-${practice.slug}-call`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold"
          >
            <PhoneIcon className="h-4 w-4" /> Call
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid grid-cols-1 max-w-container gap-12 px-4 md:grid-cols-12 md:px-6">
          <div className="min-w-0 md:col-span-8">
            <article className="prose-athena">
              <h2>Who this service is for</h2>
              <ul>
                {practice.forWhom.map((b, i) => <li key={i}>{b}</li>)}
              </ul>

              <h2>Common situations we see</h2>
              <ul>
                {practice.situations.map((b, i) => <li key={i}>{b}</li>)}
              </ul>

              <h2>How Athena Legal Solution LLP can help</h2>
              <ul>
                {practice.howWeHelp.map((b, i) => <li key={i}>{b}</li>)}
              </ul>

              <h2>Documents usually required</h2>
              <ul>
                {practice.documents.map((b, i) => <li key={i}>{b}</li>)}
              </ul>

              <h2>Our process</h2>
              <ol className="mt-3 list-decimal space-y-1 pl-5">
                {practice.process.map((b, i) => <li key={i}>{b}</li>)}
              </ol>
            </article>

            <div className="mt-10 rounded-2xl border border-slate-soft bg-slate-soft/40 p-6">
              <h3 className="font-heading text-xl text-navy">Important legal note</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/75">{practice.legalNote}</p>
            </div>

            {practice.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="font-heading text-2xl text-navy md:text-3xl">FAQs — {practice.shortTitle}</h2>
                <div className="mt-5">
                  <FAQAccordion items={practice.faqs} />
                </div>
              </div>
            )}
          </div>

          <aside className="min-w-0 md:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-slate-soft bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg text-navy">Talk to our team</h3>
                <p className="mt-2 text-sm text-navy/70">
                  A confidential, structured first conversation.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-navy/75">
                  <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-gold" /> Documentation-led review</li>
                  <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-gold" /> Practical legal guidance</li>
                  <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-gold" /> Delhi NCR &amp; pan-India</li>
                </ul>
                <Link
                  href="/contact-us"
                  className="mt-5 block rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-white hover:bg-charcoal"
                >
                  Book Consultation
                </Link>
                <a
                  href={siteConfig.whatsappPrefilled(practice.whatsappCaseLabel)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-accent/30 px-5 py-3 text-center text-sm font-semibold text-emerald-accent"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                </a>
              </div>

              {related.length > 0 && (
                <div className="rounded-2xl border border-slate-soft bg-navy p-6 text-white">
                  <h3 className="font-heading text-lg">Related services</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link href={r.path} className="hover:text-gold">
                          → {r.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-soft/60 py-14 md:py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader
            eyebrow="Get started"
            title="Confidential Consultation Request"
            subtitle="Share a few details and our team will reach out for a structured conversation."
          />
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-6 shadow-premium md:p-8">
            <LeadForm defaultCaseType={practice.caseTypeValue} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-container px-4 md:px-6">
            <SectionHeader eyebrow="Explore" title="Related Areas" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {related.map((r) => (
                <PracticeCard key={r.slug} practice={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ServiceLd
        name={practice.title}
        description={practice.metaDescription}
        url={url}
      />
      {practice.faqs.length > 0 && <FAQLd items={practice.faqs} />}
    </>
  );
}
