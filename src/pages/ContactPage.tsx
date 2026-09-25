import React from 'react';
import { SEO } from '../components/common/SEO';
import { ContactSection } from '../sections/contact/ContactSection';

export const ContactPage: React.FC = () => {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://logicmm.com/contact#contactpage',
    url: 'https://logicmm.com/contact',
    name: 'Contact Prasanna Venkat Ramana | Automation Engineer | LogicMM',
    isPartOf: {
      '@id': 'https://logicmm.com/#website'
    },
    mainEntity: {
      '@id': 'https://logicmm.com/#person'
    },
    description:
      'Contact Prasanna Venkat Ramana for industrial automation projects, machine control engineering, PLC and HMI development, and technical collaboration in Bengaluru, India.'
  };

  return (
    <div className="pt-20">
      <SEO
        title="Contact Prasanna Venkat Ramana | Automation Engineer | LogicMM"
        description="Contact Prasanna Venkat Ramana for industrial automation projects, machine control engineering, PLC and HMI development, and technical collaboration in Bengaluru, India."
        canonicalPath="/contact"
        schema={contactSchema}
      />
      <ContactSection isPagePrimary />
    </div>
  );
};
