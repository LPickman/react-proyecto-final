import ItemCart from "./ItemCart";
import { useContext } from "react";
import { ListCartContext } from "../components item/ProviderContextCart";
import { ControllerShowCart } from "./ContextCart"; // Importar el contexto que controla la visibilidad

const ContainerCart = () => {
  const { cartShow, setCartShow } = useContext(ControllerShowCart); // Accediendo al contexto de visibilidad
  const { listCart, clearCart } = useContext(ListCartContext); // Accediendo al contexto del carrito

  const style = {
    display: cartShow,
  };

  const closeCart = () => {
    setCartShow(cartShow === "none" ? "flex" : "none");
  };

  return (
    <div className="cart" style={style}>
      <div className="cerrar">
        <button className="close" onClick={closeCart}>
          <h2>✖</h2>
        </button>
      </div>

      <div className="containerItemsCart">
        {listCart.length === 0 ? (
          <span className="emptyCart">Tu carrito está vacío.</span>
        ) : (
          listCart.map((producto) => (
            <ItemCart
              key={producto.id}
              id={producto.id}
              title={producto.nombre}
              image={producto.imagen}
              quantity={producto.quantity}
              price={producto.precio}
            />
          ))
        )}
      </div>

      <div className="TerminarCompra">
        <button className="terminar">Terminar compra</button>

        <button className="clear" onClick={clearCart}>
          {/* Si usas una imagen, asegúrate de importar 'clear' correctamente */}
          <h2>🗑</h2>
        </button>
      </div>
    </div>
  );
};

export default ContainerCart;
