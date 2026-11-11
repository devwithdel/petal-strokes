import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { WaveDivider } from '../ui/WaveDivider'

export function Layout() {
  const location = useLocation()

  // Scroll to top on page changes, and to the section for /#hash links
  // coming from the footer or other pages.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1))
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: reduce ? 'auto' : 'smooth',
          block: 'start',
        })
      })
      return () => window.cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-rose-deep focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <div key={location.pathname} className="page-fade">
          <Outlet />
        </div>
      </main>
      <WaveDivider />
      <Footer />
      <Link
        to="/#message-us"
        className="fixed bottom-5 right-5 z-40 rounded-full bg-rose-deep px-5 py-3 text-sm font-medium text-cream shadow-lift transition hover:bg-charcoal md:hidden"
        aria-label="Message us"
      >
        Message us
      </Link>
    </div>
  )
}
