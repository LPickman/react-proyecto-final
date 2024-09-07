import React from "react";

export const Description = (props) => {
  return (
    <div className="cardDescription">
      <h3 className="title">{props.nombre}</h3>

      <div className="description">
        {/* <span className="descriptionTitle">Descripción:</span> */}
        <p className="parrafo">{props.descripcion}</p>
      </div>
      <span className="cant">Stock: {props.stock}</span>
      <span className="precio">${props.precio}</span>
    </div>
  );
};
