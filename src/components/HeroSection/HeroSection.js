import React from "react";
import "./hero-section.css";


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        
        {/* Left Column */}
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </p>
          <button className="btn-primary">Reserve a Table</button>
        </div>

        {/* Right Column */}
        <div className="hero-image">
          <img src="./images/restauranfood.jpg" alt="Team working on project" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
