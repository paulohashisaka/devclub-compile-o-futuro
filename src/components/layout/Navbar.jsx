import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation, navigationContent } from '../../data/navigation.js'
import { BrandMark } from '../ui/BrandMark.jsx'
import { SafeLink } from '../ui/SafeLink.jsx'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef(null)

  const closeMenu = () => {
    setOpen(false)
    menuButtonRef.current?.focus({ preventScroll: true })
  }

  useEffect(() => {
    if (!open) return undefined
    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      menuButtonRef.current?.focus({ preventScroll: true })
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label={navigationContent.desktopLabel}>
          {navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="navbar__actions">
          <SafeLink className="login-link" href={navigationContent.login.href}>{navigationContent.login.label}</SafeLink>
          <SafeLink className="button button--small" href={navigationContent.primaryAction.href}>{navigationContent.primaryAction.label} <ArrowUpRight size={16} aria-hidden="true" /></SafeLink>
        </div>
        <button ref={menuButtonRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? navigationContent.closeMenuLabel : navigationContent.openMenuLabel} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav id="mobile-menu" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label={navigationContent.mobileLabel} aria-hidden={!open}>
        {navigation.map((item) => <a key={item.label} href={item.href} onClick={closeMenu}>{item.label}</a>)}
        <SafeLink href={navigationContent.login.href} onClick={closeMenu}>{navigationContent.login.label}</SafeLink>
        <SafeLink className="button" href={navigationContent.primaryAction.href} onClick={closeMenu}>{navigationContent.primaryAction.label} <ArrowUpRight size={17} aria-hidden="true" /></SafeLink>
      </nav>
    </header>
  )
}
