import { Github, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type ArchNode = {
  title: string;
  detail: string;
};

type ProjectCardProps = {
  index: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  architecture: ArchNode[];
};

export function ProjectCard({ index, title, category, description, technologies, githubUrl, architecture }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.94, 1, 0.92]);

  return (
    <motion.article
      ref={ref}
      style={{ scale, top: `${76 + index * 24}px` }}
      className="sticky mb-12 overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:rounded-[50px] sm:p-8 md:rounded-[60px] md:p-10"
    >
      <div className="flex h-full min-h-0 flex-col gap-8">
        <div className="grid shrink-0 gap-4 md:grid-cols-[0.2fr_0.24fr_1fr_auto] md:items-start">
          <span className="text-[clamp(3rem,8vw,7rem)] font-black leading-none text-[#D7E2EA]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-[#D7E2EA]">Category</p>
            <p className="mt-2 text-sm font-light text-[#D7E2EA]/70">{category}</p>
          </div>
          <div>
            <h3 className="text-[clamp(2.4rem,5.8vw,5.25rem)] font-black uppercase leading-none tracking-[-0.05em] text-[#D7E2EA]">
              {title}
            </h3>
            <p className="mt-3 max-w-3xl text-sm font-light leading-relaxed text-[#D7E2EA]/70 md:text-base">
              {description}
            </p>
          </div>
          <a className="project-link whitespace-nowrap" href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub Repository`}>
            <Github size={17} />
            GitHub Repository
          </a>
        </div>

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

        <div className="border-t border-white/5 pt-10 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecture.map((node, nodeIndex) => {
              const lastIndex = architecture.length - 1;
              const isLast = nodeIndex === lastIndex;

              const middleStart = 2;
              const middleEnd = lastIndex - 1;
              const middleCount = middleEnd - middleStart;
              const stage2End = middleStart + Math.ceil(middleCount / 2) - 1;

              let border: string;
              let bg: string;
              let shadow: string;
              let textColor: string;

              if (isLast) {
                border = 'border-emerald-400/25';
                bg = 'bg-emerald-400/[0.04]';
                shadow = 'shadow-[0_0_24px_rgba(52,211,153,0.1)]';
                textColor = 'text-emerald-300';
              } else if (nodeIndex <= 1) {
                border = 'border-white/10';
                bg = 'bg-white/[0.03]';
                shadow = '';
                textColor = 'text-[#D7E2EA]';
              } else if (nodeIndex <= stage2End) {
                border = 'border-cyan-500/20';
                bg = 'bg-cyan-500/[0.02]';
                shadow = '';
                textColor = 'text-[#D7E2EA]';
              } else {
                border = 'border-orange-500/20';
                bg = 'bg-orange-500/[0.02]';
                shadow = '';
                textColor = 'text-[#D7E2EA]';
              }

              return (
                <div key={node.title} className="flex items-center gap-3">
                  {nodeIndex > 0 && (
                    <ArrowRight size={20} className="hidden sm:block shrink-0 text-white/30" />
                  )}
                  <div
                    className={`flex-1 min-w-0 rounded-xl border ${border} ${bg} ${shadow} px-5 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:brightness-125`}
                  >
                    <p className={`text-sm font-bold uppercase tracking-wider ${textColor}`}>
                      {node.title}
                    </p>
                    <p className="mt-1.5 text-xs font-medium text-[#D7E2EA]/50">
                      {node.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
