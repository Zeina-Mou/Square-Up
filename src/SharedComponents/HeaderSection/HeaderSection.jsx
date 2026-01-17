import './HeaderSection.css';

const HeaderSection = ({ title, description, image }) => {
    return (
        <section className="hero-container">
            <div 
                className="hero-bg-image" 
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            <div className="hero-pattern"></div>
        
            <div className="hero-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </section>
    );
};

export default HeaderSection;