import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Calendar, Cpu, ArrowRight } from 'lucide-react';
import { Container } from '../../components/common/Container';
import { TechnicalLabel } from '../../components/ui/TechnicalLabel';
import { educationData } from '../../data/education';
import type { Education } from '../../types/portfolio';
import { getSectionVariants, getItemVariants } from '../../components/motion/motionVariants';

export const EducationSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Standardized industrial entrance animation variants
  const containerVariants: Variants = getSectionVariants(shouldReduceMotion);
  const itemVariants: Variants = getItemVariants(shouldReduceMotion);

  return (
    <section
      id="education"
      aria-label="Education and Formal Training"
      className="relative w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-background border-t border-border/40 overflow-hidden"
    >
      {/* Background technical grid accent */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none select-none"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.06 }}
          className="flex flex-col"
        >
          {/* Section Introduction */}
          <div className="flex flex-col mb-12 sm:mb-16 max-w-3xl">
            <motion.div variants={itemVariants} className="mb-3">
              <TechnicalLabel
                text="09 / EDUCATION"
                variant="accent"
                prefix="//"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[0.95] select-none">
                ENGINEERING <span className="text-foreground/90">FOUNDATION</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="font-sans text-base sm:text-lg text-foreground-muted leading-relaxed font-normal mt-4">
                Formal training in industrial automation and control systems.
              </p>
            </motion.div>
          </div>

          {/* Education Records Container */}
          <div className="space-y-6">
            {educationData.map((edu: Education) => (
              <motion.article
                key={edu.id}
                variants={itemVariants}
                className="rounded-xl border border-border/80 bg-surface/50 hover:bg-surface/85 hover:border-accent/40 p-6 sm:p-8 md:p-10 transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-10">
                  {/* Left Column: Index, Institution & Program */}
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-accent">
                        [RECORD // 01]
                      </span>
                      <span className="text-foreground-subtle text-xs font-mono">//</span>
                      <span className="font-mono text-[11px] text-foreground-subtle uppercase tracking-widest">
                        FORMAL TRAINING
                      </span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-none">
                      {edu.institution}
                    </h3>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-subtle border border-border/60">
                      <Cpu className="w-4 h-4 text-accent" />
                      <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground">
                        {edu.program}
                      </span>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-foreground-muted leading-relaxed max-w-2xl pt-1">
                      Comprehensive technical instruction in programmable logic controllers, industrial operator interfaces, variable frequency drives, and hardware sensor integration.
                    </p>
                  </div>

                  {/* Right Column: Timeline & Chronological Marker */}
                  <div className="lg:w-72 flex-shrink-0 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border/60 pt-6 lg:pt-0 lg:pl-8 space-y-4">
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-foreground-subtle block">
                        TRAINING PERIOD
                      </span>
                      <div className="flex items-center gap-2 text-foreground font-mono text-xs sm:text-sm font-semibold">
                        <Calendar className="w-4 h-4 text-accent shrink-0" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    {/* Compact Chronological Sequence */}
                    <div className="p-3.5 rounded-lg bg-surface-subtle/70 border border-border/60 space-y-2 font-mono text-xs">
                      <div className="flex items-center justify-between text-foreground-subtle text-[11px]">
                        <span>START</span>
                        <span className="text-foreground font-medium">{edu.startDate}</span>
                      </div>
                      <div className="flex items-center justify-center text-accent/80">
                        <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                      </div>
                      <div className="flex items-center justify-between text-foreground-subtle text-[11px]">
                        <span>COMPLETION</span>
                        <span className="text-foreground font-medium">{edu.endDate}</span>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-foreground-subtle">
                      STATUS // <span className="text-accent font-semibold">VERIFIED RECORD</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
