import { useRef } from 'react'
import { Radio } from 'lucide-react'
import { communityContent, communityNodes } from '../../data/community.js'
import { sectionTransitions } from '../../data/transitions.js'
import { useCommunityAnimation } from '../../hooks/useCommunityAnimation.js'
import { CommunityNode } from '../ui/CommunityNode.jsx'
import { TechnicalHandoff } from '../ui/TechnicalHandoff.jsx'

export function CommunitySection() {
  const sectionRef = useRef(null)

  useCommunityAnimation(sectionRef)

  return (
    <section className="community-section" id="ensino" ref={sectionRef} aria-labelledby="teaching-title">
      <div className="community-grid-bg" aria-hidden="true" />
      <div className="container">
        <header className="section-heading community-heading" data-community-header>
          <p className="section-eyebrow">{communityContent.eyebrow}</p>
          <h2 id="teaching-title">{communityContent.titleLead}<br /><em>{communityContent.titleAccent}</em></h2>
          <p>{communityContent.description}</p>
        </header>

        <div className="community-network" data-community-network>
          <svg className="community-connections" viewBox="0 0 1200 960" preserveAspectRatio="none" aria-hidden="true">
            <g className="community-connections__base">
              <path pathLength="1" data-network-line d="M600 440 C600 408 600 380 600 350" />
              <path pathLength="1" data-network-line d="M600 440 C500 474 330 493 195 530" />
              <path pathLength="1" data-network-line d="M600 440 C600 476 600 500 600 530" />
              <path pathLength="1" data-network-line d="M600 440 C700 474 870 493 1005 530" />
            </g>
            <g className="community-connections__signal">
              <path pathLength="1" d="M600 440 C600 408 600 380 600 350" />
              <path pathLength="1" d="M600 440 C500 474 330 493 195 530" />
              <path pathLength="1" d="M600 440 C600 476 600 500 600 530" />
              <path pathLength="1" d="M600 440 C700 474 870 493 1005 530" />
            </g>
          </svg>

          <div className="community-core" aria-hidden="true">
            <span className="community-core__orbit" aria-hidden="true"><i /><i /><i /></span>
            <Radio size={19} aria-hidden="true" />
            <strong>{communityContent.core.label}</strong>
            <small><i />{communityContent.core.status}</small>
          </div>

          <ul className="community-nodes">
            {communityNodes.map((node) => <CommunityNode node={node} key={node.id} />)}
          </ul>
        </div>
        <TechnicalHandoff messages={sectionTransitions.teachingToEcosystem} />
      </div>
    </section>
  )
}
