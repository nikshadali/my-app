import React from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


const TestimonialCard = ({ name, role, image, text, rating }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => {
      if (index < Math.floor(rating)) {
        return <FaStar key={index} className="star filled" />;
      } else if (index < rating) {
        return <FaStarHalfAlt key={index} className="star filled" />;
      } else {
        return <FaRegStar key={index} className="star empty" />;
      }
    });
  };

  return (
    <div className="testimonial-card">
      <FaQuoteLeft className="quote-icon" />
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-rating">{renderStars(rating)}</div>
      <div className="testimonial-user">
        <img src={image} alt={`${name}`} className="testimonial-avatar" />
        <div>
          <h4>{name}</h4>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;