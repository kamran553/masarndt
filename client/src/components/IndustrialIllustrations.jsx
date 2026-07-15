import React from 'react'

/**
 * Premium SVG Blueprint of an Oil Refinery Distillation & Process Complex.
 * Displays fractional columns, pipeline links, storage spheres, and dimensions.
 */
export function RefineryHeroIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 600 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} w-full h-full text-steel-400`}
    >
      {/* Background blueprint alignment grid */}
      <defs>
        <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(148, 163, 184, 0.08)" strokeWidth="1" />
        </pattern>
        
        {/* Flow gradient animation */}
        <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d3401f" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#d3401f" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#d3401f" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid-pattern)" />

      {/* Main Distillation Tower Left */}
      <g className="tower-1">
        {/* Foundation */}
        <rect x="100" y="380" width="80" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <rect x="110" y="360" width="60" height="20" fill="rgba(148, 163, 184, 0.03)" stroke="currentColor" strokeWidth="1.5" />
        
        {/* Main Column Cylinder */}
        <rect x="115" y="120" width="50" height="240" fill="rgba(148, 163, 184, 0.02)" stroke="currentColor" strokeWidth="2" />
        
        {/* Dome Top */}
        <path d="M 115 120 C 115 90, 165 90, 165 120 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        
        {/* Tower Internal Trays (Fractional Distillation levels) */}
        <line x1="115" y1="160" x2="165" y2="160" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 2" />
        <line x1="115" y1="200" x2="165" y2="200" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 2" />
        <line x1="115" y1="240" x2="165" y2="240" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 2" />
        <line x1="115" y1="280" x2="165" y2="280" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 2" />
        <line x1="115" y1="320" x2="165" y2="320" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 2" />

        {/* Level Dimension indicators */}
        <path d="M 90 120 L 80 120 L 80 360 L 90 360" stroke="currentColor" strokeWidth="1" />
        <text x="55" y="245" className="font-mono text-[9px] fill-slate-400 font-medium">H: 36.4m</text>
      </g>

      {/* Process Tower Right */}
      <g className="tower-2">
        <rect x="230" y="370" width="50" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="235" y="220" width="40" height="150" fill="rgba(148, 163, 184, 0.02)" stroke="currentColor" strokeWidth="2" />
        <path d="M 235 220 C 235 200, 275 200, 275 220 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        
        {/* Platform walkways */}
        <line x1="220" y1="260" x2="290" y2="260" stroke="currentColor" strokeWidth="1.5" />
        <line x1="220" y1="310" x2="290" y2="310" stroke="currentColor" strokeWidth="1.5" />
      </g>

      {/* Flare Stack Right */}
      <g className="flare">
        <line x1="480" y1="380" x2="480" y2="80" stroke="currentColor" strokeWidth="2.5" />
        {/* Support Truss structures */}
        <line x1="480" y1="380" x2="450" y2="380" stroke="currentColor" strokeWidth="1.5" />
        <line x1="480" y1="260" x2="455" y2="260" stroke="currentColor" strokeWidth="1.2" />
        <line x1="480" y1="140" x2="465" y2="140" stroke="currentColor" strokeWidth="1.2" />
        
        <line x1="450" y1="380" x2="455" y2="260" stroke="currentColor" strokeWidth="1" />
        <line x1="455" y1="260" x2="465" y2="140" stroke="currentColor" strokeWidth="1" />
        <line x1="465" y1="140" x2="480" y2="80" stroke="currentColor" strokeWidth="1" />

        {/* Flare flame (SVG pulse animation) */}
        <path
          d="M 480 80 C 470 50, 480 30, 480 20 C 480 30, 490 50, 480 80 Z"
          fill="rgba(211, 64, 31, 0.25)"
          stroke="#d3401f"
          strokeWidth="1.5"
          className="animate-pulse"
        />
      </g>

      {/* Spherical Gas Storage Tank Center-Right */}
      <g className="sphere">
        {/* Support pillars */}
        <line x1="330" y1="380" x2="350" y2="330" stroke="currentColor" strokeWidth="1.5" />
        <line x1="370" y1="380" x2="370" y2="330" stroke="currentColor" strokeWidth="1.5" />
        <line x1="410" y1="380" x2="390" y2="330" stroke="currentColor" strokeWidth="1.5" />
        
        {/* Sphere body */}
        <circle cx="370" cy="300" r="45" fill="rgba(148, 163, 184, 0.02)" stroke="currentColor" strokeWidth="2" />
        
        {/* Label Tag */}
        <rect x="345" y="290" width="50" height="15" fill="#faf8f2" stroke="currentColor" strokeWidth="1" />
        <text x="352" y="301" className="font-mono text-[8px] fill-slate-800 font-bold uppercase tracking-wider">TK-402</text>
      </g>

      {/* Piping Networks connecting columns */}
      <g className="pipelines" stroke="currentColor" strokeWidth="2" fill="none">
        {/* Horizontal Overhead Pipetrack */}
        <path d="M 140 90 L 140 70 L 255 70 L 255 200" />
        <path d="M 275 250 L 330 250 M 330 250 L 330 380" />
        
        {/* Process Loop Left */}
        <path d="M 165 160 L 200 160 L 200 340 L 165 340" strokeWidth="1.5" />
        <circle cx="200" cy="250" r="4" fill="#faf8f2" stroke="#d3401f" strokeWidth="2" />
        <text x="210" y="253" className="font-mono text-[7.5px] fill-signal-600 font-semibold uppercase">NDT SENSOR-01</text>
      </g>

      {/* Scanning laser sweep lines representation */}
      <line x1="50" y1="100" x2="550" y2="100" stroke="rgba(211, 64, 31, 0.15)" strokeWidth="1.5" strokeDasharray="5 5" />
      <line x1="50" y1="200" x2="550" y2="200" stroke="rgba(211, 64, 31, 0.15)" strokeWidth="1.5" strokeDasharray="5 5" />
      <line x1="50" y1="300" x2="550" y2="300" stroke="rgba(211, 64, 31, 0.15)" strokeWidth="1.5" strokeDasharray="5 5" />
    </svg>
  )
}

/**
 * Conventional NDT Illustration: Ultrasonic/Radiography weld scan.
 */
export function ConventionalNdtIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} text-steel-400`}>
      <defs>
        <pattern id="grid-sm" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(148, 163, 184, 0.05)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-sm)" />

      {/* Pipe Wall Cross Section */}
      <rect x="50" y="90" width="300" height="70" fill="rgba(148, 163, 184, 0.03)" stroke="currentColor" strokeWidth="2" />
      
      {/* Weld Joint in the Middle */}
      <path d="M 190 90 L 195 160 M 210 90 L 205 160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <polygon points="190,90 210,90 205,160 195,160" fill="rgba(211, 64, 31, 0.05)" stroke="currentColor" strokeWidth="1" />
      <text x="188" y="80" className="font-mono text-[8px] fill-slate-500 font-bold">WELD JOINT</text>

      {/* UT Probe Transducer */}
      <g className="probe">
        <rect x="110" y="60" width="35" height="30" fill="#faf8f2" stroke="currentColor" strokeWidth="2" />
        <rect x="117" y="45" width="21" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 127 45 L 127 25 L 90 25" stroke="currentColor" strokeWidth="1.5" fill="none" />
        
        {/* Refracted Sound Waves */}
        <path d="M 127 90 L 160 125 L 197 90" stroke="#d3401f" strokeWidth="1.5" strokeDasharray="3 1.5" fill="none" />
        <path d="M 127 90 L 175 160" stroke="#d3401f" strokeWidth="1.5" strokeDasharray="4 2" fill="none" />

        <circle cx="160" cy="125" r="4" fill="#faf8f2" stroke="#d3401f" strokeWidth="1.5" />
        <text x="145" y="140" className="font-mono text-[7px] fill-signal-600 font-bold">FLAW DETECTED</text>
      </g>

      <text x="50" y="200" className="font-mono text-[8.5px] fill-slate-400 uppercase tracking-widest font-semibold">METHOD: ULTRASONIC TESTING (UT) / D-SCAN</text>
      <text x="50" y="215" className="font-mono text-[7.5px] fill-slate-400">PROCEDURE: ASME SEC V ART. 4 COMPLIANT</text>
    </svg>
  )
}

/**
 * Advanced NDT Illustration: Heat Exchanger Tube inspection probe array.
 */
export function AdvancedNdtIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} text-steel-400`}>
      <defs>
        <pattern id="grid-hex" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(148, 163, 184, 0.05)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-hex)" />

      {/* Heat Exchanger Shell Profile */}
      <rect x="60" y="60" width="280" height="130" rx="10" fill="rgba(148, 163, 184, 0.02)" stroke="currentColor" strokeWidth="2" />
      <line x1="120" y1="60" x2="120" y2="190" stroke="currentColor" strokeWidth="1.5" />
      <line x1="280" y1="60" x2="280" y2="190" stroke="currentColor" strokeWidth="1.5" />

      {/* Internal Tube sheet arrays */}
      <g className="tube-sheets" stroke="currentColor" strokeWidth="1">
        <line x1="120" y1="80" x2="280" y2="80" strokeDasharray="3 3" />
        <line x1="120" y1="100" x2="280" y2="100" />
        <line x1="120" y1="120" x2="280" y2="120" strokeDasharray="3 3" />
        <line x1="120" y1="140" x2="280" y2="140" />
        <line x1="120" y1="160" x2="280" y2="160" strokeDasharray="3 3" />
      </g>

      {/* Eddy Current Probe Inserting */}
      <g className="probe-cable">
        <path d="M 360 100 L 300 100 Q 290 100 290 110 L 290 130 C 290 140, 270 140, 270 140 L 210 140" fill="none" stroke="#d3401f" strokeWidth="2" />
        <rect x="200" y="133" width="15" height="14" fill="#faf8f2" stroke="#d3401f" strokeWidth="1.5" />
        
        {/* Electromagnetic coil lines */}
        <circle cx="207" cy="140" r="10" stroke="#d3401f" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
      </g>

      <text x="60" y="215" className="font-mono text-[8.5px] fill-slate-400 uppercase tracking-widest font-semibold">TESTING: EDDY CURRENT TUBE TESTING (ECT) / RFT</text>
      <text x="60" y="228" className="font-mono text-[7.5px] fill-slate-400">TARGET: HEAT EXCHANGER / BOILER TUBING ARRAY</text>
    </svg>
  )
}

/**
 * Asset Integrity Engineering: Stress mesh FEA analysis plot.
 */
export function AssetIntegrityIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} text-steel-400`}>
      {/* Pipe Bend Elbow */}
      <path
        d="M 60 190 L 160 190 C 210 190, 250 150, 250 100 L 250 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="35"
        strokeLinecap="square"
        opacity="0.05"
      />
      
      {/* Core line alignment */}
      <path
        d="M 60 190 L 160 190 C 210 190, 250 150, 250 100 L 250 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />

      {/* Finite Element Mesh overlay grids on the elbow bend area */}
      <g className="fea-mesh" stroke="currentColor" strokeWidth="0.8" opacity="0.6">
        {/* Vertical slices */}
        <path d="M 140 165 L 140 215" />
        <path d="M 160 165 L 160 215" />
        <path d="M 180 160 L 195 205" />
        <path d="M 200 150 L 225 190" />
        <path d="M 215 135 L 245 165" />
        <path d="M 225 115 L 265 130" />
        <path d="M 230 95 L 280 95" />

        {/* Horizontal grid lines */}
        <path d="M 120 172 C 160 172, 232 140, 232 90" />
        <path d="M 120 180 C 160 180, 240 140, 240 90" />
        <path d="M 120 190 C 160 190, 250 150, 250 90" />
        <path d="M 120 200 C 160 200, 260 160, 260 90" />
        <path d="M 120 208 C 160 208, 268 160, 268 90" />
      </g>

      {/* High stress heatmap nodes (RBI analysis highlight) */}
      <g className="stress-point">
        <circle cx="210" cy="155" r="18" fill="rgba(211, 64, 31, 0.15)" stroke="#d3401f" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="210" cy="155" r="6" fill="#d3401f" />
        
        <path d="M 210 155 L 280 155 L 295 140" stroke="#d3401f" strokeWidth="1" fill="none" />
        <rect x="295" y="125" width="85" height="30" rx="4" fill="#faf8f2" stroke="#d3401f" strokeWidth="1.2" />
        <text x="302" y="138" className="font-mono text-[7px] fill-slate-800 font-bold">STRESS DETECTED</text>
        <text x="302" y="148" className="font-mono text-[7px] fill-signal-600 font-bold">MAX: 245.8 MPa</text>
      </g>

      <text x="60" y="215" className="font-mono text-[8.5px] fill-slate-400 uppercase tracking-widest font-semibold">ANALYSIS: RISK-BASED INSPECTION (RBI) / FEA MODEL</text>
      <text x="60" y="228" className="font-mono text-[7.5px] fill-slate-400">PROCEDURE: API 580 / API 581 ENGINEERING CODES</text>
    </svg>
  )
}

/**
 * Shutdown & Turnaround planning Gantt schedule chart overlay.
 */
export function InspectionIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} text-slate-400`}>
      <defs>
        <pattern id="grid-timeline" width="40" height="20" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 20" fill="none" stroke="rgba(148, 163, 184, 0.05)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-timeline)" />

      {/* Gantt Outline */}
      <rect x="40" y="40" width="320" height="150" fill="rgba(255, 255, 255, 0.5)" stroke="currentColor" strokeWidth="1.5" />
      <line x1="140" y1="40" x2="140" y2="190" stroke="currentColor" strokeWidth="1.2" />

      {/* Row Labels */}
      <g className="labels" font-family="monospace" font-size="8" fill="currentColor">
        <text x="48" y="70">01. PRE-SHUTDOWN</text>
        <text x="48" y="105">02. NDT WORKLOAD</text>
        <text x="48" y="140">03. VESSEL TEST</text>
        <text x="48" y="175">04. FINAL SIGN-OFF</text>
      </g>

      {/* Timeline scheduling bars */}
      <g className="bars">
        {/* Task 1 */}
        <rect x="150" y="62" width="60" height="12" rx="3" fill="rgba(148, 163, 184, 0.3)" stroke="currentColor" strokeWidth="1" />
        {/* Task 2 */}
        <rect x="190" y="97" width="110" height="12" rx="3" fill="rgba(211, 64, 31, 0.15)" stroke="#d3401f" strokeWidth="1.2" />
        <circle cx="300" cy="103" r="3" fill="#d3401f" />
        {/* Task 3 */}
        <rect x="250" y="132" width="70" height="12" rx="3" fill="rgba(148, 163, 184, 0.3)" stroke="currentColor" strokeWidth="1" />
        {/* Task 4 */}
        <rect x="310" y="167" width="40" height="12" rx="3" fill="rgba(148, 163, 184, 0.3)" stroke="currentColor" strokeWidth="1" strokeDasharray="3 1.5" />
      </g>

      {/* Milestone tag */}
      <path d="M 285 75 L 285 97" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
      <rect x="260" y="50" width="50" height="15" rx="3" fill="#faf8f2" stroke="currentColor" strokeWidth="1" />
      <text x="265" y="60" className="font-mono text-[7px] fill-slate-700 font-bold uppercase">CRITICAL PATH</text>
    </svg>
  )
}

/**
 * Manpower mobilization flow hierarchy layout.
 */
export function ManpowerIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} text-slate-400`}>
      {/* Hierarchy Nodes */}
      {/* Node 1: Project Inspection Manager */}
      <g className="node-1">
        <rect x="135" y="25" width="130" height="35" rx="4" fill="#faf8f2" stroke="currentColor" strokeWidth="1.5" />
        <text x="145" y="40" className="font-mono text-[8px] fill-slate-800 font-bold">PROJECT MANAGER</text>
        <text x="145" y="50" className="font-mono text-[7px] fill-signal-600 font-semibold uppercase">API 570 / 510 SPEC</text>
      </g>

      {/* Split lines */}
      <path d="M 200 60 L 200 95" stroke="currentColor" strokeWidth="1.2" />
      <path d="M 100 95 L 300 95 L 300 115 M 100 95 L 100 115" fill="none" stroke="currentColor" strokeWidth="1.2" />

      {/* Node 2 Left: NDT Level III inspector */}
      <g className="node-2-left">
        <rect x="40" y="115" width="120" height="35" rx="4" fill="#faf8f2" stroke="currentColor" strokeWidth="1.5" />
        <text x="48" y="130" className="font-mono text-[8px] fill-slate-800 font-bold">LEVEL III INSPECTOR</text>
        <text x="48" y="140" className="font-mono text-[7px] fill-slate-500 uppercase">ASNT UT/RT COMPLIANCE</text>
      </g>

      {/* Node 2 Right: API Certified Engineer */}
      <g className="node-2-right">
        <rect x="240" y="115" width="120" height="35" rx="4" fill="#faf8f2" stroke="currentColor" strokeWidth="1.5" />
        <text x="248" y="130" className="font-mono text-[8px] fill-slate-800 font-bold">API 653 ENGINEER</text>
        <text x="248" y="140" className="font-mono text-[7px] fill-slate-500 uppercase">TANK INTEGRITY SPEC</text>
      </g>

      {/* Sub nodes connectors */}
      <path d="M 100 150 L 100 185" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
      <path d="M 300 150 L 300 185" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />

      {/* Node 3 Left: Field Technicians */}
      <g className="node-3-left">
        <rect x="35" y="185" width="130" height="30" rx="4" fill="rgba(148, 163, 184, 0.05)" stroke="currentColor" strokeWidth="1" />
        <text x="43" y="198" className="font-mono text-[7.5px] fill-slate-700 font-semibold">NDT TECH TEAM (x14)</text>
        <text x="43" y="208" className="font-mono text-[6.5px] fill-slate-400 uppercase font-medium">ASNT UT/PT/MT OPERATORS</text>
      </g>

      {/* Node 3 Right: Site Coordinators */}
      <g className="node-3-right">
        <rect x="235" y="185" width="130" height="30" rx="4" fill="rgba(211, 64, 31, 0.03)" stroke="currentColor" strokeWidth="1" />
        <text x="243" y="198" className="font-mono text-[7.5px] fill-signal-600 font-semibold">COORDINATORS (x3)</text>
        <text x="243" y="208" className="font-mono text-[6.5px] fill-slate-400 uppercase font-medium">SHUTDOWN MOBILIZATION</text>
      </g>
    </svg>
  )
}
