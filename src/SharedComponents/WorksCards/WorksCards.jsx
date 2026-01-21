import './WorksCards.css'


const WorksCards = ({ firstTitel, picther, secondTitel, link, icon, paragraph }) => {
    return (
        <>
            <div className='rb-cardwork'>
                <div ><h2 className='rb-firstTitel'>{firstTitel}</h2></div>
                <img src={picther} className='rb_picther'></img>
                <div className='rb-sectitel'>
                    <div className='rb-te'>
                        <h2 className='rb_text'>{secondTitel}</h2>
                        <a href=''><p className='rb-link-work'>{link}</p></a>
                    </div>
                    <a href='' target="_blank" rel="noreferrer" className="rb-icon-link">
                        <img src={icon} className='rb-icon-work'></img></a>
                    
                </div>
                <p className='rb-p-work'>{paragraph}</p>
            </div>

        </>
    )
}

export default WorksCards
