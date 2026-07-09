import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { serviceCategories, offices, company } from '../data/content'
import { Reveal, StaggerGroup, StaggerItem } from './ui/Reveal'
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
    <footer className="bg-steel-50 border-t border-steel-200/80 text-ink mt-24 relative">
      <Container size="wide">
        <StaggerGroup className="py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <StaggerItem>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-signal-500" aria-hidden="true" />
              <span className="font-display uppercase tracking-widest2 text-lg">
                Masar<span className="text-signal-500"> NDT</span>
              </span>
            </div>
            <p className="text-sm text-steel-500 leading-relaxed">{company.tagline}</p>
          </StaggerItem>

          <StaggerItem>
            <p className="font-mono text-[11px] tracking-widest2 text-steel-500 font-semibold mb-4">SERVICES</p>
            <ul className="space-y-2.5">
              {serviceCategories.map((s) => (
                <li key={s.id}>
                  <Link to={s.path} className="text-sm text-steel-600 hover:text-signal-600 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <p className="font-mono text-[11px] tracking-widest2 text-steel-500 font-semibold mb-4">COMPANY</p>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-steel-600 hover:text-signal-600 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <p className="font-mono text-[11px] tracking-widest2 text-steel-500 font-semibold mb-4">OFFICES</p>
            <div className="space-y-5">
              {offices.map((o) => (
                <div key={o.label}>
                  <p className="text-sm text-steel-800 font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-signal-500 shrink-0" aria-hidden="true" />
                    {o.label}
                  </p>
                  <div className="pl-5 mt-1.5 space-y-1">
                    {o.lines.map((l) => (
                      <p key={l} className="text-xs text-steel-500">
                        {l}
                      </p>
                    ))}
                    {o.mobile && (
                      <a
                        href={`tel:${o.mobile.replace(/\s+/g, '')}`}
                        className="text-xs text-steel-500 hover:text-signal-600 flex items-center gap-1.5 transition-colors"
                      >
                        <Phone className="w-3 h-3" aria-hidden="true" />
                        {o.mobile}
                      </a>
                    )}
                    <a
                      href={`mailto:${o.email}`}
                      className="text-xs text-steel-500 hover:text-signal-600 flex items-center gap-1.5 transition-colors"
                    >
                      <Mail className="w-3 h-3" aria-hidden="true" />
                      {o.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </StaggerItem>
        </StaggerGroup>
      </Container>

      <div className="border-t border-steel-200">
        <Container size="wide">
          <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-steel-500">
            <span>&copy; {new Date().getFullYear()} Masar NDT — AKMEC Group. All rights reserved.</span>
            <div className="flex items-center gap-5">
              <span className="font-mono">ISO 9001:2015 CERTIFIED</span>
              <motion.button
                type="button"
                onClick={scrollToTop}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="flex items-center gap-1.5 text-steel-500 hover:text-signal-600 transition-colors"
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
