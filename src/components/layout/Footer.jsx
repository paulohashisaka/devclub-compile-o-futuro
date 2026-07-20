import { ArrowUpRight } from 'lucide-react'
import { footerContent, footerGroups } from '../../data/footer.js'
import { siteLinks } from '../../data/links.js'
import { SafeLink } from '../ui/SafeLink.jsx'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-energy" aria-hidden="true"><i /></div>
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <SafeLink href={siteLinks.home} aria-label={footerContent.brandLinkLabel}><strong>{footerContent.brand}</strong></SafeLink>
            <p>{footerContent.tagline}</p>
            <span>{footerContent.statement}</span>
          </div>
          <nav className="footer-navigation" aria-label={footerContent.navigationLabel}>
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2>{group.title}</h2>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}><SafeLink href={link.href}>{link.label}<ArrowUpRight size={13} aria-hidden="true" /></SafeLink></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>{footerContent.projectNote}</p>
          <div className="footer-bottom__meta">
            <div className="footer-bottom__signature">
              <code>&gt; {footerContent.signature} · {footerContent.closingSignature}</code>
              <small>{footerContent.authorCredit}</small>
            </div>
            <strong>{footerContent.hashtag}</strong>
          </div>
        </div>
      </div>
    </footer>
  )
}
