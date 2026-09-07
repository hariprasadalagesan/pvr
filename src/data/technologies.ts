import type { Technology, TechnologyCategory } from '../types/portfolio';

export const technologiesData: Technology[] = [
  // 01 — PLC Ecosystem
  { id: 'plc-siemens', name: 'Siemens', category: 'PLC', isHardware: true },
  { id: 'plc-inovance', name: 'Inovance', category: 'PLC', isHardware: true },
  { id: 'plc-omron', name: 'Omron', category: 'PLC', isHardware: true },
  { id: 'plc-rockwell', name: 'Allen-Bradley / Rockwell', category: 'PLC', isHardware: true },
  { id: 'plc-delta', name: 'Delta', category: 'PLC', isHardware: true },
  { id: 'plc-festo', name: 'Festo', category: 'PLC', isHardware: true },

  // 02 — Programming
  { id: 'prog-ladder', name: 'Ladder Logic', category: 'Programming' },
  { id: 'prog-st', name: 'Structured Text', category: 'Programming' },
  { id: 'prog-c', name: 'C', category: 'Programming' },
  { id: 'prog-cpp', name: 'C++', category: 'Programming' },
  { id: 'prog-csharp', name: 'C#', category: 'Programming' },
  { id: 'prog-dotnet', name: '.NET', category: 'Programming' },
  { id: 'prog-dotnet-fw', name: '.NET Framework', category: 'Programming' },

  // 03 — Automation & Control
  { id: 'auto-plc', name: 'PLC', category: 'Automation & Control' },
  { id: 'auto-softplc', name: 'Soft PLC', category: 'Automation & Control' },
  { id: 'auto-ethercat', name: 'EtherCAT', category: 'Automation & Control' },
  { id: 'auto-motion', name: 'Motion Control', category: 'Automation & Control' },
  { id: 'auto-fpga', name: 'FPGA', category: 'Automation & Control' },
  { id: 'auto-comm', name: 'Industrial Communication', category: 'Automation & Control' },
  { id: 'auto-machine', name: 'Machine Automation', category: 'Automation & Control' },
  { id: 'auto-realtime', name: 'Real-time Systems', category: 'Automation & Control' },
  { id: 'auto-control', name: 'Control Systems', category: 'Automation & Control' },

  // 04 — HMI
  { id: 'hmi-wincc', name: 'WinCC', category: 'HMI' },
  { id: 'hmi-factorytalk', name: 'FactoryTalk', category: 'HMI' },
  { id: 'hmi-ispsoft', name: 'ISP Soft', category: 'HMI' },
  { id: 'hmi-nbdesigner', name: 'NB-Designer', category: 'HMI' },
  { id: 'hmi-proface', name: 'Pro-face', category: 'HMI' },
  { id: 'hmi-diascreen', name: 'DIA Screen', category: 'HMI' },

  // 05 — Research / Engineering Interests
  { id: 'res-softplc', name: 'Soft PLC', category: 'Research & Engineering Interests', isResearch: true },
  { id: 'res-ethercat', name: 'EtherCAT', category: 'Research & Engineering Interests', isResearch: true },
  { id: 'res-motion', name: 'Motion Control', category: 'Research & Engineering Interests', isResearch: true },
  { id: 'res-fpga', name: 'FPGA', category: 'Research & Engineering Interests', isResearch: true },
  { id: 'res-csharp', name: 'C#', category: 'Research & Engineering Interests', isResearch: true },
  { id: 'res-dotnet', name: '.NET', category: 'Research & Engineering Interests', isResearch: true },
  { id: 'res-realtime', name: 'Real-time Control', category: 'Research & Engineering Interests', isResearch: true },
  { id: 'res-arch', name: 'Industrial Software Architecture', category: 'Research & Engineering Interests', isResearch: true }
];

export const technologyCategories: TechnologyCategory[] = [
  {
    id: 'plc',
    index: '01',
    title: 'PLC ECOSYSTEM',
    tagline: 'Hardware controller architectures & industrial platforms',
    description: 'Multi-vendor programmable logic controllers configuring deterministic machine routines, I/O clustering, and robust industrial sequencing.',
    items: technologiesData.filter((t) => t.category === 'PLC')
  },
  {
    id: 'programming',
    index: '02',
    title: 'PROGRAMMING',
    tagline: 'Standard industrial logic & modern software engineering',
    description: 'IEC 61131-3 standard control languages paired with low-level deterministic C/C++ and modern object-oriented C# and .NET frameworks.',
    items: technologiesData.filter((t) => t.category === 'Programming')
  },
  {
    id: 'automation',
    index: '03',
    title: 'AUTOMATION & CONTROL',
    tagline: 'Deterministic motion, high-speed fieldbus & control loops',
    description: 'Core disciplines across real-time control systems, high-speed fieldbus communication, synchronized multi-axis motion, and hardware control.',
    items: technologiesData.filter((t) => t.category === 'Automation & Control')
  },
  {
    id: 'hmi',
    index: '04',
    title: 'HMI',
    tagline: 'Operator interfaces & visualization software',
    description: 'Industrial operator displays, alarm management setups, machine state telemetry screens, and supervisory control visualization packages.',
    items: technologiesData.filter((t) => t.category === 'HMI')
  },
  {
    id: 'research',
    index: '05',
    title: 'RESEARCH / ENGINEERING INTERESTS',
    tagline: 'Active technical investigation & real-time software runtimes',
    description: 'Ongoing technical exploration into PC-based real-time automation, software-defined control architectures, and high-performance determinism.',
    researchNote: 'Active research and technical evaluation area. Includes exploratory investigation of PC-based real-time software runtimes (such as Acontis and KingStar / IntervalZero platforms for deterministic PC-based machine control). Represented strictly as research and engineering interests rather than production claims.',
    isResearch: true,
    items: technologiesData.filter((t) => t.category === 'Research & Engineering Interests')
  }
];
