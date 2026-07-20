import { useRef } from 'react'
import { ArrowDown, ArrowRight, Play } from 'lucide-react'
import { useHeroAnimation } from '../../hooks/useHeroAnimation.js'
import { heroContent } from '../../data/hero.js'
import { proofsContent } from '../../data/proofs.js'
import { CompilerVisual } from '../ui/CompilerVisual.jsx'

export function Hero() {
  const heroRef = useRef(null)
  useHeroAnimation(heroRef)

  return (
    <section className="hero" id="top" ref={heroRef} aria-labelledby="hero-title">
      <div className="technical-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb--green" aria-hidden="true" />
      <div className="hero-orb hero-orb--purple" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="terminal-command" data-hero-reveal><span>&gt;</span> {heroContent.command}<i /></p>
          <h1 id="hero-title" data-hero-reveal>{heroContent.titleLead[0]}<br />{heroContent.titleLead[1]}<br /><em>{heroContent.titleAccent}</em></h1>
          <p className="hero__lead" data-hero-reveal>{heroContent.description}</p>
          <div className="hero__actions" data-hero-reveal>
            <a className="button button--primary" href={heroContent.primaryCta.href}>{heroContent.primaryCta.label} <ArrowRight size={18} aria-hidden="true" /></a>
            <a className="button button--ghost" href={heroContent.secondaryCta.href}><Play size={16} fill="currentColor" aria-hidden="true" /> {heroContent.secondaryCta.label}</a>
          </div>
          <div className="student-proof" data-hero-reveal>
            <div className="avatar-stack" aria-hidden="true">{heroContent.avatars.map((avatar) => <span key={avatar}>{avatar}</span>)}</div>
            <p><strong>{proofsContent.studentCount}</strong><br />{heroContent.studentProof}</p>
          </div>
        </div>
        <CompilerVisual />
      </div>
      <a className="scroll-cue" href={heroContent.scrollCue.href} aria-label={heroContent.scrollCue.label}><span>{heroContent.scrollCue.text}</span><ArrowDown size={17} aria-hidden="true" /></a>
    </section>
  )
}
