import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import fireScoutArchitecture from '../assets/FireScout/Fire_Scout_Architecture.png';
import fireScoutPreview from '../assets/FireScout/Hover_Image.jpeg';
import isodataArchitecture from '../assets/ISODATA/ISODATA_Architecture.png';
import isodataPreview from '../assets/ISODATA/ISODATA_Hover.png';
import smartFeedArchitecture from '../assets/SmartFeed/Smart_Feed_Architecture.png';
import smartFeedPreview from '../assets/SmartFeed/Smart_Feed_Hover.png';

const projects = [
  {
    title: 'Fire-Scout',
    category: 'ROS2 Robotics',
    description:
      'Multi-robot fire detection and exploration system built with ROS2, SLAM, sensor fusion, autonomous navigation, and collaborative robotics.',
    technologies: ['ROS2', 'Gazebo', 'SLAM', 'Navigation2', 'RViz', 'OpenCV', 'Python', 'C++', 'Sensor Fusion', 'Multi-Robot Systems'],
    architectureImage: fireScoutArchitecture,
    previewImage: fireScoutPreview,
  },
  {
    title: 'ISODATA Classification App',
    category: 'Machine Learning',
    description:
      'Interactive web platform for unsupervised classification using PCA, ISODATA clustering, FastAPI, and modern visualizations.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'PCA', 'ISODATA', 'FastAPI', 'Matplotlib', 'Plotly', 'Machine Learning'],
    architectureImage: isodataArchitecture,
    previewImage: isodataPreview,
  },
  {
    title: 'Smart Feed',
    category: 'Artificial Intelligence',
    description:
      'Hybrid recommendation system combining personalization, intelligent ranking, content analysis, and AI-driven recommendations.',
    technologies: ['Python', 'FastAPI', 'SBERT', 'DistilBERT', 'CLIP', 'VideoMAE', 'FAISS', 'ALS', 'Firebase', 'Recommendation Systems'],
    architectureImage: smartFeedArchitecture,
    previewImage: smartFeedPreview,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32">
      <SectionHeading title="PROJECT" />
      <div className="mx-auto mt-16 max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}
