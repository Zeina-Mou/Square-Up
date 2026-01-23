import { useState } from "react";
import WorksCards from "../WorksCards/WorksCards";

const Worklist = ({ works }) => {
    const [showAll, setShowAll] = useState(false);
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

        </>
    )
}

export default Worklist
