import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import SectionHeader from '@/components/SectionHeader';
import { FAQLd } from '@/components/SchemaJsonLd';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'FAQs — Legal Consultation, Documentation & Dispute Resolution',
  description:
    'Frequently asked questions about Athena Legal Solution LLP — practice areas, process, documentation, loan settlement, recovery harassment, legal notices, and engagement.',
  path: '/faqs',
});

const sections: Array<{ heading: string; items: Array<{ q: string; a: string }> }> = [
  {
    heading: 'About Athena Legal Solution LLP',
    items: [
      {
        q: 'What does Athena Legal Solution LLP do?',
        a: 'Athena Legal Solution LLP is a legal solution firm providing consultation, documentation support, dispute resolution guidance, and financial legal advisory services. Practice areas span civil, criminal, family, property, cheque bounce, consumer, corporate, employment, cyber, arbitration, and loan / debt support.',
      },
      {
        q: 'Does Athena handle only loan settlement cases?',
        a: 'No. While loan settlement, credit card settlement, and recovery harassment support are important services, Athena Legal Solution LLP also handles civil, criminal, family, property, cheque bounce, consumer, corporate, employment, cyber, legal notice, documentation, and arbitration / mediation matters.',
      },
      {
        q: 'Where is Athena Legal Solution LLP located?',
        a: 'Our base is around Tis Hazari Court, New Delhi. Consultations are available in-person and remotely across Delhi NCR and pan-India.',
      },
      {
        q: 'Do you guarantee outcomes?',
        a: 'No. Outcomes depend on facts, documents, applicable law, and the discretion of the competent court, authority, or lender. We do not promise specific results, settlement percentages, bail orders, or judgments.',
      },
    ],
  },
  {
    heading: 'Consultation & Process',
    items: [
      {
        q: 'How does the consultation process work?',
        a: 'A confidential first conversation is followed by document and case review, a written strategy summary, drafting / representation support where applicable, and follow-up advisory on next steps.',
      },
      {
        q: 'Is my information confidential?',
        a: 'Yes. Client conversations, documents, and case details are treated with strict confidentiality, subject to applicable legal disclosure requirements.',
      },
      {
        q: 'What documents should I bring to the first consultation?',
        a: 'Bring any documents specific to your matter — contracts, notices, court papers, loan agreements, statements, communication trails, and KYC. A focused document set makes the first consultation significantly more productive.',
      },
    ],
  },
  {
    heading: 'Legal Notices & Documents',
    items: [
      {
        q: 'What should I do if I receive a legal notice?',
        a: 'Do not ignore it. Preserve the document and envelope, note the date received and any deadline, and have it reviewed before sending any reply. A formal reply has legal consequences.',
      },
      {
        q: 'Can you draft a single agreement without a long engagement?',
        a: 'Yes — focused single-document engagements (drafting or review) are clearly scoped and commonly done.',
      },
    ],
  },
  {
    heading: 'Loan Settlement & Recovery',
    items: [
      {
        q: 'Can credit card or loan dues be settled?',
        a: 'In some cases, lenders consider reduced one-time settlement based on the borrower\'s hardship profile, account status, and documentation. The outcome depends on the lender\'s policy and is never guaranteed.',
      },
      {
        q: 'Will loan settlement affect my CIBIL score?',
        a: 'A settled loan is generally reported as "Settled" rather than "Closed" with credit bureaus, which can affect future credit decisions. The exact impact depends on the lender and bureau reporting practices.',
      },
      {
        q: 'Can recovery agents call my family members?',
        a: 'Recovery agents are generally expected to contact the borrower or guarantor directly. Repeated calls to uninvolved family members may not be appropriate practice.',
      },
    ],
  },
];

export default function FAQsPage() {
  const allFaqs = sections.flatMap((s) => s.items);
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Answers to Common Legal Consultation Questions"
        subtitle="Grounded, plain-language guidance — without promises that depend on third parties."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQs' },
        ]}
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-container space-y-12 px-4 md:px-6">
          {sections.map((sec) => (
            <div key={sec.heading}>
              <SectionHeader title={sec.heading} align="left" />
              <div className="mt-5">
                <FAQAccordion items={sec.items} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <FAQLd items={allFaqs} />
    </>
  );
}
