/**
 * Core Domain Types for Prasanna Venkat Ramana I - Portfolio Architecture
 */

export interface SystemAvailability {
  isAvailable: boolean;
  statusLabel: string;
  currentFocus: string;
  location: string;
}

export interface Profile {
  name: string;
  primaryTitle: string;
  secondaryTitle: string;
  positioningStatement: string;
  location: string;
  website: string;
  email: string;
  phone: string;
  linkedIn: string;
  cvUrl: string;
  availability: SystemAvailability;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  isExternal?: boolean;
  badge?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  label: string;
  handle: string;
}

export type TechCategoryType =
  | 'PLC'
  | 'Programming'
  | 'Automation & Control'
  | 'HMI'
  | 'Research & Engineering Interests';

export interface Technology {
  id: string;
  name: string;
  category: TechCategoryType;
  subcategory?: string;
  isHardware?: boolean;
  tag?: string;
  isResearch?: boolean;
}

export interface TechnologyCategory {
  id: string;
  index: string;
  title: string;
  tagline?: string;
  description: string;
  items: Technology[];
  isResearch?: boolean;
  researchNote?: string;
}

export interface ResearchInterest {
  id: string;
  index: string;
  title: string;
  focusArea?: string;
  isCore?: boolean;
}

export interface Project {
  id: string;
  slug: string;
  index: string;
  title: string;
  category?: string;
  shortDescription?: string;
  context?: string;
  problem?: string;
  approach?: string;
  architecture?: string;
  technologies?: string[];
  contribution?: string;
  outcome?: string;
  imageUrl?: string;
  isFeatured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  location: string;
  employmentType?: 'Full-time' | 'Contract';
  focusSummary: string;
  coreWork: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  program: string;
  period: string;
  startDate?: string;
  endDate?: string;
  credential?: string;
  field?: string;
}

export interface EngineeringDomain {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  platforms: string[];
}

export interface ArchitectureNode {
  id: string;
  layerNumber: string;
  title: string;
  categoryLabel: string;
  purpose: string;
  context: string[];
  responsibility: string;
  signalDirection?: string;
}

