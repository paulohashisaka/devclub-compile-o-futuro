import { useState } from 'react'
import { faqContent, faqItems } from '../../data/faq.js'
import { FaqItem } from '../ui/FaqItem.jsx'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <header className="section-heading faq-heading">
          <p className="section-eyebrow">{faqContent.eyebrow}</p>
          <h2 id="faq-title">{faqContent.title}</h2>
        </header>
        <ol className="faq-list">
          {faqItems.map((item, index) => (
            <FaqItem
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex((current) => current === index ? null : index)}
              openLabel={faqContent.openLabel}
              closedLabel={faqContent.closedLabel}
              key={item.question}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}
