import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { cn } from '../../lib/utils'

const MotionLink = motion.create(Link)
const MotionAnchor = motion.create('a')

const VARIANTS = {
  primary:
    'bg-signal-500 text-paper shadow-soft hover:bg-signal-600 hover:shadow-glow-signal focus-visible:bg-signal-600',
  'outline-light':
    'border border-paper/30 text-paper hover:border-signal-500 hover:text-signal-400 hover:bg-paper/5',
  'outline-dark':
    'border border-steel-300 text-steel-700 hover:border-signal-500 hover:text-signal-600 hover:bg-steel-50/50',
  'outline-signal':
    'border border-signal-500 text-signal-500 hover:bg-signal-500 hover:text-paper',
  ghost: 'text-signal-500 hover:text-signal-600',
}

const SIZES = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-sm',
}

/**
 * Single Button primitive for every CTA on the site (solid, outline-on-dark,
 * outline-on-light). Renders a react-router <Link> when `to` is given, a
 * plain anchor when `href` is given, otherwise a real <button> — so the
 * right element (and right accessibility semantics) comes for free.
 */
const Button = forwardRef(function Button(
  {
    to,
    href,
    variant = 'primary',
    size = 'md',
    icon: Icon,
    iconPosition = 'trailing',
    loading = false,
    disabled = false,
    className = '',
    children,
    ...rest
  },
  ref
) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-200 rounded-lg disabled:opacity-50 disabled:pointer-events-none',
    VARIANTS[variant],
    SIZES[size],
    className
  )

  const content = (
    <>
      {loading && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
      {!loading && Icon && iconPosition === 'leading' && (
        <Icon className="w-4 h-4" aria-hidden="true" />
      )}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'trailing' && (
        <Icon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </>
  )

  const motionProps = {
    whileHover: disabled || loading ? {} : { scale: 1.02 },
    whileTap: disabled || loading ? {} : { scale: 0.98 },
    transition: { duration: 0.15 },
  }

  if (to) {
    return (
      <MotionLink ref={ref} to={to} className={cn('group', classes)} {...motionProps} {...rest}>
        {content}
      </MotionLink>
    )
  }

  if (href) {
    return (
      <MotionAnchor ref={ref} href={href} className={cn('group', classes)} {...motionProps} {...rest}>
        {content}
      </MotionAnchor>
    )
  }

  return (
    <motion.button
      ref={ref}
      className={cn('group', classes)}
      disabled={disabled || loading}
      {...motionProps}
      {...rest}
    >
      {content}
    </motion.button>
  )
})

export default Button
