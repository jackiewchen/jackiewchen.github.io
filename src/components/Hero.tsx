import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'
import { profile } from '../data/profile'

function Hero() {
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
            <Link className="button button-primary" to="/#projects">
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
              className="button button-secondary"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="button button-secondary"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="button button-secondary" href={profile.links.email}>
              Email
            </a>
          </div>
        </div>

        <figure className="hero-visual">
          <img
            src={heroImage}
            alt="Abstract layered illustration representing software building blocks"
          />
          <figcaption>
            Software engineering projects across mobile, web, and systems.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Hero
