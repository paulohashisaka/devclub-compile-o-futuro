import { useRef } from 'react'
import { Activity, Check, Cpu } from 'lucide-react'
import { journeySteps, methodContent } from '../../data/journey.js'
import { sectionTransitions } from '../../data/transitions.js'
import { useJourneyAnimation } from '../../hooks/useJourneyAnimation.js'

export function MethodSection() {
  const sectionRef = useRef(null)
  useJourneyAnimation(sectionRef)

  return (
    <section className="method-section" id="metodo" ref={sectionRef} aria-labelledby="method-title">
      <div className="container">
        <header className="section-heading" data-method-header>
          <p className="section-eyebrow">{methodContent.eyebrow}</p>
          <h2 id="method-title">{methodContent.titleLead} <em>{methodContent.titleAccent}</em></h2>
          <p>{methodContent.description}</p>
        </header>

        <div className="journey-track">
          <span className="journey-line" aria-hidden="true"><i data-journey-progress /></span>
          <ol className="journey-list" data-journey-list>
            {journeySteps.map((step) => (
              <li className="journey-step" key={step.number} data-journey-step>
                <article className="journey-step__content">
                  <div className="journey-step__meta" data-step-reveal>
                    <span>{step.number} / {step.phase}</span>
                    <span className="journey-status"><i />{step.status}</span>
                  </div>
                  <h3 data-step-reveal>{step.title}</h3>
                  <p data-step-reveal>{step.description}</p>
                  <div className="journey-step__terminal" data-step-reveal>
                    <Cpu size={14} aria-hidden="true" />
                    <code>&gt; {step.command}</code>
                    <span><Check size={12} aria-hidden="true" />{step.signal}</span>
                  </div>
                </article>
                <span className="journey-node" data-step-reveal aria-hidden="true"><i /><b>{step.number}</b></span>
                <div className="journey-telemetry" data-step-reveal aria-hidden="true">
                  <Activity size={15} />
                  <span><i /><i /><i /><i /><i /></span>
                  <small>signal.{step.number}</small>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="journey-handoff" aria-hidden="true">
          <span><i />{sectionTransitions.methodToFormations[0]}</span>
          <span>{sectionTransitions.methodToFormations[1]}</span>
        </div>
      </div>
    </section>
  )
}
