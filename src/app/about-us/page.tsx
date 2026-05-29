import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { CheckIcon } from '@/components/Icons';

export const metadata: Metadata = buildMetadata({
  title: 'About Athena Legal Solution LLP — Legal Consultation & Advisory in Delhi',
  description:
    'About Athena Legal Solution LLP — a Delhi-based legal solution firm providing consultation, documentation support, dispute resolution, and financial legal advisory across India.',
  path: '/about-us',
});

const values = [
  {
    title: 'Confidential by default',
    text: 'Every conversation and document is handled with strict confidentiality.',
  },
  {
    title: 'Documentation-led',
    text: 'A clean paper trail is the client\'s strongest asset — and the foundation of our work.',
  },
  {
    title: 'Practical legal guidance',
    text: 'We tell clients what is achievable, what is uncertain, and what is not on the table.',
  },
  {
    title: 'Process discipline',
    text: 'A structured workflow — not informal promises — drives every engagement.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Legal Solution Firm Built Around Practical, Documented Advisory"
        subtitle="Athena Legal Solution LLP supports individuals, families, and businesses across civil, criminal, family, property, corporate, cheque bounce, consumer, recovery harassment, and financial legal matters."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-container gap-12 px-4 md:grid-cols-12 md:px-6">
          <div className="md:col-span-7">
            <div className="prose-athena">
              <h2>Who we are</h2>
              <p>
                Athena Legal Solution LLP is a legal solution firm based around Tis Hazari
                Court, New Delhi, providing legal consultation, documentation support,
                dispute resolution guidance, and financial legal advisory services. We
                support individuals, families, and businesses across Delhi NCR and pan-India.
              </p>

              <h2>What we handle</h2>
              <p>
                Our practice spans multiple areas of law — civil and criminal consultation,
                family and matrimonial matters, property and real estate disputes, cheque
                bounce and consumer matters, corporate and business legal advisory, legal
                notice drafting and reply, documentation and agreements, employment and
                labour matters, cyber complaint guidance, and arbitration / mediation
                support. We also provide focused legal support around loan settlement,
                credit card settlement, debt resolution, and recovery harassment situations.
              </p>

              <h2>What we believe</h2>
              <p>
                Clients facing legal stress need clarity, not pressure. Our role is to bring
                structure: review the facts, frame the position, prepare a written plan,
                and support disciplined execution. We do not promise outcomes we cannot
                control.
              </p>

              <h2>What we do not do</h2>
              <p>
                We do not promise any specific outcome — bail, settlement percentage, or
                court order. We are not affiliated with any bank, NBFC, government body, or
                regulator. We do not use fear-based or misleading tactics in client
                communication. Where a matter falls outside our scope, we say so.
              </p>

              <h2>Where we work</h2>
              <p>
                Our base is around Tis Hazari Court, New Delhi. Consultations are available
                in-person and remotely. Clients across Delhi, Noida, Gurugram, Ghaziabad,
                Faridabad, and pan-India engage with us through structured remote
                consultations.
              </p>
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="rounded-3xl bg-navy p-6 text-white shadow-premium md:p-8">
              <h3 className="font-heading text-xl">Our values</h3>
              <ul className="mt-5 space-y-4">
                {values.map((v) => (
                  <li key={v.title} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 text-gold" />
                    <div>
                      <p className="font-semibold text-white">{v.title}</p>
                      <p className="text-sm text-white/75">{v.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact-us"
                className="mt-8 block rounded-full bg-gold-gradient px-5 py-3 text-center text-sm font-semibold text-navy"
              >
                Book Consultation
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-soft/50 py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader
            eyebrow="Reach Us"
            title="Get in Touch"
            subtitle="Confidential consultation, structured guidance, and a clear next step."
          />
          <div className="mt-10 grid gap-4 text-center md:grid-cols-3">
            <div className="rounded-2xl border border-slate-soft bg-white p-6">
              <p className="text-xs uppercase tracking-widest text-gold-dark">Phone</p>
              <a href={siteConfig.phoneHref} className="mt-2 block font-heading text-lg text-navy">{siteConfig.phone}</a>
            </div>
            <div className="rounded-2xl border border-slate-soft bg-white p-6">
              <p className="text-xs uppercase tracking-widest text-gold-dark">Email</p>
              <a href={siteConfig.emailHref} className="mt-2 block break-all font-heading text-base text-navy">{siteConfig.email}</a>
              <a href={siteConfig.altEmailHref} className="mt-1 block break-all text-sm text-navy/70">{siteConfig.altEmail}</a>
            </div>
            <div className="rounded-2xl border border-slate-soft bg-white p-6">
              <p className="text-xs uppercase tracking-widest text-gold-dark">Location</p>
              <p className="mt-2 font-heading text-lg text-navy">{siteConfig.address.displayShort}</p>
              <p className="mt-1 text-sm text-navy/70">{siteConfig.hours}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
