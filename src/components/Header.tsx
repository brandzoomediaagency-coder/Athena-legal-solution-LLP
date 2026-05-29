'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CloseIcon, MenuIcon, ChevronDownIcon } from './Icons';
import { practiceAreasMain, loanDebtServices } from '@/lib/practiceAreas';

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

  useEffect(() => {
    setOpen(false);
    setHoverMenu(null);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
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
        <Link href="/" className="flex items-center gap-3" aria-label="Athena Legal Solution LLP home">
          <Image
            src="/logo.svg"
            alt="Athena Legal Solution LLP logo"
            width={44}
            height={44}
            priority
            className="h-10 w-10 md:h-11 md:w-11"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-base font-semibold text-white md:text-lg">
              Athena Legal Solution
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-gold md:text-[11px]">
              LLP
            </span>
          </span>
        </Link>

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
            className="rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-navy shadow-gold transition hover:opacity-95"
          >
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-50 xl:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[92%] max-w-sm overflow-y-auto bg-navy shadow-premium transition-transform ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <span className="font-heading text-lg text-white">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="rounded-md p-2 text-white"
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="space-y-1 px-3 py-4" aria-label="Mobile">
            <Link href="/" className="block rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5 hover:text-gold">Home</Link>
            <Link href="/about-us" className="block rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5 hover:text-gold">About</Link>

            <MobileExpandable
              label="Practice Areas"
              isOpen={mobileSection === 'practice'}
              onToggle={() => setMobileSection(mobileSection === 'practice' ? null : 'practice')}
              parentHref="/practice-areas"
            >
              {practiceAreasMain.map((p) => (
                <Link
                  key={p.slug}
                  href={p.path}
                  className="block rounded-lg px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-gold"
                >
                  {p.shortTitle}
                </Link>
              ))}
            </MobileExpandable>

            <MobileExpandable
              label="Loan & Debt Support"
              isOpen={mobileSection === 'loan-debt'}
              onToggle={() => setMobileSection(mobileSection === 'loan-debt' ? null : 'loan-debt')}
              parentHref="/loan-settlement"
            >
              {loanDebtServices.map((p) => (
                <Link
                  key={p.slug}
                  href={p.path}
                  className="block rounded-lg px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-gold"
                >
                  {p.shortTitle}
                </Link>
              ))}
            </MobileExpandable>

            <Link href="/blog" className="block rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5 hover:text-gold">Resources</Link>
            <Link href="/faqs" className="block rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5 hover:text-gold">FAQs</Link>
            <Link href="/contact-us" className="block rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5 hover:text-gold">Contact</Link>

            <div className="mt-4 px-4">
              <Link
                href="/contact-us"
                className="block rounded-full bg-gold-gradient px-5 py-3 text-center text-sm font-semibold text-navy shadow-gold"
              >
                Book Consultation
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function MobileExpandable({
  label,
  isOpen,
  onToggle,
  parentHref,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  parentHref: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg">
      <div className="flex items-stretch">
        <Link
          href={parentHref}
          className="flex-1 rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5 hover:text-gold"
        >
          {label}
        </Link>
        <button
          type="button"
          onClick={onToggle}
          aria-label={`Toggle ${label} submenu`}
          aria-expanded={isOpen}
          className="rounded-lg px-3 text-white/80 hover:text-gold"
        >
          <ChevronDownIcon className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {isOpen && <div className="border-l border-white/10 pl-2">{children}</div>}
    </div>
  );
}
