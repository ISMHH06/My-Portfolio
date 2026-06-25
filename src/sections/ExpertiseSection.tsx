import { FadeIn } from '../components/FadeIn';
import { SectionHeading } from '../components/SectionHeading';

const items = [
  ['Data Science', 'Data preprocessing, visualization, feature engineering, clustering, and analytical modeling.'],
  ['Machine Learning', 'Designing and training machine learning models for classification, clustering, and prediction tasks.'],
  ['Computer Vision', 'Building vision systems using OpenCV, TensorFlow, PyTorch, and modern deep learning techniques.'],
  ['AI Web Applications', 'Developing intelligent applications using React, FastAPI, and AI-powered backends.'],
  ['Robotics & ROS2', 'Creating autonomous robotics solutions, multi-robot coordination systems, and intelligent exploration frameworks.'],
];

export function ExpertiseSection() {
  return (
    <section className="bg-white px-5 py-20 text-[#0C0C0C] sm:px-8 sm:py-24 md:px-10 md:py-32">
      <SectionHeading title="EXPERTISE" dark />
      <div className="mx-auto mt-16 max-w-5xl sm:mt-20 md:mt-28">
        {items.map(([title, description], index) => (
          <FadeIn key={title} delay={index * 0.1} className="grid gap-6 border-t border-[#0C0C0C]/15 py-8 last:border-b sm:py-10 md:grid-cols-[0.32fr_1fr] md:py-12">
            <span className="text-[clamp(3rem,10vw,8.75rem)] font-black leading-none text-[#0C0C0C]">{String(index + 1).padStart(2, '0')}</span>
            <div className="pt-1">
              <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight">{title}</h3>
              <p className="mt-3 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">{description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
