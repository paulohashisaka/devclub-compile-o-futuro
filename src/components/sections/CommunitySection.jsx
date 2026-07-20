import { useRef } from 'react'
import { ArrowUpRight, Radio } from 'lucide-react'
import { communityContent, communityNodes } from '../../data/community.js'
import { sectionTransitions } from '../../data/transitions.js'
import { useCommunityAnimation } from '../../hooks/useCommunityAnimation.js'
import { CommunityNode } from '../ui/CommunityNode.jsx'
import { SafeLink } from '../ui/SafeLink.jsx'
import { TechnicalHandoff } from '../ui/TechnicalHandoff.jsx'

export function CommunitySection() {
  const sectionRef = useRef(null)

  useCommunityAnimation(sectionRef)

  return (
    <section className="community-section" id="comunidade" ref={sectionRef} aria-labelledby="community-title">
      <div className="community-grid-bg" aria-hidden="true" />
      <div className="container">
        <header className="section-heading community-heading" data-community-header>
          <p className="section-eyebrow">{communityContent.eyebrow}</p>
          <h2 id="community-title">{communityContent.titleLead}<br /><em>{communityContent.titleAccent}</em></h2>
          <p>{communityContent.description}</p>
        </header>

        <div className="community-network" data-community-network>
          <svg className="community-connections" viewBox="0 0 1000 680" preserveAspectRatio="none" aria-hidden="true">
            <g className="community-connections__base">
              <path pathLength="1" data-network-line d="M500 340 C430 300 380 220 245 156" />
              <path pathLength="1" data-network-line d="M500 340 C570 300 620 220 755 156" />
              <path pathLength="1" data-network-line d="M500 340 C430 380 380 470 245 524" />
              <path pathLength="1" data-network-line d="M500 340 C570 380 620 470 755 524" />
            </g>
            <g className="community-connections__signal">
              <path pathLength="1" d="M500 340 C430 300 380 220 245 156" />
              <path pathLength="1" d="M500 340 C570 300 620 220 755 156" />
              <path pathLength="1" d="M500 340 C430 380 380 470 245 524" />
              <path pathLength="1" d="M500 340 C570 380 620 470 755 524" />
            </g>
          </svg>

          <div className="community-core">
            <span className="community-core__orbit" aria-hidden="true"><i /><i /><i /></span>
            <Radio size={19} aria-hidden="true" />
            <strong>{communityContent.core.label}</strong>
            <small><i />{communityContent.core.status}</small>
          </div>

          <ul className="community-nodes">
            {communityNodes.map((node) => <CommunityNode node={node} activityLabel={communityContent.activityLabel} key={node.id} />)}
          </ul>
        </div>

        <SafeLink className="community-cta" href={communityContent.cta.href}>
          {communityContent.cta.label} <ArrowUpRight size={17} aria-hidden="true" />
        </SafeLink>
        <TechnicalHandoff messages={sectionTransitions.communityToEcosystem} />
      </div>
    </section>
  )
}
