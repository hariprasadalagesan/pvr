import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FlaskConical, Cpu, Network, Activity, Layers, ArrowUpRight } from 'lucide-react';
import { Container } from '../../components/common/Container';
import { TechnicalLabel } from '../../components/ui/TechnicalLabel';
import { researchInterestsData, researchContext } from '../../data/research';
import type { ResearchInterest } from '../../types/portfolio';

import { getSectionVariants, getItemVariants } from '../../components/motion/motionVariants';

export const ResearchSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Standardized industrial entrance animation variants
  const containerVariants: Variants = getSectionVariants(shouldReduceMotion);
  const itemVariants: Variants = getItemVariants(shouldReduceMotion);

  // Split into core and supporting for clean technical hierarchy
  const coreInterests = researchInterestsData.filter((item) => item.isCore);
  const supportingInterests = researchInterestsData.filter((item) => !item.isCore);

  const getInterestIcon = (id: string) => {
    switch (id) {
      case 'res-softplc':
        return <Cpu className="w-5 h-5 text-accent" aria-hidden="true" />;
      case 'res-ethercat':
        return <Network className="w-5 h-5 text-accent" aria-hidden="true" />;
      case 'res-motion':
        return <Activity className="w-5 h-5 text-accent" aria-hidden="true" />;
      case 'res-fpga':
        return <Layers className="w-5 h-5 text-accent" aria-hidden="true" />;
      default:
        return <FlaskConical className="w-4 h-4 text-accent/80" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="research"
      aria-label="Research and Engineering Interests"
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
                text="07 / RESEARCH"
                variant="accent"
                prefix="//"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[0.95] select-none">
                ENGINEERING <span className="text-foreground/90">INTERESTS</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="font-sans text-base sm:text-lg text-foreground-muted leading-relaxed font-normal mt-4">
                Areas I'm exploring across industrial control and software engineering.
              </p>
            </motion.div>
          </div>

          {/* Conceptual Relationship: Industrial Engineering + Software Engineering */}
          <motion.div
            variants={itemVariants}
            className="mb-12 rounded-xl border border-border/70 bg-surface/40 p-6 sm:p-8"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  INVESTIGATION DIRECTION
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-foreground uppercase tracking-wide">
                  HOW INDUSTRIAL CONTROL &amp; SOFTWARE ENGINEERING CONVERGE
                </h3>
                <p className="font-sans text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  Investigating how open PC platforms, high-speed fieldbuses, and deterministic runtime software can coordinate complex machines with the flexibility of modern software engineering.
                </p>
              </div>

              {/* Conceptual Convergence Diagram */}
              <div className="flex items-center gap-2 sm:gap-3 font-mono text-xs text-foreground-muted self-start lg:self-auto bg-surface-subtle/80 p-3 sm:p-4 rounded-lg border border-border/60">
                <div className="text-center px-2 py-1 bg-surface rounded border border-border/50">
                  <span className="text-foreground block font-semibold text-[11px] sm:text-xs">INDUSTRIAL CONTROL</span>
                  <span className="text-[10px] text-foreground-subtle block mt-0.5">Fieldbus &amp; Motion</span>
                </div>
                <span className="text-accent font-bold">→</span>
                <div className="text-center px-2 py-1 bg-accent/10 rounded border border-accent/30 text-accent font-semibold text-[11px] sm:text-xs">
                  REAL-TIME RUNTIMES
                </div>
                <span className="text-accent font-bold">←</span>
                <div className="text-center px-2 py-1 bg-surface rounded border border-border/50">
                  <span className="text-foreground block font-semibold text-[11px] sm:text-xs">MODERN SOFTWARE</span>
                  <span className="text-[10px] text-foreground-subtle block mt-0.5">C# &amp; .NET Architecture</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Primary Investigation Areas (Prominent Core Topics) */}
          <div className="mb-10">
            <motion.div variants={itemVariants} className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider">
                  // CORE EXPLORATION AREAS
                </span>
              </div>
              <span className="font-mono text-xs text-foreground-subtle">
                [04 TOPICS]
              </span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {coreInterests.map((interest: ResearchInterest) => (
                <motion.article
                  key={interest.id}
                  variants={itemVariants}
                  className="group rounded-xl border border-border/80 bg-surface/50 hover:bg-surface/85 hover:border-accent/40 p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-semibold text-accent">
                          [{interest.index}]
                        </span>
                        <span className="font-mono text-[11px] text-foreground-subtle uppercase tracking-widest">
                          INVESTIGATION
                        </span>
                      </div>
                      <div className="p-2 rounded-lg bg-surface-subtle/80 border border-border/60 group-hover:border-accent/30 transition-colors">
                        {getInterestIcon(interest.id)}
                      </div>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground group-hover:text-foreground transition-colors">
                      {interest.title}
                    </h3>

                    {interest.focusArea && (
                      <p className="font-sans text-xs sm:text-sm text-foreground-muted leading-relaxed">
                        {interest.focusArea}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-foreground-subtle">
                    <span>EXPLORATION FOCUS</span>
                    <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150 text-accent">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Supporting Software & Architecture Interests */}
          <div className="mb-12">
            <motion.div variants={itemVariants} className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider">
                  // SOFTWARE &amp; ARCHITECTURE INTERESTS
                </span>
              </div>
              <span className="font-mono text-xs text-foreground-subtle">
                [04 TOPICS]
              </span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {supportingInterests.map((interest: ResearchInterest) => (
                <motion.article
                  key={interest.id}
                  variants={itemVariants}
                  className="rounded-lg border border-border/70 bg-surface-subtle/60 hover:border-accent/40 p-5 transition-all duration-150 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="font-mono text-xs font-semibold text-accent">
                      [{interest.index}]
                    </span>
                    <h4 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-foreground">
                      {interest.title}
                    </h4>
                    {interest.focusArea && (
                      <p className="font-sans text-xs text-foreground-muted leading-relaxed">
                        {interest.focusArea}
                      </p>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Research Context Callout (Acontis / KingStar / IntervalZero) */}
          <motion.div
            variants={itemVariants}
            className="rounded-xl border border-amber-500/30 bg-amber-950/10 p-6 sm:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6">
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex-shrink-0 self-start">
                <FlaskConical className="w-5 h-5" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-amber-300">
                    // {researchContext.title}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    TECHNICAL INVESTIGATION
                  </span>
                </div>

                <p className="font-sans text-sm sm:text-base text-foreground font-medium leading-relaxed">
                  {researchContext.description}
                </p>

                <p className="font-sans text-xs text-foreground-muted leading-relaxed pt-1">
                  {researchContext.disclaimer}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
