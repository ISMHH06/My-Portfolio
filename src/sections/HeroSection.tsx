import { motion } from 'framer-motion';
import { BrainCircuit, Send } from 'lucide-react';
import avatar from '../assets/ismail-avatar.png';
import { AISphere } from '../components/AISphere';
import { ContactButton } from '../components/ContactButton';
import { Magnet } from '../components/Magnet';
import { Particles } from '../components/Particles';

const nav = ['About', 'Skills', 'Projects', 'Contact'];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-blue/20 blur-3xl" />
      <div className="absolute -right-40 bottom-24 h-[30rem] w-[30rem] rounded-full bg-fuchsia/20 blur-3xl" />
      <Particles />
      <div className="absolute inset-0 opacity-80">
        <AISphere />
      </div>

      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-7 md:px-8">
        <a href="#" className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.24em] text-mist">
          <BrainCircuit className="text-cyan" size={22} />
          Ismail
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-semibold uppercase tracking-[0.28em] text-mist transition hover:opacity-70">
              {item}
            </a>
          ))}
        </div>
      </nav>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-10 px-5 pb-9 pt-3 md:grid-cols-[1fr_0.92fr] md:px-8">
        <div>
          <motion.p
            className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-cyan"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            AI & Data Science Student
          </motion.p>
          <motion.h1
            className="hero-heading max-w-4xl text-6xl font-black leading-[0.9] md:text-8xl lg:text-9xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Hi, I'm Ismail Hirich
          </motion.h1>
          <motion.p
            className="mt-7 max-w-2xl text-xl font-light leading-9 text-white/72 md:text-2xl"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
          >
            Building Intelligent Applications, Machine Learning Systems, Robotics Solutions, and AI-Powered Experiences.
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto flex aspect-square w-full max-w-[500px] items-center justify-center"
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute inset-7 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.25),rgba(147,51,234,0.20),transparent_68%)] blur-xl" />
          <Magnet className="relative z-10 rounded-full">
            <img
              src={avatar}
              alt="Stylized avatar of Ismail Hirich"
              className="aspect-square w-[min(78vw,420px)] rounded-full object-cover shadow-[0_35px_100px_rgba(0,0,0,0.65)] ring-1 ring-white/10"
            />
          </Magnet>
        </motion.div>
      </div>

      <div className="relative z-20 mx-auto -mt-24 flex max-w-7xl flex-col gap-5 px-5 pb-8 md:flex-row md:items-end md:justify-between md:px-8">
        <p className="max-w-xl text-sm font-light leading-7 text-white/62 md:text-base">
          Passionate about Artificial Intelligence, Machine Learning, Data Science, and Intelligent Robotics.
        </p>
        <ContactButton href="#contact">
          <Send size={16} />
          Contact
        </ContactButton>
      </div>
    </section>
  );
}
