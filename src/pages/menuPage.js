// src/pages/MenuPage.jsx
import React from "react";
import Card from "../components/Card/Card";
import { dishes } from "../data/dishes";

const MenuPage = () => {
  return (
    <section className="menu-page">
        <div className="container">
      <h1>Our Menu</h1>
      <div className="menu-grid">
        {dishes.map((dish) => (
          <Card
           key={dish.id}
            id={dish.id}
            image={dish.image}
            title={dish.title}
            price={dish.price}
            description={dish.description}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default MenuPage;
