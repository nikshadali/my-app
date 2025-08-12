import "./card.css";
import { MdOutlineDeliveryDining } from "react-icons/md";

const Card = ({ image, title, price, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="content">
        <div className="card-header">
          <span>{title}</span>
          <span className="price">${price}</span>
        </div>
        <p>{description}</p>
        <button className="card-btn">
          Order a delivery <MdOutlineDeliveryDining size={20} />
        </button>
      </div>
    </div>
  );
};

export default Card;