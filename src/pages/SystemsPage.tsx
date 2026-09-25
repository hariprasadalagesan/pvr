import React from 'react';
import { SEO } from '../components/common/SEO';
import { SystemsSection } from '../sections/systems/SystemsSection';
import { ArchitectureSection } from '../sections/architecture/ArchitectureSection';

export const SystemsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Industrial Automation Systems | PLC, HMI & Motion Control | LogicMM"
        description="Industrial automation systems engineered across PLC architectures, human-machine interfaces (HMI), industrial communication networks, motion control, and automation software."
        canonicalPath="/systems"
      />
      <SystemsSection isPagePrimary />
      <ArchitectureSection />
    </div>
  );
};
