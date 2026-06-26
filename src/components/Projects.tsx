import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="eyebrow">Featured Projects</p>
            <h2>Recent work</h2>
          </div>
          <p>
            A small selection of projects that show frontend development,
            problem solving, and clear communication.
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
