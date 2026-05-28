import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center bg-navy py-20 text-white">
      <div className="absolute inset-0 bg-hero-pattern" aria-hidden="true" />
      <div className="relative mx-auto max-w-2xl px-4 text-center md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          404 — Page not found
        </p>
        <h1 className="mt-4 font-heading text-4xl leading-tight md:text-5xl">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-4 text-white/80">
          The link may be outdated or the page may have moved. Use the links below to find
          what you were looking for.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-navy"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-gold"
          >
            Browse Services
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-gold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
