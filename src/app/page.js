// app/page.js
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ScrollTimeline from './components/ScrollTimeline'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function HomePage() {
  return (
    <main>
      <ScrollTimeline />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      {/* Future: About, Projects, Contact, etc. */}
    </main>
  )
}
