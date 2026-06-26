import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

const navItems = [
  { label: 'Projects', to: '/#projects' },
  { label: 'Experience', to: '/#experience' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link className="brand" to="/" aria-label="Jackie Chen portfolio home">
          <span className="brand-mark">J</span>
          <span>{profile.name}</span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="button button-small button-secondary"
          href={profile.links.resume}
          target="_blank"
          rel="noreferrer"
        >
          View Resume
        </a>
      </div>
    </header>
  )
}

export default Navbar
