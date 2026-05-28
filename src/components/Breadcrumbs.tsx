import Link from 'next/link';
import { ChevronRightIcon } from './Icons';
import { siteConfig } from '@/lib/site';

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: c.href ? `${siteConfig.url}${c.href}` : undefined,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/70">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link href={c.href} className="hover:text-gold">{c.label}</Link>
              ) : (
                <span className={last ? 'text-white' : ''}>{c.label}</span>
              )}
              {!last && <ChevronRightIcon className="h-4 w-4 text-white/40" />}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </nav>
  );
}
