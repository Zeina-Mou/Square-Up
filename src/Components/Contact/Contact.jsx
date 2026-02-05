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

    const saveUser = async (event) => {
    event.preventDefault();
    const options = [];
    if (webRef.current?.checked) options.push("web");
    if (collabRef.current?.checked) options.push("collaboration");
    if (mobileRef.current?.checked) options.push("mobile");
    if (othersRef.current?.checked) options.push("others");

    const user = {
        name: name.current.value,
        email: email.current.value,
        options,
        message: message.current.value
    };

    try {
        // 1. الحفظ في السيرفر (ملف JSON)
        const response = await fetch("http://localhost:5000/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            const savedUser = await response.json();
            
            // 2. حفظ الاسم محلياً ليعرفه الـ Navbar فوراً
            localStorage.setItem("userName", savedUser.name);

            // 3. إرسال حدث لتنبيه الـ Navbar بوجود مستخدم جديد
            window.dispatchEvent(new CustomEvent("user:updated", { detail: savedUser }));
            
            alert(`Welcome ${savedUser.name}! Your data is saved.`);
            formRef.current.reset();
        }
    } catch (error) {
        console.error("Error saving user:", error);
    }
};

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
