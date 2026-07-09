import { useEffect, useRef, useState } from 'react'
import { useInView, animate, useReducedMotion } from 'framer-motion'
import { parseCountableStat } from '../../lib/utils'

/**
 * Renders a stat value ("150+", "90,000+", "ISO 9001:2015"). Purely
 * numeric-with-suffix values animate upward once when scrolled into view;
 * anything else (designations, codes) renders as static text, since
 * counting up to a standard's name would be meaningless.
 */
export default function AnimatedCounter({ value, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const prefersReducedMotion = useReducedMotion()
  const countable = parseCountableStat(value)
  const [display, setDisplay] = useState(countable ? `0${countable.suffix}` : value)

  useEffect(() => {
    if (!isInView || !countable) return
    if (prefersReducedMotion) {
      setDisplay(`${countable.target.toLocaleString('en-US')}${countable.suffix}`)
      return
    }
    const controls = animate(0, countable.target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(`${Math.floor(v).toLocaleString('en-US')}${countable.suffix}`)
      },
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
