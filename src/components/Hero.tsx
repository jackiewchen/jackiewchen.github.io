import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Software Engineering Portfolio</p>
          <h1>Hi, I&apos;m Jackie. I build clean, useful web experiences.</h1>
          <p className="hero-intro">
            I&apos;m focused on React, TypeScript, and practical engineering
            projects that turn ideas into reliable, easy-to-use products.
          </p>

          <div className="hero-actions" aria-label="Primary links">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a
              className="button button-secondary"
              href="https://example.com/resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>

        <figure className="hero-visual">
          <img
            src={heroImage}
            alt="Abstract layered illustration representing software building blocks"
          />
          <figcaption>
            React, TypeScript, and product-minded frontend development.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Hero
