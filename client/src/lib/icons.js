// Presentation-layer icon mapping.
//
// content.js remains pure copy (per its own header comment: "Edit this file
// to update text across the whole site"). Rather than bolting icon fields
// onto that data, every icon lives here, keyed off the same ids / codes /
// strings the data already exposes. If content.js ever adds a new method,
// industry or category without a matching entry here, every lookup below
// falls back to a sane default icon instead of throwing.

import {
  ClipboardCheck,
  Waves,
  Radar,
  ShieldCheck,
  Users,
  Droplets,
  Magnet,
  Zap,
  Percent,
  Eye,
  Gauge,
  Box,
  Microscope,
  FileCheck2,
  Atom,
  Activity,
  RadioTower,
  RotateCw,
  Video,
  Thermometer,
  Flame,
  Factory,
  FlaskConical,
  Beaker,
  Sprout,
  Anchor,
  Mountain,
  Candy,
  Ship,
  Building2,
  Hammer,
  Cog,
  Waypoints,
  Database,
  Puzzle,
  CircuitBoard,
  HardHat,
  Sun,
  Wind,
  Landmark,
  UtensilsCrossed,
  TrainFront,
  Plane,
  Pill,
  Car,
  Shirt,
  Truck,
  Boxes,
  FileText,
  Leaf,
  ScrollText,
  Send,
  BadgeCheck,
  UserCheck,
  Award,
  MapPin,
  Phone,
  Mail,
  Globe,
  User,
  Briefcase,
  MessageSquare,
  Wrench,
  Settings2,
  ClipboardList,
} from 'lucide-react'

// ---- Service categories (id -> icon) ----
export const serviceCategoryIcons = {
  inspection: ClipboardCheck,
  'conventional-ndt': Waves,
  'advanced-ndt': Radar,
  'asset-integrity': ShieldCheck,
  manpower: Users,
}

// ---- Conventional NDT methods (code -> icon) ----
export const conventionalMethodIcons = {
  '2.1': Droplets, // Penetrant Testing — dye penetrant
  '2.2': Magnet, // Magnetic Particle Testing
  '2.3': Waves, // Ultrasonic Testing
  '2.4': Zap, // Holiday / Spark Testing
  '2.5': Percent, // Ferrite Testing — percentage measurement
  '2.6': Eye, // Visual Inspection
  '2.7': Gauge, // Hardness Testing — reading/measurement
  '2.8': Box, // Vacuum Box Testing
  '2.9': Microscope, // Metallography
  '2.10': FileCheck2, // NDT Procedure Qualification
}

// ---- Advanced NDT methods (code -> icon) ----
export const advancedMethodIcons = {
  '3.1': Atom, // Positive Material Identification — elemental composition
  '3.2': Activity, // Eddy Current Testing — electromagnetic signal
  '3.3': RadioTower, // Remote Field Eddy Current Testing
  '3.4': Magnet, // Magnetic Flux Leakage
  '3.5': RotateCw, // Internal Rotary Inspection System
  '3.6': Video, // Boroscopic / Videoscopic Inspection
  '3.7': Thermometer, // Thermography
}

// ---- Industries we serve (exact string -> icon) ----
export const industryIcons = {
  'Oil and Gas': Flame,
  Refinery: Factory,
  Petrochemical: FlaskConical,
  Chemical: Beaker,
  Fertilizer: Sprout,
  Nuclear: Atom,
  Marine: Anchor,
  Mining: Mountain,
  'Sugar Industries': Candy,
  'Port / Shipping': Ship,
  Cement: Building2,
  'Power Generation': Zap,
  'Metal Fabrication': Hammer,
  'Forging and Casting': Flame,
  Manufacturing: Cog,
  Pipeline: Waypoints,
  Tanks: Database,
  'EPC and Turnkey': Puzzle,
  'Electronic and Electricals': CircuitBoard,
  Construction: HardHat,
  Solar: Sun,
  Wind: Wind,
  'Building and Infrastructure': Landmark,
  'Food & Beverages Industry': UtensilsCrossed,
  'Railways and Metro': TrainFront,
  'Aerospace and Defense': Plane,
  'Pharmaceutical / Medical': Pill,
  Automobile: Car,
  Textile: Shirt,
  Transportation: Truck,
  'General Industries': Boxes,
  'Pulp and Paper': FileText,
  'Renewable Energy': Leaf,
}
export const defaultIndustryIcon = Boxes

// ---- Resource categories (exact title -> icon) ----
export const resourceIcons = {
  'Service Datasheets': FileText,
  'Standards & Codes Referenced': ScrollText,
  'Request a Technical Brochure': Send,
}
export const defaultResourceIcon = FileText

// ---- Manpower disciplines (exact string -> icon) ----
export const disciplineIcons = {
  'Engineering Services': Wrench,
  'EPC, Turnkey Projects': Puzzle,
  'Shutdown and Turnaround': Factory,
  'Operation and Maintenance': Settings2,
  'Project Management': ClipboardList,
  'Testing and Commissioning': FlaskConical,
  'Vigilance and Surveillance': Eye,
  'Construction and Manufacturing': HardHat,
  'Technical Staffing': Users,
}
export const defaultDisciplineIcon = ClipboardList

// ---- Stat labels (exact label -> icon) ----
export const statIcons = {
  'VT Level II / III Inspectors': UserCheck,
  'API Certified Inspectors': BadgeCheck,
  'Manpower Resume Database': Users,
  'Certified Organisation': Award,
}
export const defaultStatIcon = Award

// ---- Certifications (About page) ----
export const certificationIcon = BadgeCheck

// ---- Office contact rows ----
export const officeIcons = { MapPin, Phone, Mail, Globe }

// ---- Contact form field leading icons ----
export const formFieldIcons = {
  name: User,
  email: Mail,
  mobile: Phone,
  companyName: Building2,
  designation: Briefcase,
  message: MessageSquare,
}
