import React from "react";

export const ItemListContainer = (props) => {
  return (
    <ul>
      <li>{props.itemUno}</li>
      <li>{props.itemDos}</li>
      <li>{props.itemTres}</li>
    </ul>
  );
};
