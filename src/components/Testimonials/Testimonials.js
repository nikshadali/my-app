import React from "react";
import './testimonials.css'
import TestimonialCard from "./TestimonialsCard";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Blogger",
    image: 'images/testimonial-02.jpg',
    rating: 5,
    text: "Little Lemon is my absolute favorite! The flavors are fresh and unique, and the service is top-notch. Highly recommended!"
  },
  {
    id: 2,
    name: "Michael Smith",
    role: "Local Guide",
    image: 'images/testimonial-01.jpg',
    rating: 4.5,
    text: "I loved every bite! The Greek salad was perfectly seasoned, and the atmosphere made me feel right at home."
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Chef",
    image: 'images/testimonial-03.jpg',
    rating: 5,
    text: "As a chef, I appreciate the attention to detail. The dishes are not only delicious but also beautifully presented."
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Travel Blogger",
    image: 'images/testimonial-04.jpg',
    rating: 4,
    text: "A must-visit in Chicago! Cozy vibes, friendly staff, and food that keeps me coming back again and again."
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
        <div className="container">
      <div className="testimonials-header">
        <h2>What Our Customers Say</h2>
      </div>
      <div className="testimonials-grid">
        {testimonialsData.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
