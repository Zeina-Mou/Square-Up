
import './AtSquareUpSection.css'

function CardContainer({ number, title, desc }) {
    return (
        <>
            <div className='sb-Card'>
                <div className='sb-content-card'>
                    <div className='sb-TextContainer'>
                        <h2>{number}</h2>
                        <div className='sb-title'>
                            <h4>{title}</h4>
                        </div>
                    </div>
                    <p className='sb-desc'>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default CardContainer


