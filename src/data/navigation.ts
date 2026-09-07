import type { NavigationItem, SocialLink } from '../types/portfolio';

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'systems', label: 'Systems', path: '/systems' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'experience', label: 'Experience', path: '/experience' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'contact', label: 'Contact', path: '/contact' }
];

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/logicmm',
    label: 'Connect on LinkedIn',
    handle: 'in/logicmm'
  },
  {
    id: 'email',
    platform: 'Email',
    url: 'mailto:prasanna@logicmm.com',
    label: 'Email Prasanna',
    handle: 'prasanna@logicmm.com'
  },
  {
    id: 'phone',
    platform: 'Phone',
    url: 'tel:+916381376347',
    label: 'Call Direct',
    handle: '+91 6381376347'
  }
];
