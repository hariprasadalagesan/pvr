import type { Technology, TechnologyCategory } from '../types/portfolio';

export const technologiesData: Technology[] = [
  // 01 — PLC Ecosystem
  { id: 'plc-siemens', name: 'Siemens', category: 'plc', isHardware: true },
  { id: 'plc-inovance', name: 'Inovance', category: 'plc', isHardware: true },
  { id: 'plc-omron', name: 'Omron', category: 'plc', isHardware: true },
  { id: 'plc-rockwell', name: 'Allen-Bradley / Rockwell', category: 'plc', isHardware: true },
  { id: 'plc-delta', name: 'Delta', category: 'plc', isHardware: true },
  { id: 'plc-festo', name: 'Festo', category: 'plc', isHardware: true },

  // 02 — Programming
  { id: 'prog-ladder', name: 'Ladder Logic', category: 'programming' },
  { id: 'prog-st', name: 'Structured Text', category: 'programming' },
  { id: 'prog-c', name: 'C', category: 'programming' },
  { id: 'prog-cpp', name: 'C++', category: 'programming' },
  { id: 'prog-csharp', name: 'C#', category: 'programming' },
  { id: 'prog-dotnet', name: '.NET', category: 'programming' },
  { id: 'prog-dotnet-fw', name: '.NET Framework', category: 'programming' },

  // 03 — Automation & Control
  { id: 'auto-plc', name: 'PLC', category: 'automation' },
  { id: 'auto-softplc', name: 'Soft PLC', category: 'automation' },
  { id: 'auto-ethercat', name: 'EtherCAT', category: 'automation' },
  { id: 'auto-motion', name: 'Motion Control', category: 'automation' },
  { id: 'auto-fpga', name: 'FPGA', category: 'automation' },
  { id: 'auto-comm', name: 'Industrial Communication', category: 'automation' },
  { id: 'auto-machine', name: 'Machine Automation', category: 'automation' },
  { id: 'auto-realtime', name: 'Real-time Systems', category: 'automation' },
  { id: 'auto-control', name: 'Control Systems', category: 'automation' },

  // 04 — HMI
  { id: 'hmi-wincc', name: 'WinCC', category: 'hmi' },
  { id: 'hmi-factorytalk', name: 'FactoryTalk', category: 'hmi' },
  { id: 'hmi-ispsoft', name: 'ISP Soft', category: 'hmi' },
  { id: 'hmi-nbdesigner', name: 'NB-Designer', category: 'hmi' },
  { id: 'hmi-proface', name: 'Pro-face', category: 'hmi' },
  { id: 'hmi-diascreen', name: 'DIA Screen', category: 'hmi' },

  // 05 — Research / Engineering Interests
  { id: 'res-softplc', name: 'Soft PLC', category: 'research', isResearch: true },
  { id: 'res-ethercat', name: 'EtherCAT', category: 'research', isResearch: true },
  { id: 'res-motion', name: 'Motion Control', category: 'research', isResearch: true },
  { id: 'res-fpga', name: 'FPGA', category: 'research', isResearch: true },
  { id: 'res-csharp', name: 'C#', category: 'research', isResearch: true },
  { id: 'res-dotnet', name: '.NET', category: 'research', isResearch: true },
  { id: 'res-realtime', name: 'Real-time Control', category: 'research', isResearch: true },
  { id: 'res-arch', name: 'Industrial Software Architecture', category: 'research', isResearch: true }
];

export const technologyCategories: TechnologyCategory[] = [
  {
    id: 'plc',
    index: '01',
    title: 'PLC ECOSYSTEM',
    tagline: 'Hardware controller architectures & industrial platforms',
    description: 'Multi-vendor programmable logic controllers configuring deterministic machine routines, I/O clustering, and robust industrial sequencing.',
    items: technologiesData.filter((t) => t.category === 'plc')
  },
  {
    id: 'programming',
    index: '02',
    title: 'PROGRAMMING',
    tagline: 'Standard industrial logic & modern software engineering',
    description: 'IEC 61131-3 standard control languages paired with low-level deterministic C/C++ and modern object-oriented C# and .NET frameworks.',
    items: technologiesData.filter((t) => t.category === 'programming')
  },
  {
    id: 'automation',
    index: '03',
    title: 'AUTOMATION & CONTROL',
    tagline: 'Deterministic motion, high-speed fieldbus & control loops',
    description: 'Core disciplines across real-time control systems, high-speed fieldbus communication, synchronized multi-axis motion, and hardware control.',
    items: technologiesData.filter((t) => t.category === 'automation')
  },
  {
    id: 'hmi',
    index: '04',
    title: 'HMI',
    tagline: 'Operator interfaces & visualization software',
    description: 'Industrial operator displays, alarm management setups, machine state telemetry screens, and supervisory control visualization packages.',
    items: technologiesData.filter((t) => t.category === 'hmi')
  },
  {
    id: 'research',
    index: '05',
    title: 'RESEARCH / ENGINEERING INTERESTS',
    tagline: 'Active technical investigation & real-time software runtimes',
    description: 'Ongoing technical exploration into PC-based real-time automation, software-defined control architectures, and high-performance determinism.',
    researchNote: 'Active research and technical evaluation area. Includes exploratory investigation of PC-based real-time software runtimes (such as Acontis and KingStar / IntervalZero platforms for deterministic PC-based machine control). Represented strictly as research and engineering interests rather than production claims.',
    isResearch: true,
    items: technologiesData.filter((t) => t.category === 'research')
  }
];
