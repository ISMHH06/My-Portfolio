import { FadeIn } from '../components/FadeIn';
import { SectionHeading } from '../components/SectionHeading';
import { SkillBadge } from '../components/SkillBadge';

const groups = [
  {
    title: 'AI & DATA SCIENCE',
    skills: ['Python', 'Jupyter', 'Scikit-Learn', 'TensorFlow', 'PyTorch', 'OpenCV', 'OpenAI'],
  },
  {
    title: 'FULL STACK DEVELOPMENT',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'FastAPI'],
  },
  {
    title: 'TOOLS',
    skills: ['Docker', 'Git', 'GitHub', 'Linux', 'ROS2'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-5 py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <SectionHeading title="TECHNOLOGIES & SKILLS" />
      <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
        {groups.map((group, index) => (
          <FadeIn key={group.title} delay={index * 0.12} className="rounded-[28px] border border-white/10 bg-white/[0.045] p-6 shadow-violet backdrop-blur-2xl">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.28em] text-cyan">{group.title}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
