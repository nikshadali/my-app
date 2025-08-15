import { useCart } from "../../contexts/cartContext";
import "./card.css";
import { MdOutlineDeliveryDining } from "react-icons/md";

const Card = ({id, image, title, price, description }) => {
  const {addToCart}  = useCart()
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="content">
        <div className="card-header">
          <span>{title}</span>
          <span className="price">${price}</span>
        </div>
        <p>{description}</p>
        <button 
        aria-label="On Click" 
        className="card-btn"
        onClick={() => addToCart({ id, image, title, price })}
        >
          Order a delivery <MdOutlineDeliveryDining size={20} />
        </button>
      </div>
    </div>
  );
};

export default Card;