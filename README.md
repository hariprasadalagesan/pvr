# LogicMM — Personal Engineering Portfolio

> **Prasanna Venkat Ramana I — Automation Engineer**
> *"I build industrial automation systems across PLCs, HMI, industrial communication, motion control and software."*

**Live URL**: [https://logicmm.com/](https://logicmm.com/)  
**LinkedIn**: [https://www.linkedin.com/in/logicmm](https://www.linkedin.com/in/logicmm)  
**Location**: Bengaluru, Karnataka, India  

---

## Technical Overview

LogicMM is a personal engineering portfolio presenting verified industrial automation engineering records, system architecture models, machine control workflows, and automation software integration.

### Core Engineering Areas
- **Programmable Logic Controllers (PLCs)**: Deterministic cyclic execution, fault handling, ladder logic, and structured text (Siemens, Inovance, Delta).
- **Human-Machine Interfaces (HMI)**: Industrial visualization, alarm logging, recipe management, and operator telemetry.
- **Industrial Communication**: Fieldbus networking across EtherCAT, Modbus RTU/TCP, and serial protocols.
- **Motion Control**: Multi-axis coordinated Cartesian motion, servo drives, position verification, and homing routines.
- **Automation Software**: Bridging real-time industrial controllers with modern C# / .NET architecture and supervisory systems.

---

## Architecture & Technology Stack

The portfolio is built as a deterministic, responsive, high-performance web application:

- **Core Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build System & Dev Server**: [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Styling & Design System**: [Tailwind CSS v4](https://tailwindcss.com/) with an industrial dark/light semantic token system
- **Motion System**: [Framer Motion](https://www.framer.com/motion/) with standardized industrial timing curves and full `prefers-reduced-motion` compliance
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` or `pnpm`

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/hariprasadalagesan/pvr1.1.git
cd pvr1.1
npm install
```

### Local Development
Start the local development server:
```bash
npm run dev
```
The site will run at `http://localhost:5173/`.

### Production Build & Validation
To compile TypeScript and produce an optimized production bundle:
```bash
npm run build
```

To run lint checks:
```bash
npm run lint
```

To preview the production build locally:
```bash
npm run preview
```

---

## Verified Case Studies
1. **Vacuum Distillation**: Industrial automation system for automated solvent recovery and vacuum distillation control.
2. **Vision Inspection**: Inline automated quality inspection station integrating optical sensors and high-speed rejection.
3. **Ultrasonic Cleaning**: Multi-stage industrial ultrasonic cleaning machines across standard production and custom SPM configurations.
4. **Linear Robot**: Multi-axis Cartesian linear robot mechanism for industrial positioning and handling.
5. **Bespoke Machine Automation**: Special-purpose machine (SPM) automation engineered for custom manufacturing operations.

---

## License & Copyright

© LogicMM. All rights reserved. Content represents verified engineering work of Prasanna Venkat Ramana I.
