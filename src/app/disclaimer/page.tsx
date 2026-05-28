import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Disclaimer',
  description:
    'Important disclaimer regarding the advisory nature of Athena Legal Solution LLP\'s services and the scope of information provided on this website.',
  path: '/disclaimer',
});

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      subtitle="Please read this notice before relying on any information on this website."
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Disclaimer' },
      ]}
      effectiveDate="01 Jan 2026"
    >
      <h2>Advisory nature of services</h2>
      <p>
        Athena Legal Solution LLP provides legal and financial advisory support.
        Information on this website is for general awareness and consultation purposes
        only. Outcomes in settlement or dispute matters depend on lender policies,
        documents, case facts, applicable law, and approvals. <strong>No result is
        guaranteed.</strong>
      </p>

      <h2>Not legal advice</h2>
      <p>
        Nothing on this website constitutes legal advice or an attorney–client
        relationship. Specific guidance can only be provided after a formal engagement
        and review of the relevant facts and documents.
      </p>

      <h2>No affiliation with regulators or lenders</h2>
      <p>
        Athena Legal Solution LLP is an independent advisory firm. We are not affiliated
        with, endorsed by, or acting on behalf of the Reserve Bank of India, any bank,
        NBFC, credit bureau, or government body.
      </p>

      <h2>Third-party links</h2>
      <p>
        This website may contain links to third-party websites. We do not control and are
        not responsible for the content, accuracy, or practices of those websites.
      </p>

      <h2>Testimonials and case examples</h2>
      <p>
        Any client experience descriptions or case examples are representative summaries.
        Outcomes vary based on individual facts and lender decisions.
      </p>

      <h2>No fee promise tied to outcome</h2>
      <p>
        We do not solicit business by promising a specific settlement percentage,
        guaranteed CIBIL improvement, or any other outcome-linked claim.
      </p>
    </LegalPage>
  );
}
