import { useState } from 'react'

// Renders a bouquet photo, or a branded placeholder when the photo
// is missing. Keeps gallery cards from collapsing into empty boxes.
export function BouquetImage({ src, alt, className = '', imgClassName = '', eager = false }) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-blush via-rose-peach/70 to-rose/70 ${className}`}
    >
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
          <img
            src="/petal-strokes-emblem.png"
            alt=""
            aria-hidden="true"
            width="96"
            height="96"
            className="h-20 w-20 object-contain sm:h-24 sm:w-24"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-rose-text/80">
            Photo coming soon
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className={`h-full w-full object-cover ${imgClassName}`}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
