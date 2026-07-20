import { formations, formationsContent } from '../../data/formations.js'
import { sectionTransitions } from '../../data/transitions.js'
import { FormationCard } from '../ui/FormationCard.jsx'
import { TechnicalHandoff } from '../ui/TechnicalHandoff.jsx'

export function FormationsSection() {
  return (
    <section className="formations-section" id="formacoes" aria-labelledby="formations-title">
      <div className="formations-grid-bg" aria-hidden="true" />
      <div className="container">
        <header className="section-heading section-heading--formations">
          <p className="section-eyebrow">{formationsContent.eyebrow}</p>
          <h2 id="formations-title">{formationsContent.titleLead}<br /><em>{formationsContent.titleAccent}</em></h2>
          <p>{formationsContent.description}</p>
        </header>
        <div className="formations-grid">
          {formations.map((formation) => <FormationCard formation={formation} key={formation.id} />)}
        </div>
        <TechnicalHandoff messages={sectionTransitions.formationsToCommunity} />
      </div>
    </section>
  )
}
