import type { ResearchInterest } from '../types/portfolio';

export const researchInterestsData: ResearchInterest[] = [
  // Core Exploration Areas
  {
    id: 'res-softplc',
    index: '01',
    title: 'SOFT PLC',
    focusArea: 'Runtime architecture & software-defined industrial control',
    isCore: true
  },
  {
    id: 'res-ethercat',
    index: '02',
    title: 'ETHERCAT',
    focusArea: 'Deterministic industrial communication & motion synchronization',
    isCore: true
  },
  {
    id: 'res-motion',
    index: '03',
    title: 'MOTION CONTROL',
    focusArea: 'Real-time multi-axis machine movement & control loops',
    isCore: true
  },
  {
    id: 'res-fpga',
    index: '04',
    title: 'FPGA',
    focusArea: 'Hardware-level timing, high-speed acquisition & deterministic logic',
    isCore: true
  },

  // Supporting Software & Architecture Interests
  {
    id: 'res-csharp',
    index: '05',
    title: 'C#',
    focusArea: 'Industrial application development & control systems integration',
    isCore: false
  },
  {
    id: 'res-dotnet',
    index: '06',
    title: '.NET',
    focusArea: 'Modern software frameworks applied to industrial automation',
    isCore: false
  },
  {
    id: 'res-realtime',
    index: '07',
    title: 'REAL-TIME CONTROL',
    focusArea: 'Cyclic execution runtimes & low-latency coordination',
    isCore: false
  },
  {
    id: 'res-arch',
    index: '08',
    title: 'INDUSTRIAL SOFTWARE ARCHITECTURE',
    focusArea: 'Bridging deterministic OT control loops with IT software engineering paradigms',
    isCore: false
  }
];

export const researchContext = {
  title: 'RESEARCH CONTEXT',
  description:
    'Exploring real-time industrial software and Soft PLC ecosystems, including Acontis and KingStar / IntervalZero platforms for deterministic PC-based machine control.',
  disclaimer:
    'Represented strictly as areas of active technical study, evaluation, and engineering interest rather than production claims or proprietary implementations.'
};
