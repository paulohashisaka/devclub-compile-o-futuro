import { ArrowUpRight, Box } from 'lucide-react'
import { formationsContent } from '../../data/formations.js'
import { SafeLink } from './SafeLink.jsx'

export function FormationCard({ formation }) {
  const { name, id, description, technologies, status, href, icon: Icon, variant, index } = formation

  return (
    <article className="formation-card" data-formation={variant}>
      <div className="formation-card__pattern" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
      <header className="formation-card__top">
        <span className="formation-card__index">{formationsContent.modulePrefix}{index}</span>
        <span className="formation-card__state"><i />{status}</span>
      </header>
      <div className="formation-card__icon" aria-hidden="true"><Icon size={25} /></div>
      <p className="formation-card__id"><Box size={13} aria-hidden="true" />{id}</p>
      <h3>{name}</h3>
      <p className="formation-card__description">{description}</p>
      <p className="formation-card__tech"><span>{formationsContent.stackLabel}</span>{technologies}</p>
      <footer>
        <span>{formationsContent.compatibility}</span>
        <SafeLink href={href}>{formationsContent.ctaLabel} <ArrowUpRight size={16} aria-hidden="true" /></SafeLink>
      </footer>
    </article>
  )
}
