import { useState } from 'react'
import { Container } from '../components/ui/Container'
import { Modal } from '../components/ui/Modal'
import { Toast } from '../components/ui/Toast'
import { useToast } from '../hooks/useToast'
import { useReveal } from '../hooks/useReveal'
import { BOUQUETS } from '../data/catalog'
import { BouquetCard } from '../components/BouquetCard'
import { InquiryPanel } from '../components/InquiryPanel'

export default function Gallery() {
  const ref = useReveal()
  const [active, setActive] = useState(null)
  const { toast, show } = useToast()

  return (
    <div ref={ref}>
      <Container className="py-12 sm:py-16">
        <div className="reveal">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-text">Gallery</p>
          <h1 className="mt-2 font-script text-5xl text-charcoal">Our bouquets</h1>
          <p className="mt-3 max-w-xl text-charcoal-soft">
            Tap any bouquet to see sizes, colors and add-ons, then send us a message.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {BOUQUETS.map((b) => (
            <div key={b.id} className="reveal mb-5 break-inside-avoid">
              <BouquetCard bouquet={b} onClick={() => setActive(b)} />
            </div>
          ))}
        </div>
      </Container>

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