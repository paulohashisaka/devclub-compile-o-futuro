import { useRef } from 'react'
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, CheckCircle2 } from 'lucide-react'
import { marketCompanies, marketContent, marketFlow, marketOpportunityTypes } from '../../data/market.js'
import { sectionTransitions } from '../../data/transitions.js'
import { useSectionReveal } from '../../hooks/useSectionReveal.js'
import { SafeLink } from '../ui/SafeLink.jsx'
import { TechnicalHandoff } from '../ui/TechnicalHandoff.jsx'

export function MarketSection() {
  const sectionRef = useRef(null)
  useSectionReveal(sectionRef)

  return (
    <section className="market-section" id="mercado" ref={sectionRef} aria-labelledby="market-title">
      <div className="container">
        <header className="section-heading market-heading">
          <p className="section-eyebrow" data-section-reveal>{marketContent.eyebrow}</p>
          <h2 id="market-title" data-section-reveal>{marketContent.title}</h2>
          <p data-section-reveal>{marketContent.description}</p>
        </header>

        <div className="market-bridge">
          <article className="market-panel market-panel--opportunities" data-section-reveal>
            <header><span aria-hidden="true"><Building2 size={19} /></span><div><small>clubjobs.companies</small><h3>{marketContent.opportunitiesTitle}</h3></div></header>
            <p>{marketContent.opportunitiesDescription}</p>
            <ul className="market-companies">
              {marketCompanies.map((company, index) => <li key={company}><span>0{index + 1}</span><strong>{company}</strong><small>OPPORTUNITY_PUBLISHED</small></li>)}
            </ul>
            <ul className="market-types" aria-label="Tipos de oportunidades encontradas no ClubJobs">
              {marketOpportunityTypes.map((type) => <li key={type}>{type}</li>)}
            </ul>
          </article>

          <article className="market-panel market-panel--outcomes" data-section-reveal>
            <header><span aria-hidden="true"><BriefcaseBusiness size={19} /></span><div><small>stars.outcomes</small><h3>{marketContent.outcomesTitle}</h3></div></header>
            <p>{marketContent.outcomesDescription}</p>
            <ol className="market-flow" aria-label="Fluxo entre formação e oportunidades">
              {marketFlow.map((step, index) => (
                <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < marketFlow.length - 1 && <ArrowRight size={14} aria-hidden="true" />}</li>
              ))}
            </ol>
            <p className="market-verified"><CheckCircle2 size={15} aria-hidden="true" />resultados conectados às histórias apresentadas</p>
            <SafeLink className="market-stories-link" href={marketContent.storiesLink.href}>{marketContent.storiesLink.label}</SafeLink>
          </article>
        </div>

        <SafeLink className="button button--primary market-cta" href={marketContent.cta.href} data-section-reveal>
          {marketContent.cta.label} <ArrowUpRight size={18} aria-hidden="true" />
        </SafeLink>
        <TechnicalHandoff messages={sectionTransitions.marketToFounder} />
      </div>
    </section>
  )
}
