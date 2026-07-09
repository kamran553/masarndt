import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

/**
 * Fades + lifts a block into place the first time it scrolls into view.
 * `once: true` means it never replays on re-scroll — motion should mark an
 * arrival, not nag the visitor every time they scroll past.
 */
export function Reveal({ children, delay = 0, y = 20, className = '', as = 'div', ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/** Parent variants for staggered children — pair with <StaggerItem>. */
const staggerContainerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
}

export function StaggerGroup({ children, className = '', ...rest }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainerVariants}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

const staggerItemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

export function StaggerItem({ children, className = '', as = 'div', ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag className={className} variants={staggerItemVariants} {...rest}>
      {children}
    </MotionTag>
  )
}
