const currentYear = new Date().getFullYear()

function Contact() {
  return (
    <footer className="contact-section" id="contact">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something clear and useful.</h2>
          <p>
            I&apos;m open to internships, project collaborations, and
            conversations about software engineering.
          </p>
        </div>

        <div className="contact-actions" aria-label="Contact links">
          <a className="button button-primary" href="mailto:hello@example.com">
            Email
          </a>
          <a
            className="button button-secondary"
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="button button-secondary"
            href="https://www.linkedin.com/in/your-username"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="container footer-row">
        <p>© {currentYear} Jackie. Built with React, TypeScript, and CSS.</p>
      </div>
    </footer>
  )
}

export default Contact
