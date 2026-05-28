import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import LeadForm from '@/components/LeadForm';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import { FAQLd, ServiceLd } from '@/components/SchemaJsonLd';
import { services, getService } from '@/lib/services';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
import { CheckIcon, WhatsAppIcon } from '@/components/Icons';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return buildMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/services/${s.slug}`,
  });
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);
  const url = `${siteConfig.url}/services/${s.slug}`;

  return (
    <>
      <PageHero
        eyebrow={s.hero.eyebrow}
        title={s.hero.heading}
        subtitle={s.hero.intro}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: s.shortTitle },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            data-cta={`service-${s.slug}-primary`}
            className="rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-navy shadow-gold hover:opacity-95"
          >
            Request Confidential Consultation
          </Link>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-cta={`service-${s.slug}-whatsapp`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-emerald-accent hover:text-emerald-accent"
          >
            <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-container gap-12 px-4 md:grid-cols-12 md:px-6">
          <div className="md:col-span-8">
            <article className="prose-athena">
              {s.sections.map((sec, i) => (
                <section key={i}>
                  <h2>{sec.heading}</h2>
                  <p>{sec.body}</p>
                  {sec.bullets && (
                    <ul>
                      {sec.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </article>

            <div className="mt-10 rounded-2xl border border-slate-soft bg-slate-soft/40 p-6">
              <h3 className="font-heading text-xl text-navy">Important note</h3>
              <p className="mt-2 text-sm text-navy/75">
                Athena Legal Solution LLP provides advisory support only. No specific
                settlement outcome, percentage, or timeline is guaranteed. Results depend on
                lender policies, documents, case facts, and applicable law.
              </p>
            </div>

            {s.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="font-heading text-2xl text-navy md:text-3xl">Service FAQs</h2>
                <div className="mt-5">
                  <FAQAccordion items={s.faqs} />
                </div>
              </div>
            )}
          </div>

          <aside className="md:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-slate-soft bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg text-navy">Talk to our advisory team</h3>
                <p className="mt-2 text-sm text-navy/70">
                  A confidential, structured first conversation.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-navy/75">
                  <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-gold" /> No obligation</li>
                  <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-gold" /> Pan-India assistance</li>
                  <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-gold" /> Documentation-led</li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-5 block rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-white hover:bg-charcoal"
                >
                  Book Consultation
                </Link>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-accent/30 px-5 py-3 text-center text-sm font-semibold text-emerald-accent"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                </a>
              </div>

              <div className="rounded-2xl border border-slate-soft bg-navy p-6 text-white">
                <h3 className="font-heading text-lg">Related services</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/services/${r.slug}`} className="hover:text-gold">
                        → {r.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
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
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader eyebrow="Explore" title="Other Advisory Services" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <ServiceCard key={r.slug} service={r} />
            ))}
          </div>
        </div>
      </section>

      <ServiceLd name={s.title} description={s.metaDescription} url={url} />
      {s.faqs.length > 0 && <FAQLd items={s.faqs} />}
    </>
  );
}
