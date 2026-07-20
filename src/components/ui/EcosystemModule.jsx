export function EcosystemModule({ module }) {
  const { name, id, status, description, icon: Icon, variant, deviceLabel, syncLabel } = module

  return (
    <li className="ecosystem-module" data-ecosystem-module data-module={variant}>
      <article>
        <header>
          <span className="ecosystem-module__icon" aria-hidden="true"><Icon size={18} /></span>
          <div><small>{id}</small><h3>{name}</h3></div>
          <span className="ecosystem-module__status"><i />{status}</span>
        </header>
        <div className="ecosystem-module__display" aria-hidden="true">
          <span /><span /><span /><span />
        </div>
        <p className="ecosystem-module__description">{description}</p>
        <footer><span>{deviceLabel}</span><span>{syncLabel}</span></footer>
      </article>
    </li>
  )
}
