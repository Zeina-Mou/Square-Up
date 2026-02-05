import { useEffect, useState } from "react";
import FAQItem from "./FAQItem";
import "./FAQList.css";
import { API_BASE_URL } from '../../utils/config';

const FAQList = () => {
  const [faqData, setFaqData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/faq`) 
        .then((res) => res.json())
        .then((data) => setFaqData(data))
        .catch((err) => console.error("Error fetching FAQ:", err));
}, []);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const firstColumn = faqData.slice(0, 4);
  const secondColumn = faqData.slice(4, 8);

  return (
    <div className="faq-section-parent main-margin">
      <div className={`kh-faq-container  ${showAll ? "is-expanded" : ""}`}>
        
        {/* العمود الأول */}
        <div className="kh-faq-column">
          {firstColumn.map((item, index) => (
            <FAQItem
              key={item.id || index}
              number={String(index + 1).padStart(2, "0")}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        {!isSmallScreen && <div className="kh-middle-line"></div>}

        {/* العمود الثاني: يظهر فقط عند الحاجة في الموبايل */}
        {(!isSmallScreen || showAll) && (
          <div className="kh-faq-column second-col-mobile">
            {secondColumn.map((item, index) => (
              <FAQItem
                key={item.id}
                number={String(index + 5).padStart(2, "0")}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        )}
      </div>

      {/* زر التحكم: خارج الحاوية لضمان الظهور */}
      {isSmallScreen && (
        <div className="kh-show-more-wrapper">
          <button className="kh-show-more-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};


export default FAQList;