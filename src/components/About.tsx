import { skillGroups } from '../data/profile'

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <div>
          <p className="eyebrow">About</p>
          <h2>Computer Science student focused on user-facing software.</h2>
        </div>

        <div className="about-content">
          <p>
            I&apos;m a Computer Science student at UC Santa Barbara interested
            in building user-focused software across mobile, frontend, and
            full-stack web applications. My projects combine product thinking,
            frontend development, backend APIs, and systems-level coursework.
          </p>

          <div className="skills-grid" aria-label="Technical skills">
            {skillGroups.map((group) => (
              <section className="skill-group" key={group.label}>
                <h3>{group.label}</h3>
                <ul className="skill-list">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
