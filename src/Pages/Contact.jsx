import HeaderSection from "../SharedComponents/HeaderSection/HeaderSection"
import FAQList from "../components/faq/FAQList"
import ContactForm from "../Components/Contact/Contact"

const Contact = () => {
  return (
    <>
      <HeaderSection
        title="About Us"
        description="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
        image={"assets/img/contact/hero.png"}
      />
      <ContactForm />
      <FAQList/>
    </>
  )
}

export default Contact
