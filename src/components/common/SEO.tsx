import { useEffect } from 'react';
import { profileData } from '../../data/profile';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = profileData.positioningStatement,
  canonicalPath = ''
}) => {
  useEffect(() => {
    // Dynamic Page Title
    const formattedTitle = title
      ? `${title} | ${profileData.name} — ${profileData.primaryTitle}`
      : `${profileData.name} — ${profileData.primaryTitle}`;
    document.title = formattedTitle;

    const fullUrl = `${profileData.website}${canonicalPath}`;

    // Helper to create or update meta tag
    const setMetaTag = (attribute: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Primary Meta Tags
    setMetaTag('name', 'title', formattedTitle);
    setMetaTag('name', 'description', description);

    // Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Open Graph
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', fullUrl);
    setMetaTag('property', 'og:type', 'website');

    // Twitter
    setMetaTag('property', 'twitter:title', formattedTitle);
    setMetaTag('property', 'twitter:description', description);
    setMetaTag('property', 'twitter:url', fullUrl);
    setMetaTag('property', 'twitter:card', 'summary');
  }, [title, description, canonicalPath]);

  return null;
};

