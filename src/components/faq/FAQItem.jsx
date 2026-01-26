import { useState } from "react";
import "./FAQList.css"

const FAQItem = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`kh-faq-item ${isOpen ? "open" : ""}`}>
      <div
        className="kh-faq-header"
        onClick={() => setIsOpen(!isOpen)}
      >

        {/* تغيير لون السؤال ورقمه عند الفتح */}
        <div className="kh-left">
          <span className={`kh-faq-number ${isOpen ? "active" : ""}`}>
            {number}
          </span>

          <h3 className={isOpen ? "active" : ""}>{question}</h3>
        </div>
{/* تغيير شكل الاشارة عند الضغط وتغيير لونها*/}
    <button className={`kh-toggle-btn ${isOpen ? "active" : ""}`}>
  {isOpen ? "×" : "+" }
</button>

      </div>

      <div className={`kh-faq-p ${isOpen ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
