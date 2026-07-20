export function SafeLink({ href, onClick, children, ...props }) {
  const isUnavailable = href === '#'

  const handleClick = (event) => {
    if (isUnavailable) event.preventDefault()
    onClick?.(event)
  }

  return <a {...props} href={href} aria-disabled={isUnavailable || undefined} onClick={handleClick}>{children}</a>
}
