import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const detailsPath = `/projects/${project.slug}`

  return (
    <article className="project-card">
      {project.imageUrl ? (
        <div className="project-image">
          <img
            src={project.imageUrl}
            alt={project.imageAlt ?? `${project.title} project preview`}
          />
        </div>
      ) : null}

      <div className="project-content">
        <h3>
          <Link to={detailsPath}>{project.title}</Link>
        </h3>
        <p>{project.cardDescription}</p>
      </div>

      <div className="project-detail-group">
        <h4>Tech Stack</h4>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.techStack.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="project-detail-group">
        <h4>Project Focus</h4>
        <ul className="focus-list">
          {project.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        <Link className="project-detail-link" to={detailsPath}>
          View Details
        </Link>
        {project.links?.map((link) => (
          <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard
