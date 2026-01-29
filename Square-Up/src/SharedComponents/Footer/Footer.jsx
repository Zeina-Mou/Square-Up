import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <img src="assets/img/home/SquareUp_logo.png" alt="Square Up Logo" />
                    <h1>SquareUp</h1>
                </div>
        
                <nav className="footer-nav">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/work">Work</Link>
                    <Link to="/process">Process</Link>
                    <Link to="/about">About</Link>
                    <Link to="/careers">Careers</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <div className="footer-social">
                    <span className="social-label">Stay Connected</span>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/" className="social-box"><img src="assets/icons/fcebook.svg" alt="Facebook icon" /></a>
                        <a href="https://www.twitter.com/" className="social-box"><img src="assets/icons/twitter.svg" alt="Twitter icon" /></a>
                        <a href="https://www.linkedIn.com/" className="social-box"><img src="assets/icons/linkedIn.svg" alt="LinkedIn icon" /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="contact-info">
                    <div className="info-item">
                        <span className="icon"><img src="assets/icons/mail.svg" alt="mail icon" /></span>
                        <span>hello@squareup.com</span>
                    </div>
                    <div className="info-item">
                        <span className="icon"><img src="assets/icons/call.svg" alt="telephone headset" /></span>
                        <span>+91 91813 23 2309</span>
                    </div>
                    <div className="info-item">
                        <span className="icon"><img src="assets/icons/location.svg" alt="location icon" /></span>
                        <span>Somewhere in the World</span>
                    </div>
                </div>
                <p className="copyright">© 2023 SquareUp. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;