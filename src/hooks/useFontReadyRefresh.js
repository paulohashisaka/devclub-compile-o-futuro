import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useFontReadyRefresh() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let cancelled = false

    document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh()
    })

    return () => {
      cancelled = true
    }
  }, [])
}
