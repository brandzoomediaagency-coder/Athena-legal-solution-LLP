import Image from 'next/image';
import Link from 'next/link';

type Props = {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string | null;
  className?: string;
};

const heightClass = {
  sm: 'h-10 md:h-11',
  md: 'h-12 md:h-14',
  lg: 'h-14 md:h-16',
} as const;

export default function Logo({
  size = 'md',
  href = '/',
  className = '',
}: Props) {
  const inner = (
    <Image
      src="/logo.svg"
      alt="Athena Legal Solution LLP"
      width={180}
      height={180}
      priority
      className={`${heightClass[size]} w-auto object-contain ${className}`}
    />
  );

  if (!href) return inner;
  return (
    <Link
      href={href}
      aria-label="Athena Legal Solution LLP — Home"
      className="inline-flex items-center"
    >
      {inner}
    </Link>
  );
}

/**
 * Brand-mark only (inline SVG fallback) — used in places where the heavy
 * SVG image isn't ideal (hero glass card, OG image, transactional pages).
 */
export function LogoMark({
  size = 44,
  variant = 'light',
}: {
  size?: number;
  variant?: 'light' | 'dark';
}) {
  const bg = variant === 'light' ? '#061A2B' : '#FFFFFF';
  const accent = '#C8A21A';
  const accentLight = '#E5C158';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      role="img"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient id="logo-gold-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor={accentLight} />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="14" fill={bg} stroke="url(#logo-gold-mark)" strokeWidth="2.5" />
      <path
        d="M32 12 L48 18 L48 32 C48 41 41 47 32 50 C23 47 16 41 16 32 L16 18 Z"
        fill="none"
        stroke="url(#logo-gold-mark)"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fontFamily="Georgia, 'Playfair Display', serif"
        fontWeight="700"
        fontSize="30"
        fill="url(#logo-gold-mark)"
      >
        A
      </text>
      <rect x="22" y="54" width="20" height="2" rx="1" fill={accent} opacity="0.7" />
    </svg>
  );
}
