import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero(){
    return (
        <header>
            <section className="hero">
                <h1 className="hero-title"> A Digital Product Studio<br></br> that will Work </h1>
                <div className="hero-categories">For 
                    <span className="category">Startsup</span>,
                    <span className="category">Enterprise Leaders</span>,
                    <span className="category">Media & publishers</span>and
                    <span className="category">Social Good</span>

                </div>
                <div className="hero-buttons">
                    <button className="works-btn">
                        <Link to="/work">Our Works </Link>
                    </button>
                    <button className="contact-btn">
                        <Link to="/contact">Contact Us</Link>
                        </button>
                </div>
            </section>

            <section className="trusted-companies">
                <div className="trusted-title-box">
                    <p className="trusted-title">Trusted By 250+ Companies</p>
                </div>

                <div className="trusted-logos">
                    <img src="public/assets/img/home/companies/zapier.svg" alt="zapier logo"></img>
                    <img src="public/assets/img/home/companies/spotify.svg" alt="spotify logo"></img>
                    <img src="public/assets/img/home/companies/zoom.svg" alt="zoom logo"></img>
                    <img src="public/assets/img/home/companies/slack.svg" alt="slack logo"></img>
                    <img src="public/assets/img/home/companies/amazon.svg" alt="amazon logo"></img>
                    <img src="public/assets/img/home/companies/adobe.svg" alt="adobe logo"></img>
                </div>
            </section>
        </header>
        
    )   
}
export default Hero