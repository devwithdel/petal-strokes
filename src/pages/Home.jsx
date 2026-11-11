import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { WaveDivider } from '../components/ui/WaveDivider'
import { Button } from '../components/ui/Button'
import { Modal } from '../components/ui/Modal'
import { Toast } from '../components/ui/Toast'
import { useToast } from '../hooks/useToast'
import { useReveal } from '../hooks/useReveal'
import { BOUQUETS, FAQ, RIBBON_COLORS, SIZES, SITE, STORY, TESTIMONIALS } from '../data/catalog'

import { InquiryPanel } from '../components/InquiryPanel'

export default function Home() {
  const ref = useReveal()
  const [active, setActive] = useState(null)
  const [heroOk, setHeroOk] = useState(true)
  const [openFaq, setOpenFaq] = useState(0)
  const { toast, show } = useToast()


  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden">
        <div className="light-beam -top-24 -right-10" />
        <Container className="relative py-12 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="reveal text-sm font-medium uppercase tracking-[0.25em] text-rose-text">
                Handmade satin ribbon roses · Ozamiz City
              </p>
              <h1 className="sr-only">{SITE.name}</h1>
              <img
                src="/petal-strokes-wordmark.png"
                alt={SITE.name}
                width="420"
                height="120"
                fetchPriority="high"
                className="reveal mt-4 h-auto w-full max-w-md"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <p className="reveal mt-4 max-w-xl text-lg text-body">
                {SITE.tagline}
              </p>
              <div className="reveal mt-8 flex flex-wrap gap-3">
                <Link to="/gallery">
                  <Button size="lg">Explore bouquets</Button>
                </Link>
                <a
                  href="#message-us"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-rose-deep bg-cream px-7 py-3.5 text-base font-medium text-rose-deep transition-all duration-200 hover:bg-rose-deep hover:text-cream"
                >
                  Message us
                </a>
              </div>
            </div>
            <div className="reveal flex justify-center lg:justify-end">
              <div className="float-bouquet relative h-[420px] w-full max-w-md -rotate-3">
                {heroOk ? (
                  <img
                    src="/images/hero-bouquet.webp"
                    alt="A handmade satin ribbon rose bouquet"
                    width="480"
                    height="600"
                    fetchPriority="high"
                    className="h-full w-full rounded-3xl object-contain"
                    onError={() => setHeroOk(false)}
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-blush via-rose-peach to-rose shadow-card"
                  >
                    <span className="font-script text-6xl text-rose-text/70">Petal Strokes</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="#featured" aria-label="Scroll to content" className="motion-reduce:animate-none animate-bounce text-rose-text/70">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Container>
      </section>

      <WaveDivider />
      {/* Price strip */}
      <section className="py-10 sm:py-12">
        <Container>
          <div className="reveal text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-text">Starting at ₱180</p>
            <h2 className="mt-1 font-script text-3xl text-charcoal">Pick your size</h2>
          </div>
          <div className="reveal mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {SIZES.map((s) => (
              <div key={s.pieces} className="rounded-2xl bg-cream p-4 text-center shadow-soft">
                <p className="font-script text-3xl text-rose-text">{s.pieces}</p>
                <p className="text-xs text-charcoal-soft">roses</p>
                <p className="mt-1 font-medium text-rose-deep">₱{s.price}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WaveDivider flip />

      {/* Brand story */}
      <section className="py-16 sm:py-20">
        <Container size="md">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="reveal">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-text">{STORY.eyebrow}</p>
              <h2 className="mt-2 font-script text-4xl sm:text-5xl text-charcoal">{STORY.heading}</h2>
              {STORY.body.map((para, i) => (
                <p key={i} className="mt-4 text-charcoal-soft">{para}</p>
              ))}
            </div>
            <div className="reveal">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-card">
                <img
                  src="/images/bouquet-classic.jpg"
                  alt="A classic blush satin ribbon rose bouquet"
                  loading="lazy"
                  decoding="async"
                  width="700"
                  height="700"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fb = e.currentTarget.parentElement?.querySelector('.img-fallback')
                    if (fb) fb.style.display = 'flex'
                  }}
                />
                <div className="img-fallback absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-blush via-rose-peach to-rose">
                  <span className="font-script text-4xl text-rose-text/70">Petal Strokes</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Ribbon colors */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="reveal text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-text">Ribbon colors</p>
            <h2 className="mt-2 font-script text-4xl sm:text-5xl text-charcoal">Choose your palette</h2>
          </div>
          <div className="reveal mt-8 flex flex-wrap justify-center gap-4">
            {RIBBON_COLORS.map((c) => (
              <div key={c.id} className="flex flex-col items-center gap-2">
                <span
                  className="h-14 w-14 rounded-full border border-line shadow-soft"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="text-xs text-charcoal-soft">{c.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <Container size="md">
          <div className="reveal text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-text">Good to know</p>
            <h2 className="mt-2 font-script text-4xl sm:text-5xl text-charcoal">Frequently asked</h2>
          </div>
          <div className="mt-8 space-y-3">
            {FAQ.map((item, i) => (
              <div key={item.q} className="reveal rounded-2xl bg-cream shadow-soft">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-medium text-charcoal">{item.q}</span>
                  <span className="text-rose-text">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-4 text-sm text-charcoal-soft">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      {TESTIMONIALS.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <div className="reveal text-center">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-text">Kind words</p>
              <h2 className="mt-2 font-script text-4xl sm:text-5xl text-charcoal">From our customers</h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="reveal rounded-2xl bg-cream p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    {t.photo ? (
                      <img src={t.photo} alt={t.name} loading="lazy" decoding="async" width="40" height="40" className="h-10 w-10 rounded-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    ) : (
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush text-sm font-semibold text-rose-text">
                        {t.initials}
                      </span>
                    )}
                    <p className="font-medium text-charcoal">{t.name}</p>
                  </div>
                  <p className="mt-3 text-sm text-charcoal-soft">“{t.quote}”</p>
                  {t.screenshot && (
                    <img
                      src={t.screenshot}
                      alt={`Screenshot from ${t.name}`}
                      loading="lazy"
                      decoding="async"
                      className="mt-3 w-full rounded-xl object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Message us */}
      <section id="message-us" className="py-16 sm:py-20">
        <Container size="md" className="text-center">
          <div className="reveal">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-text">Ordering</p>
            <h2 className="mt-2 font-script text-4xl sm:text-5xl text-charcoal">Ready to order?</h2>
            <p className="mt-4 text-charcoal-soft">
              Send us a message on your favourite platform. We'll confirm details
              and final price in chat.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={SITE.instagram.dm} target="_blank" rel="noopener noreferrer">
                <Button size="lg">Instagram</Button>
              </a>
              <a href={SITE.tiktok.url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">TikTok</Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.name} size="lg">
        {active && (
          <div className="grid gap-6 p-6 md:grid-cols-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
              <img
                src={active.image}
                alt={active.alt}
                loading="lazy"
                decoding="async"
                width="480"
                height="600"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fb = e.currentTarget.parentElement?.querySelector('.img-fallback')
                  if (fb) fb.style.display = 'flex'
                }}
              />
              <div className="img-fallback absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-blush via-rose-peach to-rose">
                <span className="font-script text-4xl text-rose-text/70">Petal Strokes</span>
              </div>
            </div>
            <div>
              <h2 className="font-script text-4xl text-charcoal">{active.name}</h2>
              <p className="mt-2 text-charcoal-soft">{active.description}</p>
              <div className="mt-4">
                <InquiryPanel bouquet={active} onToast={show} />
              </div>
            </div>
          </div>
        )}
      </Modal>
      <Toast message={toast} />
    </div>
  )
}