import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';

const projects = [
  {
    title: 'Fire-Scout',
    category: 'ROS2 Robotics',
    description:
      'Multi-robot fire detection and exploration system built with ROS2, SLAM, sensor fusion, autonomous navigation, and collaborative robotics.',
    technologies: ['ROS2', 'Gazebo', 'SLAM Toolbox', 'Python', 'OpenCV'],
    accent: 'radial-gradient(circle at 30% 20%, rgba(59,130,246,0.42), transparent 34%), radial-gradient(circle at 70% 70%, rgba(168,85,247,0.38), transparent 38%)',
  },
  {
    title: 'ISODATA Classification App',
    category: 'Machine Learning',
    description:
      'Interactive web platform for unsupervised classification using PCA, ISODATA clustering, FastAPI, and modern visualizations.',
    technologies: ['Python', 'Scikit-Learn', 'FastAPI', 'PCA', 'ISODATA'],
    accent: 'radial-gradient(circle at 70% 20%, rgba(6,182,212,0.42), transparent 34%), radial-gradient(circle at 30% 80%, rgba(139,92,246,0.4), transparent 42%)',
  },
  {
    title: 'Smart Feed',
    category: 'Artificial Intelligence',
    description:
      'Hybrid recommendation system combining personalization, intelligent ranking, content analysis, and AI-driven recommendations.',
    technologies: ['Python', 'Machine Learning', 'Recommendation Systems', 'FastAPI'],
    accent: 'radial-gradient(circle at 35% 35%, rgba(168,85,247,0.45), transparent 34%), radial-gradient(circle at 75% 60%, rgba(59,130,246,0.36), transparent 42%)',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-ink px-5 py-28">
      <SectionHeading title="PROJECTS" />
      <div className="mx-auto mt-16 max-w-6xl">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}
