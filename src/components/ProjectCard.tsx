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
      style={{ scale, top: `${76 + index * 24}px` }}
      className="sticky mb-12 h-[calc(100vh-132px)] max-h-[780px] min-h-[620px] overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
    >
      <div className="flex h-full min-h-0 flex-col gap-5">
        <div className="grid shrink-0 gap-4 md:grid-cols-[0.2fr_0.24fr_1fr_auto] md:items-start">
          <span className="text-[clamp(3rem,8vw,7rem)] font-black leading-none text-[#D7E2EA]">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-[#D7E2EA]">Category</p>
            <p className="mt-2 text-sm font-light text-[#D7E2EA]/70">{category}</p>
          </div>
          <div>
            <h3 className="text-[clamp(2.4rem,5.8vw,5.25rem)] font-black uppercase leading-none tracking-[-0.05em] text-[#D7E2EA]">{title}</h3>
            <p className="mt-3 max-w-3xl text-sm font-light leading-relaxed text-[#D7E2EA]/70 md:text-base">{description}</p>
          </div>
          <a className="project-link whitespace-nowrap" href="#contact">
            <MonitorUp size={17} />
            Live Project
          </a>
        </div>
        <div className="grid min-h-0 flex-1 gap-3 md:grid-cols-[0.4fr_0.6fr]">
          <div className="grid min-h-0 grid-rows-[0.42fr_0.58fr] gap-3">
            <div className="project-visual min-h-0">
              <span>{technologies[0]}</span>
            </div>
            <div className="project-visual min-h-0">
              <span>{technologies[1]}</span>
            </div>
          </div>
          <div className="project-visual min-h-0">
            <span>{technologies.slice(2).join(' / ')}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
