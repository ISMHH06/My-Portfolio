import { MonitorUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type ProjectCardProps = {
  index: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
};

export function ProjectCard({ index, title, category, description, technologies }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.94, 1, 0.92]);

  return (
    <motion.article
      ref={ref}
      style={{ scale, top: `${96 + index * 28}px` }}
      className="sticky mb-12 min-h-[78vh] overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
    >
      <div className="flex h-full min-h-[calc(78vh-4rem)] flex-col gap-6">
        <div className="grid gap-4 md:grid-cols-[0.22fr_0.28fr_1fr_auto] md:items-start">
          <span className="text-[clamp(3rem,9vw,8rem)] font-black leading-none text-[#D7E2EA]">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-[#D7E2EA]">Category</p>
            <p className="mt-2 text-sm font-light text-[#D7E2EA]/70">{category}</p>
          </div>
          <div>
            <h3 className="text-[clamp(2.5rem,7vw,6rem)] font-black uppercase leading-none tracking-[-0.05em] text-[#D7E2EA]">{title}</h3>
            <p className="mt-4 max-w-3xl text-base font-light leading-relaxed text-[#D7E2EA]/70 md:text-lg">{description}</p>
          </div>
          <a className="project-link whitespace-nowrap" href="#contact">
            <MonitorUp size={17} />
            Live Project
          </a>
        </div>
        <div className="grid flex-1 gap-3 md:grid-cols-[0.4fr_0.6fr]">
          <div className="grid gap-3">
            <div className="project-visual project-visual-small">
              <span>{technologies[0]}</span>
            </div>
            <div className="project-visual project-visual-tall">
              <span>{technologies[1]}</span>
            </div>
          </div>
          <div className="project-visual min-h-[280px]">
            <span>{technologies.slice(2).join(' / ')}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
