/*
========================================
Component: Hero
========================================
Description:
------------
Hero is a React functional component that represents the main hero section of the homepage.
It introduces the website with a headline,descriptive tags, and call-to-action buttons.
----------------------------------------
Features:
---------
- Displays a main title with line break.
- Includes decorative background elements (grid pattern and mountain background).
- Shows a descriptive text highlighting target audiences.
- Provides navigation buttons using React Router Link components.
----------------------------------------
Technical Details:
------------------
- Component Type: Functional Component
- State: None
- Props: None
- Styling: External CSS file (Hero.css)
- Navigation: react-router-dom (Link)
----------------------------------------
Usage:
------
Used as the main landing section to capture user attention and guide them to key pages (Works, Contact).
========================================
*/
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

                    <div className="mn-hero-buttons">
                        <Link to="/works" className="mn-btn mn-btn-outline">Our Works</Link>
                        <Link to="/contact" className="mn-btn mn-btn-primary">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero