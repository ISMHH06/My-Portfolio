import { motion } from 'framer-motion';

type SkillBadgeProps = {
  label: string;
};

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -4 }}
      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      className="inline-flex rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm font-medium text-mist shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl hover:border-cyan/45 hover:shadow-glow"
    >
      {label}
    </motion.span>
  );
}
