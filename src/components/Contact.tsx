import { profile } from '../data/profile'

const copyrightYear = 2026

type ContactProps = {
  onOpenEmail: () => void
}

function Contact({ onOpenEmail }: ContactProps) {
  return (
    <footer className="contact-section" id="contact">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Contact</h2>
          <p>
            Open to new-grad software engineering opportunities, technical
            projects, and collaboration in frontend, mobile, full-stack web
            development, and product-focused software.
          </p>
        </div>

        <div className="contact-actions" aria-label="Contact links">
          <button
            className="button button-primary"
            type="button"
            onClick={onOpenEmail}
          >
            Email
          </button>
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
        <p>
          Copyright {copyrightYear} {profile.name}. Built with React,
          TypeScript, and CSS.
        </p>
      </div>
    </footer>
  )
}

export default Contact
