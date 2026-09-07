import type { Experience } from '../types/portfolio';

/**
 * Engineering Experience — Verified Professional Timeline
 * Verified data: Waveultra, Personal Automation Laboratory, SKD Controls.
 */
export const experienceData: Experience[] = [
  {
    id: 'waveultra',
    company: 'Waveultra Engineers Automation Private Limited',
    role: 'Automation Engineer',
    period: 'April 2026 – Present',
    startDate: '2026-04',
    endDate: 'Present',
    isCurrent: true,
    location: 'Bengaluru, Karnataka, India',
    employmentType: 'Full-time',
    focusSummary:
      'Working with Siemens and Inovance hardware, developing and troubleshooting PLC and HMI systems using Ladder Logic and Structured Text. Working on machine automation and ultrasonic cleaning machines including standard and SPM machines, with EtherCAT and CODESYS-related technologies.',
    coreWork: [
      'Siemens and Inovance hardware configuration and deployment',
      'PLC programming and troubleshooting in Ladder Logic (LD) and Structured Text (ST)',
      'HMI development, operational screens, and troubleshooting',
      'Machine automation across standard production and custom SPM machines',
      'Multi-stage ultrasonic cleaning machine automation',
      'EtherCAT industrial communication and CODESYS-related technologies'
    ],
    technologies: [
      'Siemens',
      'Inovance',
      'PLC',
      'HMI',
      'Ladder Logic',
      'Structured Text',
      'EtherCAT',
      'CODESYS',
      'Machine Automation'
    ]
  },
  {
    id: 'personal-automation-lab',
    company: 'Personal Automation Laboratory',
    role: 'Industrial Automation System Enthusiast',
    period: 'March 2026 – April 2026',
    startDate: '2026-03',
    endDate: '2026-04',
    isCurrent: false,
    location: 'Bengaluru, Karnataka, India',
    focusSummary:
      'Developing and experimenting in a personal automation laboratory focused on C#, .NET, FPGA, EtherCAT motion control and Soft PLC technologies.',
    coreWork: [
      'Personal automation laboratory experimentation and bench testing',
      'Soft PLC execution and runtime exploration',
      'EtherCAT motion control testing and implementation',
      'C# and .NET Framework software automation experimentation',
      'FPGA-based hardware logic exploration'
    ],
    technologies: [
      'C#',
      '.NET',
      '.NET Framework',
      'FPGA',
      'EtherCAT Motion Control',
      'Soft PLC',
      'Automation Software'
    ]
  },
  {
    id: 'skd-controls',
    company: 'SKD Controls and Automation',
    role: 'Jr Automation System Developer',
    period: 'September 2024 – February 2026',
    startDate: '2024-09',
    endDate: '2026-02',
    isCurrent: false,
    location: 'Bengaluru, Karnataka, India',
    employmentType: 'Full-time',
    focusSummary:
      'Worked on industrial automation systems involving HMI, PLC-related development and machine automation.',
    coreWork: [
      'Human Machine Interface (HMI) screen development and deployment',
      'PLC-related logic development and testing',
      'ISP Soft controller programming',
      'Machine automation and industrial systems integration'
    ],
    technologies: [
      'HMI',
      'ISP Soft',
      'Industrial Automation',
      'Machine Automation',
      'PLC-related Development'
    ]
  }
];
