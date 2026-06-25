import { motion } from 'framer-motion';
import { BrainCircuit, Send } from 'lucide-react';
import avatar from '../assets/file_00000000563871f4b645338602d60cff.png';
import { ContactButton } from '../components/ContactButton';
import { Magnet } from '../components/Magnet';

const nav = ['About', 'Skills', 'Projects', 'Contact'];

export function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-hidden bg-[#0C0C0C]">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_56%,rgba(255,255,255,0.08),transparent_26%)]" />

      <motion.nav
        className="relative z-20 flex items-center justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <a href="#" className="flex items-center gap-3 transition duration-200 hover:opacity-70">
          <BrainCircuit className="text-[#D7E2EA]" size={22} />
          Ismail
        </a>
        <div className="flex items-center gap-5 sm:gap-8 md:gap-10">
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[0.68rem] transition duration-200 hover:opacity-70 sm:text-sm md:text-base lg:text-[1.05rem]">
              {item}
            </a>
          ))}
        </div>
      </motion.nav>

      <motion.div
        className="relative z-10 mt-6 overflow-hidden sm:mt-4 md:-mt-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1 className="hero-heading w-full whitespace-nowrap px-2 text-[8.9vw] font-black uppercase leading-none tracking-tight sm:text-[9.5vw] md:text-[10.08vw] lg:text-[10.5vw]">
          Hi, I'm Ismail Hirich
        </h1>
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-[56%] z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:-bottom-28 sm:top-auto sm:w-[360px] sm:translate-y-0 md:-bottom-36 md:w-[440px] lg:-bottom-48 lg:w-[520px]"
        initial={{ opacity: 0, y: 30, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Magnet className="relative z-10">
          <img
            src={avatar}
            alt="Stylized avatar of Ismail Hirich"
            className="w-full object-contain drop-shadow-[0_42px_80px_rgba(0,0,0,0.78)]"
          />
        </Magnet>
      </motion.div>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <motion.p
          className="max-w-[180px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[260px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Passionate about Artificial Intelligence, Machine Learning, Data Science, and Intelligent Robotics.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
          <ContactButton href="#contact">
            <Send size={16} />
            Contact
          </ContactButton>
        </motion.div>
      </div>
    </section>
  );
}
