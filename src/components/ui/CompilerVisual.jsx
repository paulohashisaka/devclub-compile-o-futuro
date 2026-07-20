import { Fragment } from 'react'
import { Check, GitBranch, Terminal } from 'lucide-react'
import { compilerBuildSteps, compilerContent } from '../../data/hero.js'

export function CompilerVisual() {
  return (
    <div className="compiler-wrap" data-compiler data-float role="img" aria-label={compilerContent.accessibleLabel}>
      <div className="compiler-glow" />
      <article className="compiler-card">
        <header className="compiler-card__header">
          <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
          <span>{compilerContent.fileName}</span>
          <GitBranch size={14} aria-hidden="true" />
        </header>
        <div className="compiler-card__body">
          <div className="code-rail" aria-hidden="true">{compilerContent.lineNumbers.map((line, index) => <Fragment key={line}>{line}{index < compilerContent.lineNumbers.length - 1 && <br />}</Fragment>)}</div>
          <pre aria-hidden="true"><code><span className="purple">{compilerContent.code.keyword}</span> {compilerContent.code.variable} = <span className="green">{compilerContent.code.functionName}</span>({'{'}{compilerContent.code.fields.map((field, index) => <Fragment key={field.name}>{`\n  `}{field.name}: <span className={field.tone}>{field.value}</span>{index < compilerContent.code.fields.length - 1 ? ',' : ''}</Fragment>)}{`\n`}{'}'});</code></pre>
        </div>
        <div className="build-panel">
          <div className="build-panel__title"><Terminal size={15} aria-hidden="true" /> {compilerContent.panelTitle}</div>
          {compilerBuildSteps.map((step, index) => (
            <div className="build-step" key={step.label}>
              <span className="build-step__check"><Check size={12} aria-hidden="true" /></span>
              <span>0{index + 1} / {step.label}</span>
              <strong>{step.value}</strong>
            </div>
          ))}
          <div className="build-progress"><span /></div>
          <p><span className="pulse-dot" /> {compilerContent.nextStep}</p>
        </div>
      </article>
      <svg className="energy-map" viewBox="0 0 520 460" aria-hidden="true">
        <path data-trace d="M18 372 C88 372 61 410 139 410 S210 356 273 356 S334 398 388 398 S420 327 504 327" />
        <circle data-node cx="18" cy="372" r="5" /><circle data-node cx="139" cy="410" r="5" /><circle data-node cx="273" cy="356" r="5" /><circle data-node cx="388" cy="398" r="5" /><circle data-node cx="504" cy="327" r="6" />
      </svg>
      <div className="status-chip status-chip--top"><span /> {compilerContent.statusTop}</div>
      <div className="status-chip status-chip--bottom"><Check size={13} aria-hidden="true" /> {compilerContent.statusBottom}</div>
    </div>
  )
}
