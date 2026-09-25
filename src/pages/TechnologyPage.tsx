import React from 'react';
import { SEO } from '../components/common/SEO';
import { TechnologySection } from '../sections/technology/TechnologySection';

export const TechnologyPage: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Industrial Automation Technologies | PLC, HMI, Motion Control & Software | LogicMM"
        description="Technical ecosystem of industrial automation tools and technologies across multi-vendor PLCs, programming languages, automation and control, HMI, and research interests."
        canonicalPath="/technology"
      />
      <TechnologySection isPagePrimary />
    </div>
  );
};
