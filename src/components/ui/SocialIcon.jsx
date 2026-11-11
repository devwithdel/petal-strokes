import { FacebookIcon, InstagramIcon, TikTokIcon } from './BrandIcons'

const icons = {
  instagram: <InstagramIcon size={18} />,
  tiktok: <TikTokIcon size={18} />,
  facebook: <FacebookIcon size={18} />,
}

export function SocialIcon({ platform, url, handle, ariaLabel }) {
  const icon = icons[platform]

  if (!icon) return null

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2.5 rounded-full py-1 pl-1 pr-3 text-sm text-body transition-all duration-200 hover:-translate-y-1 hover:shadow-soft focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2"
      aria-label={ariaLabel}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B85C6B] text-[#FBF7F0] transition-colors duration-200 group-hover:bg-[#7A2E3C]">
        {icon}
      </span>
      <span className="truncate">{handle}</span>
    </a>
  )
}
