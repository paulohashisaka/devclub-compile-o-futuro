import { useRef } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { advancedFormationBenefits, advancedFormationContent } from '../../data/advancedFormation.js'
import { sectionTransitions } from '../../data/transitions.js'
import { useSectionReveal } from '../../hooks/useSectionReveal.js'
import { SafeLink } from '../ui/SafeLink.jsx'
import { TechnicalHandoff } from '../ui/TechnicalHandoff.jsx'

export function AdvancedFormationSection() {
  const sectionRef = useRef(null)
  useSectionReveal(sectionRef)

  return (
    <section className="advanced-section" id="mba" ref={sectionRef} aria-labelledby="advanced-title">
      <div className="advanced-grid-bg" aria-hidden="true" />
      <div className="container">
        <header className="section-heading advanced-heading">
          <p className="section-eyebrow" data-section-reveal>{advancedFormationContent.eyebrow}</p>
          <h2 id="advanced-title" data-section-reveal>{advancedFormationContent.title}</h2>
        </header>

        <article className="advanced-module" data-section-reveal>
          <div className="advanced-module__content">
            <header>
              <code>{advancedFormationContent.moduleLabel}</code>
              <span><i />{advancedFormationContent.status}</span>
            </header>
            <h3>{advancedFormationContent.offering}</h3>
            <p>{advancedFormationContent.description}</p>
            <ul className="advanced-benefits">
              {advancedFormationBenefits.map(({ title, description, icon: Icon }) => (
                <li key={title}>
                  <span aria-hidden="true"><Icon size={19} /></span>
                  <div><h4>{title}</h4><p>{description}</p></div>
                  <Check size={15} aria-hidden="true" />
                </li>
              ))}
            </ul>
            <SafeLink className="advanced-cta" href={advancedFormationContent.cta.href}>
              {advancedFormationContent.cta.label} <ArrowUpRight size={17} aria-hidden="true" />
            </SafeLink>
          </div>
          <div className="advanced-module__visual" aria-hidden="true">
            <span className="advanced-orbit"><i /><i /><i /></span>
            <strong>LEVEL<br /><em>02</em></strong>
            <code>upgrade.available</code>
          </div>
        </article>
        <TechnicalHandoff messages={sectionTransitions.advancedToTeaching} />
      </div>
    </section>
  )
}
