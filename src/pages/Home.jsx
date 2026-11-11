import { useState } from 'react'
import { Container } from '../components/ui/Container'
import { WaveDivider } from '../components/ui/WaveDivider'
import { Button } from '../components/ui/Button'
import { Toast } from '../components/ui/Toast'
import { useToast } from '../hooks/useToast'
import { useReveal } from '../hooks/useReveal'
import { FAQ, SIZES, SITE, STORY_HIGHLIGHTS, story as STORY, TESTIMONIALS } from '../data/catalog'
import { TikTokIcon } from '../components/ui/BrandIcons'

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
      <section className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden lg:max-h-[760px]">
        <div className="light-beam -top-24 -right-10" />
        <Container className="relative py-8 sm:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="reveal text-sm font-medium uppercase tracking-[0.25em] text-rose-text">
                Handmade satin ribbon roses · Ozamiz City
              </p>
              <h1 className="sr-only">{SITE.name}</h1>
              <img
                src="/petal-strokes-wordmark.png"
                alt=""
                aria-hidden="true"
                width="751"
                height="423"
                fetchPriority="high"
                className="reveal mt-4 mb-4 h-auto w-full max-w-[clamp(220px,30vw,380px)]"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <p className="reveal mt-4 max-w-xl text-lg text-body">
                {SITE.tagline}
              </p>
              <div className="reveal mt-8 flex flex-col sm:flex-row flex-wrap gap-3 w-full">
                <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore bouquets
                </Button>
                <a
                  href="#message-us"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-rose-deep bg-cream px-7 py-3 text-base font-medium text-rose-deep transition-all duration-200 hover:bg-rose-deep hover:text-cream"
                >
                  Message us
                </a>
              </div>
            </div>
            <div className="reveal flex justify-center lg:justify-end">
              <div className="float-bouquet relative h-[300px] w-[92%] max-w-md -rotate-3 sm:h-[400px] sm:w-full lg:h-[460px]">
                {heroOk ? (
                  <img
                    src="/images/hero-bouquet.webp"
                    alt="A handmade satin ribbon rose bouquet"
                    width="480"
                    height="600"
                    fetchPriority="high"
                    className="h-full w-full rounded-3xl object-cover shadow-card"
                    onError={() => setHeroOk(false)}
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-blush via-rose-peach to-rose shadow-card"
                  >
                    <img
                      src="/petal-strokes-emblem.png"
                      alt=""
                      aria-hidden="true"
                      width="160"
                      height="160"
                      className="h-40 w-40 object-contain"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
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
      <section id="featured" className="section-veil section-pad">
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
                src="/petal-strokes-emblem.png"
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
      <section id="faq" className="section-veil section-pad">
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

      {/* Ready to order */}
      <section id="message-us" className="section-pad">
        <div
          className="reveal mx-auto max-w-[520px] rounded-[28px] bg-[rgba(251,247,240,0.35)] shadow-card p-10 sm:p-16 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-text">
            Still have questions?
          </p>
          <h2 className="mt-2 font-script text-4xl sm:text-5xl text-charcoal">
            Let's talk flowers
          </h2>
          <p className="mt-4 text-lg text-body">
            Message us on your favourite platform. We'll confirm details and the
            final price in chat.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 w-full sm:max-w-[420px]">
            <a
              href={SITE.instagram.dm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto h-[52px] min-w-[180px] items-center justify-center gap-2 rounded-full bg-rose-deep px-6 text-base font-medium text-cream transition hover:bg-charcoal focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2"
              aria-label={`Message Petal Strokes on Instagram, ${SITE.instagram.handle}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="17.5" x2="18.5" y2="18.5" />
              </svg>
              Instagram
            </a>
            <a
              href={SITE.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto h-[52px] min-w-[180px] items-center justify-center gap-2 rounded-full border-2 border-rose-deep bg-cream px-6 text-base font-medium text-rose-text transition hover:bg-rose-deep hover:text-cream focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2"
              aria-label={`Message Petal Strokes on TikTok, ${SITE.tiktok.handle}`}
            >
              <TikTokIcon size={20} />
              TikTok
            </a>
          </div>
          <p className="mt-6 text-sm text-body">
            <a
              href="#order"
              className="text-rose-text underline underline-offset-4 hover:text-rose-deep focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2"
            >
              Build your bouquet
            </a>
          </p>
        </div>
      </section>

      <Toast message={toast} />
    </div>
  )
}