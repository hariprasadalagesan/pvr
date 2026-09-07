import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { TechnicalLabel } from '../components/ui/TechnicalLabel';
import { projectsData } from '../data/projects';
import { Reveal } from '../components/motion/Reveal';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'PROCESS AUTOMATION',
    'VISION',
    'MACHINE AUTOMATION',
    'MOTION',
    'BESPOKE AUTOMATION'
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-20">
      <SEO
        title="Industrial Projects & Engineering Case Studies"
        description="Verified industrial automation engineering case studies across process control, vision, machine automation, and real-time motion."
        canonicalPath="/projects"
      />
      <Section spacing="normal">
        <Container size="xl">
          <div className="flex flex-col mb-12 max-w-3xl">
            <TechnicalLabel text="PROJECT REPOSITORY // 05" variant="accent" prefix="//" className="mb-3" />
            <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[0.95] select-none">
              ENGINEERING <span className="text-foreground/90">CASE STUDIES</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-foreground-muted leading-relaxed font-normal mt-4">
              Verified industrial automation work presented as technical case study records.
            </p>
          </div>

          {/* Filter Pills */}
          <div
            className="flex flex-wrap items-center gap-2 mb-10"
            role="toolbar"
            aria-label="Filter engineering case studies by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={selectedCategory === cat}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                  selectedCategory === cat
                    ? 'bg-accent text-white font-semibold shadow-sm'
                    : 'bg-surface text-foreground-muted hover:text-foreground border border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects List */}
          <div className="space-y-6 sm:space-y-8">
            {filteredProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 0.05}>
                <article className="group relative rounded-xl border border-border/80 bg-surface/50 hover:bg-surface/85 hover:border-accent/40 p-6 sm:p-8 md:p-10 transition-all duration-200">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-10">
                    <div className="flex-1 space-y-4">
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

                      <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl font-bold uppercase tracking-tight text-foreground group-hover:text-accent transition-colors leading-[0.95]">
                        <Link
                          to={`/projects/${project.slug}`}
                          className="focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded"
                        >
                          {project.title}
                        </Link>
                      </h2>

                      {project.shortDescription && (
                        <p className="font-sans text-sm sm:text-base text-foreground-muted leading-relaxed font-normal max-w-2xl">
                          {project.shortDescription}
                        </p>
                      )}

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
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

