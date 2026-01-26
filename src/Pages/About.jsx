import OurStorySection from "../SharedComponents/OurStorySection/OurStorySection"
import Title from "../SharedComponents/Title/Title"

import HeaderSection from "../SharedComponents/HeaderSection/HeaderSection"

const About = () => {
  return (
    <>
    <Title
      title="Our Story"
      MIDpaddingOurH2="mid-padding"
      MINpaddingOurH2="min-padding"
      paddingOurH2="padding-OurH2"
    />
    
      <OurStorySection/>
    
      <HeaderSection
        title="About Us"
        description="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
        image={"assets/img/about/hero.png"}
      />
    </>
  )
}

export default About
