import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // Prevent the page behind the open mobile menu from scrolling.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(122,46,60,0.08)] bg-cream/95 shadow-[0_4px_20px_-12px_rgba(122,46,60,0.25)] backdrop-blur-md supports-[backdrop-filter]:bg-cream/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label="Petal Strokes home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5 rounded-full focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blush/70 ring-1 ring-rose/30 transition-colors group-hover:bg-blush sm:h-12 sm:w-12">
            <img
              src="/petal-strokes-emblem.png"
              alt=""
              aria-hidden="true"
              width="44"
              height="44"
              className="h-9 w-9 object-contain sm:h-10 sm:w-10"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </span>
          <span className="whitespace-nowrap font-script text-3xl leading-none text-charcoal">
            Petal Strokes
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-rose-deep text-cream shadow-soft'
                    : 'text-charcoal-soft hover:bg-blush/60 hover:text-charcoal'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-blush/60 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line/60 bg-cream/95 md:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-rose-deep text-cream'
                      : 'text-charcoal-soft hover:bg-blush/60 hover:text-charcoal'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
