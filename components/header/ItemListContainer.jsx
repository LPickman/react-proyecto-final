import React from "react";
import { Link } from "react-router-dom";

export const ItemListContainer = (props) => {
  return (
    <ul>
      <li>
        <Link to="/category/ropa">{props.itemUno}</Link>
      </li>

      <li>
        <Link to="/category/calzado">{props.itemDos}</Link>
      </li>

      <li>
        <Link to="/category/accesorios">{props.itemTres}</Link>
      </li>
    </ul>
  );
};
