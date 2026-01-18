import HeaderSection from "../SharedComponents/HeaderSection/HeaderSection"
import FAQItem from "../components/faq/FAQItem"
import FAQList from "../components/faq/FAQList"
import Hero from "./HeroComponent/Hero"
/* Main Home page component that serves as the entry point for the other sections */
const Home = () => {
  return (
    <>
      <Hero/>
      <HeaderSection
        title="Our Services"
        description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        image={"assets/img/home/our_services.png"}
      />
      <HeaderSection
        title="Why Choose SquareUp?"
        description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
        image={"assets/img/home/why_choose_us.png"}
      />
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
    </>
  )
}

export default Home
