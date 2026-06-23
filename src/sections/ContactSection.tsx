import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { ContactButton } from '../components/ContactButton';
import { Particles } from '../components/Particles';

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-28 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.26),transparent_36%),radial-gradient(circle_at_40%_80%,rgba(168,85,247,0.20),transparent_42%)]" />
      <Particles />
      <div className="relative z-10 mx-auto max-w-5xl">
        <h2 className="hero-heading text-5xl font-black uppercase leading-none md:text-8xl">LET'S BUILD SOMETHING INTELLIGENT</h2>
        <p className="mx-auto mt-7 max-w-2xl text-xl font-light leading-9 text-white/72">
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
