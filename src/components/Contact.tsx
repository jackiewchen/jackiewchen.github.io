import { profile } from '../data/profile'

const currentYear = new Date().getFullYear()

function Contact() {
  return (
    <footer className="contact-section" id="contact">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Contact</h2>
          <p>
            Open to software engineering internships, project collaborations,
            and technical conversations.
          </p>
        </div>

        <div className="contact-actions" aria-label="Contact links">
          <a className="button button-primary" href={profile.links.email}>
            Email
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
          <a
            className="button button-secondary"
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>

      <div className="container footer-row">
        <p>Copyright {currentYear} {profile.name}. Built with React, TypeScript, and CSS.</p>
      </div>
    </footer>
  )
}

export default Contact
