import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Container } from '../../components/common/Container';
import { Button } from '../../components/ui/Button';
import { profileData } from '../../data/profile';

import { getSectionVariants, getItemVariants } from '../../components/motion/motionVariants';

/**
 * HeroSection Component
 *
 * Visual Hierarchy:
 * - NAME -> AUTOMATION ENGINEER -> STATEMENT -> METADATA -> CTAS
 * - Global Floating LinkedIn Signal Node handles cross-route social action
 */
export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Standardized industrial entrance animation variants
  const containerVariants: Variants = getSectionVariants(shouldReduceMotion);
  const itemVariants: Variants = getItemVariants(shouldReduceMotion);

  return (
    <section
      id="hero"
      aria-label="Engineering Profile Introduction"
      className="relative w-full min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-center overflow-hidden pt-24 xs:pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 bg-background"
    >
      {/* Subtle restrained background grid */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none select-none [mask-image:radial-gradient(ellipse_at_top,white_20%,transparent_70%)]"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10 w-full">
        {/* Main Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl lg:max-w-4xl flex flex-col items-start gap-4 xs:gap-5 sm:gap-6"
        >
          {/* 1. Personal Identification Typography */}
          <motion.div variants={itemVariants} className="w-full">
            <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-wide leading-tight select-none">
              <span>PRASANNA</span>{' '}
              <span className="text-foreground/90">VENKAT RAMANA</span>
            </h1>
          </motion.div>

          {/* 2. Primary Role */}
          <motion.div variants={itemVariants} className="flex flex-col gap-1 sm:gap-1.5">
            <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl text-accent font-bold uppercase tracking-wider leading-tight">
              {profileData.primaryTitle.toUpperCase()}
            </h2>
          </motion.div>

          {/* 3. Supporting Statement */}
          <motion.div variants={itemVariants}>
            <p className="font-sans text-base sm:text-lg md:text-xl text-foreground-muted leading-relaxed max-w-2xl lg:max-w-3xl font-normal">
              {profileData.positioningStatement}
            </p>
          </motion.div>

          {/* 4. Location */}
          <motion.div
            variants={itemVariants}
            className="w-full flex flex-wrap items-center gap-y-2.5 gap-x-5 pt-3 pb-1 border-t border-border/80 font-mono text-xs text-foreground-muted"
          >
            <div className="flex items-center gap-2">
              <span className="text-foreground-muted uppercase tracking-wider font-medium">
                BENGALURU, INDIA
              </span>
            </div>
          </motion.div>

          {/* 5. CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
          >
            <Button
              to="/systems"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
              iconRight={
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              }
            >
              VIEW SYSTEMS
            </Button>
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              CONTACT ME
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
