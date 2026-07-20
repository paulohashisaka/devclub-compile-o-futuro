export function CommunityNode({ node, activityLabel }) {
  const { label, id, title, description, activity, icon: Icon } = node

  return (
    <li className="community-node" data-community-node>
      <article>
        <header>
          <span className="community-node__icon" aria-hidden="true"><Icon size={18} /></span>
          <p><small>{id}</small><strong>{label}</strong></p>
          <span className="community-node__port" aria-hidden="true" />
        </header>
        <h3>{title}</h3>
        <p>{description}</p>
        <footer><i aria-hidden="true" />{activityLabel} / {activity}</footer>
      </article>
    </li>
  )
}
