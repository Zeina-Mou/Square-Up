import './AtSquareUpSection.css'
import NumberCard from './NumberCard'
import { useEffect, useState } from 'react';

function AtSquareUpSection() {
    const [atSqerUpData, setAtSqerUpData] = useState([]);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        fetch('/Square-Up/saba-DataBase/AtSquareUpData.json')
            .then(res => res.json())
            .then(data => setAtSqerUpData(data))
            .catch(err => console.log(err));
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
                <div style={{ textAlign: 'center', marginTop: 20 }}>
                    <button
                        className="sb-show-more-btn"
                        onClick={() => setShowMore(prev => !prev)}
                    >
                        {showMore ? 'show less ▲' : 'show more ▼'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default AtSquareUpSection;
