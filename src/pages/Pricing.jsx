import { Container } from '../components/ui/Container'
import { useReveal } from '../hooks/useReveal'
import { SIZES, ADDONS, RIBBON_COLORS } from '../data/catalog'

export default function Pricing() {
  const ref = useReveal()
  return (
    <div ref={ref}>
      <Container className="py-12 sm:py-16">
        <div className="reveal">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-text">Pricing guide</p>
          <h1 className="mt-2 font-script text-5xl text-charcoal">Simple, honest prices</h1>
          <p className="mt-3 max-w-xl text-charcoal-soft">
            All prices in Philippine pesos. Final total confirmed in chat.
          </p>
        </div>

        {/* Sizes */}
        <div className="reveal mt-10">
          <h2 className="font-script text-3xl text-charcoal">Bouquet sizes</h2>
          <div className="mt-4 overflow-hidden rounded-2xl bg-cream shadow-soft">
            <table className="w-full text-left">
              <thead className="bg-blush/60">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-charcoal">Size</th>
                  <th className="px-4 py-3 text-sm font-semibold text-charcoal">Price</th>
                </tr>
              </thead>
              <tbody>
                {SIZES.map((s) => (
                  <tr key={s.pieces} className="border-t border-line">
                    <td className="px-4 py-3 text-charcoal">{s.pieces} ribbon roses</td>
                    <td className="px-4 py-3 font-medium text-rose-text">₱{s.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add-ons */}
        <div className="reveal mt-10">
          <h2 className="font-script text-3xl text-charcoal">Add-ons</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {ADDONS.map((a) => (
              <div key={a.id} className="flex items-center justify-between rounded-xl bg-cream px-4 py-3 shadow-soft">
                <span className="text-charcoal">{a.name}</span>
                <span className="font-medium text-rose-text">₱{a.price}{a.quantity ? ' each' : ''}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="reveal mt-10">
          <h2 className="font-script text-3xl text-charcoal">Ribbon colors</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {RIBBON_COLORS.map((c) => (
              <div key={c.id} className="flex items-center gap-2 rounded-full bg-cream px-3 py-1.5 shadow-soft">
                <span className="h-5 w-5 rounded-full border border-line" style={{ backgroundColor: c.hex }} />
                <span className="text-sm text-charcoal">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}