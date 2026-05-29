import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { OrganizationLd, WebsiteLd } from '@/components/SchemaJsonLd';
import { siteConfig } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Legal Consultation & Dispute Resolution Support in Delhi`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  generator: 'Next.js',
  keywords: [
    'legal consultation Delhi',
    'civil lawyer in Delhi',
    'criminal lawyer in Delhi',
    'family lawyer in Delhi',
    'property lawyer in Delhi',
    'cheque bounce lawyer',
    'consumer complaint lawyer',
    'business legal consultant',
    'legal notice drafting Delhi',
    'agreement drafting lawyer',
    'employment lawyer Delhi',
    'cyber fraud complaint guidance',
    'arbitration legal support',
    'loan settlement services',
    'credit card settlement',
    'recovery agent harassment',
    'debt resolution services',
    'lawyer near Tis Hazari Court',
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: `${siteConfig.name} | Legal Consultation & Dispute Resolution Support`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Legal Consultation & Dispute Resolution Support`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  // Favicon + apple-touch-icon are auto-generated via app/icon.tsx and app/apple-icon.tsx.
  // An SVG fallback is also provided via public/favicon.svg.
  manifest: '/site.webmanifest',
  verification: {
    google:
      process.env.NEXT_PUBLIC_GSC_VERIFICATION ||
      '_AOo-TXbvrurlR7oicgG4uAbuLJ6ayHDcW-XIcvH4nM',
  },
};

export const viewport: Viewport = {
  themeColor: '#061A2B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const metaPixel = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-56SQRDKN';
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google Tag Manager — loads as high in <head> as possible */}
        {gtmId && (
          <Script id="gtm-init" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        )}
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) — must be immediately after <body> */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[100] focus:rounded focus:bg-gold focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCTA />
        <OrganizationLd />
        <WebsiteLd />

        {/* Google Analytics 4 — set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel — set NEXT_PUBLIC_META_PIXEL_ID in .env.local */}
        {metaPixel && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixel}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
