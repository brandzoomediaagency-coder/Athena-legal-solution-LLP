import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PracticePageTemplate from '@/components/PracticePageTemplate';
import { getPractice } from '@/lib/practiceAreas';
import { buildMetadata } from '@/lib/seo';

const SLUG = 'legal-notice-loan-default';

export function generateMetadata(): Metadata {
  const p = getPractice(SLUG);
  if (!p) return {};
  return buildMetadata({
    title: p.metaTitle,
    description: p.metaDescription,
    path: p.path,
  });
}

export default function Page() {
  const p = getPractice(SLUG);
  if (!p) notFound();
  return <PracticePageTemplate practice={p} />;
}
