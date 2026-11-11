import { Link, Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function Layout() {
  const location = useLocation()
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div key={location.pathname} className="page-fade">
          <Outlet />
        </div>
      </main>
      <Footer />
      <Link
        to="/contact"
        className="fixed bottom-5 right-5 z-40 rounded-full bg-rose-deep px-5 py-3 text-sm font-medium text-cream shadow-lift transition hover:bg-charcoal md:hidden"
        aria-label="Message us"
      >
        Message us
      </Link>
    </div>
  )
}