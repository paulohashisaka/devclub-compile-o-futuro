import { siteLinks } from './links.js'

export const footerContent = {
  brandLinkLabel: 'DevClub — início',
  navigationLabel: 'Navegação do rodapé',
  brand: 'DEVCLUB',
  tagline: 'Compile o futuro.',
  statement: 'Do primeiro código ao próximo deploy.',
  projectNote: 'Projeto conceitual desenvolvido para o desafio DevClub.',
  signature: 'devclub.session.end()',
  closingSignature: 'future.ready. agora é com você.',
  authorCredit: 'Concebido e desenvolvido por Paulo Hashisaka para o Desafio Full Stack DevClub · 2026',
  hashtag: '#SangueVerde',
}

export const footerGroups = [
  {
    title: 'Navegação',
    links: [
      { label: 'Formações', href: siteLinks.formationsSection },
      { label: 'Método', href: siteLinks.method },
      { label: 'Comunidade', href: siteLinks.communitySection },
      { label: 'Professores', href: siteLinks.founder },
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
