
import Card from "../Card/Card";
import "./specials.css";

const specialsData = [
  {
    image: 'images/greek-salad.jpg',
    title: "Greek Salad",
    price: 12.00,
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic croutons."
  },
  {
    image: '/images/Bruchetta.jpg',
    title: "Bruchetta",
    price: 8.50,
    description:
      "Our Bruschetta is made from grilled bread smeared with garlic and seasoned with salt and olive oil."
  },
  {
    image: 'images/lemon-dessert.jpg',
    title: "Lemon Dessert",
    price: 6.50,
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is authentic."
  }
];




const Specials = ({ specials = [] }) => {
  return (
    <section className="specials">
      <div className="container specials-container">
        <div className="specials-title">
          <h2>This Week's Specials</h2>
          <button className="specials-btn">Online Menu</button>
        </div>

        <ul className="card-container">
          {specialsData.map((item, index) => (
            <li key={index}>
              <Card {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Specials;