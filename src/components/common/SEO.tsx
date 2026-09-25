import React, { useEffect } from 'react';
import { profileData } from '../../data/profile';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '/',
  ogType = 'website',
  noindex = false,
  schema
}) => {
  useEffect(() => {
    // Primary title calculation
    const defaultTitle = `${profileData.name} | ${profileData.primaryTitle} | Industrial Automation`;
    const finalTitle = title ? title.trim() : defaultTitle;
    document.title = finalTitle;

    // Primary description calculation
    const finalDescription = (description || profileData.positioningStatement).trim();

    // Canonical URL normalization (strict HTTPS logicmm.com without query, hash, or trailing duplicates)
    const normalizedPath = canonicalPath.replace(/[?#].*$/, '').trim();
    const cleanPath = normalizedPath === '/' || normalizedPath === ''
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

    // Twitter Card Metadata
    setMetaTag('name', 'twitter:card', 'summary');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:url', canonicalUrl);
    // Legacy property compatibility for scrapers looking for property="twitter:*"
    setMetaTag('property', 'twitter:card', 'summary');
    setMetaTag('property', 'twitter:title', finalTitle);
    setMetaTag('property', 'twitter:description', finalDescription);
    setMetaTag('property', 'twitter:url', canonicalUrl);

    // Page-specific JSON-LD Structured Data
    const existingScript = document.head.querySelector('script#page-structured-data');
    if (schema) {
      const scriptElement = existingScript || document.createElement('script');
      scriptElement.setAttribute('id', 'page-structured-data');
      scriptElement.setAttribute('type', 'application/ld+json');
      scriptElement.textContent = JSON.stringify(schema, null, 2);
      if (!existingScript) {
        document.head.appendChild(scriptElement);
      }
    } else if (existingScript) {
      existingScript.remove();
    }
  }, [title, description, canonicalPath, ogType, noindex, schema]);

  return null;
};
