import Link from 'next/link';
import Logo from './Logo';
import { siteConfig } from '@/lib/site';
import { practiceAreasMain, loanDebtServices } from '@/lib/practiceAreas';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-container px-4 py-14 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="min-w-0 md:col-span-4">
            <Logo variant="light" size="lg" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {siteConfig.tagline}. Comprehensive legal consultation, documentation support,
              dispute resolution guidance, and financial legal advisory for individuals,
              families and businesses across Delhi NCR and pan-India.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/15 p-2 text-white/80 transition hover:border-gold hover:text-gold">
                <span className="text-xs font-semibold">in</span>
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full border border-white/15 p-2 text-white/80 transition hover:border-gold hover:text-gold">
                <span className="text-xs font-semibold">f</span>
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-white/15 p-2 text-white/80 transition hover:border-gold hover:text-gold">
                <span className="text-xs font-semibold">ig</span>
              </a>
              <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rounded-full border border-white/15 p-2 text-white/80 transition hover:border-emerald-accent hover:text-emerald-accent">
                <span className="text-xs font-semibold">wa</span>
              </a>
            </div>
          </div>

          <div className="min-w-0 md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Practice Areas
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {practiceAreasMain.slice(0, 8).map((p) => (
                <li key={p.slug}>
                  <Link href={p.path} className="hover:text-gold">
                    {p.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/practice-areas" className="font-semibold text-gold hover:underline">
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          <div className="min-w-0 md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Loan & Debt
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {loanDebtServices.map((p) => (
                <li key={p.slug}>
                  <Link href={p.path} className="hover:text-gold">
                    {p.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="block text-white/60">Phone</span>
                <a href={siteConfig.phoneHref} className="hover:text-gold">{siteConfig.phone}</a>
              </li>
              <li>
                <span className="block text-white/60">Email</span>
                <a href={siteConfig.emailHref} className="break-all hover:text-gold">{siteConfig.email}</a>
                <a href={siteConfig.altEmailHref} className="mt-1 block break-all text-white/60 hover:text-gold">{siteConfig.altEmail}</a>
              </li>
              <li>
                <span className="block text-white/60">Location</span>
                <span>{siteConfig.address.locality}, {siteConfig.address.region}</span>
              </li>
              <li>
                <span className="block text-white/60">Hours</span>
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/55">
            <strong className="text-white/80">Disclaimer:</strong> Athena Legal Solution LLP
            provides legal consultation, documentation support, dispute resolution guidance,
            and legal advisory assistance. Information on this website is for general
            awareness and consultation purposes only. Outcomes depend on facts, documents,
            applicable law, authority/court/lender policies, and case-specific circumstances.
            No result is guaranteed.
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-white/55 md:flex-row md:items-center">
            <p>© {year} Athena Legal Solution LLP. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-gold">Terms</Link>
              <Link href="/refund-policy" className="hover:text-gold">Refund Policy</Link>
              <Link href="/disclaimer" className="hover:text-gold">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
