import { useState } from "react";
import "./FAQList.css";

const FAQItem = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`kh-faq-item ${isOpen ? "active" : ""}`}>
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

        <button
          className="kh-toggle-btn"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          aria-label="Toggle FAQ"
        >
          <img
            src={
              isOpen
                ? "assets/img/home/close.svg"
                : "assets/img/home/open.svg"
            }
            alt="toggle icon"
            className="kh-toggle-icon"
          />
        </button>
      </div>

      <div className={`kh-faq-p ${isOpen ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
