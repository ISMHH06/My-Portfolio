import { motion } from 'framer-motion';

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  delay: (index % 9) * 0.35,
  duration: 7 + (index % 6),
}));

export function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-[#D7E2EA]/55 shadow-[0_0_12px_rgba(215,226,234,0.45)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [-18, 18, -18], opacity: [0.15, 0.85, 0.15], scale: [0.7, 1.4, 0.7] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
