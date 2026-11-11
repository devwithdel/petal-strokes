import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
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