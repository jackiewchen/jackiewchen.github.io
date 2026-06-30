import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import {
  getHomeSectionId,
  getHomeSectionPath,
  homeSections,
  type HomeSectionId,
} from '../utils/homeSections'
import { scrollToSection } from '../utils/scrollToSection'

type HomeProps = {
  onOpenEmail: () => void
}

type ObservedHomeSection = {
  sectionId: HomeSectionId
  element: HTMLElement
}

function scrollToHomeSection(sectionId: HomeSectionId) {
  if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  scrollToSection(sectionId)
}

function getActiveHomeSection(
  sections: ObservedHomeSection[],
): HomeSectionId {
  const viewportHeight = window.innerHeight
  const marker = viewportHeight * 0.42
  const isAtPageBottom =
    window.scrollY + viewportHeight >= document.documentElement.scrollHeight - 2

  if (isAtPageBottom) {
    return 'contact'
  }

  const visibleSections = sections
    .map((section) => {
      const rect = section.element.getBoundingClientRect()

      return {
        ...section,
        rect,
        containsMarker: rect.top <= marker && rect.bottom >= marker,
        distance: Math.abs(rect.top - marker),
      }
    })
    .filter((section) => section.rect.bottom > 0 && section.rect.top < viewportHeight)

  const markerSection = visibleSections
    .filter((section) => section.containsMarker)
    .sort((a, b) => a.distance - b.distance)[0]

  if (markerSection) {
    return markerSection.sectionId
  }

  return (
    visibleSections.sort((a, b) => a.distance - b.distance)[0]?.sectionId ??
    'home'
  )
}

function Home({ onOpenEmail }: HomeProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const pathnameRef = useRef(location.pathname)
  const isRouteScrollRef = useRef(false)
  const isScrollUrlUpdateRef = useRef(false)

  useEffect(() => {
    pathnameRef.current = location.pathname
  }, [location.pathname])

  useEffect(() => {
    if (isScrollUrlUpdateRef.current) {
      isScrollUrlUpdateRef.current = false
      return
    }

    isRouteScrollRef.current = true

    window.requestAnimationFrame(() => {
      scrollToHomeSection(getHomeSectionId(location.pathname))
    })

    const timeoutId = window.setTimeout(() => {
      isRouteScrollRef.current = false
    }, 900)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [location.pathname])

  useEffect(() => {
    const sections = homeSections
      .map((section) => {
        const element = document.getElementById(section.sectionId)

        return element ? { sectionId: section.sectionId, element } : null
      })
      .filter((section): section is ObservedHomeSection => section !== null)

    if (!sections.length) {
      return undefined
    }

    let frameId: number | null = null

    const updateActiveRoute = () => {
      frameId = null

      if (isRouteScrollRef.current) {
        return
      }

      const nextPath = getHomeSectionPath(getActiveHomeSection(sections))

      if (pathnameRef.current !== nextPath) {
        isScrollUrlUpdateRef.current = true
        pathnameRef.current = nextPath
        navigate(nextPath, { replace: true })
      }
    }

    const scheduleRouteUpdate = () => {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(updateActiveRoute)
    }

    const observer = new IntersectionObserver(scheduleRouteUpdate, {
      rootMargin: '-12% 0px -38% 0px',
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    })

    sections.forEach((section) => observer.observe(section.element))
    window.addEventListener('resize', scheduleRouteUpdate)
    scheduleRouteUpdate()

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', scheduleRouteUpdate)

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [navigate])

  return (
    <>
      <main>
        <Hero onOpenEmail={onOpenEmail} />
        <Projects />
        <Experience />
        <About />
      </main>
      <Contact onOpenEmail={onOpenEmail} />
    </>
  )
}

export default Home
