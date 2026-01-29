import ContactSection from "../SharedComponents/ContactSection/ContactSection"
import AtSquareUpSection from "../SharedComponents/AtSquareUpSection/AtSquareUpSection"


import HeaderSection from "../SharedComponents/HeaderSection/HeaderSection"
import Title from "../SharedComponents/Title/Title"
import Cta from "../SharedComponents/Cta/Cta"

const Process = () => {
  return (
    <>
      <HeaderSection
        title="Process of Starting the Project"
        description="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
        image={"assets/img/prosess/hero.png"}
      />
      <Title
        title="At SquareUp"
        desc1="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
        desc2="Here's an overview of our typical process:"
      />
      <AtSquareUpSection/>
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

export default Process
