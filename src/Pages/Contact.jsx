import Cta from "../SharedComponents/Cta/Cta"
import ContactForm from "../Components/Contact/Contact"
import ContactSection from "../Components/ContactSection/ContactSection"
import ConatcConIcon from "../Components/ConatcConIcon/ConatcConIcon"
import ContactIconSection from "../Components/ContactIconSection/ContactIconSection"
import ContactConnectionEnding from "../Components/ContactConnectionEnding/ContactConnectionEnding"
import ContactDays from "../Components/ContactDays/ContactDays"
import ContactSocialIcons from "../Components/ContactSocialIcons/ContactSocialIcons"
import Divider from "../Components/Divider/Divider"
import HeaderSection from "../SharedComponents/HeaderSection/HeaderSection"
import FAQList from "../components/faq/FAQList"
const Contact = () => {
  return (
    < >
      <HeaderSection
        title="Contact Us"
        description="Get in touch with us today and let us help you with any questions or inquiries you may have."
        image={"assets/img/contact/hero.png"}
      />
      <ContactSection>
        <ConatcConIcon>
          <ContactIconSection
            path="mailto:hello@squareup.com"
            image={"assets/icons/mail.svg"}
            content="hello@squareup.com"
          />
          <ContactIconSection
            path="tel:+91 91813 23 2309"
            image={"assets/icons/call.svg"}
            content="+91 91813 23 2309"
          />
          <ContactIconSection
            path="https://www.google.com/maps?q=30.0444,31.2357"
            image={"assets/icons/location.svg"}
            content="Get Location"
          />
        </ConatcConIcon>
        <ContactForm />
        <ContactConnectionEnding>
          <ContactDays description="Operating Days" days="Monday to Friday" />
          <Divider />
          <ContactSocialIcons
            description="Stay Connected"
            imageface={"assets/icons/fcebook.svg"}
            alternativef="facebook icon"
            imagex={"assets/icons/twitter.svg"}
            alternativex="x icon"
            imagein={"assets/icons/linkedIn.svg"}
            alternativefin="linkedin icon"
          />
        </ContactConnectionEnding>
      </ContactSection>
      <HeaderSection
        title="Frequently Asked Questions"
        description="Still you have any questions? Contact our Team via hello@squareup.com"
        image={"assets/img/home/frequently.png"}
      />
      <FAQList/>
      <Cta />
    </>
  )
}

export default Contact