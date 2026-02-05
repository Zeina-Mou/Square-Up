import './Card.css'
import { useNavigate } from 'react-router-dom'
export default function Cards({image,titel,description,button,type}) {
const navigate = useNavigate();
    return (
// اختبار شرط ل تنسيق الكروت 
        <div className= {` rb-card  ${type ? "rb-type3":'rb-type2'}`}>
            <div className='rb-titel'><div className="ze-img-container"><img src={image}></img></div>
            <h1>{titel}</h1></div>
            <p>{description}</p>
            {button &&<button className='rb-leran' onClick={()=> navigate('/Work')}>{button}</button>}
        </div>

    )
}