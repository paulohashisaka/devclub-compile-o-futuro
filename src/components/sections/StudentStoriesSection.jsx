import { useRef } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { studentStories, studentStoriesContent } from '../../data/studentStories.js'
import { sectionTransitions } from '../../data/transitions.js'
import { useSectionReveal } from '../../hooks/useSectionReveal.js'
import { SafeLink } from '../ui/SafeLink.jsx'
import { TechnicalHandoff } from '../ui/TechnicalHandoff.jsx'

export function StudentStoriesSection() {
  const sectionRef = useRef(null)
  useSectionReveal(sectionRef)

  return (
    <section className="stories-section" id="historias" ref={sectionRef} aria-labelledby="stories-title">
      <div className="stories-grid-bg" aria-hidden="true" />
      <div className="container">
        <header className="section-heading stories-heading">
          <p className="section-eyebrow" data-section-reveal>{studentStoriesContent.eyebrow}</p>
          <h2 id="stories-title" data-section-reveal>{studentStoriesContent.title}</h2>
          <p data-section-reveal>{studentStoriesContent.description}</p>
        </header>

        <ol className="stories-grid">
          {studentStories.map((story, index) => (
            <li key={story.name} data-section-reveal>
              <article className="story-log">
                <header>
                  <span>log_{String(index + 1).padStart(2, '0')}</span>
                  <small><i />{story.status}</small>
                </header>
                <h3>{story.name}</h3>
                <dl>
                  <div><dt>{studentStoriesContent.originLabel}</dt><dd>{story.origin}</dd></div>
                  <div><dt>{studentStoriesContent.processLabel}</dt><dd>{story.process}</dd></div>
                  <div className="story-log__destination"><dt>{studentStoriesContent.destinationLabel}</dt><dd><CheckCircle2 size={15} aria-hidden="true" />{story.destination}</dd></div>
                </dl>
                <footer><span>first_job.deploy</span><time dateTime={story.dateTime}>{story.date}</time></footer>
              </article>
            </li>
          ))}
        </ol>

        <SafeLink className="stories-cta" href={studentStoriesContent.cta.href} data-section-reveal>
          {studentStoriesContent.cta.label} <ArrowUpRight size={17} aria-hidden="true" />
        </SafeLink>
        <TechnicalHandoff messages={sectionTransitions.storiesToMarket} />
      </div>
    </section>
  )
}
