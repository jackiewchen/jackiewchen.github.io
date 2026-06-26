import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const element = document.getElementById(hash.replace('#', ''))

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  return (
    <>
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
      </main>
      <Contact />
    </>
  )
}

export default Home
