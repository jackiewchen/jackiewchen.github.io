import { useEffect } from 'react'
import Contact from '../components/Contact'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

type AllProjectsProps = {
  onOpenEmail: () => void
}

function AllProjects({ onOpenEmail }: AllProjectsProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <main className="all-projects-page">
        <section className="container all-projects-shell">
          <div className="section-header">
            <div>
              <p className="eyebrow">All Projects</p>
              <h1>Technical projects</h1>
            </div>
            <p>
              A broader set of software engineering coursework and team
              projects, with concise summaries and detail pages.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Contact onOpenEmail={onOpenEmail} />
    </>
  )
}

export default AllProjects
