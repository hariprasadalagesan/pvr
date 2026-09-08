import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Container } from '../../components/common/Container';
import { TechnicalLabel } from '../../components/ui/TechnicalLabel';
import { Button } from '../../components/ui/Button';
import { LinkedInIcon } from '../../components/ui/LinkedInIcon';
import { profileData } from '../../data/profile';

import { getSectionVariants, getItemVariants } from '../../components/motion/motionVariants';

/**
 * HeroSection Component
 *
 * Visual Hierarchy:
 * - NAME -> AUTOMATION ENGINEER -> AUTOMATION SYSTEM DEVELOPER -> STATEMENT -> METADATA -> CTAS
 * - Desktop Upper-Right: Floating Engineering LinkedIn Signal Node connected via animated signal path to System Topology
 * - Mobile: Positioned naturally within the Hero flow without collision or overflow
 */
export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);

  // Standardized industrial entrance animation variants
  const containerVariants: Variants = getSectionVariants(shouldReduceMotion);
  const itemVariants: Variants = getItemVariants(shouldReduceMotion);

  // Reusable Engineering Signal Node for LinkedIn
  const linkedInNode = (
    <motion.a
      href={profileData.linkedIn}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit LinkedIn profile"
      onMouseEnter={() => setIsLinkedInHovered(true)}
      onMouseLeave={() => setIsLinkedInHovered(false)}
      onFocus={() => setIsLinkedInHovered(true)}
      onBlur={() => setIsLinkedInHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      className="group relative inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md border border-border/80 bg-surface/90 hover:bg-surface hover:border-accent/60 transition-all duration-200 font-mono text-xs focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 select-none shadow-[0_2px_12px_rgba(0,0,0,0.25)] cursor-pointer"
    >
      {/* Precision corner registration ticks */}
      <span
        className="absolute -top-1 -left-1 text-[9px] font-mono text-accent/50 group-hover:text-accent select-none pointer-events-none transition-colors"
        aria-hidden="true"
      >
        +
      </span>
      <span
        className="absolute -bottom-1 -right-1 text-[9px] font-mono text-accent/50 group-hover:text-accent select-none pointer-events-none transition-colors"
        aria-hidden="true"
      >
        +
      </span>

      {/* LinkedIn Icon in technical port enclosure */}
      <div className="relative flex items-center justify-center w-6 h-6 rounded border border-border bg-background group-hover:border-accent/60 transition-colors">
        <LinkedInIcon className="w-3.5 h-3.5 text-accent transition-transform duration-200 group-hover:scale-110" />
      </div>

      {/* Technical Port & Protocol Identifier */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-[8px] text-foreground-muted tracking-widest uppercase font-mono">
            COMM_NODE // EXT
          </span>
          {/* Subtle live indicator */}
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            {!shouldReduceMotion && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
            )}
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success" />
          </span>
        </div>
        <span className="text-[11px] font-mono tracking-wider font-semibold text-foreground group-hover:text-accent transition-colors leading-tight mt-0.5">
          LINKEDIN
        </span>
      </div>

      {/* External outbound signal indicator */}
      <svg
        className="w-3 h-3 text-foreground-muted/60 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </motion.a>
  );

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 flex flex-col items-start gap-4 xs:gap-5 sm:gap-6"
          >
            {/* 1. Technical context label */}
            <motion.div variants={itemVariants}>
              <TechnicalLabel
                text="AUTOMATION / CONTROL SYSTEMS"
                variant="accent"
                prefix="//"
              />
            </motion.div>

            {/* 2. Personal Identification Typography (Professional Scale & Clean Hierarchy) */}
            <motion.div variants={itemVariants} className="w-full">
              <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-wide leading-tight select-none">
                <span>PRASANNA</span>{' '}
                <span className="text-foreground/90">VENKAT RAMANA</span>
              </h1>
            </motion.div>

            {/* 3 & 4. Primary Role & Secondary Positioning */}
            <motion.div variants={itemVariants} className="flex flex-col gap-1 sm:gap-1.5">
              <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl text-accent font-bold uppercase tracking-wider leading-tight">
                {profileData.primaryTitle.toUpperCase()}
              </h2>
              <p className="font-display text-base xs:text-lg sm:text-xl md:text-2xl text-foreground-muted font-semibold uppercase tracking-wider leading-tight">
                {profileData.secondaryTitle.toUpperCase()}
              </p>
            </motion.div>

            {/* 5. Supporting Statement */}
            <motion.div variants={itemVariants}>
              <p className="font-sans text-base sm:text-lg md:text-xl text-foreground-muted leading-relaxed max-w-2xl lg:max-w-3xl font-normal">
                {profileData.positioningStatement}
              </p>
            </motion.div>

            {/* 6. Location & Professional Domain */}
            <motion.div
              variants={itemVariants}
              className="w-full flex flex-wrap items-center gap-y-2.5 gap-x-5 pt-3 pb-1 border-t border-border/80 font-mono text-xs text-foreground-muted"
            >
              <div className="flex items-center gap-2">
                <span className="text-foreground-muted uppercase tracking-wider font-medium">
                  BENGALURU, INDIA
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-foreground-muted/40 select-none">//</span>
                <span className="text-foreground-muted uppercase tracking-wider font-medium">
                  AUTOMATION / CONTROL SYSTEMS
                </span>
              </div>
            </motion.div>

            {/* 8 & 9. CTAs (Focused strictly on VIEW SYSTEMS and CONTACT ME) */}
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

            {/* Mobile / Tablet: Floating LinkedIn Signal Node positioned naturally below CTAs */}
            <motion.div variants={itemVariants} className="lg:hidden pt-3 w-full">
              <div className="inline-flex flex-col gap-1.5">
                <span className="font-mono text-[10px] text-foreground-muted/70 tracking-widest uppercase">
                  // PROFESSIONAL SIGNAL
                </span>
                <div>{linkedInNode}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop Right Column: Floating LinkedIn Signal Node + Animated SVG Connection + System Topology */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-end justify-center relative select-none">
            {/* 1. Floating LinkedIn Signal Node (Top-Right of Hero Composition) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-20 mr-1"
            >
              {linkedInNode}
            </motion.div>

            {/* 2. Technical Animated SVG Signal Path (Connects LinkedIn Node down into System Topology) */}
            <div
              className="w-full max-w-[270px] h-14 relative flex justify-end pointer-events-none"
              aria-hidden="true"
            >
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 270 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Terminal Junction Markers */}
                <circle cx="210" cy="2" r="2.5" fill="var(--color-accent)" fillOpacity="0.8" />
                <circle cx="160" cy="54" r="2.5" fill="var(--color-border-strong)" />
                <circle cx="210" cy="24" r="1.5" fill="var(--color-border-strong)" />
                <circle cx="160" cy="24" r="1.5" fill="var(--color-border-strong)" />

                {/* Base Schematic Trace (Dashed Industrial Line) */}
                <path
                  d="M 210 2 L 210 24 L 160 24 L 160 54"
                  stroke="var(--color-border-strong)"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  className={
                    isLinkedInHovered
                      ? 'stroke-accent/70 transition-colors duration-200'
                      : 'opacity-50 transition-colors duration-200'
                  }
                />

                {/* Animated Signal Packet (Simulates industrial telemetry data moving along the line) */}
                {!shouldReduceMotion && (
                  <motion.path
                    d="M 210 2 L 210 24 L 160 24 L 160 54"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="14 110"
                    animate={{
                      strokeDashoffset: [124, 0]
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      repeatDelay: 1.4
                    }}
                  />
                )}

                {/* Telemetry Channel Notation */}
                <text
                  x="152"
                  y="34"
                  textAnchor="end"
                  fill="var(--color-foreground-muted)"
                  fillOpacity="0.45"
                  fontSize="8"
                  fontFamily="JetBrains Mono, monospace"
                  letterSpacing="0.08em"
                >
                  EXT_SIG // 01
                </text>
                <path d="M 154 32 L 158 32" stroke="var(--color-border-strong)" strokeWidth="1" />
              </svg>
            </div>

            {/* 3. Existing System Topology Card (Subordinate Technical Visualization) */}
            <div
              className="relative w-full max-w-[270px] p-5 rounded-lg border border-border/60 bg-surface/30 backdrop-blur-xs font-mono text-[11px] text-foreground-muted pointer-events-none"
              aria-hidden="true"
            >
              {/* Corner coordinate markings */}
              <span className="absolute top-2 left-2 text-accent/60 font-semibold select-none">+</span>
              <span className="absolute top-2 right-2 text-foreground-muted/40 text-[10px] select-none">
                SYS // NOMINAL
              </span>
              <span className="absolute bottom-2 left-2 text-foreground-muted/40 text-[10px] select-none">
                SIG // 01
              </span>
              <span className="absolute bottom-2 right-2 text-accent/60 font-semibold select-none">+</span>

              {/* Header coordinate */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/50">
                <span className="text-foreground text-xs font-semibold tracking-wider uppercase">
                  SYSTEM TOPOLOGY
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_6px_#0BDE66]" />
              </div>

              {/* Minimal Signal Nodes */}
              <div className="relative pl-5 py-2 space-y-4">
                {/* 1px vertical signal trace */}
                <div className="absolute left-1.5 top-1 bottom-1 w-px bg-border-strong" />

                {/* Node 01 */}
                <div className="relative flex items-center justify-between">
                  <div className="absolute -left-5 top-1.5 w-2 h-2 rounded-full bg-accent ring-2 ring-accent/20" />
                  <span className="text-foreground/90 font-medium">CONTROL LAYER</span>
                  <span className="text-accent/80 text-[10px]">ACTIVE</span>
                </div>

                {/* Node 02 */}
                <div className="relative flex items-center justify-between">
                  <div className="absolute -left-5 top-1.5 w-2 h-2 rounded-full bg-border-strong" />
                  <span className="text-foreground-muted">NETWORK // BUS</span>
                  <span className="text-foreground-muted/60 text-[10px]">SYNC</span>
                </div>

                {/* Node 03 */}
                <div className="relative flex items-center justify-between">
                  <div className="absolute -left-5 top-1.5 w-2 h-2 rounded-full bg-success/80 ring-2 ring-success/20" />
                  <span className="text-foreground-muted">FIELD // ACTUATION</span>
                  <span className="text-success/80 text-[10px]">READY</span>
                </div>
              </div>

              {/* Footer status readout */}
              <div className="mt-4 pt-2.5 border-t border-border/40 flex items-center justify-between text-[10px] text-foreground-muted/60">
                <span>COORD: 12.97 / 77.59</span>
                <span>STATE // 00</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
