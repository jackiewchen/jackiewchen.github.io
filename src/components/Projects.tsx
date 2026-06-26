import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="eyebrow">Featured Projects</p>
            <h2>Software engineering projects</h2>
          </div>
          <p>
            Coursework and team projects across mobile development, full-stack
            web apps, and systems programming.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
