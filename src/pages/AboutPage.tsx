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

  const breadcrumbsSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://logicmm.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://logicmm.com/about'
      }
    ]
  };

  return (
    <div className="pt-20">
      <SEO
        title="About Prasanna Venkat Ramana | Automation Engineer"
        description="Learn about Prasanna Venkat Ramana, an Automation Engineer based in Bengaluru, India. Explore his systems philosophy, engineering focus, and verified industrial automation background."
        canonicalPath="/about"
        schema={[aboutSchema, breadcrumbsSchema]}
      />
      <AboutSection isPagePrimary />
      <EducationSection />
      <ResearchSection />
    </div>
  );
};
