import Navigation from './components/Navigation'
import Hero from './components/Hero'
import HowIThink from './components/HowIThink'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Experiments from './components/Experiments'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <HowIThink />
        <Skills />
        <Projects />
        <Education />
        <Experiments />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
