import { Container } from '../components/ui/Container'
import { useReveal } from '../hooks/useReveal'
import { SITE } from '../data/catalog'

const platforms = [
  {
    name: 'Instagram',
    handle: SITE.instagram.handle,
    href: SITE.instagram.dm,
    desc: 'DM us for orders and inquiries.',
    cta: 'Open Instagram',
  },
  {
    name: 'TikTok',
    handle: SITE.tiktok.handle,
    href: SITE.tiktok.url,
    desc: 'Watch our bouquets and behind-the-scenes.',
    cta: 'Open TikTok',
  },
]

if (SITE.facebook) {
  platforms.push({
    name: 'Facebook / Messenger',
    handle: SITE.facebook.handle,
    href: SITE.facebook.dm,
    desc: 'Message us on Messenger.',
    cta: 'Open Messenger',
  })
}

export default function Contact() {
  const ref = useReveal()
  return (
    <div ref={ref} id="contact-section">
      <Container className="py-12 sm:py-16">
        <div className="reveal">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-text">Contact</p>
          <h1 className="mt-2 font-script text-5xl text-charcoal">Message us</h1>
          <p className="mt-3 max-w-xl text-charcoal-soft">
            We're one message away. Tap a platform to start chatting.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal card-lift block rounded-2xl bg-cream p-6 shadow-soft"
            >
              <h3 className="font-script text-3xl text-charcoal">{p.name}</h3>
              <p className="mt-1 text-sm font-medium text-rose-text">{p.handle}</p>
              <p className="mt-2 text-sm text-charcoal-soft">{p.desc}</p>
              <span className="mt-4 inline-block text-sm font-medium text-charcoal underline underline-offset-4">
                {p.cta} →
              </span>
            </a>
          ))}
        </div>
      </Container>
    </div>
  )
}