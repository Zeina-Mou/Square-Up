import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="hero-section main-margin">
            {/* Squares */}
            <div className="grid-pattern"></div>
        
            {/* Mountains */}
            <div className="mountain-bg"></div>

            <div className="container">
                <div className="hero-content">
                    <h2 className="hero-title">
                        A Digital Product Studio <br /> that will Work
                    </h2>

                    <div className="description-box">
                        <span>For</span>
                        <span className="tag">Startups</span>
                        <span className="separator">,</span>
                        <span className="tag">Enterprise leaders</span>
                        <span className="separator">,</span>
                        <span className="tag">Media & Publishers</span>
                        <span>and</span>
                        <span className="tag">Social Good</span>
                    </div>

                    <div className="hero-buttons">
                        <Link to="/works" className="btn btn-outline">Our Works</Link>
                        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero