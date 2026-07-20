import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useCommunityAnimation(scope) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        const network = scope.current.querySelector('[data-community-network]')
        const nodes = gsap.utils.toArray('[data-community-node]')
        const mobile = window.matchMedia('(max-width: 900px)').matches

        gsap.from('[data-community-header] > *', {
          y: mobile ? 14 : 24,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: '[data-community-header]', start: 'top 78%', once: true, invalidateOnRefresh: true },
        })

        gsap.fromTo('[data-network-line]',
          { strokeDashoffset: 1 },
          {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: network,
              start: 'top 72%',
              end: 'center 48%',
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          },
        )

        ScrollTrigger.create({
          trigger: network,
          start: 'top 65%',
          end: 'bottom 35%',
          toggleClass: { targets: network, className: 'is-live' },
          invalidateOnRefresh: true,
        })

        nodes.forEach((node) => {
          gsap.from(node, {
            y: mobile ? 14 : 22,
            duration: 0.55,
            ease: 'power2.out',
            scrollTrigger: { trigger: node, start: 'top 78%', once: true, invalidateOnRefresh: true },
          })

          ScrollTrigger.create({
            trigger: node,
            start: 'top 63%',
            end: 'bottom 40%',
            toggleClass: { targets: node, className: 'is-active' },
            invalidateOnRefresh: true,
          })
        })
      }, scope)

      return () => context.revert()
    })

    return () => media.revert()
  }, [scope])
}
