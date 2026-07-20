import { MessageCircle, MessagesSquare, Monitor, Smartphone } from 'lucide-react'

export const ecosystemContent = {
  eyebrow: '// DEVCLUB.ECOSYSTEM',
  titleLead: 'Sua jornada continua',
  titleAccent: 'onde você estiver.',
  description: 'Seu progresso não fecha quando você fecha o notebook. Conteúdo, comunidade e suporte continuam conectados ao seu ritmo.',
  completion: 'ecosystem.sync.complete',
  consoleLabel: 'devclub / connected_devices',
  syncingLabel: 'syncing',
  channelLabel: 'channels',
}

export const ecosystemModules = [
  {
    name: 'PLATAFORMA',
    id: 'web.platform',
    status: 'ONLINE',
    description: 'Aulas, módulos, comentários e anotações reunidos em um só ambiente.',
    icon: Monitor,
    variant: 'platform',
    deviceLabel: 'device_01',
    syncLabel: 'sync.channel/01',
  },
  {
    name: 'APP',
    id: 'mobile.app',
    status: 'SYNCED',
    description: 'Acesse o aprendizado pelo celular e continue sua jornada de onde estiver.',
    icon: Smartphone,
    variant: 'app',
    deviceLabel: 'device_02',
    syncLabel: 'sync.channel/02',
  },
  {
    name: 'CIRCLE',
    id: 'community.circle',
    status: 'CONNECTED',
    description: 'Comunidade, conversas, colaboração e networking.',
    icon: MessagesSquare,
    variant: 'circle',
    deviceLabel: 'device_03',
    syncLabel: 'sync.channel/03',
  },
  {
    name: 'WHATSAPP',
    id: 'human.support',
    status: 'AVAILABLE',
    description: 'Suporte humano por um canal direto durante a caminhada.',
    icon: MessageCircle,
    variant: 'whatsapp',
    deviceLabel: 'device_04',
    syncLabel: 'sync.channel/04',
  },
]
