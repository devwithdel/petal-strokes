import { SITE } from '../../data/catalog'

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line/60 bg-cream/60">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-script text-2xl text-charcoal">{SITE.name}</p>
            <p className="mt-2 text-sm text-muted">{SITE.tagline}</p>
            <p className="mt-1 text-xs text-muted">{SITE.city}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-charcoal">Find us</p>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              <li>Instagram {SITE.instagram.handle}</li>
              <li>TikTok {SITE.tiktok.handle}</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-charcoal">Ordering</p>
            <p className="mt-2 text-sm text-muted">
              Orders are handled by private message. Browse, then message us to
              place your order.
            </p>
          </div>
        </div>
        <p className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} {SITE.name}. Handmade with love.
        </p>
      </div>
    </footer>
  )
}