import { useState } from "react";

const FAQItem = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="kh-faq-item">
      <div
        className="kh-faq-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="kh-left">
      
          <span className={`kh-faq-number ${isOpen ? "active" : ""}`}>
            {number}
          </span>

        <h3 className={isOpen ? "active" : ""}>{question}</h3>
        </div>

        <button className="kh-toggle-btn">
          {isOpen ? "×" : "+"}
        </button>
      </div>

      {isOpen && (
        <div className="kh-faq-p">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
