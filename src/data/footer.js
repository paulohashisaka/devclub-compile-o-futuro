import { siteLinks } from './links.js'

export const footerContent = {
  brandLinkLabel: 'DevClub — início',
  navigationLabel: 'Navegação do rodapé',
  brand: 'DEVCLUB',
  tagline: 'Compile o futuro.',
  statement: 'Do primeiro código ao próximo deploy.',
  projectNote: 'Projeto conceitual desenvolvido para o Concurso DevClub.',
  signature: 'devclub.session.end()',
  closingSignature: 'future.ready. agora é com você.',
  authorCredit: 'Concebido e desenvolvido por Paulo Hashisaka para o Concurso Full Stack DevClub · 2026.',
  hashtag: '#SangueVerde',
}

export const footerGroups = [
  {
    title: 'Jornada',
    links: [
      { label: 'Quem somos', href: siteLinks.aboutSection },
      { label: 'Método', href: siteLinks.method },
      { label: 'Formações', href: siteLinks.formationsSection },
      { label: 'MBA em IA', href: siteLinks.advancedSection },
    ],
  },
  {
    title: 'Descobrir',
    links: [
      { label: 'Ensino e suporte', href: siteLinks.teachingSection },
      { label: 'Ecossistema', href: siteLinks.ecosystemSection },
      { label: 'Histórias', href: siteLinks.storiesSection },
      { label: 'Mercado', href: siteLinks.marketSection },
      { label: 'Fundador', href: siteLinks.founder },
      { label: 'FAQ', href: siteLinks.faq },
    ],
  },
  {
    title: 'Ecossistema',
    links: [
      { label: 'Plataforma', href: siteLinks.login },
      { label: 'App', href: siteLinks.app },
      { label: 'Circle', href: siteLinks.community },
      { label: 'Suporte', href: siteLinks.support },
    ],
  },
  {
    title: 'Ações',
    links: [
      { label: 'Quero ser aluno', href: siteLinks.enroll },
      { label: 'Entrar', href: siteLinks.login },
    ],
  },
]
