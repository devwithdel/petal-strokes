import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { WaveDivider } from '../components/ui/WaveDivider'
import { Button } from '../components/ui/Button'
import { Toast } from '../components/ui/Toast'
import { useToast } from '../hooks/useToast'
import { useReveal } from '../hooks/useReveal'
import { BOUQUETS, COLOR_IMAGES, FAQ, SIZES, SITE, STORY_HIGHLIGHTS, story as STORY, TESTIMONIALS } from '../data/catalog'

import { InquiryPanel } from '../components/InquiryPanel'

export default function Home() {
  const ref = useReveal()
  const [heroOk, setHeroOk] = useState(true)
  const [storyOk, setStoryOk] = useState(true)
  const [orderSize, setOrderSize] = useState(SIZES[1])
  const [openFaq, setOpenFaq] = useState(0)
  const { toast, show } = useToast()


  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden section-pad">
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
                <Button size="lg" onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore bouquets
                </Button>
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
      <section className="section-veil section-pad">
        <Container>
          <div className="reveal text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-text">Starting at ₱180</p>
            <h2 className="mt-1 font-script text-3xl text-charcoal">Pick your size</h2>
          </div>
          <div className="reveal mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {SIZES.map((s) => (
              <button
                key={s.pieces}
                type="button"
                onClick={() => {
                  setOrderSize(s)
                  document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="rounded-2xl bg-cream p-4 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <p className="font-script text-3xl text-rose-text">{s.pieces}</p>
                <p className="text-xs text-charcoal-soft">roses</p>
                <p className="mt-1 font-medium text-rose-deep">₱{s.price}</p>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Order / Build your bouquet */}
      <section id="order" className="section-veil section-pad">
        <Container>
          <div className="reveal text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-text">Build your bouquet</p>
            <h2 className="mt-2 font-script text-4xl sm:text-5xl text-charcoal">Create your order message</h2>
            <p className="mt-3 text-charcoal-soft">
              Choose your size, ribbon color and add-ons. We'll generate a ready-to-send message for you.
            </p>
          </div>
          <div className="mt-8">
            <div className="rounded-2xl bg-cream p-6 shadow-soft sm:p-8">
              <InquiryPanel size={orderSize} onSizeChange={setOrderSize} onToast={show} />
            </div>
          </div>
        </Container>
      </section>

      {/* Brand story */}
      <section className="section-pad">
        <Container>
          <div className="reveal mx-auto max-w-[620px] text-center">
            {/* Ornament */}
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-rose-text/40" />
              <img
                src="/images/petal-strokes-emblem.png"
                alt=""
                aria-hidden="true"
                width="48"
                height="48"
                className="h-12 w-12 object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <span className="h-px w-12 bg-rose-text/40" />
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-text">{STORY.eyebrow}</p>
            <h2 className="mt-2 font-script text-4xl sm:text-5xl text-rose-text">{STORY.heading}</h2>
            {STORY.body.map((para, i) => (
              <p key={i} className={`mt-4 ${i === 0 ? 'text-lg' : 'text-base'} text-body`}>{para}</p>
            ))}
            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {STORY_HIGHLIGHTS.map((h) => (
                <div key={h.label} className="flex flex-col items-center gap-2">
                  <span className="text-2xl" aria-hidden="true">{h.icon}</span>
                  <span className="text-sm text-body">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
          {storyOk && (
            <div className="reveal mx-auto mt-8 max-w-[620px]">
              <img
                src="/images/story.webp"
                alt="Petal Strokes story"
                loading="lazy"
                decoding="async"
                width="620"
                height="400"
                className="w-full rounded-2xl object-cover shadow-card"
                onError={() => setStoryOk(false)}
              />
            </div>
          )}
        </Container>
      </section>



      {/* FAQ */}
      <section className="section-veil section-pad">
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
        <section className="section-veil section-pad">
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
      <section id="message-us" className="section-pad">
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

      <Toast message={toast} />
    </div>
  )
}