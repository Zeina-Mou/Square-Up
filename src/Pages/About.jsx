import Cta from "../SharedComponents/Cta/Cta"
import HeaderSection from "../SharedComponents/HeaderSection/HeaderSection"

const About = () => {
  return (
    <>
      <HeaderSection
        title="About Us"
        description="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
        image={"assets/img/about/hero.png"}
      />
        <Cta />
    </>
  )
}

export default About
