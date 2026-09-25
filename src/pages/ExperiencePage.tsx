import React from 'react';
import { SEO } from '../components/common/SEO';
import { ExperienceSection } from '../sections/experience/ExperienceSection';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Automation Engineer Experience | Industrial Automation | Prasanna Venkat Ramana"
        description="Professional automation engineering experience of Prasanna Venkat Ramana across Waveultra Engineers Automation, personal automation research laboratory, and SKD Controls."
        canonicalPath="/experience"
      />
      <ExperienceSection isPagePrimary />
    </div>
  );
};
