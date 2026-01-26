import AtSquareUpSection from "../SharedComponents/AtSquareUpSection/AtSquareUpSection"
import Title from "../SharedComponents/Title/Title"


import HeaderSection from "../SharedComponents/HeaderSection/HeaderSection"

const Process = () => {
  return (
    <>
    <Title
      title="At SquareUp"
      desc1="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
      desc2="Here's an overview of our typical process:"
    />
    <AtSquareUpSection/>
      <HeaderSection
        title="Process of Starting the Project"
        description="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
        image={"assets/img/prosess/hero.png"}
      />
    </>
  )
}

export default Process
