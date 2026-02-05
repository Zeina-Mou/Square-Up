import './OurStorySection.css';
import NumberCard from '../AtSquareUpSection/NumberCard';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../utils/config';

function OurStorySection() {

    const [ourStoryData, setOurStoryData] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/ourstory`) 
            .then((res) => res.json())
            .then((data) => setOurStoryData(data))
            .catch((err) => console.error("Error fetching FAQ:", err));
    }, []);

    return (
        <>
            <div className='sb-containerOur'>
                {ourStoryData.map((data, index) => (
                    <NumberCard
                        key={index}
                        number={data.number}
                        title={data.title}
                        desc={data.desc}
                        titleColor="title-Color"
                    
                    />
                ))}
            </div>
        </>
    )
}
export default OurStorySection
