import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
      </main>
      <Contact />
    </div>
  )
}

export default App
