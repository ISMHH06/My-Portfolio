import { motion } from 'framer-motion';
import { AboutSection } from './sections/AboutSection';
import AcademicPipeline from './sections/AcademicPipeline';
import { ContactSection } from './sections/ContactSection';
import { ExpertiseSection } from './sections/ExpertiseSection';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';

export default function App() {
  return (
    <motion.main
      className="min-h-screen overflow-x-clip bg-ink text-mist"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <AcademicPipeline />
      <SkillsSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
    </motion.main>
  );
}
