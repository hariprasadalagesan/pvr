import type { EngineeringDomain } from '../types/portfolio';

/**
 * Systems I Build — Verified Engineering Domains
 * STEP 5 verified data: 4 interconnected industrial automation disciplines.
 */
export const systemsData: EngineeringDomain[] = [
  {
    id: 'plc-control',
    number: '01',
    title: 'PLC & Control',
    tagline: 'Machine Sequence Logic & Hardware Control',
    description:
      'Developing deterministic machine sequence logic, hardware controller integration, and industrial PLC troubleshooting.',
    points: [
      'PLC programming',
      'Machine control',
      'Ladder Logic',
      'Structured Text',
      'PLC troubleshooting'
    ],
    platforms: [
      'Siemens',
      'Inovance',
      'Omron',
      'Allen-Bradley / Rockwell',
      'Delta',
      'Festo'
    ]
  },
  {
    id: 'hmi-interfaces',
    number: '02',
    title: 'HMI & Machine Interfaces',
    tagline: 'Operator Interaction & Supervisory Screens',
    description:
      'Designing industrial operator interfaces, alarm monitoring topologies, and reliable machine interaction screens.',
    points: [
      'HMI development',
      'Machine interfaces',
      'HMI troubleshooting',
      'Operator interaction'
    ],
    platforms: [
      'WinCC',
      'FactoryTalk',
      'ISP Soft',
      'NB-Designer',
      'Pro-face',
      'DIA Screen'
    ]
  },
  {
    id: 'networks-motion',
    number: '03',
    title: 'Industrial Networks & Motion',
    tagline: 'Deterministic Fieldbus & Synchronized Motion',
    description:
      'Coordinating real-time industrial communication and multi-axis motion control for automated machinery.',
    points: [
      'Industrial communication',
      'EtherCAT',
      'Motion control',
      'Machine automation'
    ],
    platforms: [
      'EtherCAT',
      'Industrial Communication',
      'Motion Control'
    ]
  },
  {
    id: 'automation-software',
    number: '04',
    title: 'Automation Software',
    tagline: 'PC-Based Runtimes & Control Concepts',
    description:
      'Developing software-driven automation solutions, PC-based Soft PLC runtimes, and exploring real-time control concepts.',
    points: [
      'Software-based automation',
      'Soft PLC',
      'Real-time control concepts',
      'Automation software experimentation'
    ],
    platforms: [
      'C',
      'C++',
      'C#',
      '.NET',
      '.NET Framework',
      'Soft PLC',
      'FPGA'
    ]
  }
];
