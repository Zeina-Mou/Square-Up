import { Link } from 'react-router-dom'
import './ContactSection.css'

const ContactSection = ({ image, photo, logo, text, paragraph, button }) => {
    return (
        <div className="Contact-Section">
            <div className="rb-bg" style={{
                backgroundImage: `url(${image}), url(${photo}) `
                , backgroundRepeat: "repeat, no-repeat", backgroundSize: "auto, cover", backgroundPosition: "center", filter: "grayscale(100%) brightness(0.3)", minHeight: "400px"
            }} >
            </div>
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
