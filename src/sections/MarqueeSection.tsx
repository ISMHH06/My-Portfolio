const topics = [
  'Python',
  'Machine Learning',
  'TensorFlow',
  'PyTorch',
  'OpenCV',
  'Data Science',
  'Artificial Intelligence',
  'Computer Vision',
  'FastAPI',
  'Docker',
  'Linux',
  'GitHub',
  'ROS2',
  'Deep Learning',
  'Neural Networks',
  'Robotics',
  'Automation',
  'Generative AI',
  'OpenAI',
  'LLMs',
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...topics, ...topics];
  return (
    <div className="marquee-mask overflow-hidden py-3">
      <div className={`flex w-max gap-4 ${reverse ? 'animate-marqueeLeft' : 'animate-marqueeRight'}`}>
        {doubled.map((topic, index) => (
          <span key={`${topic}-${index}`} className="marquee-card">
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section className="relative bg-ink py-16">
      <Row />
      <Row reverse />
    </section>
  );
}
