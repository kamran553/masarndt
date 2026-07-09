import { cn } from '../../lib/utils'

const TONES = {
  outline: 'border border-steel-200 text-steel-600 bg-paper',
  'outline-dark': 'border border-paper/20 text-paper/80',
  signal: 'bg-signal-50 text-signal-600 border border-signal-100',
  brass: 'bg-brass-500/10 text-brass-600 border border-brass-500/20',
}

/**
 * Small pill used for certifications, applications/uses tags, and
 * discipline chips — the badge/stamp motif that echoes a real
 * certification mark or inspection tag.
 */
export default function Badge({ icon: Icon, tone = 'outline', className = '', children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide',
        TONES[tone],
        className
      )}
    >
      {Icon && <Icon className="w-3.5 h-3.5" aria-hidden="true" />}
      {children}
    </span>
  )
}
