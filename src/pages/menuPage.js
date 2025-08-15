// src/pages/MenuPage.jsx
import React from "react";
import Card from "../components/Card/Card";
import { dishes } from "../data/dishes";
import Search from "../components/Search/Search";

const MenuPage = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
   if (query === "") {
      setSearchQuery("");
    }
  };

  const filteredDishes = dishes.filter((dish) =>
    dish.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="menu-page">
      <div className="container">
        <div className="menu-header">
          <h1>Our Menu</h1>
          <Search onSearch={handleSearch} />
        </div>

        <div className="menu-grid">
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => (
              <Card
                key={dish.id}
                id={dish.id}
                image={dish.image}
                title={dish.title}
                price={dish.price}
                description={dish.description}
              />
            ))
          ) : (
            <p className="no-results">No items found for "{searchQuery}"</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
