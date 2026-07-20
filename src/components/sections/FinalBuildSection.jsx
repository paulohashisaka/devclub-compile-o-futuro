import { useRef } from 'react'
import { ArrowRight, Check, LogIn } from 'lucide-react'
import { finalBuildContent, finalBuildSteps } from '../../data/finalBuild.js'
import { sectionTransitions } from '../../data/transitions.js'
import { useBuildAnimation } from '../../hooks/useBuildAnimation.js'
import { SafeLink } from '../ui/SafeLink.jsx'
import { TechnicalHandoff } from '../ui/TechnicalHandoff.jsx'

export function FinalBuildSection() {
  const sectionRef = useRef(null)
  useBuildAnimation(sectionRef)

  return (
    <section className="final-build-section" id="comecar" ref={sectionRef} aria-labelledby="final-build-title">
      <div className="final-build-grid" aria-hidden="true" />
      <div className="container">
        <div className="final-build-shell" data-final-build>
          <span className="final-build-energy" data-build-line aria-hidden="true" />
          <div className="final-build-copy">
            <p className="section-eyebrow">{finalBuildContent.eyebrow}</p>
            <p className="final-build-state" data-build-state><i />{finalBuildContent.state}</p>
            <h2 id="final-build-title">{finalBuildContent.title}</h2>
            <p>{finalBuildContent.description}</p>
            <div className="final-build-actions">
              <SafeLink className="button button--primary final-build-primary" href={finalBuildContent.primaryCta.href}>
                {finalBuildContent.primaryCta.label} <ArrowRight size={18} aria-hidden="true" />
              </SafeLink>
              <SafeLink className="button button--ghost" href={finalBuildContent.secondaryCta.href}>
                <LogIn size={17} aria-hidden="true" /> {finalBuildContent.secondaryCta.label}
              </SafeLink>
            </div>
          </div>

          <div className="build-result" role="group" aria-label={finalBuildContent.stepsLabel}>
            <header><span>{finalBuildContent.reportLabel}</span><span>{finalBuildSteps.length} {finalBuildContent.taskLabel}</span></header>
            <ol>
              {finalBuildSteps.map((step, index) => (
                <li key={step} data-build-step>
                  <span data-build-check><Check size={13} aria-hidden="true" /></span>
                  <code>{step}</code>
                  <small>0{index + 1}</small>
                </li>
              ))}
            </ol>
            <footer><span>{finalBuildContent.exitCode}</span><strong><i />{finalBuildContent.finalState}</strong></footer>
          </div>
        </div>
        <TechnicalHandoff messages={sectionTransitions.buildToFaq} />
      </div>
    </section>
  )
}
