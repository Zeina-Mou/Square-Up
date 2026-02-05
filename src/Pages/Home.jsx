import { useEffect, useState } from "react";
import Cards from "../SharedComponents/Cards/Card";
import ContactSection from "../SharedComponents/ContactSection/ContactSection";
import HomeCards from "../SharedComponents/HomeCards/HomeCards";
import HomeCard2 from "../SharedComponents/HomeCard2/HomeCard2";
import ClientsOpinion from "../SharedComponents/ClientsOpinion/ClientsOpinion";
import HeaderSection from "../SharedComponents/HeaderSection/HeaderSection";
import Companies from "../components/Companise/Companise";
import FAQList from "../components/faq/FAQList";
import Hero from "../components/Hero/Hero";
import { API_BASE_URL } from '../utils/config';
import zapier from "../../public/assets/img/home/companies/zapier.svg"
import Zoom from "../../public/assets/img/home/companies/zoom.svg"
import Adobe from "../../public/assets/img/home/companies/adobe.svg"
import amazon from "../../public/assets/img/home/companies/amazon.svg"
import Slack from "../../public/assets/img/home/companies/slack.svg"
import Spotify from "../../public/assets/img/home/companies/spotify.svg"

const Home = () => {
  // استدعاء الداتا 
  const [cards, setCards] = useState([]);
  const [cardchoose, setCard] = useState([]);

  useEffect(() => {
      fetch(`${API_BASE_URL}/ourservices`) 
          .then((res) => res.json())
          .then((data) => setCards(data))
          .catch((err) => console.error("Error fetching FAQ:", err));
  }, []);

  useEffect(() => {
      fetch(`${API_BASE_URL}/aboutus`) 
          .then((res) => res.json())
          .then((data) => setCard(data))
          .catch((err) => console.error("Error fetching FAQ:", err));
  }, []);

  const companies = [
    { name: "Zapier", logo: zapier },
    { name: "Spotify", logo: Spotify },
    { name: "Zoom", logo: Zoom },
    { name: "Slack", logo: Slack },
    { name: "amazon", logo: amazon },
    { name: "Adobe", logo: Adobe },
  ];

  return (
    <>
      <Hero/>
      <ul className="companyName">
        {companies.map((company, index) => (
          <Companies key={index} name={company.name} logo={company.logo} />
        ))}
      </ul>
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
      <ClientsOpinion/>
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
  );
};

export default Home;
