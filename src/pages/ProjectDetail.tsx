import { useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Contact from '../components/Contact'
import ExternalLinkIcon from '../components/ExternalLinkIcon'
import { projects, type Project } from '../data/projects'

type ProjectDetailProps = {
  onOpenEmail: () => void
}

function getProjectLinks(project: Project) {
  return [
    project.repoUrl ? { label: 'GitHub', href: project.repoUrl } : null,
    project.demoUrl ? { label: 'Demo', href: project.demoUrl } : null,
    project.caseStudyUrl
      ? { label: 'Case Study', href: project.caseStudyUrl }
      : null,
  ].filter((link): link is { label: string; href: string } => link !== null)
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.galleryImages?.length) {
    return (
      <section className="detail-visual-grid" aria-label={`${project.title} visuals`}>
        {project.galleryImages.map((image) => (
          <figure className="detail-visual-frame" key={image.src}>
            <img src={image.src} alt={image.alt} />
            {image.caption ? <figcaption>{image.caption}</figcaption> : null}
          </figure>
        ))}
      </section>
    )
  }

  if (project.thumbnail) {
    return (
      <section className="detail-visual-frame detail-visual-single">
        <img
          src={project.thumbnail}
          alt={project.thumbnailAlt ?? `${project.title} project visual`}
        />
      </section>
    )
  }

  return (
    <section
      className={`detail-placeholder project-placeholder project-placeholder-${project.visualVariant}`}
      aria-label={`${project.title} visual summary`}
    >
      <div className="preview-copy">
        <span>{project.category}</span>
        <strong>{project.previewTitle}</strong>
      </div>
      <div className="preview-screen" aria-hidden="true">
        <span className="preview-bar" />
        <span className="preview-line" />
        <span className="preview-line preview-line-short" />
        <span className="preview-line" />
      </div>
      <ul className="preview-items" aria-hidden="true">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

function ProjectProof({ project }: { project: Project }) {
  const hasProofItems = Boolean(project.projectProof?.length)

  if (!hasProofItems && !project.sourceAvailabilityNote) {
    return null
  }

  return (
    <article className="detail-card detail-card-wide project-proof-card">
      <h2>Project Proof</h2>
      {hasProofItems ? (
        <ul className="project-proof-list">
          {project.projectProof?.map((item) => (
            <li key={item.label}>
              <strong>{item.label}</strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {project.sourceAvailabilityNote ? (
        <p className="project-proof-note">{project.sourceAvailabilityNote}</p>
      ) : null}
    </article>
  )
}

function ProjectDetail({ onOpenEmail }: ProjectDetailProps) {
  const { slug } = useParams()
  const [searchParams] = useSearchParams()
  const project = projects.find((item) => item.slug === slug)
  const projectLinks = project ? getProjectLinks(project) : []
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
            <p className="eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="detail-lede">{project.overview}</p>
          </div>

          <ProjectVisual project={project} />

          <div className="detail-grid">
            <article className="detail-card detail-card-wide">
              <h2>Overview</h2>
              <p>{project.overview}</p>
            </article>

            <ProjectProof project={project} />

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
                {project.projectFocus.map((focus) => (
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
                {project.contributions.map((contribution) => (
                  <li key={contribution}>{contribution}</li>
                ))}
              </ul>
            </article>

            <article className="detail-card">
              <h2>Technical Takeaways</h2>
              <p>{project.technicalTakeaways}</p>
            </article>

            {projectLinks.length ? (
              <article className="detail-card detail-card-wide">
                <h2>Links</h2>
                <div className="detail-actions">
                  {projectLinks.map((link) => (
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
