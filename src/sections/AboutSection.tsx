import { Cpu, Network, Radar } from 'lucide-react';
import { AnimatedText } from '../components/AnimatedText';
import { SectionHeading } from '../components/SectionHeading';

const copy =
  'I am a Master\'s student in Data Science and Artificial Intelligence passionate about building intelligent systems. My interests include Machine Learning, Computer Vision, Robotics, and Full Stack AI applications. I enjoy transforming ideas into real-world solutions through data-driven approaches, modern software engineering, and AI-powered technologies. Currently, I am working on multi-robot systems, classification models, and intelligent web applications.';

export function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen items-center overflow-hidden px-5 py-28">
      <div className="absolute left-10 top-24 animate-drift text-blue/35">
        <Network size={70} />
      </div>
      <div className="absolute bottom-24 right-12 animate-drift text-fuchsia/35 [animation-delay:1.4s]">
        <Cpu size={82} />
      </div>
      <div className="absolute right-1/4 top-20 animate-drift text-cyan/30 [animation-delay:2.6s]">
        <Radar size={52} />
      </div>
      <div className="mx-auto max-w-6xl text-center">
        <SectionHeading title="ABOUT ME" />
        <AnimatedText className="mx-auto mt-12 max-w-5xl text-2xl font-light leading-[1.7] text-white/75 md:text-4xl" text={copy} />
      </div>
    </section>
  );
}
