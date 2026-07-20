import { proofs, proofsContent } from '../../data/proofs.js'

export function ProofStrip() {
  return (
    <section className="proof-strip" id="provas" aria-label={proofsContent.sectionLabel}>
      <ul className="container proof-strip__inner">
        {proofs.map(({ icon: Icon, eyebrow, label }) => (
          <li className="proof-item" key={label}>
            <span className="proof-item__icon"><Icon size={21} /></span>
            <p><small>{eyebrow}</small><strong>{label}</strong></p>
          </li>
        ))}
      </ul>
    </section>
  )
}
