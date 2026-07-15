// Centralized site copy, sourced from Masar NDTS Company LLC / Masar NDT reference documents.
// Edit this file to update text across the whole site.

export const company = {
  name: 'Masar NDT',
  legalName: 'Masar NDTS Company LLC',
  tagline: 'Inspection. Integrity. Assurance.',
  intro:
    'Masar NDT (Masar NDTS Company LLC) is an ISO 9001:2015 certified inspection, NDT and asset-integrity engineering organisation, delivering accurate, first-time-right results across the Kingdom of Saudi Arabia and India.',
  mission:
    'We strive to render services reflective of our efficiency and are committed to providing superior quality and results.',
  vision:
    'We aim to provide our clients with outstanding service, value, and quality — through total commitment to exceeding client expectations, personal attention, dedication, and hard work.',
  about: [
    'Masar NDTS Company LLC is an ISO 9001:2015 certified company and a trusted name for vigorous, sustainable, and tailored facilities-management and technical services to public and private organisations, creating value through expertise since 2021.',
    'Masar NDTS Company LLC is a leader in Inspection, NDT, Advanced NDT, Trading, Filtration Systems, Construction and Facility Management, translating professionalism and excellence into every engagement.',
    'Whatever the challenge — difficult access locations, large industrial sites, Upstream, Downstream, Midstream, Marine, Energy & Power, laboratories, plants and factories — Masar NDT brings the engineers, inspectors, field technicians, trade professionals and technology to get the job done right.',
  ],
}

export const offices = [
  {
    label: 'Saudi Arabia Office',
    lines: [
      'Building No. 4258, Al Safat District,',
      'Al Jubail – 35514, Kingdom of Saudi Arabia',
    ],
    mobile: '+966 50 049 6073',
    email: 'sales@masarndt.com',
    website: 'www.masarndt.com',
  },
  {
    label: 'India Office',
    lines: ['Masar NDTS Company LLC'],
    mobile: null,
    email: 'inquiry@akmecgroup.com',
    website: 'www.akmecgroup.com',
  },
]

export const stats = [
  { value: '150+', label: 'VT Level II / III Inspectors' },
  { value: '400+', label: 'API Certified Inspectors' },
  { value: '90,000+', label: 'Manpower Resume Database' },
  { value: 'ISO 9001:2015', label: 'Certified Organisation' },
]

// ---------------- SERVICE CATEGORIES (for nav + home overview) ----------------
export const serviceCategories = [
  {
    id: 'inspection',
    tag: 'SEC. 01',
    title: 'Inspection & Audit',
    summary:
      'Shutdown, turnaround inspection and planning — a one-stop shop that reduces cost and time spent on outside resources.',
    path: '/services/inspection',
  },
  {
    id: 'conventional-ndt',
    tag: 'SEC. 02',
    title: 'Conventional NDT',
    summary:
      'Penetrant, Magnetic Particle, Ultrasonic, Holiday, Ferrite, Visual, Hardness, Vacuum Box testing and metallography.',
    path: '/services/conventional-ndt',
  },
  {
    id: 'advanced-ndt',
    tag: 'SEC. 03',
    title: 'Advanced NDT',
    summary:
      'PMI, Eddy Current, Remote Field, Magnetic Flux Leakage, IRIS, Boroscopic Inspection and Thermography.',
    path: '/services/advanced-ndt',
  },
  {
    id: 'asset-integrity',
    tag: 'SEC. 04',
    title: 'Asset Integrity Engineering',
    summary:
      'Corrosion loop development, RBI studies, fitness-for-service, RCA/RLA and full inspection-data management.',
    path: '/services/asset-integrity',
  },
  {
    id: 'manpower',
    tag: 'SEC. 05',
    title: 'Manpower & Outsourcing',
    summary:
      'Qualified, well-trained technical and non-technical manpower for shutdowns, EPC, O&M and turnkey projects.',
    path: '/services/manpower',
  },
]

// ---------------- 1. INSPECTION & AUDIT ----------------
export const inspection = {
  title: 'Inspection & Audit',
  tag: 'SEC. 01 — INSPECTION',
  lead:
    'Masar NDTS Company LLC is an ISO 9001:2015 approved certified inspection organisation. We deliver accurate, reliable results the first time, every time — improving productivity, saving time and lowering costs.',
  body: [
    'Our solutions are designed to meet your precise requirements for reliability, timeliness and cost-efficiency. No matter what integrity challenge you face, you can rely on Masar NDT to have the engineers, inspectors, field technicians, trade people and technology to get the job done right.',
    'Whatever your challenge, we have the answer — in difficult access locations, large industrial sites, Upstream, Downstream, Midstream, Marine, Energy & Power, laboratories, plants and factories. Wherever you need us.',
  ],
  servicesList: [
    'Second Party Inspection',
    'Third Party Inspection',
    'Expediting',
    'Audit & Compliance Reviews',
    'Vendor / Source Inspection',
    'Quantity Survey',
    'Pre-Shipment Inspection',
    'Quality Assurance & Control',
    'Lab Test Witness and Inspection',
    'NDT Inspector (ASNT, PCN and ISO)',
    'EPC and Turnkey Project Inspection',
    'Shutdown / Turnaround Inspection',
    'In-Service Inspection',
    'Fuel Tanker and Truck Inspection',
    'ISO Inspector and Auditor',
    'RTFI (Radiographic Testing Film Interpretation)'
  ],
  approvedCategories: [
    {
      group: 'Client Approvals & Accreditations',
      items: [
        'ARAMCO (PID, VID, QM approved)',
        'SABIC',
        'ADNOC',
        'ORPIC',
        'FLUOR & Chevron',
        'ISO 9001, 9712, 22000, etc.'
      ]
    },
    {
      group: 'Inspector Certifications',
      items: [
        'API Certified (API-510, API-570, API-653, API-580, API-571, API-936, API-982, API-1169, API-1104, Q1, Q2, etc.)',
        'Painting / Coating: NACE, BGAS, AMPP & FROSIO',
        'Welding Inspection: CSWIP, AWS and CWI'
      ]
    },
    {
      group: 'Technical & Craft Disciplines',
      items: [
        'Electrical & Instrumentation (E&I) & CompEx',
        'Scaffolding & Structural Inspection',
        'Material & HVAC Systems',
        'Bridge & Tunnel, Static, Piping, Fittings, Structure, Pipeline, Tank, Rotary, Cargo, Container, Lifting equipment, etc.'
      ]
    }
  ],
  highlight: {
    title: 'Specialized in Shutdown & Turnaround Inspection and Planning',
    body: [
      'Masar NDTS Company LLC allows a "one-stop shop" for the client, reducing cost and time spent acquiring outside resources.',
      'Planning the turnaround is one of the most important steps toward a successful turnaround. Our experienced team of inspectors and planners assists clients at the planning stage, and we staff all inspection crafts necessary to plan any size turnaround.',
      'The final and major step for any successful turnaround is the post-turnaround work and documentation. Masar NDT ensures all inspection activities are properly updated and documented per API, ASME PCC and/or client-specific standards and guidelines — including Pre-Startup Audits, updating existing mechanical-integrity programs, and participating in post-turnaround reviews.',
    ],
  },
}

// ---------------- 2. CONVENTIONAL NDT ----------------
export const conventionalNdt = {
  title: 'Conventional NDT',
  tag: 'SEC. 02 — CONVENTIONAL NDT',
  lead:
    'A full suite of established, code-compliant testing methods for pipes, structures, pressure vessels and process equipment on construction projects and process plants.',
  methods: [
    {
      code: '2.1',
      name: 'Penetrant Testing (PT)',
      description:
        'Inspection of surface discontinuities in materials and welds of pipes, structures, pressure vessels and other process equipment.',
      advantages: [
        'Efficient, portable, fast, relatively inexpensive and does not require high-technology equipment',
        'Easy to inspect parts with complex shapes, large areas and large volumes of parts',
        'Able to test a wide range of materials, including ferritic and composite items',
        'Indicates the relative shape, size and depth of a flaw',
        'High sensitivity to small surface discontinuities',
      ],
      limitations: [
        'Surface finish and roughness can affect inspection sensitivity',
        'Only surface-breaking defects can be detected',
        'Chemical handling and proper disposal is required',
        'Requires direct access to the surfaces to be examined',
        'Cannot examine porous surfaces',
      ],
    },
    {
      code: '2.2',
      name: 'Magnetic Particle Testing (MT)',
      description:
        'Surface and subsurface discontinuity testing using permanent or electromagnetic yokes on pipes, pressure vessels and process equipment.',
      advantages: [
        'Can detect both surface and near sub-surface defects',
        'Some inspection formats are extremely portable and low cost',
        'Indications are visible to the inspector directly on the specimen surface',
        'Relatively safe technique; materials generally not combustible or hazardous',
        'Rapid inspection with immediate results',
        'Can inspect parts with irregular shapes',
      ],
      limitations: [
        'The specimen must be ferromagnetic material',
        'Not always effective on parts with complex surface geometry',
        'Alignment between magnetic flux and defect is important',
      ],
    },
    {
      code: '2.3',
      name: 'Ultrasonic Testing (UT)',
      description:
        'Shear-wave inspection of castings and welds in piping, plate, vessels and process equipment, plus longitudinal-wave thickness measurement, corrosion scanning and mapping — used across Oil & Gas, petrochemical, chemical, fertilizer, marine, aerospace, automotive, construction, medical, metallurgy and manufacturing.',
      advantages: [
        'High penetration power, allowing flaw detection deep within a part',
        'High sensitivity, allowing detection of very small flaws',
        'Can be used when only one side of an object is accessible',
        'Greater accuracy for determining depth of internal flaws and thickness of parallel-surface parts',
        'Able to estimate size, shape, orientation and nature of defects',
        'Non-hazardous to nearby personnel, equipment or materials',
        'Highly automated and portable operations possible',
        'Immediate results allow immediate decisions',
      ],
      limitations: [
        'Requires experienced technicians for inspection and data interpretation',
        'Rough, irregularly shaped, very small, thin, or non-homogeneous objects are difficult to inspect',
        'Reduced sensitivity for volumetric flaws, particularly metal inclusions, versus radiographic testing',
      ],
    },
    {
      code: '2.4',
      name: 'Holiday / Spark Testing',
      description:
        'Checks for inconsistencies such as pinholes, discontinuities, holidays and voids in coatings covering metallic surfaces. A voltage applied across metal fibres on the coated surface creates a spark wherever a holiday exposes the underlying metal — critical for anti-corrosive coating applications, since undetected holidays leave the surface prone to corrosion.',
    },
    {
      code: '2.5',
      name: 'Ferrite Testing',
      description:
        'Fast, inexpensive and accurate on-site measurement of ferrite percentage in stainless steel — specifically austenitic and duplex grades — to ensure proper toughness, corrosion resistance and crack prevention. Results are interpreted per API 938C, API 582, NACE MR0175, NACE MR0103 and/or customer requirements. In austenitic weld metal ferrite influences mechanical properties, weldability and corrosion resistance; in duplex stainless steels it influences mechanical properties and corrosion performance.',
    },
    {
      code: '2.6',
      name: 'Visual Inspection (VT)',
      description:
        'The original and most effective NDT technique for detecting surface defects. Our inspectors bring a deep understanding of applicable code requirements, products, processes, service conditions and acceptance criteria — backed by over 150 VT Level II/III inspectors and 400 API-certified inspectors.',
      uses: [
        'Welding inspection',
        'API tank, pressure vessel and process piping inspections',
        'Quality assurance during manufacture or repair',
        'Coating inspection',
        'Lift/aerial equipment inspection',
        'On-site surveillance',
      ],
    },
    {
      code: '2.7',
      name: 'Hardness Testing',
      description:
        'Provides a relevant indication of strength, wear resistance and other material properties, using the latest hardness-testing technology for reliable, on-the-spot results.',
    },
    {
      code: '2.8',
      name: 'Vacuum Box Testing',
      description:
        'Locates weld-seam leaks using a vacuum box and compressor to create a pressure envelope while a detergent solution is applied; leaks become visible as bubbles. Systems comply with ASTM E515, with inspections conducted per ASME Section V Article 10, Appendix II or client specification.',
      advantages: [
        'Provides an immediate visual indication of the location of any leaks present',
        'Can detect small leaks within a given area',
      ],
      limitations: [
        'Size and orientation of leaks must be analyzed with a secondary NDT method',
        'Surface temperature of the test material must be between 5°C and 50°C, unless a procedure effective outside this range is demonstrated',
      ],
    },
    {
      code: '2.9',
      name: 'Metallography',
      description:
        'Used across the lifetime of a component — from initial materials development through inspection, production, manufacturing process control and failure analysis — to ensure product reliability. Steps include sampling, specimen preparation (sectioning, mounting, grinding, polishing, etching), microscopic observation, digital imaging and quantitative data extraction.',
    },
    {
      code: '2.10',
      name: 'NDT Procedure Qualification',
      description:
        'Conventional NDT procedure review and approval by a certified Level III, outlining all requirements from codes, specifications and/or standards to ensure inspection requirements are met.',
      uses: ['Procedures', 'Inspection Equipment', 'Inspection Personnel', 'Documentation'],
    },
  ],
}

// ---------------- 3. ADVANCED NDT ----------------
export const advancedNdt = {
  title: 'Advanced NDT',
  tag: 'SEC. 03 — ADVANCED NDT',
  lead:
    'Specialised, high-technology inspection techniques for tubing, heat exchangers and hard-to-reach assets, delivered by an in-house team of advanced-NDT specialists.',
  methods: [
    {
      code: '3.1',
      name: 'Positive Material Identification (PMI)',
      description:
        'On-the-spot chemical-composition verification, certified in a written report, confirming that metallic parts contain the correct percentage of key elements so properties such as corrosion resistance meet requirements. Used across oil & gas, power generation, chemical, pharmaceutical, nuclear, aerospace and metal fabrication for quality control and safety compliance.',
      advantages: [
        'Rapid non-destructive verification that supplied materials conform to proper standards and specifications',
        'Finds potentially mixed-up alloys',
        'Identifies if the wrong material has been used',
        'Ensures welded components use the correct filler material',
        'Ensures products and components are manufactured with the correct alloy',
      ],
    },
    {
      code: '3.2',
      name: 'Eddy Current Testing (ECT)',
      description:
        'Rapid, accurate electromagnetic-induction technique to detect discontinuities in tubing, heat exchangers, condensers, steam generators, air coolers, feed-water heaters, wires and plates — including very small cracks in or near the surface, with minimal surface preparation. Our equipment operates at test frequencies up to 8 kHz with inspection speeds up to 2 metres per second.',
      note:
        'Prior to testing, tubes are cleaned via hydro-jetting (typical pressures 280–560 kg/cm²) and cleaning adequacy is verified with a dummy probe/rod. Signals from the tubes under test are compared against calibration-standard signals by expert technicians.',
    },
    {
      code: '3.3',
      name: 'Remote Field Eddy Current Testing (RFET)',
      description:
        'Electromagnetic method for detecting and sizing wall thinning caused by corrosion, erosion, wear, pitting and baffle cuts in ferromagnetic tubes of boilers, feed-water heaters, air coolers and carbon-steel heat exchangers — often combined with Near Field Testing (NFT) depending on equipment capability.',
    },
    {
      code: '3.4',
      name: 'Magnetic Flux Leakage (MFL) Testing',
      description:
        'Electromagnetic technique that magnetises the conductive test material; wherever corrosion or material loss exists, the magnetic field leaks and is detected.',
      uses: [
        'Suitable for wall-loss detection and measurement of sharp defects such as pitting, grooving and circumferential cracks',
        'Applicable to ferromagnetic tubing',
        'Effective for aluminium-finned carbon-steel tubes, as the field is largely unaffected by the fins',
        'A strong back-up inspection to Remote Field Testing',
      ],
    },
    {
      code: '3.5',
      name: 'Internal Rotary Inspection System (IRIS)',
      description:
        'Ultrasonic method for tube inspection: a probe is inserted into a water-flooded tube and pulled out slowly while data is recorded, allowing detection of metal loss from both the inside and outside of the tube wall.',
      advantages: [
        'Provides flaw location along both the length and circumference of the tube',
        'Defect detection is better than RFET in ferrous materials, though inferior to ECT in non-magnetic materials',
      ],
      limitations: [
        'A slow technique (roughly 1 inch per second scanning speed), though accurate to about 0.15 mm in ferrous tube wall measurement',
        'Requires better surface cleaning than eddy current testing',
      ],
    },
    {
      code: '3.6',
      name: 'Boroscopic / Videoscopic Inspection',
      description:
        'A small camera visually inspects hard-to-reach zones — electrical generators and transformers, boilers, pressure vessels, pipelines, gas/steam/wind turbines, condenser tubes, drums, pumps, heat exchangers and other plant components — without teardown, checking for pitting, cracks, corrosion, erosion and weld defects.',
    },
    {
      code: '3.7',
      name: 'Thermography',
      description:
        'Infrared thermography finds temperature anomalies during equipment operation using remote, non-contact viewing. Useful for deposits or blockages in pipelines carrying hot or cold fluids, and for refractory or insulation deterioration in furnaces, boilers, heaters and converters.',
      advantages: [
        'Reformers, furnaces and boilers are ideal candidates for detecting chocking, deposits and hot/cold spots',
        'Easily determines hot-spots, especially in electrical systems where overheating can produce catastrophic hazards',
        'Qualified team of thermography inspectors',
      ],
      limitations: [
        'Requires trained and skilled technicians',
        'Effective parameters (temperature range, emissivity, focal distance) must be correctly set',
      ],
    },
  ],
}

// ---------------- 4. ASSET INTEGRITY ENGINEERING ----------------
export const assetIntegrity = {
  title: 'Asset Integrity Engineering',
  tag: 'SEC. 04 — ENGINEERING CONSULTANCY',
  lead:
    'Masar NDTS Company LLC offers engineering and technical consultancy to customers, industries, manufacturers and cross-country businesses trading products internationally.',
  services: [
    'Corrosion Loop Development and Marking',
    'Damage Mechanisms Identification',
    'CML Identification and Optimization',
    'Injection and Mix Point Assessment',
    'Dead Leg Identification and Risk Ranking',
    'Corrosion Control Document (CCD)',
    'Risk Based Inspection (RBI) Study',
    'Develop Inspection Scope and Technique',
    'Inspection Data Management and Automation',
    'Asset Integrity Management System',
    'Isometric, P&ID and PFD Drafting',
    'Asset Life Extension Study',
    'Fitness for Service (API 579 / ASME)',
    'Assessment of UG / Cross-Country Pipeline',
    'Study of Online Corrosion Probes and Coupons',
    'Root Cause Analysis (RCA) / Remaining Life Assessment (RLA)',
    'Analysis of Industrial Failure, Delivering Effective Remedies',
    'Assessment of Small-Bore Piping / Critical Equipment',
  ],
}

// ---------------- 5. MANPOWER / OUTSOURCING ----------------
export const manpower = {
  title: 'Manpower & Outsourcing',
  tag: 'SEC. 05 — HUMAN RESOURCES',
  lead:
    'Masar NDTS Company LLC provides qualified, well-trained manpower supporting commercial, industrial, technical and domestic-sector activities for both public and private clients.',
  body: [
    'We provide well-trained, qualified candidates of various professions and nationalities for all customer requirements, and can mobilize large manpower for shutdown / turnaround assignments ranging from 15 days to several months.',
    'Masar NDTS Company LLC maintains an in-house database of more than 90,000 resumes and a strong referral programme to attract talent from the industry. Our recruiters are trained to identify candidates who meet your exact project requirements — technical, non-technical, highly skilled, skilled and non-skilled.',
    'Manpower is supplied on client payroll and works at the client\u2019s location across the sectors listed in Industries We Serve, and more.',
  ],
  disciplines: [
    'Engineering Services',
    'EPC, Turnkey Projects',
    'Shutdown and Turnaround',
    'Operation and Maintenance',
    'Project Management',
    'Testing and Commissioning',
    'Vigilance and Surveillance',
    'Construction and Manufacturing',
    'Technical Staffing',
  ],
  training: [
    {
      category: 'NDT Level & Technical QA/QC Training',
      courses: [
        'NDT Level Certification Courses (RT, PT, UT, MT)',
        'QC Engineer Specialized Training',
        'Shutdown / Turnaround QC Preparation',
        'Inspection & Quality Control Engineer Courses'
      ]
    },
    {
      category: 'API Exam Preparation & Certifications',
      courses: [
        'API 510 — Pressure Vessel Inspector',
        'API 570 — Piping Inspector',
        'API 653 — Aboveground Storage Tank Inspector',
        'API 580 — Risk Based Inspection',
        'API 571 — Damage Mechanisms Identification',
        'API 936 — Refractory Personnel Certification'
      ]
    }
  ]
}

// ---------------- INDUSTRIES WE SERVE ----------------
export const industries = [
  'Oil and Gas',
  'Refinery',
  'Petrochemical',
  'Chemical',
  'Fertilizer',
  'Nuclear',
  'Marine',
  'Mining',
  'Sugar Industries',
  'Port / Shipping',
  'Cement',
  'Power Generation',
  'Metal Fabrication',
  'Forging and Casting',
  'Manufacturing',
  'Pipeline',
  'Tanks',
  'EPC and Turnkey',
  'Electronic and Electricals',
  'Construction',
  'Solar',
  'Wind',
  'Building and Infrastructure',
  'Food & Beverages Industry',
  'Railways and Metro',
  'Aerospace and Defense',
  'Pharmaceutical / Medical',
  'Automobile',
  'Textile',
  'Transportation',
  'General Industries',
  'Pulp and Paper',
  'Renewable Energy',
]

// ---------------- RESOURCES (workbook placeholders) ----------------
export const resourceCategories = [
  {
    title: 'Service Datasheets',
    description:
      'Technical scope sheets for each NDT method — advantages, limitations and applicable codes — for engineers building an inspection plan.',
    items: [
      'Conventional NDT Method Reference',
      'Advanced NDT Method Reference',
      'Asset Integrity Engineering Scope',
    ],
  },
  {
    title: 'Standards & Codes Referenced',
    description: 'Codes and standards our inspection and engineering work is executed against.',
    items: ['API 579 / ASME (Fitness for Service)', 'API 938C, API 582', 'NACE MR0175, NACE MR0103', 'ASTM E515', 'ASME Section V, Article 10'],
  },
  {
    title: 'Request a Technical Brochure',
    description:
      'Full technical brochures and shutdown/turnaround workbooks are available on request — reach out via the contact form and our team will share the relevant documentation for your project.',
    items: [],
  },
]
