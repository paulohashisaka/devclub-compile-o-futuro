import { ArrowUpRight } from 'lucide-react'
import { SafeLink } from './SafeLink.jsx'

export function CommunityNode({ node }) {
  const { initials, id, name, roleLabel, role, detailLabel, detail, description, status, href, linkLabel, featured } = node
  const headingId = `${id.replaceAll('.', '-')}-name`

  return (
    <li className={`community-node${featured ? ' community-node--featured' : ''}`} data-community-node>
      <article aria-labelledby={headingId}>
        <header>
          <span className="community-node__avatar" aria-hidden="true">{initials}</span>
          <div><small>{id}</small><h3 id={headingId}>{name}</h3></div>
          <span className="community-node__port" aria-hidden="true" />
        </header>
        <p className="community-node__role-label">{roleLabel}</p>
        <p className="community-node__role">{role}</p>
        <p className="community-node__description">{description}</p>
        {detail && <div className="community-node__detail"><span>{detailLabel}</span><p>{detail}</p></div>}
        <footer>
          <span><i aria-hidden="true" />{status}</span>
          {href && <SafeLink href={href}>{linkLabel}<ArrowUpRight size={14} aria-hidden="true" /></SafeLink>}
        </footer>
      </article>
    </li>
  )
}
