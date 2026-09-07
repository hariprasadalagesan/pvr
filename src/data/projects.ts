import type { Project } from '../types/portfolio';

/**
 * Verified Engineering Projects & Case Studies
 * STEP 8 verified data: 5 verified industrial automation project areas.
 * Strict content integrity: verified information only, no fabricated metrics, no placeholders.
 */
export const projectsData: Project[] = [
  {
    id: 'vacuum-distillation',
    slug: 'vacuum-distillation',
    index: '01',
    title: 'Vacuum Distillation',
    category: 'PROCESS AUTOMATION',
    shortDescription:
      'Industrial automation system for automated solvent recovery and vacuum distillation control.',
    context:
      'Automated vacuum distillation system operating under controlled pressure and temperature conditions for solvent recovery and chemical separation.',
    approach:
      'Engineered closed-loop sequence logic, automated valve sequencing, and safe thermal regulation for distillation cycles.',
    technologies: ['Delta PLC', 'ISP Soft', 'HMI', 'Modbus', 'Analog I/O'],
    contribution:
      'PLC-related logic development, HMI interface programming, and operational sequence testing.'
  },
  {
    id: 'vision-inspection',
    slug: 'vision-inspection',
    index: '02',
    title: 'Vision Inspection',
    category: 'VISION',
    shortDescription:
      'Inline automated quality inspection station integrating optical sensors and high-speed rejection.',
    context:
      'High-speed automated inspection station deployed along an active production line to verify component quality and trigger automated mechanical rejection.',
    approach:
      'Synchronized part-presence sensor triggers with camera inspection logic and automated pneumatic rejection gating.',
    technologies: ['Machine Vision', 'Industrial Sensors', 'PLC', 'Discrete Fast I/O'],
    contribution:
      'Automation logic development, sensor trigger synchronization, and rejection interface support.'
  },
  {
    id: 'ultrasonic-cleaning',
    slug: 'ultrasonic-cleaning',
    index: '03',
    title: 'Ultrasonic Cleaning',
    category: 'MACHINE AUTOMATION',
    shortDescription:
      'Multi-stage industrial ultrasonic cleaning machines across standard production and custom SPM configurations.',
    context:
      'Multi-stage automated ultrasonic cleaning equipment designed for precision parts degreasing, washing, rinsing, and drying sequences.',
    approach:
      'Developed PLC machine sequence control, temperature regulation, and automated basket immersion sequencing.',
    technologies: [
      'Siemens',
      'Inovance',
      'PLC',
      'HMI',
      'Ladder Logic',
      'Structured Text'
    ],
    contribution:
      'PLC programming and troubleshooting in Ladder Logic and Structured Text, with HMI development and hardware integration.'
  },
  {
    id: 'linear-robot',
    slug: 'linear-robot',
    index: '04',
    title: 'Linear Robot',
    category: 'MOTION',
    shortDescription:
      'Multi-axis Cartesian linear robot mechanism for industrial positioning and handling.',
    context:
      'Cartesian multi-axis robotic mechanism performing deterministic linear trajectory profiling and automated part positioning.',
    approach:
      'Programmed coordinated multi-axis motion control profiles, homing sequences, and position verification routines.',
    technologies: ['EtherCAT', 'Motion Control', 'Servo Drives', 'CODESYS'],
    contribution:
      'Motion control programming, fieldbus synchronization, and trajectory sequence implementation.'
  },
  {
    id: 'bespoke-machine-automation',
    slug: 'bespoke-machine-automation',
    index: '05',
    title: 'Bespoke Machine Automation',
    category: 'BESPOKE AUTOMATION',
    shortDescription:
      'Special-purpose machine (SPM) automation engineered for custom industrial manufacturing operations.',
    context:
      'Custom special-purpose machinery (SPMs) developed to automate specialized assembly, testing, and production manufacturing steps.',
    approach:
      'Implemented control logic, sensor interfacing, and actuator sequencing for custom automated machinery.',
    technologies: [
      'Siemens',
      'Inovance',
      'PLC',
      'HMI',
      'EtherCAT',
      'Machine Automation'
    ],
    contribution:
      'PLC and HMI development, hardware configuration, and machine-level troubleshooting.'
  }
];
