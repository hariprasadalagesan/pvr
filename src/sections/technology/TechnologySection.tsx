import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Cpu, Code2, Network, Monitor, FlaskConical, Layers, ShieldAlert } from 'lucide-react';
import { Container } from '../../components/common/Container';
import { TechnicalLabel } from '../../components/ui/TechnicalLabel';
import { technologyCategories } from '../../data/technologies';
import type { TechnologyCategory, Technology } from '../../types/portfolio';

import { getSectionVariants, getItemVariants } from '../../components/motion/motionVariants';

export const TechnologySection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  // Standardized industrial entrance animation variants
  const containerVariants: Variants = getSectionVariants(shouldReduceMotion);
  const itemVariants: Variants = getItemVariants(shouldReduceMotion);

  // Filter categories based on selection
  const displayedCategories =
    activeCategoryId === 'all'
      ? technologyCategories
      : technologyCategories.filter((cat) => cat.id === activeCategoryId);

  // Category icons mapping
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'plc':
        return <Cpu className="w-4 h-4 text-accent" aria-hidden="true" />;
      case 'programming':
        return <Code2 className="w-4 h-4 text-accent" aria-hidden="true" />;
      case 'automation':
        return <Network className="w-4 h-4 text-accent" aria-hidden="true" />;
      case 'hmi':
        return <Monitor className="w-4 h-4 text-accent" aria-hidden="true" />;
      case 'research':
        return <FlaskConical className="w-4 h-4 text-amber-400" aria-hidden="true" />;
      default:
        return <Layers className="w-4 h-4 text-accent" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="technology"
      aria-label="Technical Ecosystem"
      className="relative w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-background border-t border-border/40 overflow-hidden"
    >
      {/* Subtle technical grid texture */}
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
          <div className="flex flex-col mb-10 sm:mb-14 max-w-3xl">
            <motion.div variants={itemVariants} className="mb-3">
              <TechnicalLabel
                text="06 / TECHNICAL ECOSYSTEM"
                variant="accent"
                prefix="//"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[0.95] select-none">
                TOOLS & <span className="text-foreground/90">TECHNOLOGIES</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="font-sans text-base sm:text-lg text-foreground-muted leading-relaxed font-normal mt-4">
                The software, control systems, industrial technologies and engineering tools used across my work.
              </p>
            </motion.div>
          </div>

          {/* Conceptual Architecture Bridge: Industrial Engineering + Modern Software */}
          <motion.div
            variants={itemVariants}
            className="mb-10 sm:mb-14 rounded-xl border border-border/80 bg-surface/40 p-5 sm:p-6 lg:p-7 relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                    CORE SYSTEM POSITIONING
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-foreground uppercase tracking-wide">
                  INDUSTRIAL ENGINEERING + MODERN SOFTWARE ENGINEERING
                </h3>
                <p className="font-sans text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  Deterministic PLC execution, fieldbus motion synchronization, and modern object-oriented software engineered as a cohesive industrial automation ecosystem.
                </p>
              </div>

              {/* High-level system relationship nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto text-left">
                <div className="p-3 rounded-lg bg-surface-subtle/70 border border-border/60">
                  <span className="font-mono text-[10px] text-accent block uppercase tracking-wider">
                    01 // CONTROLLERS
                  </span>
                  <span className="font-sans text-xs font-medium text-foreground block mt-0.5">
                    Deterministic PLCs
                  </span>
                  <span className="font-sans text-[11px] text-foreground-muted">
                    Ladder & Structured Text
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-surface-subtle/70 border border-border/60">
                  <span className="font-mono text-[10px] text-accent block uppercase tracking-wider">
                    02 // MOTION & BUS
                  </span>
                  <span className="font-sans text-xs font-medium text-foreground block mt-0.5">
                    EtherCAT & Runtimes
                  </span>
                  <span className="font-sans text-[11px] text-foreground-muted">
                    Real-time Synchronization
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-surface-subtle/70 border border-border/60">
                  <span className="font-mono text-[10px] text-accent block uppercase tracking-wider">
                    03 // SOFTWARE & HMI
                  </span>
                  <span className="font-sans text-xs font-medium text-foreground block mt-0.5">
                    C# / .NET & Visualization
                  </span>
                  <span className="font-sans text-[11px] text-foreground-muted">
                    Telemetry & SCADA
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Category Filter Controls */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10 pb-4 border-b border-border/50"
            role="toolbar"
            aria-label="Filter technologies by engineering category"
          >
            <button
              type="button"
              onClick={() => setActiveCategoryId('all')}
              aria-pressed={activeCategoryId === 'all'}
              className={`px-3.5 py-1.5 rounded text-xs font-mono font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                activeCategoryId === 'all'
                  ? 'bg-accent text-white shadow-sm'
                  : 'bg-surface/70 hover:bg-surface border border-border/70 text-foreground-muted hover:text-foreground'
              }`}
            >
              ALL CATEGORIES [05]
            </button>

            {technologyCategories.map((cat) => {
              const isSelected = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategoryId(cat.id)}
                  aria-pressed={isSelected}
                  className={`px-3.5 py-1.5 rounded text-xs font-mono font-medium transition-all duration-150 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isSelected
                      ? cat.isResearch
                        ? 'bg-amber-500 text-black shadow-sm font-semibold'
                        : 'bg-accent text-white shadow-sm'
                      : cat.isResearch
                      ? 'bg-amber-950/20 hover:bg-amber-950/40 border border-amber-500/40 text-amber-300'
                      : 'bg-surface/70 hover:bg-surface border border-border/70 text-foreground-muted hover:text-foreground'
                  }`}
                >
                  <span>{cat.index} //</span>
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Categories Presentation */}
          <div className="space-y-8 sm:space-y-12">
            {displayedCategories.map((category: TechnologyCategory) => (
              <motion.article
                key={category.id}
                variants={itemVariants}
                className={`rounded-xl border p-6 sm:p-8 md:p-10 transition-all duration-200 ${
                  category.isResearch
                    ? 'border-amber-500/30 bg-amber-950/10 hover:border-amber-500/50'
                    : 'border-border/80 bg-surface/50 hover:border-border'
                }`}
              >
                {/* Category Header */}
                <div className="pb-6 mb-6 border-b border-border/50">
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex items-center gap-2.5">
                      {getCategoryIcon(category.id)}
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                        [CAT // {category.index}]
                      </span>
                      {category.isResearch && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          <ShieldAlert className="w-3 h-3 text-amber-400" />
                          RESEARCH AREA
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground">
                      {category.title}
                    </h3>

                    {category.tagline && (
                      <p className="font-mono text-xs sm:text-sm text-accent/90 uppercase tracking-wide">
                        {category.tagline}
                      </p>
                    )}

                    <p className="font-sans text-xs sm:text-sm text-foreground-muted leading-relaxed pt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Research Partition Disclaimer (Rendered only on Research category) */}
                {category.isResearch && category.researchNote && (
                  <div className="mb-6 p-4 rounded-lg bg-amber-950/20 border border-amber-500/30 flex items-start gap-3">
                    <FlaskConical className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="font-mono text-xs font-semibold text-amber-300 uppercase tracking-wider">
                        RESEARCH CONTEXT & TECHNOLOGY INVESTIGATION
                      </h4>
                      <p className="font-sans text-xs text-amber-200/80 leading-relaxed">
                        {category.researchNote}
                      </p>
                    </div>
                  </div>
                )}

                {/* Verified Technology Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                  {category.items.map((tech: Technology, techIdx: number) => (
                    <div
                      key={tech.id}
                      className={`p-3.5 sm:p-4 rounded-lg border transition-all duration-150 flex items-center justify-between group ${
                        category.isResearch
                          ? 'border-amber-500/20 bg-amber-950/10 hover:border-amber-400/50 hover:bg-amber-950/20'
                          : 'border-border/70 bg-surface-subtle/70 hover:border-accent/50 hover:bg-surface'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[11px] text-foreground-subtle group-hover:text-accent transition-colors">
                          {(techIdx + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="font-sans font-medium text-sm sm:text-base text-foreground tracking-tight">
                          {tech.name}
                        </span>
                      </div>

                      {/* Hardware / Platform / Research Label */}
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase tracking-wider ${
                          tech.isResearch
                            ? 'bg-amber-500/15 text-amber-300 border border-amber-500/25'
                            : tech.isHardware
                            ? 'bg-blue-950/30 text-blue-300 border border-blue-500/30'
                            : 'bg-surface text-foreground-muted border border-border/50'
                        }`}
                      >
                        {tech.isResearch
                          ? 'RESEARCH'
                          : tech.isHardware
                          ? 'HARDWARE'
                          : 'CONTROL'}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
