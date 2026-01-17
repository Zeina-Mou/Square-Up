import './Card.css'
import { useNavigate } from 'react-router-dom'
export default function Cards({image,titel,description,button,type}) {
const navigate = useNavigate();
    return (

        <div className= {`rb-card ${type ? "rb-type3":'rb-type2'}`}>
            <div className='rb-titel'><img src={image}></img>
            <h1>{titel}</h1></div>
            <p>{description}</p>
            {button &&<button className='rb-leran' onClick={()=> navigate('/Work')}>{button}</button>}
        </div>

    )
}