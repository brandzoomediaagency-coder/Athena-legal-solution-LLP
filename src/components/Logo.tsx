import Image from 'next/image';
import Link from 'next/link';

type Props = {
  variant?: 'light' | 'dark';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  withWordmark?: boolean;
  href?: string | null;
  className?: string;
};

const markSize = {
  xs: 'h-8 w-8',
  sm: 'h-10 w-10',
  md: 'h-12 w-12 md:h-14 md:w-14',
  lg: 'h-14 w-14 md:h-16 md:w-16',
} as const;

const wordmarkSize = {
  xs: { name: 'text-[13px]', sub: 'text-[9px] tracking-[0.18em]' },
  sm: { name: 'text-sm md:text-base', sub: 'text-[10px] tracking-[0.2em]' },
  md: { name: 'text-base md:text-lg', sub: 'text-[10px] md:text-[11px] tracking-[0.18em]' },
  lg: { name: 'text-lg md:text-xl', sub: 'text-[11px] md:text-[12px] tracking-[0.2em]' },
} as const;

export default function Logo({
  variant = 'light',
  size = 'md',
  withWordmark = true,
  href = '/',
  className = '',
}: Props) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy';
  const sub = wordmarkSize[size];

  const inner = (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className={`relative ${markSize[size]} shrink-0`}>
        <Image
          src="/logo.svg"
          alt="Athena Legal Solution LLP logo"
          fill
          sizes="(min-width: 768px) 56px, 44px"
          priority
          className="object-contain"
        />
      </span>
      {withWordmark && (
        <span className="flex flex-col leading-tight">
          <span className={`font-heading font-semibold ${textColor} ${sub.name}`}>
            Athena Legal Solution
          </span>
          <span className={`uppercase text-gold ${sub.sub}`}>LLP</span>
        </span>
      )}
    </span>
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
 * SVG image isn't ideal (hero glass card, transactional pages, OG image, etc.)
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
