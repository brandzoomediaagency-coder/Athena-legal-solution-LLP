import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { PhoneIcon, WhatsAppIcon } from './Icons';

export default function FloatingCTA() {
  return (
    <>
      {/* Floating WhatsApp (all viewports) */}
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        data-cta="whatsapp-floating"
        className="fixed bottom-20 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-accent text-white shadow-premium transition hover:scale-105 md:bottom-6 md:right-6 md:h-14 md:w-14"
      >
        <WhatsAppIcon className="h-6 w-6 md:h-7 md:w-7" />
      </a>

      {/* Sticky bottom CTA bar (mobile only) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/95 backdrop-blur md:hidden">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          <a
            href={siteConfig.phoneHref}
            data-cta="call-mobile-sticky"
            className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-white"
            aria-label="Call Athena Legal Solution"
          >
            <PhoneIcon className="h-4 w-4 text-gold" />
            Call
          </a>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-mobile-sticky"
            className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-white"
            aria-label="WhatsApp Athena Legal Solution"
          >
            <WhatsAppIcon className="h-4 w-4 text-emerald-accent" />
            WhatsApp
          </a>
          <Link
            href="/contact"
            data-cta="book-mobile-sticky"
            className="flex items-center justify-center bg-gold-gradient py-3 text-sm font-semibold text-navy"
          >
            Book
          </Link>
        </div>
      </div>
    </>
  );
}
