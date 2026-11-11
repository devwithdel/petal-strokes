import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Modal } from '../components/ui/Modal'
import { Toast } from '../components/ui/Toast'
import { useToast } from '../hooks/useToast'
import { useReveal } from '../hooks/useReveal'
import { BOUQUETS, RIBBON_COLORS, SITE } from '../data/catalog'
import { BouquetCard } from '../components/BouquetCard'
import { InquiryPanel } from '../components/InquiryPanel'

export default function Home() {
  const ref = useReveal()
  const [active, setActive] = useState(null)
  const { toast, show } = useToast()
  const featured = BOUQUETS.filter((b) => b.featured)

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="light-beam -top-24 -right-10" />
        <Container className="relative py-20 sm:py-28 lg:py-36">
          <p className="reveal text-sm font-medium uppercase tracking-[0.25em] text-rose-deep">
            Handmade satin ribbon roses · Ozamiz City
          </p>
          <h1 className="reveal mt-4 font-script text-6xl sm:text-7xl lg:text-8xl text-charcoal">
            {SITE.name}
          </h1>
          <p className="reveal mt-4 max-w-xl text-lg text-charcoal-soft">
            {SITE.tagline}
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <Link to="/gallery">
              <Button size="lg">Explore bouquets</Button>
            </Link>
            <a href="#message-us">
              <Button variant="outline" size="lg">Message us</Button>
            </a>
          </div>
        </Container>
      </section>

      {/* Featured */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="reveal">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-deep">Featured</p>
            <h2 className="mt-2 font-script text-4xl sm:text-5xl text-charcoal">Our favourites</h2>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((b) => (
              <div key={b.id} className="reveal">
                <BouquetCard bouquet={b} onClick={() => setActive(b)} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Brand story */}
      <section className="bg-cream/50 py-16 sm:py-20">
        <Container size="md">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="reveal">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-deep">Our story</p>
              <h2 className="mt-2 font-script text-4xl sm:text-5xl text-charcoal">Made by hand, sent with love.</h2>
              <p className="mt-4 text-charcoal-soft">
                Petal Strokes started as a small passion project — satin ribbon roses
                shaped petal by petal, each bouquet a little labour of love. No two
                are ever exactly alike.
              </p>
              <p className="mt-3 text-charcoal-soft">
                We'd love to make something special for you. Browse, pick your
                colours, and send us a message to order.
              </p>
            </div>
            <div className="reveal">
              <img
                src="/images/bouquet-classic.jpg"
                alt="A classic blush satin ribbon rose bouquet"
                className="aspect-square w-full rounded-2xl object-cover shadow-card"
                onError={(e) => { e.currentTarget.style.opacity = '0.4' }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Ribbon colors */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="reveal text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-deep">Ribbon colors</p>
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

      {/* Message us */}
      <section id="message-us" className="bg-cream/60 py-16 sm:py-20">
        <Container size="md" className="text-center">
          <div className="reveal">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-deep">Ordering</p>
            <h2 className="mt-2 font-script text-4xl sm:text-5xl text-charcoal">Ready to order?</h2>
            <p className="mt-4 text-charcoal-soft">
              Send us a message on your favourite platform. We'll confirm details
              and final price in chat.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={SITE.instagram.dm} target="_blank" rel="noopener noreferrer">
                <Button size="lg">Instagram DM</Button>
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
            <img
              src={active.image}
              alt={active.alt}
              className="aspect-[4/5] w-full rounded-xl object-cover"
              onError={(e) => { e.currentTarget.style.opacity = '0.4' }}
            />
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