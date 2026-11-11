import { useState, useCallback } from 'react'

export function useToast(duration = 2200) {
  const [toast, setToast] = useState(null)

  const show = useCallback((msg) => {
    setToast(msg)
    window.clearTimeout(window.__toastTimer)
    window.__toastTimer = window.setTimeout(() => setToast(null), duration)
  }, [duration])

  return { toast, show }
}