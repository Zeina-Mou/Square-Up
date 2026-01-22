

import './ClientsOpinion.css'


function ClientCard({ title, desc, profile, name1, text }) {
    return (
        <>
            <div className='sb-ClientCard'>
                <div>
                <h3>{title}</h3>
                <p className='sb-description'>{desc}</p>
                </div>
                <div className='sb-container-Profile'>
                    <div className='sb-profile'>
                        <img src={profile}></img>
                        <div>
                            <p className='sb-client-name'>{name1}</p>
                            <p className='sb-client-text'>{text}</p>
                        </div>
                    </div>
                    <button className='sb-button'>open profile</button>
                </div>
            </div>
        </>
    )
}

export default ClientCard

