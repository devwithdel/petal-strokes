import { forwardRef } from 'react'

const variants = {
  primary: 'bg-rose-deep text-cream hover:bg-charcoal shadow-card',
  secondary: 'bg-gold text-charcoal hover:bg-rose-deep hover:text-cream shadow-soft',
  outline: 'border border-rose-deep text-rose-deep hover:bg-rose-deep hover:text-cream',
  ghost: 'text-charcoal-soft hover:text-charcoal hover:bg-blush/60',
}
const sizes = {
  sm: 'px-3 py-1.5 text-sm rounded-full',
  md: 'px-5 py-2.5 text-sm rounded-full',
  lg: 'px-7 py-3.5 text-base rounded-full',
}

export const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', className = '', children, ...props }, ref
) {
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center gap-2 font-sans font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
})