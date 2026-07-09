import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

/**
 * The inline "Read our full story" / "View all industries" style link that
 * appears at the end of several sections. A plain text link whose arrow
 * nudges forward on hover — deliberately quieter than <Button>, since not
 * every link on the page should compete for attention.
 */
export default function ArrowLink({ to, href, tone = 'signal', className = '', children, ...rest }) {
  const toneClasses =
    tone === 'signal' ? 'text-signal-500 hover:text-signal-600' : 'text-steel-600 hover:text-signal-600'

  const classes = cn(
    'group inline-flex items-center gap-2 text-sm font-medium tracking-wide',
    toneClasses,
    className
  )

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  )
}
