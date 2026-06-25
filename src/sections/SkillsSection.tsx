import { FadeIn } from '../components/FadeIn';
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
    <section id="skills" className="relative rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn className="mx-auto max-w-7xl text-center">
        <h2 className="section-steel-title text-[clamp(3rem,6.8vw,7rem)] font-black uppercase leading-[0.88] tracking-[-0.055em]">
          TECHNOLOGIES &<br className="hidden sm:block" /> SKILLS
        </h2>
      </FadeIn>
      <div className="mx-auto mt-16 grid max-w-7xl gap-7 md:grid-cols-3">
        {groups.map((group, index) => (
          <FadeIn key={group.title} delay={index * 0.12} className="relative min-h-72 overflow-hidden rounded-[40px] border-2 border-[#0C0C0C] bg-white p-8">
            <div className="absolute inset-y-0 right-0 w-28 bg-[#0C0C0C]/[0.04]" />
            <h3 className="relative mb-8 text-base font-black uppercase tracking-[0.3em] text-[#0C0C0C]">{group.title}</h3>
            <div className="relative flex flex-wrap gap-4">
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
