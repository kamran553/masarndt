import { motion } from 'framer-motion'
import Container from './Container'
import SectionEyebrow from './SectionEyebrow'

const EASE = [0.16, 1, 0.3, 1]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/**
 * Shared dark hero header for every inner page (About, Contact, Industries,
 * Resources, all five Service pages). Consolidates eight near-identical
 * blocks into one component with a single visual language: eyebrow tag,
 * display heading, lead paragraph, over a quiet blueprint-grid backdrop.
 */
export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative bg-gradient-to-br from-white via-paper to-paper-dim border-b border-steel-200/60 text-ink overflow-hidden">
      <div className="absolute inset-0 bg-grid-lines-dim bg-grid-sm opacity-30 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-signal-500/5 blur-3xl animate-drift-slow pointer-events-none"
        aria-hidden="true"
      />
      <Container size="default" className="relative">
        <motion.div
          className="py-20 md:py-28"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {eyebrow && (
            <motion.div variants={itemVariants}>
              <SectionEyebrow>{eyebrow}</SectionEyebrow>
            </motion.div>
          )}
          <motion.h1
            className="font-display uppercase text-4xl md:text-5xl leading-tight mt-4 text-ink"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              className="mt-6 max-w-2xl text-steel-600 text-lg leading-relaxed"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div className="mt-8" variants={itemVariants}>
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
