import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import ExternalLinkIcon from './ExternalLinkIcon'

type ProjectCardProps = {
  project: Project
  source?: 'featured' | 'all'
}

type ProjectPreviewProps = {
  detailsPath: string
  project: Project
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

function ProjectPreview({ detailsPath, project }: ProjectPreviewProps) {
  if (project.thumbnail) {
    return (
      <Link
        className="project-visual project-thumbnail"
        to={detailsPath}
        aria-label={`View ${project.title} details`}
      >
        <img
          src={project.thumbnail}
          alt={project.thumbnailAlt ?? `${project.title} project preview`}
        />
      </Link>
    )
  }

  return (
    <Link
      className={`project-visual project-placeholder project-placeholder-${project.visualVariant}`}
      to={detailsPath}
      aria-label={`View ${project.title} details`}
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
        {project.highlights.slice(0, 3).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Link>
  )
}

function ProjectCard({ project, source = 'all' }: ProjectCardProps) {
  const detailsPath = `/projects/${project.slug}?from=${source}`
  const projectLinks = getProjectLinks(project)

  return (
    <article className="project-card">
      <ProjectPreview detailsPath={detailsPath} project={project} />

      <div className="project-content">
        <h3>
          <Link to={detailsPath}>{project.title}</Link>
        </h3>
        <p>{project.description}</p>
      </div>

      <div className="project-detail-group project-card-tags">
        <h4>Highlights</h4>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.highlights.map((tag) => (
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
        {projectLinks.map((link) => (
          <a
            className="button button-small button-secondary"
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
  )
}

export default ProjectCard
