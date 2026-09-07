import React from 'react';
import { SEO } from '../components/common/SEO';
import { ContactSection } from '../sections/contact/ContactSection';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Contact & Engineering Availability | Prasanna Venkat Ramana I"
        description="Initiate an engineering conversation with Prasanna Venkat Ramana I regarding industrial automation, control systems, and technical opportunities."
        canonicalPath="/contact"
      />
      <ContactSection isPagePrimary />
    </div>
  );
};
