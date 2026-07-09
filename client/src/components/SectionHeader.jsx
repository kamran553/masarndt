import { Reveal } from './ui/Reveal'
import SectionEyebrow from './ui/SectionEyebrow'
import { cn } from '../lib/utils'

export default function SectionHeader({ tag, title, description, align = 'left', tone = 'ink' }) {
  const isCenter = align === 'center'
  const headingTone = tone === 'paper' ? 'text-paper' : 'text-ink'
  const bodyTone = tone === 'paper' ? 'text-paper/70' : 'text-steel-500'

  return (
    <Reveal className={cn('max-w-3xl', isCenter && 'mx-auto text-center')}>
      {tag && (
        <div className={cn(isCenter && 'flex justify-center')}>
          <SectionEyebrow className="mb-3">{tag}</SectionEyebrow>
        </div>
      )}
      <h2 className={cn('font-display uppercase text-3xl md:text-4xl tracking-wide', headingTone)}>
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 leading-relaxed text-base md:text-lg', bodyTone)}>{description}</p>
      )}
    </Reveal>
  )
}
