'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CloseIcon, MenuIcon, ChevronDownIcon } from './Icons';
import { services } from '@/lib/services';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasMenu: true },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? 'bg-navy/95 backdrop-blur shadow-premium'
          : 'bg-navy/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-4 py-3 md:px-6">
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

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.hasMenu ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/85 transition hover:text-gold ${
                    pathname?.startsWith('/services') ? 'text-gold' : ''
                  }`}
                  aria-expanded={servicesOpen}
                >
                  {link.label}
                  <ChevronDownIcon className="h-4 w-4" />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-[320px] pt-2">
                    <div className="rounded-xl border border-white/10 bg-navy shadow-premium">
                      <ul className="p-2">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              className="block rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/5 hover:text-gold"
                            >
                              {s.shortTitle}
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

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-navy shadow-gold transition hover:opacity-95"
          >
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <MenuIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-50 lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-navy shadow-premium transition-transform ${
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 border-t border-white/10" />
            <p className="px-4 pb-1 pt-2 text-xs uppercase tracking-widest text-white/50">
              Services
            </p>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="block rounded-lg px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-gold"
              >
                {s.shortTitle}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <Link
                href="/contact"
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
