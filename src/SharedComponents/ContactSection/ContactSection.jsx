import { Link } from 'react-router-dom'
import './ContactSection.css'

const ContactSection = ({ image, logo, text, paragraph, button }) => {
    return (
        //  تنسيق خلفية بألوان داكنةو كتابة كومبننت مشترك لل cta
        <div className="Contact-Section main-margin">
            {/* <div className="rb-bg" style={{
                backgroundImage: `url(${image}), url(${photo}) `
                , backgroundRepeat: "repeat, no-repeat",
                backgroundSize: "auto, cover", backgroundPosition: "center",
                filter: "grayscale(100%) brightness(0.2) contrast(1.1)",opacity: " 60% 89% " , minHeight: "400px"
            }} >
            </div> */}
            <div
                className="rb-bg-image"
                style={{ backgroundImage: `url(${image})` }}
            >
            </div>

            <div className="rb-pattern"></div>
            <div className='rb-style'>
                <div className='rb-shadow'>{logo}</div>
                <h1>{text}</h1>
                <p>{paragraph}</p>
                <Link to="/contact"><button>Start Project</button></Link>
            </div>
        </div>
    )
}

export default ContactSection
