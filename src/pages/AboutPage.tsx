import React from 'react';
import { SEO } from '../components/common/SEO';
import { AboutSection } from '../sections/about/AboutSection';
import { EducationSection } from '../sections/education/EducationSection';
import { ResearchSection } from '../sections/research/ResearchSection';

export const AboutPage: React.FC = () => {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': 'https://logicmm.com/about#profilepage',
    url: 'https://logicmm.com/about',
    name: 'About Prasanna Venkat Ramana | Automation Engineer | LogicMM',
    isPartOf: {
      '@id': 'https://logicmm.com/#website'
    },
    mainEntity: {
      '@id': 'https://logicmm.com/#person'
    },
    description:
      'Learn about Prasanna Venkat Ramana, an Automation Engineer based in Bengaluru, India. Explore his systems philosophy, engineering focus, and verified industrial automation background.'
  };

  return (
    <div className="pt-20">
      <SEO
        title="About Prasanna Venkat Ramana | Automation Engineer | LogicMM"
        description="Learn about Prasanna Venkat Ramana, an Automation Engineer based in Bengaluru, India. Explore his systems philosophy, engineering focus, and verified industrial automation background."
        canonicalPath="/about"
        schema={aboutSchema}
      />
      <AboutSection isPagePrimary />
      <EducationSection />
      <ResearchSection />
    </div>
  );
};
