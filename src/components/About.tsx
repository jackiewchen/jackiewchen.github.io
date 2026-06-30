import { profile, skillGroups } from '../data/profile'
import HeadshotAvatar from './HeadshotAvatar'

function About() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container about-layout">
        <div>
          <p className="eyebrow">Skills</p>
          <h2>Computer Science student focused on user-facing software.</h2>
        </div>

        <div className="about-content">
          <p>
            I&apos;m a Computer Science student at UC Santa Barbara interested
            in building user-focused software across mobile, frontend, and
            full-stack web applications. My projects combine product thinking,
            frontend development, backend APIs, and technical coursework in
            systems and computer graphics.
          </p>

          <aside className="profile-card" aria-label="Profile summary">
            <HeadshotAvatar className="profile-card-avatar" />
            <div className="profile-card-copy">
              <strong>{profile.name}</strong>
              <span>Computer Science student at UC Santa Barbara</span>
              <span>{profile.location}</span>
            </div>
          </aside>

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
