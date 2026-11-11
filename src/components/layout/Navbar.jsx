import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/how-to-order', label: 'How to order' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur-md shadow-[0_4px_20px_-12px_rgba(122,46,60,0.25)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="Petal Strokes home">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream p-2 shadow-soft sm:h-16 sm:w-16">
            <img
              src="/images/logo.png"
              alt="Petal Strokes"
              className="h-10 w-10 object-contain sm:h-12 sm:w-12"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.parentElement?.nextElementSibling
                if (fallback) fallback.style.display = 'block'
              }}
            />
          </span>
          <span className="hidden font-script text-3xl text-charcoal">Petal Strokes</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive ? 'bg-rose-deep text-cream' : 'text-charcoal-soft hover:text-charcoal'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="rounded-full p-2 text-charcoal md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-line/60 bg-cream/95 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-base font-medium ${
                    isActive ? 'bg-rose-deep text-cream' : 'text-charcoal-soft'
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