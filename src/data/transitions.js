export const sectionTransitions = {
  aboutToMethod: ['runtime.connected', 'loading method...'],
  methodToFormations: ['journey.complete', 'loading available_tracks...'],
  formationsToAdvanced: ['tracks.loaded', 'unlocking next_level...'],
  advancedToTeaching: ['next_level.ready', 'connecting human_support...'],
  teachingToEcosystem: ['human_support.online', 'syncing ecosystem...'],
  ecosystemToStories: ['ecosystem.sync.complete', 'loading career_logs...'],
  storiesToMarket: ['career_logs.verified', 'connecting clubjobs...'],
  marketToFounder: ['market.bridge.online', 'loading human_guidance...'],
  founderToBuild: ['guidance.ready', 'finalizing build...'],
  buildToFaq: ['build.successful', 'opening faq.log...'],
}
