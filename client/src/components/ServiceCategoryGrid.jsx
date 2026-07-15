import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { serviceCategoryIcons } from '../lib/icons'
import { StaggerGroup, StaggerItem } from './ui/Reveal'
import IconTile from './ui/IconTile'

const categoryImages = {
  'conventional-ndt': '/images/service-conventional.png',
  'advanced-ndt': '/images/service-advanced.png',
  'asset-integrity': '/images/service-integrity.png',
  'inspection': '/images/service-inspection.png',
  'manpower': '/images/service-manpower.png'
}

export default function ServiceCategoryGrid({ categories }) {
  return (
    <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((s) => {
        const Icon = serviceCategoryIcons[s.id]
        const imagePath = categoryImages[s.id]
        
        return (
          <StaggerItem key={s.id}>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
              <Link
                to={s.path}
                className="group relative bg-white border border-steel-200 rounded-lg hover:border-signal-500/30 hover:shadow-elevated transition-all duration-300 p-6 flex flex-col justify-between min-h-[380px] h-full overflow-hidden"
              >
                <div>
                  {/* Photo Header */}
                  <div className="w-full h-40 bg-slate-50 border-b border-steel-100 -mt-6 -mx-6 mb-5 flex items-center justify-center overflow-hidden relative">
                    <img
                      src={imagePath}
                      alt={s.title}
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-90 group-hover:opacity-100"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    {Icon && <IconTile icon={Icon} tone="signal" />}
                    <p className="font-mono text-[10px] tracking-widest2 text-signal-500 uppercase">{s.tag}</p>
                  </div>
                  <h3 className="font-display uppercase text-xl mt-5 text-ink transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-sm text-steel-500 mt-3 leading-relaxed transition-colors duration-300">
                    {s.summary}
                  </p>
                </div>
                <span className="mt-6 text-sm text-signal-500 group-hover:text-signal-600 flex items-center gap-2">
                  View scope
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          </StaggerItem>
        )
      })}
    </StaggerGroup>
  )
}
