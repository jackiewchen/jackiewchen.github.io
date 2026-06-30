import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

type ProjectPreviewProps = {
  detailsPath: string
  project: Project
}

function ProjectPreview({ detailsPath, project }: ProjectPreviewProps) {
  if (project.imageUrl) {
    return (
      <Link className="project-image" to={detailsPath}>
        <img
          src={project.imageUrl}
          alt={project.imageAlt ?? `${project.title} project preview`}
        />
      </Link>
    )
  }

  return (
    <Link
      className={`project-preview project-preview-${project.preview.variant}`}
      to={detailsPath}
      aria-label={`View ${project.title} details`}
    >
      <div className="preview-copy">
        <span>{project.preview.label}</span>
        <strong>{project.preview.heading}</strong>
      </div>

      <div className="preview-screen" aria-hidden="true">
        <span className="preview-bar" />
        <span className="preview-line" />
        <span className="preview-line preview-line-short" />
        <span className="preview-line" />
      </div>

      <ul className="preview-items" aria-hidden="true">
        {project.preview.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Link>
  )
}

function ProjectCard({ project }: ProjectCardProps) {
  const detailsPath = `/projects/${project.slug}`

  return (
    <article className="project-card">
      <ProjectPreview detailsPath={detailsPath} project={project} />

      <div className="project-content">
        <h3>
          <Link to={detailsPath}>{project.title}</Link>
        </h3>
        <p>{project.cardDescription}</p>
      </div>

      <div className="project-detail-group project-card-tags">
        <h4>Highlights</h4>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.cardTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        <Link
          className="button button-small button-secondary project-detail-link"
          to={detailsPath}
        >
          View Details
        </Link>
        {project.links?.map((link) => (
          <a
            className="button button-small button-secondary"
            href={link.href}
            key={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard
