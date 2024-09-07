import { useContext } from "react";
import { ListCartContext } from "../components item/ProviderContextCart";
import { ControllerShowCart } from "./ContextCart";

export const CartWidget = () => {
  const { setCartShow, cartShow } = useContext(ControllerShowCart);
  const { listCart } = useContext(ListCartContext);

  const showCart = () => {
    setCartShow(cartShow === "none" ? "flex" : "none");
  };

  return (
    <div className="containerLength" onClick={showCart}>
      🛒
      <span className="cantidadCart">{listCart.length}</span>
    </div>
  );
};
