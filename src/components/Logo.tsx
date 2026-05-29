import Link from 'next/link';

type Props = {
  variant?: 'light' | 'dark'; // light = on dark bg (white text + gold), dark = on light bg (navy text + gold)
  size?: 'sm' | 'md' | 'lg';
  withWordmark?: boolean;
  href?: string | null;
  className?: string;
};

const sizeMap = {
  sm: { mark: 36, wordmark: 'text-sm', sub: 'text-[9px] tracking-[0.18em]' },
  md: { mark: 44, wordmark: 'text-base md:text-lg', sub: 'text-[10px] md:text-[11px] tracking-[0.18em]' },
  lg: { mark: 56, wordmark: 'text-lg md:text-xl', sub: 'text-[11px] md:text-[12px] tracking-[0.2em]' },
} as const;

export default function Logo({
  variant = 'light',
  size = 'md',
  withWordmark = true,
  href = '/',
  className = '',
}: Props) {
  const cfg = sizeMap[size];
  const textColor = variant === 'light' ? 'text-white' : 'text-navy';
  const subColor = 'text-gold';

  const inner = (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark size={cfg.mark} variant={variant} />
      {withWordmark && (
        <span className="flex flex-col leading-tight">
          <span className={`font-heading font-semibold ${textColor} ${cfg.wordmark}`}>
            Athena Legal Solution
          </span>
          <span className={`uppercase ${subColor} ${cfg.sub}`}>LLP</span>
        </span>
      )}
    </span>
  );

  if (!href) return inner;
  return (
    <Link href={href} aria-label="Athena Legal Solution LLP — Home" className="inline-flex items-center">
      {inner}
    </Link>
  );
}

export function LogoMark({
  size = 44,
  variant = 'light',
}: {
  size?: number;
  variant?: 'light' | 'dark';
}) {
  // On dark bg: navy interior + gold stroke + gold A
  // On light bg: navy interior + gold stroke + gold A (same — the mark itself is brand-consistent)
  const bg = '#061A2B';
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
        <linearGradient id="logo-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor={accentLight} />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="14" fill={bg} stroke="url(#logo-gold)" strokeWidth="2.5" />
      {/* Shield motif */}
      <path
        d="M32 12 L48 18 L48 32 C48 41 41 47 32 50 C23 47 16 41 16 32 L16 18 Z"
        fill="none"
        stroke="url(#logo-gold)"
        strokeWidth="1.5"
        opacity="0.55"
      />
      {/* A monogram */}
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fontFamily="Georgia, 'Playfair Display', serif"
        fontWeight="700"
        fontSize="30"
        fill="url(#logo-gold)"
      >
        A
      </text>
      {/* Subtle base bar */}
      <rect x="22" y="54" width="20" height="2" rx="1" fill={accent} opacity="0.7" />
      {/* Keep variant visually unique even if rendered on light bg by hinting opacity */}
      {variant === 'dark' && <rect width="64" height="64" fill="transparent" />}
    </svg>
  );
}
