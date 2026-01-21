import "./AboutSquareUp.css";

const AboutSquareUp = () => {
  return (
    <section className="ksh-about-container">
      <div className="ksh-about-content">
        <h2>About SquareUp</h2>
        <p>
          SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.
        </p>
      </div>

      <div className="ksh-about-visual">
 
        <div className="ksh-visual-box">
 
          <img
            src="assets/img/about/logo_bg.webp"
            alt="Background"
            className="ksh-visual-bg"
          />

      <div className="ksh-visual-pattern"></div>

        
          <img
            src="assets/img/about/SquareUp_logo.png"
            alt="Cube Icon"
            className="ksh-cube-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSquareUp;
