import React from "react";
import { Brand } from "./Brand";
import { ItemListContainer } from "./ItemListContainer";
import { CartWidget } from "./CartWidget";

const NavBar = () => {
  return (
    <header>
      <div className="containerBrand">
        <Brand />
      </div>
      <nav className="containerItemList">
        <ItemListContainer
          itemUno="Ropa"
          itemDos="Calzado"
          itemTres="Accesorios"
        />
      </nav>

      <div className="containerCart">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
