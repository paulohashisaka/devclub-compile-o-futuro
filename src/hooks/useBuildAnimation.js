import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useBuildAnimation(scope) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: '[data-final-build]', start: 'top 70%', once: true, invalidateOnRefresh: true },
        })

        timeline
          .from('[data-build-line]', { scaleY: 0, transformOrigin: 'top', duration: 0.7, ease: 'power2.inOut' })
          .from('[data-build-step]', { x: 18, duration: 0.36, stagger: 0.1, ease: 'power2.out' }, '-=0.32')
          .from('[data-build-check]', { scale: 0, transformOrigin: 'center', duration: 0.25, stagger: 0.1, ease: 'back.out(2)' }, '<')
          .from('[data-build-state]', { y: 16, opacity: 0, duration: 0.55, ease: 'power3.out' })
      }, scope)

      return () => context.revert()
    })

    return () => media.revert()
  }, [scope])
}
