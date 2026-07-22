import { BriefcaseBusiness, Hammer, RefreshCw } from 'lucide-react'
import { siteLinks } from './links.js'

export const founderContent = {
  eyebrow: '// HUMAN_GUIDANCE',
  titleLead: 'Antes de ensinar código,',
  titleAccent: 'ele também precisou recomeçar.',
  story: 'Quem já precisou recomeçar sabe como encurtar o caminho. Rodolfo Mori era eletricista no Metrô de São Paulo quando encontrou na programação um caminho para mudar de carreira. Depois de atuar em instituições como Santander, BTG Pactual, PI Investimentos e Toro Investimentos, criou o DevClub para encurtar esse caminho para outras pessoas.',
  name: 'RODOLFO MORI',
  role: 'Fundador, principal professor e criador do método DevClub.',
  profileLabel: 'founder.profile',
  monogram: '<RM />',
  placeholderLabel: 'Espaço preparado para a futura fotografia oficial de Rodolfo Mori.',
  assetStatus: 'profile.asset.loaded',
  cta: { label: 'Conhecer a história', href: siteLinks.about },
}

export const founderIndicators = [
  { label: 'TRANSIÇÃO REAL', description: 'De eletricista a desenvolvedor', icon: RefreshCw },
  { label: 'EXPERIÊNCIA DE MERCADO', description: 'Tecnologia aplicada em grandes instituições', icon: BriefcaseBusiness },
  { label: 'MÉTODO PRÁTICO', description: 'Um caminho criado por quem também começou do zero', icon: Hammer },
]
