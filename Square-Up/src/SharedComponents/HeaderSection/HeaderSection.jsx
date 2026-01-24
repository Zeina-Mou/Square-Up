import './HeaderSection.css';

const HeaderSection = ({ title, description, image }) => {
    return (
        <section className="ze-hero-container main-margin">
            <div 
                className="ze-hero-bg-image" 
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            <div className="ze-hero-pattern"></div>
        
            <div className="ze-hero-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </section>
    );
};

export default HeaderSection;