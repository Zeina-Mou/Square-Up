import HeaderSection from "../SharedComponents/HeaderSection/HeaderSection"
import FAQList from "../components/faq/FAQList"
import ContactForm from "../Components/Contact/Contact"

const Contact = () => {
  return (
    <>
      <HeaderSection
        title="Contact Us"
        description="Get in touch with us today and let us help you with any questions or inquiries you may have."
        image={"assets/img/contact/hero.png"}
      />
      <ContactForm />
      <FAQList/>
    </>
  )
}

export default Contact
