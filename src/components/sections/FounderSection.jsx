import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { founderContent, founderIndicators } from '../../data/founder.js'
import { sectionTransitions } from '../../data/transitions.js'
import { useFounderAnimation } from '../../hooks/useFounderAnimation.js'
import { SafeLink } from '../ui/SafeLink.jsx'
import { TechnicalHandoff } from '../ui/TechnicalHandoff.jsx'
import rodolfoMoriPhoto from '../../../assets/rodoldomori.jpeg'

export function FounderSection() {
  const sectionRef = useRef(null)
  useFounderAnimation(sectionRef)

  return (
    <section className="founder-section" id="fundador" ref={sectionRef} aria-labelledby="founder-title">
      <div className="container">
        <div className="founder-layout">
          <div className="founder-story">
            <header className="section-heading">
              <p className="section-eyebrow" data-founder-reveal>{founderContent.eyebrow}</p>
              <h2 id="founder-title" data-founder-reveal>{founderContent.titleLead}<br /><em>{founderContent.titleAccent}</em></h2>
            </header>
            <p className="founder-story__text" data-founder-reveal>{founderContent.story}</p>
            <div className="founder-identity" data-founder-reveal>
              <strong>{founderContent.name}</strong>
              <span>{founderContent.role}</span>
            </div>
            <ul className="founder-indicators">
              {founderIndicators.map(({ label, description, icon: Icon }) => (
                <li key={label} data-founder-reveal>
                  <Icon size={17} aria-hidden="true" />
                  <p><strong>{label}</strong><span>{description}</span></p>
                </li>
              ))}
            </ul>
            <SafeLink className="founder-cta" href={founderContent.cta.href} data-founder-reveal>
              {founderContent.cta.label} <ArrowUpRight size={17} aria-hidden="true" />
            </SafeLink>
          </div>

          <div className="founder-profile" data-founder-profile>
            <div className="founder-profile__scan" data-founder-scan aria-hidden="true" />
            <span className="founder-profile__label" aria-hidden="true">{founderContent.profileLabel}</span>
            <img
              className="founder-profile__image"
              src={rodolfoMoriPhoto}
              width="399"
              height="501"
              loading="lazy"
              decoding="async"
              alt="Rodolfo Mori, fundador, principal professor e criador do método DevClub"
            />
            <div className="founder-profile__lines" aria-hidden="true"><i /><i /><i /></div>
            <footer aria-hidden="true"><span>{founderContent.name}</span><span>{founderContent.assetStatus}</span></footer>
          </div>
        </div>
        <TechnicalHandoff messages={sectionTransitions.founderToBuild} />
      </div>
    </section>
  )
}
