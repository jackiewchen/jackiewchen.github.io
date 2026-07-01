import { useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Contact from '../components/Contact'
import ExternalLinkIcon from '../components/ExternalLinkIcon'
import { projects } from '../data/projects'

type ProjectDetailProps = {
  onOpenEmail: () => void
}

function ProjectDetail({ onOpenEmail }: ProjectDetailProps) {
  const { slug } = useParams()
  const [searchParams] = useSearchParams()
  const project = projects.find((item) => item.slug === slug)
  const from = searchParams.get('from')
  const backPath = from === 'featured' ? '/featured' : '/projects'
  const backLabel =
    from === 'featured' ? 'Back to Featured Projects' : 'Back to All Projects'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  if (!project) {
    return (
      <>
        <main className="project-detail-page">
          <section className="container detail-shell">
            <p className="eyebrow">Project</p>
            <h1>Project not found</h1>
            <p className="detail-lede">
              The project you are looking for is not available.
            </p>
            <Link className="button button-primary" to="/projects">
              Back to All Projects
            </Link>
          </section>
        </main>
        <Contact onOpenEmail={onOpenEmail} />
      </>
    )
  }

  return (
    <>
      <main className="project-detail-page">
        <section className="container detail-shell">
          <div className="detail-header">
            <Link className="back-link" to={backPath}>
              {backLabel}
            </Link>
            <p className="eyebrow">Project Detail</p>
            <h1>{project.title}</h1>
            <p className="detail-lede">{project.overview}</p>
          </div>

          <div className="detail-grid">
            <article className="detail-card detail-card-wide">
              <h2>Overview</h2>
              <p>{project.overview}</p>
            </article>

            <article className="detail-card">
              <h2>Tech Stack</h2>
              <ul className="tag-list detail-tags">
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </article>

            <article className="detail-card">
              <h2>Project Focus</h2>
              <ul className="focus-list detail-tags">
                {project.focus.map((focus) => (
                  <li key={focus}>{focus}</li>
                ))}
              </ul>
            </article>

            <article className="detail-card detail-card-wide">
              <h2>My Role</h2>
              <p>{project.role}</p>
            </article>

            <article className="detail-card">
              <h2>Key Contributions</h2>
              <ul className="detail-list">
                {project.keyContributions.map((contribution) => (
                  <li key={contribution}>{contribution}</li>
                ))}
              </ul>
            </article>

            <article className="detail-card">
              <h2>Technical Takeaways</h2>
              <p>{project.technicalTakeaways}</p>
            </article>

            {project.links?.length ? (
              <article className="detail-card detail-card-wide">
                <h2>Links</h2>
                <div className="detail-actions">
                  {project.links.map((link) => (
                    <a
                      className="button button-secondary"
                      href={link.href}
                      key={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${link.label}, opens in a new tab`}
                    >
                      <span>{link.label}</span>
                      <ExternalLinkIcon />
                    </a>
                  ))}
                </div>
              </article>
            ) : null}
          </div>
        </section>
      </main>
      <Contact onOpenEmail={onOpenEmail} />
    </>
  )
}

export default ProjectDetail
