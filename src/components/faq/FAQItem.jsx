import { useState } from "react";
import "./FAQList.css";

const FAQItem = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="kh-faq-item">
      <div
        className="kh-faq-header"
        onClick={() => setIsOpen(!isOpen)} 
        style={{ cursor: "pointer" }} 
      >
        <div className="kh-left">
          <span className={`kh-faq-number ${isOpen ? "active" : ""}`}>
            {number}
          </span>
          <h3 className={isOpen ? "active" : ""}>{question}</h3>
        </div>

        <button
          className="kh-toggle-btn"
          onClick={(e) => {
            e.stopPropagation(); 
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? "×" : "+"}
        </button>
      </div>

      {/* الإجابة */}
      <div
        className={`kh-faq-p ${isOpen ? "open" : ""}`}
   
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
