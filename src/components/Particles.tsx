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
          className="absolute h-1 w-1 rounded-full bg-cyan/70 shadow-[0_0_14px_rgba(6,182,212,0.8)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [-18, 18, -18], opacity: [0.15, 0.85, 0.15], scale: [0.7, 1.4, 0.7] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
