import { useState, useEffect } from 'react'
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
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    const orderEl = document.getElementById('order')
    if (!orderEl) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveHash('order')
          else setActiveHash((prev) => (prev === 'order' ? '' : prev))
        })
      },
      { threshold: 0.3 }
    )
    io.observe(orderEl)
    return () => io.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(122,46,60,0.08)] bg-cream/85 backdrop-blur-md shadow-[0_4px_20px_-12px_rgba(122,46,60,0.25)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="Petal Strokes home">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream p-1.5 shadow-soft sm:h-14 sm:w-14">
            <img
              src="/petal-strokes-emblem.png"
              alt="Petal Strokes"
              className="h-9 w-9 object-contain sm:h-11 sm:w-11"
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
          {links.map((l) => {
            const isActive = l.hash ? activeHash === l.hash : false
            if (l.hash) {
              return (
                <a
                  key={l.to}
                  href={l.to}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive ? 'bg-rose-deep text-cream' : 'text-charcoal-soft hover:text-charcoal'
                  }`}
                >
                  {l.label}
                </a>
              )
            }
            return (
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
            )
          })}
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
            {links.map((l) => {
              const isActive = l.hash ? activeHash === l.hash : false
              if (l.hash) {
                return (
                  <a
                    key={l.to}
                    href={l.to}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2 text-base font-medium ${
                      isActive ? 'bg-rose-deep text-cream' : 'text-charcoal-soft'
                    }`}
                  >
                    {l.label}
                  </a>
                )
              }
              return (
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
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}