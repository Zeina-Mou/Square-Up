import "./ContactSocialIcons.css"
const ContactSocialIcons = ({ description, imageface, alternativef, imagex, alternativex, imagein, alternativein }) => {
    return (
        <div className='G-H_SocialIcons'>
            <p className='G-H_Description'>{description}</p>
            <div className="G-H_ImageWrapper">
                <div className="G-H_Image"><img src={imageface} alt={alternativef} /></div>
                <div className="G-H_Image"><img src={imagex} alt={alternativex} /></div>
                <div className="G-H_Image"><img src={imagein} alt={alternativein} /></div>
            </div>
        </div>
    )
}

export default ContactSocialIcons