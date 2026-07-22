import { siteLinks } from './links.js'

export const navigation = [
  { label: 'Quem somos', href: siteLinks.aboutSection },
  { label: 'Formações', href: siteLinks.formationsSection },
  { label: 'Ensino', href: siteLinks.teachingSection },
  { label: 'Histórias', href: siteLinks.storiesSection },
  { label: 'Mercado', href: siteLinks.marketSection },
]

export const navigationContent = {
  desktopLabel: 'Navegação principal',
  mobileLabel: 'Navegação mobile',
  openMenuLabel: 'Abrir menu',
  closeMenuLabel: 'Fechar menu',
  login: { label: 'Entrar', href: siteLinks.login },
  primaryAction: { label: 'Quero ser aluno', href: siteLinks.enroll },
}

export const brandContent = {
  linkLabel: 'DevClub — início',
  nameLead: 'DEV',
  nameAccent: 'CLUB',
}
