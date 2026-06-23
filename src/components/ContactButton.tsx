import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type ContactButtonProps = {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'ghost';
};

export function ContactButton({ children, href, variant = 'primary' }: ContactButtonProps) {
  const base =
    'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300';
  const styles =
    variant === 'primary'
      ? 'bg-mist text-ink hover:bg-white hover:shadow-glow'
      : 'border border-white/15 bg-white/[0.04] text-mist hover:border-cyan/50 hover:bg-white/[0.08]';

  return (
    <a href={href} className={`${base} ${styles}`}>
      <span>{children}</span>
      <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
