import { Link } from 'react-router-dom'
import './ContactSection.css'

const ContactSection = ({ image, logo, text, paragraph }) => {
    return (
        <div className="Contact-Section main-margin">
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
