import { cn } from '../../lib/utils'

/**
 * The small mono-font tag with a leading hairline that precedes every
 * section heading and page hero — echoes a spec-sheet clause label
 * (e.g. "SEC. 04 — ENGINEERING CONSULTANCY").
 */
export default function SectionEyebrow({ children, tone = 'signal', className = '' }) {
  const toneClass = tone === 'signal' ? 'text-signal-500' : 'text-steel-400'
  const lineClass = tone === 'signal' ? 'bg-signal-500' : 'bg-steel-400'

  return (
    <p className={cn('font-mono text-[11px] tracking-widest2 flex items-center gap-2', toneClass, className)}>
      <span className={cn('w-6 h-px inline-block', lineClass)} aria-hidden="true" />
      {children}
    </p>
  )
}
