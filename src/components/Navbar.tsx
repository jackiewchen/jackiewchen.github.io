const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a className="brand" href="#home" aria-label="Portfolio home">
          <span className="brand-mark">J</span>
          <span>Jackie Portfolio</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="button button-small button-secondary"
          href="https://example.com/resume"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </header>
  )
}

export default Navbar
