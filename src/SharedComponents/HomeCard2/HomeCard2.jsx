import Cards from "../Cards/Card"

const HomeCard2 = ({ cardchoose }) => {
    return (
        <div>
            <div className='rb-cards'>
                {cardchoose.map((cardv, index) => {
                    return (
                        <Cards key={index}
                            image={cardv.image} titel={cardv.titel} description={cardv.description} type={cardv.type} />
                    )
                })}
            </div>
        </div>
    )
}

export default HomeCard2
