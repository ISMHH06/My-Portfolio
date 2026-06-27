import { Download, Github, Linkedin } from 'lucide-react';
import { ContactButton } from '../components/ContactButton';
import cvPdf from '../assets/CV/CV_Ismail_Hirich.pdf';

export function ContactSection() {
  return (
    <section id="contact" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0C0C0C] px-4 text-center">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <h2 className="hero-heading text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl">LET'S BUILD SOMETHING INTELLIGENT</h2>
        <p className="mx-auto mt-7 max-w-3xl text-xl font-medium leading-9 text-slate-300/86">
          Seeking opportunities in Artificial Intelligence, Machine Learning, and Data Science.
        </p>
        <a
          href="mailto:ismailhirich19@gmail.com"
          className="mt-10 mb-14 block tracking-wide text-neutral-200 transition-colors duration-300 hover:text-white hover:underline underline-offset-4"
          style={{ fontSize: 'clamp(1rem, 4vw, 4.125rem)' }}
        >
          ismailhirich19@gmail.com
        </a>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <ContactButton href={cvPdf} variant="primary" target="_blank" rel="noopener noreferrer">
            <Download size={16} />
            Download CV
          </ContactButton>
          <ContactButton href="https://github.com/ISMHH06" variant="ghost" target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            GitHub
          </ContactButton>
          <ContactButton href="https://linkedin.com/in/ismail-hirich-3b83a4361" variant="ghost" target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} />
            LinkedIn
          </ContactButton>
        </div>
      </div>
    </section>
  );
}
