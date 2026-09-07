import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { SEO } from '../../components/common/SEO';
import { Container } from '../../components/common/Container';
import { TechnicalLabel } from '../../components/ui/TechnicalLabel';
import { projectsData } from '../../data/projects';
import type { Project } from '../../types/portfolio';
import { revealTransition, snappyTransition } from '../../components/motion/motionVariants';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const shouldReduceMotion = useReducedMotion();

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const project: Project | undefined = projectsData[currentIndex];

  if (!project) {
    return (
      <div className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center bg-background">
        <SEO title="Project Not Found" />
        <Container size="md" className="text-center space-y-5">
          <TechnicalLabel text="RECORD NOT FOUND // 404" variant="accent" prefix="//" />
          <h1 className="font-display text-4xl sm:text-5xl text-foreground font-bold uppercase tracking-tight">
            Case Study Not Located
          </h1>
          <p className="text-sm sm:text-base text-foreground-muted font-sans max-w-md mx-auto leading-relaxed">
            The requested industrial case study record is not present in the engineering portfolio.
          </p>
          <div className="pt-2">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border bg-surface hover:border-accent text-foreground text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN TO PROJECTS</span>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  // Determine previous and next projects for navigation
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 bg-background min-h-screen">
      <SEO
        title={`${project.title} — Engineering Case Study`}
        description={project.shortDescription || project.context || 'Industrial automation case study.'}
        canonicalPath={`/projects/${project.slug}`}
      />

      <Container size="xl">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : snappyTransition}
          className="mb-8"
        >
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 font-mono text-xs text-foreground-muted hover:text-foreground transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>[RETURN TO CASE STUDIES]</span>
          </Link>
        </motion.div>

        {/* Case Study Header Block */}
        <motion.header
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : revealTransition}
          className="mb-12 sm:mb-16 pb-8 border-b border-border/70 max-w-4xl"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-accent/15 border border-accent/30 text-accent select-none">
              RECORD // {project.index}
            </span>
            {project.category && (
              <span className="font-mono text-xs uppercase tracking-wider text-foreground-muted/80 font-medium">
                // {project.category}
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-foreground leading-[0.95]">
            {project.title}
          </h1>

          {project.shortDescription && (
            <p className="mt-4 text-base sm:text-lg md:text-xl text-foreground-muted leading-relaxed font-sans font-normal">
              {project.shortDescription}
            </p>
          )}
        </motion.header>

        {/* Case Study Body — Strict Conditional Rendering */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Case Study Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Context Section */}
            {project.context && (
              <section aria-labelledby="context-heading" className="space-y-3">
                <h2
                  id="context-heading"
                  className="font-mono text-xs uppercase tracking-wider text-accent font-semibold flex items-center gap-2"
                >
                  <span>// 01</span>
                  <span>SYSTEM CONTEXT &amp; APPLICATION</span>
                </h2>
                <div className="p-6 rounded-xl border border-border/80 bg-surface/50">
                  <p className="font-sans text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
                    {project.context}
                  </p>
                </div>
              </section>
            )}

            {/* Problem Section (rendered only if verified) */}
            {project.problem && (
              <section aria-labelledby="problem-heading" className="space-y-3">
                <h2
                  id="problem-heading"
                  className="font-mono text-xs uppercase tracking-wider text-accent font-semibold flex items-center gap-2"
                >
                  <span>// 02</span>
                  <span>ENGINEERING CHALLENGE</span>
                </h2>
                <div className="p-6 rounded-xl border border-border/80 bg-surface/50">
                  <p className="font-sans text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
                    {project.problem}
                  </p>
                </div>
              </section>
            )}

            {/* Engineering Approach Section */}
            {project.approach && (
              <section aria-labelledby="approach-heading" className="space-y-3">
                <h2
                  id="approach-heading"
                  className="font-mono text-xs uppercase tracking-wider text-accent font-semibold flex items-center gap-2"
                >
                  <span>// 02</span>
                  <span>ENGINEERING APPROACH</span>
                </h2>
                <div className="p-6 rounded-xl border border-border/80 bg-surface/50">
                  <p className="font-sans text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
                    {project.approach}
                  </p>
                </div>
              </section>
            )}

            {/* Control Architecture Section (rendered only if verified) */}
            {project.architecture && (
              <section aria-labelledby="arch-heading" className="space-y-3">
                <h2
                  id="arch-heading"
                  className="font-mono text-xs uppercase tracking-wider text-accent font-semibold flex items-center gap-2"
                >
                  <span>// 03</span>
                  <span>CONTROL ARCHITECTURE</span>
                </h2>
                <div className="p-6 rounded-xl border border-border/80 bg-surface/50">
                  <p className="font-sans text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
                    {project.architecture}
                  </p>
                </div>
              </section>
            )}

            {/* Contribution Section */}
            {project.contribution && (
              <section aria-labelledby="contribution-heading" className="space-y-3">
                <h2
                  id="contribution-heading"
                  className="font-mono text-xs uppercase tracking-wider text-accent font-semibold flex items-center gap-2"
                >
                  <span>// 03</span>
                  <span>ENGINEERING RESPONSIBILITY</span>
                </h2>
                <div className="p-6 rounded-xl border border-border/80 bg-surface/50">
                  <p className="font-sans text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
                    {project.contribution}
                  </p>
                </div>
              </section>
            )}

            {/* Outcome Section (rendered only if verified) */}
            {project.outcome && (
              <section aria-labelledby="outcome-heading" className="space-y-3">
                <h2
                  id="outcome-heading"
                  className="font-mono text-xs uppercase tracking-wider text-accent font-semibold flex items-center gap-2"
                >
                  <span>// 04</span>
                  <span>DELIVERED OUTCOME</span>
                </h2>
                <div className="p-6 rounded-xl border border-border/80 bg-surface/50">
                  <p className="font-sans text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
                    {project.outcome}
                  </p>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Specifications Column */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Verified Technologies Sidebar Card */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="p-6 rounded-xl border border-border/80 bg-surface/60 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold block pb-2 border-b border-border/60">
                  // VERIFIED TECHNOLOGIES
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-background border border-border text-foreground-muted select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Contact / Architecture Discussion Card */}
            <div className="p-6 rounded-xl border border-accent/40 bg-surface/80 space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold block">
                [TECHNICAL DISCUSSION]
              </span>
              <h3 className="font-display text-xl text-foreground font-bold uppercase">
                Explore Automated Systems
              </h3>
              <p className="text-xs text-foreground-muted font-sans leading-relaxed">
                Inquire about machine automation, PLC &amp; HMI implementations, or motion control integration.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2 rounded-full bg-accent hover:bg-accent-hover text-white text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>CONTACT ENGINEER</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom Pagination / Next-Prev Project Navigation */}
        <nav
          aria-label="Project case study pagination"
          className="mt-16 pt-8 border-t border-border/70 flex items-center justify-between gap-4 font-mono text-xs"
        >
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group inline-flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <div className="text-left">
                <span className="block text-[10px] text-foreground-muted/60 uppercase">PREVIOUS CASE STUDY</span>
                <span className="font-semibold text-foreground uppercase">{prevProject.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group inline-flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors ml-auto text-right"
            >
              <div className="text-right">
                <span className="block text-[10px] text-foreground-muted/60 uppercase">NEXT CASE STUDY</span>
                <span className="font-semibold text-foreground uppercase">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </nav>
      </Container>
    </div>
  );
};
