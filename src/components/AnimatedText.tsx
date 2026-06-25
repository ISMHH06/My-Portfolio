import { motion } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  className?: string;
};

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        visible: { transition: { staggerChildren: 0.022 } },
        hidden: {},
      }}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={`${word}-${wordIndex}`}
          className="inline-block whitespace-nowrap"
          variants={{
            visible: { transition: { staggerChildren: 0.022 } },
            hidden: {},
          }}
        >
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={`${char}-${wordIndex}-${charIndex}`}
              className="inline-block will-change-transform"
              variants={{
                hidden: { opacity: 0.18, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.62, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 ? '\u00A0' : null}
        </motion.span>
      ))}
    </motion.p>
  );
}
