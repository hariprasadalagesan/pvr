import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Briefcase, GraduationCap, Compass, Cpu, Layers } from 'lucide-react';
import { Container } from '../../components/common/Container';
import { TechnicalLabel } from '../../components/ui/TechnicalLabel';

import { getSectionVariants, getItemVariants } from '../../components/motion/motionVariants';

interface AboutSectionProps {
  isPagePrimary?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isPagePrimary = false }) => {
  const shouldReduceMotion = useReducedMotion();

  // Standardized industrial entrance animation variants
  const containerVariants: Variants = getSectionVariants(shouldReduceMotion);
  const itemVariants: Variants = getItemVariants(shouldReduceMotion);

  return (
    <section
      id="about"
      aria-label="About & Systems Philosophy"
      className="relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden bg-background"
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
                text="08 / ABOUT"
                variant="accent"
                prefix="//"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              {isPagePrimary ? (
                <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[0.95] select-none">
                  ENGINEERING <span className="text-foreground/90">PERSPECTIVE</span>
                </h1>
              ) : (
                <h2 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[0.95] select-none">
                  ENGINEERING <span className="text-foreground/90">PERSPECTIVE</span>
                </h2>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="font-sans text-base sm:text-lg text-foreground-muted leading-relaxed font-normal mt-4">
                The technical perspective, operational mindset, and professional background behind the automation systems I build.
              </p>
            </motion.div>
          </div>

          {/* Narrative Content Grid: Systems Mindset + Direction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Left Column (7 cols): What I Build & Systems Mindset */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
              {/* What I Build */}
              <div className="rounded-xl border border-border/70 bg-surface/40 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                    WHAT I BUILD
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground">
                  INDUSTRIAL SYSTEMS ACROSS HARDWARE &amp; SOFTWARE
                </h3>

                <p className="font-sans text-sm sm:text-base text-foreground-muted leading-relaxed">
                  I work directly on physical industrial machinery and automation systems. My development focuses on multi-axis motion coordination, programmable logic controller (PLC) sequencing, human-machine interfaces (HMI), and real-time field communication.
                </p>

                <p className="font-sans text-sm sm:text-base text-foreground-muted leading-relaxed">
                  Rather than treating automation as simple ladder logic, I build systems with rigorous fault handling, deterministic execution loops, and structured architectures that bridge physical machine dynamics with modern computing environments.
                </p>
              </div>

              {/* Engineering Mindset: Industrial + Modern Software */}
              <div className="rounded-xl border border-border/70 bg-surface/40 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                    ENGINEERING MINDSET
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground">
                  INDUSTRIAL ENGINEERING + MODERN SOFTWARE ENGINEERING
                </h3>

                <p className="font-sans text-sm sm:text-base text-foreground-muted leading-relaxed">
                  Modern automation requires engineers who understand both machine electrical panels and modern software design patterns. My mindset is rooted in this dual discipline:
                </p>

                <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-foreground-muted">
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono text-accent font-bold mt-0.5" aria-hidden="true">01 //</span>
                    <span><strong className="text-foreground">Deterministic Control:</strong> Precise cyclic task execution, machine interlocks, and real-time safety.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono text-accent font-bold mt-0.5" aria-hidden="true">02 //</span>
                    <span><strong className="text-foreground">Software Discipline:</strong> Object-oriented design, modular code organization, and modern C# / .NET integration.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono text-accent font-bold mt-0.5" aria-hidden="true">03 //</span>
                    <span><strong className="text-foreground">Reliable Communication:</strong> Robust fieldbus networking across EtherCAT, Modbus, and serial protocols.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column (5 cols): Professional Context, Education & Direction */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
              {/* Current Professional Context */}
              <div className="rounded-xl border border-border/70 bg-surface/40 p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                    PROFESSIONAL CONTEXT
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-accent font-semibold block">CURRENT ROLE</span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
                    Automation Engineer
                  </h3>
                  <p className="font-sans text-sm font-medium text-foreground">
                    Waveultra Engineers Automation Private Limited
                  </p>
                  <p className="font-mono text-xs text-foreground-subtle">
                    Bengaluru, Karnataka, India • April 2026 – Present
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-sm text-foreground-muted leading-relaxed pt-1">
                  Active in industrial automation engineering, control panel commissioning, multi-axis machine programming, and operator interface development.
                </p>
              </div>

              {/* Verified Education */}
              <div className="rounded-xl border border-border/70 bg-surface/40 p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                    VERIFIED EDUCATION
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-foreground">
                    IPCS Global
                  </h3>
                  <p className="font-sans text-sm font-medium text-foreground">
                    Industrial Automation
                  </p>
                  <p className="font-mono text-xs text-foreground-subtle">
                    May 2024 – November 2024
                  </p>
                </div>

                <p className="font-sans text-xs text-foreground-muted leading-relaxed pt-1">
                  Rigorous formal training in programmable logic controllers, industrial SCADA/HMI packages, variable frequency drives, and industrial sensor wiring.
                </p>
              </div>

              {/* Current Engineering Direction */}
              <div className="rounded-xl border border-border/70 bg-surface/40 p-6 sm:p-7 space-y-3">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-accent" aria-hidden="true" />
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                    ENGINEERING DIRECTION
                  </h3>
                </div>

                <p className="font-sans text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  Actively studying how PC-based Soft PLCs, real-time EtherCAT networks, FPGA computation, and modern .NET runtimes can expand the capability and flexibility of industrial machine control.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
