const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Git',
  'Testing',
  'Documentation',
]

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <div>
          <p className="eyebrow">About</p>
          <h2>Curious, practical, and focused on shipping useful work.</h2>
        </div>

        <div className="about-content">
          <p>
            I enjoy building interfaces that feel straightforward, dependable,
            and easy to understand. My current focus is strengthening my React
            and TypeScript skills while learning how strong engineering habits
            make software easier to maintain.
          </p>
          <p>
            Outside of implementation, I care about naming, documentation,
            accessibility, and making project decisions clear for teammates.
          </p>

          <ul className="skill-list" aria-label="Technical skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
