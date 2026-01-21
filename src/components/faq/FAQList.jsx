import { useEffect, useState } from "react"
import FAQItem from "./FAQItem"
import "./FAQList.css"

const FAQList = () => {
  const [faqData, setFaqData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 992);

  useEffect(() => {
    fetch("/Square-Up/data/data.json")
      .then((res) => res.json())
      .then((data) => setFaqData(data))
      .catch((err) => console.error(err));
  }, []);

  // مراقبة تغيير حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const firstColumn = faqData.slice(0, 4);
  const secondColumn = faqData.slice(4, 8);

  return (
    <>
      <div className="kh-faq-container">
        {/* العمود الأول */}
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

        {/* العمود الثاني */}
        {(showAll || isLargeScreen) && (
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
        )}
      </div>

      {/* زر عرض المزيد – يظهر فقط على الموبايل */}
      {!isLargeScreen && (
        <div className="kh-show-more-wrapper">
          <button
            className="kh-show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "show less" : "show more"}
          </button>
        </div>
      )}
    </>
  );
};

export default FAQList;
