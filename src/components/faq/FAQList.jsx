import FAQItem from "./FAQItem";
import "./FAQList.css";

import faqData from "../../data/Data"; 

const FAQList = () => {


  const firstColumn = faqData.slice(0, 4);
  const secondColumn = faqData.slice(4, 8);

  return (
    <div className="kh-faq-container">
      <div className="kh-faq-column">
        {firstColumn.map((item, index) => (
          <FAQItem
            key={item.id}
            number={String(index + 1).padStart(2, "0")}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>

      <div className="kh-faq-column">
        {secondColumn.map((item, index) => (
          <FAQItem
            key={item.id}
            number={String(index + 5).padStart(2, "0")}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQList;