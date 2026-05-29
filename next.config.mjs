/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  async redirects() {
    return [
      // High-level renames
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/services', destination: '/practice-areas', permanent: true },
      { source: '/faq', destination: '/faqs', permanent: true },
      { source: '/contact', destination: '/contact-us', permanent: true },

      // Old service-slug routes → new flat URLs
      { source: '/services/personal-loan-settlement', destination: '/loan-settlement', permanent: true },
      { source: '/services/business-loan-settlement', destination: '/loan-settlement', permanent: true },
      { source: '/services/credit-card-settlement', destination: '/credit-card-settlement', permanent: true },
      { source: '/services/recovery-agent-harassment-support', destination: '/recovery-agent-harassment', permanent: true },
      { source: '/services/legal-notice-assistance', destination: '/legal-notice-loan-default', permanent: true },
      { source: '/services/debt-resolution-advisory', destination: '/debt-resolution', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
