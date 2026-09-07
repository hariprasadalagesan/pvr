import React from 'react';
import { SEO } from '../components/common/SEO';
import { AboutSection } from '../sections/about/AboutSection';
import { EducationSection } from '../sections/education/EducationSection';
import { ResearchSection } from '../sections/research/ResearchSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="About | Prasanna Venkat Ramana I"
        description="Systems philosophy, engineering mindset, and verified background of Prasanna Venkat Ramana I, Automation Engineer."
        canonicalPath="/about"
      />
      <AboutSection isPagePrimary />
      <EducationSection />
      <ResearchSection />
    </div>
  );
};
