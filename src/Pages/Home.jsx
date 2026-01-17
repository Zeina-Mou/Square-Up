import { useEffect, useState } from "react";
import Cards from "../SharedComponents/Cards/Card"
import ContactSection from "../SharedComponents/ContactSection/ContactSection"

const Home = () => {
  const [cards,setCards]= useState([]);
  const [cardchoose,setCard]= useState([]);

  useEffect(()=>{
    fetch('assets/data/card1.json')
    .then(res => res.json())
    .then(data=> setCards(data))
    .catch(err =>
      console.error("error loading card1",err));

  },[]);
  
  
  useEffect(()=>{
    fetch('assets/data/card2.json')
    .then(res => res.json())
    .then(data=> setCard(data))
    .catch(err =>
      console.error("error loading card2",err));
  },[]);
  return (
    <>
      <div className='rb-cards'>
        {cards.map((card, index) => {
          return (
            <Cards key={index} image={card.image} titel={card.titel} description={card.description} button={card.button} type={card.type} />
          )
        })}
      </div>
      <div className='rb-cards'>
        {cardchoose.map((cardv, index) => {
          return (
            <Cards key={index}
              image={cardv.image} titel={cardv.titel} description={cardv.description} type={cardv.type} />
          )
        })}
      </div>
      <ContactSection
        image="assets/img/home/squares.png"
        photo="assets/img/home/thank.png"
        logo=""
        text="Thank you for your Interest in SquareUp."
        paragraph="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
        button="Start Project"
      />
    </>
  )
}

export default Home
