import './AtSquareUpSection.css'
import NumberCard from './NumberCard'
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../utils/config';

function AtSquareUpSection() {
    const [atSqerUpData, setAtSqerUpData] = useState([]);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        fetch(`${API_BASE_URL}/atsquareup`) 
            .then((res) => res.json())
            .then((data) => setAtSqerUpData(data))
            .catch((err) => console.error("Error fetching FAQ:", err));
    }, []);

    const visibleCount = showMore ? Math.min(8, atSqerUpData.length) : Math.min(4, atSqerUpData.length);
    const visibleItems = atSqerUpData.slice(0, visibleCount);

    return (
        <div>
            <div className='sb-container'>
                {visibleItems.map((data, index) => (
                    <NumberCard
                        key={index}
                        number={data.number}
                        title={data.title}
                        desc={data.desc}
                    />
                ))}
            </div>

            {atSqerUpData.length > 4 && (
                <div style={{ textAlign: 'center', marginTop: 10 }}>
                    <button
                        className={`sb-show-more-btn ${showMore ? 'active' : ''}`}
                        onClick={() => setShowMore(prev => !prev)}
                    >
                        {showMore ? 'Show less' : 'Show more'}
                        <span className="arrow"></span>
                    </button>
                </div>
            )}

        </div>
    );
}

export default AtSquareUpSection;
