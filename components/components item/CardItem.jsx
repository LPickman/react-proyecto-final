import React from "react";
import "../styles/cardItem.css";
import { Image } from "./Image";
import { Description } from "./Description";
import ButtonDetails from "./ButtonDetails";
import { ButtonAddCart } from "./ButtonAddCart";
import { Link } from "react-router-dom";

export const CardItem = (props) => {
  return (
    <div className="cardItem">
      <Image imagen={props.imagen} />
      <Description
        nombre={props.nombre}
        //descripcion={props.descripcion}
        stock={props.stock}
        precio={props.precio}
      />
      <div className="buttons">
        <Link to={`/item/${props.id}`}>
          <ButtonDetails texto="Ver Detalles" />
        </Link>
        <ButtonAddCart id={props.id} texto="🛒" />
      </div>
    </div>
  );
};
