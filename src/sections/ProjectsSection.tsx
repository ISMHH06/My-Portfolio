import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';

const projects = [
  {
    title: 'Smart Feed',
    category: 'Artificial Intelligence',
    description:
      'Hybrid recommendation system combining personalization, intelligent ranking, content analysis, and AI-driven recommendations.',
    technologies: ['Python', 'FastAPI', 'SBERT', 'DistilBERT', 'CLIP', 'VideoMAE', 'FAISS', 'ALS', 'Firebase'],
    githubUrl: 'https://github.com/ISMHH06/smart-feed',
    architecture: [
      { title: 'CONTENT SOURCES', detail: 'HuffPost • Reddit • MS-COCO' },
      { title: 'AI UNDERSTANDING', detail: 'SBERT • CLIP • VideoMAE' },
      { title: 'USER PROFILING', detail: 'Interaction Embeddings' },
      { title: 'HYBRID RANKING', detail: 'Collaborative ALS + FAISS' },
      { title: 'TOXICITY FILTER', detail: 'Detoxify Guardrails' },
      { title: 'PERSONALIZED FEED', detail: 'Top-N Recommendations' },
    ],
  },
  {
    title: 'Fire-Scout',
    category: 'ROS2 Robotics',
    description:
      'Multi-robot fire detection and exploration system built with ROS2, SLAM, sensor fusion, autonomous navigation, and collaborative robotics.',
    technologies: ['ROS2', 'Gazebo', 'SLAM', 'RViz', 'OpenCV', 'Python', 'C++', 'Sensor Fusion', 'Multi-Robot Systems'],
    githubUrl: 'https://github.com/ISMHH06/Fire-Scout',
    architecture: [
      { title: 'GAZEBO SIMULATION', detail: 'Villa World + Fire Entities' },
      { title: '3x TURTLEBOT3 ROBOTS', detail: 'Parallel SLAM Toolbox Nodes' },
      { title: 'MULTI-ROBOT MAP MERGING', detail: 'ORB Map Merging Node' },
      { title: 'AUCTION-BASED EXPLORATION', detail: 'Frontier & Task Allocation' },
      { title: 'FIRE DETECTION PIPELINE', detail: 'Hybrid Sensor + Vision' },
      { title: 'INCIDENT COORDINATION', detail: 'Closest Robot Assignment' },
      { title: 'FIRE SUPPRESSION', detail: 'Action Execution Node' },
    ],
  },
  {
    title: 'ISODATA Classification',
    category: 'Machine Learning',
    description:
      'Interactive web platform for unsupervised classification using PCA, ISODATA clustering, FastAPI, and modern visualizations.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'ISODATA', 'FastAPI', 'Matplotlib', 'Plotly'],
    githubUrl: 'https://github.com/ISMHH06/ISODATA-Classification-App',
    architecture: [
      { title: 'CREDIT CARD DATASET', detail: 'Raw Transaction Logs' },
      { title: 'DATA CLEANING', detail: 'Imputation & Winsorization' },
      { title: 'FEATURE ENGINEERING', detail: 'Behavioral Ratios' },
      { title: 'STANDARD SCALING', detail: 'Z-score Normalization' },
      { title: 'PCA REDUCTION', detail: '11D Vector Space' },
      { title: 'ISODATA ALGORITHM', detail: 'Dynamic Split / Merge' },
      { title: 'CUSTOMER SEGMENTS', detail: 'Target Personas' },
    ],
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
