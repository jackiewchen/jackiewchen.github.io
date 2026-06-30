import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import { featuredProjects } from '../data/projects'

function Projects() {
  return (
    <section className="section projects-section" id="featured">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="eyebrow">Featured Projects</p>
            <h2>Software engineering projects</h2>
          </div>
          <p>
            Coursework and team projects across mobile development, full-stack
            web apps, and computer graphics.
          </p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="section-footer-action">
          <Link className="button button-secondary" to="/projects">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
