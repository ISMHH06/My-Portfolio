import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type ContactButtonProps = {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'ghost';
};

export function ContactButton({ children, href, variant = 'primary' }: ContactButtonProps) {
  const base =
    'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest outline outline-2 outline-offset-[-3px] transition duration-300 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base';
  const styles =
    variant === 'primary'
      ? 'bg-[#D7E2EA] text-[#0C0C0C] outline-[#D7E2EA] hover:bg-white'
      : 'border-2 border-[#D7E2EA] bg-transparent text-[#D7E2EA] outline-transparent hover:bg-[#D7E2EA]/10';

  return (
    <a href={href} className={`${base} ${styles}`}>
      <span>{children}</span>
      <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
