import { siteLinks } from './links.js'

export const communityContent = {
  eyebrow: '// HUMAN_SUPPORT.RUNTIME',
  titleLead: 'Quem ensina. Quem acompanha.',
  titleAccent: 'Quem não deixa você parar.',
  description: 'Rodolfo conduz a formação. Especialistas e suporte ampliam a jornada com carreira, projetos, vendas e acompanhamento técnico.',
  core: { label: 'DEVCLUB', status: 'HUMAN_ONLINE' },
}

export const communityNodes = [
  {
    initials: 'RM',
    id: 'teacher.core',
    name: 'Rodolfo Mori',
    roleLabel: 'cargo',
    role: 'Fundador, professor principal e criador do método DevClub',
    description: 'Responsável pela maior parte das aulas, conduz a formação técnica e a preparação para o mercado.',
    status: 'CORE_TEACHER',
    featured: true,
  },
  {
    initials: 'FC',
    id: 'career.guidance',
    name: 'Fernanda Costa',
    roleLabel: 'especialidade',
    role: 'Carreira, LinkedIn, currículo e entrevistas',
    description: 'Orientação para posicionamento profissional, processos seletivos e preparação para o mercado.',
    status: 'CAREER_GUIDANCE',
  },
  {
    initials: 'JR',
    id: 'projects.guidance',
    name: 'João Rosa',
    roleLabel: 'especialidade',
    role: 'Vendas, prospecção e projetos',
    description: 'Conteúdos voltados à prospecção, relacionamento com clientes e transformação de conhecimento técnico em projetos.',
    status: 'PROJECT_GUIDANCE',
  },
  {
    initials: 'AM',
    id: 'support.official',
    name: 'Andrey Maia',
    roleLabel: 'cargo',
    role: 'Suporte Oficial DevClub',
    detailLabel: 'especialidade',
    detail: 'Suporte técnico e acompanhamento dos alunos',
    description: 'Acompanha dúvidas e bloqueios técnicos durante a jornada, com experiência em Java, Node e React.',
    status: 'SUPPORT_AVAILABLE',
    href: siteLinks.andrey,
    linkLabel: 'Ver referência técnica',
  },
]
