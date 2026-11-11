export function Container({ size = 'lg', className = '', children, ...props }) {
  const widths = { sm: 'max-w-2xl', md: 'max-w-4xl', lg: 'max-w-6xl', xl: 'max-w-7xl' }
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${widths[size]} ${className}`} {...props}>
      {children}
    </div>
  )
}