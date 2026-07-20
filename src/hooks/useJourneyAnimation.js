import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useJourneyAnimation(scope) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        const steps = gsap.utils.toArray('[data-journey-step]')
        const mobile = window.matchMedia('(max-width: 768px)').matches

        gsap.from('[data-method-header] > *', {
          y: mobile ? 16 : 26,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: '[data-method-header]', start: 'top 78%', once: true, invalidateOnRefresh: true },
        })

        gsap.fromTo('[data-journey-progress]',
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '[data-journey-list]',
              start: 'top 62%',
              end: 'bottom 48%',
              scrub: 0.45,
              invalidateOnRefresh: true,
            },
          },
        )

        steps.forEach((step) => {
          const pieces = step.querySelectorAll('[data-step-reveal]')

          gsap.from(pieces, {
            y: mobile ? 14 : 24,
            duration: mobile ? 0.45 : 0.62,
            stagger: 0.07,
            ease: 'power2.out',
            scrollTrigger: { trigger: step, start: 'top 76%', once: true, invalidateOnRefresh: true },
          })

          ScrollTrigger.create({
            trigger: step,
            start: 'top 58%',
            end: 'bottom 42%',
            toggleClass: { targets: step, className: 'is-active' },
            invalidateOnRefresh: true,
          })
        })
      }, scope)

      return () => context.revert()
    })

    return () => media.revert()
  }, [scope])
}
