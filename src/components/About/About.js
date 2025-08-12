import React from "react";
import "./about.css";


const About = () => {
  return (
    <section className="about">
      <div className="container about-content">
        
        {/* Left Column */}
        <div className="about-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </p>
          {/* <button className="btn-primary">Reserve a Table</button> */}
        </div>

        {/* Right Column */}
        <div className="about-image">
          <img className="about-image-01" src="./images/restaurant.jpg" alt="Team working on project" />
          <img className="about-image-02" src="./images/restaurant chef B.jpg" alt="Team working on project" />
        </div>

      </div>
    </section>
  );
};

export default About;
