type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: Props) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-[0.22em] ${
            light ? 'text-gold' : 'text-gold-dark'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 font-heading text-3xl leading-tight md:text-4xl ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? 'text-white/75' : 'text-navy/70'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
