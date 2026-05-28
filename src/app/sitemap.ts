import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { services } from '@/lib/services';
import { blogPosts } from '@/lib/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: Array<{ path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '/', priority: 1.0, freq: 'weekly' },
    { path: '/about', priority: 0.8, freq: 'monthly' },
    { path: '/services', priority: 0.9, freq: 'weekly' },
    { path: '/faq', priority: 0.7, freq: 'monthly' },
    { path: '/blog', priority: 0.8, freq: 'weekly' },
    { path: '/contact', priority: 0.9, freq: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, freq: 'yearly' },
    { path: '/terms-and-conditions', priority: 0.3, freq: 'yearly' },
    { path: '/refund-policy', priority: 0.3, freq: 'yearly' },
    { path: '/disclaimer', priority: 0.3, freq: 'yearly' },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${siteConfig.url}${r.path}`,
      lastModified: now,
      changeFrequency: r.freq,
      priority: r.priority,
    })),
    ...services.map((s) => ({
      url: `${siteConfig.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...blogPosts.map((p) => ({
      url: `${siteConfig.url}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
