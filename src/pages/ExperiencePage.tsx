import React from 'react';
import { SEO } from '../components/common/SEO';
import { ExperienceSection } from '../sections/experience/ExperienceSection';

export const ExperiencePage: React.FC = () => {
  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
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
        name: 'Experience',
        item: 'https://logicmm.com/experience'
      }
    ]
  };

  return (
    <div className="pt-20">
      <SEO
        title="Automation Engineer Experience | Prasanna Venkat Ramana"
        description="Professional automation engineering experience of Prasanna Venkat Ramana across Waveultra Engineers Automation, personal automation research laboratory, and SKD Controls."
        canonicalPath="/experience"
        schema={breadcrumbsSchema}
      />
      <ExperienceSection isPagePrimary />
    </div>
  );
};
