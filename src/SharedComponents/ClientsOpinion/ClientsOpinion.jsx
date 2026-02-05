
import { useEffect, useState, useRef } from 'react';
import ClientCard from './ClientCard';
import './ClientsOpinion.css';
import { API_BASE_URL } from '../../utils/config';

function ClientsOpinion() {
    function getVisibleCards(width) {
        if (width <= 992) return 1;       
        if (width <= 1440) return 2;    
        return 6;                    
    }
    const [clientOpinion, setClientOpinionData] = useState([]);
    const [visible, setVisible] = useState(() => getVisibleCards(window.innerWidth));
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/testimonials`) 
            .then((res) => res.json())
            .then((data) => setClientOpinionData(data))
            .catch((err) => console.error("Error fetching FAQ:", err));
    }, []);

    useEffect(() => {
        const onResize = () => {
            const v = getVisibleCards(window.innerWidth);
            setVisible(v);
            setCurrentIndex((cur) => {
                const maxStart = Math.max(0, clientOpinion.length - v);
                return Math.min(cur, maxStart);
            });
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [clientOpinion.length]);

    const isSliderActive = visible < clientOpinion.length;
    const maxStart = Math.max(0, clientOpinion.length - visible);

    const handlePrev = () => {
        setCurrentIndex((cur) => Math.max(0, cur - 1));
    };

    const handleNext = () => {
        setCurrentIndex((cur) => Math.min(maxStart, cur + 1));
    };

    const translatePercent = isSliderActive ? (currentIndex * (100 / visible)) : 0;
    return (
        <>
            {!isSliderActive && (
                <div className="sb-clients">
                    {clientOpinion.map((data, index) => (
                        <ClientCard
                            key={index}
                            title={data.title}
                            desc={data.desc}
                            profile={data.profile}
                            name1={data.name1}
                            text={data.text}
                        />
                    ))}
                </div>
            )}

            {isSliderActive && (
                <div className="sb-slider" style={{ '--visible-cards': visible }}>
                    <div
                        className="sb-slider-track"
                        ref={trackRef}
                        style={{ transform: `translateX(-${translatePercent}%)` }}
                    >
                        {clientOpinion.map((data, index) => (
                            <div className="sb-slider-item" key={index}>
                                <ClientCard
                                    title={data.title}
                                    desc={data.desc}
                                    profile={data.profile}
                                    name1={data.name1}
                                    text={data.text}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="sb-slider-controls">
                        <button
                            className="sb-button sb-slider-btn"
                            onClick={handlePrev}
                            aria-label="Previous"
                            disabled={currentIndex === 0}
                        >   ‹   </button>

                        <button
                            className="sb-button sb-slider-btn"
                            onClick={handleNext}
                            aria-label="Next"
                            disabled={currentIndex >= maxStart}
                        >  ›    </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ClientsOpinion;
