import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import SectionHeader from '@/components/SectionHeader';
import { services } from '@/lib/services';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Our Services — Loan Settlement, Debt Resolution & Legal Advisory',
  description:
    'Explore Athena Legal Solution LLP\'s structured advisory services across personal loan, credit card and business loan settlement, recovery harassment support, legal notice assistance and debt resolution.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Specialised Advisory for Loan, Card and Recovery Matters"
        subtitle="Each engagement is documentation-led and outcome-realistic. Choose the service that matches your situation, or speak with us if you are unsure where it fits."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader
            eyebrow="What we cover"
            title="Six Focused Advisory Tracks"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
