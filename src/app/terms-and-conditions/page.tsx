import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Terms and Conditions',
  description:
    'Terms and Conditions governing the use of the Athena Legal Solution LLP website and the engagement of our advisory services.',
  path: '/terms-and-conditions',
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      subtitle="The terms that govern the use of this website and engagement of our services."
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Terms' },
      ]}
      effectiveDate="01 Jan 2026"
    >
      <h2>Acceptance</h2>
      <p>
        By using this website or engaging with Athena Legal Solution LLP, you agree to
        these Terms and Conditions and our Privacy Policy and Disclaimer.
      </p>

      <h2>Nature of services</h2>
      <p>
        Athena Legal Solution LLP provides legal and financial advisory support. We are
        not a lender, debt collector, debt settlement company, credit repair agency, or
        government body. Engagements are documentation-led and outcome-realistic. No
        specific settlement outcome, percentage, or timeline is guaranteed.
      </p>

      <h2>Client responsibilities</h2>
      <ul>
        <li>Provide accurate and complete information about your situation.</li>
        <li>Share required documents promptly and authentically.</li>
        <li>Communicate through agreed channels and respond within reasonable time.</li>
        <li>Disclose any parallel engagement with other advisors or representatives.</li>
      </ul>

      <h2>Fees</h2>
      <p>
        Engagement fees, scope, and payment terms are documented separately for each
        client. No advisory work is initiated without a written engagement understanding.
      </p>

      <h2>No guarantee of outcome</h2>
      <p>
        Outcomes in settlement, recovery, or legal matters depend on lender policy, case
        facts, documents, applicable law, and approvals. We do not promise or guarantee
        any specific result.
      </p>

      <h2>Confidentiality</h2>
      <p>
        We treat client information with strict confidentiality, subject to applicable
        legal and regulatory disclosure requirements.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on this website, including text, design, and branding, is the
        property of Athena Legal Solution LLP and may not be reproduced without prior
        written consent.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, Athena Legal Solution LLP is not liable for
        indirect, incidental, or consequential damages arising from use of this website
        or our services.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of India and are subject to the exclusive
        jurisdiction of the courts at Delhi.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these Terms, write to{' '}
        <a href={siteConfig.emailHref}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  );
}
