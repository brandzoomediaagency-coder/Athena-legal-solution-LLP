import Link from 'next/link';
import { PracticeIconMap } from './Icons';
import type { Practice } from '@/lib/practiceAreas';
import { siteConfig } from '@/lib/site';

export default function PracticeCard({ practice }: { practice: Practice }) {
  const Icon = PracticeIconMap[practice.icon];
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-slate-soft bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-premium">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold transition group-hover:bg-gold-gradient group-hover:text-navy">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-heading text-xl text-navy">{practice.shortTitle}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/70">
        {practice.excerpt}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Link
          href={practice.path}
          className="text-sm font-semibold text-navy underline-offset-4 hover:text-gold hover:underline"
        >
          Learn more →
        </Link>
        <a
          href={siteConfig.whatsappPrefilled(practice.whatsappCaseLabel)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-navy/15 px-4 py-1.5 text-xs font-medium text-navy transition hover:border-gold hover:text-gold-dark"
        >
          Consultation
        </a>
      </div>
    </article>
  );
}
