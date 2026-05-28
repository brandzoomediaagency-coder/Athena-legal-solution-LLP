import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/site';
import { services } from '@/lib/services';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-container px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3" aria-label="Athena Legal Solution LLP">
              <Image src="/logo.svg" alt="Athena Legal Solution LLP" width={48} height={48} />
              <span className="flex flex-col leading-tight">
                <span className="font-heading text-lg text-white">Athena Legal Solution</span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-gold">LLP</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {siteConfig.tagline}. Legal and financial advisory support for borrowers
              navigating loan settlement, credit card dues, recovery concerns and legal
              notices.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/15 p-2 text-white/80 transition hover:border-gold hover:text-gold"
              >
                <span className="text-xs font-semibold">in</span>
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-white/15 p-2 text-white/80 transition hover:border-gold hover:text-gold"
              >
                <span className="text-xs font-semibold">f</span>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-white/15 p-2 text-white/80 transition hover:border-gold hover:text-gold"
              >
                <span className="text-xs font-semibold">ig</span>
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full border border-white/15 p-2 text-white/80 transition hover:border-emerald-accent hover:text-emerald-accent"
              >
                <span className="text-xs font-semibold">wa</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gold">Services</Link></li>
              <li><Link href="/blog" className="hover:text-gold">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-gold">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-gold">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="block text-white/60">Phone</span>
                <a href={siteConfig.phoneHref} className="hover:text-gold">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="block text-white/60">Email</span>
                <a href={siteConfig.emailHref} className="break-all hover:text-gold">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="block text-white/60">Address</span>
                <span>
                  {siteConfig.address.street}, {siteConfig.address.locality},{' '}
                  {siteConfig.address.region} {siteConfig.address.postalCode}
                </span>
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
            provides legal and financial advisory support. Information on this website is for
            general awareness and consultation purposes only. Outcomes in settlement or
            dispute matters depend on lender policies, documents, case facts, applicable law,
            and approvals. No result is guaranteed.
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
