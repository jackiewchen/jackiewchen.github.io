import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
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
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <ul className="tag-list" aria-label={`${project.title} technologies`}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a href={project.sourceUrl} target="_blank" rel="noreferrer">
          Source
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
