import { Badge } from './ui/Badge'

export function BouquetCard({ bouquet, onClick }) {
  return (
    <button
      onClick={onClick}
      className="card-lift group block w-full text-left"
    >
      <div className="overflow-hidden rounded-2xl bg-cream shadow-card">
        <div className="aspect-[4/5] overflow-hidden bg-blush/40">
          <img
            src={bouquet.image}
            alt={bouquet.alt}
            loading="lazy"
            decoding="async"
            width="400"
            height="500"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => { e.currentTarget.style.opacity = '0.4' }}
          />
        </div>
        <div className="p-4">
          <h3 className="font-script text-2xl text-charcoal">{bouquet.name}</h3>
          <p className="mt-1 text-sm text-charcoal-soft line-clamp-2">{bouquet.description}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {bouquet.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </div>
      </div>
    </button>
  )
}