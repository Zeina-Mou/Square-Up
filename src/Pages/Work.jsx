import ContactSection from "../SharedComponents/ContactSection/ContactSection"
import { useEffect, useState } from "react";
import Worklist from "../SharedComponents/Worklist/Worklist";
import HeaderSection from "../SharedComponents/HeaderSection/HeaderSection"

const Work = () => {
  const [works, setwork] = useState([]);
  useEffect(() => {
    fetch('assets/data/works.json')
      .then(res => res.json())
      .then(data => setwork(data))
      .catch(err =>
        console.error("error loading work", err));
  }, []);
  return (
    <>
      <HeaderSection
        title="Our Works"
        description="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
        image={"assets/img/works/hero.png"}
      />    
      <Worklist works={works} />
      <ContactSection
        image="assets/img/home/squares.png"
        photo="assets/img/home/thank.png"
        logo=""
        text="Let us Bring your Ideas to Life in the Digital World."
        paragraph="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
        button="Start Project"
      />

    </>
  )
}
export default Work
