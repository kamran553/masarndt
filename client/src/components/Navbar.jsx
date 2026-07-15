import { useState, useRef, useEffect, useCallback } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { serviceCategories } from '../data/content'
import { serviceCategoryIcons } from '../lib/icons'
import Button from './ui/Button'

const navLinkClass = ({ isActive }) =>
  `relative text-sm tracking-wide transition-colors py-2 ${
    isActive ? 'text-signal-500' : 'text-steel-600 hover:text-ink'
  }`

const EASE = [0.16, 1, 0.3, 1]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const dropdownRef = useRef(null)
  const servicesTriggerRef = useRef(null)
  const mobileToggleRef = useRef(null)
  const closeTimer = useRef(null)

  // Close everything whenever the route changes.
  useEffect(() => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  // Subtle chrome shift once the page has scrolled past the hero edge.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    if (mobileOpen) {
      const previous = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = previous
      }
    }
  }, [mobileOpen])

  // Close the desktop dropdown on outside click and Escape.
  useEffect(() => {
    if (!servicesOpen) return
    function handlePointer(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    function handleKey(e) {
      if (e.key === 'Escape') {
        setServicesOpen(false)
        servicesTriggerRef.current?.focus()
      }
    }
    document.addEventListener('mousedown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [servicesOpen])

  // Escape closes the mobile drawer too.
  useEffect(() => {
    if (!mobileOpen) return
    function handleKey(e) {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        mobileToggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [mobileOpen])

  const openOnHover = useCallback(() => {
    clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }, [])
  const closeOnHoverOut = useCallback(() => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_0_rgba(11,15,23,0.05),0_12px_24px_-16px_rgba(11,15,23,0.08)]' : 'border-b border-steel-200/80'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only-focusable fixed top-2 left-2 z-[60] bg-signal-500 text-paper px-4 py-2 rounded-md text-sm font-medium"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2 shrink-0 group">
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="Masar NDT Logo"
            className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={openOnHover}
            onMouseLeave={closeOnHoverOut}
          >
            <button
              ref={servicesTriggerRef}
              className="text-sm tracking-wide text-steel-600 hover:text-ink flex items-center gap-1.5 py-2"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: EASE }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[22rem] bg-white border border-steel-200 rounded-xl shadow-elevated overflow-hidden"
                >
                  {serviceCategories.map((s) => {
                    const Icon = serviceCategoryIcons[s.id]
                    return (
                      <NavLink
                        key={s.id}
                        to={s.path}
                        className="flex items-start gap-3 px-4 py-3.5 border-b border-steel-100 last:border-0 hover:bg-steel-50 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="mt-0.5 w-8 h-8 rounded-lg bg-signal-50 text-signal-600 flex items-center justify-center shrink-0">
                          {Icon && <Icon className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />}
                        </span>
                        <span>
                          <span className="block font-mono text-[10px] text-signal-600 tracking-widest2">
                            {s.tag}
                          </span>
                          <span className="block text-ink text-sm mt-0.5">{s.title}</span>
                        </span>
                      </NavLink>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/industries" className={navLinkClass}>
            Industries
          </NavLink>
          <NavLink to="/resources" className={navLinkClass}>
            Resources
          </NavLink>
          <Button to="/contact" variant="outline-signal" size="sm">
            Get a Quote
          </Button>
        </nav>

        <button
          ref={mobileToggleRef}
          className="lg:hidden text-ink p-2 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 top-16 bg-steel-900/30 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              aria-label="Mobile"
              className="fixed top-16 right-0 bottom-0 w-[85%] max-w-sm bg-white border-l border-steel-200 z-40 lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: EASE }}
            >
              <div className="px-5 py-6 flex flex-col gap-1">
                <NavLink
                  to="/"
                  className="text-steel-800 text-base py-3 border-b border-steel-100"
                  end
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-steel-800 text-base py-3 border-b border-steel-100"
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </NavLink>

                <button
                  className="flex items-center justify-between text-steel-800 text-base py-3 border-b border-steel-100 w-full"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="overflow-hidden border-b border-steel-100"
                    >
                      <div className="pb-2">
                        {serviceCategories.map((s) => {
                          const Icon = serviceCategoryIcons[s.id]
                          return (
                            <NavLink
                              key={s.id}
                              to={s.path}
                              className="flex items-center gap-3 py-2.5 pl-2 text-steel-600 hover:text-signal-600 text-sm"
                              onClick={() => setMobileOpen(false)}
                            >
                              {Icon && <Icon className="w-4 h-4 text-signal-500" strokeWidth={1.75} aria-hidden="true" />}
                              {s.title}
                            </NavLink>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <NavLink
                  to="/industries"
                  className="text-steel-800 text-base py-3 border-b border-steel-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Industries
                </NavLink>
                <NavLink
                  to="/resources"
                  className="text-steel-800 text-base py-3 border-b border-steel-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Resources
                </NavLink>

                <Button to="/contact" variant="primary" className="mt-6 w-full" onClick={() => setMobileOpen(false)}>
                  Get a Quote
                </Button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
