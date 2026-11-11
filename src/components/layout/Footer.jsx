import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FOOTER, SITE } from '../../data/catalog'
import { SocialIcon } from '../ui/SocialIcon'

// Hash links must go through the router so they also work from other pages.
const toHref = (href) => (href.startsWith('#') ? `/${href}` : href)

export function Footer() {
  const [emblemOk, setEmblemOk] = useState(true)
  const [wordmarkOk, setWordmarkOk] = useState(true)

  return (
    <footer className="bg-gradient-to-b from-[#F0CFCF] to-[#E8BFC3]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-[40px] sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr] pt-12 pb-12">
          <div>
            <Link
              to="/"
              aria-label="Petal Strokes home"
              className="mb-4 inline-flex items-center gap-3 rounded-lg focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2"
            >
              {emblemOk && (
                <img
                  src="/petal-strokes-emblem.png"
                  alt=""
                  aria-hidden="true"
                  width="56"
                  height="56"
                  className="h-14 w-14 shrink-0 object-contain"
                  onError={() => setEmblemOk(false)}
                />
              )}
              {wordmarkOk ? (
                <img
                  src="/petal-strokes-wordmark.png"
                  alt={SITE.name}
                  width="140"
                  height="79"
                  className="h-auto w-[140px] object-contain"
                  onError={() => setWordmarkOk(false)}
                />
              ) : (
                <span className="font-script text-3xl text-charcoal">{SITE.name}</span>
              )}
            </Link>
            <p className="text-sm leading-relaxed text-body">{SITE.tagline}</p>
          </div>

          <div>
            <h2 className="mb-3 font-sans text-sm font-semibold uppercase tracking-wider text-rose-text">
              {FOOTER.explore.title}
            </h2>
            <ul className="space-y-1">
              {FOOTER.explore.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={toHref(link.href)}
                    className="-mx-2 flex min-h-11 items-center rounded px-2 text-base text-body underline decoration-transparent underline-offset-4 transition-colors hover:text-rose-deep hover:decoration-current focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 font-sans text-sm font-semibold uppercase tracking-wider text-rose-text">
              {FOOTER.findUs.title}
            </h2>
            <ul className="space-y-2">
              <li>
                <SocialIcon
                  platform="instagram"
                  url={SITE.instagram.dm}
                  handle={SITE.instagram.handle}
                  ariaLabel="Message Petal Strokes on Instagram"
                />
              </li>
              <li>
                <SocialIcon
                  platform="tiktok"
                  url={SITE.tiktok.url}
                  handle={SITE.tiktok.handle}
                  ariaLabel="Message Petal Strokes on TikTok"
                />
              </li>
              <li>
                <SocialIcon
                  platform="facebook"
                  url={SITE.facebook.url}
                  handle={SITE.facebook.handle}
                  ariaLabel="Message Petal Strokes on Facebook"
                />
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 font-sans text-sm font-semibold uppercase tracking-wider text-rose-text">
              {FOOTER.ordering.title}
            </h2>
            <p className="mb-4 text-sm text-body">{SITE.orderingText}</p>
            <Link
              to="/#order"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-deep px-6 py-2.5 text-base font-medium text-cream transition-colors hover:bg-charcoal focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2"
            >
              {FOOTER.ordering.button}
            </Link>
          </div>
        </div>

        <div className="border-t border-[rgba(122,46,60,0.15)] pt-8 pb-24 md:pb-8">
          <div className="flex flex-col gap-3 text-sm leading-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-body">{FOOTER.bottom.copyright}</p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
                window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
              }}
              className="inline-flex min-h-11 items-center rounded text-body transition-colors hover:text-rose-deep focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2"
            >
              {FOOTER.bottom.backToTop}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
