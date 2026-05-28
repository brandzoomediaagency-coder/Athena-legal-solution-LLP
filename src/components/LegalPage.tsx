import type { ReactNode } from 'react';
import PageHero from './PageHero';
import type { Crumb } from './Breadcrumbs';

type Props = {
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
  effectiveDate?: string;
  children: ReactNode;
};

export default function LegalPage({ title, subtitle, crumbs, effectiveDate, children }: Props) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subtitle={subtitle} crumbs={crumbs}>
        {effectiveDate && (
          <p className="text-xs text-white/65">Effective: {effectiveDate}</p>
        )}
      </PageHero>
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <article className="prose-athena">{children}</article>
        </div>
      </section>
    </>
  );
}
