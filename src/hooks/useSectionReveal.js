import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useSectionReveal(scope) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        const mobile = window.matchMedia('(max-width: 768px)').matches
        const revealItems = gsap.utils.toArray('[data-section-reveal]')

        gsap.from(revealItems, {
          y: mobile ? 14 : 24,
          opacity: (_, element) => element.closest('.section-heading') ? 1 : 0,
          force3D: false,
          duration: mobile ? 0.5 : 0.68,
          stagger: 0.07,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: scope.current,
            start: 'top 76%',
            once: true,
            invalidateOnRefresh: true,
          },
        })
      }, scope)

      return () => context.revert()
    })

    return () => media.revert()
  }, [scope])
}
