import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../../components/common/Container';
import { TechnicalLabel } from '../../components/ui/TechnicalLabel';
import { projectsData } from '../../data/projects';
import type { Project } from '../../types/portfolio';

import { getSectionVariants, getItemVariants } from '../../components/motion/motionVariants';

export const ProjectsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Standardized industrial entrance animation variants
  const containerVariants: Variants = getSectionVariants(shouldReduceMotion);
  const itemVariants: Variants = getItemVariants(shouldReduceMotion);

  return (
    <section
      id="projects"
      aria-label="Engineering Projects"
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
          viewport={{ once: true, amount: 0.08 }}
          className="flex flex-col"
        >
          {/* Section Introduction */}
          <div className="flex flex-col mb-12 sm:mb-16 md:mb-20 max-w-3xl">
            <motion.div variants={itemVariants} className="mb-3">
              <TechnicalLabel
                text="05 / ENGINEERING WORK"
                variant="accent"
                prefix="//"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[0.95] select-none">
                SELECTED <span className="text-foreground/90">PROJECTS</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="font-sans text-base sm:text-lg text-foreground-muted leading-relaxed font-normal mt-4">
                Industrial automation work presented as engineering case studies.
              </p>
            </motion.div>
          </div>

          {/* Engineering Record Case Studies List */}
          <div className="space-y-6 sm:space-y-8">
            {projectsData.map((project: Project) => (
              <motion.article
                key={project.id}
                variants={itemVariants}
                className="group relative rounded-xl border border-border/80 bg-surface/50 hover:bg-surface/85 hover:border-accent/40 p-6 sm:p-8 md:p-10 transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-10">
                  {/* Left Column: Index, Title & Description */}
                  <div className="flex-1 space-y-4">
                    {/* Top Metadata Row: Index & Category */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-accent">
                        [{project.index}]
                      </span>
                      {project.category && (
                        <span className="font-mono text-[11px] uppercase tracking-wider text-foreground-muted/80 font-medium">
                          // {project.category}
                        </span>
                      )}
                    </div>

                    {/* Dominant Project Title */}
                    <h3 className="font-display text-3xl xs:text-4xl sm:text-5xl font-bold uppercase tracking-tight text-foreground group-hover:text-accent transition-colors leading-[0.95]">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    {/* Verified Summary */}
                    {project.shortDescription && (
                      <p className="font-sans text-sm sm:text-base text-foreground-muted leading-relaxed font-normal max-w-2xl">
                        {project.shortDescription}
                      </p>
                    )}

                    {/* Verified Technologies Chips */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                        {project.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="font-mono text-xs px-2.5 py-1 rounded bg-background border border-border/70 text-foreground-muted select-none"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Case Study Navigation CTA */}
                  <div className="lg:self-center shrink-0 pt-2 lg:pt-0">
                    <Link
                      to={`/projects/${project.slug}`}
                      aria-label={`View case study for ${project.title}`}
                      className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border/80 bg-background/80 hover:bg-accent hover:border-accent hover:text-white text-foreground font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 group-hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
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
