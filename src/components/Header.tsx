'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  CloseIcon,
  MenuIcon,
  ChevronDownIcon,
  PhoneIcon,
  WhatsAppIcon,
} from './Icons';
import Logo from './Logo';
import { practiceAreasMain, loanDebtServices } from '@/lib/practiceAreas';
import { siteConfig } from '@/lib/site';

type NavLink = {
  label: string;
  href: string;
  menu?: 'practice' | 'loan-debt' | 'resources';
};

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  { label: 'Practice Areas', href: '/practice-areas', menu: 'practice' },
  { label: 'Loan & Debt Support', href: '/loan-settlement', menu: 'loan-debt' },
  { label: 'Resources', href: '/blog', menu: 'resources' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact-us' },
];

const resourcesItems = [
  { label: 'Knowledge Center', href: '/blog' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverMenu, setHoverMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on navigation
  useEffect(() => {
    setOpen(false);
    setHoverMenu(null);
    setMobileSection(null);
  }, [pathname]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? 'bg-navy/95 backdrop-blur shadow-premium'
          : 'bg-navy/85 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Logo variant="light" size="md" />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.menu ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setHoverMenu(link.menu!)}
                onMouseLeave={() => setHoverMenu(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/85 transition hover:text-gold ${
                    isActive(link.href) ? 'text-gold' : ''
                  }`}
                  aria-expanded={hoverMenu === link.menu}
                >
                  {link.label}
                  <ChevronDownIcon className="h-4 w-4" />
                </Link>
                {hoverMenu === link.menu && (
                  <div className="absolute left-0 top-full w-[360px] pt-2">
                    <div className="rounded-xl border border-white/10 bg-navy shadow-premium">
                      <ul className="grid grid-cols-1 gap-0.5 p-2">
                        {link.menu === 'practice' &&
                          practiceAreasMain.map((p) => (
                            <li key={p.slug}>
                              <Link
                                href={p.path}
                                className="block rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/5 hover:text-gold"
                              >
                                {p.shortTitle}
                              </Link>
                            </li>
                          ))}
                        {link.menu === 'loan-debt' &&
                          loanDebtServices.map((p) => (
                            <li key={p.slug}>
                              <Link
                                href={p.path}
                                className="block rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/5 hover:text-gold"
                              >
                                {p.shortTitle}
                              </Link>
                            </li>
                          ))}
                        {link.menu === 'resources' &&
                          resourcesItems.map((r) => (
                            <li key={r.href}>
                              <Link
                                href={r.href}
                                className="block rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/5 hover:text-gold"
                              >
                                {r.label}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium text-white/85 transition hover:text-gold ${
                  pathname === link.href ? 'text-gold' : ''
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/contact-us"
            className="btn-shine rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-navy shadow-gold transition hover:opacity-95"
          >
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gold/40 bg-gold/10 text-gold transition hover:bg-gold/20 xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-[60] xl:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          style={{ backgroundColor: '#061A2B' }}
          className={`absolute right-0 top-0 flex h-full w-[92%] max-w-sm flex-col overflow-y-auto bg-navy bg-navy-gradient shadow-premium ring-1 ring-white/10 transition-transform duration-300 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Top: logo + close */}
          <div className="flex items-center justify-between border-b border-white/10 bg-navy/70 px-4 py-4">
            <Logo variant="light" size="sm" href={null} />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="rounded-md p-2 text-white hover:text-gold"
            >
              <CloseIcon />
            </button>
          </div>

          {/* CTA strip at top of drawer */}
          <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10 bg-white/[0.04]">
            <a
              href={siteConfig.phoneHref}
              className="flex flex-col items-center justify-center gap-1 py-3 text-xs text-white"
              onClick={() => setOpen(false)}
            >
              <PhoneIcon className="h-4 w-4 text-gold" />
              <span>Call</span>
            </a>
            <a
              href={siteConfig.whatsappPrefilled('General Legal Matter')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-1 py-3 text-xs text-white"
              onClick={() => setOpen(false)}
            >
              <WhatsAppIcon className="h-4 w-4 text-emerald-accent" />
              <span>WhatsApp</span>
            </a>
            <Link
              href="/contact-us"
              className="flex flex-col items-center justify-center gap-1 bg-gold-gradient py-3 text-xs font-semibold text-navy"
            >
              <span className="text-base font-bold leading-none">★</span>
              <span>Book</span>
            </Link>
          </div>

          {/* Links */}
          <nav className="flex-1 space-y-1 px-3 py-4" aria-label="Mobile navigation links">
            <MobileLink href="/" label="Home" active={pathname === '/'} />
            <MobileLink href="/about-us" label="About" active={pathname === '/about-us'} />

            <MobileExpandable
              label="Practice Areas"
              parentHref="/practice-areas"
              isOpen={mobileSection === 'practice'}
              onToggle={() => setMobileSection(mobileSection === 'practice' ? null : 'practice')}
            >
              {practiceAreasMain.map((p) => (
                <MobileLink key={p.slug} href={p.path} label={p.shortTitle} sub />
              ))}
            </MobileExpandable>

            <MobileExpandable
              label="Loan & Debt Support"
              parentHref="/loan-settlement"
              isOpen={mobileSection === 'loan-debt'}
              onToggle={() => setMobileSection(mobileSection === 'loan-debt' ? null : 'loan-debt')}
            >
              {loanDebtServices.map((p) => (
                <MobileLink key={p.slug} href={p.path} label={p.shortTitle} sub />
              ))}
            </MobileExpandable>

            <MobileLink href="/blog" label="Blog / Knowledge Center" active={pathname?.startsWith('/blog')} />
            <MobileLink href="/faqs" label="FAQs" active={pathname === '/faqs'} />
            <MobileLink href="/contact-us" label="Contact" active={pathname === '/contact-us'} />
          </nav>

          {/* Bottom contact summary */}
          <div className="border-t border-white/10 bg-navy/70 px-5 py-4 text-[12px] text-white/65">
            <p className="font-semibold text-gold">Athena Legal Solution LLP</p>
            <p className="mt-1">{siteConfig.address.displayShort}</p>
            <p className="mt-1">{siteConfig.hours}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileLink({
  href,
  label,
  sub,
  active,
}: {
  href: string;
  label: string;
  sub?: boolean;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block rounded-lg ${sub ? 'px-4 py-2 text-sm' : 'px-4 py-2.5 text-[15px] font-medium'} text-white/85 hover:bg-white/5 hover:text-gold ${
        active ? 'text-gold' : ''
      }`}
    >
      {label}
    </Link>
  );
}

function MobileExpandable({
  label,
  parentHref,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  parentHref: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-stretch">
        <Link
          href={parentHref}
          className="flex-1 rounded-lg px-4 py-2.5 text-[15px] font-medium text-white/85 hover:bg-white/5 hover:text-gold"
        >
          {label}
        </Link>
        <button
          type="button"
          onClick={onToggle}
          aria-label={`Toggle ${label} submenu`}
          aria-expanded={isOpen}
          className="rounded-lg px-3 text-white/70 hover:text-gold"
        >
          <ChevronDownIcon className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {isOpen && (
        <div className="ml-3 mt-1 border-l border-white/10 pl-2 pb-2">{children}</div>
      )}
    </div>
  );
}
