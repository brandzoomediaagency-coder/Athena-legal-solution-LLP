export type BlogCategory =
  | 'Civil Law'
  | 'Criminal Law'
  | 'Family Law'
  | 'Property Law'
  | 'Cheque Bounce'
  | 'Consumer Law'
  | 'Corporate Law'
  | 'Legal Notices'
  | 'Loan & Debt Support'
  | 'Borrower Rights';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readTime: string;
  publishedAt: string;
  metaTitle: string;
  metaDescription: string;
  body: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
};

export const blogCategories: BlogCategory[] = [
  'Civil Law',
  'Criminal Law',
  'Family Law',
  'Property Law',
  'Cheque Bounce',
  'Consumer Law',
  'Corporate Law',
  'Legal Notices',
  'Loan & Debt Support',
  'Borrower Rights',
];

export const blogPosts: BlogPost[] = [
  // ── New broad-legal posts ──────────────────────────────────────────────
  {
    slug: 'what-to-do-after-receiving-a-legal-notice-in-india',
    title: 'What to Do After Receiving a Legal Notice in India',
    excerpt:
      'A calm, structured guide on the first hours after a legal notice arrives — what to preserve, what to avoid, and how to plan the response.',
    category: 'Legal Notices',
    readTime: '7 min read',
    publishedAt: '2026-04-22',
    metaTitle: 'Received a Legal Notice in India? Here\'s What to Do Next',
    metaDescription:
      'Step-by-step guidance on what to do after receiving a legal notice in India — documentation, deadlines, and structured response planning.',
    body: [
      {
        heading: 'Treat the notice as time-sensitive',
        paragraphs: [
          'A legal notice is a formal communication that almost always carries a deadline — explicit or implied. The most common mistake is ignoring it. The second most common is responding informally in the moment.',
        ],
      },
      {
        heading: 'Preserve everything',
        paragraphs: [
          'The original notice, the envelope, courier slip, and the date of receipt all matter. Do not throw any of them away.',
        ],
        bullets: [
          'Photograph the envelope and the notice',
          'Note the date and time of receipt',
          'Do not reply on WhatsApp or by phone without legal review',
          'Identify the sender and any deadlines mentioned',
        ],
      },
      {
        heading: 'Get a documented review',
        paragraphs: [
          'A structured legal review will identify what is being claimed, what supporting documents the sender relies on, what the implicit timeline is, and what the right tone of reply should be.',
        ],
      },
    ],
  },
  {
    slug: 'cheque-bounce-section-138-important-steps',
    title: 'Cheque Bounce Case: Important Steps Under NI Act Section 138',
    excerpt:
      'A practical guide to the procedural framework around dishonoured cheques — statutory notices, timelines, and the realistic path forward.',
    category: 'Cheque Bounce',
    readTime: '8 min read',
    publishedAt: '2026-04-26',
    metaTitle: 'Cheque Bounce — Section 138 NI Act Steps Explained',
    metaDescription:
      'Understand the procedural steps in a cheque bounce / Section 138 NI Act matter — notice, reply, complaint, and the realistic timeline.',
    body: [
      {
        heading: 'Why Section 138 is time-bound',
        paragraphs: [
          'Section 138 of the Negotiable Instruments Act creates a statutory framework with strict deadlines from the date a cheque is returned. Acting quickly is essential — both for payees and drawers.',
        ],
      },
      {
        heading: 'The core sequence',
        paragraphs: [
          'In broad terms, the matter moves through the cheque-return memo, a statutory demand notice within the prescribed window, a period for payment, and then a complaint filing if the demand goes unmet.',
        ],
      },
    ],
  },
  {
    slug: 'documents-for-a-property-dispute-consultation',
    title: 'How to Prepare Documents for a Property Dispute Consultation',
    excerpt:
      'The papers that meaningfully change a property consultation — and the ones that just take up time. A practical checklist.',
    category: 'Property Law',
    readTime: '5 min read',
    publishedAt: '2026-04-30',
    metaTitle: 'Documents to Carry to a Property Dispute Consultation',
    metaDescription:
      'A clear, practical checklist of property documents that meaningfully change a legal consultation — title chain, possession, communication, and notices.',
    body: [
      {
        heading: 'Why papers matter more than narrative',
        paragraphs: [
          'Most property disputes turn on what the papers actually say — not on what was promised verbally. Preparing the documentation before a consultation is the highest-leverage thing a client can do.',
        ],
        bullets: [
          'Sale deed and chain-of-title documents',
          'Mutation records, Index II, property tax receipts',
          'Possession evidence (letters, photographs, utility bills)',
          'Builder communication, allotment letters, agreements',
          'Earlier notices and replies',
        ],
      },
    ],
  },
  {
    slug: 'mutual-divorce-vs-contested-divorce',
    title: 'Mutual Divorce vs Contested Divorce: Basic Differences',
    excerpt:
      'A grounded explanation of the two routes — what each requires, where they diverge, and how to think about the choice.',
    category: 'Family Law',
    readTime: '6 min read',
    publishedAt: '2026-05-03',
    metaTitle: 'Mutual vs Contested Divorce in India — Basic Differences',
    metaDescription:
      'Understand the differences between mutual consent and contested divorce in India — requirements, timelines, and key practical considerations.',
    body: [
      {
        heading: 'Mutual consent',
        paragraphs: [
          'A mutual consent route requires both spouses to agree on the divorce itself and on terms relating to maintenance, custody, and any settlement. It is generally faster and less adversarial.',
        ],
      },
      {
        heading: 'Contested route',
        paragraphs: [
          'A contested matter proceeds where one spouse seeks dissolution and the other contests it, or where the terms cannot be agreed. The timeline is longer and the documentation deeper.',
        ],
      },
    ],
  },
  {
    slug: 'when-should-a-business-send-a-legal-notice',
    title: 'When Should a Business Send a Legal Notice?',
    excerpt:
      'For business owners — when does a legal notice protect your position, and when is it just noise that hardens the dispute?',
    category: 'Corporate Law',
    readTime: '5 min read',
    publishedAt: '2026-05-08',
    metaTitle: 'When Should a Business Send a Legal Notice? — Practical Guide',
    metaDescription:
      'Practical guidance for business owners on when to send a legal notice — protecting your position versus hardening the dispute.',
    body: [
      {
        heading: 'When a notice helps',
        paragraphs: [
          'A notice creates a documented record, formally crystallises the demand, and often unlocks otherwise stuck conversations. It is most effective when the underlying contract and communication trail support it.',
        ],
      },
      {
        heading: 'When it hurts',
        paragraphs: [
          'Premature notices can harden positions, end commercial conversations, and signal a willingness to litigate that you may not actually want.',
        ],
      },
    ],
  },
  {
    slug: 'consumer-complaint-process-india-basic-guide',
    title: 'Consumer Complaint Process in India: Basic Guide',
    excerpt:
      'An accessible overview of how a consumer complaint moves — from a pre-complaint notice to forum filing and orders.',
    category: 'Consumer Law',
    readTime: '6 min read',
    publishedAt: '2026-05-11',
    metaTitle: 'Consumer Complaint Process in India — Basic Guide',
    metaDescription:
      'A clear, basic overview of the consumer complaint process in India — notice, complaint filing, hearings, and possible orders.',
    body: [
      {
        heading: 'A short, structured overview',
        paragraphs: [
          'The consumer protection framework provides for tiered forums based on the value of the dispute, supports time-bound resolution, and allows compensation, replacement, refund, and other reliefs.',
        ],
      },
    ],
  },
  {
    slug: 'bail-consultation-documents-and-first-steps',
    title: 'Bail Consultation: Documents and First Steps',
    excerpt:
      'A calm framework for a bail consultation — what documents to bring, what not to do, and how to think about the immediate next steps.',
    category: 'Criminal Law',
    readTime: '6 min read',
    publishedAt: '2026-05-14',
    metaTitle: 'Bail Consultation in India — Documents and First Steps',
    metaDescription:
      'Practical guidance for a bail consultation — documents to prepare, immediate next steps, and what not to do in the first 24 hours.',
    body: [
      {
        heading: 'No promises in the first hour',
        paragraphs: [
          'Bail is a judicial decision based on the facts, law, and the court\'s discretion. Anyone promising a guaranteed outcome before reading the papers is making a claim no advocate can responsibly make.',
        ],
      },
    ],
  },
  {
    slug: 'agreement-drafting-why-proper-legal-review-matters',
    title: 'Agreement Drafting: Why Proper Legal Review Matters',
    excerpt:
      'Why a structured pre-execution review on even a "simple" agreement is cheaper than the dispute that follows a missing clause.',
    category: 'Corporate Law',
    readTime: '5 min read',
    publishedAt: '2026-05-18',
    metaTitle: 'Why Legal Review of Agreements Matters Before Signing',
    metaDescription:
      'A practical case for getting agreements reviewed before signing — common pitfalls, missing clauses, and downstream cost of skipping review.',
    body: [
      {
        heading: 'The cost asymmetry',
        paragraphs: [
          'A pre-execution review takes hours. A dispute caused by a missing protective clause can take months or years to resolve. The cost asymmetry alone justifies the review.',
        ],
      },
    ],
  },

  // ── Existing loan / debt posts (rewritten under new category mapping) ──
  {
    slug: 'how-personal-loan-settlement-works-in-india',
    title: 'How Personal Loan Settlement Works in India',
    excerpt:
      'A grounded walkthrough of the personal loan settlement process — when it makes sense, what to expect, and what it cannot do.',
    category: 'Loan & Debt Support',
    readTime: '7 min read',
    publishedAt: '2026-02-12',
    metaTitle: 'How Personal Loan Settlement Works in India | Athena Legal',
    metaDescription:
      'A clear, advisory-led explanation of how personal loan settlement works in India, with the realistic limits and credit score implications.',
    body: [
      {
        heading: 'What "settlement" actually means',
        paragraphs: [
          'Personal loan settlement is a negotiated arrangement between a borrower and the lender to close an outstanding loan at a reduced one-time payment, typically when the borrower is unable to continue regular EMIs.',
          'Settlement is not the same as loan closure. A closed loan reflects a fully repaid obligation; a settled loan reflects a discounted payoff and is reported as such to credit bureaus.',
        ],
      },
      {
        heading: 'When borrowers consider settlement',
        paragraphs: [
          'Settlement is typically considered after a borrower\'s repayment situation has been impaired for an extended period — not as a first response to a single missed EMI.',
        ],
        bullets: [
          'Several months of overdue EMIs with limited recovery prospects',
          'A documented hardship — job loss, business loss, medical emergency',
          'Receipt of pre-legal or legal communication from the lender',
          'Multiple loans creating compounding stress on monthly cash flow',
        ],
      },
      {
        heading: 'What settlement cannot do',
        paragraphs: [
          'Settlement does not erase a credit history. It does not guarantee future loan eligibility. It is not a tool to escape obligations that the borrower has the capacity to service. And no advisor can promise a specific settlement percentage in advance.',
        ],
      },
    ],
  },
  {
    slug: 'credit-card-settlement-process-benefits-credit-score-impact',
    title: 'Credit Card Settlement: Process, Benefits and Credit Score Impact',
    excerpt:
      'The realistic case for and against credit card settlement, and what borrowers should know about how it shows up on credit reports.',
    category: 'Loan & Debt Support',
    readTime: '6 min read',
    publishedAt: '2026-02-18',
    metaTitle: 'Credit Card Settlement: Process, Benefits, Credit Score',
    metaDescription:
      'A balanced advisory view of credit card settlement — when it helps, what it costs, and how it shows up on your credit report.',
    body: [
      {
        heading: 'Why credit card balances spiral',
        paragraphs: [
          'Credit cards combine high finance charges, compounding interest, and a minimum-due structure that makes prolonged carry-over expensive. When a cardholder slips behind, the outstanding can grow quickly.',
        ],
      },
      {
        heading: 'How the credit report reflects settlement',
        paragraphs: [
          'A settled card account is generally reported with a "Settled" status to credit bureaus. That tag is visible to future lenders and influences underwriting.',
        ],
      },
    ],
  },
  {
    slug: 'what-to-do-if-recovery-agents-are-harassing-you',
    title: 'What to Do If Recovery Agents Are Harassing You',
    excerpt:
      'A practical, step-by-step guide to documenting and responding to inappropriate recovery practices, without escalating the situation unnecessarily.',
    category: 'Borrower Rights',
    readTime: '8 min read',
    publishedAt: '2026-03-04',
    metaTitle: 'Recovery Agent Harassment: What Borrowers Should Do',
    metaDescription:
      'Step-by-step advisory guidance for borrowers facing recovery agent harassment — documentation, escalation, and legal options.',
    body: [
      {
        heading: 'Recognise what crosses the line',
        paragraphs: [
          'Routine reminders, statutory communications, and structured calls are part of the recovery process. Abusive language, calls at odd hours, repeated calls to uninvolved family members, public shaming, and threats are not.',
        ],
      },
      {
        heading: 'Build a documented record',
        paragraphs: [
          'A documented record is the borrower\'s strongest asset. Call logs, screenshots, written summaries, and identification of any visiting agents should all be preserved.',
        ],
      },
    ],
  },
  {
    slug: 'loan-settlement-vs-loan-closure-key-differences',
    title: 'Loan Settlement vs Loan Closure: Key Differences',
    excerpt:
      'Two outcomes that sound similar but mean very different things on a credit report and in future borrowing.',
    category: 'Loan & Debt Support',
    readTime: '5 min read',
    publishedAt: '2026-03-09',
    metaTitle: 'Loan Settlement vs Loan Closure — Key Differences Explained',
    metaDescription:
      'Understand the practical and credit-reporting differences between loan settlement and loan closure before choosing a path.',
    body: [
      {
        heading: 'Closure: the clean exit',
        paragraphs: [
          'Loan closure means the borrower has paid the full outstanding amount, including principal, interest, and any applicable charges, as per the original or revised schedule.',
        ],
      },
      {
        heading: 'Settlement: a negotiated exit',
        paragraphs: [
          'Settlement means the lender has agreed to accept less than the full outstanding as a final payoff. This is reflected differently on the credit report and signals a different repayment history.',
        ],
      },
    ],
  },
];

export const getPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
