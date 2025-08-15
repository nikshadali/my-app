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
           Little Lemon blends fresh flavors, warm hospitality, and Mediterranean charm in the heart of Chicago. Our seasonal menu, inspired by time-honored recipes, offers dishes that are both comforting and unforgettable. From casual lunches to special celebrations, we create an atmosphere as vibrant and inviting as the city we call home.


          </p>
          <button aria-label="On Click" className="btn-primary">Reserve a Table</button>
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
