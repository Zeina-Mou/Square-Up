
import './AtSquareUpSection.css'

function CardContainer({ number, title, desc,titleColor }) {
    return (
        <>
            <div className='sb-Card'>
                <div>
                    <div className='sb-TextContainer'>
                        <h2>{number}</h2>
                        <div className='sb-title'>
                            <h4 className={`${titleColor}`}>{title}</h4>
                        </div>
                    </div>
                    <p className='sb-desc'>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default CardContainer


