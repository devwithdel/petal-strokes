import { Container } from '../components/ui/Container'
import { useReveal } from '../hooks/useReveal'

const steps = [
  { n: '1', title: 'Pick a bouquet', body: 'Browse the gallery and choose a design you love.' },
  { n: '2', title: 'Choose size, color & add-ons', body: 'Select the number of roses, ribbon color, and any extras. See your estimate live.' },
  { n: '3', title: 'Send us a message', body: 'Copy the ready-to-send message and paste it in our Instagram or TikTok DM. We confirm details and final price in chat.' },
]

export default function HowToOrder() {
  const ref = useReveal()
  return (
    <div ref={ref}>
      <Container className="py-12 sm:py-16">
        <div className="reveal">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-deep">How to order</p>
          <h1 className="mt-2 font-script text-5xl text-charcoal">Three simple steps</h1>
          <p className="mt-3 max-w-xl text-charcoal-soft">
            Orders are handled by private message — no cart, no checkout. Just chat with us.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="reveal rounded-2xl bg-cream p-6 shadow-soft">
              <span className="font-script text-5xl text-rose-deep">{s.n}</span>
              <h3 className="mt-2 font-script text-2xl text-charcoal">{s.title}</h3>
              <p className="mt-2 text-sm text-charcoal-soft">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-10 rounded-2xl bg-blush/50 p-6">
          <p className="text-sm text-charcoal">
            <strong>Note:</strong> Instagram and TikTok can't prefill messages, so we generate
            a message for you to copy and paste into our DM. Final price is always confirmed in chat.
          </p>
        </div>
      </Container>
    </div>
  )
}