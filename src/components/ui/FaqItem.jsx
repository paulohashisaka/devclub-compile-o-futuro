import { ChevronDown } from 'lucide-react'

export function FaqItem({ item, index, isOpen, onToggle, openLabel, closedLabel }) {
  const buttonId = `faq-button-${index}`
  const panelId = `faq-panel-${index}`

  return (
    <li className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      <h3>
        <button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={onToggle}>
          <span className="faq-item__index">{String(index + 1).padStart(2, '0')}</span>
          <span className="faq-item__question">{item.question}</span>
          <span className="faq-item__state">{isOpen ? openLabel : closedLabel}</span>
          <span className="faq-item__icon" aria-hidden="true"><ChevronDown size={21} /></span>
        </button>
      </h3>
      <div className="faq-item__panel" id={panelId} role="region" aria-labelledby={buttonId} aria-hidden={!isOpen}>
        <div><p>{item.answer}</p></div>
      </div>
    </li>
  )
}
