import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Container } from '../../components/common/Container';
import { TechnicalLabel } from '../../components/ui/TechnicalLabel';
import { StatusIndicator } from '../../components/ui/StatusIndicator';
import { experienceData } from '../../data/experience';
import type { Experience } from '../../types/portfolio';

import { getSectionVariants, getItemVariants } from '../../components/motion/motionVariants';

interface ExperienceSectionProps {
  isPagePrimary?: boolean;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isPagePrimary = false }) => {
  const shouldReduceMotion = useReducedMotion();

  // Standardized industrial entrance animation variants
  const containerVariants: Variants = getSectionVariants(shouldReduceMotion);
  const itemVariants: Variants = getItemVariants(shouldReduceMotion);

  return (
    <section
      id="experience"
      aria-label="Engineering Experience"
      className="relative w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-background border-t border-border/40 overflow-hidden"
    >
      {/* Subtle background technical grid accent */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none select-none"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col"
        >
          {/* Section Introduction */}
          <div className="flex flex-col mb-12 sm:mb-16 md:mb-20 max-w-3xl">
            <motion.div variants={itemVariants} className="mb-3">
              <TechnicalLabel
                text="03 / ENGINEERING TIMELINE"
                variant="accent"
                prefix="//"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              {isPagePrimary ? (
                <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[0.95] select-none">
                  ENGINEERING <span className="text-foreground/90">EXPERIENCE</span>
                </h1>
              ) : (
                <h2 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[0.95] select-none">
                  ENGINEERING <span className="text-foreground/90">EXPERIENCE</span>
                </h2>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="font-sans text-base sm:text-lg text-foreground-muted leading-relaxed font-normal mt-4">
                A progression through industrial automation, machine control and automation software.
              </p>
            </motion.div>
          </div>

          {/* Structured Vertical Engineering Timeline */}
          <div className="relative pl-6 sm:pl-10 md:pl-12 max-w-5xl">
            {/* Vertical Timeline Backbone Rule */}
            <div
              className="absolute left-2.5 sm:left-4 top-4 bottom-8 w-0.5 bg-border-strong"
              aria-hidden="true"
            />

            <div className="space-y-10 sm:space-y-14">
              {experienceData.map((exp: Experience) => {
                const isCurrent = exp.isCurrent;

                return (
                  <motion.article
                    key={exp.id}
                    variants={itemVariants}
                    className="relative group"
                  >
                    {/* Timeline Node Marker */}
                    <div
                      className={`absolute -left-6 sm:-left-10 md:-left-12 top-6 w-4 h-4 rounded-full border-2 transition-transform duration-200 ${
                        isCurrent
                          ? 'bg-accent border-white shadow-[0_0_10px_#5E67E6] scale-110'
                          : 'bg-surface border-border-strong group-hover:border-accent/70'
                      }`}
                      aria-hidden="true"
                    >
                      {isCurrent && (
                        <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40" />
                      )}
                    </div>

                    {/* Experience Card Container */}
                    <div
                      className={`rounded-xl border p-6 sm:p-7 md:p-8 transition-all duration-200 ${
                        isCurrent
                          ? 'bg-surface-elevated/90 border-accent/60 shadow-[0_0_30px_rgba(94,103,230,0.12)] ring-1 ring-accent/30'
                          : 'bg-surface/50 border-border/80 hover:bg-surface/80 hover:border-border-strong'
                      }`}
                    >
                      {/* Top Metadata Row: Dates, Badges & Location */}
                      <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 pb-4 border-b border-border/60 font-mono text-xs">
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-semibold tracking-wider ${
                              isCurrent ? 'text-accent' : 'text-foreground/90'
                            }`}
                          >
                            {exp.period.toUpperCase()}
                          </span>

                          {isCurrent && (
                            <StatusIndicator
                              label="CURRENT"
                              size="sm"
                              isLive={!shouldReduceMotion}
                            />
                          )}
                        </div>

                        <div className="flex items-center gap-1.5 text-foreground-muted/80 text-[11px]">
                          <span className="text-foreground-muted/40 select-none">//</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Role & Company Identity */}
                      <div className="mt-4 mb-3">
                        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground font-bold uppercase tracking-wider">
                          {exp.role}
                        </h3>
                        <p className="font-sans text-base sm:text-lg font-semibold text-accent/90 mt-0.5">
                          {exp.company}
                        </p>
                      </div>

                      {/* Verified Focus Summary */}
                      <p className="font-sans text-sm sm:text-base text-foreground-muted leading-relaxed font-normal mb-5">
                        {exp.focusSummary}
                      </p>

                      {/* Core Work Responsibilities */}
                      <div className="mb-6">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-foreground-muted/70 block mb-2.5 font-medium">
                          VERIFIED WORK AREAS
                        </span>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs font-mono text-foreground-muted">
                          {exp.coreWork.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <span
                                className="text-accent text-[10px] mt-0.5 shrink-0 select-none"
                                aria-hidden="true"
                              >
                                ▸
                              </span>
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Associated Technologies Footer */}
                      <div className="pt-4 border-t border-border/60">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-muted/60 block mb-2 font-medium">
                          ASSOCIATED TECHNOLOGIES
                        </span>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.technologies.map((tech: string) => (
                            <span
                              key={tech}
                              className={`font-mono text-xs px-2.5 py-1 rounded border transition-colors select-none ${
                                isCurrent
                                  ? 'bg-background/90 border-border text-foreground/90 hover:border-accent/40'
                                  : 'bg-background/60 border-border/70 text-foreground-muted hover:border-border-strong'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
