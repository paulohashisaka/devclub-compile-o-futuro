export function TechnicalHandoff({ messages }) {
  return (
    <div className="section-handoff" aria-hidden="true">
      <span><i />{messages[0]}</span>
      <span>{messages[1]}</span>
    </div>
  )
}
