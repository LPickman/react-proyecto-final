import React, { useEffect, useState } from "react";
import { dataBase } from "../mock/mock";
import { fetch } from "../mock/fetch";
import { useParams } from "react-router-dom";
import { Image } from "./Image";
import { Description } from "./Description";
import ButtonDetails from "./ButtonDetails";
import ClipLoader from "react-spinners/ClipLoader";
import "../styles/detailsItems.css";
import { ButtonAddCart } from "./ButtonAddCart";

export const ItemDetails = () => {
  const [datos, setDatos] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    setDatos([]);

    // Convertimos idItem a número
    const idNumber = Number(idItem);

    // Filtramos con idNumber
    const dataBaseFilter = dataBase.filter((item) => item.id === idNumber);

    fetch(dataBaseFilter, 500)
      .then((resp) => setDatos(resp))
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <>
      {datos.length === 0 ? (
        <ClipLoader color="#000000" />
      ) : (
        datos.map((items) => (
          <div key={items.id} className="detailsItem">
            <div className="containerLeft">
              <Image imagen={items.imagen} />
            </div>

            <div className="containerRigth">
              <Description
                nombre={items.nombre}
                descripcion={items.descripcion}
                stock={items.stock}
                precio={items.precio}
              />

              <div className="buttons">
                {/* <ButtonDetails texto="Agregar al carrito" /> */}
                <ButtonAddCart id={items.id} texto="Añadir al Carrito" />
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};
