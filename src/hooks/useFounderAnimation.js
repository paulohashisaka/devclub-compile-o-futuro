import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useFounderAnimation(scope) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        const mobile = window.matchMedia('(max-width: 768px)').matches
        const timeline = gsap.timeline({
          defaults: { ease: 'power3.out' },
          scrollTrigger: { trigger: scope.current, start: 'top 68%', once: true, invalidateOnRefresh: true },
        })

        timeline
          .from('[data-founder-reveal]', { y: mobile ? 14 : 24, force3D: false, duration: 0.62, stagger: 0.08 })
          .from('[data-founder-profile]', { x: mobile ? 0 : 30, y: mobile ? 16 : 0, duration: 0.75 }, '-=0.48')
          .fromTo('[data-founder-scan]', { xPercent: -115 }, { xPercent: 115, duration: 1.05, ease: 'power2.inOut' }, '-=0.45')
      }, scope)

      return () => context.revert()
    })

    return () => media.revert()
  }, [scope])
}
