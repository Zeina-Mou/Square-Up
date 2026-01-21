import ContactSection from "../SharedComponents/ContactSection/ContactSection"
import WorksCards from "../SharedComponents/WorksCards/WorksCards"
import { useEffect, useState } from "react";


const Work = () => {
  const [works, setwork] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch('assets/data/works.json')
      .then(res => res.json())
      .then(data => setwork(data))
      .catch(err =>
        console.error("error loading work", err));
  }, []);
  const visibleCards = showAll ? works : works.slice(0, 4);
  return (
    <>
      <div className="rb-flex-works">
        {visibleCards.map((card, index) => {
          return (
            <WorksCards key={index} firstTitel={card.firstTitel} picther={card.picther} secondTitel={card.secondTitel} link={card.link} icon={card.icon} paragraph={card.paragraph} />
          )
        })}
      </div>
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <button
          onClick={() => setShowAll(!showAll)}
          className="toggle-btn"
        >
          {showAll ? 'show less' : 'show more'}
        </button>
      </div>

      <ContactSection
        image="assets/img/home/squares.png"
        photo="assets/img/home/thank.png"
        logo=""
        text="Let us Bring your Ideas to Life in the Digital World."
        paragraph="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
        button="Start Project"
      />
    </>
  )
}

export default Work
