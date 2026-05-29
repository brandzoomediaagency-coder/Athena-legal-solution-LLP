import { siteConfig } from '@/lib/site';
import { practiceAreas, practiceAreasMain, loanDebtServices } from '@/lib/practiceAreas';

export const dynamic = 'force-static';

export function GET() {
  const body = `# ${siteConfig.name}

> ${siteConfig.tagline}

Athena Legal Solution LLP is a legal solution firm based around Tis Hazari Court, New Delhi, providing legal consultation, documentation support, dispute resolution guidance, and financial legal advisory services for individuals, families, and businesses across Delhi NCR and pan-India.

## Website
${siteConfig.url}

## What we do
Civil, criminal, family / matrimonial, property, cheque bounce, consumer, corporate / business legal, employment, cyber complaint, legal notice drafting and reply, documentation and agreements, and arbitration / mediation consultation — plus dedicated loan settlement, credit card settlement, recovery harassment, and debt resolution advisory.

## Practice areas
${practiceAreasMain.map((p) => `- ${p.shortTitle}: ${siteConfig.url}${p.path}`).join('\n')}

## Loan & debt support
${loanDebtServices.map((p) => `- ${p.shortTitle}: ${siteConfig.url}${p.path}`).join('\n')}

## Contact
- Phone: ${siteConfig.phone}
- WhatsApp: ${siteConfig.whatsapp}
- Email: ${siteConfig.email}
- Alternate email: ${siteConfig.altEmail}
- Location: ${siteConfig.address.displayShort}
- Hours: ${siteConfig.hours}
- Contact page: ${siteConfig.url}/contact-us

## Important
Athena Legal Solution LLP provides legal consultation and documentation support. Outcomes depend on facts, documents, applicable law, and the discretion of the competent court, authority, or lender. No specific result is promised or guaranteed.

## Disclaimer
${siteConfig.url}/disclaimer

## Sitemap
${siteConfig.url}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
