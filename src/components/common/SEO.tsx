import React, { useEffect } from 'react';
import { profileData } from '../../data/profile';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  noindex?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '/',
  ogType = 'website',
  ogImage = 'https://logicmm.com/og-image.png',
  noindex = false,
  schema
}) => {
  useEffect(() => {
    // Primary title calculation
    const defaultTitle = `${profileData.name} | Industrial Automation Engineer`;
    const finalTitle = title ? title.trim() : defaultTitle;
    document.title = finalTitle;

    // Primary description calculation
    const finalDescription = (description || profileData.positioningStatement).trim();

    // Canonical URL normalization (strict HTTPS logicmm.com without query, hash, or trailing duplicates)
    const normalizedPath = canonicalPath.replace(/[?#].*$/, '').trim();
    const cleanPath =
      normalizedPath === '/' || normalizedPath === ''
        ? '/'
        : `/${normalizedPath.replace(/^\/+|\/+$/g, '')}`;
    const canonicalUrl = `https://logicmm.com${cleanPath}`;

    // Helper to create or update meta tag by name or property
    const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Primary Meta Tags
    setMetaTag('name', 'title', finalTitle);
    setMetaTag('name', 'description', finalDescription);
    setMetaTag('name', 'author', profileData.name);

    // Robots meta directive
    if (noindex) {
      setMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    }

    // Canonical Link Tag
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Open Graph Metadata
    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'LogicMM');
    setMetaTag('property', 'og:locale', 'en_US');
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:image:alt', `${finalTitle} - LogicMM`);

    // Twitter Card Metadata
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:url', canonicalUrl);
    setMetaTag('name', 'twitter:image', ogImage);

    // Legacy property compatibility
    setMetaTag('property', 'twitter:card', 'summary_large_image');
    setMetaTag('property', 'twitter:title', finalTitle);
    setMetaTag('property', 'twitter:description', finalDescription);
    setMetaTag('property', 'twitter:url', canonicalUrl);
    setMetaTag('property', 'twitter:image', ogImage);

    // Page-specific JSON-LD Structured Data
    const existingScript = document.head.querySelector('script#page-structured-data');
    if (schema) {
      const scriptElement = existingScript || document.createElement('script');
      scriptElement.setAttribute('id', 'page-structured-data');
      scriptElement.setAttribute('type', 'application/ld+json');

      const formattedSchema = Array.isArray(schema)
        ? {
            '@context': 'https://schema.org',
            '@graph': schema
          }
        : schema;

      scriptElement.textContent = JSON.stringify(formattedSchema, null, 2);
      if (!existingScript) {
        document.head.appendChild(scriptElement);
      }
    } else if (existingScript) {
      existingScript.remove();
    }
  }, [title, description, canonicalPath, ogType, ogImage, noindex, schema]);

  return null;
};
