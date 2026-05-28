import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy Policy describing how Athena Legal Solution LLP collects, uses, and safeguards information shared by website visitors and clients.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use, and safeguard information shared with us."
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Privacy Policy' },
      ]}
      effectiveDate="01 Jan 2026"
    >
      <h2>Overview</h2>
      <p>
        Athena Legal Solution LLP (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects
        the privacy of every visitor to this website and every individual who shares
        information with us. This Privacy Policy explains what information we collect, how
        we use it, and the choices available to you.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Contact details you submit through our forms (name, phone, email, city).</li>
        <li>Case-related details you share, including loan / card status and lender name.</li>
        <li>Communication you exchange with us via email, phone, or WhatsApp.</li>
        <li>
          Standard website analytics (device, browser, pages visited) where applicable
          tracking is configured.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to your enquiry and provide advisory support.</li>
        <li>To maintain a documented record of conversations and engagement.</li>
        <li>To comply with applicable legal and regulatory requirements.</li>
        <li>To improve our website and service delivery.</li>
      </ul>

      <h2>Information sharing</h2>
      <p>
        We do not sell personal information. Information you share with us is used solely
        for advisory engagement and is not disclosed to third parties except where
        necessary to provide our services or where required by law.
      </p>

      <h2>Confidentiality</h2>
      <p>
        Case details and documents shared during consultation are treated with strict
        confidentiality and access is restricted to authorised personnel.
      </p>

      <h2>Cookies</h2>
      <p>
        This website may use cookies for analytics and user experience purposes. You can
        control cookies through your browser settings.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain information for as long as required to provide our services and to
        comply with applicable legal obligations.
      </p>

      <h2>Your rights</h2>
      <p>
        You may request access, correction, or deletion of your personal information by
        contacting us at{' '}
        <a href={siteConfig.emailHref}>{siteConfig.email}</a>.
      </p>

      <h2>Updates to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any updates will be published
        on this page with a revised effective date.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about this Privacy Policy, write to us at{' '}
        <a href={siteConfig.emailHref}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  );
}
