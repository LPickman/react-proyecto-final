import React from "react";
import { Brand } from "./Brand";
import { ItemListContainer } from "./ItemListContainer";
import { CartWidget } from "./CartWidget";

import ContainerCart from "./ContainerCart";

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
      <CartWidget />

      <ContainerCart />
    </header>
  );
};

export default NavBar;
