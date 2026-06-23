import { FadeIn } from '../components/FadeIn';
import { SectionHeading } from '../components/SectionHeading';

const items = [
  ['Machine Learning', 'Designing and training machine learning models for classification, clustering, and prediction tasks.'],
  ['Computer Vision', 'Building vision systems using OpenCV, TensorFlow, PyTorch, and modern deep learning techniques.'],
  ['AI Web Applications', 'Developing intelligent applications using React, FastAPI, and AI-powered backends.'],
  ['Robotics & ROS2', 'Creating autonomous robotics solutions, multi-robot coordination systems, and intelligent exploration frameworks.'],
  ['Data Science', 'Data preprocessing, visualization, feature engineering, clustering, and analytical modeling.'],
];

export function ExpertiseSection() {
  return (
    <section className="rounded-t-[42px] bg-[#F4F7FB] px-5 py-28 text-zinc-950 md:rounded-t-[72px]">
      <SectionHeading title="EXPERTISE" dark />
      <div className="mx-auto mt-16 max-w-6xl">
        {items.map(([title, description], index) => (
          <FadeIn key={title} delay={index * 0.06} className="grid gap-5 border-t border-zinc-950/12 py-9 last:border-b md:grid-cols-[160px_0.9fr_1.3fr] md:items-center">
            <span className="text-6xl font-black text-zinc-950/15">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="text-3xl font-bold leading-tight">{title}</h3>
            <p className="text-lg font-light leading-8 text-zinc-700">{description}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
