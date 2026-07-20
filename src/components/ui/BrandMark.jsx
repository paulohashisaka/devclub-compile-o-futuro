import { siteLinks } from '../../data/links.js'
import { brandContent } from '../../data/navigation.js'
import devClubLogo from '../../../assets/devclublogo.png'

export function BrandMark() {
  return (
    <a className="brand" href={siteLinks.home} aria-label={brandContent.linkLabel}>
      <img className="brand__logo" src={devClubLogo} width="34" height="34" alt="" />
      <span className="brand__name">{brandContent.nameLead}<span>{brandContent.nameAccent}</span></span>
    </a>
  )
}
