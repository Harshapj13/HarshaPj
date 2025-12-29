import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="brand">Harsha PJ</h1>
        <nav className="site-nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/resume" className="nav-link">Resume</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
