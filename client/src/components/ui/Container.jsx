import { cn } from '../../lib/utils'

const WIDTHS = {
  narrow: 'max-w-3xl',
  default: 'max-w-5xl',
  wide: 'max-w-7xl',
}

/**
 * Consistent horizontal rhythm for every section on the site. Centralising
 * the max-width + padding pairing here means every page shares the exact
 * same breakpoints instead of each one hand-rolling "max-w-5xl mx-auto
 * px-5 md:px-8" and slowly drifting out of sync.
 */
export default function Container({ size = 'wide', className = '', children, as: Tag = 'div' }) {
  return (
    <Tag className={cn('mx-auto px-5 sm:px-6 md:px-8', WIDTHS[size] || WIDTHS.default, className)}>
      {children}
    </Tag>
  )
}
