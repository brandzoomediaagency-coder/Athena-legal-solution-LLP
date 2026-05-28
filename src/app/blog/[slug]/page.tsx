import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import { ArticleLd } from '@/components/SchemaJsonLd';
import { blogPosts, getPost } from '@/lib/blogs';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost(params.slug);
  if (!p) return {};
  return buildMetadata({
    title: p.metaTitle,
    description: p.metaDescription,
    path: `/blog/${p.slug}`,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = `${siteConfig.url}/blog/${post.slug}`;

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      >
        <p className="text-xs text-white/65">
          {new Date(post.publishedAt).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}{' '}
          · {post.readTime}
        </p>
      </PageHero>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-container gap-12 px-4 md:grid-cols-12 md:px-6">
          <article className="prose-athena md:col-span-8">
            {post.body.map((sec, i) => (
              <section key={i}>
                <h2>{sec.heading}</h2>
                {sec.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {sec.bullets && (
                  <ul>
                    {sec.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="mt-10 rounded-2xl border border-slate-soft bg-slate-soft/40 p-6">
              <h3 className="font-heading text-xl text-navy">A note on outcomes</h3>
              <p className="mt-2 text-sm text-navy/75">
                This article is general guidance, not legal advice. Outcomes in any specific
                matter depend on facts, documents, lender policy, and applicable law.
              </p>
            </div>
          </article>

          <aside className="md:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-slate-soft bg-navy p-6 text-white">
                <h3 className="font-heading text-lg">Need a confidential review?</h3>
                <p className="mt-2 text-sm text-white/75">
                  Book a structured first conversation with our advisory team.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 block rounded-full bg-gold-gradient px-5 py-3 text-center text-sm font-semibold text-navy"
                >
                  Book Consultation
                </Link>
              </div>
              <div className="rounded-2xl border border-slate-soft bg-white p-6">
                <h3 className="font-heading text-lg text-navy">More guides</h3>
                <ul className="mt-3 space-y-2 text-sm text-navy/80">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/blog/${r.slug}`} className="hover:text-gold-dark">
                        → {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-soft/60 py-14 md:py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader eyebrow="More from the blog" title="Continue reading" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="block rounded-2xl border border-slate-soft bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold"
              >
                <span className="inline-block rounded-full bg-navy/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-navy/70">
                  {r.category}
                </span>
                <p className="mt-4 font-heading text-lg text-navy">{r.title}</p>
                <p className="mt-2 text-sm text-navy/70">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ArticleLd
        title={post.title}
        description={post.metaDescription}
        url={url}
        datePublished={post.publishedAt}
      />
    </>
  );
}
