import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { serviceCategories, offices, company } from '../data/content'
import { StaggerGroup, StaggerItem } from './ui/Reveal'
import Container from './ui/Container'

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Industries We Serve', to: '/industries' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact Us', to: '/contact' },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/60 text-slate-900 mt-28 relative">
      <Container size="wide">
        <StaggerGroup className="py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <StaggerItem>
            <div className="flex items-center gap-2 mb-5">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="Masar NDT Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">{company.tagline}</p>
          </StaggerItem>

          <StaggerItem>
            <p className="font-mono text-[10px] tracking-widest2 text-slate-400 font-semibold mb-5 uppercase">SERVICES</p>
            <ul className="space-y-3">
              {serviceCategories.map((s) => (
                <li key={s.id}>
                  <Link to={s.path} className="text-sm text-slate-600 hover:text-signal-500 transition-colors font-medium">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <p className="font-mono text-[10px] tracking-widest2 text-slate-400 font-semibold mb-5 uppercase">COMPANY</p>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-slate-600 hover:text-signal-500 transition-colors font-medium">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <p className="font-mono text-[10px] tracking-widest2 text-slate-400 font-semibold mb-5 uppercase">OFFICES</p>
            <div className="space-y-6">
              {offices.map((o) => (
                <div key={o.label} className="text-slate-600">
                  <p className="text-sm text-slate-800 font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-signal-500 shrink-0" aria-hidden="true" />
                    {o.label}
                  </p>
                  <div className="pl-6 mt-2 space-y-1">
                    {o.lines.map((l) => (
                      <p key={l} className="text-xs text-slate-500">
                        {l}
                      </p>
                    ))}
                    {o.mobile && (
                      <a
                        href={`tel:${o.mobile.replace(/\s+/g, '')}`}
                        className="text-xs text-slate-500 hover:text-signal-500 flex items-center gap-1.5 transition-colors mt-1.5"
                      >
                        <Phone className="w-3 h-3 text-slate-400" aria-hidden="true" />
                        {o.mobile}
                      </a>
                    )}
                    <a
                      href={`mailto:${o.email}`}
                      className="text-xs text-slate-500 hover:text-signal-500 flex items-center gap-1.5 transition-colors mt-1"
                    >
                      <Mail className="w-3 h-3 text-slate-400" aria-hidden="true" />
                      {o.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </StaggerItem>
        </StaggerGroup>
      </Container>

      <div className="border-t border-slate-200/50">
        <Container size="wide">
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <span>&copy; {new Date().getFullYear()} Masar NDT — Masar NDTS Company LLC. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <span className="font-mono tracking-wider">ISO 9001:2015 CERTIFIED</span>
              <motion.button
                type="button"
                onClick={scrollToTop}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="flex items-center gap-1.5 text-slate-400 hover:text-signal-500 transition-colors font-medium"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
                Top
              </motion.button>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
