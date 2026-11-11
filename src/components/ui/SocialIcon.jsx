export function SocialIcon({ platform, url, handle, ariaLabel }) {
  const getIcon = (name) => {
    if (name === 'instagram') {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="16.5" cy="7.5" r="1.5" />
        </svg>
      )
    }
    if (name === 'tiktok') {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 12c0 4.7-4.3 8.6-9 8.6s-9-3.9-9-8.6c0-4.2 3.4-7.7 7.7-7.7 1.6 0 3 0.5 4.2 1.3L9.4 6.5c-1.4-1-3.1-1.7-4.9-1.7C1.4 4.8 0 6.2 0 7.7c0 1.2.3 2.4 1 3.3l3.6-5.4c-1-1.2-1.5-2.7-1.5-4.3 0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.6-.5 3.1-1.5 4.3L21 11c0.7-0.9 1-2.1 1-3.3 0-1.5-1.4-2.9-2.9-2.9z" />
        </svg>
      )
    }
    if (name === 'facebook') {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0c-6.6 0-12 5.4-12 12 0 2 0.2 3.9 0.5 5.8H2v7h4v-2h4v-2h4v2h4v-7h-4v-2c0-2.5 0.9-4.9 3.7-4.9 1.8 0 2.3 0.1 2.5 0.2V3h-2c-2 0-3 1-3 3v2z" />
        </svg>
      )
    }
    return null
  }

  const Icon = getIcon(platform)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-body transition-all duration-200 hover:-translate-y-1 hover:shadow-soft focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2"
      aria-label={ariaLabel}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B85C6B] text-[#FBF7F0] text-[18px] transition-colors duration-200 hover:bg-[#7A2E3C]">
        {Icon}
      </span>
      <span>{handle}</span>
    </a>
  )
}
