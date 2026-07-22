import { Award, BrainCircuit, Sparkles } from 'lucide-react'
import { siteLinks } from './links.js'

export const advancedFormationContent = {
  eyebrow: '// FORMAÇÃO_AVANÇADA',
  title: 'Do primeiro deploy ao próximo nível.',
  offering: 'MBA em Inteligência Artificial + Certificações Internacionais',
  description: 'Uma formação avançada para aprofundar o uso de Inteligência Artificial em projetos, automações e negócios.',
  status: 'NEXT_LEVEL_UNLOCKED',
  moduleLabel: 'career.upgrade / mba_ai',
  cta: { label: 'Conhecer o MBA', href: siteLinks.mba },
}

export const advancedFormationBenefits = [
  {
    title: 'Diploma reconhecido pelo MEC',
    description: 'MBA em Inteligência Artificial e Automações para Negócios para quem possui ensino superior completo.',
    icon: Award,
  },
  {
    title: 'Conteúdo conectado ao cenário internacional',
    description: 'Certificações e conteúdos associados a Harvard, MIT, Stanford, IBM e AWS.',
    icon: BrainCircuit,
  },
  {
    title: 'Ferramentas de Inteligência Artificial',
    description: 'Acesso a ferramentas de IA incluídas como parte da experiência de formação.',
    icon: Sparkles,
  },
]
