import { Navbar } from './components/layout/Navbar.jsx'
import { Hero } from './components/sections/Hero.jsx'
import { ProofStrip } from './components/sections/ProofStrip.jsx'
import { MethodSection } from './components/sections/MethodSection.jsx'
import { FormationsSection } from './components/sections/FormationsSection.jsx'
import { CommunitySection } from './components/sections/CommunitySection.jsx'
import { EcosystemSection } from './components/sections/EcosystemSection.jsx'
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
        <ProofStrip />
        <MethodSection />
        <FormationsSection />
        <CommunitySection />
        <EcosystemSection />
        <FounderSection />
        <FinalBuildSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
