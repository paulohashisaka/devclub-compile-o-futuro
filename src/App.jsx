import { Navbar } from './components/layout/Navbar.jsx'
import { Hero } from './components/sections/Hero.jsx'
import { AboutSection } from './components/sections/AboutSection.jsx'
import { MethodSection } from './components/sections/MethodSection.jsx'
import { FormationsSection } from './components/sections/FormationsSection.jsx'
import { AdvancedFormationSection } from './components/sections/AdvancedFormationSection.jsx'
import { CommunitySection } from './components/sections/CommunitySection.jsx'
import { EcosystemSection } from './components/sections/EcosystemSection.jsx'
import { StudentStoriesSection } from './components/sections/StudentStoriesSection.jsx'
import { MarketSection } from './components/sections/MarketSection.jsx'
import { FounderSection } from './components/sections/FounderSection.jsx'
import { FinalBuildSection } from './components/sections/FinalBuildSection.jsx'
import { FaqSection } from './components/sections/FaqSection.jsx'
import { Footer } from './components/layout/Footer.jsx'
import { useFontReadyRefresh } from './hooks/useFontReadyRefresh.js'

export default function App() {
  useFontReadyRefresh()

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MethodSection />
        <FormationsSection />
        <AdvancedFormationSection />
        <CommunitySection />
        <EcosystemSection />
        <StudentStoriesSection />
        <MarketSection />
        <FounderSection />
        <FinalBuildSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
