import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Event Registration
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/guidelines" className="nav-link">Guidelines</Link>
          <Link to="/register" className="nav-link">Register</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
