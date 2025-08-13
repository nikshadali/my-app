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
            Little Lemon invites you to experience the perfect blend of fresh flavors, warm hospitality, and a touch of Mediterranean charm right here in the heart of Chicago. Our carefully crafted menu celebrates seasonal ingredients and time-honored recipes, bringing you dishes that are both comforting and unforgettable. Whether you’re joining us for a casual lunch, a romantic dinner, or a family celebration, Little Lemon promises an atmosphere as vibrant and inviting as the city we call home.


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
