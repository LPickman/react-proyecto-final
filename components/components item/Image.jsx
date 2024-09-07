import React from "react";

export const Image = (props) => {
  return (
    <div className="cardImg">
      <img src={props.imagen} alt="" />
    </div>
  );
};
