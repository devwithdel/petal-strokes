import { useState } from 'react'
import { FOOTER, SITE } from '../../data/catalog'
import { SocialIcon } from '../ui/SocialIcon'

export function Footer() {
  const [logoLoaded, setLogoLoaded] = useState(false)
  return (
    <footer className="bg-gradient-to-b from-[#F0CFCF] to-[#E8BFC3]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-[40px] sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr] pt-12 pb-12">
          <div>
            <div className="flex flex-col items-start gap-3 mb-4">
              <div className="flex items-center gap-3">
                <img
                  src="/images/petal-strokes-emblem.png"
                  alt=""
                  width="64"
                  height="64"
                  className="h-16 w-16 object-contain"
                  aria-hidden="true"
                  onLoad={() => setLogoLoaded(true)}
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <img
                  src="/images/petal-strokes-wordmark.png"
                  alt={SITE.name}
                  width="140"
                  height="auto"
                  className="h-auto w-[140px] object-contain"
                  onLoad={() => setLogoLoaded(true)}
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                {!logoLoaded && <span className="font-script text-3xl text-charcoal">Petal Strokes</span>}
              </div>
            </div>
            <p className="text-sm text-body leading-relaxed">{SITE.tagline}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">{FOOTER.explore.title}</p>
            <ul className="space-y-2">
              {FOOTER.explore.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-body hover:text-rose-deep focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">{FOOTER.findUs.title}</p>
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
            <p className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">{FOOTER.ordering.title}</p>
            <p className="text-sm text-body mb-4">{SITE.orderingText}</p>
            <button
              onclick="document.getElementById('order')?.scrollIntoView({behavior:'smooth'})"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-deep px-6 py-2.5 text-base font-medium text-cream hover:bg-charcoal focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2"
            >
              {FOOTER.ordering.button}
            </button>
          </div>
        </div>
        <div className="mt-12 border-t border-[rgba(122,46,60,0.15)] pt-8 sm:pt-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm leading-7">
            <p className="text-body">{FOOTER.bottom.copyright}</p>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-body hover:text-rose-deep focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2"
            >
              {FOOTER.bottom.backToTop}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}