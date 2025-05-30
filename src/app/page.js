// app/page.js
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ScrollTimeline from './components/ScrollTimeline'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import  Experience from './components/Experience'

export default function HomePage() {
  return (
    <main>
      <ScrollTimeline />
      <Hero />
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
      
      {/* Future: About, Projects, Contact, etc. */}
    </main>
  )
}
