import React from "react";
import Panier from "./SVG/Panier";
import { addToPanier } from "./store/reducer";
import { useDispatch, useSelector } from "react-redux";

export default function Card({ product }) {
  const dispatch = useDispatch();
  const payload = { idP: product.idP, quantite: 1, price: product.price };
  const dejaEnpanier = useSelector((state) => state.panier).find(
    (item) => item.idP === product.idP
  );

  return (
    <div className="column">
      <div className="img">
        <img src={product.src} alt="" />
        <button
          className={dejaEnpanier ? "btn disabled" : "btn"}
          onClick={() => {
            dispatch(addToPanier(payload));
          }}>
          {dejaEnpanier ? "Deja En" : "Add To"} Panier{" "}
          <i>
            <Panier />
          </i>
        </button>
        <p className="title">{product.price}$</p>
      </div>
      <div className="text">
        <p>{product.ProductName}</p>
        <div className="quntity">Stock :{product.stock}</div>
      </div>
    </div>
  );
}
