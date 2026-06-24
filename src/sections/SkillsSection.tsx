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
    <section id="skills" className="relative rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <SectionHeading title="TECHNOLOGIES & SKILLS" dark />
      <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
        {groups.map((group, index) => (
          <FadeIn key={group.title} delay={index * 0.12} className="relative min-h-56 overflow-hidden rounded-[34px] border-2 border-[#0C0C0C] bg-white p-6">
            <div className="absolute inset-y-0 right-0 w-24 bg-[#0C0C0C]/[0.035]" />
            <h3 className="mb-6 text-sm font-black uppercase tracking-[0.28em] text-[#0C0C0C]">{group.title}</h3>
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
