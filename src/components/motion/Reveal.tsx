import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { fadeUp } from './motionVariants';

interface RevealProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  viewportAmount?: number | 'some' | 'all';
  once?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  variants = fadeUp,
  delay = 0,
  className = '',
  viewportAmount = 0.2,
  once = true
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
