import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ServicesInspection from './pages/ServicesInspection'
import ServicesConventional from './pages/ServicesConventional'
import ServicesAdvanced from './pages/ServicesAdvanced'
import ServicesAssetIntegrity from './pages/ServicesAssetIntegrity'
import ServicesManpower from './pages/ServicesManpower'
import Industries from './pages/Industries'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const EASE = [0.16, 1, 0.3, 1]

function AnimatedRoutes() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.16, ease: 'easeOut' }}
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/inspection" element={<ServicesInspection />} />
        <Route path="/services/conventional-ndt" element={<ServicesConventional />} />
        <Route path="/services/advanced-ndt" element={<ServicesAdvanced />} />
        <Route path="/services/asset-integrity" element={<ServicesAssetIntegrity />} />
        <Route path="/services/manpower" element={<ServicesManpower />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </motion.div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  )
}
