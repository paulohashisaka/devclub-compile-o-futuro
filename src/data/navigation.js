import { siteLinks } from './links.js'

export const navigation = [
  { label: 'Formações', href: siteLinks.formationsSection },
  { label: 'Método', href: siteLinks.method },
  { label: 'Comunidade', href: siteLinks.communitySection },
  { label: 'Professores', href: siteLinks.founder },
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
