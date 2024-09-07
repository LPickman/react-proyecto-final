import React from "react";

export const fetch = (dataBase, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataBase);
      reject(new Error("Algo salió mal."));
    }, time);
  });
};
