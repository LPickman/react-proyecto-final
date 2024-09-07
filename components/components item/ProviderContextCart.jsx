import { useState } from "react";
import { createContext } from "react";
import { dataBase } from "../mock/mock";
export const ListCartContext = createContext(null);

export const ProviderContextCart = ({ children }) => {
  const [listCart, setListCart] = useState([]);

  const addProduct = (id) => {
    //producto a añadir al carrito
    const producAdd = dataBase.find((product) => product.id === id);

    // productos se mantendran en el carrito
    const productsToMaintain = listCart.filter((product) => product.id !== id);

    let add = true;
    for (let product of listCart) {
      if (product.id === id) {
        let quantity = product.quantity;

        if (quantity < producAdd.stock) {
          const newQuantity = { ...product, quantity: quantity + 1 };
          setListCart([...productsToMaintain, newQuantity]);
        }

        add = false;
        break;
      }
    }

    add && setListCart([...productsToMaintain, { ...producAdd, quantity: 1 }]);
  };

  console.log(listCart);

  const clearCart = () => {
    setListCart([]);
  };

  const removeFromCart = (id) => {
    const updateList = listCart.filter((product) => product.id !== id);
    setListCart(updateList);
  };

  return (
    <ListCartContext.Provider
      value={{ removeFromCart, listCart, addProduct, clearCart }}
    >
      {children}
    </ListCartContext.Provider>
  );
};
