import { cn } from '../../lib/utils'

const TONES = {
  signal: 'bg-signal-50 text-signal-600',
  'signal-dark': 'bg-signal-50 text-signal-600',
  ink: 'bg-ink text-paper',
  steel: 'bg-steel-100 text-steel-600',
  'paper-on-dark': 'bg-paper/10 text-paper',
  emerald: 'bg-emerald-50 text-emerald-600',
}

const SIZES = {
  sm: 'w-9 h-9',
  md: 'w-12 h-12',
  lg: 'w-14 h-14',
}

const ICON_SIZES = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
}

/**
 * The icon-in-a-rounded-box treatment that anchors every card across the
 * site (service categories, methods, industries, resources, offices).
 * One component keeps that visual language consistent instead of each
 * card hand-rolling its own box classes.
 */
export default function IconTile({ icon: Icon, tone = 'signal', size = 'md', className = '' }) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-xl shrink-0 transition-transform duration-200',
        TONES[tone],
        SIZES[size],
        className
      )}
    >
      <Icon className={ICON_SIZES[size]} strokeWidth={1.75} aria-hidden="true" />
    </div>
  )
}
