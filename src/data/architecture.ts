import type { ArchitectureNode } from '../types/portfolio';

/**
 * Conceptual Automation System Architecture
 * STEP 6 verified 7-layer engineering model:
 * HMI -> PLC / SOFT PLC -> INDUSTRIAL NETWORK -> REMOTE I/O -> MOTION CONTROL -> SERVO / ACTUATOR -> MACHINE
 */
export const architectureLayers: ArchitectureNode[] = [
  {
    id: 'layer-hmi',
    layerNumber: '01',
    title: 'HMI',
    categoryLabel: 'OPERATOR INTERFACE',
    purpose: 'Operator interface',
    context: ['WinCC', 'FactoryTalk', 'ISP Soft', 'NB-Designer', 'Pro-face', 'DIA Screen'],
    responsibility: 'Operator interaction and machine visualization',
    signalDirection: 'Operator Control & Visualization Data'
  },
  {
    id: 'layer-plc',
    layerNumber: '02',
    title: 'PLC / Soft PLC',
    categoryLabel: 'CONTROL LOGIC',
    purpose: 'Control logic',
    context: ['Siemens', 'Inovance', 'CODESYS / Soft PLC', 'Ladder Logic', 'Structured Text'],
    responsibility: 'Machine control and sequencing',
    signalDirection: 'Deterministic Sequence & Interlock Logic'
  },
  {
    id: 'layer-network',
    layerNumber: '03',
    title: 'Industrial Network',
    categoryLabel: 'SYSTEM COMMUNICATION',
    purpose: 'System communication',
    context: ['EtherCAT', 'Industrial Communication'],
    responsibility: 'Exchange of control and device data',
    signalDirection: 'Real-Time Deterministic Fieldbus'
  },
  {
    id: 'layer-io',
    layerNumber: '04',
    title: 'Remote I/O',
    categoryLabel: 'MACHINE SIGNAL INTERFACE',
    purpose: 'Machine signal interface',
    context: ['Field Signal Coupling', 'Digital & Analog Distribution'],
    responsibility: 'Connect field signals to the control system',
    signalDirection: 'Field Sensor & Transducer Coupling'
  },
  {
    id: 'layer-motion',
    layerNumber: '05',
    title: 'Motion Control',
    categoryLabel: 'COORDINATED MOVEMENT',
    purpose: 'Coordinated movement',
    context: ['EtherCAT', 'Motion Control'],
    responsibility: 'Motion commands and coordination',
    signalDirection: 'Interpolated Motion Command Loops'
  },
  {
    id: 'layer-actuator',
    layerNumber: '06',
    title: 'Servo / Actuator',
    categoryLabel: 'PHYSICAL MOVEMENT',
    purpose: 'Physical movement',
    context: ['Servo Drives', 'Electric & Pneumatic Actuation'],
    responsibility: 'Convert control commands into machine movement',
    signalDirection: 'Electromechanical Power & Drive Signal'
  },
  {
    id: 'layer-machine',
    layerNumber: '07',
    title: 'Machine',
    categoryLabel: 'PHYSICAL AUTOMATION PROCESS',
    purpose: 'Physical automation process',
    context: ['Automated Mechanism', 'End Effectors & Tooling'],
    responsibility: 'Execute the intended machine operation',
    signalDirection: 'Physical Workpiece & Process Execution'
  }
];
