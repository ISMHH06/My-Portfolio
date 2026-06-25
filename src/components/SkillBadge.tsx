import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';

type SkillBadgeProps = {
  label: string;
};

const skillColors: Record<string, { color: string; foreground: string }> = {
  Python: { color: '#3776AB', foreground: '#FFFFFF' },
  Jupyter: { color: '#F37626', foreground: '#FFFFFF' },
  'Scikit-Learn': { color: '#F7931E', foreground: '#0C0C0C' },
  TensorFlow: { color: '#FF6F00', foreground: '#FFFFFF' },
  PyTorch: { color: '#EE4C2C', foreground: '#FFFFFF' },
  OpenCV: { color: '#5C3EE8', foreground: '#FFFFFF' },
  OpenAI: { color: '#10A37F', foreground: '#FFFFFF' },
  HTML5: { color: '#E34F26', foreground: '#FFFFFF' },
  CSS3: { color: '#1572B6', foreground: '#FFFFFF' },
  JavaScript: { color: '#F7DF1E', foreground: '#0C0C0C' },
  'Tailwind CSS': { color: '#06B6D4', foreground: '#0C0C0C' },
  FastAPI: { color: '#009688', foreground: '#FFFFFF' },
  Docker: { color: '#2496ED', foreground: '#FFFFFF' },
  Git: { color: '#F05032', foreground: '#FFFFFF' },
  GitHub: { color: '#181717', foreground: '#FFFFFF' },
  Linux: { color: '#FCC624', foreground: '#0C0C0C' },
  ROS2: { color: '#22314E', foreground: '#FFFFFF' },
};

export function SkillBadge({ label }: SkillBadgeProps) {
  const skillColor = skillColors[label] ?? { color: '#0C0C0C', foreground: '#FFFFFF' };

  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -4 }}
      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      style={
        {
          '--skill-color': skillColor.color,
          '--skill-foreground': skillColor.foreground,
        } as CSSProperties
      }
      className="inline-flex rounded-full border border-[#0C0C0C]/35 bg-[#0C0C0C]/[0.045] px-5 py-2.5 text-sm font-black uppercase tracking-[-0.01em] text-[#0C0C0C] transition-colors duration-200 hover:border-[var(--skill-color)] hover:bg-[var(--skill-color)] hover:text-[var(--skill-foreground)] hover:shadow-[0_10px_24px_rgba(12,12,12,0.16)]"
    >
      {label}
    </motion.span>
  );
}
