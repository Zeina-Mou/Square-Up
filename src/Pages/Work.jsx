import ContactSection from "../SharedComponents/ContactSection/ContactSection"
import { useEffect, useState } from "react";
import Worklist from "../SharedComponents/Worklist/Worklist";
import HeaderSection from "../SharedComponents/HeaderSection/HeaderSection"
import { API_BASE_URL } from '../utils/config';
import Title from "../SharedComponents/Title/Title"

const Work = () => {
  const [works, setwork] = useState([]);
  useEffect(() => {
      fetch(`${API_BASE_URL}/projects`) 
          .then((res) => res.json())
          .then((data) => setwork(data))
          .catch((err) => console.error("Error fetching FAQ:", err));
  }, []);
  return (
    <>
      <HeaderSection
        title="Our Works"
        description="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
        image={"assets/img/works/hero.png"}
      /> 
      <Title
        title="At SquareUp"
        desc1="We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
        desc2="Here are ten examples of our notable works:"
      />
      <Worklist works={works} />
      <ContactSection
        image="assets/img/home/thank.png"
        logo=""
        text="Let us Bring your Ideas to Life in the Digital World."
        paragraph="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
        button="Start Project"
      />

    </>
  )
}
export default Work
