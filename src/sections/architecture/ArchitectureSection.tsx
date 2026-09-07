import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Container } from '../../components/common/Container';
import { TechnicalLabel } from '../../components/ui/TechnicalLabel';
import { architectureLayers } from '../../data/architecture';
import type { ArchitectureNode } from '../../types/portfolio';

import { getSectionVariants, getItemVariants } from '../../components/motion/motionVariants';

export const ArchitectureSection: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>(architectureLayers[0].id);
  const shouldReduceMotion = useReducedMotion();

  const activeNode =
    architectureLayers.find((layer) => layer.id === activeLayerId) || architectureLayers[0];
  const activeIndex = architectureLayers.findIndex((layer) => layer.id === activeLayerId);

  // Standardized industrial entrance animation variants
  const containerVariants: Variants = getSectionVariants(shouldReduceMotion);
  const itemVariants: Variants = getItemVariants(shouldReduceMotion);

  return (
    <section
      id="architecture"
      aria-label="Automation System Architecture"
      className="relative w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-background border-t border-border/40 overflow-hidden"
    >
      {/* Subtle restrained background grid */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none select-none"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="flex flex-col"
        >
          {/* Section Introduction */}
          <div className="flex flex-col mb-12 sm:mb-14 md:mb-16 max-w-3xl">
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-3">
              <TechnicalLabel text="02 / SYSTEM ARCHITECTURE" variant="accent" prefix="//" />
              <span className="font-mono text-[10px] sm:text-xs text-foreground-muted/70 uppercase tracking-wider">
                [CONCEPTUAL SYSTEM MODEL]
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[0.95] select-none">
                AUTOMATION SYSTEM <span className="text-foreground/90">ARCHITECTURE</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="font-sans text-base sm:text-lg text-foreground-muted leading-relaxed font-normal mt-4">
                A conceptual representation of how operator interfaces, control logic, deterministic
                industrial networks, remote I/O, motion control and machine hardware interconnect.
              </p>
            </motion.div>
          </div>

          {/* Main Visualization Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Architecture Node Flow Column (Left) */}
            <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col">
              <div className="relative pl-5 sm:pl-8 space-y-3 sm:space-y-4">
                {/* Vertical SVG Signal Bus Trace */}
                <div
                  className="absolute left-2 sm:left-3.5 top-5 bottom-6 w-0.5 bg-border-strong"
                  aria-hidden="true"
                >
                  {/* Flowing signal indicator (subtle pulse traveling down) */}
                  {!shouldReduceMotion && (
                    <motion.div
                      className="w-1.5 h-6 -ml-[2px] rounded-full bg-accent opacity-80 shadow-[0_0_8px_#5E67E6]"
                      animate={{
                        y: ['0%', '1200%']
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    />
                  )}
                </div>

                {/* 7 Architecture Layers */}
                {architectureLayers.map((layer: ArchitectureNode, index: number) => {
                  const isActive = layer.id === activeLayerId;
                  const isPast = index < activeIndex;

                  return (
                    <div key={layer.id} className="relative group">
                      {/* Connection node marker on the vertical bus */}
                      <span
                        className={`absolute -left-5 sm:-left-8 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                          isActive
                            ? 'bg-accent border-white shadow-[0_0_8px_#5E67E6] scale-110'
                            : isPast
                            ? 'bg-surface border-accent/60'
                            : 'bg-surface border-border-strong group-hover:border-accent/50'
                        }`}
                        aria-hidden="true"
                      />

                      {/* Interactive Layer Card Button */}
                      <button
                        type="button"
                        onClick={() => setActiveLayerId(layer.id)}
                        onMouseEnter={() => setActiveLayerId(layer.id)}
                        onFocus={() => setActiveLayerId(layer.id)}
                        aria-pressed={isActive}
                        aria-label={`Layer ${layer.layerNumber}: ${layer.title}. ${layer.purpose}`}
                        className={`w-full text-left p-3.5 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                          isActive
                            ? 'bg-surface-elevated border-accent shadow-[0_0_24px_rgba(94,103,230,0.16)] ring-1 ring-accent/40'
                            : 'bg-surface/50 border-border/80 hover:bg-surface/85 hover:border-border-strong'
                        }`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-3">
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`font-mono text-xs font-semibold px-2 py-0.5 rounded shrink-0 ${
                                isActive
                                  ? 'bg-accent text-white'
                                  : 'bg-background border border-border text-foreground-muted'
                              }`}
                            >
                              {layer.layerNumber}
                            </span>
                            <span
                              className={`font-display text-lg xs:text-xl sm:text-2xl uppercase tracking-wider font-bold transition-colors ${
                                isActive
                                  ? 'text-foreground'
                                  : 'text-foreground/90 group-hover:text-foreground'
                              }`}
                            >
                              {layer.title}
                            </span>
                          </div>

                          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-accent/80 font-medium">
                            {layer.categoryLabel}
                          </span>
                        </div>

                        <div className="mt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                          <p className="text-foreground-muted font-sans font-normal line-clamp-1">
                            {layer.purpose}
                          </p>

                          {/* Subtle arrow indicator */}
                          <div className="flex items-center gap-1.5 text-[11px] font-mono text-foreground-muted/60 shrink-0">
                            <span>{isActive ? 'INSPECTING' : 'SELECT TO VIEW'}</span>
                            <svg
                              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                isActive ? 'text-accent translate-x-0.5' : 'text-foreground-muted/40'
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Active Layer Inspector Panel (Right) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col"
            >
              <div
                className="p-6 sm:p-7 md:p-8 rounded-xl border border-border/90 bg-surface/70 backdrop-blur-xs flex flex-col gap-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                role="region"
                aria-live="polite"
                aria-label={`Detailed analysis of ${activeNode.title}`}
              >
                {/* Panel Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-border/70 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_6px_#5E67E6]" />
                    <span className="text-accent font-semibold uppercase tracking-wider">
                      LAYER // {activeNode.layerNumber}
                    </span>
                  </div>
                  <span className="text-foreground-muted/60 text-[10px] uppercase select-none">
                    [SYS_TOPOLOGY_NODE]
                  </span>
                </div>

                {/* Node Title & Primary Function */}
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl text-foreground font-bold uppercase tracking-wider">
                    {activeNode.title}
                  </h3>
                  <p className="font-mono text-xs text-accent uppercase tracking-wider font-semibold mt-1">
                    {activeNode.categoryLabel}
                  </p>
                </div>

                {/* Detailed Breakdown Fields */}
                <div className="space-y-4 pt-1 text-xs">
                  {/* Purpose */}
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-muted/70 block mb-1">
                      // PURPOSE
                    </span>
                    <p className="font-sans text-sm text-foreground leading-relaxed font-medium">
                      {activeNode.purpose}
                    </p>
                  </div>

                  {/* System Responsibility */}
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-muted/70 block mb-1">
                      // SYSTEM RESPONSIBILITY
                    </span>
                    <p className="font-sans text-sm text-foreground-muted leading-relaxed font-normal">
                      {activeNode.responsibility}
                    </p>
                  </div>

                  {/* Representative Technologies / Context */}
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-muted/70 block mb-2">
                      // REPRESENTATIVE TECHNOLOGIES &amp; CONTEXT
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeNode.context.map((item: string) => (
                        <span
                          key={item}
                          className="font-mono text-xs px-2.5 py-1 rounded bg-background border border-border text-foreground-muted select-none"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Signal Dataflow */}
                  {activeNode.signalDirection && (
                    <div className="pt-2 border-t border-border/50">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-muted/70 block mb-1">
                        // SIGNAL DATAFLOW
                      </span>
                      <span className="font-mono text-xs text-accent font-medium">
                        {activeNode.signalDirection}
                      </span>
                    </div>
                  )}
                </div>

                {/* Conceptual Engineering Disclaimer */}
                <div className="mt-2 pt-3 border-t border-border/50 text-[11px] font-mono text-foreground-muted/60 leading-normal">
                  <p>
                    * Conceptual automation architecture model. Specific hardware models, I/O distribution,
                    and cycle timings are tailored to individual machine requirements.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
