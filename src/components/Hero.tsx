import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/profile'
import { scrollToSection } from '../utils/scrollToSection'

type HeroProps = {
  onOpenEmail: () => void
}

const workAreas = [
  'Mobile app development',
  'Full-stack web development',
  'Computer graphics',
  'Systems programming',
]

const heroTechTags = [
  'React Native',
  'TypeScript',
  'Spring Boot',
  'C++',
  'Firebase',
  'Docker',
]

function Hero({ onOpenEmail }: HeroProps) {
  const location = useLocation()

  const handleProjectsClick = () => {
    if (location.pathname === '/featured') {
      window.requestAnimationFrame(() => scrollToSection('featured'))
    }
  }

  return (
    <section className="hero-section" id="home">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">{profile.major} Student</p>
          <h1>{profile.name}</h1>
          <p className="hero-headline">
            Computer Science student at UC Santa Barbara
          </p>
          <p className="hero-intro">
            Interested in frontend, mobile, full-stack web development, and
            product-focused software engineering.
          </p>
          <p className="hero-meta">
            {profile.school} | {profile.location}
          </p>

          <div className="hero-actions" aria-label="Primary links">
            <Link
              className="button button-primary"
              to="/featured"
              onClick={handleProjectsClick}
            >
              View Projects
            </Link>
            <a
              className="button button-secondary"
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
            <a
              className="button button-small button-secondary"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="button button-small button-secondary"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <button
              className="button button-small button-secondary"
              type="button"
              onClick={onOpenEmail}
            >
              Email
            </button>
          </div>
        </div>

        <aside className="hero-work-card" aria-label="Featured work preview">
          <div className="work-card-header">
            <p className="eyebrow">Featured Work</p>
            <h2>Project areas I am building in</h2>
          </div>

          <ul className="work-area-list">
            {workAreas.map((area, index) => (
              <li key={area}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <strong>{area}</strong>
              </li>
            ))}
          </ul>

          <div className="work-tech-panel">
            <p>Core tools</p>
            <div className="work-tech-tags" aria-label="Featured technologies">
              {heroTechTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero
