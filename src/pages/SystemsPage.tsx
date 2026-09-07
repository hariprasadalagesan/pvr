import React from 'react';
import { SEO } from '../components/common/SEO';
import { SystemsSection } from '../sections/systems/SystemsSection';
import { ArchitectureSection } from '../sections/architecture/ArchitectureSection';

export const SystemsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Industrial Systems & Architecture"
        description="Engineering domains, machine automation systems, and real-time fieldbus architectures."
        canonicalPath="/systems"
      />
      <SystemsSection isPagePrimary />
      <ArchitectureSection />
    </div>
  );
};
