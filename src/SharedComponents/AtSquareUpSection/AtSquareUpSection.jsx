import './AtSquareUpSection.css'
import { AtSquareUpData1 } from '../../../public/saba-DataBase/AtSquareUpData'
import NumberCard from './NumberCard'


function AtSquareUpSection() {
    return (
        <>
            <div>
                <div className='at-square-up'>
                    <h2>At SquareUp</h2>
                    <p className='sb-square-desc'>We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
                    <div className='sb-square-process'> <p>Here's an overview of our typical process:</p></div>
                </div>
                <div className='sb-container'>
                    {AtSquareUpData1.map((data, index) => (
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
export default AtSquareUpSection
