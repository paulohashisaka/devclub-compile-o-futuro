import { useRef } from 'react'
import { aboutContent, aboutModules } from '../../data/about.js'
import { sectionTransitions } from '../../data/transitions.js'
import { useSectionReveal } from '../../hooks/useSectionReveal.js'
import { ProofStrip } from './ProofStrip.jsx'
import { TechnicalHandoff } from '../ui/TechnicalHandoff.jsx'

export function AboutSection() {
  const sectionRef = useRef(null)
  useSectionReveal(sectionRef)

  return (
    <section className="about-section" id="quem-somos" ref={sectionRef} aria-labelledby="about-title">
      <div className="about-grid-bg" aria-hidden="true" />
      <div className="container">
        <header className="section-heading about-heading">
          <p className="section-eyebrow" data-section-reveal>{aboutContent.eyebrow}</p>
          <h2 id="about-title" data-section-reveal>{aboutContent.titleLead}<br /><em>{aboutContent.titleAccent}</em></h2>
          <p data-section-reveal>{aboutContent.description}</p>
        </header>

        <div className="about-runtime" data-section-reveal>
          <div className="about-runtime__bar" aria-hidden="true">
            <span>{aboutContent.runtimeLabel}</span>
            <span><i />{aboutContent.runtimeStatus}</span>
          </div>
          <div className="about-runtime__core" aria-hidden="true">
            <span>runtime.core</span>
            <strong>{aboutContent.coreLabel}</strong>
            <small><i />{aboutContent.coreStatus}</small>
          </div>
          <ul className="about-modules">
            {aboutModules.map(({ id, title, description, status, icon: Icon }) => (
              <li key={id}>
                <article>
                  <header>
                    <span aria-hidden="true"><Icon size={18} /></span>
                    <code>{id}</code>
                    <small><i />{status}</small>
                  </header>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ProofStrip />
      <div className="container"><TechnicalHandoff messages={sectionTransitions.aboutToMethod} /></div>
    </section>
  )
}
