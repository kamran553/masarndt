import { cn } from '../../lib/utils'

/**
 * Dashed-border placeholder for a list that has no items yet — used on
 * the Resources page where "Request a Technical Brochure" intentionally
 * ships with an empty items array. A blank gap reads as a bug; this reads
 * as a deliberate call to action instead.
 */
export default function EmptyState({ icon: Icon, title, description, className = '' }) {
  return (
    <div
      className={cn(
        'flex flex-col items-center text-center gap-3 rounded-xl border border-dashed border-steel-300 px-6 py-8',
        className
      )}
    >
      {Icon && (
        <div className="w-11 h-11 rounded-full bg-steel-50 flex items-center justify-center">
          <Icon className="w-5 h-5 text-steel-400" strokeWidth={1.75} aria-hidden="true" />
        </div>
      )}
      {title && <p className="text-sm font-medium text-ink">{title}</p>}
      {description && <p className="text-sm text-steel-500 max-w-xs">{description}</p>}
    </div>
  )
}
