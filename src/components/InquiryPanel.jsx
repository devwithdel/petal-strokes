import { useState, useMemo, useEffect } from 'react'
import { SIZES, RIBBON_COLORS, ADDONS, SITE } from '../data/catalog'
import { Button } from './ui/Button'

export function InquiryPanel({ onToast, onColorChange }) {
  const [size, setSize] = useState(SIZES[1])
  const [color, setColor] = useState(RIBBON_COLORS[0])
  const [addons, setAddons] = useState({})

  useEffect(() => {
    onColorChange?.(color)
  }, [color, onColorChange])

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
    return `Hi Petal Strokes! I'd like to order the satin ribbon rose bouquet with ${size.pieces} pieces in ${color.name} ribbon, with ${addonsText}. Estimated total: ₱${total}.`
  }, [size, color, addonLines, total])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message)
      onToast?.('Copied! Now paste it in our DM.')
    } catch {
      onToast?.('Copy failed — please select and copy manually.')
    }
  }

  return (
    <div className="space-y-6">
      {/* Size */}
      <div>
        <p className="text-base font-semibold text-charcoal">Size (number of roses)</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {SIZES.map((s) => {
            const selected = size.pieces === s.pieces
            return (
              <button
                key={s.pieces}
                onClick={() => setSize(s)}
                className={`flex min-h-[44px] min-w-[72px] items-center justify-center gap-1 rounded-xl border-2 px-4 py-2 text-base font-medium transition ${
                  selected
                    ? 'border-rose-deep bg-rose-deep text-cream'
                    : 'border-line bg-cream text-charcoal hover:border-rose-deep'
                }`}
              >
                {selected && <span aria-hidden="true">✓</span>}
                {s.pieces} pcs · ₱{s.price}
              </button>
            )
          })}
        </div>
      </div>

      {/* Color */}
      <div>
        <p className="text-base font-semibold text-charcoal">Ribbon color</p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {RIBBON_COLORS.map((c) => {
            const selected = color.id === c.id
            return (
              <button
                key={c.id}
                onClick={() => setColor(c)}
                aria-label={c.name}
                title={c.name}
                className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition ${
                  selected ? 'border-charcoal scale-110' : 'border-transparent'
                }`}
                style={{ backgroundColor: c.hex }}
              >
                {selected && <span className="text-charcoal drop-shadow" aria-hidden="true">✓</span>}
              </button>
            )
          })}
          <span className="text-base font-medium text-charcoal">{color.name}</span>
        </div>
      </div>

      {/* Add-ons */}
      <div>
        <p className="text-base font-semibold text-charcoal">Add-ons</p>
        <div className="mt-3 space-y-2">
          {ADDONS.map((a) => {
            const active = Boolean(addons[a.id])
            return (
              <div
                key={a.id}
                className={`flex items-center justify-between gap-3 rounded-xl border-2 px-4 py-3 transition ${
                  active ? 'border-rose-deep bg-blush/40' : 'border-transparent bg-blush/20'
                }`}
              >
                <label className="flex min-h-[44px] items-center gap-3 text-base text-charcoal">
                  <input
                    type="checkbox"
                    checked={active}
                    onChange={() => toggleAddon(a.id)}
                    className="h-5 w-5 accent-rose-deep"
                  />
                  {a.name} — ₱{a.price}
                  {active && <span className="text-rose-text" aria-hidden="true">✓</span>}
                </label>
                {active && a.quantity && (
                  <input
                    type="number"
                    min={1}
                    value={addons[a.id]}
                    onChange={(e) => setAddonQty(a.id, Number(e.target.value) || 1)}
                    className="w-16 rounded-lg border border-line bg-cream px-2 py-2 text-base text-center"
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
        <p className="font-script text-4xl text-rose-deep">₱{total}</p>
        <p className="text-xs text-muted">Estimate only — final price confirmed in chat.</p>
      </div>

      {/* Message preview */}
      <div className="rounded-xl bg-blush/40 p-4">
        <p className="text-sm font-medium text-charcoal-soft">Ready-to-send message</p>
        <p className="mt-1 text-base text-charcoal">{message}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <Button size="lg" className="w-full" onClick={copy}>Copy message</Button>
        <div className="grid grid-cols-2 gap-3">
          <a
            href={SITE.instagram.dm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-rose-deep px-4 py-2.5 text-base font-medium text-rose-deep transition hover:bg-rose-deep hover:text-cream"
          >
            Open Instagram
          </a>
          <a
            href={SITE.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-rose-deep px-4 py-2.5 text-base font-medium text-rose-deep transition hover:bg-rose-deep hover:text-cream"
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