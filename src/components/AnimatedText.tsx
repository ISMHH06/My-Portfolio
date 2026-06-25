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
              className="inline-block"
              variants={{
                hidden: { opacity: 0.12, y: 16, filter: 'blur(6px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              transition={{ duration: 0.78, ease: 'easeOut' }}
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
