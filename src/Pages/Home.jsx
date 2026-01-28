import { useEffect, useState } from "react";
import Cards from "../SharedComponents/Cards/Card"
import ContactSection from "../SharedComponents/ContactSection/ContactSection"
import HomeCards from "../SharedComponents/HomeCards/HomeCards";
import HomeCard2 from "../SharedComponents/HomeCard2/HomeCard2";

import HeaderSection from "../SharedComponents/HeaderSection/HeaderSection"
import Companise from "../components/Companise/Companise"
import Hero from "../components/Hero/Hero"
import FAQItem from "../components/faq/FAQItem"
import FAQList from "../components/faq/FAQList"
/* Main Home page component that serves as the entry point for the other sections */
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
      <Hero/>
      {<Companise/> }
      <HeaderSection
        title="Our Services"
        description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        image={"assets/img/home/our_services.png"}
      />
      {/* كروت الاولى */}
      <HomeCards cards={cards} />
      <HeaderSection
        title="Why Choose SquareUp?"
        description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
        image={"assets/img/home/why_choose_us.png"}
      />
      {/* كروت التانية */}
      <HomeCard2 cardchoose={cardchoose} />
      <HeaderSection
        title="What our Clients say About us"
        description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
        image={"assets/img/home/about_us.png"}
      />
      <HeaderSection
        title="Frequently Asked Questions"
        description="Still you have any questions? Contact our Team via hello@squareup.com"
        image={"assets/img/home/frequently.png"}
      />
      <FAQList/>
      {/* قسم ال cta */}
      <ContactSection
        image="assets/img/home/thank.png"
        logo=""
        text="Thank you for your Interest in SquareUp."
        paragraph="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
        button="Start Project"
      />
    </>
  )
}

export default Home
