import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckIcon, WhatsAppIcon } from '@/components/Icons';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Thank You — We Will Reach Out Shortly',
  description: 'Your consultation request has been received by Athena Legal Solution LLP.',
  path: '/thank-you',
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center bg-navy py-20 text-white">
      <div className="absolute inset-0 bg-hero-pattern" aria-hidden="true" />
      <div className="relative mx-auto max-w-2xl px-4 text-center md:px-6">
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-accent text-white shadow-premium">
          <CheckIcon className="h-8 w-8" />
        </div>
        <h1 className="mt-6 font-heading text-4xl leading-tight md:text-5xl">
          Thank you — your request is in.
        </h1>
        <p className="mt-4 text-white/80">
          Our advisory team will reach out shortly during working hours
          ({siteConfig.hours}). Everything you share with us is treated with strict
          confidentiality.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-accent px-6 py-3 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" /> Continue on WhatsApp
          </a>
          <Link
            href="/"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-gold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
