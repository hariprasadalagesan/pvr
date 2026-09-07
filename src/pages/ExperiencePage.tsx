import React from 'react';
import { SEO } from '../components/common/SEO';
import { ExperienceSection } from '../sections/experience/ExperienceSection';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Professional Experience & Timeline"
        description="Verified career history across Waveultra Engineers Automation, SKD Controls, and personal R&D laboratory."
        canonicalPath="/experience"
      />
      <ExperienceSection isPagePrimary />
    </div>
  );
};
