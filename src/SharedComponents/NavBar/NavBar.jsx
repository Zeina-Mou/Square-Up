import { useState , useEffect} from 'react'
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Process', path: '/process' },
  { name: 'About', path: '/about' },
  { name: 'Dash', path: '/dashboard' }
];

function NavBar() {
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  useEffect(() => {
  const handleUserUpdate = (event) => {
    setUserName(event.detail.name);
  };

  window.addEventListener("user:updated", handleUserUpdate);
  
  return () => {
    window.removeEventListener("user:updated", handleUserUpdate);
  };
}, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-section">
          <img src="assets/img/home/SquareUp_logo.png" alt="SquareUp" className="logo-img" />
          <h1 className="logo-text">SquareUp</h1>
        </Link>

        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          <img 
            src={"assets/icons/mobileMenu.svg"} 
            alt="Menu Toggle" 
            className={`nav-icon ${isMenuOpen ? 'active' : ''}`}
            style={{ width: '25px', height: '17px' }}
          />
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {navLinks
          .filter(link => !(link.name === 'Dash' && window.innerWidth < 992))
          .map((link) => (
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
          {userName ? (
            <div className="nav-user-container">
              <div className="user-name-box">
                {userName}
              </div>
      
              <button onClick={() => { localStorage.removeItem("userName"); setUserName(null); }} className="logout-box-btn">
                LogOut
              </button>
            </div>
            ) : (
            <Link to="/contact" className="contact-btn">Contact Us</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar
