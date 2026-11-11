import { useState, useMemo } from 'react'
import { SIZES, RIBBON_COLORS, ADDONS, SITE } from '../data/catalog'
import { Button } from './ui/Button'

export function InquiryPanel({ bouquet, onToast }) {
  const [size, setSize] = useState(SIZES[1]) // 5 pieces
  const [color, setColor] = useState(RIBBON_COLORS[0])
  const [addons, setAddons] = useState({}) // id -> quantity (0/undefined = off)

  const toggleAddon = (id) => {
    setAddons((prev) => {
      const next = { ...prev }
      if (next[id]) delete next[id]
      else next[id] = 1
      return next
    })
  }
  const setAddonQty = (id, q) => {
    setAddons((prev) => ({ ...prev, [id]: Math.max(1, q) }))
  }

  const { total, addonLines } = useMemo(() => {
    let t = size.price
    const lines = []
    ADDONS.forEach((a) => {
      const q = addons[a.id]
      if (!q) return
      const qty = a.quantity ? q : 1
      const sub = a.price * qty
      t += sub
      lines.push(`${a.name}${a.quantity ? ` x${qty}` : ''}`)
    })
    return { total: t, addonLines: lines }
  }, [size, addons])

  const message = useMemo(() => {
    const addonsText = addonLines.length ? addonLines.join(', ') : 'no add-ons'
    return `Hi Petal Strokes! I'd like to order the ${bouquet.name} with ${size.pieces} pieces in ${color.name} ribbon, with ${addonsText}. Estimated total: ₱${total}.`
  }, [bouquet, size, color, addonLines, total])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message)
      onToast?.('Message copied! Paste it in our DMs.')
    } catch {
      onToast?.('Copy failed — please select and copy manually.')
    }
  }

  return (
    <div className="space-y-5">
      {/* Size */}
      <div>
        <p className="text-sm font-semibold text-charcoal">Size (number of roses)</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {SIZES.map((s) => (
            <button
              key={s.pieces}
              onClick={() => setSize(s)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                size.pieces === s.pieces
                  ? 'bg-rose-deep text-cream'
                  : 'bg-blush/60 text-charcoal hover:bg-blush'
              }`}
            >
              {s.pieces} pcs · ₱{s.price}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <p className="text-sm font-semibold text-charcoal">Ribbon color</p>
        <div className="mt-2 flex flex-wrap gap-3">
          {RIBBON_COLORS.map((c) => (
            <button
              key={c.id}
              onClick={() => setColor(c)}
              aria-label={c.name}
              title={c.name}
              className={`h-9 w-9 rounded-full border-2 transition ${
                color.id === c.id ? 'border-charcoal scale-110' : 'border-transparent'
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
        <p className="mt-1 text-xs text-muted">Selected: {color.name}</p>
      </div>

      {/* Add-ons */}
      <div>
        <p className="text-sm font-semibold text-charcoal">Add-ons</p>
        <div className="mt-2 space-y-2">
          {ADDONS.map((a) => {
            const active = Boolean(addons[a.id])
            return (
              <div key={a.id} className="flex items-center justify-between gap-3 rounded-xl bg-blush/40 px-3 py-2">
                <label className="flex items-center gap-2 text-sm text-charcoal">
                  <input
                    type="checkbox"
                    checked={active}
                    onChange={() => toggleAddon(a.id)}
                    className="h-4 w-4 accent-rose-deep"
                  />
                  {a.name} — ₱{a.price}
                </label>
                {active && a.quantity && (
                  <input
                    type="number"
                    min={1}
                    value={addons[a.id]}
                    onChange={(e) => setAddonQty(a.id, Number(e.target.value) || 1)}
                    className="w-14 rounded-lg border border-line bg-cream px-2 py-1 text-sm text-center"
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Total */}
      <div className="rounded-xl bg-cream px-4 py-3">
        <p className="text-xs uppercase tracking-wide text-muted">Estimated total</p>
        <p className="font-script text-3xl text-rose-deep">₱{total}</p>
        <p className="text-xs text-muted">
          Estimate only — final price confirmed in chat.
        </p>
      </div>

      {/* Message preview */}
      <div className="rounded-xl bg-blush/40 p-3">
        <p className="text-xs font-medium text-charcoal-soft">Ready-to-send message</p>
        <p className="mt-1 text-sm text-charcoal">{message}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2">
        <Button onClick={copy}>Copy message</Button>
        <div className="grid grid-cols-2 gap-2">
          <a
            href={SITE.instagram.dm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-rose-deep px-4 py-2.5 text-sm font-medium text-rose-deep transition hover:bg-rose-deep hover:text-cream"
          >
            Open Instagram DM
          </a>
          <a
            href={SITE.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-rose-deep px-4 py-2.5 text-sm font-medium text-rose-deep transition hover:bg-rose-deep hover:text-cream"
          >
            Open TikTok
          </a>
        </div>
        <p className="text-xs text-muted">
          Instagram and TikTok can't prefill messages, so paste the copied text into our DM.
        </p>
      </div>
    </div>
  )
}