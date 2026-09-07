import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Cpu, Monitor, Network, Terminal } from 'lucide-react';
import { Container } from '../../components/common/Container';
import { TechnicalLabel } from '../../components/ui/TechnicalLabel';
import { systemsData } from '../../data/systems';
import type { EngineeringDomain } from '../../types/portfolio';

import { getSectionVariants, getItemVariants } from '../../components/motion/motionVariants';

// Icon mapping per engineering domain
const domainIcons: Record<string, React.ReactNode> = {
  '01': <Cpu className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />,
  '02': <Monitor className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />,
  '03': <Network className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />,
  '04': <Terminal className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
};

interface SystemsSectionProps {
  isPagePrimary?: boolean;
}

export const SystemsSection: React.FC<SystemsSectionProps> = ({ isPagePrimary = false }) => {
  const shouldReduceMotion = useReducedMotion();

  // Standardized industrial entrance animation variants
  const sectionVariants: Variants = getSectionVariants(shouldReduceMotion);
  const itemVariants: Variants = getItemVariants(shouldReduceMotion);

  return (
    <section
      id="systems"
      aria-label="Systems I Build"
      className="relative w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-background border-t border-border/40 overflow-hidden"
    >
      {/* Subtle restrained background grid accent */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none select-none"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10 w-full">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col"
        >
          {/* Section Introduction */}
          <div className="flex flex-col mb-12 sm:mb-14 md:mb-16 max-w-3xl">
            <motion.div variants={itemVariants} className="mb-3">
              <TechnicalLabel
                text="01 / ENGINEERING DOMAINS"
                variant="accent"
                prefix="//"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              {isPagePrimary ? (
                <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[0.95] select-none">
                  SYSTEMS <span className="text-foreground/90">I BUILD</span>
                </h1>
              ) : (
                <h2 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[0.95] select-none">
                  SYSTEMS <span className="text-foreground/90">I BUILD</span>
                </h2>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="font-sans text-base sm:text-lg text-foreground-muted leading-relaxed font-normal mt-4">
                Industrial automation systems built across control, interfaces, communication, motion and software.
              </p>
            </motion.div>
          </div>

          {/* Engineering Domains Grid (2x2 on Desktop, 1 Col on Mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {systemsData.map((domain: EngineeringDomain) => (
              <motion.article
                key={domain.id}
                variants={itemVariants}
                className="group relative rounded-xl border border-border/80 bg-surface/50 hover:bg-surface/85 hover:border-accent/40 p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-200 focus-within:border-accent"
              >
                {/* Module Top Bar */}
                <div>
                  <div className="flex items-center justify-between gap-3 pb-3 border-b border-border/50">
                    <div className="flex items-center gap-2.5">
                      {domainIcons[domain.number]}
                      <span className="font-mono text-xs font-semibold text-accent tracking-wider uppercase">
                        DOMAIN // {domain.number}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-foreground-muted/40 group-hover:text-accent/60 transition-colors uppercase select-none">
                      [SYS_MOD_{domain.number}]
                    </span>
                  </div>

                  {/* Domain Title & Tagline */}
                  <div className="mt-4 mb-3">
                    <h3 className="font-display text-2xl sm:text-3xl text-foreground font-bold uppercase tracking-wider group-hover:text-accent transition-colors duration-200">
                      {domain.title}
                    </h3>
                    <p className="font-mono text-xs text-foreground-muted/80 tracking-wider uppercase font-medium mt-1">
                      {domain.tagline}
                    </p>
                  </div>

                  {/* Purpose Description */}
                  <p className="font-sans text-sm sm:text-base text-foreground-muted leading-relaxed mb-6 font-normal">
                    {domain.description}
                  </p>

                  {/* Core Focus List */}
                  <div className="mb-6">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-foreground-muted/60 block mb-2.5 font-medium">
                      FOCUS AREAS
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-foreground-muted/90">
                      {domain.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2">
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Representative Technologies Footer */}
                <div className="pt-4 border-t border-border/60 mt-auto">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-muted/60 block mb-2.5 font-medium">
                    REPRESENTATIVE TECHNOLOGIES
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {domain.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-background border border-border/70 text-foreground-muted hover:border-border-strong hover:text-foreground transition-colors select-none"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Conceptual System Integration Strip */}
          <motion.div
            variants={itemVariants}
            className="mt-10 sm:mt-12 p-4 sm:p-5 rounded-lg border border-border/70 bg-surface/30 backdrop-blur-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs"
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-foreground-muted">
              <span
                className="inline-block w-2 h-2 rounded-full bg-success shadow-[0_0_6px_#0BDE66] shrink-0"
                aria-hidden="true"
              />
              <span className="uppercase tracking-wider font-semibold text-foreground">
                SYSTEM INTEGRATION:
              </span>
              <span className="text-foreground-muted">
                PLC + HMI + INDUSTRIAL COMMUNICATION + MOTION + SOFTWARE ={' '}
                <span className="text-accent font-medium uppercase">
                  MACHINE AUTOMATION
                </span>
              </span>
            </div>
            <span className="text-foreground-muted/60 text-[11px] uppercase tracking-wider shrink-0">
              INTERCONNECTED ARCHITECTURE
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
