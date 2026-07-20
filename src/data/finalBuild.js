import { siteLinks } from './links.js'

export const finalBuildContent = {
  stepsLabel: 'Etapas concluídas da jornada',
  eyebrow: '// COMPILATION_COMPLETE',
  state: 'BUILD SUCCESSFUL',
  title: 'Pare de esperar a oportunidade. Compile uma.',
  description: 'Você não precisa estar pronto. Precisa dar o próximo comando.',
  primaryCta: { label: 'Quero ser aluno', href: siteLinks.enroll },
  secondaryCta: { label: 'Entrar na plataforma', href: siteLinks.login },
  exitCode: 'exit code: 0',
  finalState: 'future.ready',
  reportLabel: 'compile.report',
  taskLabel: 'tasks',
}

export const finalBuildSteps = [
  'fundamentos.loaded',
  'projects.compiled',
  'community.connected',
  'ecosystem.synced',
  'career.ready',
]
