import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
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

  // Standardized industrial entrance animation variants for initial section reveal
  const containerVariants: Variants = getSectionVariants(shouldReduceMotion);
  const itemVariants: Variants = getItemVariants(shouldReduceMotion);

  // Filter categories based on stable category identifier
  const displayedCategories: TechnologyCategory[] =
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
        return <FlaskConical className="w-4 h-4 text-amber-600 dark:text-amber-400" aria-hidden="true" />;
      default:
        return <Layers className="w-4 h-4 text-accent" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="technology"
      aria-label="Technical Ecosystem"
      className="relative w-full py-16 sm:py-20 md:py-28 lg:py-32 bg-background border-t border-border/40 overflow-hidden"
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
          <div className="flex flex-col mb-8 sm:mb-12 md:mb-14 max-w-3xl">
            <motion.div variants={itemVariants} className="mb-2.5 sm:mb-3">
              <TechnicalLabel
                text="06 / TECHNICAL ECOSYSTEM"
                variant="accent"
                prefix="//"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.02] sm:leading-[0.95] select-none">
                TOOLS & <span className="text-foreground/90">TECHNOLOGIES</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="font-sans text-sm sm:text-base md:text-lg text-foreground-muted leading-relaxed font-normal mt-3 sm:mt-4">
                The software, control systems, industrial technologies and engineering tools used across my work.
              </p>
            </motion.div>
          </div>

          {/* Category Filter Controls */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-1.5 xs:gap-2 mb-6 sm:mb-8 md:mb-10 pb-3 sm:pb-4 border-b border-border/50"
            role="toolbar"
            aria-label="Filter technologies by engineering category"
          >
            <button
              type="button"
              onClick={() => setActiveCategoryId('all')}
              aria-pressed={activeCategoryId === 'all'}
              className={`px-3 py-1.5 xs:px-3.5 xs:py-1.5 rounded text-xs font-mono font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer ${
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
                  className={`px-3 py-1.5 xs:px-3.5 xs:py-1.5 rounded text-xs font-mono font-medium transition-all duration-150 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer ${
                    isSelected
                      ? cat.isResearch
                        ? 'bg-amber-500 text-neutral-950 shadow-sm font-semibold'
                        : 'bg-accent text-white shadow-sm'
                      : cat.isResearch
                      ? 'bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-700 dark:text-amber-300'
                      : 'bg-surface/70 hover:bg-surface border border-border/70 text-foreground-muted hover:text-foreground'
                  }`}
                >
                  <span>{cat.index} //</span>
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Categories Presentation wrapped in AnimatePresence to prevent blank state on filter switch */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeCategoryId}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 sm:space-y-10 md:space-y-12"
            >
              {displayedCategories.map((category: TechnologyCategory) => (
                <article
                  key={category.id}
                  className={`rounded-xl border p-4 xs:p-5 sm:p-7 md:p-8 lg:p-10 transition-all duration-200 ${
                    category.isResearch
                      ? 'border-amber-500/30 bg-amber-500/5 dark:bg-amber-950/10 hover:border-amber-500/50'
                      : 'border-border/80 bg-surface/50 hover:border-border'
                  }`}
                >
                  {/* Category Header */}
                  <div className="pb-4 mb-4 sm:pb-6 sm:mb-6 border-b border-border/50">
                    <div className="space-y-2 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          {getCategoryIcon(category.id)}
                          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                            [CAT // {category.index}]
                          </span>
                        </div>
                        {category.isResearch && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                            <ShieldAlert className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                            RESEARCH AREA
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground leading-tight">
                        {category.title}
                      </h3>

                      {category.tagline && (
                        <p className="font-mono text-[11px] xs:text-xs sm:text-sm text-accent/90 uppercase tracking-wide leading-snug">
                          {category.tagline}
                        </p>
                      )}

                      <p className="font-sans text-xs sm:text-sm text-foreground-muted leading-relaxed pt-0.5 sm:pt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Research Partition Disclaimer (Rendered only on Research category) */}
                  {category.isResearch && category.researchNote && (
                    <div className="mb-5 sm:mb-6 p-3.5 sm:p-4 rounded-lg bg-amber-500/10 dark:bg-amber-950/20 border border-amber-500/30 flex items-start gap-2.5 sm:gap-3">
                      <FlaskConical className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <h4 className="font-mono text-[11px] sm:text-xs font-semibold text-amber-800 dark:text-amber-300 uppercase tracking-wider leading-snug">
                          RESEARCH CONTEXT &amp; TECHNOLOGY INVESTIGATION
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-amber-900/90 dark:text-amber-200/80 leading-relaxed pt-0.5">
                          {category.researchNote}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Verified Technology Items Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2.5 xs:gap-3 sm:gap-4">
                    {category.items.map((tech: Technology, techIdx: number) => {
                      const badgeLabel = tech.isResearch
                        ? 'RESEARCH'
                        : tech.isHardware
                        ? 'HARDWARE'
                        : 'CONTROL';

                      const badgeClasses = tech.isResearch
                        ? 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30'
                        : tech.isHardware
                        ? 'bg-blue-500/15 text-blue-800 dark:text-blue-300 border border-blue-500/30'
                        : 'bg-surface text-foreground-muted border border-border/50';

                      return (
                        <div
                          key={tech.id}
                          className={`p-2.5 xs:p-3 sm:p-3.5 md:p-4 rounded-lg border transition-all duration-150 flex flex-col justify-between min-h-[76px] xs:min-h-[82px] sm:min-h-[88px] md:min-h-0 md:flex-row md:items-center md:justify-between gap-2 sm:gap-2.5 md:gap-3 group ${
                            category.isResearch
                              ? 'border-amber-500/20 bg-amber-500/5 dark:bg-amber-950/10 hover:border-amber-400/50 hover:bg-amber-500/10 dark:hover:bg-amber-950/20'
                              : 'border-border/70 bg-surface-subtle/70 hover:border-accent/50 hover:bg-surface'
                          }`}
                        >
                          {/* Mobile: Top Row with Index & Badge */}
                          <div className="flex items-center justify-between w-full md:hidden">
                            <span className="font-mono text-[10px] xs:text-[11px] text-foreground-subtle group-hover:text-accent transition-colors shrink-0">
                              {(techIdx + 1).toString().padStart(2, '0')}
                            </span>
                            <span
                              aria-hidden="true"
                              className={`text-[9px] xs:text-[10px] font-mono px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0 ${badgeClasses}`}
                            >
                              {badgeLabel}
                            </span>
                          </div>

                          {/* Desktop: Index + Title in one row | Mobile: Title below top row */}
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="hidden md:inline-block font-mono text-[11px] text-foreground-subtle group-hover:text-accent transition-colors shrink-0">
                              {(techIdx + 1).toString().padStart(2, '0')}
                            </span>
                            <span className="font-sans font-medium text-xs xs:text-[13px] sm:text-sm md:text-base text-foreground tracking-tight leading-snug break-words">
                              {tech.name}
                            </span>
                          </div>

                          {/* Desktop Badge (Screen-reader accessible on all viewports) */}
                          <span
                            className={`sr-only md:not-sr-only md:inline-flex text-[10px] font-mono px-2 py-0.5 rounded uppercase tracking-wider shrink-0 ${badgeClasses}`}
                          >
                            {badgeLabel}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};
