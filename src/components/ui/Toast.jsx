export function Toast({ message }) {
  if (!message) return null
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-cream shadow-lift"
    >
      {message}
    </div>
  )
}