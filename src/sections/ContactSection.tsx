import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { ContactButton } from '../components/ContactButton';

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0C0C0C] px-5 py-28 text-center">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <h2 className="hero-heading text-6xl font-black uppercase leading-none tracking-tight md:text-8xl lg:text-9xl">LET'S BUILD SOMETHING INTELLIGENT</h2>
        <p className="mx-auto mt-7 max-w-3xl text-xl font-medium leading-9 text-slate-300/86">
          Seeking opportunities in Artificial Intelligence, Machine Learning, and Data Science.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ContactButton href="#" variant="primary">
            <Download size={16} />
            Download CV
          </ContactButton>
          <ContactButton href="https://github.com/" variant="ghost">
            <Github size={16} />
            GitHub
          </ContactButton>
          <ContactButton href="https://linkedin.com/" variant="ghost">
            <Linkedin size={16} />
            LinkedIn
          </ContactButton>
          <ContactButton href="mailto:ismail@example.com" variant="ghost">
            <Mail size={16} />
            Email
          </ContactButton>
        </div>
      </div>
    </section>
  );
}
