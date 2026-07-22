import { proofs, proofsContent } from '../../data/proofs.js'

export function ProofStrip() {
  return (
    <div className="proof-strip" id="provas" role="group" aria-label={proofsContent.sectionLabel}>
      <ul className="container proof-strip__inner">
        {proofs.map(({ icon: Icon, eyebrow, label }) => (
          <li className="proof-item" key={label}>
            <span className="proof-item__icon" aria-hidden="true"><Icon size={21} /></span>
            <p><small>{eyebrow}</small><strong>{label}</strong></p>
          </li>
        ))}
      </ul>
    </div>
  )
}
