import { useLayoutEffect } from 'react'
import gsap from 'gsap'

export function useHeroAnimation(scope) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
        timeline
          .from('[data-hero-reveal]', { y: 34, opacity: 0, duration: 0.85, stagger: 0.1 })
          .from('[data-compiler]', { x: 42, opacity: 0, duration: 1 }, '-=0.6')
          .from('[data-trace]', { strokeDashoffset: 420, duration: 1.5, ease: 'power2.inOut' }, '-=0.8')
          .from('[data-node]', { scale: 0, transformOrigin: 'center', duration: 0.35, stagger: 0.08 }, '-=0.9')

        gsap.to('[data-float]', { y: -9, duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      }, scope)

      return () => context.revert()
    })

    return () => media.revert()
  }, [scope])
}
