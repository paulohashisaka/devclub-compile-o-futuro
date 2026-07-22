import { BriefcaseBusiness, Code2, FolderKanban, Headphones, Network, UsersRound } from 'lucide-react'

export const aboutContent = {
  eyebrow: '// DEVCLUB.RUNTIME',
  titleLead: 'Mais que conteúdo.',
  titleAccent: 'Um ecossistema para construir carreira.',
  description: 'O DevClub conecta formação prática, comunidade, suporte humano, preparação profissional e oportunidades de mercado — do primeiro código ao próximo passo da carreira.',
  runtimeLabel: 'devclub / career_runtime',
  runtimeStatus: '6 services connected',
  coreLabel: 'DEVCLUB',
  coreStatus: 'ECOSYSTEM_ONLINE',
}

export const aboutModules = [
  {
    id: 'learning.practice',
    title: 'Formação prática',
    description: 'Fundamentos, ferramentas e aplicações construídos em uma jornada orientada à prática.',
    status: 'RUNNING',
    icon: Code2,
  },
  {
    id: 'community.network',
    title: 'Comunidade',
    description: 'Um ambiente para trocar experiências, compartilhar projetos e evoluir com outras pessoas.',
    status: 'CONNECTED',
    icon: UsersRound,
  },
  {
    id: 'human.support',
    title: 'Suporte humano',
    description: 'Orientação, conversas e canais de apoio para destravar dúvidas ao longo do caminho.',
    status: 'AVAILABLE',
    icon: Headphones,
  },
  {
    id: 'career.prepare',
    title: 'Preparação profissional',
    description: 'Currículo, portfólio, entrevistas e posicionamento conectados à evolução técnica.',
    status: 'READY',
    icon: BriefcaseBusiness,
  },
  {
    id: 'projects.compile',
    title: 'Projetos',
    description: 'Entregas que transformam aprendizado em repertório demonstrável e experiência prática.',
    status: 'BUILDING',
    icon: FolderKanban,
  },
  {
    id: 'market.connect',
    title: 'Oportunidades de mercado',
    description: 'Vagas, portfólios e conexões que aproximam a formação dos próximos passos profissionais.',
    status: 'ONLINE',
    icon: Network,
  },
]
