import { motion } from 'framer-motion';

type SkillBadgeProps = {
  label: string;
};

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -4 }}
      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      className="inline-flex rounded-full border border-[#0C0C0C]/30 bg-[#0C0C0C]/[0.04] px-4 py-2 text-xs font-black uppercase tracking-[-0.01em] text-[#0C0C0C] hover:bg-[#0C0C0C]/10"
    >
      {label}
    </motion.span>
  );
}
