import Cards from "../Cards/Card";
const HomeCards = ({ cards }) => {
    
    return (
        <>
            <div className='rb-cards'>
                {cards.map((card, index) => {
                    return (
                        <Cards key={index} image={card.image} titel={card.titel} description={card.description} button={card.button} type={card.type} />
                    )
                })}
            </div>

        </>
    )
}

export default HomeCards
