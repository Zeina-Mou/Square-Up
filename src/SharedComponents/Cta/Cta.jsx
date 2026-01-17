import './Cta.css'
import { Link } from 'react-router-dom'
const Cta = () => {
    return (
        <div className='rb-cta'>
            <div className='rb-ctaflex'>
                <div className='image-shadow'></div>
                <div><h2>Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h2>
                    <h4>Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</h4>
                </div>
            </div>
            <div className='rb-ctaflex rb-container'>
                <h3>Welcome to SquareUp <span>Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</span> </h3>
                <Link to="/contact"><button>Start Project</button></Link>

            </div>

        </div>
    )
}

export default Cta