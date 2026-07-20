import { useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { ecosystemContent, ecosystemModules } from '../../data/ecosystem.js'
import { useEcosystemAnimation } from '../../hooks/useEcosystemAnimation.js'
import { sectionTransitions } from '../../data/transitions.js'
import { EcosystemModule } from '../ui/EcosystemModule.jsx'
import { TechnicalHandoff } from '../ui/TechnicalHandoff.jsx'

export function EcosystemSection() {
  const sectionRef = useRef(null)
  useEcosystemAnimation(sectionRef)

  return (
    <section className="ecosystem-section" id="ecossistema" ref={sectionRef} aria-labelledby="ecosystem-title">
      <div className="container">
        <header className="section-heading ecosystem-heading" data-ecosystem-header>
          <p className="section-eyebrow">{ecosystemContent.eyebrow}</p>
          <h2 id="ecosystem-title">{ecosystemContent.titleLead}<br /><em>{ecosystemContent.titleAccent}</em></h2>
          <p>{ecosystemContent.description}</p>
        </header>

        <div className="ecosystem-console" data-ecosystem-console>
          <div className="ecosystem-console__bar" aria-hidden="true">
            <span>{ecosystemContent.consoleLabel}</span>
            <span><i />{ecosystemContent.syncingLabel}</span>
          </div>
          <svg className="ecosystem-flow" viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true">
            <path pathLength="1" data-sync-line d="M410 300 H525" />
            <path pathLength="1" data-sync-line d="M705 300 H775 V150 H835" />
            <path pathLength="1" data-sync-line d="M775 300 V450 H835" />
          </svg>
          <ul className="ecosystem-modules">
            {ecosystemModules.map((module) => <EcosystemModule module={module} key={module.id} />)}
          </ul>
          <div className="ecosystem-complete">
            <CheckCircle2 size={15} aria-hidden="true" />
            <span>{ecosystemContent.completion}</span>
            <small>{ecosystemModules.length} / {ecosystemModules.length} {ecosystemContent.channelLabel}</small>
          </div>
        </div>
        <TechnicalHandoff messages={sectionTransitions.ecosystemToFounder} />
      </div>
    </section>
  )
}
