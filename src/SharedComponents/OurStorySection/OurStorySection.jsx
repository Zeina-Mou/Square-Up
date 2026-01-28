import './OurStorySection.css';
import NumberCard from '../AtSquareUpSection/NumberCard';
import { useEffect, useState } from 'react';

function OurStorySection() {

    const [ourStoryData, setOurStoryData] = useState([]);

    useEffect(() => {
        fetch('/Square-Up/saba-DataBase/OurStoryData.json')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setOurStoryData(data);
            })
            .catch((error) => {
                console.log(error);
            });
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
