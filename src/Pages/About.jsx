import Cta from "../SharedComponents/Cta/Cta"
import OurStorySection from "../SharedComponents/OurStorySection/OurStorySection"
import Title from "../SharedComponents/Title/Title"
import HeaderSection from "../SharedComponents/HeaderSection/HeaderSection"

const About = () => {
  return (
    <>
      <HeaderSection
        title="About Us"
        description="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
        image={"assets/img/about/hero.png"}
      />
      <Title
        title="Our Story"
        MIDpaddingOurH2="mid-padding"
        MINpaddingOurH2="min-padding"
        paddingOurH2="padding-OurH2"
      />
      <OurStorySection/>
      <Cta />
    </>
  )
}

export default About
