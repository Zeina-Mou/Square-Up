import { useEffect, useState } from "react";
import Cards from "../SharedComponents/Cards/Card"
import ContactSection from "../SharedComponents/ContactSection/ContactSection"
import HomeCards from "../SharedComponents/HomeCards/HomeCards";
import HomeCard2 from "../SharedComponents/HomeCard2/HomeCard2";

const Home = () => {
  // استدعاء الداتا 
  const [cards, setCards] = useState([]);
  const [cardchoose, setCard] = useState([]);

  useEffect(() => {
    fetch('assets/data/card1.json')
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err =>
        console.error("error loading card1", err));
  }, []);

  useEffect(() => {
    fetch('assets/data/card2.json')
      .then(res => res.json())
      .then(data => setCard(data))
      .catch(err =>
        console.error("error loading card2", err));
  }, []);

  return (
    <>
      {/* كروت الاولى */}
      <HomeCards cards={cards} />
      {/* كروت التانية */}
      <HomeCard2 cardchoose={cardchoose} />
      {/* قسم ال cta */}
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
