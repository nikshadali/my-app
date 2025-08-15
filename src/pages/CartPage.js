import { MdDeleteForever } from "react-icons/md";
import { useCart } from "../contexts/cartContext";


const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return(
        <div style={{ padding: "20px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "50vh" }}>
           <h2 style={{ textAlign: "center" }}>Your cart is empty 🛒</h2>;
        </div>
    )
  }

  return (
    <div className="container" style={{ padding: "20px", minHeight: "80vh" }}>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
            borderBottom: "1px solid #ddd",
            paddingBottom: "10px",
          }}
        >
          <img src={item.image} alt={item.title} width={60} height={60} />
          <div style={{ flex: 1, marginLeft: "10px" }}>
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value) || 1)
              }
              style={{ width: "60px" }}
            />
          </div>
          <MdDeleteForever
          size={30}
            style={{ marginLeft: "10px",  color: "red", cursor: "pointer" }}
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </MdDeleteForever>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default CartPage;
