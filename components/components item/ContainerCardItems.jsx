import React, { useEffect, useState } from "react";
import { CardItem } from "./CardItem";
import { fetch } from "../mock/fetch";
import { dataBase } from "../mock/mock";
import "../styles/containerCardItems.css";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export const ContainerCardItems = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory === undefined) {
      fetch(dataBase, 200)
        .then((respuesta) => setDatos(respuesta))
        .catch((error) => console.log("Error:", error));
    } else {
      const productosFiltrados = dataBase.filter(
        (producto) => producto.categoria === idCategory
      );

      fetch(productosFiltrados, 200)
        .then((respuesta) => setDatos(respuesta))
        .catch((error) => console.log("Error:", error));
    }
  }, [idCategory]);

  return (
    <div className="containerCardItems">
      {datos.length === 0 ? (
        <ClipLoader color="#000000" />
      ) : (
        datos.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            imagen={item.imagen}
            nombre={item.nombre}
            descripcion={item.descripcion}
            stock={item.stock}
            precio={item.precio}
          />
        ))
      )}
    </div>
  );
};
