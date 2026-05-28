import type { ReactNode } from 'react';
import Breadcrumbs, { type Crumb } from './Breadcrumbs';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, subtitle, crumbs, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-hero-pattern" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.04),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-container px-4 pb-16 pt-12 md:px-6 md:pb-24 md:pt-16">
        {crumbs && (
          <div className="mb-6">
            <Breadcrumbs items={crumbs} />
          </div>
        )}
        {eyebrow && (
          <span className="inline-block rounded-full border border-gold/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-heading text-4xl leading-tight md:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
