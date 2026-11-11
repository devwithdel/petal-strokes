import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { BouquetImage } from './ui/BouquetImage'

export function BouquetCard({ bouquet, onClick }) {
  return (
    <div className="card-lift group block w-full text-left">
      <div className="overflow-hidden rounded-2xl bg-cream shadow-card">
        <button
          type="button"
          onClick={onClick}
          className="block w-full text-left"
          aria-label={`View ${bouquet.name}`}
        >
          <BouquetImage
            src={bouquet.image}
            alt={bouquet.alt}
            className="aspect-[4/5]"
            imgClassName="transition-transform duration-500 group-hover:scale-105"
          />
          <div className="p-4">
            <h3 className="font-script text-2xl text-charcoal">{bouquet.name}</h3>
            <p className="mt-1 text-sm text-charcoal-soft line-clamp-2">{bouquet.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {bouquet.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <p className="mt-3 text-sm font-medium text-rose-deep">From ₱180</p>
          </div>
        </button>
        <div className="px-4 pb-4">
          <Button size="sm" className="w-full" onClick={onClick}>
            Inquire
          </Button>
        </div>
      </div>
    </div>
  )
}
