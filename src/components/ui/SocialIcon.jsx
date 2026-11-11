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
          <path d="M12 3v4.4a4 4 0 0 0-.8 2.4l-1.4 2.2a4 4 0 0 0-.3 2.4v2c0 .6.4 1 1 1h6.4a1 1 0 0 0 1-1V12a4 4 0 0 0-.3-2.4l-1.4-2.2A4 4 0 0 0 12 7.4V3z" />
        </svg>
      )
    }
    if (name === 'facebook') {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8v-4h-4V4h4V2z" />
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
