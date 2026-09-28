import React from 'react';
import { SEO } from '../components/common/SEO';
import { SystemsSection } from '../sections/systems/SystemsSection';
import { ArchitectureSection } from '../sections/architecture/ArchitectureSection';
export const SystemsPage: React.FC = () => {
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
        name: 'Systems',
        item: 'https://logicmm.com/systems'
      }
    ]
  };

  return (
    <div className="pt-20">
      <SEO
        title="Industrial Automation Systems | PLC, HMI & Motion Control | LogicMM"
        description="Industrial automation systems engineered across PLC architectures, human-machine interfaces (HMI), industrial communication networks, motion control, and automation software."
        canonicalPath="/systems"
        schema={breadcrumbsSchema}
      />
      <SystemsSection isPagePrimary />
      <ArchitectureSection />
    </div>
  );
};
