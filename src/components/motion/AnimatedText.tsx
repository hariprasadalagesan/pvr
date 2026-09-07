import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { timing, easing } from './motionVariants';

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  as = 'h1',
  delay = 0
}) => {
  const shouldReduceMotion = useReducedMotion();
  const Tag = as;

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: timing.stagger, delayChildren: delay * i }
    })
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: timing.snappy ?? 0.35,
        ease: easing.industrial
      }
    },
    hidden: {
      opacity: 0,
      y: 12
    }
  };

  return (
    <Tag className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="inline-block"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className="inline-block mr-[0.25em] last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};
