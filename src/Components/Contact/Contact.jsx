import React, { useRef } from 'react'
import "./Contact.css";
const ContactForm = () => {
    const formRef = useRef(null)
    const name = useRef(null)
    const email = useRef(null)
    const message = useRef(null)
    const webRef = useRef(null)
    const collabRef = useRef(null)
    const mobileRef = useRef(null)
    const othersRef = useRef(null)

    const saveUser = (event) => {
        event.preventDefault()
        const options = []
        if (webRef.current?.checked) options.push("web")
        if (collabRef.current?.checked) options.push("collaboration")
        if (mobileRef.current?.checked) options.push("mobile")
        if (othersRef.current?.checked) options.push("others")

        const user = {
            id: Date.now(),
            name: name.current.value,
            email: email.current.value,
            options,
            message: message.current.value
        }
        window.dispatchEvent(new CustomEvent("user:updated", { detail: user }));
        formRef.current.reset()
    }

    return (
        <form ref={formRef} className='G-H_FormContact main-margin' onSubmit={saveUser}>
            <div className="G-H_NameEmail">
                <div className="G-H_Name">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id='name' placeholder='Type here' ref={name} />
                </div>
                <div className="G-H_Email">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder='Type here' ref={email} />
                </div>
            </div>

            <div className="G-H_OurWorks">
                <p>Why are you contacting us?</p>
                <div className="G-H_Options">
                    <div className="G-H_Option">
                        <input type="checkbox" id="web" ref={webRef} />
                        <label htmlFor="web">Web Design</label>
                    </div>
                    <div className="G-H_Option">
                        <input type="checkbox" id="Collaboration" ref={collabRef} />
                        <label htmlFor="Collaboration">Collaboration</label>
                    </div>
                    <div className="G-H_Option">
                        <input type="checkbox" id="mobile" ref={mobileRef} />
                        <label htmlFor="mobile">Mobile App Design</label>
                    </div>
                    <div className="G-H_Option">
                        <input type="checkbox" id="Others" ref={othersRef} />
                        <label htmlFor="Others">Others</label>
                    </div>
                </div>
            </div>

            <div className="G-H_TextArea">
                <label htmlFor="message">Your Message</label>
                <input type="text" id="message" placeholder='Type here' ref={message} />
            </div>

            <input type="submit" value="Submit" />
        </form>
    )
}

export default ContactForm
