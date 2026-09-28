import React from 'react';
import { SEO } from '../components/common/SEO';
import { TechnologySection } from '../sections/technology/TechnologySection';

export const TechnologyPage: React.FC = () => {
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
        name: 'Technology',
        item: 'https://logicmm.com/technology'
      }
    ]
  };

  return (
    <div className="pt-20">
      <SEO
        title="Industrial Automation Technologies | PLC, HMI & Automation | LogicMM"
        description="Technical ecosystem of industrial automation tools and technologies across multi-vendor PLCs, programming languages, automation and control, HMI, and research interests."
        canonicalPath="/technology"
        schema={breadcrumbsSchema}
      />
      <TechnologySection isPagePrimary />
    </div>
  );
};
