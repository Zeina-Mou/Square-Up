import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Process', path: '/process' },
  { name: 'About', path: '/about' }
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-section">
          <img src="/public/assets/img/home/SquareUp_logo.png" alt="SquareUp" className="logo-img" />
          <span className="logo-text">SquareUp</span>
        </Link>

        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          <img 
            src={"/public/assets/icons/mobileMenu.svg"} 
            alt="Menu Toggle" 
            className={`nav-icon ${isMenuOpen ? 'active' : ''}`}
            style={{ width: '25px', height: '17px' }}
          />
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <NavLink 
                to={link.path} 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Link to="/contact" className="contact-btn">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar
