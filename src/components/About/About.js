import React from "react";
import "./about.css";


const About = ({imgUrl}) => {
  console.log(imgUrl);
 
  return (
    <section className="about">
      <div className="container about-content">
        
        {/* Left Column */}
        <div className="about-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            At Little Lemon, we believe great food starts with fresh, simple ingredients and a passion for flavor. Inspired by Mediterranean traditions, our Chicago kitchen serves up vibrant dishes that bring people together. Every plate tells a story of quality, care, and the joy of sharing a meal.
          </p>
          {/* <button className="btn-primary">Reserve a Table</button> */}
        </div>

        {/* Right Column */}
        <div className="about-image">
            <img className="about-image-01" src={imgUrl} alt="Team working on project" />
          <img className="about-image-02" src="./images/restaurant chef B.jpg" alt="Team working on project" />
        </div>

      </div>
    </section>
  );
};

export default About;
