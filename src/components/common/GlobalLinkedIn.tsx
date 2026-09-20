import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LinkedInIcon } from '../ui/LinkedInIcon';
import { profileData } from '../../data/profile';

/**
 * Global floating LinkedIn indicator available consistently across all routes.
 * Features the signature restrained Lottie-style float, high-contrast theming,
 * accessible label, and collision-free corner placement.
 */
export const GlobalLinkedIn: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <aside
      aria-label="Professional Connection"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 select-none pointer-events-auto"
    >
      <motion.a
        href={profileData.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit LinkedIn profile"
        animate={
          shouldReduceMotion
            ? { y: 0 }
            : {
                y: [0, -6, 0],
                transition: {
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }
        }
        whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.08 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
        className="group relative inline-flex items-center justify-center w-11 h-11 rounded-xl border border-accent/40 bg-surface/90 dark:bg-surface/90 backdrop-blur-md hover:bg-surface hover:border-accent text-accent shadow-[0_4px_16px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(94,103,230,0.35)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 cursor-pointer"
      >
        <LinkedInIcon className="w-5 h-5 text-accent transition-transform duration-200 group-hover:scale-110" />
      </motion.a>
    </aside>
  );
};
