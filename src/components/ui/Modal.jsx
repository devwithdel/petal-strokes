import { useEffect, useRef } from 'react'

export function Modal({ open, onClose, title, children, size = 'lg' }) {
  const closeRef = useRef(null)
  const widths = { md: 'max-w-md', lg: 'max-w-3xl', xl: 'max-w-5xl' }

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`relative z-10 w-full ${widths[size]} max-h-[90vh] overflow-y-auto rounded-2xl bg-cream shadow-lift`}>
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 rounded-full bg-blush/80 p-2 text-charcoal transition hover:bg-rose-deep hover:text-cream"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
}