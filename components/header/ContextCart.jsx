import { createContext, useState } from "react";

export const ControllerShowCart = createContext();

export const ContextCart = ({ children }) => {
  const [cartShow, setCartShow] = useState("none");

  return (
    <ControllerShowCart.Provider value={{ cartShow, setCartShow }}>
      {children}
    </ControllerShowCart.Provider>
  );
};
