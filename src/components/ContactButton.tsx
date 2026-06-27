import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type ContactButtonProps = {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'ghost';
  target?: string;
  rel?: string;
};

export function ContactButton({ children, href, variant = 'primary', target, rel }: ContactButtonProps) {
  const base =
    'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest outline outline-2 outline-offset-[-3px] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base';
  const styles =
    variant === 'primary'
      ? 'bg-[#D7E2EA] text-[#0C0C0C] outline-[#D7E2EA] hover:bg-white'
      : 'border-2 border-[#D7E2EA] bg-transparent text-[#D7E2EA] outline-transparent hover:bg-[#D7E2EA]/10';

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      className={`${base} ${styles}`}
    >
      <span>{children}</span>
      <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </motion.a>
  );
}
