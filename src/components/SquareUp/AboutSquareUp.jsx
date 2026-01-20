import "./AboutSquareUp.css";

const AboutSquareUp = () => {
  return (
    <section className="kh-about-container">
      <div className="kh-about-content">
        <h2>About SquareUp</h2>
        <p>
          SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.
        </p>
      </div>

      <div className="kh-about-visual">
 
        <div className="kh-visual-box">
 
          <img
            src="assets/img/about/logo_bg.webp"
            alt="Background"
            className="kh-visual-bg"
          />

      <div className="kh-visual-pattern"></div>

        
          <img
            src="assets/img/about/SquareUp_logo.png"
            alt="Cube Icon"
            className="kh-cube-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSquareUp;
