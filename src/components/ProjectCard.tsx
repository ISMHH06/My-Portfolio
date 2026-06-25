import { MonitorUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type ProjectCardProps = {
  index: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  architectureImage: string;
  previewImage: string;
};

export function ProjectCard({ index, title, category, description, technologies, architectureImage, previewImage }: ProjectCardProps) {
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
        <div className="flex min-h-0 flex-1 flex-col gap-4">
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2.5">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#D7E2EA]/30 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-[#D7E2EA]/80 transition duration-200 hover:border-[#D7E2EA]/70 hover:bg-[#D7E2EA]/10 hover:text-[#D7E2EA]"
              >
                {technology}
              </span>
            ))}
          </div>
          <div className="architecture-card group mx-auto h-[clamp(240px,34vh,360px)] w-full max-w-[1180px]">
            <img
              src={architectureImage}
              alt={`${title} architecture`}
              className="absolute inset-0 h-full w-full scale-100 object-contain opacity-100 transition duration-500 ease-out group-hover:scale-[1.025] group-hover:opacity-0"
              loading="lazy"
            />
            <img
              src={previewImage}
              alt={`${title} showcase`}
              className="absolute inset-0 h-full w-full scale-[1.025] object-contain opacity-0 transition duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
