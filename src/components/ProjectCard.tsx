import { Github, MonitorUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type ProjectCardProps = {
  index: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  accent: string;
};

export function ProjectCard({ index, title, category, description, technologies, accent }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.94, 1, 0.92]);

  return (
    <motion.article
      ref={ref}
      style={{ scale, top: `${96 + index * 18}px` }}
      className="sticky mb-8 grid min-h-[520px] overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950/80 p-6 shadow-violet backdrop-blur-2xl md:grid-cols-[1.05fr_0.95fr] md:p-10"
    >
      <div className="relative z-10 flex flex-col justify-between">
        <div>
          <div className="mb-8 flex items-center gap-4">
            <span className="text-sm font-semibold text-cyan">PROJECT {String(index + 1).padStart(2, '0')}</span>
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/70">
              {category}
            </span>
          </div>
          <h3 className="max-w-xl text-4xl font-black leading-none text-white md:text-6xl">{title}</h3>
          <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-white/70">{description}</p>
        </div>
        <div>
          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-white/72">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="project-link" href="#contact">
              <Github size={17} />
              GitHub
            </a>
            <a className="project-link" href="#contact">
              <MonitorUp size={17} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
      <div className="relative mt-10 min-h-[260px] overflow-hidden rounded-3xl border border-white/10 bg-black/30 md:mt-0">
        <div className="absolute inset-0 opacity-80" style={{ background: accent }} />
        <div className="absolute inset-8 rounded-[2rem] border border-white/10 bg-black/30 backdrop-blur-xl" />
        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/[0.05] shadow-glow" />
        <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        <div className="absolute inset-y-10 left-1/2 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="h-16 rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur" />
          ))}
        </div>
      </div>
    </motion.article>
  );
}
