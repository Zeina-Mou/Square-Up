import "./ContactIconSection.css"
const ContactIconSection = ({ path, image, content }) => {
    return (
        <div className="G-H_Icon">
            <a href={path}><img src={image} alt="photo" /></a>
            <a href={path}>{content}</a>
        </div>
    )
}

export default ContactIconSection