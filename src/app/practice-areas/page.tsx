import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PracticeCard from '@/components/PracticeCard';
import SectionHeader from '@/components/SectionHeader';
import { practiceAreasMain, loanDebtServices } from '@/lib/practiceAreas';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Practice Areas — Legal Consultation Across Multiple Areas of Law',
  description:
    'Explore Athena Legal Solution LLP\'s practice areas — civil, criminal, family, property, cheque bounce, consumer, corporate, employment, cyber, arbitration, plus loan and debt support.',
  path: '/practice-areas',
});

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Practice Areas"
        title="Comprehensive Legal Consultation Across Multiple Areas of Law"
        subtitle="From civil, criminal, family, property, and cheque bounce matters to corporate, employment, cyber, and arbitration consultations — with disciplined documentation throughout."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Practice Areas' },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader
            eyebrow="Twelve practice areas"
            title="Where We Provide Legal Consultation"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreasMain.map((p) => (
              <PracticeCard key={p.slug} practice={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-soft/60 py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <SectionHeader
            eyebrow="Loan & Debt Support"
            title="Financial Legal Advisory"
            subtitle="Focused support for borrowers and businesses dealing with loan, card, recovery, and debt-resolution matters."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loanDebtServices.map((p) => (
              <PracticeCard key={p.slug} practice={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
