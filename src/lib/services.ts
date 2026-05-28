export type ServiceSlug =
  | 'personal-loan-settlement'
  | 'credit-card-settlement'
  | 'business-loan-settlement'
  | 'recovery-agent-harassment-support'
  | 'legal-notice-assistance'
  | 'debt-resolution-advisory';

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  excerpt: string;
  icon:
    | 'shield'
    | 'card'
    | 'building'
    | 'phone'
    | 'document'
    | 'scale';
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  hero: {
    eyebrow: string;
    heading: string;
    intro: string;
  };
  sections: Array<{
    heading: string;
    body: string;
    bullets?: string[];
  }>;
  faqs: Array<{ q: string; a: string }>;
};

export const services: Service[] = [
  {
    slug: 'personal-loan-settlement',
    title: 'Personal Loan Settlement',
    shortTitle: 'Personal Loan Settlement',
    excerpt:
      'Practical advisory for borrowers facing overdue personal loan EMIs, lender pressure, and settlement decisions.',
    icon: 'shield',
    keyword: 'personal loan settlement',
    metaTitle:
      'Personal Loan Settlement Support in India | Athena Legal Solution LLP',
    metaDescription:
      'Get practical advisory support for personal loan settlement, overdue EMIs, lender pressure, and settlement documentation with Athena Legal Solution LLP.',
    hero: {
      eyebrow: 'Personal Loan Settlement',
      heading: 'Personal Loan Settlement Support You Can Rely On',
      intro:
        'Structured legal and financial advisory for individuals dealing with overdue personal loan EMIs, collection pressure, and settlement decisions. Settlement outcomes depend on lender policies, documents, and case review.',
    },
    sections: [
      {
        heading: 'What is personal loan settlement?',
        body: 'Personal loan settlement is a process where the borrower and lender agree on a reduced one-time payment to close an outstanding personal loan that has become difficult to service in full. It is typically considered when EMIs are significantly overdue and a regular repayment plan is no longer feasible. The terms, eligibility, and impact vary by lender and case.',
      },
      {
        heading: 'When should you consider settlement?',
        body: 'Settlement may be considered in specific stress situations after careful review of finances, documents, and lender position.',
        bullets: [
          'EMIs overdue for an extended period with no clear repayment capacity',
          'Job loss, business loss, medical emergency, or other documented hardship',
          'Repeated recovery calls or notices despite genuine efforts',
          'Multiple loans creating unmanageable monthly outflow',
        ],
      },
      {
        heading: 'Documents typically reviewed',
        body: 'A thorough document review is the foundation of any responsible settlement advisory.',
        bullets: [
          'Loan agreement and sanction letter',
          'Repayment schedule and EMI statements',
          'Latest account statement and outstanding summary',
          'Any communication, demand letters, or legal notices received',
          'KYC and income documents for hardship explanation',
        ],
      },
      {
        heading: 'How the advisory process works',
        body: 'Athena Legal Solution LLP follows a transparent, documentation-focused process: confidential consultation, case and document review, strategy planning, communication support, settlement documentation review, and closure guidance.',
      },
      {
        heading: 'Impact on credit score',
        body: 'A settled loan is typically reflected as "Settled" rather than "Closed" on credit reports, which can affect future credit decisions. The actual impact depends on the lender, bureau reporting practices, and the borrower\'s overall credit history. We help clients understand the trade-offs before proceeding.',
      },
    ],
    faqs: [
      {
        q: 'Can every personal loan be settled?',
        a: 'No. Settlement eligibility depends on lender policy, outstanding amount, EMI history, hardship documentation, and case review. Every case is evaluated independently.',
      },
      {
        q: 'How long does the process take?',
        a: 'Timelines vary by lender, case complexity, and document availability. Some matters close in weeks, others take several months.',
      },
      {
        q: 'Do you guarantee a specific settlement percentage?',
        a: 'No. Athena Legal Solution LLP does not promise any specific percentage or guaranteed outcome. The final terms depend on lender approval.',
      },
    ],
  },
  {
    slug: 'credit-card-settlement',
    title: 'Credit Card Settlement',
    shortTitle: 'Credit Card Settlement',
    excerpt:
      'Advisory support for overdue credit card dues, mounting interest, collection calls, and structured settlement options.',
    icon: 'card',
    keyword: 'credit card settlement',
    metaTitle:
      'Credit Card Settlement Support in India | Athena Legal Solution LLP',
    metaDescription:
      'Advisory support for credit card dues, overdue payments, bank communication, and settlement documentation with Athena Legal Solution LLP.',
    hero: {
      eyebrow: 'Credit Card Settlement',
      heading: 'Credit Card Dues & Settlement Advisory',
      intro:
        'Compounding interest, late fees, and aggressive collection calls can make credit card dues feel unmanageable. We help cardholders understand their position and explore structured options.',
    },
    sections: [
      {
        heading: 'Understanding credit card settlement',
        body: 'Credit card settlement is a negotiated arrangement between the cardholder and the issuing bank to close an outstanding due at a reduced one-time amount. It is typically explored when the cardholder is in genuine financial difficulty and unable to clear the full outstanding.',
      },
      {
        heading: 'Common issues faced by cardholders',
        body: 'Most cardholders we advise present a similar pattern of stress factors.',
        bullets: [
          'Snowballing interest, finance charges, and late fees',
          'Multiple cards with overlapping minimum-due dates',
          'Repeated collection calls and pressure tactics',
          'Threats of legal action without clarity on next steps',
          'Confusion about settlement vs. write-off vs. closure',
        ],
      },
      {
        heading: 'The advisory process',
        body: 'Our credit card settlement advisory follows the same disciplined workflow as our other engagements: consultation, document review, strategy, communication support, and documentation closure guidance.',
      },
      {
        heading: 'Credit score impact',
        body: 'Settled credit card dues are usually reported to bureaus and may impact future credit eligibility. We walk clients through the realistic trade-offs so they can make an informed choice.',
      },
      {
        heading: 'Documents typically required',
        body: 'Card-specific documentation is critical for any responsible advisory.',
        bullets: [
          'Card statements for the last 6–12 months',
          'Outstanding summary and finance charge breakdown',
          'Any settlement offer letters received from the bank',
          'Hardship documentation (job loss, medical, business loss, etc.)',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can credit card dues be reduced?',
        a: 'A reduction may be possible through negotiation, subject to the bank\'s settlement policy, the cardholder\'s hardship profile, and documentation. There is no guaranteed reduction.',
      },
      {
        q: 'Will my card be blocked after settlement?',
        a: 'Most banks close or block the card after settlement and may restrict future credit eligibility. We explain these consequences upfront.',
      },
    ],
  },
  {
    slug: 'business-loan-settlement',
    title: 'Business Loan Settlement',
    shortTitle: 'Business Loan Settlement',
    excerpt:
      'Structured advisory for MSMEs and business borrowers facing loan defaults, lender pressure, and debt restructuring needs.',
    icon: 'building',
    keyword: 'business loan settlement',
    metaTitle:
      'Business Loan Settlement Advisory for Business Owners | Athena Legal Solution LLP',
    metaDescription:
      'Structured advisory support for business loan defaults, lender communication, documentation, and debt resolution planning with Athena Legal Solution LLP.',
    hero: {
      eyebrow: 'Business Loan Settlement',
      heading: 'Business Loan & MSME Debt Advisory',
      intro:
        'Business cash-flow disruptions, working capital crunches, and prolonged downturns can put even well-run businesses under repayment pressure. We bring a structured advisory framework to these situations.',
    },
    sections: [
      {
        heading: 'Business loan stress situations',
        body: 'Business borrowers face a different set of stress factors than retail borrowers — and the response strategy needs to reflect that.',
        bullets: [
          'Working capital limit breaches and overdraft pressure',
          'Term loan EMI defaults due to revenue shortfalls',
          'CGTMSE / collateral-related concerns',
          'SARFAESI notices on secured business loans',
          'Coordinated pressure from multiple lenders',
        ],
      },
      {
        heading: 'MSME / business borrower challenges',
        body: 'MSMEs often deal with regulatory complexity layered on top of repayment stress. We help review the operational, contractual, and lender-side picture together.',
      },
      {
        heading: 'Document review and case mapping',
        body: 'Effective advisory begins with a complete picture of the borrowing structure.',
        bullets: [
          'Sanction letters and security documents',
          'Latest financials and stock statements',
          'CIBIL Commercial / lender CRMS records',
          'Any notice received under SARFAESI, IBC, or other statutes',
        ],
      },
      {
        heading: 'Negotiation and resolution support',
        body: 'We support clients on lender communication strategy, settlement and OTS documentation review, and closure documentation. Outcomes depend on lender policies and case approval.',
      },
    ],
    faqs: [
      {
        q: 'Can a business loan with collateral be settled?',
        a: 'Secured business loans involve additional considerations — collateral status, SARFAESI proceedings, and lender appetite. We review each case independently.',
      },
      {
        q: 'Do you assist with OTS (one-time settlement) documentation?',
        a: 'Yes. We provide documentation review and advisory support around OTS proposals. Final approval rests with the lender.',
      },
    ],
  },
  {
    slug: 'recovery-agent-harassment-support',
    title: 'Recovery Agent Harassment Support',
    shortTitle: 'Recovery Harassment Support',
    excerpt:
      'Borrower rights guidance for inappropriate recovery calls, family contact, and abusive collection behaviour.',
    icon: 'phone',
    keyword: 'recovery agent harassment complaint',
    metaTitle:
      'Recovery Agent Harassment Support | Legal Advisory for Borrowers',
    metaDescription:
      'Get guidance for recovery call harassment, inappropriate communication, family calls, and borrower rights with Athena Legal Solution LLP.',
    hero: {
      eyebrow: 'Recovery Harassment Support',
      heading: 'Borrower Rights & Recovery Harassment Guidance',
      intro:
        'Recovery and collection practices are governed by clear conduct guidelines. When those lines are crossed, borrowers have legitimate channels to document, escalate, and respond.',
    },
    sections: [
      {
        heading: 'What counts as harassment?',
        body: 'Not every recovery call is harassment — but certain conduct can cross into inappropriate territory.',
        bullets: [
          'Calls outside permitted hours',
          'Repeated contact with family members, neighbours, or employers',
          'Abusive, threatening, or intimidating language',
          'Public shaming, defamatory messages, or social media pressure',
          'Visits without prior intimation or proper identification',
        ],
      },
      {
        heading: 'What borrowers should document',
        body: 'Documentation is the strongest borrower asset in any harassment matter.',
        bullets: [
          'Call logs with date, time, and caller details',
          'Screenshots of SMS / WhatsApp / email communication',
          'Names and identification of any visiting agents',
          'Written record of conversations and statements made',
        ],
      },
      {
        heading: 'How Athena can help',
        body: 'We help borrowers organise evidence, understand applicable regulatory channels, prepare appropriate written communication, and engage with the lender\'s grievance redressal mechanism.',
      },
      {
        heading: 'Safe escalation guidance',
        body: 'Escalation should follow a structured path — internal grievance redressal, banking ombudsman where applicable, regulatory complaints, and legal remedies. We help clients choose the right step for their case.',
      },
    ],
    faqs: [
      {
        q: 'Can recovery agents call my family members?',
        a: 'Recovery agents are generally expected to contact the borrower or guarantor directly. Repeated calls to uninvolved family members may not be appropriate. The specifics depend on the conduct.',
      },
      {
        q: 'Can I record a recovery call?',
        a: 'Borrowers commonly preserve recordings as evidence. Legal admissibility and use depend on jurisdiction and facts of the case.',
      },
    ],
  },
  {
    slug: 'legal-notice-assistance',
    title: 'Legal Notice Assistance',
    shortTitle: 'Legal Notice Assistance',
    excerpt:
      'Advisory support for borrowers who have received Section 138, SARFAESI, arbitration, or default-related legal notices.',
    icon: 'document',
    keyword: 'legal notice for loan default',
    metaTitle:
      'Legal Notice Assistance for Loan Default Matters | Athena Legal Solution LLP',
    metaDescription:
      'Get legal advisory support for loan default notices, credit card dues notices, and financial dispute documentation with Athena Legal Solution LLP.',
    hero: {
      eyebrow: 'Legal Notice Assistance',
      heading: 'Received a Notice? Don\'t Ignore It — Review It.',
      intro:
        'A legal notice is a serious communication. Ignoring it almost always makes the position worse. We help clients read the notice carefully, understand what is being claimed, and plan an informed response.',
    },
    sections: [
      {
        heading: 'What to do after receiving a notice',
        body: 'The first hours and days after receiving a notice matter. The right early steps protect your position.',
        bullets: [
          'Preserve the original envelope, courier slip, and document',
          'Note the date of receipt and any deadline mentioned',
          'Do not respond informally to the issuing party',
          'Get a documented review before sending any reply',
        ],
      },
      {
        heading: 'Do not ignore the document',
        body: 'Many borrowers ignore notices hoping the matter will fade. In most cases, the opposite happens — deadlines pass, ex-parte orders are sought, and remedies narrow. Engaging early is almost always the safer path.',
      },
      {
        heading: 'Notice review process',
        body: 'We help clients understand the type of notice (Section 138, SARFAESI, arbitration, demand notice, etc.), the relief claimed, the cited documents, and the practical implications.',
      },
      {
        heading: 'Response strategy',
        body: 'A response strategy is shaped by the type of notice, factual position, documentary evidence, and the client\'s broader objectives. There is no one-size-fits-all reply.',
      },
    ],
    faqs: [
      {
        q: 'Should I reply to a legal notice myself?',
        a: 'A formal reply has legal consequences. We recommend that any reply be drafted with proper advisory review.',
      },
      {
        q: 'What if the deadline mentioned in the notice has already passed?',
        a: 'A missed deadline narrows the available options but does not eliminate them. The matter still needs to be reviewed promptly.',
      },
    ],
  },
  {
    slug: 'debt-resolution-advisory',
    title: 'Debt Resolution Advisory',
    shortTitle: 'Debt Resolution Advisory',
    excerpt:
      'A consolidated advisory view for individuals and businesses dealing with multiple loans, cards, and lender obligations.',
    icon: 'scale',
    keyword: 'debt resolution services',
    metaTitle:
      'Debt Resolution Advisory in India | Athena Legal Solution LLP',
    metaDescription:
      'Consolidated debt resolution advisory for individuals and businesses dealing with multiple loans, credit card dues, and lender pressure.',
    hero: {
      eyebrow: 'Debt Resolution Advisory',
      heading: 'A Single, Consolidated View of Your Debt Position',
      intro:
        'When multiple loans, cards, and lenders are in play, the response cannot be lender-by-lender. We help clients map the full picture and plan a structured resolution path.',
    },
    sections: [
      {
        heading: 'When debt resolution advisory helps',
        body: 'A consolidated advisory engagement is typically suitable in specific situations.',
        bullets: [
          'Multiple loans across banks and NBFCs',
          'A combination of secured and unsecured exposure',
          'Mixed status — some accounts current, some overdue',
          'Need for prioritised action across lenders',
        ],
      },
      {
        heading: 'How the engagement works',
        body: 'We begin with a structured discovery — accounts, balances, EMIs, status, communications received, and any notices on file. From there, we map the position and build a sequenced plan.',
      },
      {
        heading: 'Closure and documentation guidance',
        body: 'Closure documentation is often where preventable errors creep in. We help review settlement letters, no-dues confirmations, and bureau reflection so that completed matters actually stay closed.',
      },
    ],
    faqs: [
      {
        q: 'Do you take over loan repayment?',
        a: 'No. Athena Legal Solution LLP is an advisory firm. We do not collect EMIs or repayments on behalf of any client.',
      },
      {
        q: 'Can you handle all my lenders together?',
        a: 'We provide consolidated advisory across multiple lenders, while clearly distinguishing what we advise on versus what the client and lender execute.',
      },
    ],
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
