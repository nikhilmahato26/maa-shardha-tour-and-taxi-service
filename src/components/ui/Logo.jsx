/**
 * Logo.jsx — Maa Shardha Tour and Taxi Service brand mark (MST monogram + wordmark).
 */
export default function Logo({ light = false, className = '' }) {
  const wordColor = light ? '#FFFFFF' : '#16213E';
  const subColor = light ? 'rgba(230,195,92,0.85)' : '#B5922A';

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* Monogram */}
      <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-deep shadow-soft">
        <span className="font-display text-[1.05rem] font-bold leading-none tracking-tight text-gold-soft">
          MST
        </span>
        <span className="pointer-events-none absolute -inset-px rounded-xl ring-1 ring-inset ring-gold/40" />
      </span>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1.25rem] font-semibold leading-none tracking-tight sm:text-[1.35rem]"
          style={{ color: wordColor }}
        >
          Maa Shardha <span className="text-gold-gradient">Tour & Taxi</span>
        </span>
        <span
          className="mt-1 text-[0.56rem] font-semibold uppercase tracking-[0.25em]"
          style={{ color: subColor }}
        >
          Service • Indore
        </span>
      </span>
    </span>
  );
}
