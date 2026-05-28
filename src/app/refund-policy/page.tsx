import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Refund Policy',
  description:
    'Refund Policy for advisory engagements with Athena Legal Solution LLP, including eligibility, exclusions, and request process.',
  path: '/refund-policy',
});

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      subtitle="How refunds are considered for advisory engagements."
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Refund Policy' },
      ]}
      effectiveDate="01 Jan 2026"
    >
      <h2>Overview</h2>
      <p>
        Athena Legal Solution LLP offers advisory engagements where fees are charged for
        time, expertise, and structured deliverables. Refunds are considered on a
        case-by-case basis as outlined below.
      </p>

      <h2>When refunds may be considered</h2>
      <ul>
        <li>
          Where engagement work has not commenced and a written cancellation request is
          made within the cooling-off window stated in your engagement document.
        </li>
        <li>
          Where a duplicate payment has been made for the same engagement.
        </li>
        <li>
          Where Athena Legal Solution LLP is unable to commence work due to factors on
          our side.
        </li>
      </ul>

      <h2>When refunds are not available</h2>
      <ul>
        <li>
          Where advisory work, document review, or written deliverables have been
          completed in full or in part.
        </li>
        <li>
          Where the engagement is being terminated due to non-cooperation, withholding
          of material information, or breach of engagement terms by the client.
        </li>
        <li>
          Where the desired outcome was contingent on third-party approval (such as a
          lender) and that approval was not granted.
        </li>
      </ul>

      <h2>Request process</h2>
      <p>
        To raise a refund request, write to{' '}
        <a href={siteConfig.emailHref}>{siteConfig.email}</a> with your engagement
        reference, date of payment, and a summary of the reason for the request.
        Approved refunds are processed to the original payment method within a
        reasonable working window.
      </p>

      <h2>No guarantee tied to refund</h2>
      <p>
        A refund request based on the absence of a particular outcome (such as a
        specific settlement percentage or approval by a lender) is not eligible, as such
        outcomes are outside our control.
      </p>
    </LegalPage>
  );
}
