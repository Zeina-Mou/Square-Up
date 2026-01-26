import ContactSection from "../SharedComponents/ContactSection/ContactSection"
import HeaderSection from "../SharedComponents/HeaderSection/HeaderSection"

const Process = () => {
  return (
    <>
    <HeaderSection
        title="Process of Starting the Project"
        description="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
        image={"assets/img/prosess/hero.png"}
      />
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
