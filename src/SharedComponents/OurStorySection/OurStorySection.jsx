import './OurStorySection.css';
import NumberCard from '../AtSquareUpSection/NumberCard'
import { OurStoryData1 } from '../../../public/saba-DataBase/OurStoryData'
function OurStorySection() {
    return (
        <>
            <div>
                <h2 className='our-title'>Our Story</h2>
                <div className='sb-containerOur'>
                    {OurStoryData1.map((data, index) => (
                        <NumberCard
                            key={index}
                            number={data.number}
                            title={data.title}
                            desc={data.desc}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
export default OurStorySection
