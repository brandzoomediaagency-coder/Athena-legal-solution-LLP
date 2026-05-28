import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import SectionHeader from '@/components/SectionHeader';
import { FAQLd } from '@/components/SchemaJsonLd';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Frequently Asked Questions — Loan Settlement & Legal Advisory',
  description:
    'Plain-language answers to the questions borrowers most often ask about loan settlement, credit card dues, CIBIL impact, recovery harassment, and legal notices.',
  path: '/faq',
});

const sections: Array<{ heading: string; items: Array<{ q: string; a: string }> }> = [
  {
    heading: 'Loan & Credit Card Settlement',
    items: [
      {
        q: 'What is loan settlement?',
        a: 'Loan settlement is a negotiated arrangement where the lender agrees to accept a reduced one-time payment to close an outstanding loan. It is typically considered after sustained payment difficulty and a hardship review.',
      },
      {
        q: 'Can credit card dues be settled?',
        a: 'In some cases, banks consider reduced one-time settlement based on the cardholder\'s hardship profile, account status, and documentation. The outcome depends on the bank\'s policy and is never guaranteed.',
      },
      {
        q: 'Does loan settlement affect CIBIL score?',
        a: 'A settled loan is typically reported as "Settled" rather than "Closed" with credit bureaus, which can affect future credit decisions. The exact impact depends on the lender and bureau reporting practices.',
      },
      {
        q: 'How long does the settlement process take?',
        a: 'Timelines vary by lender, case complexity, and document availability. Some matters move in weeks, others take several months.',
      },
      {
        q: 'Do you guarantee settlement?',
        a: 'No. Athena Legal Solution LLP does not guarantee any specific outcome or percentage. Settlement depends on lender policy and approval.',
      },
    ],
  },
  {
    heading: 'Recovery & Harassment',
    items: [
      {
        q: 'Can recovery agents call my family members?',
        a: 'Recovery agents are generally expected to contact the borrower (and any co-borrower or guarantor on record). Repeated calls to uninvolved family members may not be appropriate practice.',
      },
      {
        q: 'What should I do if I am being harassed by recovery agents?',
        a: 'Preserve documentation — call logs, screenshots, written records — and follow a structured escalation path through the lender\'s grievance redressal mechanism and applicable regulatory channels.',
      },
    ],
  },
  {
    heading: 'Legal Notices',
    items: [
      {
        q: 'What should I do if I receive a legal notice?',
        a: 'Do not ignore it. Preserve the document, note the date received and any deadline mentioned, and have it reviewed before sending any reply. A formal reply has legal consequences.',
      },
      {
        q: 'Should I reply to a legal notice myself?',
        a: 'A formal reply has legal consequences and should be drafted with proper advisory review.',
      },
    ],
  },
  {
    heading: 'Working with Athena',
    items: [
      {
        q: 'Do you take over loan repayment?',
        a: 'No. Athena Legal Solution LLP is an advisory firm. We do not collect EMIs or repayments on behalf of any client.',
      },
      {
        q: 'Is my information confidential?',
        a: 'Yes. Client conversations, documents, and case details are treated with strict confidentiality.',
      },
      {
        q: 'Where do you operate?',
        a: 'Pan-India, with a focus on Delhi NCR. Remote consultation is available across India.',
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = sections.flatMap((s) => s.items);
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers to the Questions Borrowers Ask Most"
        subtitle="Grounded, plain-language guidance — without promises that depend on third parties."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ' },
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
