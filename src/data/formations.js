import { Braces, Database, PanelsTopLeft, Workflow } from 'lucide-react'
import { siteLinks } from './links.js'

export const formationsContent = {
  eyebrow: '// ESCOLHA_SEU_PRÓXIMO_BUILD',
  titleLead: 'Diferentes caminhos.',
  titleAccent: 'A mesma vontade de construir.',
  description: 'Não escolha apenas uma stack. Escolha o que você quer ser capaz de construir — e avance do fundamento à prática.',
  modulePrefix: 'module_',
  stackLabel: 'stack /',
  compatibility: 'build.compatible',
  ctaLabel: 'Explorar formação',
}

export const formations = [
  {
    name: 'FULL STACK',
    id: 'fullstack.track',
    description: 'Do front-end às APIs, bancos de dados e deploy.',
    technologies: 'HTML · CSS · JavaScript · React · Node',
    status: 'TRILHA_COMPLETA',
    href: siteLinks.formations,
    icon: Braces,
    variant: 'stack',
    index: '01',
  },
  {
    name: 'FRONT-END',
    id: 'frontend.track',
    description: 'Interfaces responsivas, acessíveis e preparadas para produtos reais.',
    technologies: 'HTML · CSS · JavaScript · React',
    status: 'INTERFACE_READY',
    href: siteLinks.formations,
    icon: PanelsTopLeft,
    variant: 'interface',
    index: '02',
  },
  {
    name: 'DATA',
    id: 'data.track',
    description: 'Transforme dados em análises, respostas e decisões.',
    technologies: 'Python · SQL · Dashboards · Analytics',
    status: 'DATA_PROCESSING',
    href: siteLinks.formations,
    icon: Database,
    variant: 'data',
    index: '03',
  },
  {
    name: 'IA & AUTOMAÇÃO',
    id: 'automation.track',
    description: 'Crie agentes, integrações e fluxos que trabalham de verdade.',
    technologies: 'IA · Prompts · N8N · Integrações',
    status: 'AUTOMATION_ONLINE',
    href: siteLinks.formations,
    icon: Workflow,
    variant: 'automation',
    index: '04',
  },
]
