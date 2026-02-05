import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="mn-hero-section main-margin">
            {/* Squares */}
            <div className="mn-grid-pattern"></div>
        
            {/* Mountains */}
            <div className="mn-mountain-bg"></div>

            <div className="mn-container">
                <div className="mn-hero-content">
                    <h2 className="mn-hero-title">
                        A Digital Product Studio <br /> that will Work
                    </h2>

                    <div className="mn-description-box">
                        <span>For</span>
                        <span className="mn-tag">Startups</span>
                        <span className="mn-separator">,</span>
                        <span className="mn-tag">Enterprise leaders</span>
                        <span className="mn-separator">,</span>
                        <span className="mn-tag">Media & Publishers</span>
                        <span>and</span>
                        <span className="mn-tag">Social Good</span>
                    </div>
                    <div className="mn-description-on-mScreen">
                        <p>For startups, enterprise leaders, media &<br/> publishers, and social good.</p>
                    </div>

                    <div className="mn-hero-buttons">
                        <Link to="/works" className="mn-btn mn-btn-outline">Our Works</Link>
                        <Link to="/contact" className="mn-btn mn-btn-primary">Contact Us</Link>
                    </div>
                </div>
            </div>
            <p className='ze-description'>Trusted By 250+ Companies</p>
        </div>
    )
}

export default Hero