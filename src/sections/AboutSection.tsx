import { Box, Cpu, Network, Orbit } from 'lucide-react';
import { AnimatedText } from '../components/AnimatedText';
import { SectionHeading } from '../components/SectionHeading';

const copy =
  'I am a Master\'s student in Data Science and Artificial Intelligence passionate about building intelligent systems. My interests include Machine Learning, Computer Vision, Robotics, and Full Stack AI applications. I enjoy transforming ideas into real-world solutions through data-driven approaches, modern software engineering, and AI-powered technologies. Currently, I am working on multi-robot systems, classification models, and intelligent web applications.';

export function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen items-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10">
      <div className="absolute left-[1%] top-[4%] animate-drift text-[#D7E2EA]/18 sm:left-[2%] md:left-[4%]">
        <Orbit size={170} />
      </div>
      <div className="absolute bottom-[8%] left-[3%] animate-drift text-[#D7E2EA]/14 [animation-delay:1.2s] sm:left-[6%] md:left-[10%]">
        <Network size={130} />
      </div>
      <div className="absolute right-[1%] top-[4%] animate-drift text-[#D7E2EA]/16 [animation-delay:0.8s] sm:right-[2%] md:right-[4%]">
        <Box size={170} />
      </div>
      <div className="absolute bottom-[8%] right-[3%] animate-drift text-[#D7E2EA]/16 [animation-delay:1.8s] sm:right-[6%] md:right-[10%]">
        <Cpu size={160} />
      </div>
      <div className="mx-auto max-w-6xl text-center">
        <SectionHeading title="ABOUT ME" />
        <AnimatedText className="mx-auto mt-10 max-w-[760px] text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]" text={copy} />
      </div>
    </section>
  );
}
