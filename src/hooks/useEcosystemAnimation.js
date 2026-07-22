import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useEcosystemAnimation(scope) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      let consoleElement
      const context = gsap.context(() => {
        consoleElement = scope.current.querySelector('[data-ecosystem-console]')
        const modules = gsap.utils.toArray('[data-ecosystem-module]')
        const mobile = window.matchMedia('(max-width: 900px)').matches

        gsap.from('[data-ecosystem-header] > *', {
          y: mobile ? 14 : 24,
          force3D: false,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: '[data-ecosystem-header]', start: 'top 78%', once: true, invalidateOnRefresh: true },
        })

        gsap.fromTo('[data-sync-line]',
          { strokeDashoffset: 1 },
          {
            strokeDashoffset: 0,
            duration: 1.15,
            stagger: 0.12,
            ease: 'power2.inOut',
            scrollTrigger: { trigger: consoleElement, start: 'top 68%', once: true, invalidateOnRefresh: true },
          },
        )

        gsap.from(modules, {
          y: mobile ? 14 : 26,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: consoleElement, start: 'top 72%', once: true, invalidateOnRefresh: true },
        })

        ScrollTrigger.create({
          trigger: consoleElement,
          start: 'top 66%',
          onEnter: () => consoleElement.classList.add('is-synced'),
          once: true,
          invalidateOnRefresh: true,
        })
      }, scope)

      return () => {
        consoleElement?.classList.remove('is-synced')
        context.revert()
      }
    })

    return () => media.revert()
  }, [scope])
}
