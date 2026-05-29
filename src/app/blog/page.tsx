import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { blogPosts } from '@/lib/blogs';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Knowledge Center — Loan, Card & Borrower Rights Guides',
  description:
    'Practical, advisory-led guides on loan settlement, credit card dues, recovery harassment, legal notices, and borrower rights in India.',
  path: '/blog',
});

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Center"
        title="Practical Guides for Borrowers"
        subtitle="Grounded, advisory-led articles covering loan settlement, credit card dues, recovery rights, and legal notice matters."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]}
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((p) => (
              <article
                key={p.slug}
                className="group flex h-full flex-col rounded-2xl border border-slate-soft bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-premium"
              >
                <span className="inline-block w-fit rounded-full bg-navy/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-navy/70">
                  {p.category}
                </span>
                <h2 className="mt-4 font-heading text-xl text-navy">
                  <Link href={`/blog/${p.slug}`} className="hover:text-gold-dark">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-navy/55">
                  <span>{p.readTime}</span>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-sm font-semibold text-navy hover:text-gold-dark"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
