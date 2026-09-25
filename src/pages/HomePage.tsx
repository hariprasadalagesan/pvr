import React from 'react';
import { SEO } from '../components/common/SEO';
import { HeroSection } from '../sections/hero/HeroSection';
import { SystemsSection } from '../sections/systems/SystemsSection';
import { ArchitectureSection } from '../sections/architecture/ArchitectureSection';
import { ProjectsSection } from '../sections/projects/ProjectsSection';
import { ExperienceSection } from '../sections/experience/ExperienceSection';
import { TechnologySection } from '../sections/technology/TechnologySection';
import { ResearchSection } from '../sections/research/ResearchSection';
import { AboutSection } from '../sections/about/AboutSection';
import { EducationSection } from '../sections/education/EducationSection';
import { ContactSection } from '../sections/contact/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Prasanna Venkat Ramana | Automation Engineer | Industrial Automation"
        description="Prasanna Venkat Ramana is an Automation Engineer based in Bengaluru, Karnataka, India, specializing in industrial automation systems, PLC programming, HMI development, motion control, and machine automation."
        canonicalPath="/"
      />
      <HeroSection />
      <SystemsSection />
      <ArchitectureSection />
      <ProjectsSection />
      <ExperienceSection />
      <TechnologySection />
      <ResearchSection />
      <AboutSection />
      <EducationSection />
      <ContactSection />
    </>
  );
};
