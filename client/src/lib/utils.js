import { clsx } from 'clsx'

/**
 * Merge conditional class names. Thin wrapper around clsx so components
 * can compose Tailwind classes conditionally without verbose ternaries.
 */
export function cn(...inputs) {
  return clsx(...inputs)
}

/**
 * Parses a stat value like "150+" or "90,000+" into its animatable parts.
 * Only strings that are ENTIRELY digits/commas with an optional trailing
 * "+" are considered countable — this deliberately excludes designations
 * like "ISO 9001:2015", which should render as static text rather than
 * being animated as if it were a quantity.
 */
export function parseCountableStat(value) {
  const str = String(value).trim()
  const match = str.match(/^([\d,]+)(\+)?$/)
  if (!match) return null
  const target = parseInt(match[1].replace(/,/g, ''), 10)
  if (Number.isNaN(target)) return null
  return { target, suffix: match[2] || '' }
}
