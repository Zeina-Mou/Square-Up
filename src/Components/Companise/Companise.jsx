/*Imports an external CSS file for styling.*/
import './Companise.css'

function Companise() {
    return (
    <>
        <section className="main-margin mn-trusted-companies">
                <div className="mn-trusted-title-box">
                    <p className="mn-trusted-title">Trusted By 250+ Companies</p>
                </div>

                <div className="mn-trusted-logos">
                    <div className="mn-image">
                        <img src="public/assets/img/home/companies/zapier.svg" alt="zapier logo"></img>
                    </div>
                    <div className="mn-image">
                        <img src="public/assets/img/home/companies/spotify.svg" alt="spotify logo"></img>
                    </div>
                    <div className="mn-image">
                        <img src="public/assets/img/home/companies/zoom.svg" alt="zoom logo"></img>
                    </div>
                    <div className="mn-image">
                        <img src="public/assets/img/home/companies/slack.svg" alt="slack logo"></img>
                    </div>
                    <div className="mn-image">
                        <img src="public/assets/img/home/companies/amazon.svg" alt="amazon logo"></img>
                    </div>
                    <div className="mn-image">
                        <img src="public/assets/img/home/companies/adobe.svg" alt="adobe logo"></img>
                    </div>
                </div>
            </section>
    </>
    )
}

export default Companise

/*
=====================================================
Component Name: Companise
=====================================================

Description:
Companise is a presentational React functional component
used to display a "Trusted By Companies" section.
It highlights brand credibility by showcasing logos
of well-known companies in a clean and structured layout.
The component is static and does not handle any state
or receive props, making it lightweight and easy to maintain.
-----------------------------------------------------

Responsibilities:
-----------------
- Display a section title indicating trust by 250+ companies
- Render a list of company logos
- Apply external styling via a dedicated CSS file
-----------------------------------------------------

Structure:
----------
1. Imports an external CSS file for styling.
2. Uses a semantic <section> element as the main wrapper.
3. Displays a title inside a dedicated title container.
4. Renders multiple company logos inside a logos container.
5. Each logo includes an alt attribute for accessibility.
-----------------------------------------------------
Technical Details:
------------------
- Component Type: Functional Component
- State Management: None
- Props: None
- Styling: External CSS file (Companise.css)
- Accessibility: Uses semantic HTML and alt text for images
=====================================================
*/
