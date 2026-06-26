import { experience } from '../data/experience'

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>How I&apos;m growing</h2>
          </div>
          <p>
            A snapshot of the practice, coursework, and project work shaping my
            engineering foundation.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={`${item.role}-${item.period}`}>
              <div className="experience-meta">
                <p>{item.period}</p>
                <span>{item.organization}</span>
              </div>

              <div className="experience-details">
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
