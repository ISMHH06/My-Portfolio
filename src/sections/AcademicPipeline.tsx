import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

const milestones = [
  {
    year: '2022',
    period: '2021 – 2022',
    title: 'High School Diploma (Baccalaureate)',
    subtitle: 'Physical Sciences – French option',
    institution: 'Idriss I High School, Kenitra',
    side: 'right' as const,
  },
  {
    year: '2025',
    period: '2024 – 2025',
    title: "Bachelor's Degree",
    subtitle: 'Artificial Intelligence & Data Engineering',
    institution: 'Ibn Tofail University, Kenitra',
    side: 'left' as const,
  },
  {
    year: '2026',
    period: '2025 – 2026',
    title: "Master's 1",
    subtitle: 'Artificial Intelligence & Connected Objects',
    institution: 'Ibn Tofail University, Kenitra',
    side: 'right' as const,
  },
];

export default function AcademicPipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const cardOpacity = [
    useTransform(scrollYProgress, [0.08, 0.22], [0, 1]),
    useTransform(scrollYProgress, [0.35, 0.5], [0, 1]),
    useTransform(scrollYProgress, [0.62, 0.78], [0, 1]),
  ];

  const cardY = [
    useTransform(scrollYProgress, [0.08, 0.22], [30, 0]),
    useTransform(scrollYProgress, [0.35, 0.5], [30, 0]),
    useTransform(scrollYProgress, [0.62, 0.78], [30, 0]),
  ];

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <SectionHeading title="ACADEMIC PIPELINE" />

      <div className="relative mx-auto mt-16 max-w-4xl sm:mt-20 md:mt-28">
        <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-white/10 md:block" />
        <motion.div
          className="absolute left-1/2 top-0 hidden w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-400/60 to-emerald-400/60 md:block"
          style={{ height: lineHeight }}
        />

        <div className="absolute left-4 top-0 h-full w-0.5 bg-white/10 md:hidden" />
        <motion.div
          className="absolute left-4 top-0 w-0.5 bg-gradient-to-b from-cyan-400/60 to-emerald-400/60 md:hidden"
          style={{ height: lineHeight }}
        />

        <div className="flex flex-col gap-12 md:gap-16">
          {milestones.map((item, index) => {
            const isLeft = item.side === 'left';

            return (
              <div key={item.year} className="relative">
                <div className="hidden items-center md:flex">
                  {isLeft ? (
                    <>
                      <div className="flex-1">
                        <Card item={item} style={{ opacity: cardOpacity[index], y: cardY[index] }} />
                      </div>
                      <Dot />
                      <div className="flex flex-1 items-center">
                        <span className="whitespace-nowrap text-4xl font-black tracking-tight text-white sm:text-5xl">
                          {item.year}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-1 items-center justify-end">
                        <span className="whitespace-nowrap text-4xl font-black tracking-tight text-white sm:text-5xl">
                          {item.year}
                        </span>
                      </div>
                      <Dot />
                      <div className="flex-1">
                        <Card item={item} style={{ opacity: cardOpacity[index], y: cardY[index] }} />
                      </div>
                    </>
                  )}
                </div>

                <div className="flex items-start gap-4 md:hidden">
                  <div className="relative z-10 mt-1 flex shrink-0">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0C0C0C] ring-2 ring-white/40">
                      <div className="h-2 w-2 rounded-full bg-white/80" />
                    </div>
                  </div>
                  <Card item={item} style={{ opacity: cardOpacity[index], y: cardY[index] }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <div className="relative z-10 flex w-8 shrink-0 justify-center">
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0C0C0C] ring-2 ring-white/40">
        <div className="h-2 w-2 rounded-full bg-white/80" />
      </div>
    </div>
  );
}

function Card({ item, style }: { item: (typeof milestones)[number]; style?: Record<string, unknown> }) {
  return (
    <motion.div
      style={style}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div className="space-y-1">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400/70">
          {item.period}
        </p>
        <h3 className="text-lg font-bold leading-tight text-[#D7E2EA]">{item.title}</h3>
        <p className="text-sm font-medium text-[#D7E2EA]/70">{item.subtitle}</p>
        <div className="flex items-center gap-1.5 pt-1">
          <GraduationCap size={14} className="text-[#D7E2EA]/50" />
          <p className="text-xs font-medium text-[#D7E2EA]/50">{item.institution}</p>
        </div>
      </div>
    </motion.div>
  );
}
