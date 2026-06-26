import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Contact from '../components/Contact'
import { projects } from '../data/projects'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

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
            <Link className="button button-primary" to="/#projects">
              Back to Projects
            </Link>
          </section>
        </main>
        <Contact />
      </>
    )
  }

  return (
    <>
      <main className="project-detail-page">
        <section className="container detail-shell">
          <div className="detail-header">
            <Link className="back-link" to="/#projects">
              Back to Projects
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
              <h2>What I Learned</h2>
              <p>{project.whatLearned}</p>
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
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ) : null}
          </div>
        </section>
      </main>
      <Contact />
    </>
  )
}

export default ProjectDetail
