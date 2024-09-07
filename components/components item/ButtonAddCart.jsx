import { useContext } from "react";
import { ListCartContext } from "./ProviderContextCart";

export const ButtonAddCart = ({ id,texto }) => {
  let { addProduct } = useContext(ListCartContext);

  const handlerClick = () => {
    addProduct(id);
  };

  return (
    <button id="AddCart" onClick={handlerClick}>
      {texto}
    </button>
  );
};
