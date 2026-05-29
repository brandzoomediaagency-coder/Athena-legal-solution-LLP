export type PracticeIcon =
  | 'scale'
  | 'gavel'
  | 'family'
  | 'home'
  | 'document'
  | 'shoppingBag'
  | 'briefcase'
  | 'fileSigned'
  | 'pen'
  | 'workers'
  | 'cyber'
  | 'handshake'
  | 'shield'
  | 'card'
  | 'phone'
  | 'building'
  | 'bank';

export type PracticeCategory = 'practice' | 'loan-debt';

export type CaseTypeOption = string;

export type Practice = {
  slug: string; // url segment
  path: string; // full path with leading slash
  title: string; // visible page title / H1
  shortTitle: string; // for cards & nav
  excerpt: string; // card description
  icon: PracticeIcon;
  category: PracticeCategory;
  caseTypeValue: CaseTypeOption; // value used in lead form dropdown
  whatsappCaseLabel: string; // value sent in WhatsApp prefilled message

  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  hero: { eyebrow: string; heading: string; intro: string };

  forWhom: string[]; // "Who this is for"
  situations: string[]; // "Common situations"
  howWeHelp: string[]; // bullets
  documents: string[];
  process: string[];
  legalNote: string; // important disclaimer specific to the area

  faqs: Array<{ q: string; a: string }>;
};

const note =
  'Athena Legal Solution LLP provides legal consultation and documentation support. Outcomes depend on facts, documents, applicable law, and the discretion of the competent court, authority, or lender. No specific result is promised or guaranteed.';

// -----------------------------------------------------------------------------
// 12 PRACTICE AREAS
// -----------------------------------------------------------------------------

export const practiceAreas: Practice[] = [
  {
    slug: 'civil-cases',
    path: '/civil-cases',
    title: 'Civil Cases — Legal Consultation & Litigation Support',
    shortTitle: 'Civil Cases',
    excerpt:
      'Recovery suits, injunctions, contract disputes, defamation matters and money-recovery consultations — handled with documentation discipline.',
    icon: 'scale',
    category: 'practice',
    caseTypeValue: 'Civil Case',
    whatsappCaseLabel: 'Civil Case',
    metaTitle:
      'Civil Lawyer in Delhi | Civil Case Legal Consultation | Athena Legal Solution LLP',
    metaDescription:
      'Civil case legal consultation in Delhi NCR — recovery suits, injunctions, contract disputes, money recovery and documentation support by Athena Legal Solution LLP.',
    keywords: [
      'civil lawyer in Delhi',
      'civil legal consultation',
      'civil dispute legal support',
      'civil litigation support',
      'civil case advice India',
    ],
    hero: {
      eyebrow: 'Civil Cases',
      heading: 'Civil Case Consultation & Litigation Support',
      intro:
        'Practical legal consultation and documentation support for civil disputes — from contract and recovery matters to injunction and defamation consultations.',
    },
    forWhom: [
      'Individuals facing recovery, injunction or contract-related disputes',
      'Businesses dealing with civil litigation exposure',
      'Buyers, sellers, and parties to civil agreements needing structured guidance',
    ],
    situations: [
      'Money recovery from individuals, vendors, or partners',
      'Contract breach and performance disputes',
      'Permanent / temporary injunction matters',
      'Property-related civil disputes (separate from criminal proceedings)',
      'Defamation matters — civil consultation',
      'Documentation review for civil claims and defences',
    ],
    howWeHelp: [
      'Case and document review to understand the civil position',
      'Strategy notes on filing, defence, or settlement options',
      'Drafting / review of plaints, written statements, applications, and notices',
      'Coordination support for hearings and procedural steps',
    ],
    documents: [
      'Contract / agreement and amendments',
      'Correspondence, emails, invoices, and statements of account',
      'Any earlier notices or court papers',
      'KYC documents of parties involved',
    ],
    process: [
      'Confidential consultation',
      'Document and timeline review',
      'Written strategy summary',
      'Drafting / reply / representation support',
      'Hearing-stage coordination',
      'Closure documentation review',
    ],
    legalNote: note,
    faqs: [
      {
        q: 'How long do civil cases take in India?',
        a: 'Civil case timelines vary significantly based on jurisdiction, court load, complexity, and parties\' conduct. A realistic timeline can only be discussed after reviewing the facts.',
      },
      {
        q: 'Can a civil dispute be settled out of court?',
        a: 'Many civil disputes can be explored for negotiated settlement or mediation. Suitability depends on the nature of the dispute and the parties\' willingness.',
      },
    ],
  },
  {
    slug: 'criminal-cases',
    path: '/criminal-cases',
    title: 'Criminal Cases — Legal Consultation & Bail Support',
    shortTitle: 'Criminal Cases',
    excerpt:
      'FIR guidance, bail consultation, criminal complaint drafting and procedural support with practical, compliance-focused advisory.',
    icon: 'gavel',
    category: 'practice',
    caseTypeValue: 'Criminal Case',
    whatsappCaseLabel: 'Criminal Case',
    metaTitle:
      'Criminal Lawyer in Delhi | Bail & Criminal Case Consultation | Athena Legal Solution LLP',
    metaDescription:
      'Criminal case legal consultation in Delhi — FIR guidance, bail support, criminal complaint drafting, police complaint and procedural support from Athena Legal Solution LLP.',
    keywords: [
      'criminal lawyer in Delhi',
      'criminal case legal consultation',
      'bail legal support',
      'FIR guidance lawyer',
      'criminal complaint legal guidance',
    ],
    hero: {
      eyebrow: 'Criminal Cases',
      heading: 'Criminal Case Consultation & Bail Support',
      intro:
        'Procedural guidance for FIR, bail applications, criminal complaints, and police complaint matters. Outcomes depend on facts and judicial discretion — we do not promise any specific result.',
    },
    forWhom: [
      'Individuals named in or facing the threat of an FIR',
      'Complainants seeking guidance on filing a criminal complaint',
      'Family members assisting on bail or procedural matters',
    ],
    situations: [
      'FIR registration / quashing consultation',
      'Anticipatory and regular bail consultation',
      'Criminal complaint and police complaint drafting',
      'Procedural support across court appearances',
      '138 NI Act and related quasi-criminal matters (also see Cheque Bounce)',
    ],
    howWeHelp: [
      'Confidential review of the FIR / complaint / case papers',
      'Strategy summary on next procedural steps',
      'Drafting support for bail, complaints, replies, and applications',
      'Coordination support with the appearing counsel where applicable',
    ],
    documents: [
      'FIR copy / complaint copy (if any)',
      'Identity and address documents',
      'Relevant correspondence and evidence on record',
      'Any prior court orders in the matter',
    ],
    process: [
      'Confidential consultation',
      'Case papers review',
      'Drafting / filing support',
      'Bail / hearing coordination',
      'Status updates',
      'Closure documentation',
    ],
    legalNote: note,
    faqs: [
      {
        q: 'Can bail be guaranteed?',
        a: 'No. Bail is a judicial decision based on the facts of the case, applicable law, and the court\'s discretion. No advocate or firm can guarantee bail.',
      },
      {
        q: 'Should I speak to the police without consulting?',
        a: 'Wherever possible, take a structured consultation first. Informal statements can have downstream consequences.',
      },
    ],
  },
  {
    slug: 'family-matrimonial-cases',
    path: '/family-matrimonial-cases',
    title: 'Family & Matrimonial Cases — Divorce, Maintenance, Custody',
    shortTitle: 'Family & Matrimonial',
    excerpt:
      'Divorce, maintenance, child custody, domestic violence, and mediation consultations — handled with sensitivity and discipline.',
    icon: 'family',
    category: 'practice',
    caseTypeValue: 'Family / Matrimonial',
    whatsappCaseLabel: 'Family or Matrimonial',
    metaTitle:
      'Family Lawyer in Delhi | Divorce, Maintenance & Custody Consultation | Athena Legal Solution LLP',
    metaDescription:
      'Family and matrimonial legal consultation in Delhi — divorce, maintenance, child custody, domestic violence and mediation support with Athena Legal Solution LLP.',
    keywords: [
      'family lawyer in Delhi',
      'divorce legal consultation',
      'maintenance case legal support',
      'matrimonial dispute lawyer',
      'domestic violence legal guidance',
    ],
    hero: {
      eyebrow: 'Family & Matrimonial',
      heading: 'Family & Matrimonial Legal Consultation',
      intro:
        'Confidential, sensitive support across divorce, maintenance, custody, and matrimonial dispute matters. Every situation is unique — guidance is grounded in facts and applicable law.',
    },
    forWhom: [
      'Spouses considering mutual or contested divorce',
      'Parents seeking child custody or visitation guidance',
      'Individuals facing or pursuing maintenance claims',
      'Parties dealing with domestic violence proceedings',
    ],
    situations: [
      'Mutual consent divorce consultation',
      'Contested divorce — petition, reply, evidence stages',
      'Maintenance under Section 125 CrPC / personal laws',
      'Child custody and guardianship matters',
      'Domestic violence complaints — complainant or respondent side',
      'Mediation and settlement discussions',
    ],
    howWeHelp: [
      'Confidential consultation to understand the situation',
      'Document review and timeline mapping',
      'Drafting / review of petitions, replies, settlement deeds, and applications',
      'Coordination support across hearings and mediation sessions',
    ],
    documents: [
      'Marriage certificate and KYC of both parties',
      'Income / expense documents (for maintenance)',
      'Communication records relevant to the dispute',
      'Any earlier complaints, notices or orders',
    ],
    process: [
      'Confidential consultation',
      'Document review',
      'Strategy and counselling on options',
      'Drafting and filing support',
      'Mediation / hearing coordination',
      'Closure documentation',
    ],
    legalNote: note,
    faqs: [
      {
        q: 'Is mutual divorce always faster?',
        a: 'Mutual divorces are generally faster than contested ones, but timelines depend on court process, waiver applications, and case specifics.',
      },
      {
        q: 'Can both parties use the same advisor?',
        a: 'Both parties typically engage separate counsel to avoid conflict of interest, especially in contested matters.',
      },
    ],
  },
  {
    slug: 'property-real-estate-disputes',
    path: '/property-real-estate-disputes',
    title: 'Property & Real Estate Disputes — Legal Support',
    shortTitle: 'Property Disputes',
    excerpt:
      'Sale deed review, partition, possession, builder-buyer, and rent/lease documentation consultations with strong document discipline.',
    icon: 'home',
    category: 'practice',
    caseTypeValue: 'Property Dispute',
    whatsappCaseLabel: 'Property or Real Estate Dispute',
    metaTitle:
      'Property Lawyer in Delhi | Real Estate Dispute Legal Support | Athena Legal Solution LLP',
    metaDescription:
      'Property dispute legal consultation in Delhi NCR — sale deed review, partition, possession, builder-buyer issues and rent/lease documentation by Athena Legal Solution LLP.',
    keywords: [
      'property lawyer in Delhi',
      'property dispute legal support',
      'real estate legal consultation',
      'property documentation lawyer',
      'partition suit guidance',
      'builder buyer dispute Delhi',
    ],
    hero: {
      eyebrow: 'Property & Real Estate',
      heading: 'Property & Real Estate Dispute Consultation',
      intro:
        'Document-led consultation across property disputes — title, possession, partition, builder-buyer, and rent/lease matters. We begin by mapping what the papers actually say.',
    },
    forWhom: [
      'Owners and buyers facing title or possession disputes',
      'Co-owners considering partition',
      'Buyers in builder-buyer disputes',
      'Landlords and tenants needing structured documentation',
    ],
    situations: [
      'Sale deed and chain-of-title review',
      'Agreement to sell — drafting and review',
      'Partition and family settlement consultation',
      'Possession and trespass concerns',
      'Builder delay, defect, and refund disputes',
      'Rent / lease drafting and dispute support',
    ],
    howWeHelp: [
      'Title and document review',
      'Drafting and review of property agreements',
      'Notice drafting and reply support',
      'Coordination on filings and hearings',
    ],
    documents: [
      'Sale deed, agreement to sell, mutation records',
      'Index II, property tax receipts, possession letters',
      'Any builder communication, allotment letters, agreements',
      'Earlier correspondence and notices',
    ],
    process: [
      'Confidential consultation',
      'Document and title review',
      'Strategy note',
      'Drafting / filing / reply support',
      'Hearing coordination',
      'Closure documentation',
    ],
    legalNote: note,
    faqs: [
      {
        q: 'Can I get possession back through a civil case?',
        a: 'Possession remedies depend on the facts — title, prior orders, and the nature of the dispute. A case-specific review is required.',
      },
      {
        q: 'Should I sign the sale deed without review?',
        a: 'Sale deeds carry long-term consequences. A pre-execution review is always advisable.',
      },
    ],
  },
  {
    slug: 'cheque-bounce-cases',
    path: '/cheque-bounce-cases',
    title: 'Cheque Bounce — Section 138 NI Act Legal Support',
    shortTitle: 'Cheque Bounce',
    excerpt:
      'Section 138 NI Act consultation — legal notice drafting, reply, complaint filing, defence guidance, and structured settlement discussions.',
    icon: 'document',
    category: 'practice',
    caseTypeValue: 'Cheque Bounce',
    whatsappCaseLabel: 'Cheque Bounce — Section 138',
    metaTitle:
      'Cheque Bounce Lawyer Delhi | Section 138 NI Act Support | Athena Legal Solution LLP',
    metaDescription:
      'Cheque bounce case legal support in Delhi — Section 138 NI Act notice drafting, reply, complaint filing, defence guidance and settlement support.',
    keywords: [
      'cheque bounce lawyer',
      'NI Act 138 legal notice',
      'cheque bounce case Delhi',
      'section 138 legal support',
      'dishonoured cheque legal help',
    ],
    hero: {
      eyebrow: 'Cheque Bounce',
      heading: 'Section 138 NI Act — Legal Consultation',
      intro:
        'Time-bound procedural support for dishonoured cheque matters — notice drafting, reply, complaint filing, and defence consultation.',
    },
    forWhom: [
      'Payees holding a dishonoured cheque',
      'Drawers who have received a Section 138 notice',
      'Businesses managing multiple cheque-related disputes',
    ],
    situations: [
      'Cheque return memo received — next steps',
      'Drafting of statutory Section 138 notice',
      'Reply to a 138 notice',
      'Filing of complaint under Section 138 NI Act',
      'Defence strategy and evidence guidance',
      'Negotiated settlement and closure support',
    ],
    howWeHelp: [
      'Review of cheque return memo and underlying transaction',
      'Drafting of statutory notice and reply',
      'Complaint filing support',
      'Defence preparation and procedural coordination',
    ],
    documents: [
      'Original cheque and return memo from the bank',
      'Underlying transaction documents (invoice, agreement, loan papers)',
      'Bank statements showing the transaction',
      'Any prior communication between parties',
    ],
    process: [
      'Consultation and timeline check',
      'Notice drafting / reply',
      'Complaint filing / defence strategy',
      'Hearing coordination',
      'Settlement exploration where suitable',
      'Closure documentation',
    ],
    legalNote: note,
    faqs: [
      {
        q: 'Is there a deadline for sending a Section 138 notice?',
        a: 'Yes. Section 138 has strict statutory timelines from the date of cheque return. Acting quickly is critical.',
      },
      {
        q: 'Can a cheque bounce matter be settled?',
        a: 'Many 138 matters are explored for negotiated settlement. Suitability depends on the parties\' position and the stage of proceedings.',
      },
    ],
  },
  {
    slug: 'consumer-complaints',
    path: '/consumer-complaints',
    title: 'Consumer Complaints — Legal Support & Documentation',
    shortTitle: 'Consumer Complaints',
    excerpt:
      'Defective product / service, builder delays, refund disputes, insurance claim issues, and consumer forum process consultation.',
    icon: 'shoppingBag',
    category: 'practice',
    caseTypeValue: 'Consumer Complaint',
    whatsappCaseLabel: 'Consumer Complaint',
    metaTitle:
      'Consumer Complaint Lawyer Delhi | Consumer Court Legal Support | Athena Legal Solution LLP',
    metaDescription:
      'Consumer complaint legal consultation in Delhi NCR — defective product / service, builder delays, refund disputes and insurance claim issues with Athena Legal Solution LLP.',
    keywords: [
      'consumer complaint lawyer',
      'consumer court legal support',
      'consumer case legal consultation',
      'builder consumer complaint',
      'refund dispute legal help',
    ],
    hero: {
      eyebrow: 'Consumer Complaints',
      heading: 'Consumer Forum Consultation & Documentation Support',
      intro:
        'Consultation on consumer protection matters — from drafting a structured complaint to documentation for service or product disputes.',
    },
    forWhom: [
      'Consumers facing defective product or deficient service issues',
      'Buyers in builder delay or refund disputes',
      'Policyholders with rejected or unjust insurance claim experiences',
    ],
    situations: [
      'Defective product or service deficiency',
      'Builder delay, possession denial, or refund dispute',
      'Refund and replacement disputes',
      'Insurance claim rejection or partial settlement issues',
      'Banking or telecom service disputes',
    ],
    howWeHelp: [
      'Review of communication and transaction trail',
      'Drafting of pre-complaint notices and complaints',
      'Documentation support for the consumer forum',
      'Coordination support during proceedings',
    ],
    documents: [
      'Invoice / bill / agreement',
      'Communication with the service provider',
      'Evidence of defect / delay / deficiency',
      'KYC and address documents',
    ],
    process: [
      'Consultation',
      'Documentation review',
      'Notice / complaint drafting',
      'Filing support',
      'Hearing coordination',
      'Closure and execution support',
    ],
    legalNote: note,
    faqs: [
      {
        q: 'Is consumer forum faster than civil court?',
        a: 'Consumer forums are designed for time-bound resolution, but actual timelines depend on the forum\'s workload and case complexity.',
      },
      {
        q: 'Do I need to send a notice first?',
        a: 'A pre-complaint notice is often a practical step. We review whether it is appropriate for your matter.',
      },
    ],
  },
  {
    slug: 'corporate-business-legal',
    path: '/corporate-business-legal',
    title: 'Corporate & Business Legal Advisory',
    shortTitle: 'Corporate & Business',
    excerpt:
      'Business contracts, vendor / partnership / MOU drafting, dispute consultation, and legal notice support for SMEs and growing businesses.',
    icon: 'briefcase',
    category: 'practice',
    caseTypeValue: 'Corporate / Business Legal',
    whatsappCaseLabel: 'Corporate / Business Legal',
    metaTitle:
      'Business Legal Consultant Delhi | Corporate Legal Advisory | Athena Legal Solution LLP',
    metaDescription:
      'Corporate and business legal advisory — contract drafting, vendor agreements, partnership / MOU, legal notices and business dispute support in Delhi NCR.',
    keywords: [
      'business legal consultant',
      'corporate legal advisory',
      'startup legal documentation',
      'contract drafting services',
      'business dispute legal support',
    ],
    hero: {
      eyebrow: 'Corporate & Business',
      heading: 'Corporate & Business Legal Advisory',
      intro:
        'Practical, documentation-led legal support for SMEs, startups, and businesses — across contracts, agreements, notices, and dispute consultation.',
    },
    forWhom: [
      'Founders, MSME owners and growing businesses',
      'Vendors and service providers needing agreement clarity',
      'Partners and shareholders dealing with internal disputes',
    ],
    situations: [
      'Business contract drafting and review',
      'Vendor / service / distribution agreements',
      'Partnership deeds and MOUs',
      'Legal notice drafting and reply for business matters',
      'Commercial dispute consultation',
      'Basic compliance and documentation guidance',
    ],
    howWeHelp: [
      'Document review and risk flagging',
      'Drafting and review of agreements',
      'Notice drafting and reply support',
      'Coordination on dispute and arbitration matters',
    ],
    documents: [
      'Draft / executed agreements and amendments',
      'Internal communication and invoices',
      'Company / firm registration documents',
      'Prior notices and correspondence',
    ],
    process: [
      'Consultation',
      'Documentation review',
      'Drafting / negotiation support',
      'Notice / dispute coordination',
      'Closure documentation',
    ],
    legalNote: note,
    faqs: [
      {
        q: 'Do you provide ongoing retainer support?',
        a: 'Retainer-style engagements are considered case-by-case based on scope, expected workload, and the client\'s needs.',
      },
      {
        q: 'Can you draft a single contract without a long engagement?',
        a: 'Yes — focused single-document engagements are common and clearly scoped.',
      },
    ],
  },
  {
    slug: 'legal-notice',
    path: '/legal-notice',
    title: 'Legal Notice Drafting & Reply',
    shortTitle: 'Legal Notice',
    excerpt:
      'Statutory and demand notice drafting and replies — recovery, property, employment, business, and consumer matters.',
    icon: 'fileSigned',
    category: 'practice',
    caseTypeValue: 'Legal Notice',
    whatsappCaseLabel: 'Legal Notice Drafting or Reply',
    metaTitle:
      'Legal Notice Drafting & Reply Lawyer Delhi | Athena Legal Solution LLP',
    metaDescription:
      'Legal notice drafting and reply services in Delhi NCR — recovery, property, employment, business, and consumer matter notices by Athena Legal Solution LLP.',
    keywords: [
      'legal notice drafting',
      'reply to legal notice',
      'legal notice lawyer Delhi',
      'legal notice for recovery',
      'legal notice for property dispute',
    ],
    hero: {
      eyebrow: 'Legal Notice',
      heading: 'Legal Notice Drafting & Reply',
      intro:
        'A well-drafted notice protects your position. We draft and reply to legal notices with the right facts, statute references, and tone.',
    },
    forWhom: [
      'Individuals or businesses needing to send a formal demand',
      'Recipients of a legal notice who must respond carefully',
      'Parties seeking pre-litigation clarity',
    ],
    situations: [
      'Recovery notice for unpaid dues',
      'Property dispute notice',
      'Employment / salary recovery notice',
      'Consumer dispute pre-complaint notice',
      'Reply to a notice already received',
    ],
    howWeHelp: [
      'Case and document review',
      'Notice drafting with proper facts and law references',
      'Reply drafting with measured tone and legal position',
      'Follow-up advisory if escalation is needed',
    ],
    documents: [
      'Underlying contract, invoice, or transaction document',
      'Earlier communication and any prior notices',
      'KYC documents',
    ],
    process: [
      'Consultation',
      'Document review',
      'Notice / reply drafting',
      'Service / dispatch coordination',
      'Follow-up advisory',
    ],
    legalNote: note,
    faqs: [
      {
        q: 'Can I reply to a notice on my own?',
        a: 'Replying without legal review is risky — incorrect admissions or weak framing can hurt your position later. A structured reply is safer.',
      },
      {
        q: 'How fast can a notice be drafted?',
        a: 'Most straightforward notices can be drafted in a few working days. Complex matters may need more review time.',
      },
    ],
  },
  {
    slug: 'documentation-agreements',
    path: '/documentation-agreements',
    title: 'Documentation, Agreements & Contract Drafting',
    shortTitle: 'Documentation & Agreements',
    excerpt:
      'Rent / sale / partnership / service / employment agreements, MOUs, affidavits and contract reviews — clean, current, enforceable language.',
    icon: 'pen',
    category: 'practice',
    caseTypeValue: 'Documentation / Agreement',
    whatsappCaseLabel: 'Documentation or Agreement Drafting',
    metaTitle:
      'Agreement Drafting Lawyer Delhi | Contract & Legal Document Drafting | Athena Legal Solution LLP',
    metaDescription:
      'Agreement and contract drafting in Delhi — rent, sale, partnership, MOU, service, employment, and affidavit drafting by Athena Legal Solution LLP.',
    keywords: [
      'agreement drafting lawyer',
      'contract drafting services',
      'legal document review',
      'property agreement drafting',
      'business agreement drafting',
    ],
    hero: {
      eyebrow: 'Documentation',
      heading: 'Agreement & Contract Drafting',
      intro:
        'A clean agreement reduces disputes later. We draft and review agreements with the right structure, language, and protective clauses.',
    },
    forWhom: [
      'Individuals signing or executing personal agreements',
      'Businesses formalising vendor, partner, or employee terms',
      'Property buyers, sellers, landlords, and tenants',
    ],
    situations: [
      'Rent / lease / leave-and-licence agreements',
      'Sale agreement and agreement to sell',
      'Partnership, LLP, and MOU documents',
      'Service and consultancy agreements',
      'Employment, NDA, and non-compete documents',
      'Affidavits and supporting declarations',
    ],
    howWeHelp: [
      'Drafting from scratch or refining existing drafts',
      'Risk identification and protective clause guidance',
      'Negotiation support on key terms',
      'Final review before execution',
    ],
    documents: [
      'Existing draft (if any)',
      'Background facts, parties, and commercial terms',
      'KYC and registration documents',
    ],
    process: [
      'Discovery / consultation',
      'First draft preparation',
      'Review with the client',
      'Revisions and finalisation',
      'Execution / registration guidance where applicable',
    ],
    legalNote: note,
    faqs: [
      {
        q: 'Should I get even a small agreement reviewed?',
        a: 'Yes. Small agreements often carry significant downstream consequences. A structured review is inexpensive insurance.',
      },
      {
        q: 'Do you handle registration formalities?',
        a: 'We provide guidance and coordination support. Actual registration is a state-process step the parties execute.',
      },
    ],
  },
  {
    slug: 'employment-labour-matters',
    path: '/employment-labour-matters',
    title: 'Employment & Labour Law Consultation',
    shortTitle: 'Employment & Labour',
    excerpt:
      'Salary disputes, employment contract review, termination consultation, workplace dispute and employer/employee notice support.',
    icon: 'workers',
    category: 'practice',
    caseTypeValue: 'Employment / Labour',
    whatsappCaseLabel: 'Employment or Labour Matter',
    metaTitle:
      'Employment Lawyer Delhi | Labour Law Consultation | Athena Legal Solution LLP',
    metaDescription:
      'Employment and labour law consultation in Delhi — salary disputes, employment contract review, wrongful termination guidance and workplace matters.',
    keywords: [
      'employment lawyer Delhi',
      'labour law consultation',
      'salary dispute legal support',
      'wrongful termination legal guidance',
      'employee rights India',
    ],
    hero: {
      eyebrow: 'Employment & Labour',
      heading: 'Employment & Labour Legal Consultation',
      intro:
        'Structured guidance on employment and labour matters — from contract review and salary disputes to termination, workplace concerns, and notices on both sides.',
    },
    forWhom: [
      'Employees facing salary, termination, or workplace issues',
      'Employers managing employment-related disputes or notices',
      'Founders setting up employment documentation',
    ],
    situations: [
      'Unpaid salary, full-and-final settlement disputes',
      'Wrongful termination and forced resignation concerns',
      'Employment contract review (offer letter, NDA, non-compete)',
      'Workplace dispute guidance',
      'Notice from / to employer',
    ],
    howWeHelp: [
      'Review of contract, communication and policy documents',
      'Structured strategy and risk note',
      'Drafting of notices, replies and complaints',
      'Coordination on conciliation or litigation steps',
    ],
    documents: [
      'Offer letter, appointment letter, HR policies',
      'Salary slips, bank statements, FNF documents',
      'Email and chat correspondence',
      'Any termination / show-cause notices',
    ],
    process: [
      'Consultation',
      'Document review',
      'Strategy and options note',
      'Drafting / notice / complaint',
      'Conciliation or litigation coordination',
      'Closure documentation',
    ],
    legalNote: note,
    faqs: [
      {
        q: 'Can I file a salary recovery claim?',
        a: 'Yes — depending on the role, jurisdiction, and amount involved, multiple routes may be available. The right route depends on the facts.',
      },
      {
        q: 'Is my employment contract enforceable as it is?',
        a: 'Some clauses (especially restrictive covenants) face enforceability tests. A review can flag what holds up and what may not.',
      },
    ],
  },
  {
    slug: 'cyber-complaint-guidance',
    path: '/cyber-complaint-guidance',
    title: 'Cyber Complaint & Online Fraud Guidance',
    shortTitle: 'Cyber Complaint',
    excerpt:
      'Guidance for cyber fraud complaints, evidence preservation, cyber-portal process, and police complaint coordination.',
    icon: 'cyber',
    category: 'practice',
    caseTypeValue: 'Cyber Complaint',
    whatsappCaseLabel: 'Cyber Complaint or Online Fraud',
    metaTitle:
      'Cyber Fraud Complaint Guidance Delhi | Online Fraud Legal Support | Athena Legal Solution LLP',
    metaDescription:
      'Cyber complaint and online fraud legal guidance — complaint drafting, cyber portal process, evidence preservation and police complaint coordination.',
    keywords: [
      'cyber fraud complaint guidance',
      'online fraud legal support',
      'cyber crime complaint Delhi',
      'digital fraud legal guidance',
      'online scam legal help',
    ],
    hero: {
      eyebrow: 'Cyber Complaint',
      heading: 'Cyber Complaint & Online Fraud Guidance',
      intro:
        'Structured guidance to document, escalate, and follow up on cyber fraud incidents. Recovery of money is never guaranteed — it depends on multiple agencies and case facts.',
    },
    forWhom: [
      'Individuals affected by online fraud, phishing, or impersonation',
      'Small businesses facing cyber incidents',
      'Victims of UPI / payment-related fraud',
    ],
    situations: [
      'UPI / online payment fraud',
      'Phishing, OTP, KYC, or refund scams',
      'Social media / impersonation incidents',
      'Online shopping or job-offer scams',
      'Data theft or unauthorised account access',
    ],
    howWeHelp: [
      'Step-by-step incident documentation',
      'Cyber-portal complaint guidance',
      'Police complaint coordination',
      'Evidence preservation guidance',
    ],
    documents: [
      'Transaction screenshots and bank statements',
      'Communication with the fraudster (calls / chats / emails)',
      'KYC documents',
      'Any prior complaints already filed',
    ],
    process: [
      'Consultation',
      'Incident documentation',
      'Cyber-portal / police complaint guidance',
      'Follow-up advisory',
      'Coordination with banking and platform processes',
    ],
    legalNote:
      'Recovery of funds in cyber matters is not guaranteed and depends on bank policies, the speed of action, the receiving account status, and competent authority decisions. ' +
      note,
    faqs: [
      {
        q: 'Can my money be recovered through a cyber complaint?',
        a: 'Recovery depends on how quickly the matter is reported, the status of the receiving account, and decisions by the bank and the authorities. No recovery is guaranteed.',
      },
      {
        q: 'Where do I file a cyber complaint?',
        a: 'India has a national cyber crime reporting portal and local cyber cells. We guide on the appropriate route based on the incident.',
      },
    ],
  },
  {
    slug: 'arbitration-mediation',
    path: '/arbitration-mediation',
    title: 'Arbitration & Mediation Support',
    shortTitle: 'Arbitration & Mediation',
    excerpt:
      'Contract dispute arbitration, business mediation and structured settlement discussions with disciplined documentation.',
    icon: 'handshake',
    category: 'practice',
    caseTypeValue: 'Arbitration / Mediation',
    whatsappCaseLabel: 'Arbitration or Mediation',
    metaTitle:
      'Arbitration & Mediation Support Delhi | Commercial Dispute Resolution | Athena Legal Solution LLP',
    metaDescription:
      'Arbitration and mediation legal support — contract dispute arbitration, business mediation, settlement discussions and documentation by Athena Legal Solution LLP.',
    keywords: [
      'arbitration legal support',
      'mediation legal support',
      'business dispute mediation',
      'commercial arbitration guidance',
      'alternate dispute resolution',
    ],
    hero: {
      eyebrow: 'ADR',
      heading: 'Arbitration & Mediation Legal Support',
      intro:
        'Where litigation isn\'t the right first step, structured arbitration or mediation can offer a faster, focused path. We support both routes with discipline.',
    },
    forWhom: [
      'Businesses with contracts containing arbitration clauses',
      'Parties exploring mediation as a settlement route',
      'Counterparties already named in arbitration / mediation proceedings',
    ],
    situations: [
      'Contractual dispute under arbitration clause',
      'Business / vendor / partnership mediation',
      'Commercial settlement discussions',
      'Notice of invocation and reply',
    ],
    howWeHelp: [
      'Review of dispute and contract documents',
      'Strategy note on arbitration vs mediation routes',
      'Drafting support for invocation, statement of claim, and replies',
      'Settlement and closure documentation review',
    ],
    documents: [
      'Underlying contract and amendments',
      'Correspondence, invoices, and proof of breach',
      'Earlier notices and minutes of any meetings',
    ],
    process: [
      'Consultation',
      'Document review',
      'Strategy note',
      'Invocation / reply / claim drafting',
      'Hearing coordination',
      'Settlement / award documentation',
    ],
    legalNote: note,
    faqs: [
      {
        q: 'Is arbitration always faster than court?',
        a: 'Often, but not always. It depends on the arbitral procedure agreed, the parties\' conduct, and the complexity of the dispute.',
      },
      {
        q: 'Is mediation legally binding?',
        a: 'A mediated settlement, once formally signed and where statutorily backed, can be enforceable. The specifics depend on the framework used.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 5 LOAN & DEBT SUPPORT SERVICES
  // ---------------------------------------------------------------------------

  {
    slug: 'loan-settlement',
    path: '/loan-settlement',
    title: 'Loan Settlement Support — Personal & Business Loans',
    shortTitle: 'Loan Settlement',
    excerpt:
      'Practical advisory for borrowers facing overdue EMIs, lender pressure, and one-time settlement discussions across personal and business loans.',
    icon: 'shield',
    category: 'loan-debt',
    caseTypeValue: 'Loan Settlement',
    whatsappCaseLabel: 'Loan Settlement',
    metaTitle:
      'Loan Settlement Support in India | Personal & Business Loan Advisory | Athena Legal Solution LLP',
    metaDescription:
      'Loan settlement support in Delhi NCR and pan-India — personal and business loan advisory, overdue EMIs, lender communication, and settlement documentation.',
    keywords: [
      'loan settlement services',
      'personal loan settlement',
      'loan settlement company in India',
      'debt settlement legal support',
      'bank loan settlement guidance',
    ],
    hero: {
      eyebrow: 'Loan Settlement',
      heading: 'Loan Settlement Advisory You Can Rely On',
      intro:
        'Structured legal and financial advisory for individuals and businesses dealing with overdue EMIs, lender pressure, and one-time settlement discussions. Outcomes depend on lender policy and case review.',
    },
    forWhom: [
      'Salaried borrowers under EMI stress',
      'Self-employed / MSME borrowers facing lender pressure',
      'Borrowers with multiple loan exposures across banks and NBFCs',
    ],
    situations: [
      'Overdue EMIs and prolonged repayment stress',
      'One-time settlement (OTS) discussions',
      'Lender communication and documentation issues',
      'Pre-legal and legal notice situations',
    ],
    howWeHelp: [
      'Confidential consultation and document review',
      'Position paper framing the hardship clearly',
      'Communication support with the lender',
      'Settlement letter and closure documentation review',
    ],
    documents: [
      'Loan agreement and sanction letter',
      'Repayment schedule and recent statements',
      'Any communication, demand letters, or legal notices received',
      'Hardship-supporting documents (job loss, medical, business loss)',
    ],
    process: [
      'Confidential consultation',
      'Case and document review',
      'Strategy planning',
      'Communication and negotiation support',
      'Settlement documentation review',
      'Closure guidance',
    ],
    legalNote: note,
    faqs: [
      {
        q: 'Do you guarantee a specific settlement percentage?',
        a: 'No. Athena Legal Solution LLP does not promise any specific percentage or guaranteed outcome. Settlement terms depend on lender approval.',
      },
      {
        q: 'Will loan settlement affect my credit score?',
        a: 'A settled loan is typically reported as "Settled" rather than "Closed" with credit bureaus, which can affect future credit decisions.',
      },
    ],
  },
  {
    slug: 'credit-card-settlement',
    path: '/credit-card-settlement',
    title: 'Credit Card Settlement Support',
    shortTitle: 'Credit Card Settlement',
    excerpt:
      'Advisory for overdue credit card dues, mounting interest, collection calls, and structured settlement discussions with issuing banks.',
    icon: 'card',
    category: 'loan-debt',
    caseTypeValue: 'Credit Card Settlement',
    whatsappCaseLabel: 'Credit Card Settlement',
    metaTitle:
      'Credit Card Settlement Support in India | Athena Legal Solution LLP',
    metaDescription:
      'Credit card settlement advisory in Delhi NCR — overdue dues, bank communication, hardship documentation, and structured settlement discussions.',
    keywords: [
      'credit card settlement',
      'credit card dues settlement',
      'credit card legal notice',
      'credit card default legal guidance',
      'credit card outstanding settlement',
    ],
    hero: {
      eyebrow: 'Credit Card Settlement',
      heading: 'Credit Card Dues & Settlement Advisory',
      intro:
        'Compounding interest, late fees, and aggressive collection calls can make credit card dues feel unmanageable. We help cardholders understand their position and explore structured options.',
    },
    forWhom: [
      'Cardholders with mounting interest and finance charges',
      'Borrowers with multiple cards stressing monthly cash flow',
      'Cardholders facing legal-notice or pre-legal collection pressure',
    ],
    situations: [
      'Compounding interest and late fees',
      'Multiple cards with overlapping due dates',
      'Repeated collection calls and pressure tactics',
      'Confusion about settlement vs. write-off vs. closure',
    ],
    howWeHelp: [
      'Confidential review of the card account and statements',
      'Hardship documentation guidance',
      'Bank communication strategy',
      'Settlement letter and closure documentation review',
    ],
    documents: [
      'Card statements for the last 6–12 months',
      'Outstanding summary and finance charge breakdown',
      'Any settlement letters already received',
      'Hardship documentation',
    ],
    process: [
      'Consultation',
      'Document review',
      'Strategy and bank communication',
      'Settlement letter review',
      'Closure documentation guidance',
    ],
    legalNote: note,
    faqs: [
      {
        q: 'Can credit card dues be reduced?',
        a: 'A reduction may be possible through negotiation, subject to the bank\'s policy, the cardholder\'s hardship profile, and documentation. There is no guaranteed reduction.',
      },
      {
        q: 'Will my card be blocked after settlement?',
        a: 'Most banks close or block the card after settlement and may restrict future credit eligibility. We explain these consequences upfront.',
      },
    ],
  },
  {
    slug: 'recovery-agent-harassment',
    path: '/recovery-agent-harassment',
    title: 'Recovery Agent Harassment Support',
    shortTitle: 'Recovery Harassment',
    excerpt:
      'Borrower rights guidance for inappropriate recovery calls, family contact, abusive collection behaviour, and structured escalation.',
    icon: 'phone',
    category: 'loan-debt',
    caseTypeValue: 'Recovery Agent Harassment',
    whatsappCaseLabel: 'Recovery Agent Harassment',
    metaTitle:
      'Recovery Agent Harassment Help | Borrower Rights Support | Athena Legal Solution LLP',
    metaDescription:
      'Legal advisory for recovery agent harassment — documenting incidents, borrower rights guidance, and structured escalation in Delhi NCR and pan-India.',
    keywords: [
      'recovery agent harassment',
      'bank recovery harassment complaint',
      'loan recovery harassment legal help',
      'borrower rights India',
      'recovery agent harassment Delhi',
    ],
    hero: {
      eyebrow: 'Recovery Harassment',
      heading: 'Borrower Rights & Recovery Harassment Support',
      intro:
        'Recovery and collection practices are governed by clear conduct guidelines. When those lines are crossed, borrowers have legitimate channels to document, escalate, and respond.',
    },
    forWhom: [
      'Borrowers facing inappropriate or repeated recovery calls',
      'Family members being contacted unjustifiably',
      'Borrowers facing threats, public shaming or visits without proper conduct',
    ],
    situations: [
      'Calls outside permitted hours',
      'Repeated contact with family, neighbours, or employers',
      'Abusive, threatening, or intimidating language',
      'Public shaming, defamatory messages, or social media pressure',
      'Visits without prior intimation or proper identification',
    ],
    howWeHelp: [
      'Documentation and evidence organisation guidance',
      'Drafting of structured written communication',
      'Lender grievance redressal coordination',
      'Guidance on appropriate regulatory and legal escalation',
    ],
    documents: [
      'Call logs with date, time, caller details',
      'Screenshots of SMS / WhatsApp / email communication',
      'Names / IDs of any visiting agents',
      'Written summary of interactions',
    ],
    process: [
      'Confidential consultation',
      'Evidence and documentation organisation',
      'Drafting of written communication',
      'Grievance redressal coordination',
      'Escalation guidance',
    ],
    legalNote: note,
    faqs: [
      {
        q: 'Can recovery agents call my family members?',
        a: 'Recovery agents are generally expected to contact the borrower or guarantor directly. Repeated calls to uninvolved family members may not be appropriate.',
      },
      {
        q: 'Can I record a recovery call?',
        a: 'Borrowers commonly preserve recordings as evidence. Legal admissibility and use depend on jurisdiction and facts.',
      },
    ],
  },
  {
    slug: 'debt-resolution',
    path: '/debt-resolution',
    title: 'Debt Resolution Advisory',
    shortTitle: 'Debt Resolution',
    excerpt:
      'Consolidated advisory for individuals and businesses with multiple loans, cards, and lender obligations across the same household or balance sheet.',
    icon: 'bank',
    category: 'loan-debt',
    caseTypeValue: 'Debt Resolution',
    whatsappCaseLabel: 'Debt Resolution Advisory',
    metaTitle:
      'Debt Resolution Advisory in India | Multi-Lender Financial Legal Support | Athena Legal Solution LLP',
    metaDescription:
      'Consolidated debt resolution advisory — multiple loans, credit card dues, lender pressure, and financial dispute legal consultation across India.',
    keywords: [
      'debt resolution services',
      'financial dispute legal support',
      'loan default legal advisory',
      'bank dispute legal consultation',
      'multi lender debt advisory',
    ],
    hero: {
      eyebrow: 'Debt Resolution',
      heading: 'A Consolidated View of Your Debt Position',
      intro:
        'When multiple loans, cards, and lenders are in play, the response cannot be lender-by-lender. We help clients map the full picture and plan a structured resolution path.',
    },
    forWhom: [
      'Borrowers with multiple loans across banks and NBFCs',
      'Households with mixed account status — some current, some overdue',
      'Businesses with multiple lender exposure under stress',
    ],
    situations: [
      'Multiple loans across banks and NBFCs',
      'A combination of secured and unsecured exposure',
      'Mixed status — some accounts current, some overdue',
      'Need for prioritised, sequenced action across lenders',
    ],
    howWeHelp: [
      'Structured discovery of accounts, balances, EMIs, and status',
      'Mapped position paper with sequenced action plan',
      'Lender communication support',
      'Closure documentation review across lenders',
    ],
    documents: [
      'Loan / card account summaries and statements',
      'Recent EMI / payment records',
      'Any notices or legal communication received',
      'Income / hardship documents',
    ],
    process: [
      'Consultation',
      'Discovery and mapping',
      'Strategy and sequencing',
      'Lender communication support',
      'Closure documentation review',
    ],
    legalNote: note,
    faqs: [
      {
        q: 'Do you take over EMI payments?',
        a: 'No. Athena Legal Solution LLP is an advisory firm. We do not collect or pay EMIs on behalf of clients.',
      },
      {
        q: 'Can you coordinate across all my lenders?',
        a: 'We provide consolidated advisory across multiple lenders, while clearly distinguishing what we advise on versus what the client and lender execute.',
      },
    ],
  },
  {
    slug: 'legal-notice-loan-default',
    path: '/legal-notice-loan-default',
    title: 'Legal Notice Assistance for Loan Default',
    shortTitle: 'Loan Default Notice',
    excerpt:
      'Advisory and drafting support for Section 138, SARFAESI, arbitration, and demand notices arising out of loan and card defaults.',
    icon: 'document',
    category: 'loan-debt',
    caseTypeValue: 'Legal Notice — Loan Default',
    whatsappCaseLabel: 'Legal Notice — Loan Default',
    metaTitle:
      'Legal Notice for Loan Default | Borrower Side Advisory | Athena Legal Solution LLP',
    metaDescription:
      'Legal advisory and reply drafting for loan-default related notices — Section 138, SARFAESI, arbitration, and demand notices for borrowers.',
    keywords: [
      'legal notice for loan default',
      'SARFAESI notice borrower legal help',
      'cheque bounce loan default lawyer',
      'arbitration notice loan',
      'demand notice from bank',
    ],
    hero: {
      eyebrow: 'Loan Default Notice',
      heading: 'Received a Notice? Don\'t Ignore It — Review It.',
      intro:
        'A legal notice is a serious communication. Ignoring it almost always makes the position worse. We help clients read the notice carefully, understand what is being claimed, and plan an informed response.',
    },
    forWhom: [
      'Borrowers who have received a Section 138 NI Act notice',
      'Borrowers under SARFAESI notice or symbolic possession proceedings',
      'Borrowers facing arbitration notices from NBFCs',
      'Cardholders facing demand notices',
    ],
    situations: [
      'Section 138 NI Act notice on a security cheque',
      'SARFAESI 13(2) / 13(4) notice on a secured loan',
      'Arbitration invocation by an NBFC',
      'General demand / pre-legal notice from a lender',
    ],
    howWeHelp: [
      'Notice review and timeline check',
      'Position paper on the borrower\'s side',
      'Reply drafting and dispatch coordination',
      'Follow-up advisory on next steps',
    ],
    documents: [
      'Original notice and envelope / courier slip',
      'Loan / card agreement and statements',
      'Any earlier communication with the lender',
      'KYC documents',
    ],
    process: [
      'Consultation',
      'Notice and document review',
      'Reply / strategy drafting',
      'Dispatch coordination',
      'Follow-up advisory',
    ],
    legalNote: note,
    faqs: [
      {
        q: 'Should I reply to the notice myself?',
        a: 'A formal reply has legal consequences. We recommend that any reply be drafted with proper advisory review.',
      },
      {
        q: 'What if the deadline mentioned has already passed?',
        a: 'A missed deadline narrows the available options but does not eliminate them. The matter should still be reviewed promptly.',
      },
    ],
  },
];

export const practiceAreasMain = practiceAreas.filter((p) => p.category === 'practice');
export const loanDebtServices = practiceAreas.filter((p) => p.category === 'loan-debt');

export const getPractice = (slug: string): Practice | undefined =>
  practiceAreas.find((p) => p.slug === slug);

export const caseTypeOptions: string[] = [
  ...practiceAreasMain.map((p) => p.caseTypeValue),
  ...loanDebtServices.map((p) => p.caseTypeValue),
  'Other Legal Matter',
];
