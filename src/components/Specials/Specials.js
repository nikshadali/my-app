
import Card from "../Card/Card";
import "./specials.css";
import { dishes } from "../../data/dishes";





const Specials = ({ specials = [] }) => {
  return (
    <section className="specials">
      <div className="container specials-container">
        <div className="specials-title">
          <h2>This Week's Specials</h2>
          <button aria-label="On Click" className="specials-btn">Online Menu</button>
        </div>

       <div className="menu-grid">
        {dishes.slice(0,4).map((dish) => (
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

export default Specials;