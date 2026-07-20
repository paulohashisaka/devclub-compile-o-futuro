import { CircleDot, Handshake, Headphones, MessagesSquare } from 'lucide-react'
import { siteLinks } from './links.js'

export const communityContent = {
  eyebrow: '// COMMUNITY.RUNTIME',
  titleLead: 'Você aprende código.',
  titleAccent: 'Mas não aprende sozinho.',
  description: 'Dúvidas destravam em conversas, projetos crescem com feedback e cada conquista encontra pessoas dispostas a caminhar junto.',
  cta: { label: 'Conhecer a comunidade', href: siteLinks.community },
  core: { label: 'VOCÊ', status: 'CONNECTED' },
  activityLabel: 'activity',
}

export const communityNodes = [
  {
    label: 'CIRCLE',
    id: 'circle.channel',
    title: 'Comunidade sempre por perto',
    description: 'Espaços para trocar experiências, compartilhar projetos e construir conexões.',
    activity: 'projeto compartilhado',
    icon: MessagesSquare,
  },
  {
    label: 'PARCEIROS',
    id: 'partner.match',
    title: 'Gente estudando com você',
    description: 'Encontre pessoas em fases semelhantes para praticar, colaborar e manter o ritmo.',
    activity: 'parceiro encontrado',
    icon: Handshake,
  },
  {
    label: 'MENTORIAS',
    id: 'mentor.session',
    title: 'Direção quando surgir uma dúvida',
    description: 'Encontros e orientações para transformar bloqueios em próximos passos.',
    activity: 'feedback recebido',
    icon: CircleDot,
  },
  {
    label: 'SUPORTE HUMANO',
    id: 'support.whatsapp',
    title: 'Ajuda de verdade',
    description: 'Um canal direto para receber suporte durante a jornada, inclusive pelo WhatsApp.',
    activity: 'dúvida respondida',
    icon: Headphones,
  },
]
