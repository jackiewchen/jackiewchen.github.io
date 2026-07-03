import { isRenderableLink, profile } from '../data/site'
import ExternalLinkIcon from './ExternalLinkIcon'

const copyrightYear = 2026

type ContactProps = {
  onOpenEmail: () => void
}

function Contact({ onOpenEmail }: ContactProps) {
  const hasGitHubLink = isRenderableLink(profile.links.github)
  const hasLinkedInLink = isRenderableLink(profile.links.linkedin)
  const hasResumeLink = isRenderableLink(profile.links.resume)

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
          {hasGitHubLink ? (
            <a
              className="button button-secondary"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub, opens in a new tab"
            >
              <span>GitHub</span>
              <ExternalLinkIcon />
            </a>
          ) : null}
          {hasLinkedInLink ? (
            <a
              className="button button-secondary"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn, opens in a new tab"
            >
              <span>LinkedIn</span>
              <ExternalLinkIcon />
            </a>
          ) : null}
          {hasResumeLink ? (
            <a
              className="button button-secondary"
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
