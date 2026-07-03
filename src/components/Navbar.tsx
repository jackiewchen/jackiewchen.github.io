import { Link, useLocation } from 'react-router-dom'
import { isRenderableLink, profile } from '../data/site'
import type { HomeSectionId } from '../utils/homeSections'
import { scrollToSection } from '../utils/scrollToSection'
import ExternalLinkIcon from './ExternalLinkIcon'
import HeadshotAvatar from './HeadshotAvatar'

const navItems = [
  { label: 'Projects', to: '/featured', sectionId: 'featured' },
  { label: 'Experience', to: '/experience', sectionId: 'experience' },
  { label: 'Skills', to: '/skills', sectionId: 'skills' },
  { label: 'Contact', to: '/contact', sectionId: 'contact' },
] satisfies {
  label: string
  to: string
  sectionId: HomeSectionId
}[]

function scrollToHomeSection(sectionId: HomeSectionId) {
  if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  scrollToSection(sectionId)
}

function Navbar() {
  const location = useLocation()
  const hasResumeLink = isRenderableLink(profile.links.resume)

  const handleSectionClick = (sectionId: HomeSectionId, path: string) => {
    if (location.pathname === path) {
      window.requestAnimationFrame(() => scrollToHomeSection(sectionId))
    }
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link className="brand" to="/" aria-label="Jackie Chen portfolio home">
          <HeadshotAvatar className="brand-avatar" />
          <span className="brand-name">{profile.name}</span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => handleSectionClick(item.sectionId, item.to)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {hasResumeLink ? (
          <a
            className="button button-small button-secondary"
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            aria-label="Resume, opens in a new tab"
          >
            <span>Resume</span>
            <ExternalLinkIcon />
          </a>
        ) : null}
      </div>
    </header>
  )
}

export default Navbar
