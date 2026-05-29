export const siteConfig = {
  name: 'Athena Legal Solution LLP',
  shortName: 'Athena Legal',
  tagline: 'Guided by Justice, Driven by Results',
  description:
    'Athena Legal Solution LLP provides legal consultation, documentation support, dispute resolution guidance, loan settlement support, recovery harassment guidance, and legal advisory services for individuals, families, and businesses across Delhi NCR and pan-India.',
  shortDescription:
    'Comprehensive legal consultation, documentation support, dispute resolution and financial legal advisory.',
  url: 'https://athenalegalsolutionllp.in',
  ogImage: '/og-athena-legal.svg',
  locale: 'en_IN',

  phone: '+91 70425 38878',
  phoneHref: 'tel:+917042538878',
  whatsapp: '+91 70425 38878',
  whatsappHref: 'https://wa.me/917042538878',
  whatsappPrefilled: (caseType = 'General Legal Matter') =>
    `https://wa.me/917042538878?text=${encodeURIComponent(
      `Hello Athena Legal Solution LLP, I need legal consultation. My case type is: ${caseType}. Please guide me.`
    )}`,

  email: 'info@athenalegalsolutionllp.in',
  emailHref: 'mailto:info@athenalegalsolutionllp.in',
  altEmail: 'athenalegalsolution@gmail.com',
  altEmailHref: 'mailto:athenalegalsolution@gmail.com',

  address: {
    locality: 'Tis Hazari Court',
    sub: 'Civil Lines',
    region: 'New Delhi',
    state: 'Delhi',
    postalCode: '110054',
    country: 'IN',
    displayShort: 'Tis Hazari Court, New Delhi',
  },

  hours: 'Mon–Sat, 9:00 AM – 5:00 PM',
  hoursMachine: 'Mo-Sa 09:00-17:00',

  social: {
    linkedin: 'https://www.linkedin.com/company/athena-legal-solution-llp',
    facebook: 'https://www.facebook.com/athenalegalsolutionllp',
    instagram: 'https://www.instagram.com/athenalegalsolutionllp',
  },
} as const;

export const trustMicrocopy = [
  'Confidential Consultation',
  'Documentation-Focused Support',
  'Practical Legal Guidance',
  'Delhi NCR & Pan-India Assistance',
];

export const serviceAreas = [
  'Delhi',
  'New Delhi',
  'Delhi NCR',
  'Tis Hazari',
  'Noida',
  'Gurugram',
  'Ghaziabad',
  'Faridabad',
];
