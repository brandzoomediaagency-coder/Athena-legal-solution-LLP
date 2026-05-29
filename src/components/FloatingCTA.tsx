import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { PhoneIcon, WhatsAppIcon } from './Icons';

export default function FloatingCTA() {
  return (
    <>
      {/* Floating WhatsApp (all viewports) — sits above mobile sticky bar */}
      <a
        href={siteConfig.whatsappPrefilled('General Legal Matter')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        data-cta="whatsapp-floating"
        className="wa-pulse fixed bottom-[76px] right-4 z-40 inline-flex items-center justify-center rounded-full bg-emerald-accent text-white shadow-premium transition hover:scale-105 md:bottom-6 md:right-6"
        style={{ width: 52, height: 52 }}
      >
        <WhatsAppIcon className="h-6 w-6 md:h-7 md:w-7" />
      </a>

      {/* Sticky bottom CTA bar (mobile only) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/95 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.4)] backdrop-blur md:hidden">
        <div
          className="grid grid-cols-3 divide-x divide-white/10"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
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
            href={siteConfig.whatsappPrefilled('General Legal Matter')}
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
            href="/contact-us"
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
