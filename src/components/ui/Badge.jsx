export function Badge({ className = '', children, ...props }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-blush/70 px-3 py-1 text-xs font-medium text-rose-deep ${className}`} {...props}>
      {children}
    </span>
  )
}