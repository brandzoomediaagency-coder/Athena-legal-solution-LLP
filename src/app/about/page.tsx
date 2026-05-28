import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { CheckIcon } from '@/components/Icons';

export const metadata: Metadata = buildMetadata({
  title: 'About Us — Legal & Financial Advisory in India',
  description:
    'Learn about Athena Legal Solution LLP, our advisory philosophy, the kinds of matters we handle, and how we work with borrowers and businesses across India.',
  path: '/about',
});

const values = [
  {
    title: 'Confidential by default',
    text: 'Every conversation and document is handled with strict confidentiality.',
  },
  {
    title: 'Documentation-led',
    text: 'A clean paper trail is the borrower\'s strongest asset — and the foundation of our work.',
  },
  {
    title: 'Realistic guidance',
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
        title="A Legal & Financial Advisory Firm Built for Borrower Realities"
        subtitle="Athena Legal Solution LLP supports individuals and businesses through loan, card and recovery-related concerns with a documentation-led, advisory-first approach."
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
                Athena Legal Solution LLP is a legal and financial advisory firm focused on
                loan settlement, credit card dues, debt resolution, recovery-related concerns,
                and legal notice matters. We work with salaried individuals, self-employed
                professionals, MSME owners, and other business borrowers across India.
              </p>

              <h2>What we believe</h2>
              <p>
                Borrowers in stressful financial situations need clarity, not pressure.
                Our role is to bring structure: review the facts, frame the position, prepare
                a written plan, and support disciplined execution. We do not promise outcomes
                we cannot control.
              </p>

              <h2>What we do not do</h2>
              <p>
                We do not collect EMIs or repayments on behalf of any client. We do not promise
                a specific settlement percentage. We do not claim to be RBI-approved unless
                expressly verified for a specific matter. We do not use fear-based or
                misleading tactics in client communication.
              </p>

              <h2>Who we work with</h2>
              <p>
                Our clients typically come to us with overdue EMIs, credit card stress, multiple
                lender exposure, recovery agent concerns, legal notices, or pre-litigation
                situations. Some engagements are limited to a single document review; others
                run through closure documentation and post-closure checks.
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
                href="/contact"
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
              <a href={siteConfig.emailHref} className="mt-2 block break-all font-heading text-lg text-navy">{siteConfig.email}</a>
            </div>
            <div className="rounded-2xl border border-slate-soft bg-white p-6">
              <p className="text-xs uppercase tracking-widest text-gold-dark">Hours</p>
              <p className="mt-2 font-heading text-lg text-navy">{siteConfig.hours}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
