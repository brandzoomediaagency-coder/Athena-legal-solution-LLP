import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
  ...props,
});

export const ShieldIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const CardIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
    <path d="M2.5 10h19M6 15h4" />
  </svg>
);

export const BuildingIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 21V7l8-4 8 4v14" />
    <path d="M9 21v-6h6v6M9 11h.01M15 11h.01M9 14h.01M15 14h.01" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

export const DocumentIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" />
    <path d="M14 3v6h6M8 13h8M8 17h5" />
  </svg>
);

export const ScaleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3v18M5 7h14" />
    <path d="M5 7l-3 7h6l-3-7zM19 7l-3 7h6l-3-7z" />
    <path d="M8 21h8" />
  </svg>
);

export const BankIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 10l9-6 9 6M5 10v9M19 10v9M9 10v9M15 10v9M3 21h18" />
  </svg>
);

export const HandshakeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 12l4-4 5 5 5-5 4 4-5 5-2-2-3 3-5-5-3 3-2-2 2-2z" />
  </svg>
);

export const LockIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 018 0v3" />
  </svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg {...base(p)} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.45 3.42 1.31 4.91L2 22l5.34-1.4a9.9 9.9 0 004.7 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0012.04 2zm0 18.13a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.17.83.85-3.09-.2-.32a8.22 8.22 0 0112.78-10.14 8.15 8.15 0 012.42 5.84c0 4.53-3.69 8.21-8.2 8.21zm4.5-6.15c-.25-.12-1.46-.72-1.69-.8-.22-.08-.38-.12-.55.12-.16.25-.63.8-.77.96-.14.17-.28.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.01-.39.11-.51.11-.11.25-.28.37-.42.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31s-.86.84-.86 2.05c0 1.21.88 2.38 1 2.55.12.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.46-.28z" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const ChevronRightIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const MapPinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12l4 4L19 6" />
  </svg>
);

export const GavelIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 4l6 6-3 3-6-6 3-3z" />
    <path d="M11 7l-7 7 3 3 7-7" />
    <path d="M3 22h12" />
  </svg>
);

export const FamilyIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="8" cy="7" r="3" />
    <circle cx="16" cy="7" r="3" />
    <path d="M2 21c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <path d="M14 17c.9-1.2 2.4-2 4-2 2.8 0 5 2.2 5 5" />
  </svg>
);

export const HomeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 11l9-7 9 7v9a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2v-9z" />
  </svg>
);

export const ShoppingBagIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 7h14l-1.4 12.1A2 2 0 0115.6 21H8.4a2 2 0 01-2-1.9L5 7z" />
    <path d="M9 7V5a3 3 0 016 0v2" />
  </svg>
);

export const BriefcaseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18" />
  </svg>
);

export const FileSignedIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" />
    <path d="M14 3v6h6" />
    <path d="M8 16c1.5-2 3-2 4 0s2.5 2 4 0" />
  </svg>
);

export const PenIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.5 7.5" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

export const WorkersIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9" cy="7" r="3" />
    <path d="M3 21c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <path d="M17 11a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M14 21c0-2.5 2-4.5 4.5-4.5S23 18.5 23 21" />
  </svg>
);

export const CyberIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="M8 10l2 2-2 2M14 10l-2 2 2 2" />
  </svg>
);

export const PracticeIconMap = {
  scale: ScaleIcon,
  gavel: GavelIcon,
  family: FamilyIcon,
  home: HomeIcon,
  document: DocumentIcon,
  shoppingBag: ShoppingBagIcon,
  briefcase: BriefcaseIcon,
  fileSigned: FileSignedIcon,
  pen: PenIcon,
  workers: WorkersIcon,
  cyber: CyberIcon,
  handshake: HandshakeIcon,
  shield: ShieldIcon,
  card: CardIcon,
  phone: PhoneIcon,
  building: BuildingIcon,
  bank: BankIcon,
} as const;

export const ServiceIconMap = {
  shield: ShieldIcon,
  card: CardIcon,
  building: BuildingIcon,
  phone: PhoneIcon,
  document: DocumentIcon,
  scale: ScaleIcon,
} as const;
