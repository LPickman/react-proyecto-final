import { useContext } from "react";
import { ListCartContext } from "../components item/ProviderContextCart";

const ItemCart = ({ id, title, image, price, quantity }) => {
  const { removeFromCart } = useContext(ListCartContext);

  return (
    <div className="itemCart">
      <div className="img">
        <img src={image}></img>
      </div>

      <div className="description-cantidad">
        <span className="title">{title}</span>
        <span className="quantity">{`Cantidad: ${quantity}`}</span>
      </div>

      <div className="price">
        <span className="subtotal">Subtotal</span>
        <span className="price">${price * quantity}</span>
      </div>

      <button className="delete" onClick={() => removeFromCart(id)}>
        <h2>✖</h2>
      </button>
    </div>
  );
};

export default ItemCart;
