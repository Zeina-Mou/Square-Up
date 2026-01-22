import "./ContactDays.css"
const ContactDays = ({ description, days }) => {
    return (
        <div className="G-H_DaysWorking">
            <span>{description}</span>
            <span>{days}</span>
        </div>
    )
}

export default ContactDays