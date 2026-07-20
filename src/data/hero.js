import { siteLinks } from './links.js'

export const heroContent = {
  command: 'devclub.init()',
  titleLead: ['Seu futuro não', 'vem pronto.'],
  titleAccent: 'Você compila.',
  description: 'Do primeiro código ao deploy, da comunidade à carreira. Aprenda construindo, com pessoas que não deixam você parar.',
  primaryCta: { label: 'Iniciar jornada', href: siteLinks.enroll },
  secondaryCta: { label: 'Conhecer formações', href: siteLinks.formations },
  avatars: ['JS', 'RC', 'AM', '+'],
  studentProof: 'compilando novos futuros',
  scrollCue: { label: 'Rolar para os números', text: 'SCROLL TO COMPILE', href: siteLinks.proof },
}

export const compilerContent = {
  accessibleLabel: 'Interface ilustrativa mostrando uma jornada em compilação',
  fileName: 'future.config.js',
  panelTitle: 'compiling_journey',
  nextStep: 'PRÓXIMO: PUBLICAR',
  statusTop: 'comunidade.online',
  statusBottom: 'projeto_01.deploy',
  lineNumbers: ['01', '02', '03', '04', '05', '06'],
  code: {
    keyword: 'const',
    variable: 'futuro',
    functionName: 'compile',
    fields: [
      { name: 'origem', value: '"coragem"', tone: 'string' },
      { name: 'método', value: '"prática"', tone: 'string' },
      { name: 'comunidade', value: 'true', tone: 'purple' },
      { name: 'destino', value: '"carreira"', tone: 'string' },
    ],
  },
}

export const compilerBuildSteps = [
  { label: 'Aprender', value: '100%' },
  { label: 'Construir', value: '100%' },
  { label: 'Conectar', value: 'online' },
]
